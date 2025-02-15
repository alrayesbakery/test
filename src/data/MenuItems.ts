import { MenuItem } from "../types";
import Mankouche from "../assets/mankouche.png";
import lahme from "../assets/lahme.png";
import jebne from "../assets/jebne.png";
import zaatarExtra from "../assets/zaatar_extra.png";
import lahmeJebne from "../assets/lahme_w_jebne.png";
import zaatarJebne from "../assets/zaatar_w_jebne.png";
import jebneJambon from "../assets/jebne_w_jambon.png";
import classicpizza from "../assets/classicpizza.png";
import allmeatpizza from "../assets/allmeatpizza.png";
import peperonipizza from "../assets/peperonipizza.png";
import margheritapizza from "../assets/margheritapizza.png";
import salamipizza from "../assets/salamipizza.png";

export const menuItems: MenuItem[] = [
  // Manakeesh
  {
    id: 1,
    name: "Zaatar",
    image: Mankouche,
    price: "$0.84",
    ingredients: "",
    category: "Manakeesh",
  },
  {
    id: 2,
    name: "Zaatar Extra",
    image: zaatarExtra,
    price: "$1.20",
    ingredients: "",
    category: "Manakeesh",
  },
  {
    id: 3,
    name: "Zaatar Ma3 Jebneh",
    image: zaatarJebne,
    price: "$2.50",
    ingredients: "",
    category: "Manakeesh",
  },
  {
    id: 4,
    name: "Lahm b3ajin",
    image: lahme,
    price: "$2.60",
    ingredients: "",
    category: "Manakeesh",
  },
  {
    id: 5,
    name: "Jebneh",
    image: jebne,
    price: "$2.90",
    ingredients: "",
    category: "Manakeesh",
  },
  {
    id: 6,
    name: "Lahme Ma3 Jebneh",
    image: lahmeJebne,
    price: "$3.45",
    ingredients: "",
    category: "Manakeesh",
  },
  {
    id: 7,
    name: "Jebneh W Jambon",
    image: jebneJambon,
    price: "$3.80",
    ingredients: "",
    category: "Manakeesh",
  },

  // Pizza
  {
    id: 8,
    name: "Classic Pizza",
    image: classicpizza,
    prices: { small: "$6.00", large: "$12.00" },
    ingredients:
      "Tomato Sauce, Ham,  Mozzarella, Green Peppers, Mushrooms & Olives",
    category: "Pizza",
  },
  {
    id: 9,
    name: "Margherita Pizza",
    image: margheritapizza,
    prices: { small: "$6.00", large: "$12.00" },
    ingredients: "Tomato sauce & Mozzarella",
    category: "Pizza",
  },
  {
    id: 10,
    name: "Vegetarian Pizza",
    image: classicpizza,
    prices: { small: "$6.00", large: "$12.00" },
    ingredients: "Tomato sauce, Mozarella, Green Peppers, Mushrooms & Olives",
    category: "Pizza",
  },
  {
    id: 11,
    name: "Peperoni Pizza",
    image: peperonipizza,
    prices: { small: "$7.00", large: "$14.00" },
    ingredients: "Tomato sauce, Mozzarella & Pepperoni Slices.",
    category: "Pizza",
  },
  {
    id: 12,
    name: "Salami Pizza",
    image: salamipizza,
    prices: { small: "$7.00", large: "$14.00" },
    ingredients: "Tomato Sauce, Mozzarella & Salami Slices.",
    category: "Pizza",
  },
  {
    id: 13,
    name: "All Meat Pizza",
    image: allmeatpizza,
    prices: { small: "$8.00", large: "$16.00" },
    ingredients:
      "Tomato sauce, Ham, Mozzarella, Salami, Peperoni, Green Peppers, Mushrooms & Olives.",
    category: "Pizza",
  },

  // Mini Dozens
  {
    id: 14,
    name: "Mini Zaatar",
    image: "",
    price: "$2.25",
    ingredients: "",
    category: "Mini Dozens",
  },
  {
    id: 15,
    name: "Mini Lahm B3ajin",
    image: "",
    price: "$4.00",
    ingredients: "",
    category: "Mini Dozens",
  },
  {
    id: 16,
    name: "Mini Jebneh",
    image: "",
    price: "$4.50",
    ingredients: "",
    category: "Mini Dozens",
  },
  {
    id: 17,
    name: "Mini Jebneh w Jambon",
    image: "",
    price: "$5.00",
    ingredients: "",
    category: "Mini Dozens",
  },
  {
    id: 18,
    name: "Mini Pizza - Classic",
    image: "",
    price: "$6.50",
    ingredients: "",
    category: "Mini Dozens",
  },

  //Drinks

  {
    id: 19,
    name: "Water",
    image: "",
    price: "$0.50",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 20,
    name: "Perrier",
    image: "",
    price: "$2.00",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 21,
    name: "Iran",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 22,
    name: "Pepsi",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 23,
    name: "Pepsi Diet",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 24,
    name: "7up",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 25,
    name: "7up Diet",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 26,
    name: "Mirinda",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 27,
    name: "Tropicana - Cocktail",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 28,
    name: "Tropicana - Orange",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 29,
    name: "Tropicana - Ananas",
    image: "",
    price: "$0.90",
    ingredients: "",
    category: "Drinks",
  },
  {
    id: 30,
    name: "Beer",
    image: "",
    price: "$2.00",
    ingredients: "",
    category: "Drinks",
  },
];
