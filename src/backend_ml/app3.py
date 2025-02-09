import pickle

import pandas as pd
import streamlit as st

with open('kidney_disease_predictor.pkl', 'rb') as file:
    model = pickle.load(file)


st.title("Kidney Disease Predictor")

st.header("Enter Patient Details")


age = st.number_input("Age", min_value=0, max_value=120, value=50)
blood_pressure = st.number_input("Blood Pressure", min_value=0, max_value=300, value=80)
specific_gravity = st.number_input("Specific Gravity", min_value=1.000, max_value=1.050, value=1.020, step=0.001)
albumin = st.number_input("Albumin", min_value=0, max_value=5, value=0)
sugar = st.number_input("Sugar", min_value=0, max_value=5, value=0)
red_blood_cells = st.selectbox("Red Blood Cells (0=normal, 1=abnormal)", [0, 1])
pus_cell = st.selectbox("Pus Cell (0=normal, 1=abnormal)", [0, 1])
pus_cell_clumps = st.selectbox("Pus Cell Clumps (0=not present, 1=present)", [0, 1])
bacteria = st.selectbox("Bacteria (0=not present, 1=present)", [0, 1])
blood_glucose_random = st.number_input("Blood Glucose Random", min_value=0, max_value=500, value=100)
blood_urea = st.number_input("Blood Urea", min_value=0, max_value=500, value=30)
serum_creatinine = st.number_input("Serum Creatinine", min_value=0.0, max_value=20.0, value=1.0, step=0.1)
sodium = st.number_input("Sodium", min_value=0, max_value=200, value=140)
potassium = st.number_input("Potassium", min_value=0.0, max_value=10.0, value=4.0, step=0.1)
haemoglobin = st.number_input("Haemoglobin", min_value=0.0, max_value=20.0, value=12.0, step=0.1)
packed_cell_volume = st.number_input("Packed Cell Volume", min_value=0, max_value=100, value=40)
white_blood_cell_count = st.number_input("White Blood Cell Count", min_value=0, max_value=20000, value=8000)
red_blood_cell_count = st.number_input("Red Blood Cell Count", min_value=0.0, max_value=10.0, value=5.0, step=0.1)
hypertension = st.selectbox("Hypertension (0=no, 1=yes)", [0, 1])
diabetes_mellitus = st.selectbox("Diabetes Mellitus (0=no, 1=yes)", [0, 1])
coronary_artery_disease = st.selectbox("Coronary Artery Disease (0=no, 1=yes)", [0, 1])
appetite = st.selectbox("Appetite (0=good, 1=poor)", [0, 1])
peda_edema = st.selectbox("Pedal Edema (0=no, 1=yes)", [0, 1])
aanemia = st.selectbox("Anemia (0=no, 1=yes)", [0, 1])

user_input = {
    'age': age,
    'blood_pressure': blood_pressure,
    'specific_gravity': specific_gravity,
    'albumin': albumin,
    'sugar': sugar,
    'red_blood_cells': red_blood_cells,
    'pus_cell': pus_cell,
    'pus_cell_clumps': pus_cell_clumps,
    'bacteria': bacteria,
    'blood_glucose_random': blood_glucose_random,
    'blood_urea': blood_urea,
    'serum_creatinine': serum_creatinine,
    'sodium': sodium,
    'potassium': potassium,
    'haemoglobin': haemoglobin,
    'packed_cell_volume': packed_cell_volume,
    'white_blood_cell_count': white_blood_cell_count,
    'red_blood_cell_count': red_blood_cell_count,
    'hypertension': hypertension,
    'diabetes_mellitus': diabetes_mellitus,
    'coronary_artery_disease': coronary_artery_disease,
    'appetite': appetite,
    'peda_edema': peda_edema,
    'aanemia': aanemia
}

input_df = pd.DataFrame([user_input])

st.subheader("Patient Data")
st.write(input_df)

if st.button("Predict"):
    
    prediction = model.predict(input_df)
    prediction_proba = model.predict_proba(input_df)

    
    st.subheader("Prediction Result")
    if prediction[0] == 0:
        st.error("Positive for Kidney Disease")
    else:
        st.success("Negative for Kidney Disease")

    
    st.write(f"Probability of Kidney Disease: {prediction_proba[0][0]:.2f}")
    st.write(f"Probability of No Kidney Disease: {prediction_proba[0][1]:.2f}")