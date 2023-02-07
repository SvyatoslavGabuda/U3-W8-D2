import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome nome="EpiBooks" subName="The Best Books Ever!!!" />
      <AllTheBooks />

      <MyFooter />
    </>
  );
}

export default App;
