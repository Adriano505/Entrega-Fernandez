const products = [
  // Sección Hombres
  {
    id: 1,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_samba.jpg",
    name: "Zapatillas Samba Og de Hombre - Blanco",
    price: 6290,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  {
    id: 2,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_campus.jpg",
    name: "Zapatillas Campus 00S de Hombre",
    price: 6490,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  {
    id: 3,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_air_jordan.jpg",
    name: "Zapatillas Air Jordan 4 Retro de Hombre - Blanco",
    price: 12990,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  {
    id: 4,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_lv8.jpg",
    name: "Zapatillas Nike Air Force 1 '07 Lv8 de Hombre - Multicolor",
    price: 7990,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  { 
    id: 30,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_legacy_low.jpg",
    name: "Zapatillas Air Jordan Legacy 312 Low de Hombre - Blanco",
    price: 9690,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  { id: 31,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_sambo_og.jpg",
    name: "Zapatillas Samba Og de Hombre - Blanco",
    price: 6290,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  { id: 32,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_air_jordan_4.jpg",
    name: "Zapatillas Air Jordan 4 Craft Olive de Hombre - Multicolor",
    price: 12990,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  { id: 33,
    image: "/Entrega-Fernandez/assets/img/championes/zapa_gazelle.jpg",
    name: "GAZELLE 85 - Multicolor",
    price: 5990,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  { id: 34,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_forum_low.jpg",
    name: "Zapatillas Forum Low Cl de Hombre - Blanco",
    price: 5990,
    category: "men",
    description: "Zapatillas clásicas con un toque moderno, perfectas para un estilo urbano.",
    characteristics: {
      color: "Blanco",
      gender: "Hombre",
      type: "Bajas",
    },
  },
  

  // Sección Mujeres
  { 
    id: 35,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_samba_mujer.jpg",
    name: "Zapatillas Samba Og de Mujer - Blanco",
    price: 6290,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },
  { 
    id: 36,
    image: "/Entrega-Fernandez/assets/img/championes/palermo_lamoda.jpg",
    name: "PALERMO LAMODA WNS - Blanco",
    price: 5390,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },
  { 
    id: 37,
    image: "/Entrega-Fernandez/assets/img/championes/gazelle_bold.jpg",
    name: "GAZELLE BOLD W - Blanco",
    price: 6490,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },
  { 
    id: 38,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_dunk_low_mujer.jpg",
    name: "Zapatillas Nike Dunk Low de Mujer - Blanco",
    price: 6990,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },
  { 
    id: 39,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_airmax_furyosa.jpg",
    name: "Zapatillas Nike Air Max Furyosa Nrg de Mujer - Blanco",
    price: 9990,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },
  { 
    id: 40,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_low_jermu.jpg",
    name: "Zapatillas Air Jordan 1 Low Se de Mujer - Negro",
    price: 7990,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },
  { 
    id: 41,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_bold_mujer.jpg",
    name: "Zapatillas Gazelle Bold de Mujer - Multicolor",
    price: 6490,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },
  { 
    id: 42,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_gaz_bold_mujer.jpg",
    name: "Zapatillas Gazelle Bold de Mujer - Multicolor",
    price: 6490,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },
  { 
    id: 43,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_low_dunk_jermu.jpg",
    name: "Zapatillas Nike Dunk Low Se de Mujer - Multicolor",
    price: 6990,
    category: "women",
    description: "Diseño clásico reinventado para ofrecer comodidad y estilo.",
    characteristics: {
      color: "Blanco",
      gender: "Mujer",
      type: "Bajas",
    },
  },

  // Sección Niños
  {
    id: 20,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_breaknet_kids.jpg",
    name: "Championes Breaknet 2.0",
    price: 2389,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
  {
    id: 21,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_start_kid.jpg",
    name: "Championes Break Start El CF",
    price: 2689,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
  {
    id: 22,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_mickey_kid.jpg",
    name: "Championes Grand Court X Disney Mickey And Friends",
    price: 2490,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
  {
    id: 23,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_breacknet_kid.jpg",
    name: "Championes Brecknet 2.0",
    price: 2789,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
  {
    id: 24,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_disney_advantage_kid.jpg",
    name: "Championes X Disney Mickey And Friends Advantage",
    price: 2290,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
  {
    id: 25,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_runfalcon_kid.jpg",
    name: "Championes Runfalcon 5",
    price: 2789,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
  {
    id: 26,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_hoops_life_kid.jpg",
    name: "Championes Hoops Lifestyle",
    price: 2690,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
  {
    id: 27,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_lion_king_kid.jpg",
    name: "Championes Disney X Lion King Breaknet",
    price: 3290,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
  {
    id: 28,
    image: "/Entrega-Fernandez/assets/img/championes/zapas_tensaur.jpg",
    name: "Championes Tensaur",
    price: 2389,
    category: "kids",
    description: "Zapatillas cómodas y resistentes para los más pequeños.",
    characteristics: {
      color: "Blanco",
      gender: "Unisex",
      type: "Bajas",
    },
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === parseInt(id, 10)));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 500);
  });
};
