import './Money.scss'
import { IoWallet, IoDocumentText } from 'react-icons/io5'
import { FaGlobe } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
const Money = () => {
  return (
    <div className='money_cllection'>
      <div className='money_card'>
        <div className='money_card_left'>
          <p className='money_card_title'>Today’s Money</p>
          <p className='money_card_title2'>
            $53,000 <span>+55%</span>
          </p>
        </div>
        <div className='money_card_right'>
          <IoWallet />
        </div>
      </div>

      <div className='money_card'>
        <div className='money_card_left'>
          <p className='money_card_title'>Today’s Users</p>
          <p className='money_card_title2'>
            2,300 <span>+5%</span>
          </p>
        </div>
        <div className='money_card_right'>
          <FaGlobe />
        </div>
      </div>

      <div className='money_card'>
        <div className='money_card_left'>
          <p className='money_card_title'>New Clients</p>
          <p className='money_card_title2'>
            +3,052 <span>+14%</span>
          </p>
        </div>
        <div className='money_card_right'>
          <IoDocumentText />
        </div>
      </div>

      <div className='money_card'>
        <div className='money_card_left'>
          <p className='money_card_title'>Total Sales</p>
          <p className='money_card_title2'>
            $173,000 <span>+8%</span>
          </p>
        </div>
        <div className='money_card_right'>
          <GrCart />
        </div>
      </div>
    </div>
  )
}

export default Money
