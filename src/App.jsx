import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ExtraCards from "./components/ExtraCards/ExtraCards";

const bannerImageTop = "../../assets/img/banners/banner.jpg";
const bannerImageBottom = "../../assets/img/banner/footer1.jpg";

const App = () => {
  return (
    <BrowserRouter basename="/Entrega-Fernandez">
      <NavBar />
      <Routes>
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

        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
