import './App.css';
import Started from './Components/Elements/Started';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Talk from './Components/Elements/Talk';
import Empowered from './Components/Elements/Empowered';
import Financial from './Components/Elements/Financial';
import Findmore from './Components/Elements/Findmore';
import Developers from './Components/Elements/Developers';
import Enterprises from './Components/Elements/Enterprises';
import Designed from './Components/Elements/Designed';
import Finance from './Components/Elements/Finance';
import Explore from './Components/Elements/Explore';
import Footer2 from './Components/Layouts/Footer2';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({duration:500});



function App() {
  return (
    <>
      <Header/>
     <Started/>
     <Talk/>
     <Empowered/>
     <Financial/>
     <Explore/>
     <Findmore/>
     <Developers/>
     <Enterprises/>
     <Designed/>
     <Finance/>
     <Footer/>
     <Footer2/>
    </>
  );
}

export default App;
