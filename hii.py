from flask import Flask, render_template, request
import os
import random
app = Flask(__name__)

@app.route(" /")
def index():
    