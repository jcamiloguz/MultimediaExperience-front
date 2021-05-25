import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { GlobalState } from "./contexts/GlobalState";
import { useState } from "react";
import Video from "./components/Video/index";
import "./App.scss";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
function App() {
  const [Global, setGobal] = useState({
    id: 0,
    moment: 0,
  });
  return (
    <>
      <GlobalState.Provider value={{ Global, setGobal }}>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Video} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </GlobalState.Provider>
    </>
  );
}

export default App;
