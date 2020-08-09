import * as React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Sample } from './components/About';
import { Hero } from './components/Hero/Hero';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Contact } from './components/Contact/Contact';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          {/* 以下にRails*Ajax通信をする */}
          <Route exact path='/sample' component={Sample} />
          {/* <Route component={NotFound} /> */}
        </Switch>
        <Hero />
        <News />
        <Music />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
