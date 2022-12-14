
import EventsLanding from "./components/events/EventsLanding";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Team from "./components/team/Team";
import PastEvents from './components/events/PastEvents'
import Queries from "./components/queries/Queries";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">

      <Intro />
      </div>
      <div id="events">

      <EventsLanding />
      </div>
      <div id="pastev">

      <PastEvents/>
      </div>
      <div id="team">

      <Team />
      </div>
      <div id="faq">

      <FAQ />
      </div>
      <div id="queries">

      <Queries />
      </div>
      <Footer />
    </div>
  );
}

export default App;
