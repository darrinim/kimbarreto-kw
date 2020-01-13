import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header/Header';
import LandingHero from '../components/LandingHero/LandingHero';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function Routes() {
  return (
    <div>
      <Header />
        <Switch>

            <Route exact path='/' render={() => (
              <>
                <LandingHero />
                <About />
              </>
            )} />

            <Route exact path='/about' render={() => (
              <>
                <About />
              </>
            )} />

        </Switch>
      <Contact />
      <Footer />
    </div>
  )
}

export default Routes;
