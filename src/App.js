import { Switch, Route } from "react-router-dom";
import "./App.scss";
import CommentBox from "./components/Comments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
          {/* <Home /> */}
          <CommentBox/>
        </Route>
      </Switch>
  

     
    </>
  );
}

export default App;
