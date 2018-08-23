const Navbar = (props) => {

  return (
    <nav 
      className="navbar is-primary" 
      role="navigation" 
      aria-label="main navigation">
      <div className="navbar-brand">
        <a href="" className="navbar-item">
          <p className="navbar-brand__title title">BRAND</p>
        </a>

        <a 
          className="navbar-burger"
          role="button"
          aria-label="menu"
          aria-expanded="false">
          <span aria-hidden="true"></span> 
          <span aria-hidden="true"></span> 
          <span aria-hidden="true"></span> 
        </a>
      </div>
    </nav>
  );
}

export default Navbar;