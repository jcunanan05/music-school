import Navbar from './Navbar';
import Banner from './Banner';

const App = (props) => {  
  return (
    <React.Fragment>
      <Navbar />

      <main className="container">
        <Banner />
      </main>

      <footer className="footer">
        <div className="content has-text-centered">
          Copyright &copy; 2018 by <strong>Weston New Music School</strong>. All rights reserved.
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;