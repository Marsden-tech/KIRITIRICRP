from flask import Flask
from app.database import db
from flask_migrate import Migrate
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize SQLAlchemy
    db.init_app(app)

    # Import and register routes
    with app.app_context():
        from app.routes import api
        db.create_all()  # Create database tables
        api.init_app(app)

    migrate.init_app(app, db)
    return app
