import "./App.css";
import { Route } from "react-router-dom";

import Choose from "./components/choose/Choose";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <h1>Passport Auth</h1>
      <Route path="/" exact component={Choose} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Dashboard} />
    </div>
  );
}

export default App;
