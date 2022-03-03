import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Components1 from "./Components/components1/Components1";
import Components2 from "./Components/Components2/Components2";
import Components3 from "./Components/Components3/Components3";
import Components4 from "./Components/Components4/Components4";
import Components5 from "./Components/Components5/Components5";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <Components1></Components1>
      <Components2></Components2>
      <Components3></Components3>
      <Components4></Components4>

      <Components5></Components5>
      <Footer></Footer>
    </div>
  );
}

export default App;
