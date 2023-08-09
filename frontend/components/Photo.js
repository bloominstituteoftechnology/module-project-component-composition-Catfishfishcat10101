import React, { Component } from 'react';

class Photo extends Component {
  state = {
    photoData: null,
  };

  componentDidMount() {
    const date = new Date().toISOString().slice(0, 10);
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ photoData: data }));
  }

  render() {
    const { photoData } = this.state;

    if (!photoData) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <img src={photoData.url} alt={photoData.title} />
        <p>{photoData.explanation}</p>
      </div>
    );
  }
}
