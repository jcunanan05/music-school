import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Homepage from './pages/Homepage';

const App = (props) => {  
  return (
    <React.Fragment>
      <Navbar />

      <main className="main">
        <Banner />

        <Homepage />
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;