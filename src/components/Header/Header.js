import './Header.scss';
import logo from '../../assets/logo.svg';

export function Header() {
    return (
      <header className='headercontainer'>
        <div className='leftside'>
          <img src={logo} className='logo'></img>
          <h1 className='header'>Video</h1>
        </div>
        <div className='rightside'>
          <p>Log In</p>
        </div>
        
      </header>
    )
  }

export default Header;