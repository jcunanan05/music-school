import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';

const App = (props) => {  
  return (
    <React.Fragment>
      <Navbar />

      <main className="main">
        <Banner />
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;