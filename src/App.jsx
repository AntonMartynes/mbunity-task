import React, { useState }  from 'react';

import { ContactPage } from './components/ContactUs/ContactPage/ContactPage';
import { Footer } from './components/Footer/Footer';
import { BurgerMenu } from './components/Header/BurgerMenu/BurgerMenu';
import { Header } from './components/Header/Header';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="App">
    <Header openMenu={openMenu} />
    <BurgerMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    <ContactPage />
    <Footer />
  </div>
  );
}

export default App;
