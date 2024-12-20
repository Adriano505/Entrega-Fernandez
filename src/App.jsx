import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ExtraCards from "./components/ExtraCards/ExtraCards";
import MenCategory from "./components/MenCategory/MenCategory"; // Importa la sección de hombres
import WomenCategory from "./components/WomenCategory/WomenCategory"; // Importa la sección de mujeres
import KidsCategory from "./components/KidsCategory/KidsCategory"; // Importa la sección de niños
import ProductDetail from "./components/ProductDetail/ProductDetail"; // Nueva ruta para los detalles de productos

const bannerImageTop = "/Entrega-Fernandez/assets/img/banner/banner.jpg";
const bannerImageBottom = "/Entrega-Fernandez/assets/img/banner/footer1.jpg";

const App = () => {
  return (
    <BrowserRouter basename="/Entrega-Fernandez">
      <NavBar />
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Banner image={bannerImageTop} />
              <ItemListContainer greeting="La moda de hoy en día" />
              <Banner image={bannerImageBottom} />
              <ExtraCards />
            </>
          }
        />

        {/* Página por categoría */}
        <Route
          path="/category/:categoryId"
          element={
            <>
              <Banner image={bannerImageTop} />
              <ItemListContainer greeting="Filtrando por categoría" />
              <Banner image={bannerImageBottom} />
            </>
          }
        />

        {/* Sección Hombres */}
        <Route path="/category/men" element={<MenCategory />} />

        {/* Sección Mujeres */}
        <Route path="/category/women" element={<WomenCategory />} />

        {/* Sección Niños */}
        <Route path="/category/kids" element={<KidsCategory />} />

        {/* Página por ID */}
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
