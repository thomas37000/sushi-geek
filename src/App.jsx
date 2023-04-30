import Header from './components/Header';
import Menu from './pages/Menu';
import Equipe from './pages/Equipe';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Reservation from './components/Reservation';


export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Reservation />
      <Equipe />
      <Contact />
      <Footer />
    </div>
  );
}
