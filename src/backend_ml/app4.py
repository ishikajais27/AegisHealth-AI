import joblib
import numpy as np
import pandas as pd
import streamlit as st
from sklearn.preprocessing import StandardScaler

model = joblib.load('liver_disease_predictor.pkl')

def preprocess_input(data):
    
    data['Gender'] = data['Gender'].map({'Male': 0, 'Female': 1})
    
    
    scaler = StandardScaler()
    scaled_data = scaler.fit_transform(data)
    return scaled_data


def main():
    st.title("Liver Disease Predictor")
    st.write("Enter the patient's details to predict the likelihood of liver disease.")

    
    age = st.number_input("Age", min_value=0, max_value=100, value=30)
    gender = st.selectbox("Gender", ["Male", "Female"])
    total_bilirubin = st.number_input("Total Bilirubin", min_value=0.0, value=0.7)
    direct_bilirubin = st.number_input("Direct Bilirubin", min_value=0.0, value=0.1)
    alkaline_phosphotase = st.number_input("Alkaline Phosphotase", min_value=0, value=187)
    alamine_aminotransferase = st.number_input("Alamine Aminotransferase", min_value=0, value=16)
    aspartate_aminotransferase = st.number_input("Aspartate Aminotransferase", min_value=0, value=18)
    total_protiens = st.number_input("Total Protiens", min_value=0.0, value=6.8)
    albumin = st.number_input("Albumin", min_value=0.0, value=3.3)
    albumin_and_globulin_ratio = st.number_input("Albumin and Globulin Ratio", min_value=0.0, value=0.9)

   
    input_data = {
        'Age': age,
        'Gender': gender,
        'Total_Bilirubin': total_bilirubin,
        'Direct_Bilirubin': direct_bilirubin,
        'Alkaline_Phosphotase': alkaline_phosphotase,
        'Alamine_Aminotransferase': alamine_aminotransferase,
        'Aspartate_Aminotransferase': aspartate_aminotransferase,
        'Total_Protiens': total_protiens,
        'Albumin': albumin,
        'Albumin_and_Globulin_Ratio': albumin_and_globulin_ratio
    }

    
    input_df = pd.DataFrame([input_data])

    
    processed_data = preprocess_input(input_df)

   
    if st.button("Predict"):
        
        prediction = model.predict(processed_data)

        
        if prediction[0] == 1:
            st.error("Prediction: Liver Disease Detected")
        else:
            st.success("Prediction: No Liver Disease Detected")

if __name__ == "__main__":
    main()