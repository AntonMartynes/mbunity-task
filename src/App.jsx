import './App.scss';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className="App">
    <Header />

    <ContactUs />

    <Main />

    <Footer />
  </div>
  );
}

export default App;
