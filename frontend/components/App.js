import React, { Component } from 'react';
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import { render } from 'react-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  render() {
  return (
    <div>
      <Header />
      <h1>NASA's Astronomy Picture Of the Day</h1>
      <DateInput />
      <Photo />
      <Footer />
    </div>
  );
 }
}

export default App;
