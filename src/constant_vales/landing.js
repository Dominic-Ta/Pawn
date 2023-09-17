// import about from '../assets/img/about.jpg';

export const Name = <><i className="bi bi-gem"></i> Tony's Pawnshop <i className="bi bi-gem"></i></>;

export const sections = [
  { id: "Home", text: "Home" },
  { id: "what-we-do", text: "What we do" },
  { id: "about", text: "About" },
  { id: "skills", text: "Services" },
  { id: "gallery", text: "Gallery" },
  { id: "contact", text: "Contact" },
];
export const info =[
  { id:"electronics", url: "", title:"We take loans on electronics and jewelry", icon: <><i className="bi bi-laptop"></i></>},
  { id:"jewelry", url: "", title:"", icon: <><i className="bi bi-newspaper"></i></>},
];
export const Aboutus = "We provide the best interest rate on loans across the country.";
export const facts = [
  { id: "Resultsfact", text:<><i className="bx bx-check-double"></i> Guarantee Results </>},
  { id: "Staffact", text:<><i className="bx bx-check-double"></i> Helpful Staff</>},
  { id: "andfact", text: " and " },
  { id: "experiencefact", text:<><i className="bx bx-check-double"></i> Over four decades of experience!</>},
]
export const topfacts = [
  {icon: <><i className="bx bx-receipt"></i></>, title:"We specialize in gold!", text: "Stop by and learn more, we can even test on the spot for you."},
]
export const inputs = [
  { id: "count1", icon: "trophy", level: 100, text: "hundreds of items"},
  { id: "count2", icon: "journal-richtext", level: 4, text: "Decade of combined experience"},
  { id: "count3", icon: "shop", level: 2, text: "Locations"},
  { id: "count4", icon: "person-arms-up", level: 1, text: "Family Ran"},
]
export const Statement = " I'm very skilled at what I do, below are my top 6 skills "
export const skills = [
  { skill: 'HTML/SCSS', percentage: 90 },
  { skill: 'Excel/VBA', percentage: 100 },
  { skill: 'JavaScript', percentage: 85 },
  { skill: 'Python', percentage: 100 },
  { skill: 'SQL', percentage: 90 },
  { skill: 'Java', percentage: 75 },
]
export const title="test"
export const gallerytext="This a test of our designated systems"

// export const filteritems = [];

// for (let i = 1; i <= 12; i++) {
//   const image = require(`../assets/img/pawn1/image${i}.png`);
//   filteritems.push({
//     id: `image${i}`,
//     img: image.default, // Use .default to access the actual image
//     imgName: `image${i}.png`,
//     route_url: "www.runescape.com",
//     filter: `TestName${i}`,
//   });
// }
const imagePaths = [];
for (let i = 1; i <= 12; i++) {
  const imageImport = require(`../assets/img/pawn1/image${i}.png`);
  imagePaths.push(imageImport);
}
export const FCateg = ['All', 'Rings', 'Bracelets', 'Pendants', 'Chains', 'Earrings', 'Watches']
export const filteredItems = [
  {
    id: 'gal1',
    img: imagePaths[0].default,
    imgName: 'Ring Gallery',
    filter: 'Rings',
  },
  {
    id: 'gal2',
    img: imagePaths[1].default,
    imgName: 'Ring Gallery',
    filter: 'Rings',
  },
  {
    id: 'gal3',
    img: imagePaths[2].default,
    imgName: 'Bracelets Gallery',
    filter: 'Bracelets',
  },
  {
    id: 'gal4',
    img: imagePaths[3].default,
    imgName: 'Pendants Gallery',
    filter: 'Pendants',
  },
  {
    id: 'gal5',
    img: imagePaths[4].default,
    imgName: 'Pendants Gallery',
    filter: 'Pendants',
  },
  {
    id: 'gal6',
    img: imagePaths[5].default,
    imgName: 'Bracelets Gallery',
    filter: 'Bracelets',
  },
  {
    id: 'gal7',
    img: imagePaths[6].default,
    imgName: 'Chains Gallery',
    filter: 'Chains',
  },
  {
    id: 'gal8',
    img: imagePaths[7].default,
    imgName: 'Chains Gallery',
    filter: 'Chains',
  },
  {
    id: 'gal9',
    img: imagePaths[8].default,
    imgName: 'Earrings Gallery',
    filter: 'Earrings',
  },
  {
    id: 'gal10',
    img: imagePaths[9].default,
    imgName: 'Watches Gallery',
    filter: 'Watches',
  },
  {
    id: 'gal11',
    img: imagePaths[10].default,
    imgName: 'Watches Gallery',
    filter: 'Watches',
  },
  {
    id: 'gal12',
    img: imagePaths[11].default,
    imgName: 'Rings Gallery',
    filter: 'Rings',
  },
];
export const address = [
  {id: 1, store: "Tony's Jewelry & Loan Pawnshop", 
    map:"https://maps.app.goo.gl/pzNFhWU1H3PBQzoZ7", 
    address: "26454 Highland Ave, Highland, CA 92346",
    email: "tonysjewelryandloan2@gmail.com",
    number: "+19094255111"},
]