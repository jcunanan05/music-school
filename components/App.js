import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Content from './Content';

const App = (props) => {  
  return (
    <React.Fragment>
      <Navbar />

      <main className="main">
        <Banner />

        <Content>
          <h2 className="title">Contact</h2>

          <p>
            <em>
              Weston New Music School<br />
              2125 Weston Road,<br />
              York, ON M9N 1X8<br />
            </em>
          </p>
        </Content>
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;