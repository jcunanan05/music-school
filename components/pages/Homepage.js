import Section from '../Section';
import Box from '../Box';
import { Fragment } from 'react';

const Homepage = () => (
  <Fragment>
    <Section className="who-we-are">
      <h2 className="title">Who we are</h2>

      <h3 className="intro__heading title is-4">Discover the Music Within</h3>
      <p className="intro__description">Our goal in Weston New-Music School is not only to help you understand music, but bring out your innate creativity. It doesn’t matter the age; long as you can understand and accept instruction, we’ll be able to harness that unique style that you already have. It’s never too late to learn music.</p>

      <div className="columns">
        <div className="column">
          <Box
            title="1:1 Teaching" 
            content="Teaching the students 1-on-1 means that learning is ensured."  />
        </div>

        <div className="column">
          <Box
            title="Adult and Kids" 
            content="Adults are welcome! We are prepared to teach ages 6 and above." />
        </div>

        <div className="column">
          <Box
            title="Modern" 
            content="We use a tech savvy approach in teaching, modern tools like apps are used to enhance the learning experience." />
        </div>
      </div>
    </Section>

    <Section>
      <h2 className="title">Contact</h2>

      <p>
        <em>
          Weston New Music School<br />
          2125 Weston Road,<br />
          York, ON M9N 1X8<br />
        </em>
      </p>
    </Section>
  </Fragment>
);

export default Homepage;