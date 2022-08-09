
import './App.css';
import Info from './Components/Info';
import About from "./Components/About";
import Intrest from "./Components/Intrest";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="content-section">
          <div>
            <div className="info-data">
              <Info />
            </div>
            <div className="whole-data">
              <div className="about-data">
                <About />
              </div>
              <div className="intrest-data">
                <Intrest />
              </div>
            </div>
            <div className="footer-data">
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
