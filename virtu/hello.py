from flask_cors import CORS, cross_origin
from flask import Flask, jsonify
from parse_file import print_values


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/", methods=["GET"])
@cross_origin(origin="*", allow_headers=["Content-Type"])
def print_data():
    return jsonify(print_values())
