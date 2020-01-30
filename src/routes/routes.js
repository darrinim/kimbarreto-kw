import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import LandingHero from '../components/LandingHero/LandingHero';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ClientTestimonials from '../components/ClientTestimonials/ClientTestimonials';
import Faq from '../components/FAQ/Faq';
import Feed from '../components/Feed/Feed';

function Routes() {
  return (
    <div>
      <Header/>
        <Switch>

            <Route exact path='/' render={() => (
              <>
                <LandingHero/>
                <About />
                <ClientTestimonials />
                <Feed />
              </>
            )} />

            <Route exact path='/about' render={() => (
              <>
                <About />
              </>
            )} />

            <Route exact path='/FAQ' render={() => (
              <>
                <Faq />
              </>
            )} />

        </Switch>
      <Contact />
      <Footer />
    </div>
  )
}

export default Routes;
