from app.database import db

class Drug(db.Model):
    number = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(80), nullable=False, unique=True)
    description = db.Column(db.String(120), unique=True, nullable=False)
    sellingprice = db.Column(db.Integer, nullable=False)
    selling = db.Column(db.String(80), nullable=False)
    descriptionselling = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<User {self.number}>'

class Patient(db.Model):
    reg_no = db.Column(db.String, primary_key=True)
    facility = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    dob = db.Column(db.String(50), nullable=False)
    sex = db.Column(db.String(10), nullable=False)
    phone = db.Column(db.String(13), nullable=False)
    village = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Item {self.reg_no}>'
    
class ServedPatient(db.Model):
    recpt_no = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.String(80), nullable=False)
    cashier = db.Column(db.String(200), nullable=False)
    client_no = db.Column(db.String, nullable=False)
    item = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    unit_price = db.Column(db.Integer, nullable=False)
    total_price = db.Column(db.Integer, nullable=False)
    valid_days = db.Column(db.String(50), nullable=False)
    presc_date = db.Column(db.String(50), nullable=False)
    visit_reason = db.Column(db.String(80), default="Null")
    rating_crp = db.Column(db.String(80), nullable=True)
    days_since_visit = db.Column(db.Integer, nullable=True)

    def __repr__(self):
        return f'<Item {self.reg_no}>'
