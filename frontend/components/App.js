import React, { Component } from 'react';
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import { render } from 'react-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  state = {
    date: new Date(),
    photo: null,
  };
  
  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target.elements.date.value; 
    this.setState({ date: dateFromInput });
  };

  render() {
    const { photo } = this.state;

    return (
      <div>
        <Header />
        <h1>NASA's Astronomy Picture Of the Day</h1>
      
        <DateInput changeDate={this.changeDate} />
        <Photo photoData={photoData} />     
      <Footer />
    </div>
  );
 }
}
export default App;
