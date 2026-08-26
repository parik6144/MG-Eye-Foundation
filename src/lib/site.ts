export const SITE = {
  name: "M G Eye Foundation",
  phone: "8409001008",
  phoneDisplay: "+91 84090 01008",
  phoneHref: "tel:+918409001008",
  whatsapp: "https://wa.me/918409001008",
  email: "mgeyefoundation@gmail.com",
  emailHref: "mailto:mgeyefoundation@gmail.com",
  hours: "Monday–Saturday: 10:00 a.m.–6:00 p.m.",
  hoursNote: "For immediate assistance, please call +91 84090 01008 (Monday–Saturday, 10:00 a.m.–6:00 p.m.).",
  sunday: "Sunday: Closed",
  address: "Plot No. 121, Durga Puja Maidan, Near Vani Vidya Mandir School, Bara Gamharia",
  city: "Jamshedpur, Jharkhand",
  cashless: false,
  pmjay: true,
} as const;

export const COPY = {
  headline: "Better Vision, Better Tomorrow",
  intro:
    "MG Eye Foundation provides comprehensive ophthalmic care, including the treatment of cataract, retinal disease, glaucoma, and squint, together with dedicated pediatric eye services. All diagnostic scans and clinical treatments are performed on site by our specialists, who take care to explain each diagnosis and treatment plan in clear, accessible language. Based in Bara Gamharia, we have served the community for more than fifteen years.",
  cta: "Schedule a Consultation",
  ctaNote: "Appointments can be arranged promptly and with minimal formality.",
  callLabel: "For immediate assistance, please call",
  aboutTitle: "Our Commitment to Patient Care",
  aboutP1:
    "MG Eye Foundation is an eye care hospital situated in Bara Gamharia, dedicated to delivering thorough diagnosis, transparent communication, and effective treatment. Every diagnostic scan is conducted within our facility, and each patient is given a clear explanation of their condition and the recommended course of treatment before proceeding.",
  aboutP2:
    "Our clinical services encompass cataract surgery, retinal injection and laser therapy, glaucoma management, corneal and dry-eye treatment, pediatric eye examinations, squint correction, and the treatment of ocular injuries, including those sustained in nearby industrial settings.",
  mission:
    "Our mission is to diagnose and treat ophthalmic conditions with clinical precision while ensuring that every patient understands their diagnosis and treatment options. Our services include cataract surgery, retinal injection and laser therapy, glaucoma management, treatment of ocular injuries, pediatric eye examinations, and squint surgery. All diagnostic scans are performed on the day of consultation, and the associated costs are communicated to patients in advance of treatment. Cashless facilities are not currently available.",
  missionTags: ["On-site same-day scanning", "Seven specialised services", "Structured post-operative follow-up"],
  vision:
    "Our vision is to remain a trusted, accessible eye care institution for the communities we serve. Over fifteen years, we have treated more than 75,000 patients. We believe that a child requiring treatment for squint should not need to travel to a distant facility, and that an individual injured while at work in Adityapur should be able to receive prompt care nearby. MG Eye Foundation is located at Plot No. 121, Bara Gamharia, and is open Monday to Saturday, 10:00 a.m. to 6:00 p.m.",
  visionTags: ["75,000+ patients treated", "Daily pediatric eye examinations", "Dedicated care for ocular injuries"],
  whyIntro:
    "Our approach extends beyond scheduling appointments and performing procedures. We listen carefully to each patient, present diagnostic findings clearly, administer treatment with attentiveness, and provide guidance on follow-up care.",
  patientEdu:
    "We recognise that unfamiliar medical terminology can cause unnecessary concern. For this reason, we explain every diagnosis according to a consistent three-part structure: the symptoms experienced by the patient, the underlying condition of the eye, and the recommended course of treatment.",
  doctorsIntro:
    "Our clinical team comprises two directors with complementary areas of specialisation: one focused on retinal, glaucoma, and cataract care, and the other on pediatric ophthalmology and squint correction. Both physicians are also experienced in the treatment of ocular injuries.",
  servicesIntro:
    "Each service is described according to the nature of the condition, its typical symptoms, and the corresponding treatment approach.",
  pmjay:
    "MG Eye Foundation is an empanelled facility under the PM-JAY scheme and welcomes patients seeking eye care under this programme. Patients are advised that cashless treatment is not currently available; kindly consult the front desk for further information prior to admission.",
  serviceArea:
    "We are pleased to welcome patients from Bara Gamharia, Adityapur, Jamshedpur, and Saraikela-Kharsawan.",
  rajyakarmi:
    "MG Eye Foundation is associated with the Jharkhand Rajyakarmi Swasthya Bima Yojana (State Employees Health Insurance Scheme / SEHIS). State government employees, pensioners and eligible family members may seek eye care here under this programme. Kindly consult the front desk with your scheme card and papers prior to admission. Cashless facilities are not currently available.",
} as const;

export const STATS = [
  { num: "15+", label: "Years of Clinical Experience" },
  { num: "75,000+", label: "Patients Treated" },
  { num: "4,000+", label: "Cataract Surgeries Performed" },
  { num: "7", label: "Specialised Eye Care Services" },
] as const;

export const IMPACT = [
  { num: "4,000+", label: "Cataract Operations" },
  { num: "1,000+", label: "Diabetic Retina Treatments" },
  { num: "1,000+", label: "Ocular Injury Operations (Adityapur)" },
  { num: "1,200+", label: "Squint Correction Operations" },
] as const;

export const WHY_FAMILIES = [
  {
    badge: "Compassionate Care",
    title: "Compassionate Care — Listen First, Then Treat",
    body: "We begin every consultation by listening to the patient's account of their symptoms and concerns, using plain and respectful language throughout. Treatment commences only once the patient feels informed and at ease.",
    image: "/about-care.png",
    alt: "Doctor checking a patient’s eye",
  },
  {
    badge: "Transparent Communication",
    title: "Transparent Communication",
    body: "We present diagnostic scans directly to patients, describe the affected area of the eye in accessible terms, and outline the available treatment options without resorting to alarming or overly technical language.",
    image: "/equip/oct.png",
    alt: "Eye scan on a screen",
  },
  {
    badge: "Careful Treatment",
    title: "Careful, Well-Equipped Treatment",
    body: "We employ appropriate diagnostic and surgical equipment for the treatment of cataract, retinal disease, and glaucoma, and we ensure that patients are informed of each step of their care, including scheduled follow-up visits.",
    image: "/MG_Eye_Cataract_Service_Image.png",
    alt: "Eye treatment room and machines",
  },
] as const;

export const CARE_STEPS = [
  {
    n: "01",
    title: "Diagnosis",
    body: "We identify the specific condition affecting the patient, the part of the eye involved, its likely cause, and its current severity.",
    image: "/patient-edu/step1.png",
  },
  {
    n: "02",
    title: "Treatment Planning",
    body: "Depending on clinical need, treatment may involve topical drops, oral medication, laser therapy, injection, or cataract surgery with lens replacement. The recommended treatment is selected according to the patient's specific condition, and the associated cost is confirmed prior to treatment. Cashless facilities are not currently available.",
    image: "/patient-edu/step2.png",
  },
  {
    n: "03",
    title: "Recovery Support",
    body: "Patients receive clear guidance regarding the administration of medication, symptoms that warrant attention, an appropriate timeline for returning to daily activities, and the date of their follow-up appointment.",
    image: "/patient-edu/step3.png",
  },
] as const;

export const SERVICES = [
  {
    slug: "cataract",
    title: "Cataract Surgery",
    what: "A cataract is a clouding of the natural lens of the eye.",
    feel: "Patients typically report diminished clarity of vision and increased sensitivity to glare, particularly at night.",
    do: "The clouded lens is removed and replaced with a new, clear intraocular lens. Most patients return home on the day of surgery.",
    image: "/service-photos/cataract.png",
    doctor: "Dr. Malay and Dr. Saket both do cataract surgery.",
    who: "People who see dull, foggy, or yellow. Night lights may shine too much. Reading and walking may feel hard.",
    signs: [
      "Diminished clarity of vision",
      "Increased sensitivity to glare, particularly at night",
      "Difficulty with reading, walking, or recognising faces as the cataract progresses",
    ],
    when: "Come for a full assessment when cloudy vision begins to interfere with daily activity. Our specialists will advise whether surgery is appropriate.",
    offers: [
      "Cataract surgery with intraocular lens replacement",
      "Optical biometry to choose the lens power",
      "Ultrasound measurement when a dense cataract blocks a light scan",
      "YAG laser if the capsule becomes cloudy after surgery",
    ],
    story: [
      "The lens inside the eye should be clear, like a clean window. With age, or after injury, that lens can turn cloudy. That cloud is a cataract. Drops cannot wash it away.",
      "We check your eye first. We measure the eye so the new lens has the right power. Then we take out the cloudy lens and put in a clear one. Most people go home the same day.",
      "We tell you the cost before surgery. Cashless is not available now. We are listed under PM-JAY and associated with Rajyakarmi insurance. Ask at the desk what papers you need.",
    ],
    steps: [
      "Come for an eye check and a scan of the eye length.",
      "We tell you the plan and the cost.",
      "Surgery is done here. You go home the same day in most cases.",
      "You come back so we can see how the eye is healing.",
    ],
  },
  {
    slug: "glaucoma",
    title: "Glaucoma Treatment",
    what: "Glaucoma results from elevated pressure within the eye, which can damage the optic nerve over time.",
    feel: "The condition is often asymptomatic in its early stages; peripheral vision may gradually diminish as it progresses.",
    do: "Intraocular pressure is measured and monitored. Prescribed drops or laser treatment are used to reduce pressure and preserve vision.",
    image: "/service-photos/glaucoma.png",
    doctor: "Dr. Saket looks after glaucoma (eye pressure).",
    who: "People with high eye pressure, a family story of glaucoma, or side vision that is getting small. Many people feel no pain at the start.",
    signs: [
      "Often no symptoms in the early stages",
      "Peripheral vision may gradually diminish as the condition progresses",
      "A family history of glaucoma, or known high eye pressure",
    ],
    when: "A pressure check is advisable even when the eye feels comfortable. Early detection helps preserve vision.",
    offers: [
      "Intraocular pressure measurement and monitoring",
      "OCT of the optic nerve",
      "Prescribed pressure-lowering drops",
      "Laser treatment, including YAG where indicated",
    ],
    story: [
      "Glaucoma is extra pressure in the eye. That pressure can harm the nerve that helps you see. Once that nerve is hurt, that part of seeing does not come back. So we try to find it early.",
      "We check the pressure. We look at the nerve. We often use an OCT scan of the back of the eye. Then we use drops, and sometimes laser, to bring the pressure down.",
      "You will need to come back. Eye pressure care is not a one-day job. We watch it with you.",
    ],
    steps: [
      "We check eye pressure and the seeing nerve.",
      "We may do an OCT scan the same day.",
      "Drops, and sometimes laser, bring the pressure down.",
      "You come back so we can see if the pressure stays safe.",
    ],
  },
  {
    slug: "retina",
    title: "Medical Retina Services",
    what: "The retina, located at the back of the eye, may leak or swell, a condition frequently associated with diabetes.",
    feel: "Patients may experience blurred, dark, or patchy areas within their field of vision.",
    do: "The retina is examined by scan, and injection or laser therapy is administered to protect and preserve vision.",
    image: "/service-photos/retina.png",
    doctor: "Dr. Saket looks after the retina. Injection and laser are done here.",
    who: "People with diabetes, sudden dark spots, blur in the centre, or a retina that needs watching after a scan.",
    signs: [
      "Blurred, dark, or patchy areas within the field of vision",
      "Difficulty with central or night vision",
      "Known diabetes, even when the eye feels well",
    ],
    when: "Patients with diabetes should have the retina examined on a planned schedule. Sudden dark spots or a sudden drop in vision require prompt assessment.",
    offers: [
      "Colour fundus photography",
      "OCT scan of the retina",
      "Intravitreal injection",
      "Retinal laser",
      "Diabetic retina care",
    ],
    story: [
      "The retina is the back of the eye. It takes the picture you see. In diabetes, small vessels can leak or swell. Age can also harm the centre of seeing.",
      "We take a colour photo and an OCT scan. Then we tell you if you need an injection, a laser, or only watching for now.",
      "The injection and laser happen in this hospital. You do not go to another city for this first care.",
    ],
    steps: [
      "We scan and photograph the back of the eye.",
      "We show you the picture in simple words.",
      "If needed, we give an injection or do laser here.",
      "You come back so we can see if the swelling has gone down.",
    ],
  },
  {
    slug: "cornea",
    title: "Cornea Treatment",
    what: "The cornea is the transparent outer surface of the eye.",
    feel: "Symptoms may include pain, redness, or visible damage following injury or infection.",
    do: "The cornea is examined using specialised instruments, and the underlying infection or injury is treated to restore clarity.",
    image: "/service-photos/cornea.png",
    doctor: "Both doctors see cornea problems and eye injuries.",
    who: "People with a red, painful eye, a scratch, dust or metal in the eye, or an infection on the front of the eye.",
    signs: [
      "Pain, redness, or visible damage following injury or infection",
      "A foreign body sensation, watering, or reduced clarity",
      "Workplace injury, including injuries from nearby industrial settings",
    ],
    when: "A painful, red, or injured eye should be examined without delay during working hours.",
    offers: [
      "Slit-lamp examination",
      "Anterior segment imaging",
      "Treatment of infection and injury",
      "Care for workplace injuries, including those from Adityapur",
    ],
    story: [
      "The cornea is the clear front window. If it is hurt or infected, light cannot pass well. The eye can hurt a lot. Do not wait at home with a red, painful eye.",
      "We look with a slit lamp. We may take a close photo of the front of the eye. Then we start drops or other care the same day when we can.",
      "Factory injuries from Adityapur also come here. Come in working hours. Call us if you are not sure.",
    ],
    steps: [
      "We look at the front of the eye with a special light.",
      "We tell you if it is a scratch, germs, or a deeper injury.",
      "We start treatment here.",
      "You come back so the window of the eye can heal well.",
    ],
  },
  {
    slug: "dry-eye",
    title: "Dry Eye Clinic",
    what: "Dry eye occurs when the eye is unable to maintain adequate lubrication.",
    feel: "Patients commonly report burning, gritty, fatigued, or watery eyes.",
    do: "The underlying cause is identified, and an appropriate regimen of drops and supportive measures is recommended to relieve symptoms.",
    image: "/service-photos/dryeye.png",
    doctor: "Both doctors can check dry eyes and give a simple plan.",
    who: "People whose eyes burn, feel sandy, get tired on screens, or water a lot because they are dry.",
    signs: [
      "Burning, gritty, fatigued, or watery eyes",
      "Redness, light sensitivity, or blurred vision",
      "Symptoms affecting one or both eyes, often worse with prolonged screen use",
    ],
    when: "Come if burning, grittiness or watering persists, or if drops used at home no longer give relief.",
    offers: [
      "Assessment of why the eye cannot stay wet enough",
      "Regimen of drops",
      "Supportive measures to relieve burning and grittiness",
    ],
    story: [
      "Dry eye means the eye does not stay wet enough. Odd as it sounds, a dry eye can also water a lot. Screens, dust, age and some medicines can make this worse.",
      "We look at the front of the eye. We tell you why it feels like this. Then we give drops and a simple daily plan. This is not usually surgery.",
      "If something else is wrong, like allergy or infection, we say so. We do not sell a long list of tests you do not need.",
    ],
    steps: [
      "We hear what you feel, and for how long.",
      "We look at the front of the eye.",
      "We give drops and a simple home plan.",
      "If it does not settle, you come back and we check again.",
    ],
  },
  {
    slug: "pediatric",
    title: "Pediatric Eye Care",
    what: "Children require careful, age-appropriate ophthalmic assessment.",
    feel: "Indicators may include sitting unusually close to a screen, a noticeably weaker eye, or feedback from school regarding a child's vision.",
    do: "We assess visual acuity, determine whether corrective lenses are required, and identify any asymmetry in eye strength.",
    image: "/service-photos/pediatric.png",
    doctor: "Dr. Malay looks after children’s eyes every working day.",
    who: "Children who sit close to the TV, squeeze their eyes, have a lazy eye, or whose school says they cannot see the board.",
    signs: [
      "Sitting unusually close to a screen",
      "A noticeably weaker or misaligned eye",
      "Feedback from school regarding a child's vision",
    ],
    when: "We recommend an eye examination if any of these signs are present. Pediatric examinations are conducted daily.",
    offers: [
      "Daily pediatric eye examinations",
      "Visual acuity assessment",
      "Assessment for corrective lenses",
      "Identification of a weaker or asymmetric eye",
      "Auto-refraction (glasses power check)",
    ],
    story: [
      "A child’s eye is still growing. If one eye is weak, or the two eyes do not work together, we need to find it early. Waiting can make one eye stay weak.",
      "The check is gentle. We may use drops to see the true power. We tell the parent in simple words: glasses, exercises, or more care.",
      "Child eye checks are here every working day. Bring the child. Do not wait for a special week.",
    ],
    steps: [
      "We check how well the child sees.",
      "We look for a lazy eye or a squint.",
      "We say if glasses or more care is needed.",
      "We fix a date to come back if the eye needs watching.",
    ],
  },
  {
    slug: "squint",
    title: "Squint Correction",
    what: "Squint, or strabismus, occurs when the eyes are not properly aligned.",
    feel: "The eyes may appear to look in different directions; in children, this can result in the weakening of one eye if left untreated.",
    do: "Following a thorough assessment, treatment may involve corrective lenses or surgical correction, depending on the case.",
    image: "/service-photos/squint.png",
    doctor: "Dr. Malay does squint (bhengaapan) checks and surgery.",
    who: "Children or adults whose one eye turns in, out, up or down. In a child, this can make one eye weak.",
    signs: [
      "The eyes may appear to look in different directions",
      "In children, one eye may become weaker if left untreated",
      "Head tilt, closing one eye in sunlight, or difficulty with depth",
    ],
    when: "A child with a turned or weaker eye should be assessed promptly. Adults with a new or long-standing squint may also be examined here.",
    offers: [
      "Measurement of eye alignment",
      "Corrective lenses when indicated",
      "Squint correction surgery",
    ],
    story: [
      "Squint, or bhengaapan, means the two eyes do not look at the same place. In a child, the brain may start using only the straight eye. The other eye can become lazy.",
      "We measure how much the eye turns. Some children need glasses first. Some need surgery to straighten the eye. We tell you which one, and why.",
      "This hospital has done many squint operations. We explain the plan before the day of surgery.",
    ],
    steps: [
      "We measure how the eyes look and work together.",
      "We try glasses first when that can help.",
      "If surgery is needed, we do it here and tell you the cost first.",
      "The child or adult comes back so we can see the result.",
    ],
  },
] as const;

export type Service = (typeof SERVICES)[number];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const EQUIPMENT = [
  {
    name: "Zeiss Cirrus 500 OCT",
    use: "Retina and glaucoma scan",
    what: "This machine takes a picture of the layers at the back of the eye.",
    feel: "You sit, put your chin on the rest, and look at a small light. It does not hurt.",
    do: "We use it for glaucoma and retina problems. You get the picture the same day.",
    image: "/equip/oct.png",
  },
  {
    name: "Tomey Optical Biometer",
    use: "Measure before cataract surgery",
    what: "This machine measures the length of the eye and the front curve.",
    feel: "You look into a small window. The scan is quick and does not hurt.",
    do: "We use these numbers to choose the right power of the new lens for cataract surgery.",
    image: "/equip/biometer.png",
  },
  {
    name: "Fundus Camera",
    use: "Photo of the back of the eye",
    what: "This camera takes a colour photo of the retina.",
    feel: "A bright flash comes. It lasts one second. Your vision may look white for a short time.",
    do: "We keep the photo to watch diabetic eye disease and other retina changes over time.",
    image: "/equip/fundus.png",
  },
  {
    name: "Biomedix USG Biometer",
    use: "Ultrasound when the eye is cloudy",
    what: "This is an ultrasound of the eye. It uses sound, not light.",
    feel: "Gel is put near the closed eye. A small probe touches the lid. It does not hurt.",
    do: "We use it when a thick cataract blocks a light scan, so we can still measure the eye.",
    image: "/equip/usg.png",
  },
  {
    name: "YAG Laser",
    use: "Clear a cloudy lens capsule",
    what: "This is a laser on a slit-lamp chair. No cut is made.",
    feel: "You sit with your chin on the rest. You may see a flash. Most people feel no pain.",
    do: "If vision becomes cloudy again after cataract, this laser can open the thin layer. We also use it in some glaucoma cases.",
    image: "/equip/yag.png",
  },
  {
    name: "Nidek ARK",
    use: "Glasses power check",
    what: "This machine checks the power of the eye for glasses.",
    feel: "You look at a picture inside the machine. It takes less than a minute.",
    do: "We use it for children and adults before writing glasses or starting other tests.",
    image: "/equip/ark.png",
  },
  {
    name: "Anterior Segment Imaging",
    use: "Photo of the front of the eye",
    what: "This is a camera on a slit lamp. It photographs the cornea, iris and front of the eye.",
    feel: "A thin light shines on the eye. You sit still for a few seconds.",
    do: "We use it for cornea problems, injuries and to keep a record of how the front of the eye looks.",
    image: "/equip/anterior.png",
  },
] as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/facilities", label: "Facilities" },
  { href: "/contact", label: "Contact" },
] as const;

export const FAQS = [
  {
    q: "What are the symptoms of dry eye?",
    a: "Common symptoms include a burning or gritty sensation, redness, light sensitivity, difficulty seeing at night, excessive watering or stinging, and blurred vision. These symptoms may affect one or both eyes.",
  },
  {
    q: "What are the early signs of cataract?",
    a: "Please consult our specialists for a full assessment; a member of our clinical team will be pleased to advise you further.",
  },
  {
    q: "What eye conditions do you treat?",
    a: "We treat cataract, glaucoma, retinal disease, corneal conditions, dry eye, pediatric eye conditions, squint, and ocular injuries.",
  },
  {
    q: "What is the difference between a routine and a medical eye examination?",
    a: "A routine examination assesses general vision and the need for corrective lenses, whereas a medical examination investigates and manages specific eye conditions or diseases.",
  },
  {
    q: "Can glaucoma be cured?",
    a: "Glaucoma cannot be cured, but its progression can be effectively managed through appropriate monitoring and treatment. Please speak with our specialists for guidance specific to your condition.",
  },
  {
    q: "When should a child be brought in for an eye examination?",
    a: "We recommend an eye examination if a child sits unusually close to screens, exhibits a weaker or misaligned eye, or if concerns are raised by their school regarding their vision.",
  },
  {
    q: "Is cataract surgery painful?",
    a: "Cataract surgery is generally well tolerated and performed under local anaesthesia; most patients experience minimal discomfort.",
  },
  {
    q: "Do you accept PM-JAY (Ayushman Bharat)?",
    a: "Yes, we are empanelled under PM-JAY. Please note that cashless treatment is not currently available.",
  },
  {
    q: "Do you accept Rajyakarmi insurance (SEHIS)?",
    a: "Yes, we are associated with the Jharkhand Rajyakarmi Swasthya Bima Yojana (State Employees Health Insurance Scheme). Please bring your scheme card and consult the front desk. Cashless treatment is not currently available.",
  },
  {
    q: "What are your operating hours?",
    a: "We are open Monday to Saturday, 10:00 a.m. to 6:00 p.m. We remain closed on Sundays.",
  },
  {
    q: "How can I schedule an appointment?",
    a: "Appointments may be scheduled by telephone at +91 84090 01008, or by visiting the hospital directly.",
  },
] as const;
