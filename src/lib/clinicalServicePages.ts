export type ClinicalCard = { title: string; body: string };
export type ClinicalBlock = { title: string; body: string; chips?: string[] };
export type ClinicalFaq = { q: string; a: string; list?: string[] };

export type ClinicalPage = {
  slug: string;
  kicker: string;
  title: string;
  breadcrumb: string;
  hero: string;
  image: string;
  imageAlt: string;
  whatTitle: string;
  whatBody: string;
  causesKicker: string;
  causesTitle: string;
  causesIntro?: string;
  causes: ClinicalCard[];
  symptomsKicker: string;
  symptomsTitle: string;
  symptomsIntro?: string;
  symptoms: ClinicalCard[];
  treatment: string;
  servicesTitle: string;
  services: ClinicalBlock[];
  machinesTitle?: string;
  machines?: ClinicalCard[];
  extraTitle?: string;
  extraItems?: string[];
  faqKicker: string;
  faqs: ClinicalFaq[];
  bookLabel: string;
  surgeons: { name: string; spec: string }[];
};

const SAKET = { name: "DR KUMAR SAKET", spec: "Cataract, medical retina and trauma specialist" };
const MALAY = { name: "DR MALAY KUMAR DWIVEDI", spec: "Pediatric Ophthalmologist, Cataract and Squint specialist" };

const CORNEA: ClinicalPage = {
  slug: "cornea",
  kicker: "Cornea treatment",
  title: "Cornea Services",
  breadcrumb: "Cornea Services",
  hero: "M G EYE Foundation, Bara Gamharia, Jamshedpur, provides assessment and treatment for corneal abrasion, ulcer, scarring, keratoconus and other diseases of the clear front window of the eye. DR KUMAR SAKET and DR MALAY KUMAR DWIVEDI plan care after a detailed examination of the ocular surface.",
  image: "/service-photos/cornea.png",
  imageAlt: "Cornea care at M G EYE Foundation",
  whatTitle: "What is the cornea?",
  whatBody:
    "The cornea is the clear, curved front surface of the eye. It focuses light and protects deeper structures. Infection, injury, dystrophy, thinning or dry eye can cloud or distort this surface. When the cornea is damaged, vision may fall even if the lens and retina are healthy.",
  causesKicker: "Why it develops",
  causesTitle: "Causes",
  causesIntro: "Corneal disease has many starting points. Infection and injury are common; dystrophy and thinning may run in families.",
  causes: [
    { title: "Infections", body: "Bacteria, viruses, fungi or acanthamoeba can invade the cornea, especially after injury or contact-lens wear, and produce ulceration." },
    { title: "Trauma", body: "A scratch, foreign body or blunt injury can break the epithelial barrier and allow infection or scarring." },
    { title: "Injuries", body: "Chemical splash, thermal burn or penetrating injury may destroy corneal tissue and need urgent washing and specialist care." },
    { title: "Toxic chemicals", body: "Alkali and acid exposure damage cells rapidly. Immediate irrigation and examination reduce the depth of injury." },
    { title: "Dystrophies and degeneration", body: "Inherited or age-related change in corneal layers can cause haze, recurrent erosion or progressive thinning." },
    { title: "Autoimmune disorders", body: "Systemic immune disease may inflame the ocular surface or sclera and secondarily involve the cornea." },
    { title: "Ectasia (thinning)", body: "Keratoconus and related ectasias steepen and thin the cornea, distorting vision and sometimes progressing." },
    { title: "Nutritional deficiencies", body: "Severe vitamin A deficiency and related malnutrition can soften the cornea and raise the risk of ulcer." },
    { title: "Allergies", body: "Chronic allergic inflammation roughens the surface, causes itching and may lead to shield ulcers in children." },
    { title: "Tumours", body: "Benign or malignant growths of the ocular surface can invade or distort the cornea." },
    { title: "Dry eye and glaucoma", body: "A poor tear film or long-term pressure disease and its drops can stress the surface and delay healing." },
  ],
  symptomsKicker: "How it feels",
  symptomsTitle: "Symptoms",
  symptomsIntro: "Surface disease often hurts. Seek care quickly if pain, discharge or sudden blur follows injury or lens wear.",
  symptoms: [
    { title: "Pain", body: "The cornea has many nerves. Even a small abrasion can cause sharp pain, especially on blinking." },
    { title: "Discharge", body: "Mucoid or purulent discharge suggests infection and needs examination the same day when possible." },
    { title: "Blurred vision", body: "Haze, irregular astigmatism or oedema scatter light so print and faces lose sharpness." },
    { title: "Tearing", body: "Reflex watering is the eye’s attempt to wash an irritated surface." },
    { title: "Redness", body: "Ciliary injection around the cornea is a warning sign of keratitis or ulcer." },
    { title: "Light sensitivity", body: "Photophobia is typical when the epithelium is broken or inflamed." },
    { title: "Corneal scarring", body: "After healing, a white opacity may remain and permanently reduce vision if it sits on the visual axis." },
  ],
  treatment:
    "Mild injuries may be treated with a patch, a bandage contact lens, prescribed drops or tablets. Advanced disease such as dense scar, failed endothelium or uncontrolled infection may need corneal transplant or other surgery. Keratoconus is often managed first with rigid or scleral lenses. Autoimmune disease is treated together with the underlying systemic condition. Cross-linking (CXL) is used to slow progressive ectasia when the cornea is suitable.",
  servicesTitle: "Cornea services provided by us",
  services: [
    {
      title: "Penetrating Keratoplasty (PK)",
      body: "A full-thickness transplant removes the diseased central cornea and replaces it with donor tissue. It is used when all layers are scarred or the architecture cannot be restored by a partial-thickness graft.",
    },
    {
      title: "Therapeutic Penetrating Keratoplasty (TPK)",
      body: "TPK is advised in severe fungal keratitis when infection cannot be controlled medically, to stop spread, protect the globe and, where possible, salvage structure.",
    },
    {
      title: "DSEK / DMEK",
      body: "Endothelial keratoplasty replaces only the inner layers. DSEK uses a small incision to remove damaged endothelium and Descemet’s membrane and place a partial-thickness donor button. DMEK replaces host Descemet membrane and endothelium with donor DM and endothelium alone.",
      chips: ["DSEK", "DMEK"],
    },
    {
      title: "Hard contact lens (RGP and scleral)",
      body: "Rigid gas-permeable lenses can improve acuity in keratoconus and after transplant. Scleral lenses rest on the white of the eye and vault over an irregular cornea, creating a smooth optical surface.",
    },
    {
      title: "CXL (corneal collagen cross-linking)",
      body: "CXL uses riboflavin and controlled ultraviolet light to stiffen corneal collagen and inhibit progression of ectasia in suitable eyes.",
    },
  ],
  machinesTitle: "How we examine the cornea here",
  machines: [
    { title: "Slit lamp", body: "Magnified examination of the cornea, conjunctiva, anterior chamber and lens for abrasion, ulcer, infiltrate and scar." },
    { title: "Appasamy Anterior Segment Imaging", body: "Documents the front of the eye so change over time can be compared with precision." },
    { title: "NIDEK ARK", body: "Measures refractive power and corneal curvature, which helps in keratoconus and post-transplant follow-up." },
    { title: "ZEISS LUMERA 300", body: "Operating microscope used when corneal microsurgery is performed in this hospital." },
  ],
  faqKicker: "Cornea FAQs",
  faqs: [
    {
      q: "How do you treat a damaged cornea?",
      a: "Treatment may include:",
      list: [
        "Removing foreign material from the eye",
        "A temporary bandage contact lens or eye patch",
        "Ointments, medicines or drops prescribed after examination",
        "Stopping contact-lens wear while the surface heals",
      ],
    },
    {
      q: "Can a damaged cornea repair itself?",
      a: "The cornea can heal small injuries. Healthy epithelial cells slide across and close a minor wound. A severe injury takes longer and may leave a scar.",
    },
    {
      q: "What happens if the cornea is damaged?",
      a: "Injury, infection or disease can leave scars that block or distort light as it enters the eye, reducing vision.",
    },
    {
      q: "How long does the cornea take to heal?",
      a: "Most abrasions heal within one to three days and seldom progress to recurrent erosion or infection if treated promptly.",
    },
    {
      q: "Why is the cornea slow to heal?",
      a: "Smoking, diabetes, neurotrophic disease, ocular surface disease, abnormal cell signalling and impaired corneal nerves can delay healing.",
    },
    {
      q: "Does the cornea grow back?",
      a: "After minor injury or infection the surface usually regenerates. Pain, blur and redness can occur during healing. Severe symptoms need medical care.",
    },
    {
      q: "Which layer of the cornea cannot regenerate?",
      a: "Bowman’s layer helps the cornea keep its shape. If it is injured it does not regenerate and a scar may form.",
    },
  ],
  bookLabel: "Book a cornea consultation",
  surgeons: [SAKET, MALAY],
};

const GLAUCOMA: ClinicalPage = {
  slug: "glaucoma",
  kicker: "Glaucoma treatment",
  title: "Glaucoma Services",
  breadcrumb: "Glaucoma Services",
  hero: "If you are over 40, regular eye checks help screen for glaucoma before vision is lost. At M G EYE Foundation, Bara Gamharia, Jamshedpur, DR KUMAR SAKET monitors eye pressure, the optic nerve and visual function, and plans drops, laser or surgery according to the type and stage of disease.",
  image: "/service-photos/glaucoma.png",
  imageAlt: "Glaucoma care at M G EYE Foundation",
  whatTitle: "What is glaucoma?",
  whatBody:
    "Glaucoma is a group of diseases that slowly damage the optic nerve, which carries visual information from the eye to the brain. Raised intraocular pressure is the main treatable risk, but the nerve can also suffer when blood flow is reduced. Untreated glaucoma can lead to irreversible blindness. Early disease often has no pain, which is why screening matters.",
  causesKicker: "Why it develops",
  causesTitle: "Causes",
  causesIntro: "More than one factor may act together. Age and family history raise risk even when the eye feels normal.",
  causes: [
    { title: "Blocked or limited drainage", body: "Aqueous humour must leave the eye through the angle. When outflow is reduced, pressure rises and the nerve is compressed over time." },
    { title: "Medications", body: "Corticosteroids and some dilating drops can raise pressure in susceptible people. Always tell the doctor about steroid use." },
    { title: "Reduced blood flow to the nerve", body: "The optic nerve needs a steady blood supply. Vascular disease and low perfusion pressure can damage nerve fibres even at modest eye pressure." },
  ],
  symptomsKicker: "How it feels",
  symptomsTitle: "Symptoms",
  symptomsIntro: "Open-angle glaucoma is often silent. Angle-closure attacks are sudden and need urgent care.",
  symptoms: [
    { title: "Sudden or transient vision loss", body: "A drop in vision, even if it comes and goes, can signal an acute pressure spike or nerve ischaemia." },
    { title: "Rainbow-coloured halos", body: "Halos around lights, especially with ache and nausea, may mean corneal oedema from high pressure." },
    { title: "Double vision", body: "Diplopia is less typical of chronic glaucoma but is recorded when present and investigated." },
    { title: "Intractable headaches", body: "Severe brow or head pain with a red eye and vomiting is an emergency until angle closure is excluded." },
    { title: "Pupil abnormalities", body: "Unequal pupils or a poorly reactive pupil can accompany acute glaucoma or nerve disease." },
  ],
  treatment:
    "Treatment aims to lower intraocular pressure and protect remaining nerve fibres. Care may include prescription drops, oral medicines, laser, surgery, or a combination, according to severity and the type of glaucoma. Vision already lost cannot be restored; the goal is to keep what remains.",
  servicesTitle: "Glaucoma services provided by us",
  services: [
    { title: "Goldmann applanation tonometry", body: "One of the most accurate methods used to measure intraocular pressure at the slit lamp." },
    { title: "Pachymetry", body: "A simple, painless measurement of corneal thickness, which is needed to interpret pressure readings correctly." },
    { title: "Humphrey visual field analysis", body: "The Humphrey field analyser maps the extent of the visual field so silent side-vision loss can be documented and followed." },
    { title: "OCT for ganglion cell complex and RNFL", body: "Optical coherence tomography images and measures the ganglion cell complex and retinal nerve fibre layer without touching the eye." },
    { title: "Ultrasound biomicroscopy", body: "UBM images the anterior segment when the angle, iris and ciliary body need to be seen in more detail." },
    { title: "Trabeculectomy surgery", body: "A filtering operation that lowers pressure inside the eye. It remains a gold-standard surgical option in many patients." },
    { title: "Glaucoma valve surgery", body: "A valved device opens to drain excess fluid from the eye to an external reservoir when further pressure lowering is required." },
    { title: "Glaucoma shunt surgery", body: "A tube shunt provides an alternative drainage path when prior surgery has failed or the eye is at high risk." },
    { title: "Pediatric glaucoma surgery", body: "Surgery in children most often uses external trabeculotomy or goniotomy, chosen according to the anatomy of the angle." },
  ],
  machinesTitle: "How we assess glaucoma here",
  machines: [
    { title: "Tono-Pen", body: "Handheld measurement of intraocular pressure that is quick and comfortable, including for children and post-operative eyes." },
    { title: "ZEISS CIRRUS 500 OCT", body: "High-resolution scans of the optic nerve, RNFL and ganglion cell complex to detect and monitor glaucoma." },
    { title: "Forus fundus camera", body: "Photographs the optic disc so cupping and disc haemorrhage can be compared visit to visit." },
    { title: "Slit lamp and anterior segment imaging", body: "Examines the angle pathway and documents the front of the eye." },
    { title: "Appasamy YAG laser", body: "Used when a laser opening in the iris is anatomically indicated as part of glaucoma care." },
    { title: "ZEISS LUMERA 300", body: "Surgical microscope for glaucoma operations performed in this hospital." },
  ],
  faqKicker: "Glaucoma FAQs",
  faqs: [
    {
      q: "What are the different types of glaucoma?",
      a: "The main types are:",
      list: ["Primary open-angle glaucoma", "Angle-closure glaucoma", "Congenital glaucoma", "Secondary glaucoma"],
    },
    {
      q: "What are the risk factors for developing glaucoma?",
      a: "Risk rises with age. Other factors include raised eye pressure, family history, diabetes, high or low blood pressure, thyroid disorder, eye injury, high refractive error and steroid use.",
    },
    {
      q: "What happens after shunt surgery for glaucoma?",
      a: "Avoid activities that strain the eye for several weeks. Use a laxative if you are constipated, so you do not strain while passing stools.",
    },
    {
      q: "What is the success rate of glaucoma surgery?",
      a: "Glaucoma surgery has about a 70 to 90 percent success rate for at least one year in older patients. Individual results depend on the type of glaucoma and previous surgery.",
    },
    {
      q: "How often should glaucoma be checked?",
      a: "If you are above 40, you should be examined periodically, typically once a year, even if the eyes feel comfortable.",
    },
    {
      q: "Will my vision be restored after treatment?",
      a: "Vision already lost from glaucoma is irreversible. Proper treatment can maintain remaining vision and slow further loss.",
    },
  ],
  bookLabel: "Book a glaucoma consultation",
  surgeons: [SAKET, MALAY],
};

const OCULOPLASTY: ClinicalPage = {
  slug: "oculoplasty",
  kicker: "Oculoplastic surgery",
  title: "Oculoplasty Services",
  breadcrumb: "Oculoplasty Services",
  hero: "Oculoplasty is plastic and reconstructive surgery of the eyelids, tear ducts and tissues around the eye. At M G EYE Foundation, Bara Gamharia, Jamshedpur, plans are individual: function first, then appearance. DR KUMAR SAKET and DR MALAY KUMAR DWIVEDI assess lid position, watering and orbital problems in this hospital.",
  image: "/treats/malay-injury.png",
  imageAlt: "Oculoplasty care at M G EYE Foundation",
  whatTitle: "What is oculoplasty?",
  whatBody:
    "Oculoplasty covers operations on the eyelids and surrounding structures. Some procedures correct a structural problem so the eye is protected and tears drain. Others improve appearance after ageing, injury or tumour surgery. The aim is comfort, safety of the ocular surface, and a natural look.",
  causesKicker: "When surgery is needed",
  causesTitle: "When does one need ophthalmic plastic surgery?",
  causesIntro: "Need is judged by function, infection risk and, where relevant, appearance after disease or injury.",
  causes: [
    { title: "Congenital", body: "Gaps in the eyelids, abnormal lid position, abnormal orbit shape or size, and blocked tear passages present from birth can be reconstructed." },
    { title: "Traumatic (injury)", body: "Eyelid laceration, scar, orbito-facial fracture or loss of the eyeball can be repaired so the eye works better and looks more natural." },
    { title: "Age-related", body: "In-turning or out-turning lids, lashes rubbing the eye, droopy lids, bags and herniated orbital fat are common with age and can be corrected." },
    { title: "Tumour", body: "Cancers and other tumours of the lids and orbits are managed surgically. The priority is to protect life and vision, then reconstruct." },
    { title: "Blocked tear ducts", body: "Watering with discharge and repeated infection can damage the eye and surrounding face. DCR (dacryocystorhinostomy) and DCT (dacryocystectomy) are the operations used." },
    { title: "Thyroid eye disease", body: "Thyroid disease can swell the lids and orbits and threaten vision. If medicines are not enough, oculoplastic surgery is used to protect the eye." },
  ],
  symptomsKicker: "How it feels",
  symptomsTitle: "Symptoms",
  symptomsIntro: "Watering, a lid that will not close, or a lump near the inner corner should be examined, not ignored.",
  symptoms: [
    { title: "Watering with discharge", body: "Tears spill because the drainage path is blocked. Sticky discharge often means the sac is infected." },
    { title: "Lid turning in or out", body: "Lashes rub the cornea (entropion) or the lid hangs away (ectropion), causing redness and irritation." },
    { title: "Droopy lid", body: "Ptosis can cover the pupil, reduce the field of vision and force the brow to lift all day." },
    { title: "Lid injury or scar", body: "A cut or old scar may leave the eye exposed or the blink incomplete." },
    { title: "Swelling of the orbit", body: "Fullness, pain or double vision can come from thyroid orbitopathy, fracture or a mass." },
    { title: "A lump on the lid", body: "Not every lump is cancer, but lid tumours need examination and, when indicated, biopsy or excision." },
  ],
  treatment:
    "After examination of the lids, tear pathway and orbit, surgery is tailored to the defect. Reconstructive work restores protection of the cornea and drainage of tears. Cosmetic work is discussed separately. Complex orbital disease may be planned with allied surgical specialties when the case requires it.",
  servicesTitle: "Oculoplasty services provided by us",
  services: [
    {
      title: "DCR surgery",
      body: "Dacryocystorhinostomy treats blocked tear ducts in adults by creating a new passage between the lacrimal sac and the nose, so tears drain past the blockage.",
    },
    {
      title: "DCT surgery",
      body: "Dacryocystectomy removes the lacrimal sac when a new drainage passage is not appropriate, for example in selected infected or damaged sacs.",
    },
    {
      title: "Lid repair surgery",
      body: "Eyelid reconstruction (including blepharoplasty when indicated) restores function and appearance of the lid and periocular area with as little extra morbidity as possible. Outcome depends on the defect, age, health of nearby tissue and surgical planning.",
    },
    {
      title: "Orbital surgery",
      body: "Orbital operations address tumours, thyroid-related orbital disease, fractures and congenital anomalies. Selected cases are planned with ENT, neurosurgery or maxillofacial colleagues so the approach is complete.",
    },
  ],
  machinesTitle: "How we operate and examine here",
  machines: [
    { title: "Slit lamp", body: "Assesses lid margin, ocular surface and lacrimal puncta before surgery." },
    { title: "ZEISS LUMERA 300", body: "Provides magnification and illumination for delicate lid and lacrimal surgery." },
    { title: "General anaesthesia machine", body: "Supports safe anaesthesia when the procedure cannot be done under local anaesthesia, including selected children." },
  ],
  faqKicker: "Oculoplasty FAQs",
  faqs: [
    {
      q: "What is meant by oculoplasty?",
      a: "Oculoplasty, or ophthalmic plastic surgery, concerns the eye and its surrounding structures. It is performed to improve function, comfort and appearance for tear-drainage problems, eyelid malposition, skin cancers of the eyelid, socket problems or brow problems.",
    },
    {
      q: "Does insurance cover oculoplastic surgery?",
      a: "Schemes typically cover reconstructive surgery that restores abnormalities caused by birth defect, trauma or disease, when the procedure restores function and a normal appearance. Surgery done only for cosmetic reasons is generally not covered. Confirm papers at the desk before admission.",
    },
    {
      q: "What is ophthalmic plastic and reconstructive surgery?",
      a: "Surgeons in this field operate on periorbital and facial tissues: eyelids, eyebrows, forehead, cheeks, the eye cavity and the tear system. Work includes tear-duct surgery, eyelid and brow lifts, thyroid eye disease, evisceration, enucleation and socket reconstruction.",
    },
    {
      q: "What can you not do after eyelid surgery?",
      a: "Typical restrictions include:",
      list: [
        "Do not wear contact lenses for a fortnight after surgery",
        "Avoid heavy lifting and strenuous exercise",
        "Do not take full showers until the surgeon says it is safe",
        "Do not apply creams or makeup to surgical sites for a fortnight",
      ],
    },
    {
      q: "What is the fastest way to recover from eyelid surgery?",
      a: "For the first 48 hours use cold compresses to reduce bruising and swelling. Follow all post-operative instructions, rest the eyes, avoid heavy activity and protect the eyes from the sun.",
    },
    {
      q: "How long do stitches stay in after eyelid surgery?",
      a: "Stitches may dissolve, or they are removed 7 to 15 days after surgery. Swelling and bruising of the lid can last 3 to 4 weeks.",
    },
  ],
  bookLabel: "Book an oculoplasty consultation",
  surgeons: [SAKET, MALAY],
};

const PEDIATRIC: ClinicalPage = {
  slug: "pediatric",
  kicker: "Children’s eye care",
  title: "Pediatric Ophthalmology And Squint Services",
  breadcrumb: "Pediatric Ophthalmology And Squint Services",
  hero: "Healthy eyes matter for a child’s learning and social development. At M G EYE Foundation, Bara Gamharia, Jamshedpur, DR MALAY KUMAR DWIVEDI, pediatric ophthalmologist, cataract and squint specialist, examines children according to age and developmental stage. DR KUMAR SAKET supports medical retina and trauma when those problems coexist.",
  image: "/service-photos/pediatric.png",
  imageAlt: "Pediatric eye care at M G EYE Foundation",
  whatTitle: "Why children need a pediatric eye doctor",
  whatBody:
    "A child’s visual system is still developing. Uncorrected refractive error, cataract, squint or lazy eye can permanently limit vision if they are found late. Examinations, glasses and surgery are adapted to the child’s age, cooperation and the specific disease. We aim for a calm visit and a clear plan for the family.",
  causesKicker: "Why it happens",
  causesTitle: "Causes",
  causesIntro: "Squint and pediatric cataract have several origins. Early examination still gives the best chance of useful vision.",
  causes: [
    { title: "Inheritance", body: "Family history of squint or high spectacle power raises the chance that a child will need glasses or alignment surgery." },
    { title: "Congenital and developmental cataract", body: "A cloudy lens present at birth or appearing in childhood blocks a clear image and can cause amblyopia if not treated in time." },
    { title: "Trauma", body: "Injury from a ball, stick, chemical or projectile can damage a child’s eye and needs prompt pediatric trauma care." },
    { title: "Neurological and systemic disease", body: "Down syndrome, cerebral palsy or a brain tumour can be associated with squint and reduced vision." },
    { title: "Prematurity", body: "Babies born early or with low birth weight need ROP screening because retinal vessels may grow abnormally." },
    { title: "Uncorrected refractive error", body: "Myopia, hypermetropia and astigmatism in one or both eyes can lead to squint or amblyopia." },
  ],
  symptomsKicker: "What parents notice",
  symptomsTitle: "Symptoms",
  symptomsIntro: "A child rarely describes blur well. Watch for an eye that turns, a white pupil, or difficulty reading.",
  symptoms: [
    { title: "An eye that turns", body: "One eye may look in, out, up or down. This is squint (strabismus) and should be examined even if it comes and goes." },
    { title: "Decreased vision", body: "Sitting close to the television, missing the board at school, or covering one eye are common clues." },
    { title: "Double vision or reading difficulty", body: "Older children may report two images or skip lines when reading." },
    { title: "Poor depth perception", body: "Clumsiness on stairs or in ball games can reflect reduced stereopsis." },
    { title: "Headache and eye strain", body: "Uncorrected power or a poorly controlled squint can cause brow ache after near work." },
    { title: "White pupil or abnormal eye movement", body: "A white glow in photographs or roving eyes in a premature baby need urgent assessment, including for ROP or cataract." },
  ],
  treatment:
    "Treatment is matched to the child: glasses, patching, contact lenses, Botox to selected muscles, or surgery for cataract, squint or trauma. ROP screening is timed for premature babies. Intraocular pressure and visual acuity are measured with child-friendly tools. General anaesthesia is available when a procedure cannot be done awake.",
  servicesTitle: "Pediatric and squint services provided by us",
  services: [
    {
      title: "Pediatric cataract surgery",
      body: "Cataract clouds the lens and causes blur, dull vision and glare. Surgery is planned for traumatic, congenital, developmental and secondary cataracts in children.",
    },
    {
      title: "Squint surgery",
      body: "Misalignment (strabismus) means both eyes cannot look in the same direction at once. Surgery aims to align the eyes and improve related symptoms such as reduced vision, poor depth, double vision and reading difficulty.",
    },
    {
      title: "Botox treatment",
      body: "Botulinum toxin injected into selected extraocular muscles temporarily weakens them so the eyes can realign. It is used for some forms of crossed or misaligned eyes.",
    },
    {
      title: "Pediatric trauma surgery",
      body: "Care for injury to a child’s eye, including chemical damage, blunt trauma from elbow, fist or ball, corneal burns or infection, and penetrating injury from a stick or projectile.",
    },
    {
      title: "ROP screening",
      body: "Retinopathy of prematurity affects retinal vessels in premature and low-birth-weight babies. Screening is typically done when the baby is four to six weeks old to look for abnormal vessel growth, abnormal eye movement or a white pupil.",
    },
    {
      title: "Tonopen and Lea symbols",
      body: "Tono-Pen is a compact tonometer used to measure intraocular pressure when pediatric glaucoma is a concern. Lea symbols combine pictures and optotypes to measure acuity and help detect amblyopia.",
      chips: ["Tono-Pen", "Lea symbols"],
    },
    {
      title: "Luneau loose prism set and Titmus stereo acuity chart",
      body: "The Titmus chart (housefly, animals and circle sets) measures stereopsis. The Luneau prism set is used to measure and follow squint in the clinic.",
    },
    {
      title: "Contact lens",
      body: "Lenses may be used in selected children for myopia, astigmatism, hyperopia, amblyopia, squint, aphakia after cataract, and other refractive needs.",
    },
  ],
  machinesTitle: "Equipment used for children here",
  machines: [
    { title: "Tono-Pen", body: "Comfortable pressure measurement without a large slit-lamp setup, useful in children." },
    { title: "NIDEK ARK", body: "Objective refraction and keratometry to support glasses and contact-lens planning." },
    { title: "ZEISS LUMERA 300", body: "Microscope for pediatric cataract, squint and trauma surgery." },
    { title: "General anaesthesia machine", body: "Controlled anaesthesia when a child cannot cooperate for examination under anaesthesia or surgery." },
    { title: "Slit lamp", body: "Detailed view of the front of the eye when the child can sit for examination." },
  ],
  extraTitle: "Types of strabismus",
  extraItems: [
    "Esotropia (inward eyes)",
    "Exotropia (outward eyes)",
    "Hypertropia (upward eyes)",
    "Hypotropia (downward eyes)",
  ],
  faqKicker: "Pediatric FAQs",
  faqs: [
    { q: "What do pediatric ophthalmologists do?", a: "They diagnose and treat children’s vision problems and prescribe glasses and contact lenses when needed." },
    { q: "How can I fix my toddler’s squint?", a: "Glasses, injections, eye exercises and surgery can all play a role, chosen after examination." },
    { q: "Can a child develop a squint?", a: "Some children are born with a squint. Others develop it between 1 and 4 years of age." },
    { q: "How do you know if your baby has squint eyes?", a: "Clues include an eye that turns, decreased vision, double vision, difficulty reading in older children, headache and poor depth perception." },
    { q: "When should a child see an ophthalmologist?", a: "When there are vision problems, a turning eye, a white pupil, premature birth needing ROP review, or a family history of serious childhood eye disease." },
    { q: "What age should a child see an eye doctor?", a: "Children should have a first eye exam around six months of age and then at least once every year, or sooner if something looks wrong." },
    { q: "What is strabismus?", a: "Strabismus, also called squint, is a condition in which the eyes are misaligned." },
    {
      q: "What are the different types of strabismus?",
      a: "The main types are:",
      list: ["Esotropia (inward)", "Exotropia (outward)", "Hypertropia (upward)", "Hypotropia (downward)"],
    },
  ],
  bookLabel: "Book a pediatric eye visit",
  surgeons: [MALAY, SAKET],
};

const REFRACTIVE: ClinicalPage = {
  slug: "refractive",
  kicker: "Glasses, lenses and laser",
  title: "Refractive Error Service",
  breadcrumb: "Refractive Error Service",
  hero: "Refractive errors are among the most common eye conditions. At M G EYE Foundation, Bara Gamharia, Jamshedpur, we measure how the eye focuses, prescribe spectacles or contact lenses, and counsel selected patients about LASIK, PRK or ICL after a full examination. DR KUMAR SAKET and DR MALAY KUMAR DWIVEDI explain what is suitable for your cornea and lifestyle.",
  image: "/equip/ark.png",
  imageAlt: "Refraction at M G EYE Foundation",
  whatTitle: "What is a refractive error?",
  whatBody:
    "A refractive error occurs when the shape of the eye prevents light from focusing correctly on the retina. The image is then blurred. Most people can be helped with spectacles or contact lenses. Laser or an implantable lens is considered only after stability of power, corneal thickness and overall eye health are confirmed.",
  causesKicker: "Types",
  causesTitle: "Types of refractive errors",
  causesIntro: "More than one type can exist in the same eye. Measurement decides the prescription, not guesswork.",
  causes: [
    { title: "Myopia", body: "Short-sightedness. Distant objects are blurred while near objects are clearer. The eye focuses light in front of the retina." },
    { title: "Hypermetropia", body: "Long-sightedness. Near objects may be hard to see clearly and the eyes may ache with prolonged reading." },
    { title: "Astigmatism", body: "The cornea or lens has an irregular curve, so vision is blurred or stretched at more than one distance." },
    { title: "Presbyopia", body: "An age-related fall in the eye’s ability to focus at near. It commonly becomes noticeable in middle age." },
  ],
  symptomsKicker: "How it feels",
  symptomsTitle: "Symptoms",
  symptomsIntro: "Strain and squinting are common. Sudden change in power still needs a full eye check, not only new glasses.",
  symptoms: [
    { title: "Blurred distance or near vision", body: "Road signs, the classroom board, or a phone screen may be unclear depending on the type of error." },
    { title: "Eye strain", body: "The focusing muscles work harder, especially with screens and small print." },
    { title: "Headache after near work", body: "Uncorrected hypermetropia or astigmatism often presents as brow ache in the evening." },
    { title: "Squinting", body: "Narrowing the lids is an attempt to sharpen a blurred retinal image." },
    { title: "Glare and night difficulty", body: "Uncorrected astigmatism and high myopia can worsen halos and night driving." },
    { title: "Need for frequent prescription change", body: "Progressive myopia in the young, or shifting power in other disease, needs more than a simple refraction." },
  ],
  treatment:
    "Most refractive errors are corrected with spectacles or contact lenses. For selected patients, refractive surgery or an implantable collamer lens may be considered after a detailed examination. Suitability depends on age, stability of power, corneal thickness and shape, and general eye health. No procedure can guarantee that glasses will never be needed again.",
  servicesTitle: "Refractive error services provided by us",
  services: [
    {
      title: "LASIK",
      body: "Laser-Assisted in Situ Keratomileusis reshapes the cornea so light focuses more accurately on the retina. It is used in suitable myopia, hypermetropia and astigmatism after a full work-up.",
    },
    {
      title: "PRK",
      body: "Photorefractive keratectomy also uses a laser to reshape the cornea but does not create a flap. It may be preferred when corneal thickness, shape or lifestyle make PRK the safer surface option.",
    },
    {
      title: "ICL",
      body: "An implantable collamer lens is placed inside the eye to correct refractive error. It is an option for selected patients, particularly when corneal laser is not suitable.",
    },
  ],
  machinesTitle: "How we measure refractive error here",
  machines: [
    { title: "NIDEK ARK", body: "Auto ref-keratometer for refractive power and corneal curvature — the starting point for glasses and surgical counselling." },
    { title: "Topcon lensometer", body: "Verifies the power and axis of existing spectacles so the new prescription can be compared accurately." },
    { title: "Slit lamp", body: "Checks the cornea, lens and ocular surface before any laser or implant is discussed." },
    { title: "Appasamy anterior segment imaging", body: "Documents the front of the eye as part of the pre-operative assessment when surgery is considered." },
  ],
  extraTitle: "Possible benefits of refractive surgery (when suitable)",
  extraItems: [
    "Reduced dependence on spectacles or contact lenses",
    "Improved uncorrected distance vision",
    "Quick visual rehabilitation for many suitable patients",
    "Treatment planned according to the individual’s error and eye condition",
  ],
  faqKicker: "Refractive FAQs",
  faqs: [
    { q: "What is a refractive error?", a: "A vision problem caused when the eye does not focus light correctly on the retina. It can result in blurred or distorted vision." },
    { q: "What are the most common refractive errors?", a: "Myopia, hypermetropia, astigmatism and presbyopia." },
    { q: "Can refractive errors be treated?", a: "Yes. They are generally corrected with spectacles or contact lenses. Selected patients may also be suitable for laser refractive surgery or implantable lenses." },
    { q: "Is LASIK suitable for everyone?", a: "No. Suitability depends on age, refractive stability, corneal thickness and shape, eye health and other medical factors. A comprehensive examination is required." },
    { q: "What is the difference between LASIK and PRK?", a: "Both use a laser to reshape the cornea. LASIK creates a corneal flap before treating the tissue beneath. PRK removes the surface epithelial layer and does not create a flap." },
    { q: "What is ICL?", a: "ICL is an implantable lens placed inside the eye. It can be considered for selected patients who are not ideal candidates for corneal laser procedures." },
    { q: "Can refractive surgery permanently remove glasses?", a: "It can greatly reduce dependence on glasses or contact lenses in suitable patients, but it cannot guarantee that glasses will never be needed. Presbyopia can still affect near vision later in life." },
  ],
  bookLabel: "Book a refraction visit",
  surgeons: [SAKET, MALAY],
};

const OTHER: ClinicalPage = {
  slug: "other",
  kicker: "Supporting services",
  title: "Other Services",
  breadcrumb: "Other Services",
  hero: "Besides the main surgical services, M G EYE Foundation, Bara Gamharia, Jamshedpur, offers neuro-ophthalmology assessment, an optical shop and a pharmacy. DR KUMAR SAKET and DR MALAY KUMAR DWIVEDI examine vision problems that arise from the nervous system, then support the prescription with glasses and medicines on site.",
  image: "/service-photos/pediatric.png",
  imageAlt: "Supporting eye services at M G EYE Foundation",
  whatTitle: "What these services cover",
  whatBody:
    "Neuro-ophthalmology sits between neurology and ophthalmology. It deals with disease of the nervous system that affects vision, eye movement or the pupils. The optical shop dispenses spectacles matched to the clinical prescription. The pharmacy compounds and dispenses medicines prescribed after the visit.",
  causesKicker: "When to come",
  causesTitle: "Reasons to visit a neuro-ophthalmologist",
  causesIntro: "These signs can affect children and adults. Sudden vision loss or unequal pupils need prompt examination.",
  causes: [
    { title: "Reduced blood supply", body: "Poor perfusion of the optic nerve or brain pathways can cause sudden or stepwise vision loss." },
    { title: "Decreased or complete loss of vision", body: "Unexplained vision drop, with a structurally quiet eye, raises the question of optic nerve or brain disease." },
    { title: "Unequal pupils", body: "Anisocoria may be benign or may signal nerve or iris problem. Slow reactions are also recorded." },
    { title: "Double vision", body: "Diplopia from cranial-nerve palsy or muscle disease is a core neuro-ophthalmic presentation." },
    { title: "Acute headaches", body: "Headache with visual change, field loss or papilloedema needs fundus and field assessment." },
    { title: "Colour difficulty and glare", body: "Poor colour discrimination and light intolerance can accompany optic neuropathy." },
    { title: "Visual field defects", body: "Missing patches of side vision may come from glaucoma, stroke or compressive lesions." },
    { title: "Squint", body: "A new squint in a child or adult may be muscular, refractive or neurological." },
    { title: "Compressive tumours", body: "Masses along the visual pathway can slowly reduce acuity or field." },
    { title: "Visual hallucinations", body: "Formed or unformed visual phenomena are investigated when the eye examination does not explain them." },
  ],
  symptomsKicker: "How it presents",
  symptomsTitle: "Symptoms",
  symptomsIntro: "Neuro-ophthalmic disease may spare the front of the eye. The history and the disc, pupils and fields matter.",
  symptoms: [
    { title: "Sudden vision loss", body: "Especially if painless, this can be optic nerve ischaemia or inflammation and should not wait." },
    { title: "Field defects", body: "Bumping into objects on one side, or failing a driving field, points to pathway disease." },
    { title: "Pupil change", body: "A pupil that does not react, or two pupils of different size, needs examination." },
    { title: "Double vision", body: "Two images that separate more in one gaze direction suggest a nerve or muscle problem." },
    { title: "Colour desaturation", body: "Red objects look washed out in one eye compared with the other in optic neuritis." },
    { title: "Need for new glasses or drops", body: "After the medical visit, the optical shop and pharmacy complete the plan." },
  ],
  treatment:
    "Many neuro-ophthalmic conditions are managed with investigation and medicines. Surgery is reserved for selected problems such as adult strabismus or botulinum toxin for blepharospasm and hemifacial spasm. Optical dispensing and pharmacy sit beside the clinic so the family can complete glasses and drops without a second journey when stock allows.",
  servicesTitle: "Other services provided by us",
  services: [
    {
      title: "Neuro-ophthalmology",
      body: "This field combines neurology and ophthalmology. It deals with nervous-system disease that affects vision, control or movement of the eyes, or pupil abnormalities. Assessment includes conditions linked to raised pressure, inflammation and eye injury when the nerve or pathways are involved.",
    },
    {
      title: "Optical shop",
      body: "Spectacles are chosen for indoor or outdoor use and for the person’s work. Trained staff help match frames and lenses to the medical prescription and to comfort, including progressive and single-vision designs as advised.",
    },
    {
      title: "Pharmacy",
      body: "The pharmacy team dispenses medicines prescribed for the individual, with attention to how the drops or tablets are used and to important side effects that should be reported.",
    },
  ],
  machinesTitle: "Supportive diagnostics on site",
  machines: [
    { title: "ZEISS CIRRUS 500 OCT", body: "Images the optic nerve and retina when swelling, atrophy or macular change must be documented." },
    { title: "Forus fundus camera", body: "Photographs the disc and retina for comparison and for sharing findings with the family." },
    { title: "NIDEK ARK", body: "Measures refractive error so glasses can be prescribed accurately after the medical examination." },
    { title: "Topcon lensometer", body: "Checks existing spectacles in the optical workflow." },
  ],
  faqKicker: "Neuro-ophthalmology FAQs",
  faqs: [
    { q: "What does a neuro-ophthalmologist do?", a: "A neuro-ophthalmologist focuses on neurological problems that affect the eye and visual pathway." },
    { q: "Do neuro-ophthalmologists perform surgeries?", a: "Most conditions are treated with medicines. Surgery may be used in selected situations, including adult strabismus and botulinum toxin injections for blepharospasm or hemifacial spasm." },
    { q: "What is the difference between a neuro-ophthalmologist and a neuro-optometrist?", a: "A neuro-optometrist treats visual, perceptual and motor disorders that affect the visual system. A neuro-ophthalmologist is a medical specialist in neurology and ophthalmology who treats visual conditions caused by brain and nerve disease." },
    { q: "Can neurological problems cause vision problems?", a: "Yes. They may affect the eyelids and the muscles that move the eyes, and they may damage the optic nerve, causing partial or complete vision loss." },
    { q: "What part of the brain controls the optic nerve pathway for seeing?", a: "The occipital lobes are the main cortical area for vision." },
    { q: "Can damage to the optic nerve be repaired?", a: "Established optic-nerve fibre loss does not regenerate. Treatment aims to protect remaining function and treat the cause where that is possible." },
  ],
  bookLabel: "Book a visit",
  surgeons: [SAKET, MALAY],
};

const PAGES: Record<string, ClinicalPage> = {
  cornea: CORNEA,
  glaucoma: GLAUCOMA,
  oculoplasty: OCULOPLASTY,
  pediatric: PEDIATRIC,
  refractive: REFRACTIVE,
  other: OTHER,
};

export function getClinicalPage(slug: string): ClinicalPage | undefined {
  return PAGES[slug];
}
