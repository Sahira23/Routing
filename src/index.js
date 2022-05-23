import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Switch } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import Projects from './Projects';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contactinfo">
            <ContactInfo />
          </Route>
        </Switch>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
