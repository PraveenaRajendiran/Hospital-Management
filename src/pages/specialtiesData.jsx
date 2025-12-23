import neuroImg from '../images/neuro1.jpg';
import orthoimg from '../images/orthoo.jpg';
import gastroimg from '../images/gastro.jpeg';
import therapyimg from '../images/Therapy.jpeg';
import internalimg from '../images/internall.webp';
import lab from '../images/lab.jpeg';
import criticalimg from '../images/critical.jpeg';
import generalimg from '../images/general.webp';
import opthalimg from '../images/opthal.jpg';
import infect from '../images/infectious.webp';
import renalp from '../images/renal.jpg';
import plasticp from '../images/plastic.jpg';
import anas from '../images/anasthesia.webp';
import cardicp from '../images/cardiac.webp'
//doctor pics
import aarti from '../images/dr.aarti.jpeg';
import jane from '../images/dr.jane.jpeg';
import john from '../images/dr.john.jpeg';
import kavita from '../images/dr.kavita.jpeg';
import lisa from '../images/dr.lisa.jpeg';
import robert from '../images/dr.robert.jpeg';
import sarah from '../images/dr.sarah.jpeg';
import emily from '../images/dr.emily.jpeg';
import nikhila from '../images/dr.nikhila.jpeg';
import allen from '../images/dr.allen.jpeg';
import rachel from '../images/dr.rachel.jpeg';
import ramesh from '../images/dr.ramesh.jpeg';
import steven from '../images/dr.steven.jpeg';
import thomas from '../images/dr.thomas.jpeg';
import david from '../images/dr.david.jpeg';




const specialtiesData = [
  {
    title: "Neurology",
    shortDesc: "Expert care for neurological disorders and brain health.",
    moreDetail: "Our neurology department provides diagnosis and treatment for epilepsy, stroke, Parkinson’s, and neuromuscular disorders by highly experienced neurologists.",
    image: neuroImg,
    services: [
      "Epilepsy treatment",
      "Stroke rehabilitation",
      "Parkinson's disease management",
      "Neuromuscular disorder treatment"
    ],
    conditions: [
      "Epilepsy",
      "Stroke",
      "Parkinson’s disease",
      "Neuromuscular disorders"
    ],
    doctors: [
      {
        name: "Dr. John Doe",
        specialty: "Neurologist",
        image: john
      },
      {
        name: "Dr. Jane Smith",
        specialty: "Neurophysiologist",
        image: jane
      }
    ]
  },
  {
    title: "Orthopedics",
    shortDesc: "Advanced orthopedic care for bones and joints.",
    moreDetail: "We specialize in joint replacement, spine surgery, sports injuries, and fracture management with modern facilities and rehabilitation support.",
    image: orthoimg,
    services: [
      "Joint replacement",
      "Spine surgery",
      "Sports injury treatment",
      "Fracture management"
    ],
    conditions: [
      "Arthritis",
      "Sports injuries",
      "Fractures",
      "Spinal disorders"
    ],
    doctors: [
      {
        name: "Dr. Robert Lee",
        specialty: "Orthopedic Surgeon",
        image: robert
      }
    ]
  },
  {
    title: "Cardiac Sciences",
    shortDesc: "Comprehensive heart care and interventions.",
    moreDetail: "Our cardiac care includes diagnostics, angioplasty, bypass surgery, and heart failure management by experienced cardiologists and surgeons.",
    image: cardicp,
    services: [
      "ECG & Stress testing",
      "Angioplasty",
      "Bypass surgery",
      "Heart failure treatment"
    ],
    conditions: [
      "Coronary artery disease",
      "Heart failure",
      "Arrhythmia"
    ],
    doctors: [
      {
        name: "Dr. Ramesh Khanna",
        specialty: "Cardiologist",
        image: ramesh
      }
    ]
  },
  {
    title: "Renal Sciences",
    shortDesc: "Advanced nephrology and dialysis services.",
    moreDetail: "Specialized care for kidney disorders, dialysis support, and transplant preparation by a team of expert nephrologists.",
    image: renalp,
    services: [
      "Dialysis",
      "Chronic kidney disease management",
      "Renal biopsy",
      "Kidney transplant evaluation"
    ],
    conditions: [
      "Chronic kidney disease",
      "Acute renal failure",
      "Kidney infections"
    ],
    doctors: [
      {
        name: "Dr. Aarti Menon",
        specialty: "Nephrologist",
        image: aarti
      }
    ]
  },
  {
    title: "Plastic Surgery",
    shortDesc: "Aesthetic and reconstructive surgery services.",
    moreDetail: "Our plastic surgeons specialize in cosmetic surgery, reconstructive procedures, burn treatment, and scar revision with precision and care.",
    image: plasticp,
    services: [
      "Cosmetic surgery",
      "Burn treatment",
      "Scar revision",
      "Reconstructive procedures"
    ],
    conditions: [
      "Burns",
      "Congenital deformities",
      "Scars",
      "Facial injuries"
    ],
    doctors: [
      {
        name: "Dr. Nikhila Sinha",
        specialty: "Plastic Surgeon",
        image: nikhila
      }
    ]
  },
  {
    title: "Gastroenterology",
    shortDesc: "Comprehensive digestive system care.",
    moreDetail: "From endoscopy to liver transplantation, our team handles complex digestive, biliary, and liver diseases with minimally invasive technologies.",
    image: gastroimg,
    services: [
      "Endoscopy",
      "Liver transplantation",
      "Biliary disease management",
      "Digestive system surgery"
    ],
    conditions: [
      "Gastroesophageal reflux disease (GERD)",
      "Liver disease",
      "Irritable bowel syndrome (IBS)",
      "Biliary diseases"
    ],
    doctors: [
      {
        name: "Dr. Mark Allen",
        specialty: "Gastroenterologist",
        image: allen
      }
    ]
  },
  {
    title: "Ophthalmology",
    shortDesc: "Vision care and eye surgery expertise.",
    moreDetail: "We treat cataracts, glaucoma, retinal disorders, and offer LASIK and other eye surgeries using the latest ophthalmic tools.",
    image: opthalimg,
    services: [
      "Cataract surgery",
      "Glaucoma management",
      "LASIK eye surgery",
      "Retinal disease treatment"
    ],
    conditions: [
      "Cataracts",
      "Glaucoma",
      "Retinal disorders"
    ],
    doctors: [
      {
        name: "Dr. Lisa White",
        specialty: "Ophthalmologist",
        image:lisa
      }
    ]
  },
  
  {
    title: "Psychotherapy",
    shortDesc: "Mental health support and therapy services.",
    moreDetail: "Our psychotherapists help with depression, anxiety, trauma, and behavioral therapy for all age groups with a personalized treatment approach.",
    image: therapyimg,
    services: [
      "Cognitive Behavioral Therapy (CBT)",
      "Trauma therapy",
      "Anxiety treatment",
      "Family therapy"
    ],
    conditions: [
      "Depression",
      "Anxiety",
      "Trauma",
      "Behavioral disorders"
    ],
    doctors: [
      {
        name: "Dr. Emily White",
        specialty: "Psychotherapist",
        image: emily
      }
    ]
  },
  {
    title: "Critical Care",
    shortDesc: "24/7 ICU and emergency medical services.",
    moreDetail: "Our critical care team ensures constant monitoring and life-saving interventions for patients with severe illness, trauma, and post-surgical care.",
    image: criticalimg,
    services: [
      "ICU care",
      "Emergency medical services",
      "Trauma care",
      "Post-surgical intensive care"
    ],
    conditions: [
      "Severe trauma",
      "Post-surgical complications",
      "Acute respiratory distress syndrome (ARDS)"
    ],
    doctors: [
      {
        name: "Dr. David Clark",
        specialty: "Critical Care Specialist",
        image: david
      }
    ]
  },
  {
    title: "Infectious Diseases",
    shortDesc: "Specialized care for contagious diseases.",
    moreDetail: "Expert evaluation and management of infections including tuberculosis, HIV, viral fevers, and tropical diseases.",
    image: infect,
    services: [
      "Tuberculosis treatment",
      "HIV care",
      "Viral fever management",
      "Tropical disease management"
    ],
    conditions: [
      "Tuberculosis",
      "HIV",
      "Viral infections",
      "Tropical diseases"
    ],
    doctors: [
      {
        name: "Dr. Thomas Gray",
        specialty: "Infectious Disease Specialist",
        image: thomas
      }
    ]
  },
 
  {
    title: "Anesthesia",
    shortDesc: "Pain-free surgeries with safe anesthesia practices.",
    moreDetail: "Our anesthesiologists ensure patient safety and comfort during surgical procedures with general, regional, and local anesthesia techniques.",
    image: anas,
    services: [
      "General anesthesia",
      "Regional anesthesia",
      "Sedation",
      "Pre-operative assessment"
    ],
    conditions: [
      "Pre-surgical pain management",
      "Anesthetic complications"
    ],
    doctors: [
      {
        name: "Dr. Kavita Reddy",
        specialty: "Anesthesiologist",
        image:kavita
      }
    ]
  },
 
  {
    title: "General Surgery",
    shortDesc: "Safe surgical procedures with minimal invasion.",
    moreDetail: "We perform a range of surgeries including laparoscopic, gastrointestinal, and hernia surgeries with high safety and hygiene standards.",
    image: generalimg,
    services: [
      "Laparoscopic surgery",
      "Gastrointestinal surgery",
      "Hernia repair surgery"
    ],
    conditions: [
      "Hernias",
      "Appendicitis",
      "Gastrointestinal diseases"
    ],
    doctors: [
      {
        name: "Dr. Venpa ",
        specialty: "General Surgeon",
        image: rachel
      }
    ]
  },
  
  {
    title: "Internal Medicine",
    shortDesc: "General and chronic condition care for adults.",
    moreDetail: "Our internal medicine doctors provide preventive care, diagnosis, and long-term management of conditions such as diabetes, hypertension, and infections.",
    image: internalimg,
    services: [
      "Preventive care",
      "Chronic disease management",
      "Diabetes care",
      "Hypertension management"
    ],
    conditions: [
      "Diabetes",
      "Hypertension",
      "Infections",
      "Chronic respiratory diseases"
    ],
    doctors: [
      {
        name: "Dr. Sarah Green",
        specialty: "Internal Medicine Specialist",
        image: sarah
      }
    ]
  },
  {
    title: "Laboratory Services",
    shortDesc: "Accurate diagnostic and pathology support.",
    moreDetail: "Our labs are equipped with advanced equipment for timely diagnosis in hematology, biochemistry, microbiology, and histopathology.",
    image: lab,
    services: [
      "Hematology testing",
      "Biochemistry testing",
      "Microbiology testing",
      "Histopathology services"
    ],
    conditions: [
      "Blood disorders",
      "Infectious diseases",
      "Cancer diagnosis"
    ],
    doctors: [
      {
        name: "Dr. Steven Brown",
        specialty: "Pathologist",
        image: steven
      }
    ]
  },
  
 
];

export default specialtiesData;
