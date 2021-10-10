import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import Menu from './pages/menu';
import Footer from './components/footer';
import Dropdown from './components/Dropdown';

import RouteChangeTracker from './components/RouteChangeTracker';
import ReactGA from 'react-ga';
ReactGA.initialize('289192892');

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <RouteChangeTracker />
      <Footer />
    </>
  );
}

export default App;