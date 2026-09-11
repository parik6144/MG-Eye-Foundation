export type ServiceFaq = { q: string; a: string };
export type ServiceProcedure = { title: string; body: string };

export type ServiceClinical = {
  overview: string;
  causes: string[];
  symptoms: string[];
  treatment: string;
  procedures: ServiceProcedure[];
  types?: string[];
  faqs: ServiceFaq[];
  scope: string;
};

export const SERVICE_CLINICAL: Record<string, ServiceClinical> = {
  cataract: {
    overview:
      "A cataract is clouding of the eye’s natural lens. Light no longer focuses cleanly on the retina, so vision declines gradually. It is common with age, but it also follows diabetes, injury, inflammation inside the eye, smoking, obesity, or radiation. Drops cannot clear an established cataract. The definitive treatment is surgery: the cloudy lens is removed and a clear intraocular lens (IOL) is placed.",
    causes: [
      "Age-related change in the lens proteins",
      "Diabetes and other metabolic disease",
      "Ocular trauma or previous inflammation inside the eye",
      "Smoking, obesity, and long-term ultraviolet exposure",
      "Corticosteroid use and, less often, radiation therapy",
    ],
    symptoms: [
      "Hazy or blurred vision; objects look foggy or out of focus",
      "Difficulty seeing at night or in low light",
      "Colours that look faded or yellowish",
      "Glare and halos or starbursts around lights, especially while driving",
      "Double vision in one eye",
    ],
    treatment:
      "When cataract begins to interfere with reading, work, or safe walking, surgery is advised. Phacoemulsification uses ultrasound to fragment the cloudy lens through a small corneal incision. The fragments are aspirated and a foldable IOL is implanted. Most patients go home the same day. At M G Eye Foundation, lens power is planned with the Tomey optical biometer and, when a dense cataract blocks optical measurement, with ultrasound biometry. Surgery is performed under the ZEISS LUMERA 300 microscope with the Orteli Catrex 3 phaco system. If the capsule clouds months or years later, YAG laser capsulotomy can restore clarity without repeating cataract surgery.",
    procedures: [
      {
        title: "Phacoemulsification with foldable IOL",
        body: "A small incision is used. The cataract is emulsified with ultrasound and a foldable intraocular lens is placed in the capsular bag. Recovery is typically rapid, with few activity restrictions after the first days.",
      },
      {
        title: "IOL selection and premium options",
        body: "The surgeon discusses two or three suitable lenses based on the eye, corneal astigmatism, and visual needs. Options may include aspheric, toric (for astigmatism), and multifocal designs. The patient makes the final choice after the advantages and limits of each lens are explained. A small number of patients still need a low spectacle power for selected tasks.",
      },
      {
        title: "Biometry and surgical planning",
        body: "Axial length and corneal curvature are measured so IOL power is individual, not guessed. Dense cataracts that block optical biometry are measured with ultrasound.",
      },
      {
        title: "YAG laser capsulotomy",
        body: "If the posterior capsule opacifies after otherwise successful surgery, a short laser sitting can open a clear optical path.",
      },
    ],
    types: ["Nuclear sclerotic cataract", "Cortical cataract", "Posterior subcapsular cataract"],
    faqs: [
      {
        q: "Can a cataract be cured without surgery?",
        a: "Early glare can sometimes be managed with lighting and a change of glasses. The clouding itself does not reverse with medicines. Surgery is the only definitive treatment.",
      },
      {
        q: "How is the cataract removed?",
        a: "The cloudy natural lens is removed and a clear artificial lens is implanted in almost every case. The usual method is phacoemulsification.",
      },
      {
        q: "What are the advantages of phacoemulsification?",
        a: "A small incision, short operating time, day-care discharge in most cases, fewer wound-related restrictions, and earlier visual rehabilitation than older large-incision methods.",
      },
      {
        q: "How does a multifocal IOL work?",
        a: "The optic distributes light for distance, intermediate and near. Many patients reduce spectacle use. Some still prefer a thin pair of glasses for prolonged near work, and a minority notice rings around lights at night.",
      },
      {
        q: "When should an adult be operated?",
        a: "When the cataract interferes with daily life. Childhood cataract is more urgent and is assessed promptly.",
      },
    ],
    scope:
      "Cataract surgery, IOL counselling, biometry and YAG capsulotomy are performed in this hospital. Cost is stated before surgery. PM-JAY and Rajyakarmi papers are checked at the desk when relevant.",
  },
  glaucoma: {
    overview:
      "Glaucoma is a group of diseases in which the optic nerve is damaged, often in association with raised intraocular pressure. The nerve carries visual information to the brain. Once fibres are lost, that field of vision does not return. Many patients feel well in the early years, which is why screening after the age of 40, and earlier with family history or diabetes, matters.",
    causes: [
      "Impaired drainage of aqueous fluid from the eye",
      "Raised intraocular pressure",
      "Reduced blood flow to the optic nerve",
      "Corticosteroid use and some other medicines",
      "Family history, high refractive error, thyroid disease, previous eye injury",
    ],
    symptoms: [
      "Often none in early open-angle disease",
      "Gradual loss of side vision",
      "Halos around lights, headache, or a sudden drop in vision in acute pressure rise",
      "Unequal pupils or redness in an acute attack",
    ],
    treatment:
      "Care is aimed at lowering and then holding intraocular pressure so remaining nerve tissue is protected. Treatment may be drops, laser, tablets, surgery, or a combination, according to type and severity. At this hospital pressure is measured with the Tono-Pen, the nerve and retinal nerve-fibre layer are imaged on ZEISS CIRRUS OCT, and the anterior segment is examined at the slit lamp. YAG laser is used when indicated. Advanced filtration surgery (trabeculectomy, tube or valve) and dedicated Humphrey field analysis are not listed among our current in-house machines; after assessment we state clearly whether medical and laser care here is sufficient or whether a further surgical pathway is needed.",
    procedures: [
      {
        title: "Intraocular pressure measurement",
        body: "Tono-Pen tonometry gives a rapid, tolerable reading and is repeated at follow-up so the trend, not a single number, guides treatment.",
      },
      {
        title: "OCT of the optic nerve and RNFL",
        body: "Optical coherence tomography images the ganglion-cell complex and nerve-fibre layer without touching the eye, so early loss can be documented and compared over time.",
      },
      {
        title: "Medical therapy",
        body: "Pressure-lowering drops are the first line for most patients. Technique, timing and side-effects are explained so the regimen can actually be kept.",
      },
      {
        title: "Laser when indicated",
        body: "Selected laser procedures, including YAG where anatomically appropriate, are used to improve outflow or to treat a related capsular or pupillary problem.",
      },
    ],
    types: ["Primary open-angle glaucoma", "Angle-closure glaucoma", "Congenital glaucoma", "Secondary glaucoma"],
    faqs: [
      {
        q: "Will treatment restore lost vision?",
        a: "Vision already lost to glaucoma is not restored. Treatment is to prevent further loss. That is why early detection is the real advantage.",
      },
      {
        q: "How often should I be checked?",
        a: "Adults over 40 should have a periodic eye examination at least once a year, or more often if pressure is raised, there is a family history, or treatment has already started.",
      },
      {
        q: "What are the risk factors?",
        a: "Age, raised pressure, family history, diabetes, high or low blood pressure, thyroid disease, eye injury, steroid use, and high refractive error.",
      },
    ],
    scope:
      "Glaucoma detection, OCT monitoring, medical therapy and selected laser are provided here. If filtration or valve surgery is required, we say so after the examination rather than implying every procedure exists on site.",
  },
  retina: {
    overview:
      "The retina lines the back of the eye and converts light into neural signal. Disease of the retinal vessels, macula or vitreous produces blurred, distorted or missing vision. Diabetes, ageing of the macula, retinal vein occlusion, high myopia and injury are common drivers. Untreated, several of these conditions threaten permanent loss.",
    causes: [
      "Diabetic damage to retinal capillaries (non-proliferative then proliferative disease)",
      "Age-related macular degeneration — dry (atrophic) and wet (neovascular)",
      "Retinal vein occlusion with macular oedema",
      "Retinal tears, holes and detachment",
      "Retinopathy of prematurity in low-birth-weight infants",
    ],
    symptoms: [
      "Dim, distorted or missing central vision",
      "Floaters, flashes, or a curtain across the field",
      "Difficulty reading or seeing at night",
      "Sudden blurring in one eye (vein occlusion can harm vision within minutes)",
    ],
    treatment:
      "The retina cannot be judged by symptoms alone. Colour fundus photography (Forus) and ZEISS CIRRUS OCT show leakage, oedema, membranes and nerve-fibre change. Medical retina care here includes retinal laser for macular oedema and selected breaks, and intravitreal anti-VEGF or steroid injections for diabetic macular oedema, wet ARMD and vein occlusion. DR MALAY KUMAR DWIVEDI provides ROP screening for premature infants. Fluorescein angiography, ICG angiography, vitrectomy, macular-hole surgery and complex retinal-detachment surgery are tertiary vitreoretinal procedures; if the scan shows that pathway, it is named honestly after the visit.",
    procedures: [
      {
        title: "OCT and fundus imaging",
        body: "Cross-sectional OCT and colour photographs document diabetic retinopathy, ARMD and macular oedema so treatment and follow-up have a baseline.",
      },
      {
        title: "Retinal laser",
        body: "Laser is used for macular oedema and to seal small retinal breaks, reducing the risk of further leakage or detachment in selected cases.",
      },
      {
        title: "Intravitreal injection",
        body: "Medicine is placed in the vitreous cavity for diabetic retinopathy, retinal vein occlusion and wet ARMD, targeting the drivers of fluid and abnormal vessels.",
      },
      {
        title: "Diabetic retinopathy programme",
        body: "Non-proliferative disease shows microaneurysms, haemorrhages and oedema. Proliferative disease grows fragile new vessels that bleed. Laser, injection and, when needed, surgical referral are sequenced to the stage.",
      },
      {
        title: "ROP screening and surgery",
        body: "Premature and low-birth-weight babies are screened for abnormal retinal vessel growth. Laser, injection or surgery is planned according to stage.",
      },
    ],
    types: [
      "Non-proliferative and proliferative diabetic retinopathy",
      "Dry and wet age-related macular degeneration",
      "Retinal vein occlusion",
      "Retinal tear or detachment",
      "Retinopathy of prematurity",
    ],
    faqs: [
      {
        q: "Can a damaged retina heal by itself?",
        a: "A torn or detached retina does not heal on its own. Prompt examination is required.",
      },
      {
        q: "What does vitreoretinal mean?",
        a: "It refers to disease of the vitreous gel and the retina. Medical treatment (laser, injection, imaging) and surgical treatment (vitrectomy) are both used worldwide; we provide the medical-retina and ROP work listed above in this hospital.",
      },
      {
        q: "How is diabetic retinopathy treated?",
        a: "According to stage: observation, retinal laser, intra-ocular injections, and surgery in advanced disease. Control of blood sugar, blood pressure and lipids remains part of care.",
      },
    ],
    scope:
      "Medical retina — imaging, laser, injection — and ROP care are delivered here under DR KUMAR SAKET and DR MALAY KUMAR DWIVEDI. Complex vitreoretinal surgery is discussed only when the examination shows it is needed.",
  },
  cornea: {
    overview:
      "The cornea is the clear front window of the eye. Infection, injury, chemical exposure, dystrophy, ectasia (thinning, including keratoconus), allergy, severe dry eye and autoimmune disease can scar or distort it so that light is blocked or warped. Workplace injuries from nearby industrial areas are seen regularly in this hospital.",
    causes: [
      "Infection (bacterial, viral, fungal keratitis)",
      "Trauma, foreign body, chemical injury",
      "Ectasia and keratoconus",
      "Dystrophy and degeneration",
      "Dry eye, allergy, and some autoimmune disorders",
    ],
    symptoms: [
      "Pain, redness, watering or discharge",
      "Blurred vision and light sensitivity",
      "A feeling of grit or a foreign body",
      "Visible opacity or scarring on the cornea",
    ],
    treatment:
      "Small abrasions often heal under a bandage contact lens or patch with prescribed drops. Ulcers and chemical injuries need same-day slit-lamp assessment, anterior-segment imaging, and intensive medical therapy. Keratoconus may be managed optically with rigid gas-permeable or scleral lenses in centres that fit them. Full-thickness or endothelial keratoplasty (PK, TPK, DSEK/DMEK) and collagen cross-linking are specialised corneal surgeries. We treat injury, infection and ocular-surface disease here; if the cornea needs grafting or CXL, that is stated after examination rather than listed as a routine in-house operation.",
    procedures: [
      {
        title: "Slit-lamp and anterior-segment imaging",
        body: "Magnified examination of cornea, anterior chamber and lens, with photographic documentation when needed.",
      },
      {
        title: "Abrasion, ulcer and injury care",
        body: "Foreign-body removal, intensive topical therapy, and close follow-up so a simple scratch does not become a sight-threatening ulcer.",
      },
      {
        title: "Ocular surface and dry-eye overlap",
        body: "Allergy, exposure and tear-film failure are treated as part of corneal care when they threaten the epithelium.",
      },
    ],
    faqs: [
      {
        q: "Can a damaged cornea repair itself?",
        a: "Minor epithelial injuries often heal in one to three days. Deeper stromal injury, infection or chemical burn needs medical treatment and can scar.",
      },
      {
        q: "Does Bowman’s layer regenerate?",
        a: "Bowman’s layer does not regenerate. Injury there may leave a permanent scar.",
      },
      {
        q: "How is a damaged cornea treated?",
        a: "Remove any foreign body, protect the surface, and use prescribed drops or ointment. Contact lenses are stopped until the surface has healed. Severe disease may need a transplant at a corneal-surgery centre.",
      },
    ],
    scope:
      "Emergency and medical cornea care, including industrial injury, is provided in working hours. Keratoplasty and CXL are not advertised as standard procedures of this unit.",
  },
  "dry-eye": {
    overview:
      "Dry eye disease means the tear film cannot keep the ocular surface stably wet. Paradoxically the eye may water. Screens, dust, age, meibomian-gland dysfunction, contact-lens wear and some medicines worsen it. It is an ocular-surface diagnosis, not a slogan, and it is managed by identifying evaporative versus aqueous-deficient drivers.",
    causes: [
      "Reduced tear production or excessive evaporation",
      "Meibomian gland dysfunction and blepharitis",
      "Prolonged near work and air-conditioned environments",
      "Age, hormonal change, and selected systemic medicines",
      "Allergy and coexisting corneal surface disease",
    ],
    symptoms: [
      "Burning, gritty or tired eyes",
      "Redness, light sensitivity, fluctuating blur",
      "Watering that does not bring lasting comfort",
      "Worse symptoms with screens or wind",
    ],
    treatment:
      "The slit lamp shows staining, tear-break-up and lid-margin disease. Treatment is a regimen: lid hygiene, lubricating drops of the right type, anti-inflammatory drops when indicated, and environmental advice. Surgery is rarely first-line. If infection, allergy or a true corneal ulcer is present, that is treated as cornea disease, not as “dry eye drops only”.",
    procedures: [
      {
        title: "Surface assessment",
        body: "History plus slit-lamp examination of tears, lids and cornea to separate dry eye from allergy, infection and exposure.",
      },
      {
        title: "Medical regimen",
        body: "Lubricants, lid care and, when needed, prescription anti-inflammatory therapy. Over-the-counter drops used at home are reviewed so they are not working against the plan.",
      },
    ],
    faqs: [
      {
        q: "Why does a dry eye water?",
        a: "Reflex tearing from an unstable, uncomfortable surface. The tears are poor quality, so the eye still feels dry.",
      },
      {
        q: "Is this usually surgery?",
        a: "No. Most patients need a daily medical plan and follow-up if symptoms persist.",
      },
    ],
    scope: "Dry-eye and ocular-surface clinics are run by both consultants. Tests you do not need are not added for show.",
  },
  pediatric: {
    overview:
      "A child’s visual system is still developing. Uncorrected refractive error, amblyopia (lazy eye), cataract, squint, ROP and trauma can permanently reduce vision if they are missed in the years when the brain is still learning to see. Examination is adapted to age: Lea symbols, Tono-Pen when pressure must be measured, stereo tests, and prism assessment of alignment.",
    causes: [
      "Refractive error (myopia, hyperopia, astigmatism)",
      "Amblyopia from squint, unequal glasses power, or deprivation",
      "Congenital or developmental cataract",
      "Retinopathy of prematurity after preterm birth",
      "Injury, including chemical and projectile trauma",
    ],
    symptoms: [
      "Sitting close to screens, squeezing the eyes, or head tilt",
      "A turned or apparently weaker eye",
      "School reports of not seeing the board",
      "In infants: poor tracking, white pupil, watering, or light sensitivity",
    ],
    treatment:
      "DR MALAY KUMAR DWIVEDI provides daily paediatric clinics. Care includes refraction (NIDEK ARK), glasses, amblyopia therapy (glasses, patching, selected exercises), paediatric cataract surgery when indicated, ROP screening, and trauma care. Contact lenses are used in selected aphakic or anisometropic children. Botox for selected squints is a specialised option discussed only when alignment physiology supports it.",
    procedures: [
      {
        title: "Age-appropriate visual acuity",
        body: "Lea symbols and picture optotypes measure acuity in children who cannot read a letter chart, so amblyopia is not missed.",
      },
      {
        title: "Paediatric cataract surgery",
        body: "Congenital, developmental, traumatic and secondary cataracts in children are treated as urgent visual problems, not as adult waiting-list cataracts.",
      },
      {
        title: "ROP screening and surgery",
        body: "Premature babies are screened in the early weeks of life for abnormal retinal vessels. Treatment follows stage.",
      },
      {
        title: "Trauma",
        body: "Chemical injury, blunt injury and penetrating injury in children are assessed the same working day whenever possible.",
      },
      {
        title: "Tono-Pen and stereo testing",
        body: "Portable tonometry screens for paediatric glaucoma. Titmus stereo testing and prism sets quantify binocular vision and squint.",
      },
    ],
    faqs: [
      {
        q: "When should a child first see an ophthalmologist?",
        a: "A first examination around six months of age, another by age three, then yearly for school-age children without known disease. Glasses or a squint need closer review.",
      },
      {
        q: "Can glasses fix a lazy eye?",
        a: "Sometimes. If vision does not improve after a proper trial of spectacles (often 4–8 weeks), patching or further treatment is considered.",
      },
      {
        q: "What do paediatric ophthalmologists do?",
        a: "They diagnose and treat children’s eye disease, prescribe glasses or contact lenses, and operate when cataract, squint, ROP or trauma requires it.",
      },
    ],
    scope: "Paediatric ophthalmology is a core service of this hospital, led by DR MALAY KUMAR DWIVEDI, including ROP.",
  },
  squint: {
    overview:
      "Squint (strabismus, bhengaapan) is misalignment: the two eyes do not look at the same point. In a child the brain may suppress the turned eye, producing amblyopia. Causes include refractive error, inheritance, and neurological or developmental disease. Adults may present with long-standing or new double vision.",
    causes: [
      "Uncorrected refractive error",
      "Family history; association with some developmental conditions",
      "Muscle or innervational imbalance",
      "After injury or as a sign of neurological disease in new adult squint",
    ],
    symptoms: [
      "An eye that turns in, out, up or down",
      "Head tilt, closing one eye in sunlight, or poor depth",
      "Double vision, headache, or difficulty reading",
      "In children: decreased vision in one eye if untreated",
    ],
    treatment:
      "Alignment is measured with prisms and stereo tests. Glasses are tried first when the squint is refractive. Selected cases need surgery to reposition extraocular muscles. Botox can temporarily weaken a muscle to allow realignment in carefully chosen patients. DR MALAY KUMAR DWIVEDI performs squint assessment and surgery in this hospital. Cost and the likely need for glasses after surgery are explained beforehand.",
    procedures: [
      {
        title: "Measurement of alignment and stereopsis",
        body: "Prism sets and stereo charts show the size of the deviation and whether both eyes still work together.",
      },
      {
        title: "Optical treatment",
        body: "Full refractive correction is the first step in many childhood squints and in accommodative esotropia.",
      },
      {
        title: "Squint surgery",
        body: "Muscle surgery straightens the eyes when glasses are not enough, aiming to restore alignment and protect binocular development in children.",
      },
    ],
    types: ["Esotropia (in-turning)", "Exotropia (out-turning)", "Hypertropia (up)", "Hypotropia (down)"],
    faqs: [
      {
        q: "Can a toddler’s squint be treated?",
        a: "Yes. Glasses, occlusion, exercises, injection in selected cases, or surgery — according to the type and the child’s age.",
      },
      {
        q: "Can a child develop a squint later?",
        a: "Some are present at birth; others appear between one and four years. New squint at any age needs examination.",
      },
      {
        q: "What is strabismus?",
        a: "The clinical name for squint: the eyes are not aligned on the same target.",
      },
    ],
    scope: "Squint clinics and surgery are provided by DR MALAY KUMAR DWIVEDI. A new adult squint is examined for neurological as well as muscular causes.",
  },
  oculoplasty: {
    overview:
      "Oculoplasty is surgery of the eyelids, the lacrimal (tear) drainage system and the tissues around the eye. Watering from a blocked duct, a cut lid, or a swelling at the inner canthus is not a “surface irritation” problem — it is a structural one.",
    causes: [
      "Nasolacrimal duct obstruction (congenital or acquired)",
      "Lid laceration, tumour or malposition",
      "Infection of the lacrimal sac (dacryocystitis)",
    ],
    symptoms: [
      "Constant watering (epiphora)",
      "Discharge from the inner corner of the eye",
      "A cut, droop or malposition of the eyelid",
    ],
    treatment:
      "DCR (dacryocystorhinostomy) creates a new passage from the lacrimal sac into the nose when the duct is blocked. DCT (dacryocystectomy) removes a chronically diseased sac when a bypass is not appropriate. Lid repair restores anatomy after injury or after planned lid surgery. Assessment is clinical, with probing and syringing of the lacrimal pathway when needed.",
    procedures: [
      {
        title: "DCR Surgery",
        body: "A new drainage path is made between the lacrimal sac and the nasal cavity so tears can leave the eye when the nasolacrimal duct is blocked.",
      },
      {
        title: "DCT Surgery",
        body: "The lacrimal sac is excised in selected chronic or complex sac disease where reconstruction is not the correct first operation.",
      },
      {
        title: "Lid Repair Surgery",
        body: "Eyelid lacerations and structural lid defects are repaired so the cornea is protected and the lid margin is restored.",
      },
    ],
    faqs: [
      {
        q: "Is watering always dry eye?",
        a: "No. Reflex watering from a dry surface is different from a blocked tear duct. The latter often needs DCR, not only lubricants.",
      },
    ],
    scope: "DCR, DCT and lid repair are listed oculoplasty procedures of this service.",
  },
  refractive: {
    overview:
      "A refractive error means the optics of the eye do not focus a sharp image on the retina. The common errors are myopia (near sight), hyperopia (far sight), astigmatism (irregular corneal or lenticular curvature) and presbyopia (age-related loss of near focus). Correction is optical or surgical.",
    causes: [
      "Eyeball length that is too long or too short",
      "Irregular corneal shape (astigmatism)",
      "Ageing and stiffening of the crystalline lens (presbyopia)",
      "Inheritance, often presenting in childhood and progressing",
    ],
    symptoms: [
      "Hazy vision",
      "Glare or a halo around bright lights",
      "Squinting, headache and eye strain",
      "Trouble focusing for reading or screens",
    ],
    treatment:
      "Spectacles and contact lenses correct most refractive errors. Laser-assisted in situ keratomileusis (LASIK) reshapes the cornea with a laser. Photorefractive keratectomy (PRK) removes the epithelium and reshapes the stromal surface. An implantable collamer lens (ICL) is placed between the iris and the natural lens to add optical power without removing corneal tissue. Suitability requires a stable refraction, a healthy cornea and a full work-up. Children are treated with glasses; LASIK is not a paediatric first-line option.",
    procedures: [
      {
        title: "Lasik, PRK",
        body: "LASIK uses a corneal flap and laser ablation of the stroma. PRK ablates after epithelial removal. Both aim to reduce dependence on glasses for myopia, hyperopia and astigmatism in eligible adults.",
      },
      {
        title: "ICL",
        body: "A collamer lens is implanted in the posterior chamber, in front of the natural lens, to correct higher refractive errors or eyes that are not LASIK candidates.",
      },
    ],
    faqs: [
      {
        q: "Can refractive errors be corrected?",
        a: "Yes — with glasses, contact lenses, or surgery (LASIK, PRK or ICL) when the eye is eligible.",
      },
      {
        q: "What is the most common refractive error?",
        a: "Myopia, hyperopia, astigmatism and presbyopia are all common. The right label is made on refraction, not on a single symptom.",
      },
      {
        q: "Can high uncorrected error in a child cause permanent loss?",
        a: "Yes. High, uncorrected refractive error in childhood can lead to amblyopia if it is not treated early.",
      },
    ],
    scope: "LASIK, PRK and ICL are the refractive surgical options listed for this service, after refraction and corneal work-up.",
  },
  other: {
    overview:
      "Beyond the named surgical specialties, the hospital lists neuro-ophthalmology, an optical shop and a pharmacy. Neuro-ophthalmology sits between neurology and ophthalmology: vision, eye movement, pupils and visual field when the problem may be in the nerve or brain rather than in the ocular media.",
    causes: [
      "Optic nerve or pathway disease",
      "Raised intracranial pressure, inflammation, injury",
      "Need for dispensed spectacles after refraction",
      "Need for prescribed eye medicines after a consultation",
    ],
    symptoms: [
      "Sudden or progressive loss of vision",
      "Unequal or poorly reactive pupils",
      "Double vision, field defects, colour desaturation",
      "Acute headache with visual change",
    ],
    treatment:
      "Neuro-ophthalmic signs are examined by the ophthalmologist; some patients need neurological imaging or referral. The optical shop dispenses spectacles to the refraction. The pharmacy compounds and dispenses prescribed drops and tablets.",
    procedures: [
      {
        title: "Neuro-Ophthalmology",
        body: "Assessment of optic nerve, pupils, ocular motility and visual field when the history suggests a neurological cause of visual loss, diplopia or pupil change.",
      },
      {
        title: "Optical Shop",
        body: "Spectacles are fitted to the measured prescription, including paediatric and occupational needs.",
      },
      {
        title: "Pharmacy",
        body: "Prescribed ophthalmic medicines are dispensed with instructions on dose, side-effects and duration.",
      },
    ],
    faqs: [
      {
        q: "What does a neuro-ophthalmologist treat?",
        a: "Visual problems caused by disease of the brain, optic nerve or the nerves and muscles that move the eye — not only a need for glasses.",
      },
      {
        q: "Can optic-nerve damage be repaired?",
        a: "Optic-nerve fibres do not regenerate. The aim is to diagnose the cause quickly and protect remaining function.",
      },
    ],
    scope: "Neuro-ophthalmic examination, optical dispensing and pharmacy are the three listed supporting services.",
  },
};

export function getServiceClinical(slug: string) {
  return SERVICE_CLINICAL[slug];
}
