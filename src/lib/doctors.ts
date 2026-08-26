export const DOCTORS = [
  {
    name: "Dr. Kumar Saket",
    photo: "/Dr Saket.png",
    hindi: "रेटिना विशेषज्ञ",
    englishFocus: "Retina Specialist and Director",
    label: "Areas of focus: Cataract, Retina, Glaucoma, and Ocular Injury",
    qual: "MBBS, DNB",
    spec: "Cataract, Medical Retina, Glaucoma & Trauma",
    role: "Retina Specialist and Director, MG Eye Foundation, Gamharia",
    bio: "Dr. Saket specialises in the management of retinal disease, glaucoma, cataract, and ocular trauma, employing injection and laser-based therapies as clinically indicated. He has completed more than 1,000 retinal treatments. Prior to joining MG Eye Foundation, he served as Senior Consultant at Purnima Netralaya, Tamolia; Consultant at KGMH, Medica; and Consultant at Jamshedpur Eye Hospital, Sakchi.",
    stats: [
      { value: "Director", label: "Role here" },
      { value: "1,000+", label: "Retina treatments" },
    ],
    expertise: [
      "Cataract surgery",
      "Retinal injection and laser therapy",
      "Glaucoma (intraocular pressure) management",
      "Treatment of ocular injuries",
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
  {
    name: "Dr. Malay Kumar Dwivedi",
    photo: "/Dr Malay Kumar Dwiwedi.jpg",
    hindi: "शिशु नेत्र रोग विशेषज्ञ",
    englishFocus: "Pediatric Ophthalmologist and Director",
    label: "Areas of focus: Cataract, Pediatric Eye Care, Squint, and Ocular Injury",
    qual: "MBBS, MS, FPOAS",
    spec: "Cataract, Pediatric Ophthalmology, Strabismus & Trauma",
    role: "Pediatric Ophthalmologist and Director, MG Eye Foundation, Gamharia",
    bio: "Dr. Dwivedi specialises in pediatric eye care and squint correction, and also performs cataract surgery and treats ocular injuries. He has completed more than 1,200 squint operations and undertook fellowship training at Aravind Eye Hospital, Madurai. Prior to joining MG Eye Foundation, he served as Consultant at Purnima Netralaya, Tamolia, and at Jamshedpur Eye Hospital, Sakchi.",
    stats: [
      { value: "Director", label: "Role here" },
      { value: "1,200+", label: "Squint operations" },
    ],
    expertise: [
      "Cataract surgery",
      "Pediatric eye examinations, conducted daily",
      "Squint correction surgery",
      "Treatment of ocular injuries",
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
] as const;
