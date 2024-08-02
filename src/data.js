const data = [
  {
    id: 1,
    name: "Geraldine",
    title: "Technical Writer",
    address: "4 Knutson Park",
    detail:
      "Other speech and language deficits following unspecified cerebrovascular disease",
  },
  {
    id: 2,
    name: "Ermina",
    title: "Environmental Specialist",
    address: "303 Algoma Street",
    detail: "Toxic effect of unspecified organic solvent, assault",
  },
  {
    id: 3,
    name: "Georgiana",
    title: "Quality Control Specialist",
    address: "0 Roth Plaza",
    detail:
      "Encounter for dental examination and cleaning without abnormal findings",
  },
  {
    id: 4,
    name: "Conny",
    title: "Quality Engineer",
    address: "467 Emmet Park",
    detail:
      "Displaced fracture of triquetrum [cuneiform] bone, unspecified wrist, subsequent encounter for fracture with malunion",
  },
  {
    id: 5,
    name: "Godwin",
    title: "Chemical Engineer",
    address: "977 Mayfield Plaza",
    detail: "Periorbital cellulitis",
  },
  {
    id: 6,
    name: "Candy",
    title: "Senior Cost Accountant",
    address: "32 Grasskamp Circle",
    detail:
      "Other soft tissue disorders related to use, overuse and pressure, unspecified ankle and foot",
  },
  {
    id: 7,
    name: "Cybill",
    title: "Food Chemist",
    address: "3 Elka Terrace",
    detail: "Fall down embankment (hill), sequela",
  },
  {
    id: 8,
    name: "Betty",
    title: "Analyst Programmer",
    address: "65320 Village Lane",
    detail: "Crushing injury of left great toe, initial encounter",
  },
  {
    id: 9,
    name: "Juliana",
    title: "Environmental Specialist",
    address: "5 Brown Street",
    detail: "Toxic effect of copper and its compounds, intentional self-harm",
  },
  {
    id: 10,
    name: "Reena",
    title: "Human Resources Assistant IV",
    address: "07921 Fallview Avenue",
    detail:
      "Legal intervention involving unspecified blunt objects, bystander injured, subsequent encounter",
  },
  {
    id: 11,
    name: "Karly",
    title: "Chief Design Engineer",
    address: "57 Stoughton Street",
    detail: "Postural kyphosis",
  },
  {
    id: 12,
    name: "Prince",
    title: "Structural Analysis Engineer",
    address: "475 Leroy Drive",
    detail:
      "Other extraarticular fracture of lower end of left radius, subsequent encounter for closed fracture with routine healing",
  },
  {
    id: 13,
    name: "Cleon",
    title: "Quality Control Specialist",
    address: "84883 Waxwing Crossing",
    detail: "Activity, non-running track and field events",
  },
  {
    id: 14,
    name: "Ulric",
    title: "Accountant III",
    address: "739 Cody Plaza",
    detail:
      "Infection and inflammatory reaction due to internal fixation device of right femur, initial encounter",
  },
  {
    id: 15,
    name: "Vanya",
    title: "Quality Control Specialist",
    address: "9469 Havey Road",
    detail:
      "Pedal cycle driver injured in collision with fixed or stationary object in traffic accident",
  },
  {
    id: 16,
    name: "Darrell",
    title: "Environmental Tech",
    address: "0855 Farmco Way",
    detail: "Granulomatous prostatitis",
  },
  {
    id: 17,
    name: "Wernher",
    title: "Programmer Analyst IV",
    address: "28 Sugar Park",
    detail:
      "Unspecified injury of other blood vessels of thorax, unspecified side, sequela",
  },
  {
    id: 18,
    name: "Paloma",
    title: "Environmental Tech",
    address: "97 Kedzie Hill",
    detail:
      "Burn of second degree of single right finger (nail) except thumb, sequela",
  },
  {
    id: 19,
    name: "Murial",
    title: "Payment Adjustment Coordinator",
    address: "646 Meadow Vale Lane",
    detail: "Other specified injury of dorsal vein of unspecified foot",
  },
  {
    id: 20,
    name: "Grete",
    title: "VP Quality Control",
    address: "40 Straubel Crossing",
    detail: "Open wound of other parts of abdomen, lower back and pelvis",
  },
  {
    id: 21,
    name: "Dominique",
    title: "Web Designer II",
    address: "91810 North Lane",
    detail: "Varicose veins of other specified sites",
  },
  {
    id: 22,
    name: "Kim",
    title: "Associate Professor",
    address: "4 Buell Drive",
    detail: "Nodular episcleritis",
  },
  {
    id: 23,
    name: "Chicky",
    title: "Help Desk Technician",
    address: "4547 Burrows Plaza",
    detail:
      "Fracture of unspecified metatarsal bone(s), right foot, subsequent encounter for fracture with delayed healing",
  },
  {
    id: 24,
    name: "Willi",
    title: "Senior Sales Associate",
    address: "4 Old Shore Way",
    detail:
      "Other specified injury of femoral artery, unspecified leg, sequela",
  },
  {
    id: 25,
    name: "Earlie",
    title: "Budget/Accounting Analyst III",
    address: "63825 Moose Crossing",
    detail: "Fall into other water",
  },
  {
    id: 26,
    name: "Sophi",
    title: "General Manager",
    address: "21442 Hoepker Crossing",
    detail:
      "Unspecified fracture of shaft of humerus, right arm, subsequent encounter for fracture with nonunion",
  },
  {
    id: 27,
    name: "Tracy",
    title: "Librarian",
    address: "6280 Barby Point",
    detail:
      "Breakdown (mechanical) of intraperitoneal dialysis catheter, initial encounter",
  },
  {
    id: 28,
    name: "Matilda",
    title: "Accounting Assistant II",
    address: "5 Pennsylvania Junction",
    detail: "Anaphylactic reaction due to other serum, sequela",
  },
  {
    id: 29,
    name: "Georgette",
    title: "Director of Sales",
    address: "832 Sloan Park",
    detail:
      "Crushed between watercraft and other watercraft or other object due to collision",
  },
  {
    id: 30,
    name: "Tiebout",
    title: "Media Manager IV",
    address: "0 Beilfuss Trail",
    detail:
      "Nondisplaced fracture of distal phalanx of right thumb, initial encounter for closed fracture",
  },
  {
    id: 31,
    name: "Eben",
    title: "Clinical Specialist",
    address: "15462 Hansons Drive",
    detail: "Injury of digital nerve of right little finger",
  },
  {
    id: 32,
    name: "Sukey",
    title: "Mechanical Systems Engineer",
    address: "78965 Hanover Road",
    detail:
      "Galeazzi's fracture of left radius, initial encounter for open fracture type I or II",
  },
  {
    id: 33,
    name: "Vassili",
    title: "Paralegal",
    address: "927 Bartelt Parkway",
    detail: "Other specified disorders of bone, unspecified site",
  },
  {
    id: 34,
    name: "Mortie",
    title: "Computer Systems Analyst IV",
    address: "77 Columbus Hill",
    detail: "Hemorrhagic disease of newborn",
  },
  {
    id: 35,
    name: "Dorisa",
    title: "Assistant Media Planner",
    address: "155 Almo Street",
    detail: "Herpesviral [herpes simplex] infections",
  },
  {
    id: 36,
    name: "Marcos",
    title: "Health Coach I",
    address: "376 Becker Drive",
    detail: "Pulmonary actinomycosis",
  },
  {
    id: 37,
    name: "Lois",
    title: "Project Manager",
    address: "42 Grim Plaza",
    detail: "Sacral spina bifida with hydrocephalus",
  },
  {
    id: 38,
    name: "Winnie",
    title: "Human Resources Assistant III",
    address: "2 Loftsgordon Street",
    detail: "Spondylosis",
  },
  {
    id: 39,
    name: "Rivy",
    title: "VP Quality Control",
    address: "3 Tennyson Trail",
    detail: "Ankylosis, right hip",
  },
  {
    id: 40,
    name: "Godfrey",
    title: "Developer III",
    address: "78945 Meadow Ridge Circle",
    detail: "Unspecified chronic otitis externa, bilateral",
  },
  {
    id: 41,
    name: "Kerri",
    title: "Quality Control Specialist",
    address: "2 Fisk Hill",
    detail: "Other sprain of right little finger, initial encounter",
  },
  {
    id: 42,
    name: "Gianni",
    title: "Social Worker",
    address: "3015 Heath Way",
    detail: "Corrosion of third degree of left upper arm",
  },
  {
    id: 43,
    name: "Koressa",
    title: "Nurse",
    address: "90 Coolidge Hill",
    detail: "Aphasia following nontraumatic subarachnoid hemorrhage",
  },
  {
    id: 44,
    name: "Barbee",
    title: "Assistant Media Planner",
    address: "798 Cherokee Court",
    detail: "Central serous chorioretinopathy, left eye",
  },
  {
    id: 45,
    name: "Philly",
    title: "Software Engineer III",
    address: "651 Oakridge Circle",
    detail:
      "Adverse effect of other drugs acting on muscles, initial encounter",
  },
  {
    id: 46,
    name: "Lucais",
    title: "Financial Analyst",
    address: "95746 Packers Junction",
    detail:
      "Major laceration of femoral vein at hip and thigh level, right leg, subsequent encounter",
  },
  {
    id: 47,
    name: "Alejoa",
    title: "Senior Editor",
    address: "76151 Thompson Place",
    detail: "Hereditary choroidal dystrophy",
  },
  {
    id: 48,
    name: "Melania",
    title: "Structural Engineer",
    address: "4052 Colorado Circle",
    detail:
      "Obstructed labor due to malposition and malpresentation, unspecified, fetus 4",
  },
  {
    id: 49,
    name: "Beniamino",
    title: "VP Sales",
    address: "50294 Mallory Lane",
    detail: "Benign neoplasm of prostate",
  },
  {
    id: 50,
    name: "Honor",
    title: "VP Sales",
    address: "7763 Knutson Plaza",
    detail:
      "Poisoning by androgens and anabolic congeners, accidental (unintentional), subsequent encounter",
  },
  {
    id: 51,
    name: "Gabbi",
    title: "Graphic Designer",
    address: "1385 Russell Center",
    detail:
      "Age-related osteoporosis with current pathological fracture, right forearm, sequela",
  },
  {
    id: 52,
    name: "Abelard",
    title: "Analyst Programmer",
    address: "7 Vera Court",
    detail: "Benign neoplasm of nasopharynx",
  },
  {
    id: 53,
    name: "Lanae",
    title: "Recruiting Manager",
    address: "44 Roxbury Drive",
    detail:
      "Unspecified superficial injury of right wrist, subsequent encounter",
  },
  {
    id: 54,
    name: "Pip",
    title: "Structural Engineer",
    address: "8 Holy Cross Trail",
    detail:
      "Benign lipomatous neoplasm of skin and subcutaneous tissue of left arm",
  },
  {
    id: 55,
    name: "Dottie",
    title: "Social Worker",
    address: "459 Prairieview Crossing",
    detail:
      "Other osteoporosis with current pathological fracture, unspecified shoulder, subsequent encounter for fracture with nonunion",
  },
  {
    id: 56,
    name: "Lisetta",
    title: "Community Outreach Specialist",
    address: "0 Bayside Court",
    detail: "Extramedullary plasmacytoma in remission",
  },
  {
    id: 57,
    name: "Denny",
    title: "Environmental Tech",
    address: "617 Sycamore Avenue",
    detail:
      "Displaced segmental fracture of shaft of radius, right arm, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing",
  },
  {
    id: 58,
    name: "Hana",
    title: "Human Resources Manager",
    address: "9843 Walton Lane",
    detail:
      "Laceration of other specified muscles, fascia and tendons at wrist and hand level, left hand, sequela",
  },
  {
    id: 59,
    name: "Angelo",
    title: "Account Coordinator",
    address: "64 Fairfield Road",
    detail:
      "Traumatic rupture of other ligament of left middle finger at metacarpophalangeal and interphalangeal joint, sequela",
  },
  {
    id: 60,
    name: "Mohandis",
    title: "Financial Analyst",
    address: "1720 Sachtjen Plaza",
    detail:
      "Unspecified injury of radial artery at forearm level, left arm, subsequent encounter",
  },
  {
    id: 61,
    name: "Eveleen",
    title: "VP Product Management",
    address: "40333 Carey Pass",
    detail: "Pressure ulcer of elbow",
  },
  {
    id: 62,
    name: "Tisha",
    title: "Speech Pathologist",
    address: "68215 Mifflin Street",
    detail:
      "Complete traumatic metacarpophalangeal amputation of right middle finger, sequela",
  },
  {
    id: 63,
    name: "Keene",
    title: "Nuclear Power Engineer",
    address: "4709 4th Street",
    detail: "Corrosion of third degree of right shoulder",
  },
  {
    id: 64,
    name: "Lissa",
    title: "Senior Financial Analyst",
    address: "870 Warrior Trail",
    detail:
      "Other specified injury of other blood vessels at wrist and hand level of right arm, subsequent encounter",
  },
  {
    id: 65,
    name: "Tildy",
    title: "Help Desk Operator",
    address: "82561 Fairfield Drive",
    detail: "Leakage of artificial heart, sequela",
  },
  {
    id: 66,
    name: "Yolanda",
    title: "Cost Accountant",
    address: "12 Clyde Gallagher Court",
    detail:
      "Wedge compression fracture of second thoracic vertebra, subsequent encounter for fracture with routine healing",
  },
  {
    id: 67,
    name: "Berty",
    title: "Physical Therapy Assistant",
    address: "46871 Kenwood Lane",
    detail:
      "Nondisplaced unspecified condyle fracture of lower end of left femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
  },
  {
    id: 68,
    name: "Peri",
    title: "Junior Executive",
    address: "4 Warrior Terrace",
    detail:
      "Infection and inflammatory reaction due to internal fixation device of left fibula, initial encounter",
  },
  {
    id: 69,
    name: "Gunther",
    title: "Data Coordinator",
    address: "627 Longview Circle",
    detail:
      "Pedal cyclist (driver) (passenger) injured in other specified transport accidents",
  },
  {
    id: 70,
    name: "Meyer",
    title: "Computer Systems Analyst IV",
    address: "18 Surrey Park",
    detail:
      "Other injury of muscle and tendon of back wall of thorax, initial encounter",
  },
  {
    id: 71,
    name: "Raleigh",
    title: "Safety Technician II",
    address: "565 Mayfield Road",
    detail:
      "Stress fracture, pelvis, subsequent encounter for fracture with delayed healing",
  },
  {
    id: 72,
    name: "Mitch",
    title: "Recruiter",
    address: "8 South Lane",
    detail:
      "Nondisplaced transverse fracture of shaft of left femur, subsequent encounter for open fracture type I or II with delayed healing",
  },
  {
    id: 73,
    name: "Karisa",
    title: "Financial Advisor",
    address: "39 Hoard Alley",
    detail:
      "Other fracture of shaft of left ulna, subsequent encounter for closed fracture with routine healing",
  },
  {
    id: 74,
    name: "Merwyn",
    title: "Actuary",
    address: "89 Meadow Valley Crossing",
    detail:
      "Other specified injury of radial artery at wrist and hand level of right arm",
  },
  {
    id: 75,
    name: "Barbaraanne",
    title: "Desktop Support Technician",
    address: "88599 Lakeland Park",
    detail:
      "Nondisplaced fracture of neck of fourth metacarpal bone, left hand, subsequent encounter for fracture with nonunion",
  },
  {
    id: 76,
    name: "Barclay",
    title: "Information Systems Manager",
    address: "023 Londonderry Terrace",
    detail: "Subluxation of distal radioulnar joint of right wrist",
  },
  {
    id: 77,
    name: "Ware",
    title: "Health Coach IV",
    address: "18744 Esker Hill",
    detail:
      "Other displaced fracture of upper end of unspecified humerus, subsequent encounter for fracture with malunion",
  },
  {
    id: 78,
    name: "Padriac",
    title: "Database Administrator III",
    address: "96489 Golf Street",
    detail: "Cervical disc disorder with radiculopathy, cervicothoracic region",
  },
  {
    id: 79,
    name: "Shay",
    title: "Compensation Analyst",
    address: "33858 Ridge Oak Drive",
    detail: "Benign neoplasm of left ovary",
  },
  {
    id: 80,
    name: "Harris",
    title: "Software Test Engineer II",
    address: "96487 Carioca Street",
    detail: "Polycystic kidney, unspecified",
  },
  {
    id: 81,
    name: "Auguste",
    title: "Nurse",
    address: "9 Northport Center",
    detail: "Unspecified fracture of fourth metacarpal bone, left hand",
  },
  {
    id: 82,
    name: "Wye",
    title: "Payment Adjustment Coordinator",
    address: "672 Rockefeller Hill",
    detail: "Alcohol abuse",
  },
  {
    id: 83,
    name: "Gregoor",
    title: "VP Quality Control",
    address: "42 Tennessee Crossing",
    detail: "Other secondary gout, left hand",
  },
  {
    id: 84,
    name: "Gibb",
    title: "Senior Quality Engineer",
    address: "4577 Rockefeller Drive",
    detail: "Unspecified open-angle glaucoma",
  },
  {
    id: 85,
    name: "Hasheem",
    title: "Accounting Assistant II",
    address: "1830 Straubel Point",
    detail:
      "Generalized idiopathic epilepsy and epileptic syndromes, intractable, without status epilepticus",
  },
  {
    id: 86,
    name: "Paxton",
    title: "Executive Secretary",
    address: "1 Mockingbird Parkway",
    detail: "Secondary syphilitic nephritis",
  },
  {
    id: 87,
    name: "Lisabeth",
    title: "Help Desk Operator",
    address: "4 Eagle Crest Street",
    detail: "Unspecified mycosis",
  },
  {
    id: 88,
    name: "Kenon",
    title: "Database Administrator IV",
    address: "3874 East Drive",
    detail: "Primary blast injury of bronchus, bilateral",
  },
  {
    id: 89,
    name: "Elroy",
    title: "Software Engineer I",
    address: "512 Veith Place",
    detail: "Unspecified open wound of scalp",
  },
  {
    id: 90,
    name: "Matteo",
    title: "Community Outreach Specialist",
    address: "8 Debra Road",
    detail: "Urge incontinence",
  },
  {
    id: 91,
    name: "Robinette",
    title: "Budget/Accounting Analyst IV",
    address: "2 Anhalt Junction",
    detail:
      "Stress fracture, hip, unspecified, subsequent encounter for fracture with delayed healing",
  },
  {
    id: 92,
    name: "Richy",
    title: "Recruiting Manager",
    address: "44100 Hoard Alley",
    detail: "Other subluxation of right foot, subsequent encounter",
  },
  {
    id: 93,
    name: "Sabra",
    title: "Research Assistant IV",
    address: "75847 Nancy Plaza",
    detail:
      "Drowning and submersion due to fall off merchant ship, subsequent encounter",
  },
  {
    id: 94,
    name: "Giulio",
    title: "Financial Advisor",
    address: "770 Dovetail Road",
    detail:
      "Infection and inflammatory reaction due to nervous system devices, implants and graft",
  },
  {
    id: 95,
    name: "Stace",
    title: "Automation Specialist IV",
    address: "89272 Talisman Avenue",
    detail:
      "Nondisplaced fracture of proximal third of navicular [scaphoid] bone of right wrist, sequela",
  },
  {
    id: 96,
    name: "Kelley",
    title: "Administrative Officer",
    address: "228 Hoard Road",
    detail:
      "Injury of other nerves at shoulder and upper arm level, right arm, subsequent encounter",
  },
  {
    id: 97,
    name: "Kim",
    title: "Database Administrator IV",
    address: "630 Sheridan Park",
    detail: "Primary blast injury of rectum",
  },
  {
    id: 98,
    name: "Chen",
    title: "Account Representative IV",
    address: "17 Old Shore Junction",
    detail: "Contusion of back wall of thorax",
  },
  {
    id: 99,
    name: "Demeter",
    title: "Senior Financial Analyst",
    address: "334 Merrick Court",
    detail:
      "Toxic effect of other mycotoxin food contaminants, intentional self-harm, sequela",
  },
  {
    id: 100,
    name: "Bee",
    title: "Software Engineer III",
    address: "3710 7th Center",
    detail: "Mechanical ptosis of unspecified eyelid",
  },
];
export default data;
