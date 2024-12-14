import './Sidebar.scss'
import { IoHome } from 'react-icons/io5'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IoIosStats } from 'react-icons/io'
import {
  IoCard,
  IoBuild,
  IoPerson,
  IoDocumentSharp,
  IoRocket
} from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <h2 className='logo'>VISION UI FREE</h2>
        <hr />
        <div className='sidebar_item'>
          <div className='sidebar_icon_div'>
            <IoHome className='sidebar_icon' />
          </div>
          <span>Dashboard</span>
        </div>
        <div className='sidebar_item'>
          <div className='sidebar_icon_div'>
            <IoIosStats className='sidebar_icon' />
          </div>
          <span>Tables</span>
        </div>
        <div className='sidebar_item'>
          <div className='sidebar_icon_div'>
            <IoCard className='sidebar_icon' />
          </div>
          <span>Billing</span>
        </div>
        <div className='sidebar_item'>
          <div className='sidebar_icon_div'>
            <IoBuild className='sidebar_icon' />
          </div>
          <span>RTL</span>
        </div>
        <h3>ACCOUNT PAGES</h3>
        <div className='sidebar_item'>
          <div className='sidebar_icon_div'>
            <IoPerson className='sidebar_icon' />
          </div>
          <span>Profile</span>
        </div>
        <div className='sidebar_item'>
          <div className='sidebar_icon_div'>
            <IoDocumentSharp className='sidebar_icon' />
          </div>
          <span>Sign In</span>
        </div>
        <div className='sidebar_item'>
          <div className='sidebar_icon_div'>
            <IoRocket className='sidebar_icon' />
          </div>
          <span>Sign Up</span>
        </div>
      </div>
      <div className='sidebar_bottom'>
        <div className='question_wrapper'>
          <BsFillQuestionCircleFill className='sidebar_bottom_icon' />
        </div>
        <p className='sidebar_bottom_title'>Need help?</p>
        <p className='sidebar_bottom_desc'>Please check our docs</p>
        <button className='sidebar_btn'>DOCUMENTATION</button>
      </div>
    </div>
  )
}

export default Sidebar
