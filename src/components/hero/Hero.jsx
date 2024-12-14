import './Hero.scss'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero_top'>
        <div className='hero_top_card1'>
          <div className='meduza'>
            <p className='text-lg text-[#A0AEC0]'>Welcome back,</p>
            <p className='text-4xl text-[#FFFFFF] mt-2'>Mark Johnson</p>
            <p className='text-lg text-[#A0AEC0] w-52 mt-3'>
              Glad to see you again! Ask me anything.
            </p>
            <button className='text-lg text-[#FFFFFF] flex gap-3 items-center mt-20 hover:text-white'>
              Tap to record <FaArrowRight />
            </button>
          </div>
        </div>
        <div className='hero_top_card2'></div>
        <div className='hero_top_card3'></div>
      </div>
      <div className='hero_bottom'>
        <div className='hero_bottom1'></div>
        <div className='hero_bottom2'></div>
      </div>
    </div>
  )
}

export default Hero
