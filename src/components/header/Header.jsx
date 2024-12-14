import './Header.scss'
import { BsSearch } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { BsBellFill } from 'react-icons/bs'
const Header = () => {
  return (
    <header className='header'>
      <div className='header_left'>
        <div className='navbar_top'>
          <span>Pages /</span>
          <p>Dashboard</p>
        </div>
        <h3>Dashboard</h3>
      </div>
      <div className='header_right'>
        <form className='navbar_forma'>
          <BsSearch className='navbar_search_icon' />
          <input type='text' placeholder='Type here...' />
        </form>
        <p className='user_wrapper'>
          <FaUser /> Sign In
        </p>
        <IoMdSettings className='settings' />
        <BsBellFill className='settings' />
      </div>
    </header>
  )
}

export default Header
