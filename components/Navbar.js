const NavbarItem = (props) => (
  <a 
    href={props.url} 
    className="navbar-item">
    {props.text}
    {props.children}
  </a>
);

const BurgerBar = () => (
  <a 
    className="navbar-burger"
    role="button"
    aria-label="menu"
    aria-expanded="false">
    <span aria-hidden="true"></span> 
    <span aria-hidden="true"></span> 
    <span aria-hidden="true"></span> 
  </a>
);

const Navbar = (props) => {

  return (
    <nav 
      className="navbar is-primary" 
      role="navigation" 
      aria-label="main navigation">
      <div className="navbar-brand">
        <NavbarItem url="">
          <p className="navbar-brand__title title">
            BRAND
          </p>
        </NavbarItem>

        <BurgerBar />
      </div>

      <div className="navbar-menu">
        <NavbarItem text="home" url="#" />
        <NavbarItem text="instruments" url="#" />
        <NavbarItem text="contact" url="#" />
      </div>
    </nav>
  );
}

export default Navbar;