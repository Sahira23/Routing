import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.css';
import Contact from "./Contact";
import Projects from "./Projects";
import Menu from "./components/Menu"

export default class App extends React.Component {
       render() {
              return (
                     <div>
                            <Menu />
                            <Routes>
                                   <Route path="/about" component={About} />
                                   <Route path="/contact" component={Contact} />
                                   <Route path="/projecs" component={Projects} />
                            </Routes>
                     </div>
              );
       }
}
