import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarContainer from "./components/layaut/Navbar/NavbarContainer";
import Footer from "./components/layaut/Footer";

import LandingPage from "./components/layaut/LandingPage";
import LoginContainer from "./components/login/LoginContainer";
import RegisterContainer from "./components/Register/RegisterContainer";

function App() {
  const Login = () => <LoginContainer />;
  const Landing = () => <LandingPage />;
  const Register = () => <RegisterContainer />;

  return (
    <>
      <Router>
        <div>
      <NavbarContainer/>
      
      <Route exact path="/" component={Landing}  />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} /> 

      <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
