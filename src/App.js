import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { ContextProvider } from "./context/context";

const App = () => {
  return (
    <React.Fragment>
      <ContextProvider>
        <Header></Header>
        <Container>
          {/* creat 6 products using their props */}
          <Product
            id="ps4"
            title="ps4"
            image="assets/ps4.png"
            price="349.99$"
          />
          <Product
            id="ps5"
            title="ps5"
            image="assets/ps5.jpg"
            price="599.99$"
          />
          <Product
            id="horizon"
            title="Horizon disk for ps4"
            image="assets/Horizon.jpg"
            price="10.99$"
          />
          <Product
            id="detroit"
            title="Detroit disk for ps4"
            image="assets/Detroit.jpg"
            price="20.99$"
          />
          <Product
            id="gta v"
            title="grand theft auto disk for ps4"
            image="assets/GTAV.jpg"
            price="15.99$"
          />
        </Container>
      </ContextProvider>
      <Footer text="an exersise with react by saman"></Footer>
    </React.Fragment>
  );
};

export default App;
