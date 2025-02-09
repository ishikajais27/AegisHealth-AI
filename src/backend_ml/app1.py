import os
import pickle

import numpy as np
import pandas as pd
import streamlit as st

# Debug: Print current working directory and file paths
print("Current working directory:", os.getcwd())
print("Model file path:", os.path.abspath('diabetes_model.pkl'))
print("Dataset file path:", os.path.abspath('diabetes.xlsx'))
print("HTML file path:", os.path.abspath('diabetes.html'))

# Load the model
try:
    model_path = os.path.join(os.path.dirname(__file__), 'diabetes_model.pkl')
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
except FileNotFoundError:
    st.error(f"Error: 'diabetes_model.pkl' file not found at: {model_path}")
    st.stop()

# Function to predict diabetes
def predict_diabetes(features):
    features = np.array(features).reshape(1, -1)
    prediction = model.predict(features)
    return prediction

# Streamlit app
def main():
    st.title("Diabetes Prediction App")
    st.write("Please enter the following details to predict diabetes:")

    # Input fields
    pregnancies = st.number_input("Number of Pregnancies", min_value=0, max_value=20, value=0)
    glucose = st.number_input("Glucose Level", min_value=0, max_value=200, value=0)
    blood_pressure = st.number_input("Blood Pressure (mm Hg)", min_value=0, max_value=150, value=0)
    skin_thickness = st.number_input("Skin Thickness (mm)", min_value=0, max_value=100, value=0)
    insulin = st.number_input("Insulin Level (mu U/ml)", min_value=0, max_value=900, value=0)
    bmi = st.number_input("BMI", min_value=0.0, max_value=70.0, value=0.0)
    diabetes_pedigree_function = st.number_input("Diabetes Pedigree Function", min_value=0.0, max_value=3.0, value=0.0)
    age = st.number_input("Age", min_value=0, max_value=120, value=0)

    # Predict button
    if st.button("Predict"):
        features = [pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_function, age]
        prediction = predict_diabetes(features)
        if prediction[0] == 1:
            st.error("The model predicts that the person has diabetes.")
        else:
            st.success("The model predicts that the person does not have diabetes.")

    # Display the dataset
    st.write("### Diabetes Dataset")
    try:
        dataset_path = os.path.join(os.path.dirname(__file__), 'diabetes.xlsx')
        df = pd.read_excel(dataset_path)
        st.write(df)
    except FileNotFoundError:
        st.error(f"Error: 'diabetes.xlsx' file not found at: {dataset_path}")

    # Display the HTML file
    st.write("### Diabetes Information")
    try:
        html_path = os.path.join(os.path.dirname(__file__), 'diabetes.html')
        with open(html_path, 'r') as file:
            html_content = file.read()
        st.components.v1.html(html_content, height=500)
    except FileNotFoundError:
        st.error(f"Error: 'diabetes.html' file not found at: {html_path}")

if __name__ == "__main__":
    main()