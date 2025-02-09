import pickle

import numpy as np
import streamlit as st

# Load the model
model = pickle.load(open('heart_disease_predictor.pkl', 'rb'))

# Streamlit app
st.title("Heart Disease Predictor")
st.header("Enter Patient Details")

# Input fields
age = st.number_input("Age", min_value=0, max_value=120, value=50)
sex = st.selectbox("Sex", options=[("Male", 1), ("Female", 0)], format_func=lambda x: x[0])[1]
cp = st.selectbox("Chest Pain Type", options=[(0, "Typical Angina"), (1, "Atypical Angina"), (2, "Non-anginal Pain"), (3, "Asymptomatic")], format_func=lambda x: x[1])[0]
trtbps = st.number_input("Resting Blood Pressure (mm Hg)", min_value=0, max_value=300, value=120)
chol = st.number_input("Cholesterol (mg/dl)", min_value=0, max_value=600, value=200)
fbs = st.selectbox("Fasting Blood Sugar > 120 mg/dl", options=[("True", 1), ("False", 0)], format_func=lambda x: x[0])[1]
restecg = st.selectbox("Resting ECG Results", options=[(0, "Normal"), (1, "ST-T Wave Abnormality"), (2, "Left Ventricular Hypertrophy")], format_func=lambda x: x[1])[0]
thalachh = st.number_input("Maximum Heart Rate Achieved", min_value=0, max_value=300, value=150)
exng = st.selectbox("Exercise Induced Angina", options=[("Yes", 1), ("No", 0)], format_func=lambda x: x[0])[1]
oldpeak = st.number_input("ST Depression Induced by Exercise", min_value=0.0, max_value=10.0, value=0.0, step=0.1)
slp = st.selectbox("Slope of the Peak Exercise ST Segment", options=[(0, "Upsloping"), (1, "Flat"), (2, "Downsloping")], format_func=lambda x: x[1])[0]
caa = st.selectbox("Number of Major Vessels", options=[0, 1, 2, 3])
thall = st.selectbox("Thalassemia", options=[0, 1, 2, 3])

# Predict button
if st.button("Predict"):
    # Prepare input data
    input_data = np.array([age, sex, cp, trtbps, chol, fbs, restecg, thalachh, exng, oldpeak, slp, caa, thall]).reshape(1, -1)
    
    # Apply log transformation to specific features
    input_data[0][3] = np.log(input_data[0][3])  # trtbps
    input_data[0][4] = np.log(input_data[0][4])  # chol
    input_data[0][7] = np.log(input_data[0][7])  # thalachh
    
    # Make prediction
    prediction = model.predict(input_data)
    
    # Display prediction result
    if prediction[0] == 1:
        st.error("Prediction: Heart Disease")
    else:
        st.success("Prediction: No Heart Disease")