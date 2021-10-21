import { Link } from 'react-router-dom';
import footerLogo from '../assets/shared/desktop/footer-logo.svg';
import fb from '../assets/shared/desktop/icon-facebook.svg'
import ig from '../assets/shared/desktop/icon-instagram.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'

function Footer () {
  return (
    <div className="footer bg-darkGray flex flex-col justify-center items-center text-center gap-12 p-14">
      <div className="content flex flex-col justify-between gap-12">
        <div className="logo">
          <img src={footerLogo} alt="logo" className="h-6"/>
        </div>
        <ul className="links text-gray uppercase flex flex-col justify-between gap-6">
          <Link to='/'>Home</Link>
          <Link to='/about'>About us</Link>
          <Link to='/subscribe'>Create your plan</Link>
        </ul>
      </div>
      <div className="sm-icons flex gap-6" >
        <img src={fb} alt="facebook icon" />
        <img src={ig} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" />
      </div>
    </div>
  )
}

export default Footer;
