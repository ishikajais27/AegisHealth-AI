import subprocess
    """
    This Flask application defines routes for predicting diabetes and heart disease using Streamlit apps
    as subprocesses.
    :return: The Flask application has two routes defined:
    1. `/predict_diabetes`: This route accepts POST requests and runs a Streamlit app named `app1.py` as
    a subprocess with the input data passed as an argument. The output of the subprocess is returned as
    a JSON response.
    2. `/predict_heart_disease`: This route is similar to the first one but runs a different Streamlit
    app
    """

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/predict_diabetes', methods=['POST'])
def predict_diabetes():
    data = request.json
    # Run the Streamlit app as a subprocess and pass the input data
    result = subprocess.run(
        ['streamlit', 'run', 'app1.py', '--', str(data)],
        capture_output=True, text=True
    )
    return jsonify(result.stdout)

@app.route('/predict_heart_disease', methods=['POST'])
def predict_heart_disease():
    data = request.json
    result = subprocess.run(
        ['streamlit', 'run', 'app2.py', '--', str(data)],
        capture_output=True, text=True
    )
    return jsonify(result.stdout)

# Add similar routes for app3.py, app4.py, and app5.py

if __name__ == '__main__':
    app.run(debug=True)
