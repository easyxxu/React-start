import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import New from "./routes/New";
import Category from "./routes/Category";
import Documentary from "./routes/Documentary";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/new">
          <New />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/category/documentary">
          <Documentary />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
