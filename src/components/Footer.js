import { Link } from 'react-router-dom';

function Footer () {
  return (
    <div>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About us</Link>
        <Link to='/subscribe'>Create your plan</Link>
      </ul>
    </div>
  )
}

export default Footer;
