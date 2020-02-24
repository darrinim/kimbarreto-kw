import React from 'react';
import './About.css'

const About = () => {

  return(
    <div className="aboutContainer">

      <div className="aboutInnerWrapMob">
        <h2>About Kimberly Barreto</h2>
        <img alt="realtor" className="aboutImg" src="https://res.cloudinary.com/darrin-im/image/upload/v1580403554/smaller_updated_apubis.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sapien, congue cursus. Risus, ipsum aliquam enim nunc ullamcorper mattis. Fermentum, malesuada habitasse est, a dignissim. Quisque accumsan aliquam nunc risus, proin metus, nunc. Malesuada nisi, nullam etiam curabitur vel. Porta ac commodo quis etiam. Euismod congue nisl placerat risus, amet vel nulla vitae vel. Curabitur feugiat sed ipsum amet commodo, donec convallis amet arcu. Laoreet urna in morbi mattis. Velit sodales massa mi purus est, nec ipsum ullamcorper lectus. Est sit nibh in eget sit morbi feugiat. Diam sit nulla orci, velit nunc cursus porta vel. Morbi luctus commodo malesuada sed sit egestas morbi. Risus sollicitudin dignissim vulputate dignissim venenatis varius. Lobortis ornare pulvinar amet quisque convallis ut.</p>
      </div>

      <div className="aboutInnerWrapDesk">
        <div className="aboutInnerWrapDeskL">
          <img alt="realtor" className="aboutImg" src="https://res.cloudinary.com/darrin-im/image/upload/v1580403554/smaller_updated_apubis.png" />
        </div>
        <div className="aboutInnerWrapDeskR">
          <h2>About Kimberly Barreto</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper sapien, congue cursus. Risus, ipsum aliquam enim nunc ullamcorper mattis. Fermentum, malesuada habitasse est, a dignissim. Quisque accumsan aliquam nunc risus, proin metus, nunc. Malesuada nisi, nullam etiam curabitur vel. Porta ac commodo quis etiam. Euismod congue nisl placerat risus, amet vel nulla vitae vel. Curabitur feugiat sed ipsum amet commodo, donec convallis amet arcu. Laoreet urna in morbi mattis. Velit sodales massa mi purus est, nec ipsum ullamcorper lectus. Est sit nibh in eget sit morbi feugiat. Diam sit nulla orci, velit nunc cursus porta vel. Morbi luctus commodo malesuada sed sit egestas morbi. Risus sollicitudin dignissim vulputate dignissim venenatis varius. Lobortis ornare pulvinar amet quisque convallis ut.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
