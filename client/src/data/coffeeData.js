import espresso from "../assets/images/espresso.jpg";
import cappuccino from "../assets/images/cappuccino.jpg";
import latte from "../assets/images/latte.jpg";

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
  }
];

export default coffeeData;

