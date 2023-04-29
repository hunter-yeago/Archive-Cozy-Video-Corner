
import './Header.scss';
import logo from '../../assets/logo.svg';

export function Header() {
    return (
      <header className='headercontainer'>
        <img src={logo} height="45px" width="45px"></img>
        <h1 className='header'>Video</h1>
      </header>
    )
  }

export default Header;