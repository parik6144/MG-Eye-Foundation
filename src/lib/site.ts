export const SITE = {
  name: "M G EYE Foundation",
  legalName: "Meera Gayatri Eye Foundation",
  phone: "8409001008",
  phoneDisplay: "+91 84090 01008",
  phoneHref: "tel:+918409001008",
  whatsapp: "https://wa.me/918409001008",
  facebook: "https://www.facebook.com/mgeyefoundation",
  instagram: "https://www.instagram.com/mgeyefoundation/",
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
  tagline: "Clear Vision. Expert Care. Healthier Eyes.",
  headline: "Comprehensive and Advanced Eye Care Hospital",
  subhead: "Your vision deserves expert care.",
  intro:
    "Welcome to MEERA GAYATRI EYE FOUNDATION, where advanced eye care meets compassionate, personalized treatment.",
  introLead:
    "Led by DR KUMAR SAKET and DR MALAY KUMAR DWIVEDI, our clinic provides comprehensive ophthalmic care for patients of all ages. From routine eye examinations and diagnosis of eye conditions to advanced surgical treatments, we are committed to protect your vision and help you maintain healthy eyes at every stage of life.",
  footerBlurb:
    "Welcome to MEERA GAYATRI EYE FOUNDATION, where advanced eye care meets compassionate, personalized treatment.",
  cta: "Book an Appointment",
  ctaNote: "Appointments can be arranged promptly and with minimal formality.",
  callLabel: "For immediate assistance, please call",
  aboutTitle: "About Us",
  aboutP1:
    "Welcome to M G EYE Foundation, where advanced eye care meets compassionate, personalized treatment.",
  aboutP2:
    "Led by DR KUMAR SAKET and DR MALAY KUMAR DWIVEDI, our clinic provides comprehensive ophthalmic care for patients of all ages. From routine eye examinations and diagnosis of eye conditions to advanced surgical treatments, we are committed to protect your vision and help you maintain healthy eyes at every stage of life.",
  mission:
    "to provide comprehensive eye care services to all the sections of society at affordable cost.",
  missionTags: ["On-site same-day scanning", "Seven specialised services", "Structured post-operative follow-up"],
  vision:
    "We believe that any patient requiring treatment for eye conditions should not need to travel to a distant facility and come to our Centre. We are committed to provide world class treatment facility in your vicinity.",
  visionTags: ["1,00,000+ patients treated", "Daily pediatric eye examinations", "Dedicated care for ocular injuries"],
  whyIntro:
    "Our approach extends beyond scheduling appointments and performing procedures. We listen carefully to each patient, present diagnostic findings clearly, administer treatment with attentiveness, and provide guidance on follow-up care.",
  patientEdu:
    "We recognise that unfamiliar medical terminology can cause unnecessary concern. For this reason, we explain every diagnosis according to a consistent three-part structure: the symptoms experienced by the patient, the underlying condition of the eye, and the recommended course of treatment.",
  doctorsIntro:
    "Meet our doctors. Led by DR KUMAR SAKET, Cataract, medical retina and trauma specialist, and DR MALAY KUMAR DWIVEDI, Pediatric Ophthalmologist, Cataract and Squint specialist.",
  servicesIntro:
    "Seven clinical services. Each page follows the same structure used in a working eye hospital: the disease, why it occurs, how it presents, what we do here, and what we do not claim to do on site.",
  pmjay:
    "M G EYE Foundation is an empanelled facility under the PM-JAY scheme and welcomes patients seeking eye care under this programme. Kindly consult the front desk for further information prior to admission.",
  serviceArea:
    "M G EYE Foundation is an eye hospital at Plot 121, Durga Puja Maidan, near Vani Vidya Mandir School, Bara Gamharia, Jamshedpur. People come to this hospital from Bara Gamharia, Adityapur, Jamshedpur, and Saraikela-Kharsawan. Eye checks, scans, and surgery all happen in this same hospital.",
  rajyakarmi:
    "M G EYE Foundation is associated with the Jharkhand Rajyakarmi Swasthya Bima Yojana (State Employees Health Insurance Scheme / SEHIS). State government employees, pensioners and eligible family members may seek eye care here under this programme. Kindly consult the front desk with your scheme card and papers prior to admission.",
} as const;

export const STATS = [
  { num: "15+", label: "Years of Clinical Experience" },
  { num: "1,00,000+", label: "Patients" },
  { num: "10,000+", label: "Surgeries" },
  { num: "10", label: "Specialists" },
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
    body: "Depending on clinical need, treatment may involve topical drops, oral medication, laser therapy, injection, or cataract surgery with lens replacement. The recommended treatment is selected according to the patient's specific condition, and the associated cost is confirmed prior to treatment.",
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
    doctor: "DR MALAY KUMAR DWIVEDI and DR KUMAR SAKET both do cataract surgery.",
    who: "People who see dull, foggy, or yellow. Night lights may shine too much. Reading and walking may feel hard.",
    signs: [
      "Diminished clarity of vision",
      "Increased sensitivity to glare, particularly at night",
      "Difficulty with reading, walking, or recognising faces as the cataract progresses",
    ],
    when: "Come for a full assessment when cloudy vision begins to interfere with daily activity. Our specialists will advise whether surgery is appropriate.",
    offers: [
      "Phacoemulsification with foldable IOL",
      "Optical and ultrasound biometry for IOL power",
      "Aspheric, toric and multifocal IOL counselling",
      "YAG laser capsulotomy for after-cataract haze",
    ],
    story: [
      "The lens inside the eye should be clear, like a clean window. With age, or after injury, that lens can turn cloudy. That cloud is a cataract. Drops cannot wash it away.",
      "We check your eye first. We measure the eye so the new lens has the right power. Then we take out the cloudy lens and put in a clear one. Most people go home the same day.",
      "We tell you the cost before surgery. We are listed under PM-JAY and associated with Rajyakarmi insurance. Ask at the desk what papers you need.",
    ],
    steps: [
      "Come for an eye check and a scan of the eye length.",
      "We tell you the plan and the cost.",
      "Surgery is done here. You go home the same day in most cases.",
      "You come back so we can see how the eye is healing.",
    ],
    stepImages: [
      "/equip/ark.png",
      "/equip/biometer.png",
      "/treats/saket-cataract.png",
      "/patient-edu/step3.png",
    ],
    feelImage: "/patient-edu/feel.png",
    doImage: "/treats/malay-cataract.png",
  },
  {
    slug: "glaucoma",
    title: "Glaucoma Treatment",
    what: "Glaucoma results from elevated pressure within the eye, which can damage the optic nerve over time.",
    feel: "The condition is often asymptomatic in its early stages; peripheral vision may gradually diminish as it progresses.",
    do: "Intraocular pressure is measured and monitored. Prescribed drops or laser treatment are used to reduce pressure and preserve vision.",
    image: "/service-photos/glaucoma.png",
    doctor: "DR KUMAR SAKET looks after glaucoma (eye pressure).",
    who: "People with high eye pressure, a family story of glaucoma, or side vision that is getting small. Many people feel no pain at the start.",
    signs: [
      "Often no symptoms in the early stages",
      "Peripheral vision may gradually diminish as the condition progresses",
      "A family history of glaucoma, or known high eye pressure",
    ],
    when: "A pressure check is advisable even when the eye feels comfortable. Early detection helps preserve vision.",
    offers: [
      "Tono-Pen intraocular pressure measurement",
      "OCT of the optic nerve, ganglion-cell complex and RNFL",
      "Pressure-lowering drops and structured follow-up",
      "YAG laser when anatomically indicated",
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
    stepImages: [
      "/treats/saket-glaucoma.png",
      "/equip/oct.png",
      "/equip/yag.png",
      "/patient-edu/step3.png",
    ],
    feelImage: "/patient-edu/feel.png",
    doImage: "/treats/saket-glaucoma.png",
  },
  {
    slug: "retina",
    title: "Medical Retina Services",
    what: "The retina, located at the back of the eye, may leak or swell, a condition frequently associated with diabetes.",
    feel: "Patients may experience blurred, dark, or patchy areas within their field of vision.",
    do: "The retina is examined by scan, and injection or laser therapy is administered to protect and preserve vision.",
    image: "/service-photos/retina.png",
    doctor: "DR KUMAR SAKET looks after the retina. Injection and laser are done here.",
    who: "People with diabetes, sudden dark spots, blur in the centre, or a retina that needs watching after a scan.",
    signs: [
      "Blurred, dark, or patchy areas within the field of vision",
      "Difficulty with central or night vision",
      "Known diabetes, even when the eye feels well",
    ],
    when: "Patients with diabetes should have the retina examined on a planned schedule. Sudden dark spots or a sudden drop in vision require prompt assessment.",
    offers: [
      "Colour fundus photography and ZEISS CIRRUS OCT",
      "Retinal laser for macular oedema and selected breaks",
      "Intravitreal injection for diabetes, ARMD and vein occlusion",
      "ROP screening and ROP surgery",
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
    stepImages: [
      "/equip/fundus.png",
      "/equip/oct.png",
      "/treats/saket-retina.png",
      "/treats/saket-laser.png",
    ],
    feelImage: "/patient-edu/feel.png",
    doImage: "/treats/saket-retina.png",
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
      "Slit-lamp examination and anterior-segment imaging",
      "Treatment of abrasion, ulcer and chemical injury",
      "Foreign-body removal and industrial trauma care",
      "Medical management of ocular-surface disease",
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
    stepImages: [
      "/equip/anterior.png",
      "/service-photos/cornea.png",
      "/treats/malay-injury.png",
      "/patient-edu/step3.png",
    ],
    feelImage: "/patient-edu/feel.png",
    doImage: "/treats/malay-injury.png",
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
      "Slit-lamp tear-film and lid-margin assessment",
      "Lubricants and anti-inflammatory therapy when indicated",
      "Lid hygiene for meibomian gland dysfunction",
      "Review of drops already used at home",
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
    stepImages: [
      "/patient-edu/feel.png",
      "/service-photos/dryeye.png",
      "/patient-edu/fix.png",
      "/patient-edu/step3.png",
    ],
    feelImage: "/patient-edu/feel.png",
    doImage: "/patient-edu/fix.png",
  },
  {
    slug: "pediatric",
    title: "Pediatric Eye Care",
    what: "Children require careful, age-appropriate ophthalmic assessment.",
    feel: "Indicators may include sitting unusually close to a screen, a noticeably weaker eye, or feedback from school regarding a child's vision.",
    do: "We assess visual acuity, determine whether corrective lenses are required, and identify any asymmetry in eye strength.",
    image: "/service-photos/pediatric.png",
    doctor: "DR MALAY KUMAR DWIVEDI looks after children’s eyes every working day.",
    who: "Children who sit close to the TV, squeeze their eyes, have a lazy eye, or whose school says they cannot see the board.",
    signs: [
      "Sitting unusually close to a screen",
      "A noticeably weaker or misaligned eye",
      "Feedback from school regarding a child's vision",
    ],
    when: "We recommend an eye examination if any of these signs are present. Pediatric examinations are conducted daily.",
    offers: [
      "Daily paediatric eye examination (Lea symbols, stereo tests)",
      "Paediatric cataract surgery",
      "ROP screening and ROP surgery",
      "Amblyopia therapy and glasses",
      "Paediatric trauma care",
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
    stepImages: [
      "/service-photos/pediatric.png",
      "/treats/malay-child.png",
      "/equip/ark.png",
      "/patient-edu/step3.png",
    ],
    feelImage: "/patient-edu/feel.png",
    doImage: "/treats/malay-child.png",
  },
  {
    slug: "squint",
    title: "Squint Correction",
    what: "Squint, or strabismus, occurs when the eyes are not properly aligned.",
    feel: "The eyes may appear to look in different directions; in children, this can result in the weakening of one eye if left untreated.",
    do: "Following a thorough assessment, treatment may involve corrective lenses or surgical correction, depending on the case.",
    image: "/service-photos/squint.png",
    doctor: "DR MALAY KUMAR DWIVEDI does squint (bhengaapan) checks and surgery.",
    who: "Children or adults whose one eye turns in, out, up or down. In a child, this can make one eye weak.",
    signs: [
      "The eyes may appear to look in different directions",
      "In children, one eye may become weaker if left untreated",
      "Head tilt, closing one eye in sunlight, or difficulty with depth",
    ],
    when: "A child with a turned or weaker eye should be assessed promptly. Adults with a new or long-standing squint may also be examined here.",
    offers: [
      "Prism measurement of alignment and stereopsis",
      "Glasses-first treatment when the squint is refractive",
      "Squint correction surgery",
      "Amblyopia protection in children",
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
    stepImages: [
      "/service-photos/squint.png",
      "/equip/ark.png",
      "/treats/malay-squint.png",
      "/patient-edu/step3.png",
    ],
    feelImage: "/patient-edu/feel.png",
    doImage: "/treats/malay-squint.png",
  },
] as const;

export const SERVICE_HUB = [
  {
    slug: "cataract",
    title: "Cataract Services",
    items: [
      "Phacoemulsification with Foldable IOL",
      "Multifocal IOL",
      "Micro-Coaxial Phaco Surgery",
      "Premium Cataract Surgery Options",
    ],
  },
  {
    slug: "cornea",
    title: "Cornea Services",
    items: [
      "Corneal ulcer treatment",
      "⁠Corneal imaging ( OCT)",
      "⁠Corneal tear repair",
      "Contact lens service",
    ],
  },
  {
    slug: "glaucoma",
    title: "Glaucoma Services",
    items: [
      "Goldmann Applanation Tonometry",
      "Pachymetry",
      "OCT for Ganglion Cell Complex and RNFL",
      "Trabeculectomy Surgery",
      "Glaucoma Shunt Surgery",
    ],
  },
  {
    slug: "oculoplasty",
    title: "Oculoplasty Services",
    items: ["DCR Surgery", "DCT Surgery", "Lid Repair Surgery","Entropion surgery","Ectropion surgery","Ptosis correction"],
  },
  {
    slug: "pediatric",
    title: "Pediatric Ophthalmology And Squint Services",
    items: [
      "Pediatric Cataract Surgery",
      "Squint Surgery",
      "Botox Treatment",
      "Pediatric Trauma Surgery",
      "ROP Screening",
      "Standardized Facility for Pediatric Examination – Tonopen, Lea Symbol",
      "Titmus Stereo Acuity Chart",
      "Luneau Loose Prism Set",
      "Contact Lens",
    ],
  },
  {
    slug: "refractive",
    title: "Refractive Error Service",
    items: ["PRK", "ICL"],
  },
  {
    slug: "retina",
    title: "Vitreo-retinal Services",
    items: [
      "Retinal Laser",
      "Medical Management for Diabetic Retinopathy",
      "ARMD Treatment",
      "Intravitreal Injection",
      "OCT",
      "LVA",
    ],
  },
  {
    slug: "other",
    title: "Other Services",
    items: ["Neuro-Ophthalmology", "Optical Shop", "Pharmacy"],
  },
] as const;

const EXTRA_SERVICES = [
  {
    slug: "oculoplasty",
    title: "Oculoplasty Services",
    what: "Oculoplasty addresses the eyelids, lacrimal drainage system and the tissues around the eye.",
    feel: "Watering from a blocked tear duct, a drooping or injured lid, or a swelling near the inner corner of the eye.",
    do: "DCR, DCT and lid repair are planned after examination of the lids and lacrimal pathway.",
    image: "/treats/malay-injury.png",
    doctor: "Lid and lacrimal problems are assessed in this hospital.",
    who: "",
    signs: [] as string[],
    when: "",
    offers: ["DCR Surgery", "DCT Surgery", "Lid Repair Surgery"],
    story: ["", "", ""] as string[],
    steps: ["", "", "", ""] as string[],
    stepImages: ["", "", "", ""] as string[],
    feelImage: "/patient-edu/feel.png",
    doImage: "/treats/malay-injury.png",
  },
  {
    slug: "refractive",
    title: "Refractive Error Service",
    what: "A refractive error means the eye does not bend light onto the retina in sharp focus.",
    feel: "Blur for distance or near, glare, squinting, headache or strain with screens.",
    do: "Myopia, hyperopia, astigmatism and presbyopia are measured; glasses, contact lenses, LASIK, PRK or ICL are discussed according to the eye.",
    image: "/equip/ark.png",
    doctor: "Refraction is measured on the NIDEK ARK. Surgical options are counselled after a full work-up.",
    who: "",
    signs: [] as string[],
    when: "",
    offers: ["Lasik, PRK", "ICL"],
    story: ["", "", ""] as string[],
    steps: ["", "", "", ""] as string[],
    stepImages: ["", "", "", ""] as string[],
    feelImage: "/patient-edu/feel.png",
    doImage: "/equip/ark.png",
  },
  {
    slug: "other",
    title: "Other Services",
    what: "Supporting services around medical eye care: neuro-ophthalmic assessment, optical dispensing and pharmacy.",
    feel: "Headache with visual field loss, a need for spectacles, or medicines prescribed after a visit.",
    do: "Neuro-ophthalmology problems are examined; an optical shop and pharmacy support the prescription.",
    image: "/service-photos/pediatric.png",
    doctor: "Ask at the desk for optical and pharmacy. Neuro-ophthalmic signs are examined by the treating ophthalmologist.",
    who: "",
    signs: [] as string[],
    when: "",
    offers: ["Neuro-Ophthalmology", "Optical Shop", "Pharmacy"],
    story: ["", "", ""] as string[],
    steps: ["", "", "", ""] as string[],
    stepImages: ["", "", "", ""] as string[],
    feelImage: "/patient-edu/feel.png",
    doImage: "/patient-edu/step3.png",
  },
] as const;

export type Service = (typeof SERVICES)[number] | (typeof EXTRA_SERVICES)[number];

export function allServices(): Service[] {
  return [...SERVICES, ...EXTRA_SERVICES] as Service[];
}

export function getService(slug: string) {
  return allServices().find((s) => s.slug === slug);
}

export const EQUIPMENT = [
  {
    name: "ZEISS CIRRUS 500 OCT",
    kicker: "",
    body: [
      "The ZEISS CIRRUS 500 OCT is a state-of-the-art eye imaging system that provides detailed, high-resolution images of the retina and optic nerve—without any discomfort or contact with the eye.",
      "This advanced technology helps our ophthalmologists detect and monitor eye conditions at an early stage, including glaucoma, diabetic eye disease, macular disorders and retinal conditions. By creating precise cross-sectional images of the eye, OCT supports accurate diagnosis and helps doctors closely monitor changes over time.",
    ],
    tagline: "Advanced technology. Precise imaging. Better-informed eye care.",
    image: "/equip/oct.png",
  },
  {
    name: "TOMEY Optical Biometer",
    kicker: "Precision Measurements for Personalised Cataract Care",
    body: [
      "The Tomey Optical Biometer represents advanced precision in modern cataract surgery planning. Using sophisticated optical measurement technology, it accurately assesses key parameters of the eye to help determine the ideal intraocular lens (IOL) power.",
      "Fast, non-contact and comfortable for the patient, the system provides reliable measurements that support precise IOL selection and personalised surgical planning.",
    ],
    tagline: "Advanced biometry. Exceptional precision. Personalised vision care.",
    image: "/equip/biometer.png",
  },
  {
    name: "Forus Fundus Camera",
    kicker: "High-Precision Imaging for Complete Retinal Care",
    body: [
      "The Forus Fundus Camera is an advanced retinal imaging system designed to capture high-quality, detailed images of the retina and optic nerve. Its non-invasive technology enables ophthalmologists to examine, document and monitor subtle changes in the eye with greater clarity.",
      "It plays an important role in the early detection and ongoing management of diabetic retinopathy, glaucoma, macular disorders and other retinal conditions, supporting timely diagnosis and personalised eye care.",
    ],
    tagline: "Advanced retinal imaging. Early detection. Confident eye care.",
    image: "/equip/fundus.png",
  },
  {
    name: "Appasamy YAG Laser",
    kicker: "Advanced Laser Technology for Precise Eye Care",
    body: [
      "The Appasamy YAG Laser is an advanced ophthalmic laser system designed to provide precise, controlled and minimally invasive laser treatment for selected eye conditions. It is commonly used for YAG laser capsulotomy, a procedure that can restore clarity of vision when clouding develops behind an artificial lens following cataract surgery.",
      "With accurate laser delivery and controlled treatment, the system supports safe, efficient and patient-friendly eye care with minimal discomfort and a short treatment time.",
    ],
    tagline: "Advanced laser precision. Comfortable treatment. Clearer vision.",
    image: "/equip/yag.png",
  },
  {
    name: "Appasamy Anterior Segment Imaging System",
    kicker: "Advanced Imaging for Precise Front-of-the-Eye Assessment",
    body: [
      "The Appasamy Anterior Segment Imaging System is an advanced diagnostic technology designed to provide clear and detailed imaging of the front structures of the eye, including the cornea, anterior chamber, iris and lens.",
      "It helps ophthalmologists evaluate and document important eye conditions with greater precision, supporting the diagnosis and management of corneal disorders, cataract, glaucoma and other anterior segment conditions.",
    ],
    tagline: "Detailed imaging. Precise assessment. Better-informed eye care.",
    image: "/equip/anterior.png",
  },
  {
    name: "ZEISS LUMERA 300 Operating Microscope",
    kicker: "Advanced Visualisation for Precision Eye Surgery",
    body: [
      "The ZEISS LUMERA 300 Operating Microscope is a high-performance surgical microscope designed to provide ophthalmic surgeons with exceptional clarity, precision and control during delicate eye procedures.",
      "With advanced optics, excellent illumination and enhanced visualisation of fine ocular structures, it supports greater accuracy throughout cataract, corneal, glaucoma and other microsurgical procedures.",
    ],
    tagline: "Superior visualisation. Surgical precision. Confidence at every step.",
    image: "/equip/microscope.png",
  },
  {
    name: "Orteli Catrex 3 Phaco Machine",
    kicker: "Advanced Technology for Precise Cataract Surgery",
    body: [
      "The Orteli Catrex 3 Phaco Machine is an advanced ophthalmic surgical system designed to support precise, controlled and efficient cataract surgery. Its sophisticated phacoemulsification technology helps surgeons safely remove the cloudy natural lens while maintaining excellent control throughout the procedure.",
      "Designed for modern cataract care, the system supports smooth surgical performance, precision and patient comfort, contributing to predictable and high-quality surgical outcomes.",
    ],
    tagline: "Advanced phaco technology. Surgical precision. Better cataract care.",
    image: "/equip/phaco.png",
  },
  {
    name: "Tono-Pen",
    kicker: "Quick, Accurate & Comfortable Eye Pressure Measurement",
    body: [
      "The Tono-Pen is a compact, handheld tonometer designed to measure intraocular pressure (IOP) quickly and accurately. Its convenient, patient-friendly design allows ophthalmologists to assess eye pressure comfortably, making it a valuable tool in the screening, diagnosis and monitoring of glaucoma and other conditions associated with elevated eye pressure.",
    ],
    tagline: "Accurate measurement. Quick assessment. Better glaucoma care.",
    image: "/equip/tonopen.png",
  },
  {
    name: "Biomedix USG Biometer",
    kicker: "Advanced Ultrasound Biometry for Precise Cataract Planning",
    body: [
      "The Biomedix USG Biometer is an advanced ophthalmic diagnostic system designed to accurately measure important eye parameters, including axial length and other biometric measurements required for cataract surgery planning.",
      "Its reliable ultrasound-based technology supports precise intraocular lens (IOL) power calculation, particularly when optical biometry may be difficult to perform. It helps ophthalmologists achieve accurate measurements for personalised and well-planned cataract surgery.",
    ],
    tagline: "Accurate biometry. Reliable measurements. Precision-driven cataract care.",
    image: "/equip/usg.png",
  },
  {
    name: "NIDEK ARK",
    kicker: "Precision Refraction & Corneal Measurement",
    body: [
      "The NIDEK ARK is an advanced Auto Ref-Keratometer designed to provide fast and accurate measurements of refractive power and corneal curvature. It helps assess common refractive errors such as myopia, hyperopia and astigmatism with precision.",
      "Its reliable technology supports accurate vision assessment, prescription planning and comprehensive eye examinations, helping our specialists provide personalised and effective vision care.",
    ],
    tagline: "Advanced measurement. Precise assessment. Clearer vision care.",
    image: "/equip/ark.png",
  },
  {
    name: "Topcon Lensometer",
    kicker: "Precision Lens Measurement for Accurate Vision Care",
    body: [
      "The Topcon Lensometer is an advanced optical instrument designed to accurately measure the power, axis and optical characteristics of spectacle lenses. It helps our eye-care professionals verify lens prescriptions with precision, ensuring that spectacles meet the required visual correction.",
      "Reliable, efficient and easy to use, it supports accurate prescription verification and quality assurance, contributing to clearer and more personalised vision care.",
    ],
    tagline: "Precision lens measurement. Reliable verification. Better vision care.",
    image: "/equip/lensometer.png",
  },
  {
    name: "Slit Lamp",
    kicker: "Advanced Microscopic Examination for Comprehensive Eye Care",
    body: [
      "The Slit Lamp is an essential ophthalmic diagnostic instrument that provides a magnified and highly detailed view of the eye’s structures. It enables our ophthalmologists to carefully examine the cornea, conjunctiva, iris, lens and other parts of the eye.",
      "This advanced examination plays an important role in the early detection, diagnosis and monitoring of conditions such as cataract, corneal disorders, glaucoma and other eye diseases.",
    ],
    tagline: "Detailed examination. Precise diagnosis. Comprehensive eye care.",
    image: "/equip/slit-lamp.png",
  },
  {
    name: "General Anaesthesia Machine",
    kicker: "Advanced Anaesthesia Support for Safe Surgical Care",
    body: [
      "Our General Anaesthesia Machine is an advanced medical system designed to support the safe and controlled delivery of anaesthesia during surgical procedures. It enables precise management of anaesthetic gases, oxygen delivery and patient ventilation, helping the anaesthesia team maintain stable and closely monitored conditions throughout surgery.",
      "With reliable performance and integrated monitoring capabilities, it contributes to patient safety, comfort and effective surgical management.",
    ],
    tagline: "Controlled anaesthesia. Continuous support. Safety at every step.",
    image: "/equip/anaesthesia.png",
  },
] as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/facilities", label: "Facilities" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export const FAQS = [
  {
    q: "What can I expect on my first visit?",
    a: "The first visit includes discussion of your eye and medical history, family history, and the reason for consultation, followed by a comprehensive eye examination including vision testing and tonometry. The complete check-up takes around two hours.",
  },
  {
    q: "How often should I go to the ophthalmologist?",
    a: "A complete eye examination is generally recommended at least once a year. More frequent examinations may be appropriate for people over 55 or those with diabetes, high blood pressure, previous eye injuries, or a family history of eye disease. Sudden vision changes, vision loss, pain, irritation, or medication-related visual effects warrant prompt consultation.",
  },
  {
    q: "When should an adult patient with cataract be operated?",
    a: "For adults, cataract surgery is generally considered when the cataract begins interfering with daily activities. Childhood cataract is treated as more urgent and should be assessed promptly when significant cataract is diagnosed.",
  },
  {
    q: "Is injection required for cataract surgery?",
    a: "The treating ophthalmologist decides the appropriate method. More than 95% of cataract surgeries are currently performed without an injection.",
  },
  {
    q: "How do we select the type of lens for cataract surgery?",
    a: "The doctor may suggest two or three suitable lens choices based on the patient's eye condition. The patient makes the final choice. Visual outcomes can be similar, while dependence on spectacles can vary according to the selected lens.",
  },
  {
    q: "How do you treat a lazy eye in children?",
    a: "Treatment depends on the cause and severity and may include corrective spectacles or contact lenses, patching, vision therapy, and surgery when squint or cataract is responsible.",
  },
  {
    q: "Can a lazy eye be corrected with glasses?",
    a: "In some cases, glasses can improve a lazy eye. If vision does not improve after approximately 4–8 weeks of proper spectacle use, additional treatment may be considered.",
  },
  {
    q: "How can I fix my lazy eye at home?",
    a: "Vision therapy is often combined with glasses, eye patches, or eye drops. Examples of therapy activities include eye tracking, eye jumps, puzzles, dot-to-dot activities, and coloring exercises.",
  },
  {
    q: "How will I know that I am suffering from glaucoma?",
    a: "Glaucoma can damage the optic nerve and cause permanent vision loss. Possible warning signs include eye pain, advanced tunnel vision, patchy blind spots, blurred vision, halos, redness, nausea or vomiting, and severe headache.",
  },
  {
    q: "What tests are done to diagnose glaucoma?",
    a: "Tests include tonometry, a dilated eye examination, pachymetry, perimetry, gonioscopy, and RNFL analysis using OCT.",
  },
  {
    q: "Can glaucoma be detected in an eye test?",
    a: "Yes. A routine eye examination can detect glaucoma before noticeable symptoms appear, which supports early diagnosis and treatment.",
  },
  {
    q: "What should be the lifestyle dos and don'ts for a glaucoma patient?",
    a: "Healthy food and regular exercise are recommended, along with eye protection during activities such as swimming or sports, slow fluid intake, avoiding smoking and eye rubbing, and avoiding foods high in trans fatty acids.",
  },
  {
    q: "How often should a child get their eyes checked?",
    a: "A first eye examination is recommended around six months of age, another by age three, and yearly examinations for school-aged children without vision problems. Children using glasses or contact lenses may need checks every 6–12 months or as advised.",
  },
  {
    q: "What kind of spectacles should I buy for my child?",
    a: "Available lens materials include plastic, polycarbonate, and high-index plastic. Polycarbonate and high-index lenses are lighter and more impact resistant. Glass lenses are discouraged for children because broken glass can injure the eye. Sports goggles may be useful for children involved in contact sports.",
  },
  {
    q: "Does a child with astigmatism need spectacles?",
    a: "Astigmatism can be corrected with glasses. Spectacles may not always be necessary when the astigmatism is mild and does not produce significant near- or farsightedness. Glasses may be optional when uncorrected vision is 20/30 or better.",
  },
  {
    q: "How do I know if my 2-year-old has eye problems?",
    a: "Possible signs include misaligned eyes, an unusually white or grey pupil, watering, discharge or crusting, light sensitivity, frequent eye rubbing, pain or itching, drooping eyelids, poor focus, persistent redness, and poor visual tracking. Some conditions such as lazy eye may have no obvious symptoms, making routine examinations important.",
  },
  {
    q: "What is normal eyesight for a 5-year-old?",
    a: "Vision develops with age. 20/30 can be normal for a five-year-old. An eye examination is recommended when visual acuity is below the expected level.",
  },
  {
    q: "How does diabetes affect the eyes?",
    a: "Long-term uncontrolled diabetes can damage the retina, causing diabetic retinopathy and potentially reducing vision.",
  },
  {
    q: "How is diabetic retinopathy treated?",
    a: "Treatment may involve retinal laser treatment or injections, depending on the condition and the treating doctor's assessment. Advanced disease may require surgery.",
  },
  {
    q: "How do we identify retinal detachment?",
    a: "A sudden reduction in vision or a curtain-like shadow across part of the visual field can be a warning sign. Immediate consultation is advised because early treatment and surgery may be required.",
  },
  {
    q: "What is age-related macular degeneration?",
    a: "Age-related macular degeneration affects the central retina, which is responsible for most detailed central vision. Early detection is important, and treatment can include injections into the eye.",
  },
] as const;
