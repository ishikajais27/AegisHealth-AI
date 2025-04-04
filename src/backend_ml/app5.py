import pickle

import numpy as np
import streamlit as st

model = pickle.load(open("breast_cancer_model.pkl", "rb"))

st.title("Breast Cancer Prediction")

st.header("Enter the features for prediction:")

radius_mean = st.number_input("Radius Mean", min_value=0.0, format="%.2f")
texture_mean = st.number_input("Texture Mean", min_value=0.0, format="%.2f")
perimeter_mean = st.number_input("Perimeter Mean", min_value=0.0, format="%.2f")
area_mean = st.number_input("Area Mean", min_value=0.0, format="%.2f")
smoothness_mean = st.number_input("Smoothness Mean", min_value=0.0, format="%.2f")
compactness_mean = st.number_input("Compactness Mean", min_value=0.0, format="%.2f")
concavity_mean = st.number_input("Concavity Mean", min_value=0.0, format="%.2f")
concave_points_mean = st.number_input("Concave Points Mean", min_value=0.0, format="%.2f")
symmetry_mean = st.number_input("Symmetry Mean", min_value=0.0, format="%.2f")
fractal_dimension_mean = st.number_input("Fractal Dimension Mean", min_value=0.0, format="%.2f")

if st.button("Predict"):
    
    input_data = np.array([radius_mean, texture_mean, perimeter_mean, area_mean, smoothness_mean,
                           compactness_mean, concavity_mean, concave_points_mean, symmetry_mean,
                           fractal_dimension_mean]).reshape(1, -1)
    
    
    prediction = model.predict(input_data)
    
    
    result = "Malignant" if prediction[0] == 1 else "Benign"
    
    
    st.success(f"The prediction is: {result}")