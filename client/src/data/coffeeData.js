import espresso from "../assets/images/espresso.jpg";
import cappuccino from "../assets/images/cappuccino.jpg";
import latte from "../assets/images/latte.jpg";
import americano from "../assets/images/americano.jpeg";
import mocha from "../assets/images/cappuccino.jpg";
import macchiato from "../assets/images/macchiato.webp";
import flatWhite from "../assets/images/flat white.webp";
import affogato from "../assets/images/frappe.webp";
import cortado from "../assets/images/cortado.png";
import ristretto from "../assets/images/ristretto.webp";
import lungo from "../assets/images/lungo.jpg";
import redEye from "../assets/images/doppio.jpg";
import blackEye from "../assets/images/coldbrew.jpg";
import vienna from "../assets/images/frappe.webp";
import irish from "../assets/images/coldbrew.jpg"; 
import orange from "../assets/images/orange.jpg";
import grapefruit from "../assets/images/grapefruit.jpg";
import lemon from "../assets/images/lemon.jpg";
import strawberry from "../assets/images/strawberry.jpg";
import blackberry from "../assets/images/blackberry.jpg";
import papaya from "../assets/images/papaya.png";
import mango from "../assets/images/mango.png";
import passion from "../assets/images/passion.jpg";
import blueberry from "../assets/images/blueberry.jpg";
import coconut from "../assets/images/coconut.png";
import pineapple from "../assets/images/pineapple.jpg";
const coffeeData = [
  {
    id: 1,
    name: "Espresso",
    price: 3,
    description: "A concentrated shot of pure coffee made by forcing hot water through finely ground coffee beans under pressure",
    composition: "100% Arabica coffee beans",
    characteristics: "Intense flavor, full-bodied, and rich aroma",
    serving: "Small cup (1-2 oz)",
    taste: "Bold, strong, and slightly bitter",
    image: espresso
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4,
    description: "Espresso with steamed milk and foam",
    composition: "Espresso with steamed milk and foam",
    characteristics: "Balanced flavor with a creamy texture",
    serving: "Small to medium cup (6-8 oz)",
    taste: "Rich, smooth, balanced",
    image: cappuccino
  },
  {
    id: 3,
    name: "Latte",
    price: 4.5,
    description: "Smooth coffee with lots of milk",
    composition: "Espresso with steamed milk and foam",
    characteristics: "Smooth, creamy texture with a mild coffee flavor",
    serving: "Large cup (8-12 oz)",
    taste: "Mild, sweet, creamy",
    image: latte
  },
  {
    id: 4,
    name: "Americano",
    price: 3.5,
    description: "Espresso diluted with hot water",
    composition: "Espresso with hot water",
    characteristics: "Milder flavor than espresso, but still strong and bold",
    serving: "Medium cup (8-12 oz)",
    taste: "Smooth, mild, and less intense than espresso",
    image: americano
  },
  {
    id: 5,
    name: "Mocha",
    price: 5,
    description: "Espresso with steamed milk and chocolate syrup",
    composition: "Espresso with steamed milk and chocolate syrup",
    characteristics: "Sweet and creamy with a rich chocolate flavor",
    serving: "Medium to large cup (8-12 oz)",
    taste: "Sweet, creamy, chocolatey",
    image: mocha
  },
  {
    id: 6,
    name: "Macchiato",
    price: 3.5,
    description: "Espresso with a small amount of steamed milk and foam",
    composition: "Espresso with a small amount of steamed milk and foam",
    characteristics: "Strong coffee flavor with a hint of milk sweetness",
    serving: "Small cup (2-4 oz)",
    taste: "Bold, slightly sweet, creamy texture",
    image: macchiato
  },
  {
    id: 7,
    name: "Flat White",
    price: 4.5,
    description: "Espresso with steamed milk and microfoam for a smooth texture",
    composition: "Espresso with steamed milk and microfoam",
    characteristics: "Smooth texture with a balanced coffee flavor and creamy finish",
    serving: "Small to medium cup (6-8 oz)",
    taste: "Smooth, balanced, creamy texture without the foam of a cappuccino",
     image : flatWhite
   },
   {
     id : 8,
     name : 'Affogato',
     price : 5.5,
     description : 'Espresso poured over vanilla ice cream',
     composition : 'Espresso over vanilla ice cream',
     characteristics : 'Rich, sweet, and indulgent',
     serving : 'Small to medium cup (6-8 oz)',
     taste : 'Sweet, creamy, rich coffee flavor',
     image : affogato
   },
   {
     id : 9,
     name : 'Cortado',
     price : 4.0,
     description : 'Equal parts espresso and steamed milk',
     composition : 'Equal parts espresso and steamed milk',
     characteristics : 'Balanced between strong coffee flavor and smooth texture',
     serving : 'Small cup (4-6 oz)',
     taste : 'Balanced, smooth, slightly sweet',
      image : cortado
   },
   {
      id :10,
      name :'Ristretto',
      price :3.5,
      description :'Concentrated espresso made with less water than regular espresso',
      composition :'Concentrated espresso made with less water than regular espresso',
      characteristics :'Intense flavor without the bitterness of regular espresso',
      serving :'Small cup (1-2 oz)',
      taste :'Intense, concentrated flavor without bitterness',
       image : ristretto
   },
   {
       id :11,
       name :'Lungo',
       price :4.0,
       description :'Longer extraction of espresso than regular espresso but shorter than americano',
       composition :'Longer extraction of espresso than regular espresso but shorter than americano',
       characteristics :'Stronger flavor than regular espresso but less bitter than americano',
       serving :'Medium cup (6-8 oz)',
       taste :'Stronger flavor than regular espresso but less bitter than americano', 
        image:lungo
   },
   {
        id :12,
        name:'Red Eye', 
        price :4.0,
        description:'Coffee made by adding one shot of espresso to a cup of drip coffee.',
        composition:'Coffee made by adding one shot of espresso to a cup of drip coffee.',
        characteristics:'Stronger caffeine content due to the addition of an extra shot of espresso.',
        serving:'Medium to large cup (8-12 oz)',
        taste:'Strong caffeine kick with the familiar taste of drip coffee.',
         image:redEye
   },
   {
         id :13,
         name:'Black Eye', 
         price :4.5,
         description:'Coffee made by adding two shots of espresso to a cup of drip coffee.',
         composition:'Coffee made by adding two shots of espresso to a cup of drip coffee.',
         characteristics:'Even stronger caffeine content due to the addition of two shots of espresso.',
         serving:'Medium to large cup (8-12 oz)',
         taste:'Very strong caffeine kick with the familiar taste of drip coffee.',
          image:blackEye
   },
   {
          id :14,
          name:'Vienna', 
          price :5.0,
          description:'Coffee served in a small glass or ceramic mug topped with whipped cream.',
          composition:'Coffee served in a small glass or ceramic mug topped with whipped cream.',
          characteristics:'Richly textured drink that is both sweet and satisfying.',
          serving:'Small glass or ceramic mug (6-8 oz)',
          taste:'Sweet, richly textured drink that is both sweet and satisfying.', 
           image: vienna
      },
      {
            id :15,
            name:"Irish", 
            price : 5.0, 
            description:"Coffee made by adding Irish whiskey to it.",
            composition:"Coffee made by adding Irish whiskey to it.",
            characteristics:"Richly flavored drink that is both sweet and satisfying.",
            serving:"Small glass or ceramic mug (6-8 oz)",
            taste:"Sweet, richly flavored drink that is both sweet and satisfying.",
             image: irish
        },
        // juice photo 
        {
          id :16,
          name:"Orange Juice",
          price:2.99,
          description:"Classic breakfast juice made from fresh oranges",
          benefits:"Excellent source of vitamin C, folate, potassium; supports immune health",
          flavorprofile:"Sweet, tangy, refreshing",
          popularvarieties:"Fresh-squeezed, from concentrate",
          healthnotes:"High in natural sugars",
          category: "juice",
          image: orange
        },
        {
          id :17,
          name:"Grapefruit Juice",
          price : 4.99,
          benefits:"Rich in vitamin C, antioxidants, aids in weight management",
          flavorprofile:"Bitter-sweet, tangy, slightly acidic",
          healthnotes:"Can interact with certain medications",
          category: "juice",
          image: grapefruit
        
        },
        {
          id :18,
          name:"Lemon Juice",
          price: 1.99,
          description:" Pure lemon extract, often diluted for lemonade",
          benefits:"High in vitamin C, supports digestion, alkalizing effect",
          flavorprofile:"Extremely tart, acidic, refreshing",
          uses:"Detox drinks, lemonade, flavor enhancer",
          category: "juice",
          image: lemon
        
        },
        {
          id :19,
          name:"Strawberry Juice",
          price :6.99,
          description: "weet red berry juice",
          benefits:"Vitamin C, manganese, antioxidants",
          flavorprofile:"Sweet, aromatic, fresh",
          uses:"Often blended with other fruits",
          category: "juice",
          image: strawberry
        },
        {
          id :20,
          name:"Blackberry/Raspberry Juice",
          price :4.5,
          description: "Dark berry juices",
          benefits:"High fiber, vitamin C, antioxidants",
          flavorprofile: "Sweet-tart, rich",
          category: "juice",
          image: blackberry
        
        },
        {
          id :21,
          name:"Papaya Juice",
          price :5,
          description: "Smooth tropical juice",
          benefits:"Digestive enzymes (papain), vitamin C, vitamin A",
          flavorprofile: " Mild, sweet, slightly musky",
          category: "juice",
          image: papaya
        
        },
        {
          id :22,
          name:"Mango Juice",
          price :2,
          description: "Rich, creamy tropical juice",
          benefits:"Vitamin A, vitamin C, beta-carotene",
          flavorprofile:"Sweet, creamy, tropical",
          uses:"Smoothies, tropical blends",
          category: "juice",
          image: mango
        },
        {
          id :23,
          name:"Passion Fruit Juice",
          price :3,
          description: "Exotic, aromatic juice",
          benefits:"Vitamin C, fiber, antioxidants",
          flavorprofile:"Tart, sweet, intensely aromatic",
          category: "juice",
          image: passion
        
        },
        {
          
          id :24,
          name:"Blueberry Juice",
          price : 4.99,
          description:"Deep purple antioxidant-rich juice",
          benefits:"Highest antioxidant content, supports brain health, memory",
          flavorprofile:"Mildly sweet, slightly tart",
          healthnotes:"Supports cognitive function",
          category: "juice",
          image: blueberry
        },
        {
          id :25,
          name:"Coconut Water",
          price : 1.5,
          description:"Clear liquid from young coconuts",
          benefits:" Electrolytes, potassium, natural hydration",
          flavorprofile:"Mildly sweet, nutty",
          uses:"Post-workout hydration",
          category: "juice",
          image: coconut
        },
        {
          id :26,
          name:"Pineapple Juice",
          price : 2.5,
          description:"Sweet tropical juice",
          benefits:"Vitamin C, manganese, bromelain enzyme (aids digestion)",
          flavorprofile:"Sweet, tangy, tropical",
          healthnotes:" Anti-inflammatory properties",
          category: "juice",
          image: pineapple
        }

];

export default coffeeData;

