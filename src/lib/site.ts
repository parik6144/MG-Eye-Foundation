export const SITE = {
  name: "M G Eye Foundation",
  phone: "8409001008",
  phoneDisplay: "+91 84090 01008",
  phoneHref: "tel:+918409001008",
  whatsapp: "https://wa.me/918409001008",
  email: "mgeyefoundation@gmail.com",
  emailHref: "mailto:mgeyefoundation@gmail.com",
  hours: "Mon–Sat: 10:00 AM – 6:00 PM",
  hoursNote: "Call us during working hours for urgent eye care.",
  sunday: "Sunday: Closed",
  address: "Plot No. 121, Durga Puja Maidan, Near Vani Vidya Mandir School, Bara Gamharia",
  city: "Jamshedpur, Jharkhand",
  cashless: false,
  pmjay: true,
} as const;

export const STATS = [
  { num: "15+", label: "Years of experience" },
  { num: "75,000+", label: "Patients cared for" },
  { num: "4,000+", label: "Cataract surgeries" },
  { num: "7", label: "Eye care services" },
] as const;

export const IMPACT = [
  { num: "4,000+", label: "Cataract operations" },
  { num: "1,000+", label: "Diabetic retina treatments (injection and laser)" },
  { num: "1,000+", label: "Eye-injury operations from Adityapur factories" },
  { num: "1,200+", label: "Squint (bhengaapan) operations" },
] as const;

export const WHY_FAMILIES = [
  {
    badge: "Kind care",
    title: "Listen first, then treat",
    body: "In other words: we hear your story. We use simple words. Only then we start treatment. You should feel respected.",
    image: "/about-care.png",
    alt: "Doctor checking a patient’s eye",
  },
  {
    badge: "Clear talk",
    title: "Clear words, clear plan",
    body: "In other words: we show the scan picture. We name the eye part in everyday words. We tell you the options. No scare. No hard medical talk.",
    image: "/equip/oct.png",
    alt: "Eye scan on a screen",
  },
  {
    badge: "Careful work",
    title: "Careful treatment with good machines",
    body: "In other words: we use the right machine for cataract, retina and glaucoma. We tell you what we are doing. We see you after.",
    image: "/MG_Eye_Cataract_Service_Image.png",
    alt: "Eye treatment room and machines",
  },
] as const;

export const CARE_STEPS = [
  {
    n: "01",
    title: "Find what is wrong",
    body: "In other words: we tell you the name of the problem, which part of the eye it is, why it started, and if it is mild or serious today.",
    image: "/patient-edu/step1.png",
  },
  {
    n: "02",
    title: "Plan the treatment",
    body: "In other words: drops, tablets, laser, injection, or cataract surgery with a new lens. We pick what your eye needs. We tell you the cost first. Cashless is not available now.",
    image: "/patient-edu/step2.png",
  },
  {
    n: "03",
    title: "Help you heal",
    body: "In other words: when to put drops, what warning signs to watch, when you can work, and the date to come back.",
    image: "/patient-edu/step3.png",
  },
] as const;

export const SERVICES = [
  {
    slug: "cataract",
    title: "Cataract Surgery",
    what: "A white cloud grows on the lens inside the eye.",
    feel: "Seeing becomes dull. Night lights may glare.",
    do: "We take out the cloudy lens. We put in a new clear lens. Most people go home the same day.",
    image: "/service-photos/cataract.png",
    doctor: "Dr. Malay and Dr. Saket both do cataract surgery.",
    who: "People who see dull, foggy, or yellow. Night lights may shine too much. Reading and walking may feel hard.",
    story: [
      "The lens inside the eye should be clear, like a clean window. With age, or after injury, that lens can turn cloudy. That cloud is a cataract. Drops cannot wash it away.",
      "We check your eye first. We measure the eye so the new lens has the right power. Then we take out the cloudy lens and put in a clear one. Most people go home the same day.",
      "We tell you the cost before surgery. Cashless is not available now. We are listed under PM-JAY. Ask at the desk what papers you need.",
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
    what: "Extra pressure in the eye can harm the seeing nerve.",
    feel: "You may feel nothing at first. Later, side vision can become weak.",
    do: "We check the pressure. Drops or laser bring the pressure down and help save sight.",
    image: "/service-photos/glaucoma.png",
    doctor: "Dr. Saket looks after glaucoma (eye pressure).",
    who: "People with high eye pressure, a family story of glaucoma, or side vision that is getting small. Many people feel no pain at the start.",
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
    what: "The back of the eye (retina) can leak or swell, often in diabetes.",
    feel: "Seeing may look blurry, dark, or patchy.",
    do: "We scan the retina. We use an injection or laser to protect seeing.",
    image: "/service-photos/retina.png",
    doctor: "Dr. Saket looks after the retina. Injection and laser are done here.",
    who: "People with diabetes, sudden dark spots, blur in the centre, or a retina that needs watching after a scan.",
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
    what: "The cornea is the clear front window of the eye.",
    feel: "Pain, redness, or a hurt eye after injury or infection.",
    do: "We look with a special light. Then we treat the infection or injury so light can pass through.",
    image: "/service-photos/cornea.png",
    doctor: "Both doctors see cornea problems and eye injuries.",
    who: "People with a red, painful eye, a scratch, dust or metal in the eye, or an infection on the front of the eye.",
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
    what: "The eye does not stay wet enough.",
    feel: "Burning, sandy, tired, or watery eyes.",
    do: "We find why the eye is dry. Drops and a simple plan reduce the burn.",
    image: "/service-photos/dryeye.png",
    doctor: "Both doctors can check dry eyes and give a simple plan.",
    who: "People whose eyes burn, feel sandy, get tired on screens, or water a lot because they are dry.",
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
    what: "A child’s eyes need a gentle, careful check.",
    feel: "Sitting too close to the TV, a lazy eye, or school saying they cannot see well.",
    do: "We check if the child sees well, if glasses are needed, or if one eye is weak.",
    image: "/service-photos/pediatric.png",
    doctor: "Dr. Malay looks after children’s eyes every working day.",
    who: "Children who sit close to the TV, squeeze their eyes, have a lazy eye, or whose school says they cannot see the board.",
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
    what: "Squint (bhengaapan) means one eye looks a different way.",
    feel: "The eyes do not look together. In a child this can weaken one eye.",
    do: "We check the eyes. Glasses or surgery can straighten them.",
    image: "/service-photos/squint.png",
    doctor: "Dr. Malay does squint (bhengaapan) checks and surgery.",
    who: "Children or adults whose one eye turns in, out, up or down. In a child, this can make one eye weak.",
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
    a: "Your eyes may burn or feel sandy. They can get red. Light may hurt. Night seeing can be hard. Eyes may water and sting. Vision may look blurry. This can be in one eye or both.",
  },
  {
    q: "What are the first signs of having cataracts?",
    a: "At first the cloud in the eye is small. You may still see well. When the cloud grows, light does not pass clearly. Then you notice you cannot see as well as before.",
  },
  {
    q: "What eye conditions and diseases do you treat?",
    a: "We check glasses power. We treat cataract, glaucoma, retina problems, cornea, dry eye, child eye problems, squint (bhengaapan), and eye injuries. We do the scan and the treatment here.",
  },
  {
    q: "What is the difference between a routine eye exam and a medical eye exam?",
    a: "A routine check is mainly for glasses. A medical check is when the eye is sick — like cataract, glaucoma, or red eye. We do both kinds of visits here.",
  },
  {
    q: "Can glaucoma be cured?",
    a: "No. Glaucoma cannot be fully cured. It can start slowly, so you may not feel it. An eye check can find it. Early treatment can stop more damage and help save your sight.",
  },
  {
    q: "When should I bring my child?",
    a: "If they have squint, sit too close to the TV or phone, or school says they cannot see well. Child eye checks are here every working day.",
  },
  {
    q: "Is cataract surgery painful?",
    a: "No. Most people go home the same day. Many see more clearly in 1 or 2 days.",
  },
  {
    q: "Do you have cashless / PM-JAY?",
    a: "We are listed under PM-JAY (Ayushman Bharat). Cashless is not available right now. Please ask at the desk before you get admitted.",
  },
  {
    q: "What are the timings?",
    a: `${SITE.hours}. ${SITE.sunday}. ${SITE.hoursNote}`,
  },
  {
    q: "How do I book a visit?",
    a: `Call ${SITE.phoneDisplay}, or use Book Appointment on this website. The desk will confirm by phone.`,
  },
] as const;
