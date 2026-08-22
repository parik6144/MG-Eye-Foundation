export const DOCTORS = [
  {
    name: "Dr. Malay Kumar Dwivedi",
    photo: "/Dr Malay Kumar Dwiwedi.jpg",
    hindi: "शिशु नेत्र रोग विशेषज्ञ",
    englishFocus: "Child eye and squint doctor",
    label: "Cataract, child eyes, squint and injury",
    qual: "MBBS, MS, FPOAS",
    spec: "Cataract, Pediatric Ophthalmology, Strabismus & Trauma",
    role: "Director, MG Eye Foundation, Gamharia",
    bio: "Dr. Malay looks after children’s eyes and squint (bhengaapan). He also does cataract surgery and care for hurt eyes. He trained at Aravind Eye Hospital, Madurai. Before this hospital, he worked at Purnima Netralaya, Tamolia, and Jamshedpur Eye Hospital, Sakchi.",
    stats: [
      { value: "Director", label: "Role here" },
      { value: "1,200+", label: "Squint operations" },
    ],
    expertise: [
      "Cataract surgery",
      "Child eye checks every working day",
      "Squint (bhengaapan) surgery",
      "Eye injury care",
    ],
    treats: [
      {
        title: "Cataract",
        plain: "Cloudy eye. New clear lens.",
        image: "/treats/malay-cataract.png",
      },
      {
        title: "Child eyes",
        plain: "We check if a child sees well.",
        image: "/treats/malay-child.png",
      },
      {
        title: "Squint",
        plain: "We can straighten the eye.",
        image: "/treats/malay-squint.png",
      },
      {
        title: "Eye injury",
        plain: "Hurt eye. We treat it here.",
        image: "/treats/malay-injury.png",
      },
    ],
    highlights: [
      "Ex. Fellow, Aravind Eye Hospital, Madurai",
      "Ex. Consultant, Purnima Netralaya, Tamolia",
      "Ex. Consultant, Jamshedpur Eye Hospital, Sakchi",
    ],
  },
  {
    name: "Dr. Kumar Saket",
    photo: "/Dr Saket.png",
    hindi: "रेटिना विशेषज्ञ",
    englishFocus: "Retina and glaucoma doctor",
    label: "Cataract, retina, glaucoma and injury",
    qual: "MBBS, DNB",
    spec: "Cataract, Medical Retina, Glaucoma & Trauma",
    role: "Director, MG Eye Foundation, Gamharia",
    bio: "Dr. Saket looks after the back of the eye (retina), eye pressure (glaucoma), cataract and hurt eyes. He uses injection and laser when needed. Before this hospital, he worked at Purnima Netralaya, Tamolia, KGMH Medica, and Jamshedpur Eye Hospital, Sakchi.",
    stats: [
      { value: "Director", label: "Role here" },
      { value: "1,000+", label: "Retina treatments" },
    ],
    expertise: [
      "Cataract surgery",
      "Retina injection and laser",
      "Glaucoma (eye pressure) care",
      "Eye injury care",
    ],
    treats: [
      {
        title: "Cataract",
        plain: "Cloudy eye. New clear lens.",
        image: "/treats/saket-cataract.png",
      },
      {
        title: "Retina",
        plain: "Back of the eye. Injection or laser.",
        image: "/treats/saket-retina.png",
      },
      {
        title: "Laser care",
        plain: "A laser is used when the eye needs it.",
        image: "/treats/saket-laser.png",
      },
      {
        title: "Glaucoma",
        plain: "High eye pressure. We bring it down.",
        image: "/treats/saket-glaucoma.png",
      },
    ],
    highlights: [
      "Ex. Senior Consultant, Purnima Netralaya, Tamolia",
      "Ex. Consultant, KGMH, Medica",
      "Ex. Consultant, Jamshedpur Eye Hospital, Sakchi",
    ],
  },
] as const;
