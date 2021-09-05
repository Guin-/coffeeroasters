import {NavLink} from 'react-router-dom';

function Navigation () {
  return (
    <ul>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About us</NavLink>
      <NavLink to='/subscribe'>Create your plan</NavLink>
    </ul>
  )
}

export default Navigation;
