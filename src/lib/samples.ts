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
];
