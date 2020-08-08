import React from 'react';
import { Header } from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Sample } from "./components/About";
import { Hero } from "./components/Hero/Hero"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {/* 以下にRails*Ajax通信をする */}
          <Route exact path="/sample" component={Sample} />
          {/* <Route component={NotFound} /> */}
        </Switch>
        <Hero />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
