import { createContext, useState, useEffect } from "react";
import tclTA from '../assets/products/TCLTA.png';
import womanHero from '../assets/products/LGLaundry.png';
import logoSvg from '../assets/logo.svg';
import bgHeroSvg from '../assets/bg_hero.svg';
import HanabishiFans from '../assets/products/HanabishiFan.png';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = [
      {
        id: 1,
        title: "TCL TA Series Smart AI Full DC Inverter",
        price: 37999,
        category: "Air Conditioner",
        image: tclTA,
        description: "Split Type 75% Energy Saving Self cleaning Wifi Control",
        rating: { rate: 4.5, count: 10 }
      },
      {
        id: 2,
        title: "LG F2721HVRBC 21kg",
        price: 49.99,
        category: "Laundry Machines",
        image: womanHero,
        description: "2024 Model – LG Washing Machine 21kg Front Load Washer & 12kg Dryer F2721HVRBC",
        rating: { rate: 4.0, count: 15 }
      },
      {
        id: 3,
        title: "Hanabishi Cool Fan HCF801",
        price: 19.99,
        category: "Electric Fans",
        image: HanabishiFans,
        description: "Comfortable t-shirt featuring the logo",
        rating: { rate: 3.5, count: 20 }
      },
      // {
      //   id: 4,
      //   title: "Background Hero Accessory",
      //   price: 39.99,
      //   category: "accessories",
      //   image: bgHeroSvg,
      //   description: "Unique hero background accessory",
      //   rating: { rate: 4.2, count: 5 }
      // },
      // {
      //   id: 5,
      //   title: "Logo SVG Item",
      //   price: 9.99,
      //   category: "accessories",
      //   image: logoSvg,
      //   description: "Versatile logo item",
      //   rating: { rate: 4.8, count: 30 }
      // }
    ];
    setProducts(productsData);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
