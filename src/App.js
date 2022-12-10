
import EventsLanding from "./components/events/EventsLanding";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Team from "./components/team/Team";


function App() {
  return (
    <div className="App">
      <Intro />
      <EventsLanding />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
