import Link from 'next/link';

const NavbarItem = (props) => (
  <Link href={props.url}>
    <a className="navbar-item">
      {props.text}
      {props.children}
    </a>
  </Link>
);

const BurgerBar = (props) => (
  <a
    onClick={props.onClick} 
    className="navbar-burger"
    role="button"
    aria-label="menu"
    aria-expanded={props.isOpen}>
    <span aria-hidden="true"></span> 
    <span aria-hidden="true"></span> 
    <span aria-hidden="true"></span> 
  </a>
);

class Navbar extends React.Component {
  state = {
    isOpen: false
  }

  render() {
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

          <BurgerBar 
            onClick={() => {this.setState({ isOpen: !this.state.isOpen })}}
            isOpen={this.state.isOpen}/>
        </div>

        <div className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
          <NavbarItem text="home" url="#" />
          <NavbarItem text="instruments" url="#" />
          <NavbarItem text="contact" url="#" />
        </div>
      </nav>
    );
  }
}

export default Navbar;