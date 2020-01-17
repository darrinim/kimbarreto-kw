import React from 'react';
import './Faq.css'
import Accordion from '../../components/Accordion/Accordion';

const Faq = () => {

  return(
    <div>
      <Accordion
        title="How long have you been working as a real estate agent?"
        content="this is content a"
      />
      <Accordion
        title="Which neighborhoods do you primarily work in?"
        content="this is content b"
      />
      <Accordion
        title="What are your favorite things about working in real estate?"
        content="this is content c"
      />
      <Accordion
        title="How often will you keep in touch with me and how often can I expect updates?"
        content="this is content d"
      />
      <Accordion
        title="Do you have a recommended vendors list?"
        content="this is content e"
      />
      <Accordion
        title="What would your clients say you excel at?"
        content="this is content f"
      />
      <Accordion
        title="What marketing tools will you use to help me?"
        content="this is content g"
      />
      <Accordion
        title="How quickly will you help me view a home that I want to see?"
        content="this is content h"
      />
    </div>
  )
}

export default Faq;
