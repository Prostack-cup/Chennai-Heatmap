export interface CoworkingSpace {
  name: string;
  location: string;
  category: string;
  price: string;
  coordinates: [number, number];
  area: string;
  poc?: {
    name: string;
    contact: string;
  }[];
}

export const coworkingSpaces: CoworkingSpace[] = [
  {
    name: "1vibe",
    category: "Standard (6k-12k)",
    location: "Alwarpet",
    area: "Chennai - Central",
    price: "8500",
    coordinates: [13.0319, 80.2634],
    poc: [
      { name: "Yogesh", contact: "074011 04050" },
      { name: "Vijay", contact: "7824810983" }
    ]
  },
  {
    name: "Two Trees Workspaces",
    category: "Standard (6k-12k)",
    location: "Alwarpet",
    area: "Chennai - Central",
    price: "10000",
    coordinates: [13.0319, 80.2634],
    poc: [
      { name: "Prakash", contact: "7338717333" }
    ]
  },
  {
    name: "Wibur Coworking",
    category: "Standard (6k-12k)",
    location: "Alwarpet",
    area: "Chennai - Central",
    price: "8000",
    coordinates: [13.0319, 80.2634],
    poc: [
      { name: "John", contact: "7788996926" },
      { name: "Shibina", contact: "7788996930" }
    ]
  },
  {
    name: "Crizone Business Centre",
    category: "Budgeted(6k or less)",
    location: "Ambattur",
    area: "Chennai - North",
    price: "5000",
    coordinates: [13.1040, 80.1402],
    poc: [
      { name: "Subha", contact: "8680000022" },
      { name: "Vidya", contact: "9790829711" }
    ]
  },
  {
    name: "Crizone",
    category: "Budgeted(6k or less)",
    location: "Ambattur OT",
    area: "Chennai - North",
    price: "3500",
    coordinates: [13.0947, 80.1455],
    poc: [
      { name: "Shubha", contact: "9790829711" }
    ]
  },
  {
    name: "CDS Workspro",
    category: "Budgeted(6k or less)",
    location: "Ammbatur",
    area: "Chennai - North",
    price: "5000",
    coordinates: [13.1040, 80.1402],
    poc: [
      { name: "Dipika", contact: "7305008885" },
      { name: "Jai Kumar", contact: "9500091238" }
    ]
  },
  {
    name: "Square Space",
    category: "Standard (6k-12k)",
    location: "Aminjikarai",
    area: "Chennai - North",
    price: "6000",
    coordinates: [13.0809, 80.2239],
    poc: [
      { name: "Shridevi", contact: "9840914644" }
    ]
  },
  {
    name: "Works 9to9",
    category: "Standard (6k-12k)",
    location: "Aminjikarai",
    area: "Chennai - North",
    price: "7500",
    coordinates: [13.0809, 80.2239],
    poc: [
      { name: "Deepika", contact: "07871929929" }
    ]
  },
  {
    name: "Aalaya workspace",
    category: "Budgeted(6k or less)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "5000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Mahesh", contact: "9789976276" }
    ]
  },
  {
    name: "Antispot",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "8000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Tanay", contact: "9884277242" }
    ]
  },
  {
    name: "The platinum hive",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "6000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Dhinesh", contact: "7550021777" }
    ]
  },
  {
    name: "Fuel Workspaces",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "6800",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Vasanth", contact: "8939707530" },
      { name: "Suganya", contact: "8825486770" }
    ]
  },
  {
    name: "The Hive",
    category: "Premium(12K or More)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "12000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Blenden Lewis", contact: "8778108146" },
      { name: "Balaji", contact: "9791549404" }
    ]
  },
  {
    name: "Khalf CoWorks",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "6000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Mohamed", contact: "9940222448" },
      { name: "Hari", contact: "9176695759" }
    ]
  },
  {
    name: "Cowrkz",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "7500",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Rajugopolan", contact: "9121107542" }
    ]
  },
  {
    name: "Senate-1",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "7500",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Shabeer", contact: "9940687628" },
      { name: "Naveed", contact: "9940159401" },
      { name: "Aisha", contact: "9840595449" }
    ]
  },
  {
    name: "Senate-2",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "6500",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Shabeer", contact: "9940687628" },
      { name: "Naveed", contact: "9940159401" }
    ]
  },
  {
    name: "RND cube infra llp",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "6000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Nandakumar", contact: "9841462277" }
    ]
  },
  {
    name: "Ecowrkz Coworking Office Space Chennai",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "7000-8000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Madhu", contact: "9962262210" },
      { name: "Shilpa", contact: "7550163007" }
    ]
  },
  {
    name: "Vaagai space",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "6000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Shrinivasan", contact: "9840384140" }
    ]
  },
  {
    name: "Senate Space - 3",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "8000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Shabeer", contact: "9940687628" },
      { name: "Naveed", contact: "9940159401" }
    ]
  },
  {
    name: "Senate Space - 4",
    category: "Standard (6k-12k)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "8000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Shabeer", contact: "9940687628" },
      { name: "Naveed", contact: "9940159401" }
    ]
  },
  {
    name: "Trend Works - Karuna Conclave",
    category: "Premium(12K or More)",
    location: "Anna Nagar",
    area: "Chennai - South",
    price: "12000",
    coordinates: [13.0878, 80.2117],
    poc: [
      { name: "Prabhakar", contact: "9094530296" }
    ]
  },
  {
    name: "My Branch",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "7500",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Veenitha", contact: "8451999506" }
    ]
  },
  {
    name: "Regus Amarasri",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "12000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" },
      { name: "Celia Paul", contact: "9551241315" }
    ]
  },
  {
    name: "Vatika",
    category: "Premium(12K or More)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "14000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Sampath Kumar", contact: "9176030201" }
    ]
  },
  {
    name: "Ishare Office",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "6000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Rahees", contact: "7010552727" }
    ]
  },
  {
    name: "VSion Tech Park Pvt Ltd",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "6500",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Rajashekhar", contact: "9901584181" },
      { name: "Ram", contact: "9551888666" },
      { name: "Kishore", contact: "7601966546" }
    ]
  },
  {
    name: "HAVL Hitech",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "7000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Subhasree", contact: "8925441777" }
    ]
  },
  {
    name: "Work Villa by OYO",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "7500",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Meena", contact: "9791097900" }
    ]
  },
  {
    name: "Office alltime",
    category: "Budgeted(6k or less)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "4000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Mynitha", contact: "9500137777" }
    ]
  },
  {
    name: "The executive zone",
    category: "Premium(12K or More)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "13000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Divya", contact: "9884853961" }
    ]
  },
  {
    name: "Rayafeel",
    category: "Budgeted(6k or less)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "5000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Bushra", contact: "8148383856" }
    ]
  },
  {
    name: "Spacelance virtual office",
    category: "Premium(12K or More)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "13000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Contact", contact: "8428881000" }
    ]
  },
  {
    name: "Qubebizz",
    category: "Budgeted(6k or less)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "5500",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Sabitha", contact: "6379848369" }
    ]
  },
  {
    name: "Wbb Office",
    category: "Premium(12K or More)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "12000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Contact", contact: "8589880002" }
    ]
  },
  {
    name: "Rudhra Coworks",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "6500",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Sharanya", contact: "9498338640" }
    ]
  },
  {
    name: "Symbyont Asset Management Pvt. Ltd.",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "11000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Maheera", contact: "9505824010" }
    ]
  },
  {
    name: "IndiQube Wave",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "7500",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "Atrium Coworks",
    category: "Standard (6k-12k)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "7500",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Riyaz", contact: "9025219640" }
    ]
  },
  {
    name: "Shirdi Technology",
    category: "Budgeted(6k or less)",
    location: "Anna Salai",
    area: "Chennai - Central",
    price: "5000",
    coordinates: [13.0477, 80.2604],
    poc: [
      { name: "Mahalaxmi", contact: "7358553352" }
    ]
  },
  {
    name: "Trust Business center",
    category: "Standard (6k-12k)",
    location: "Besant nagar",
    area: "Chennai - East",
    price: "6000",
    coordinates: [13.0032, 80.2761],
    poc: [
      { name: "Geetha", contact: "9884288800" }
    ]
  },
  {
    name: "IndiQube Riviera",
    category: "Budgeted(6k or less)",
    location: "Chetpet",
    area: "Chennai - North",
    price: "5000-6000",
    coordinates: [13.0510, 80.2424],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "Regus KRM",
    category: "Premium(12K or More)",
    location: "Chetpet",
    area: "Chennai - North",
    price: "14000",
    coordinates: [13.0510, 80.2424],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" }
    ]
  },
  {
    name: "THE WORK HUB",
    category: "Budgeted(6k or less)",
    location: "Egmore",
    area: "Chennai - South",
    price: "5500",
    coordinates: [13.0654, 80.2505],
    poc: [
      { name: "Kishore", contact: "9841092284" }
    ]
  },
  {
    name: "Desk workspaces",
    category: "Standard (6k-12k)",
    location: "Ekkatuthangal",
    area: "Chennai - East",
    price: "9000",
    coordinates: [13.0153, 80.2223],
    poc: [
      { name: "Elphiqndon", contact: "9940929171" }
    ]
  },
  {
    name: "The Executive Centre- prestige palladium",
    category: "Premium(12K or More)",
    location: "Greams Road",
    area: "Chennai - Central",
    price: "12000",
    coordinates: [13.0602, 80.2556],
    poc: [
      { name: "Divya", contact: "9884853961" }
    ]
  },
  {
    name: "Dhwarco-1",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "6500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Ranjith", contact: "8072720550" }
    ]
  },
  {
    name: "OYO Innov8 SKCL",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "8500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Sudharshan", contact: "9790793921" },
      { name: "Boobalan", contact: "9841559550" },
      { name: "Shefali", contact: "6366627327" }
    ]
  },
  {
    name: "Regus Olympia Tech Park",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "12000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" },
      { name: "Celia Paul", contact: "9551241315" }
    ]
  },
  {
    name: "Regus Olympia Platina",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "12000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" },
      { name: "Celia Paul", contact: "9551241315" }
    ]
  },
  {
    name: "Smartworks- Olympia National Tower",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "10000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Narendhar Kumar", contact: "9677214007" }
    ]
  },
  {
    name: "Smartworks- Bharati Vilas",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Narendhar Kumar", contact: "9677214007" }
    ]
  },
  {
    name: "Smartworks- Kochar Globe",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "10000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Narendhar Kumar", contact: "9677214007" }
    ]
  },
  {
    name: "The Executive Centre- olampia teknos",
    category: "Premium(12K or More)",
    location: "Guindy",
    area: "Chennai - East",
    price: "12000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Divya", contact: "9884853961" }
    ]
  },
  {
    name: "The Executive Centre- tamarai tech park",
    category: "Premium(12K or More)",
    location: "Guindy",
    area: "Chennai - East",
    price: "12000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Divya", contact: "9884853961" }
    ]
  },
  {
    name: "Trend Works - Kochar Bliss",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "11000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Prabhakar", contact: "9094530296" },
      { name: "Vasudevan", contact: "8056299002" }
    ]
  },
  {
    name: "Awfis Spero Primus",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "8000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "Dhwarco-2",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "6500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Ranjith", contact: "8072720550" }
    ]
  },
  {
    name: "Dhwarco 3",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "6500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Ranjith", contact: "8072720550" }
    ]
  },
  {
    name: "IndiQube Palmyra",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "IndiQube Viceroy",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "IndiQube Excellence",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "IndiQube Ocean Bay",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "IndiQube Alpine",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "IndiQube Prime",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "HuntOffices",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Mihir", contact: "9319427324" }
    ]
  },
  {
    name: "Khalf CoWorks",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Mohamed", contact: "9940222448" }
    ]
  },
  {
    name: "The Executive Centre - Olympia Technology Park",
    category: "Premium(12K or More)",
    location: "Guindy",
    area: "Chennai - East",
    price: "12000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Divya", contact: "9884853961" }
    ]
  },
  {
    name: "Regus - Spaces Olympia Tech Park",
    category: "Premium(12K or More)",
    location: "Guindy",
    area: "Chennai - East",
    price: "12000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" }
    ]
  },
  {
    name: "Trend Works - RR Tower",
    category: "Premium(12K or More)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Prabhakar", contact: "9094530296" }
    ]
  },
  {
    name: "Trend Works - Bristol Tower",
    category: "Premium(12K or More)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Prabhakar", contact: "9094530296" }
    ]
  },
  {
    name: "Trend works",
    category: "Premium(12K or More)",
    location: "Guindy",
    area: "Chennai - East",
    price: "16000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Prabhakar", contact: "9094530296" }
    ]
  },
  {
    name: "iSprout Business Centre SMT",
    category: "Premium(12K or More)",
    location: "Guindy",
    area: "Chennai - East",
    price: "14500",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Suroj", contact: "9154279192" },
      { name: "Surya", contact: "9121107547" },
      { name: "Roshni", contact: "9154829573" }
    ]
  },
  {
    name: "IndiQube Ocean square",
    category: "Standard (6k-12k)",
    location: "Guindy",
    area: "Chennai - East",
    price: "9000",
    coordinates: [13.0084, 80.2214],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "The Workzone Business center",
    category: "Standard (6k-12k)",
    location: "Kilpauk",
    area: "Chennai - West",
    price: "7500",
    coordinates: [13.0800, 80.2281],
    poc: [
      { name: "Sumati", contact: "07448822663" }
    ]
  },
  {
    name: "The Affordable Place",
    category: "Standard (6k-12k)",
    location: "kilpauk",
    area: "Chennai - West",
    price: "6000",
    coordinates: [13.0800, 80.2281],
    poc: [
      { name: "Pradeep", contact: "9840103282" }
    ]
  },
  {
    name: "VSion Tech park Pvt Ltd",
    category: "Standard (6k-12k)",
    location: "Kilpauk",
    area: "Chennai - West",
    price: "6500",
    coordinates: [13.0800, 80.2281],
    poc: [
      { name: "Rajashekhar", contact: "9901584181" },
      { name: "Ram", contact: "9551888666" },
      { name: "Kishore", contact: "7601966546" }
    ]
  },
  {
    name: "The Office Xpress",
    category: "Standard (6k-12k)",
    location: "Kodambakkam",
    area: "Chennai - East",
    price: "10200",
    coordinates: [13.0231, 80.2226],
    poc: [
      { name: "Victor", contact: "9840874949" }
    ]
  },
  {
    name: "Ishare Office",
    category: "Budgeted(6k or less)",
    location: "Kolathur",
    area: "Chennai - North",
    price: "3500",
    coordinates: [13.1122, 80.1905],
    poc: [
      { name: "Rahees", contact: "7010552727" }
    ]
  },
  {
    name: "Mikro Grafeio (Beyond Workspaces)",
    category: "Budgeted(6k or less)",
    location: "Koyembedu",
    area: "Chennai - North",
    price: "5500",
    coordinates: [13.0567, 80.2104],
    poc: [
      { name: "Smriti", contact: "8056298612" },
      { name: "Sarvanan", contact: "9080169506" }
    ]
  },
  {
    name: "ARS coworking",
    category: "Standard (6k-12k)",
    location: "Madipakkam",
    area: "Chennai - East",
    price: "6000",
    coordinates: [12.9469, 80.1817],
    poc: [
      { name: "Selvam", contact: "9884642837" },
      { name: "Lakshmi", contact: "9789976662" }
    ]
  },
  {
    name: "Pick your desk",
    category: "Budgeted(6k or less)",
    location: "Madipakkam",
    area: "Chennai - East",
    price: "5500",
    coordinates: [12.9469, 80.1817],
    poc: [
      { name: "Kumaraswami", contact: "9940334644" }
    ]
  },
  {
    name: "Workdesq",
    category: "Budgeted(6k or less)",
    location: "Maduravoyal",
    area: "Chennai - West",
    price: "5000",
    coordinates: [13.0790, 80.1763],
    poc: [
      { name: "Kavitha", contact: "8508544011" }
    ]
  },
  {
    name: "Coqub Coworking Space",
    category: "Standard (6k-12k)",
    location: "Maduravoyal",
    area: "Chennai - West",
    price: "6500",
    coordinates: [13.0790, 80.1763],
    poc: [
      { name: "Ganesh Kumar", contact: "7305098809" },
      { name: "Kavitha", contact: "8508544012" }
    ]
  },
  {
    name: "Crizone Business Centre",
    category: "Budgeted(6k or less)",
    location: "Mogappair East",
    area: "Chennai - East",
    price: "5000",
    coordinates: [13.0878, 80.1796],
    poc: [
      { name: "Subha", contact: "8680000022" },
      { name: "Vidya", contact: "9790829711" }
    ]
  },
  {
    name: "1111 Studio Space",
    category: "Standard (6k-12k)",
    location: "Mogappair East",
    area: "Chennai - East",
    price: "8000",
    coordinates: [13.0878, 80.1796],
    poc: [
      { name: "Prince", contact: "9841002900" }
    ]
  },
  {
    name: "CDS Workspro",
    category: "Standard (6k-12k)",
    location: "Mogappair East",
    area: "Chennai - East",
    price: "6000",
    coordinates: [13.0878, 80.1796],
    poc: [
      { name: "Dipika", contact: "7305008885" },
      { name: "Jai Kumar", contact: "9500091238" }
    ]
  },
  {
    name: "Square Space",
    category: "Standard (6k-12k)",
    location: "Mogappair East",
    area: "Chennai - East",
    price: "6000",
    coordinates: [13.0878, 80.1796],
    poc: [
      { name: "Shridevi", contact: "9840914644" }
    ]
  },
  {
    name: "abcd mogappair - a business class desk",
    category: "Budgeted(6k or less)",
    location: "Mogappair East",
    area: "Chennai - East",
    price: "5000",
    coordinates: [13.0878, 80.1796],
    poc: [
      { name: "Avinash", contact: "9884011451" }
    ]
  },
  {
    name: "Co-Concept",
    category: "Budgeted(6k or less)",
    location: "Mylapore",
    area: "Chennai - East",
    price: "500/hour",
    coordinates: [13.0299, 80.2645],
    poc: [
      { name: "Kumaran", contact: "8939319334" }
    ]
  },
  {
    name: "Regus Citi Centre",
    category: "Standard (6k-12k)",
    location: "Mylapore",
    area: "Chennai - East",
    price: "12000",
    coordinates: [13.0299, 80.2645],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" },
      { name: "Celia Paul", contact: "9551241315" }
    ]
  },
  {
    name: "CIIC Co-Working Space",
    category: "Premium(12K or More)",
    location: "Mylapore",
    area: "Chennai - East",
    price: "12000",
    coordinates: [13.0299, 80.2645],
    poc: [
      { name: "Kiran", contact: "9884282809" }
    ]
  },
  {
    name: "Workmate",
    category: "Standard (6k-12k)",
    location: "Nandanam",
    area: "Chennai - West",
    price: "7000",
    coordinates: [13.0215, 80.2323],
    poc: [
      { name: "Sakthi", contact: "6385287003" }
    ]
  },
  {
    name: "DBS Business Center",
    category: "Standard (6k-12k)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "9500",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Jaiyander", contact: "9894573782" }
    ]
  },
  {
    name: "Workamuse",
    category: "Budgeted(6k or less)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "5500",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Arjun", contact: "9003127048" }
    ]
  },
  {
    name: "Awfis Gemini Circle Nungambakkam",
    category: "Standard (6k-12k)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "11000",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Amrutha", contact: "9094015858" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "Work 11",
    category: "Standard (6k-12k)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "9k",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Sunil", contact: "9176910011" },
      { name: "Chandra Mauli", contact: "9841027187" }
    ]
  },
  {
    name: "Work Villa by OYO",
    category: "Standard (6k-12k)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "7500",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Meena", contact: "9791097900" }
    ]
  },
  {
    name: "My Branch",
    category: "Standard (6k-12k)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "8500",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Veenitha", contact: "8451999506" }
    ]
  },
  {
    name: "Awfis Prestige Palladium Bayan",
    category: "Standard (6k-12k)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "11500",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Amrutha", contact: "9094015858" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "Whole Works - Co working space",
    category: "Standard (6k-12k)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "7000",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Vinodh", contact: "9042081944" }
    ]
  },
  {
    name: "Woco Space",
    category: "Standard (6k-12k)",
    location: "Nungambakkam",
    area: "Chennai - West",
    price: "7000",
    coordinates: [13.0400, 80.2270],
    poc: [
      { name: "Jayashree", contact: "6381196792" }
    ]
  },
  {
    name: "Indiqube Brigade Vantage",
    category: "Standard (6k-12k)",
    location: "Perungudi",
    area: "Chennai - South",
    price: "8500",
    coordinates: [12.9383, 80.2256],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "A-space",
    category: "Budgeted(6k or less)",
    location: "Velachery",
    area: "Chennai - East",
    price: "4000",
    coordinates: [12.9526, 80.2138],
    poc: [
      { name: "Alex", contact: "9962531982" }
    ]
  },
  {
    name: "CPJK Workspace",
    category: "Standard (6k-12k)",
    location: "Vadapalani",
    area: "Chennai - South",
    price: "7500",
    coordinates: [13.0661, 80.2114],
    poc: [
      { name: "Varanidharan", contact: "7010025126" }
    ]
  },
  {
    name: "Regus Spaces Express Avenue",
    category: "Standard (6k-12k)",
    location: "Royapettah",
    area: "Chennai - North",
    price: "12000",
    coordinates: [13.0404, 80.2535],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" },
      { name: "Celia Paul", contact: "9551241315" }
    ]
  },
  {
    name: "Regus Prince Infocity II",
    category: "Standard (6k-12k)",
    location: "OMR",
    area: "Chennai - South",
    price: "12000",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" },
      { name: "Celia Paul", contact: "9551241315" }
    ]
  },
  {
    name: "Regus Shyamala Gardens",
    category: "Standard (6k-12k)",
    location: "Vadapalani",
    area: "Chennai - South",
    price: "12000",
    coordinates: [13.0661, 80.2114],
    poc: [
      { name: "Poorna Chandra", contact: "9080889636" },
      { name: "Celia Paul", contact: "9551241315" }
    ]
  },
  {
    name: "Makers tribe",
    category: "Budgeted(6k or less)",
    location: "OMR",
    area: "Chennai - South",
    price: "3500",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Sakthi", contact: "8610086243" },
      { name: "Aravind", contact: "8870788712" }
    ]
  },
  {
    name: "Space N Beyond",
    category: "Standard (6k-12k)",
    location: "Tambaram",
    area: "Chennai - South",
    price: "5000-6000",
    coordinates: [12.9341, 80.1695],
    poc: [
      { name: "Sudha", contact: "9884616151" }
    ]
  },
  {
    name: "Inspire Workspace",
    category: "Standard (6k-12k)",
    location: "Vadapalani",
    area: "Chennai - South",
    price: "5500",
    coordinates: [13.0661, 80.2114],
    poc: [
      { name: "Shanker", contact: "9380090783" },
      { name: "Rajeshwari", contact: "9677120783" },
      { name: "Jenifer", contact: "9043496458" }
    ]
  },
  {
    name: "Greeta, WorkFlo by OYO",
    category: "Budgeted(6k or less)",
    location: "OMR",
    area: "Chennai - South",
    price: "5800",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Sudharshan", contact: "9790793921" },
      { name: "Boobalan", contact: "9841559550" }
    ]
  },
  {
    name: "Awfis Bascon",
    category: "Standard (6k-12k)",
    location: "T Nagar",
    area: "Chennai - East",
    price: "7000",
    coordinates: [13.0374, 80.2317],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "Cowrks",
    category: "Standard (6k-12k)",
    location: "Perungudi",
    area: "Chennai - South",
    price: "14500",
    coordinates: [12.9383, 80.2256],
    poc: [
      { name: "Shivani", contact: "9500144508" }
    ]
  },
  {
    name: "Cowrks",
    category: "Standard (6k-12k)",
    location: "OMR",
    area: "Chennai - South",
    price: "16000",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Praveen", contact: "8667600771" }
    ]
  },
  {
    name: "Smartworks Arihant Verge",
    category: "Standard (6k-12k)",
    location: "Perungudi",
    area: "Chennai - South",
    price: "10500",
    coordinates: [12.9383, 80.2256],
    poc: [
      { name: "Narendhar Kumar", contact: "9677214007" }
    ]
  },
  {
    name: "Smartworks Prestige Polygon",
    category: "Standard (6k-12k)",
    location: "Teynampet",
    area: "Chennai - South",
    price: "10000",
    coordinates: [13.0294, 80.2361],
    poc: [
      { name: "Narendhar Kumar", contact: "9677214007" }
    ]
  },
  {
    name: "OYO Innov8 RMZ Millenia",
    category: "Standard (6k-12k)",
    location: "Perungudi",
    area: "Chennai - South",
    price: "9500",
    coordinates: [12.9383, 80.2256],
    poc: [
      { name: "Sudharshan", contact: "9790793921" },
      { name: "Boobalan", contact: "9841559550" },
      { name: "Shefali", contact: "6366627327" }
    ]
  },
  {
    name: "WorkEZ",
    category: "Standard (6k-12k)",
    location: "OMR",
    area: "Chennai - South",
    price: "11500",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Rohit", contact: "8825848203" },
      { name: "Guhan", contact: "9551245124" }
    ]
  },
  {
    name: "Cactus",
    category: "Standard (6k-12k)",
    location: "sholinganallur",
    area: "Chennai - East",
    price: "8500",
    coordinates: [12.8999, 80.2206],
    poc: [
      { name: "Deepika", contact: "7358259388" },
      { name: "Donald", contact: "7708004813" }
    ]
  },
  {
    name: "Awfis Prestige Cosmopolitan",
    category: "Premium(12K or More)",
    location: "Saidapet",
    area: "Chennai - East",
    price: "13000",
    coordinates: [13.0166, 80.2200],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Amrutha", contact: "9094015858" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "Awfis OMR 1",
    category: "Standard (6k-12k)",
    location: "OMR",
    area: "Chennai - South",
    price: "7000",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Amrutha", contact: "9094015858" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "The Hive",
    category: "Premium(12K or More)",
    location: "OMR",
    area: "Chennai - South",
    price: "14000",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Blenden Lewis", contact: "8778108146" },
      { name: "Balaji", contact: "9791549404" }
    ]
  },
  {
    name: "NIC TECH PARK",
    category: "Premium(12K or More)",
    location: "Perungudi",
    area: "Chennai - South",
    price: "12000",
    coordinates: [12.9383, 80.2256],
    poc: [
      { name: "Sindhuja", contact: "9600002026" }
    ]
  },
  {
    name: "HubFive",
    category: "Budgeted(6k or less)",
    location: "sholinganallur",
    area: "Chennai - East",
    price: "4800",
    coordinates: [12.8999, 80.2206],
    poc: [
      { name: "Thiru Murugan", contact: "6379729487" }
    ]
  },
  {
    name: "WorkEZ Hansa",
    category: "Standard (6k-12k)",
    location: "Pathari Road",
    area: "Chennai - Central",
    price: "10000",
    coordinates: [13.0142, 80.2185],
    poc: [
      { name: "Jagadeesh", contact: "9884153686" },
      { name: "Rohit", contact: "9551245124" }
    ]
  },
  {
    name: "IndiQube Millenia",
    category: "Premium(12K or More)",
    location: "Perungudi",
    area: "Chennai - South",
    price: "15000",
    coordinates: [12.9383, 80.2256],
    poc: [
      { name: "Naveen", contact: "9962789622" },
      { name: "Monalisa", contact: "6362453996" }
    ]
  },
  {
    name: "Logic Space Coworking Space",
    category: "Standard (6k-12k)",
    location: "Saligramam",
    area: "Chennai - North",
    price: "10000",
    coordinates: [12.8999, 80.2206],
    poc: [
      { name: "Contact", contact: "9345247608" }
    ]
  },
  {
    name: "Cove office",
    category: "Standard (6k-12k)",
    location: "Perungudi",
    area: "Chennai - South",
    price: "9500",
    coordinates: [12.9383, 80.2256],
    poc: [
      { name: "Mani", contact: "8105100800" }
    ]
  },
  {
    name: "Desk Ventures",
    category: "Budgeted(6k or less)",
    location: "Purasaiwakkam",
    area: "Chennai - West",
    price: "4000",
    coordinates: [13.0873, 80.2331],
    poc: [
      { name: "Hardik", contact: "9962214040" }
    ]
  },
  {
    name: "Vantage Coworking",
    category: "Budgeted(6k or less)",
    location: "Thiruvanmiyur",
    area: "Chennai - East",
    price: "5000",
    coordinates: [12.9856, 80.2595],
    poc: [
      { name: "Somu", contact: "9003003325" }
    ]
  },
  {
    name: "Mikro Grafeio (Beyond Workspaces)",
    category: "Standard (6k-12k)",
    location: "Teynampet",
    area: "Chennai - South",
    price: "7000",
    coordinates: [13.0294, 80.2361],
    poc: [
      { name: "Smriti", contact: "8056298612" },
      { name: "Sarvanan", contact: "9080169506" }
    ]
  },
  {
    name: "Work Villa by OYO",
    category: "Standard (6k-12k)",
    location: "Royapettah",
    area: "Chennai - North",
    price: "7500",
    coordinates: [13.0404, 80.2535],
    poc: [
      { name: "Meena", contact: "9791097900" }
    ]
  },
  {
    name: "Coqub Coworking Space",
    category: "Standard (6k-12k)",
    location: "Villivakkam",
    area: "Chennai - North",
    price: "7500",
    coordinates: [13.0700, 80.1715],
    poc: [
      { name: "Kavitha", contact: "8508544011" }
    ]
  },
  {
    name: "The Executive Centre - RMZ ONE PARAMOUNT",
    category: "Premium(12K or More)",
    location: "Porur",
    area: "Chennai - North",
    price: "12000",
    coordinates: [13.0124, 80.2122],
    poc: [
      { name: "Divya", contact: "9884853961" }
    ]
  },
  {
    name: "Awfis Arihant Technopolis",
    category: "Standard (6k-12k)",
    location: "OMR",
    area: "Chennai - South",
    price: "10800",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Amrutha", contact: "9094015858" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "Awfis Centre Point",
    category: "Standard (6k-12k)",
    location: "Porur",
    area: "Chennai - North",
    price: "9000",
    coordinates: [13.0124, 80.2122],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Amrutha", contact: "9094015858" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "Awfis Sierra",
    category: "Standard (6k-12k)",
    location: "OMR",
    area: "Chennai - South",
    price: "10800",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Sahastrayu", contact: "9989400206" },
      { name: "Geetha", contact: "9884452200" },
      { name: "Amrutha", contact: "9094015858" },
      { name: "Pratham", contact: "9600020065" }
    ]
  },
  {
    name: "canyon coworking space",
    category: "Standard (6k-12k)",
    location: "Thoraipakkam",
    area: "Chennai - East",
    price: "7500",
    coordinates: [12.8925, 80.2244],
    poc: [
      { name: "Ravi", contact: "9360219360" }
    ]
  },
  {
    name: "Managed Office",
    category: "Standard (6k-12k)",
    location: "OMR",
    area: "Chennai - South",
    price: "100 sqft",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "M.Sekar", contact: "9884087559" }
    ]
  },
  {
    name: "Mikro Grafeio (Beyond Workspaces)",
    category: "Standard (6k-12k)",
    location: "Royapettah",
    area: "Chennai - North",
    price: "8000",
    coordinates: [13.0404, 80.2535],
    poc: [
      { name: "Smriti", contact: "8056298612" }
    ]
  },
  {
    name: "Mikro Grafeio (Beyond Workspaces)",
    category: "Standard (6k-12k)",
    location: "Velachery",
    area: "Chennai - East",
    price: "7000-9000",
    coordinates: [12.9526, 80.2138],
    poc: [
      { name: "Smriti", contact: "8056298612" }
    ]
  },
  {
    name: "Trend Works - Sterling Technopolis",
    category: "Premium(12K or More)",
    location: "OMR",
    area: "Chennai - South",
    price: "12000",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Prabhakar", contact: "9094530296" }
    ]
  },
  {
    name: "Wibur Coworking",
    category: "Standard (6k-12k)",
    location: "oragadam",
    area: "Chennai - South",
    price: "8000",
    coordinates: [12.8887, 80.0734],
    poc: [
      { name: "John", contact: "7788996926" },
      { name: "Shibina", contact: "7788996930" }
    ]
  },
  {
    name: "Smartworks Olympia Pinnacle",
    category: "Standard (6k-12k)",
    location: "Thoraipakkam",
    area: "Chennai - East",
    price: "10000",
    coordinates: [12.8925, 80.2244],
    poc: [
      { name: "Narendhar Kumar", contact: "9677214007" }
    ]
  },
  {
    name: "Spaces",
    category: "Premium(12K or More)",
    location: "Royapettah",
    area: "Chennai - North",
    price: "20000",
    coordinates: [13.0404, 80.2535],
    poc: [
      { name: "Abdul Rahim", contact: "8939717430" }
    ]
  },
  {
    name: "Joy works",
    category: "Standard (6k-12k)",
    location: "sholinganallur",
    area: "Chennai - East",
    price: "8000",
    coordinates: [12.8999, 80.2206],
    poc: [
      { name: "Mani", contact: "9677888253" }
    ]
  },
  {
    name: "Offisolv",
    category: "Standard (6k-12k)",
    location: "Saidpet",
    area: "Chennai - South",
    price: "6500",
    coordinates: [13.0166, 80.2200],
    poc: [
      { name: "Gupta", contact: "9841014144" }
    ]
  },
  {
    name: "Chamberz space",
    category: "Budgeted(6k or less)",
    location: "T nagar",
    area: "Chennai - South",
    price: "5000",
    coordinates: [13.0374, 80.2317],
    poc: [
      { name: "Venkat Rao", contact: "6381141629" }
    ]
  },
  {
    name: "Bluemix Coworking",
    category: "Budgeted(6k or less)",
    location: "Velachery",
    area: "Chennai - East",
    price: "5000",
    coordinates: [12.9526, 80.2138],
    poc: [
      { name: "Karthik", contact: "9600099745" },
      { name: "Praksheth", contact: "9940058102" }
    ]
  },
  {
    name: "iSprout Business Centre SMT",
    category: "Standard (6k-12k)",
    location: "OMR",
    area: "Chennai - South",
    price: "9500",
    coordinates: [12.9790, 80.2500],
    poc: [
      { name: "Suroj", contact: "9154279192" },
      { name: "Surya", contact: "9121107547" },
      { name: "Roshni", contact: "9154829573" }
    ]
  },
  {
    name: "Disruptors / dot coworking",
    category: "Standard (6k-12k)",
    location: "Perungudi",
    area: "Chennai - South",
    price: "7500",
    coordinates: [12.9383, 80.2256],
    poc: [
      { name: "Karthik", contact: "7806898198" },
      { name: "Anjali", contact: "New POC" }
    ]
  }
];