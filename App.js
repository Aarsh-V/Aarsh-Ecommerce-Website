import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "#6a0dad",  // Dark violet for headings
      text: "rgba(105, 55, 155, 0.8)",  // Medium violet for text
      white: "#FFFFFF",  // Pure white
      black: "#000000",  // Pure black
      helper: "#dda0dd",  // Plum for accents

      bg: "#f5eafc",  // Light violet for background
      footer_bg: "#4b0082",  // Indigo for the footer
      btn: "#9400d3",  // Dark violet for buttons
      border: "rgba(105, 55, 155, 0.5)",  // Medium violet with opacity for borders
      hr: "#dda0dd",  // Plum for horizontal rules
      gradient: "linear-gradient(0deg, #dda0dd 0%, #9400d3 100%)",  // Gradient from Plum to Dark Violet
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(75, 0, 130, 0.15) 0px 0px 0px 1px;",  // Black shadow
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",  // Slightly stronger Black shadow
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
    animations: {
      button: "transform 0.2s ease-in-out",  // Example animation for buttons
      hover: "background-color 0.3s ease",  // Example hover animation
    },
  };





  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;


