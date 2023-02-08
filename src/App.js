import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AllTheBooks from "./components/AllTheBooks";
import BookSelector from "./components/BooksSelector";
import MyFooter from "./components/MyFooter";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome nome="EpiBooks" subName="The Best Books Ever!!!" />
      <BookSelector />

      <AllTheBooks />

      <MyFooter />
    </>
  );
}

export default App;
