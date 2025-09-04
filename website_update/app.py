from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.secret_key = "your_super_secret_key"

# Database configuration
basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "messages.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# ---- Models ----
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    content = db.Column(db.Text, nullable=False)

# Home
@app.route("/")
def index():
    return render_template("index.html")

# Education
@app.route("/education")
def education():
    return render_template("education.html")

# Skills
@app.route("/skills")
def skills():
    return render_template("skills.html")

# Experience
@app.route("/experience")
def experience():
    return render_template("experience.html")

# Projects
@app.route("/projects")
def projects():
    return render_template("projects.html")

# Research
@app.route("/research")
def research():
    return render_template("research.html")



# Contact
@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/submit_message", methods=["POST"])
def submit_message():
    name = request.form.get("name")
    email = request.form.get("email")
    message_text = request.form.get("message")

    if name and email and message_text:
        new_message = Message(name=name, email=email, content=message_text)
        db.session.add(new_message)
        db.session.commit()
        flash("Your message has been sent!")
    else:
        flash("All fields are required.")

    return redirect(url_for("contact"))

# ---- Run App ----
if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Creates the database if it doesn't exist
    app.run(host="0.0.0.0", port=8000, debug=True)

