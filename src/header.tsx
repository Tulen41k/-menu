import {Link} from "react-router-dom";

function Header() {
  <div className='header'>
      <Link to='/' className='home'>На домашнюю страницу</Link>
      <Link to='/info' className='info'>Информация о создателе</Link>
  </div>
}

export default Header;