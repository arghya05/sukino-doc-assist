export type Sample = { id: string; label: string; filename: string; content: string };

export const SAMPLES: Sample[] = [
  {
    id: "metformin",
    label: "Metformin prescription",
    filename: "metformin-prescription.txt",
    content: `SUKINO HEALTHCARE — OUTPATIENT PRESCRIPTION
Patient: Ramesh Iyer, 58 M   |   UHID: SK-44192
Date: 12 March 2026        |   Consultant: Dr. A. Nair, MD (Gen. Med.)

Diagnosis: Type 2 Diabetes Mellitus (uncontrolled), HbA1c 8.4%

Rx
1. Tab. Metformin SR 500 mg — 1 tablet ORALLY, TWICE DAILY, after food
   (morning and night). Duration: 30 days.
2. Tab. Glimepiride 1 mg — 1 tablet ORALLY, ONCE DAILY before breakfast.
   Duration: 30 days.

Nursing notes:
- Administer after meals to reduce GI upset.
- Monitor fasting and post-prandial blood glucose twice weekly.
- Withhold Metformin 48 hours before any contrast imaging study.
- Watch for signs of lactic acidosis: muscle pain, breathlessness, vomiting.

Review after 4 weeks with repeat FBS/PPBS and renal function tests.`,
  },
  {
    id: "warfarin",
    label: "Warfarin prescription",
    filename: "warfarin-prescription.txt",
    content: `SUKINO HEALTHCARE — ANTICOAGULATION CLINIC PRESCRIPTION
Patient: Fatima Sheikh, 66 F  |  UHID: SK-51877
Date: 5 March 2026          |  Consultant: Dr. P. Menon, DM (Cardiology)

Indication: Atrial fibrillation, stroke prophylaxis. Target INR 2.0 - 3.0.
Latest INR: 2.4 (03 March 2026)

Rx
1. Tab. Warfarin 3 mg — ONCE DAILY at 6:00 PM, except Sunday.
2. Tab. Warfarin 2 mg — ONCE DAILY at 6:00 PM on SUNDAY only.
   Duration: continue until reviewed.

Nursing notes:
- Check INR every 2 weeks; report INR > 3.5 or < 1.8 to the physician.
- Avoid NSAIDs and IM injections. Paracetamol is preferred for pain.
- Counsel patient on consistent vitamin-K intake (leafy greens).
- Report bleeding gums, black stools, or unusual bruising immediately.`,
  },
  {
    id: "discharge",
    label: "Discharge summary",
    filename: "discharge-summary.txt",
    content: `SUKINO HEALTHCARE — DISCHARGE SUMMARY
Patient: Anil Kumar, 72 M   |  UHID: SK-38210
Admitted: 26 Feb 2026       |  Discharged: 4 March 2026
Ward: Transition Care Unit  |  Consultant: Dr. S. Rao, MD

Reason for admission: Community-acquired pneumonia with acute exacerbation
of COPD.

Hospital course:
Treated with IV Piperacillin-Tazobactam 4.5 g Q8H for 5 days, nebulised
Ipratropium + Levosalbutamol Q6H, and oral Prednisolone 30 mg OD tapered
over 5 days. Oxygen saturation improved from 88% on room air to 95%.
Chest physiotherapy twice daily. Mobilised with walker from day 4.

Discharge medications:
1. Tab. Cefuroxime 500 mg — twice daily x 5 days
2. Nebulisation Ipratropium + Levosalbutamol — three times daily x 7 days
3. Tab. Pantoprazole 40 mg — once daily before breakfast x 7 days

Care plan at home:
- Monitor SpO2 twice daily; report readings below 92%.
- Continue breathing exercises 10 minutes, three times a day.
- Soft high-protein diet; 1.5 L fluid per day.
- Follow-up in pulmonology OPD on 11 March 2026.`,
  },
  {
    id: "amlodipine",
    label: "Hypertension prescription",
    filename: "amlodipine-prescription.txt",
    content: `SUKINO HEALTHCARE — CARDIOLOGY OPD PRESCRIPTION
Patient: Suresh Patil, 61 M  |  UHID: SK-60214
Date: 18 March 2026          |  Consultant: Dr. K. Deshpande, MD, DM (Cardio)

Diagnosis: Essential hypertension (Stage 2). Clinic BP 168/98 mmHg.

Rx
1. Tab. Amlodipine 5 mg — 1 tablet ORALLY, ONCE DAILY in the morning. 30 days.
2. Tab. Telmisartan 40 mg — 1 tablet ORALLY, ONCE DAILY at night. 30 days.
3. Tab. Atorvastatin 10 mg — 1 tablet ORALLY, ONCE DAILY at bedtime. 30 days.

Nursing notes:
- Record BP twice daily (morning before medication, evening) in the home chart.
- Watch for ankle oedema and dizziness on standing (postural hypotension).
- Salt restriction < 5 g/day; brisk walk 30 minutes, 5 days a week.
Review after 4 weeks with lipid profile and serum creatinine.`,
  },
  {
    id: "insulin",
    label: "Insulin chart",
    filename: "insulin-prescription.txt",
    content: `SUKINO HEALTHCARE — INSULIN PRESCRIPTION & SLIDING SCALE
Patient: Lakshmi Narayanan, 54 F  |  UHID: SK-47765
Date: 20 March 2026               |  Consultant: Dr. R. Bhat, MD (Endocrinology)

Diagnosis: Type 2 Diabetes Mellitus with poor oral control, HbA1c 10.1%

Rx
1. Inj. Human Mixtard 30/70 — 14 units SUBCUTANEOUS, 30 min before breakfast.
2. Inj. Human Mixtard 30/70 — 8 units SUBCUTANEOUS, 30 min before dinner.
3. Tab. Metformin 500 mg — twice daily after food.

Correctional (sliding) scale, pre-meal capillary glucose:
  < 70 mg/dL   : withhold, give 15 g oral glucose, recheck in 15 min
  180-250      : + 2 units regular insulin
  251-350      : + 4 units regular insulin
  > 350        : + 6 units and inform physician

Nursing notes:
- Rotate injection sites (abdomen, thigh, upper arm); document site each time.
- Store opened pens below 30 degrees C, discard after 28 days.
- Educate on hypoglycaemia: sweating, tremor, confusion — treat immediately.`,
  },
  {
    id: "antibiotic",
    label: "Antibiotic course (UTI)",
    filename: "uti-antibiotic-prescription.txt",
    content: `SUKINO HEALTHCARE — OUTPATIENT PRESCRIPTION
Patient: Meera Joshi, 34 F   |  UHID: SK-58003
Date: 9 March 2026           |  Consultant: Dr. N. Verma, MBBS, MD

Diagnosis: Acute uncomplicated urinary tract infection. Urine C/S: E. coli,
sensitive to Nitrofurantoin.

Rx
1. Cap. Nitrofurantoin 100 mg — 1 capsule ORALLY, TWICE DAILY after food, 5 days.
2. Tab. Paracetamol 500 mg — 1 tablet SOS for fever/pain, max 3 per day.
3. Syp. Potassium citrate 10 mL in a glass of water, twice daily, 5 days.

Nursing notes:
- Encourage 2.5 - 3 L oral fluids per day unless contraindicated.
- Complete the full antibiotic course even if symptoms settle early.
- Urine may turn dark yellow/brown — harmless, reassure the patient.
- Return immediately if fever > 101 F, flank pain, or vomiting develops.`,
  },
  {
    id: "paediatric",
    label: "Paediatric prescription",
    filename: "paediatric-prescription.txt",
    content: `SUKINO HEALTHCARE — PAEDIATRIC OPD PRESCRIPTION
Patient: Aarav Gupta, 4 years M, weight 16 kg  |  UHID: SK-61190
Date: 22 March 2026  |  Consultant: Dr. S. Krishnan, MD (Paediatrics)

Diagnosis: Acute follicular tonsillitis with fever.

Rx (weight-based dosing, 16 kg)
1. Syp. Amoxicillin + Clavulanate 228.5 mg/5 mL — 5 mL ORALLY, THRICE DAILY
   after food, 5 days (approx. 40 mg/kg/day of amoxicillin).
2. Syp. Paracetamol 250 mg/5 mL — 5 mL SOS if temperature > 100.4 F,
   maximum 4 doses in 24 hours (15 mg/kg/dose).
3. Warm saline gargles / steam inhalation twice daily.

Nursing notes:
- Shake the suspension well; refrigerate after reconstitution, discard in 7 days.
- Watch for rash or loose stools with the antibiotic.
- Maintain hydration with ORS if oral intake reduces.
Review after 3 days or earlier if fever persists beyond 48 hours.`,
  },
  {
    id: "painmgmt",
    label: "Post-op pain plan",
    filename: "post-op-pain-prescription.txt",
    content: `SUKINO HEALTHCARE — POST-OPERATIVE ORDERS
Patient: Joseph Mathew, 68 M  |  UHID: SK-49221
Surgery: Right total knee replacement, 15 March 2026
Consultant: Dr. V. Reddy, MS (Ortho)

Rx
1. Tab. Paracetamol 1 g — ORALLY, every 8 hours, fixed, 5 days.
2. Tab. Etoricoxib 90 mg — ORALLY, ONCE DAILY after food, 3 days.
3. Tab. Pantoprazole 40 mg — ORALLY, ONCE DAILY before breakfast, 7 days.
4. Inj. Enoxaparin 40 mg — SUBCUTANEOUS, ONCE DAILY at 8 PM, 10 days
   (DVT prophylaxis).
5. Tab. Tramadol 50 mg — SOS for breakthrough pain, max twice daily.

Nursing notes:
- Score pain 0-10 every 4 hours; escalate if score > 6 after fixed analgesia.
- Ice pack over the knee 15 minutes, four times a day.
- Ankle pumps hourly while awake; assisted walking from post-op day 1.
- Inspect dressing daily for soakage; report calf pain or swelling.`,
  },
  {
    id: "thyroid",
    label: "Thyroid prescription",
    filename: "thyroid-prescription.txt",
    content: `SUKINO HEALTHCARE — ENDOCRINOLOGY OPD PRESCRIPTION
Patient: Priya Sharma, 41 F  |  UHID: SK-55418
Date: 11 March 2026          |  Consultant: Dr. R. Bhat, MD (Endocrinology)

Diagnosis: Primary hypothyroidism. TSH 11.6 mIU/L, Free T4 low-normal.

Rx
1. Tab. Levothyroxine 75 mcg — 1 tablet ORALLY, ONCE DAILY, empty stomach,
   30-60 minutes before breakfast. Duration: 8 weeks.
2. Tab. Vitamin D3 60,000 IU — ONCE WEEKLY on Sunday, 8 weeks.

Nursing notes:
- Do not give with calcium, iron, or antacids — separate by at least 4 hours.
- Same time every morning; do not double a missed dose.
- Report palpitations, tremor, or weight loss (over-replacement).
Repeat TSH after 8 weeks before dose revision.`,
  },
  {
    id: "discharge-stroke",
    label: "Discharge — stroke rehab",
    filename: "discharge-summary-stroke.txt",
    content: `SUKINO HEALTHCARE — DISCHARGE SUMMARY (TRANSITION CARE)
Patient: Govind Rao, 69 M   |  UHID: SK-40873
Admitted: 20 Feb 2026       |  Discharged: 14 March 2026
Unit: Neuro Rehabilitation  |  Consultant: Dr. M. Iyer, DM (Neurology)

Diagnosis: Left middle cerebral artery infarct with right hemiparesis and
mild expressive aphasia.

Hospital course:
Thrombolysed at the referring hospital within window, transferred for
rehabilitation. Received physiotherapy twice daily, occupational therapy and
speech therapy five days a week. Power improved from 2/5 to 4/5 in the right
upper limb and 4+/5 in the right lower limb. Swallow assessment cleared for
soft diet on day 9. No aspiration episodes.

Discharge medications:
1. Tab. Aspirin 75 mg — once daily after lunch, continue.
2. Tab. Clopidogrel 75 mg — once daily after lunch x 21 days, then stop.
3. Tab. Atorvastatin 40 mg — once daily at bedtime, continue.
4. Tab. Telmisartan 40 mg — once daily in the morning.

Care plan at home:
- Home physiotherapy 45 minutes daily; speech therapy twice weekly.
- Fall precautions: grab bars in bathroom, non-slip footwear, night light.
- Soft diet, upright at 90 degrees during meals and 30 minutes after.
- BP log twice daily. Follow-up neurology OPD on 28 March 2026.`,
  },
  {
    id: "discharge-cardiac",
    label: "Discharge — post-CABG",
    filename: "discharge-summary-cabg.txt",
    content: `SUKINO HEALTHCARE — DISCHARGE SUMMARY
Patient: Harpreet Singh, 58 M  |  UHID: SK-52640
Admitted: 1 March 2026         |  Discharged: 12 March 2026
Unit: Cardiac Step-down        |  Consultant: Dr. A. Sundaram, MCh (CTVS)

Procedure: CABG x 3 (LIMA to LAD, SVG to OM and PDA) on 3 March 2026.

Hospital course:
Extubated 6 hours post-op. ICU stay 2 days. Drains removed on day 3.
Sternal wound healthy, no discharge. Ambulatory 100 m independently at
discharge. Echo before discharge: LVEF 48%, no pericardial effusion.

Discharge medications:
1. Tab. Aspirin 75 mg — once daily after lunch.
2. Tab. Clopidogrel 75 mg — once daily after lunch x 12 months.
3. Tab. Metoprolol XL 25 mg — once daily in the morning.
4. Tab. Atorvastatin 40 mg — once daily at bedtime.
5. Tab. Pantoprazole 40 mg — once daily before breakfast x 1 month.

Care plan at home:
- Sternal precautions for 6 weeks: no lifting above 5 kg, no pushing/pulling,
  hug a pillow while coughing.
- Incentive spirometry 10 times, every 2 hours while awake.
- Daily weight and temperature chart; report fever or wound discharge.
- Cardiac rehab walking programme starting 10 minutes twice daily.
- Follow-up CTVS OPD on 26 March 2026 with ECG.`,
  },
  {
    id: "discharge-maternity",
    label: "Discharge — post-delivery",
    filename: "discharge-summary-maternity.txt",
    content: `SUKINO HEALTHCARE — DISCHARGE SUMMARY (OBSTETRICS)
Patient: Sneha Kulkarni, 29 F  |  UHID: SK-59904
Admitted: 16 March 2026        |  Discharged: 19 March 2026
Consultant: Dr. L. Fernandes, MS (OBG)

Diagnosis: G2P1L1, 39 weeks, delivered by lower segment caesarean section on
17 March 2026. Live male baby, 3.1 kg, APGAR 9/10.

Hospital course:
Uneventful LSCS under spinal anaesthesia. Blood loss approx. 550 mL.
Post-op Hb 10.4 g/dL. Wound healthy, sutures intact. Lactation established
by day 2. Baby examined by paediatrician, normal, BCG/OPV/Hep-B given.

Discharge medications (mother):
1. Tab. Cefixime 200 mg — twice daily x 5 days.
2. Tab. Paracetamol 500 mg — SOS for pain, max 3 per day.
3. Tab. Ferrous ascorbate + Folic acid — once daily x 3 months.
4. Tab. Calcium carbonate 500 mg + Vit D3 — twice daily x 3 months.

Care plan at home:
- Keep the incision clean and dry; report redness, gaping, or discharge.
- Exclusive breastfeeding on demand; no water or honey for the baby.
- Report heavy bleeding (more than one pad per hour), fever, or calf pain.
- Suture review on 24 March 2026. Baby immunisation at 6 weeks.`,
  },
  {
    id: "discharge-dialysis",
    label: "Discharge — CKD/dialysis",
    filename: "discharge-summary-ckd.txt",
    content: `SUKINO HEALTHCARE — DISCHARGE SUMMARY
Patient: Abdul Rahman, 63 M  |  UHID: SK-46318
Admitted: 5 March 2026       |  Discharged: 13 March 2026
Unit: Nephrology             |  Consultant: Dr. T. Balakrishnan, DM (Nephro)

Diagnosis: Chronic kidney disease stage 5 on maintenance haemodialysis, with
fluid overload and anaemia. Serum creatinine 8.2 mg/dL, Hb 8.1 g/dL.

Hospital course:
Three sessions of haemodialysis via right internal jugular catheter with
ultrafiltration of 2.5 L per session. Breathlessness resolved. Two units
packed red cells transfused; post-transfusion Hb 9.8 g/dL. AV fistula
created on the left forearm on 10 March, thrill present at discharge.

Discharge medications:
1. Tab. Torsemide 20 mg — once daily in the morning.
2. Tab. Sevelamer 400 mg — with each meal.
3. Inj. Erythropoietin 4000 IU — subcutaneous, twice weekly.
4. Tab. Calcitriol 0.25 mcg — once daily.

Care plan at home:
- Haemodialysis twice weekly (Tuesday, Friday) at the Sukino dialysis unit.
- Fluid restriction 1 L/day; daily weight chart, report gain > 1.5 kg/day.
- Low potassium diet: avoid banana, coconut water, tomato, citrus.
- Protect the fistula arm: no BP cuff, no blood sampling, no tight clothing.
- Nephrology review on 20 March 2026 with renal function and electrolytes.`,
  },
];
