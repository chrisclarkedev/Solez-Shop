import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from './components/Section';
import Header from './components/Header';
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    );
  }
}

export default App;
