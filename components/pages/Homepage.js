import Section from '../Section';
import Box from '../Box';
import { Fragment } from 'react';

const Homepage = () => (
  <Fragment>
    <Section className="who-we-are">
      <h2 className="title">Who we are</h2>

      <p>Weston New Music School is a school that is commited teach students from young kids to adults.</p>

      <div className="columns">
        <div className="column">
          <Box
            title="1:1 Teaching" 
            content="Teaching the students 1-on-1 means the student is focused and its needs are taken care of."  />
        </div>

        <div className="column">
          <Box
            title="Adult and Kids" 
            content="Adults are welcome!" />
        </div>

        <div className="column">
          <Box
            title="Modern" 
            content="In some subjects, modern tools like Apps are used to aid the student to learn more about the instrument." />
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