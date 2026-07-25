import pancakesImg from "@/assets/pancakes.jpg";
import omeletteImg from "@/assets/omelette.jpg";
import burgerImg from "@/assets/burger.jpg";
import croissantImg from "@/assets/croissant.jpg";
import heroImg from "@/assets/hero-breakfast.jpg";

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  img: string;
};

export type MenuSection = {
  section: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    section: "Pancakes & Sweet",
    items: [
      {
        name: "Classic Buttermilk Stack",
        desc: "Fluffy pancakes, butter, warm maple syrup.",
        price: "24",
        img: pancakesImg,
      },
      {
        name: "Lotus Dream",
        desc: "Pancakes drenched in Lotus caramel and crushed biscuit.",
        price: "31",
        img: pancakesImg,
      },
      {
        name: "Berry Cloud",
        desc: "Fresh berries, mascarpone, powdered sugar.",
        price: "29",
        img: pancakesImg,
      },
    ],
  },
  {
    section: "Omelettes & Eggs",
    items: [
      {
        name: "Cheesy Omelette",
        desc: "Three-cheese pull, herbs, sourdough toast.",
        price: "29",
        img: omeletteImg,
      },
      {
        name: "Shakshuka Fanateer",
        desc: "Eggs poached in spiced tomato, feta, bread.",
        price: "27",
        img: omeletteImg,
      },
      {
        name: "Dynamite Chicken",
        desc: "Crispy chicken, eggs, spicy Josh sauce.",
        price: "31",
        img: heroImg,
      },
    ],
  },
  {
    section: "Loaf, Buns & Burgers",
    items: [
      {
        name: "Golden Bun",
        desc: "Toasted brioche, cream cheese, honey drizzle.",
        price: "19",
        img: croissantImg,
      },
      {
        name: "Chicken Burger",
        desc: "Buttermilk fried chicken, pickles, brioche.",
        price: "17",
        img: burgerImg,
      },
      {
        name: "Le Croissant",
        desc: "Butter croissant, choice of jam or Nutella.",
        price: "15",
        img: croissantImg,
      },
    ],
  },
  {
    section: "From the Bar",
    items: [
      {
        name: "Spanish Latte",
        desc: "Espresso, steamed milk, condensed sweetness.",
        price: "16",
        img: heroImg,
      },
      {
        name: "V60 Pour Over",
        desc: "Rotating single origin, bright and clean.",
        price: "18",
        img: heroImg,
      },
      { name: "Karak", desc: "Spiced milk tea, brewed slow.", price: "10", img: heroImg },
    ],
  },
];
