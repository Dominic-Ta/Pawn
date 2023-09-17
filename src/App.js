// import './App.css';
import Header from './components/header';
import WhoWeAre from './components/welcome';
import AboutUs from './components/about';
import Skills from './components/counts';
import Gallery from './components/gallery';
import Contactus from './components/contact';
import "./styles/landing.scss";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import { Name, 
        sections, 
        Aboutus, 
        facts, 
        topfacts, 
        inputs, 
        filteredItems, } from "./constant_vales/landing";

function App() {
  const divsections = [
    { id: 'about', className: 'About', component: <AboutUs About={Aboutus} facts={facts} topfacts={topfacts} /> },
    { id: 'counts', className: 'counts', component: <Skills inputs={inputs} /> },
    { id: 'gallery', className: 'Gallery', component:  <Gallery filteritems={filteredItems}/> },
    { id: 'contact', className: 'Contact', component:  <Contactus /> },
  ];
  return (
    <div className="App">
      {/* interesting. className="App-header" has a default length to it. */}
      <header id="header" className='fixed-top d-flex align-items-center'>  
        <Header sections={sections} title={Name} />
      </header>
      <WhoWeAre name={Name} background="" section={"About"}/>
      <main id="main">
        {divsections.map((section) => (
          <section key={section.id} id={section.id} className={section.className}>
            {section.component}
          </section>
        ))}
      </main>

    </div>
  );
}

export default App;
