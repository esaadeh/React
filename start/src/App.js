import React, { Component } from 'react';
import './App.css';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import ToDo from './components/ToDo';
// import ToDoItem from './components/ToDoItem';
import ContactCard from './components/ContactCard';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        {/* <MainContent /> */}
        {<ContactCard
          imgUrl="http://placekitten.com/300/200"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />}
        {<ContactCard
          imgUrl="http://placekitten.com/400/200"
          name="Mr. Two"
          phone="(212) 555-1235"
          email="mr.two@catnap.meow"
        />}
        {<ContactCard
          imgUrl="http://placekitten.com/400/300"
          name="Mr. Three"
          phone="(212) 555-1236"
          email="mr.three@catnap.meow"
        />}
        {<ContactCard
          imgUrl="http://placekitten.com/200/100"
          name="Mr. Four"
          phone="(212) 555-1237"
          email="mr.four@catnap.meow"
        />}
        {/* <ToDo /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
