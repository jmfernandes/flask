########################################
#
# hello.py
#
# Description:
#
#
# Author: Josh Fernandes
#
# Created: Oct 10, 2017
#
# Updated:
#
#
########################################
from flask import Flask,render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')
