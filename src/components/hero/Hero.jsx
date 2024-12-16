import './Hero.scss'
import { FaArrowRight } from 'react-icons/fa6'
// 3
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart'
const uData = [300, 150, 200, 300, 100, 300, 350, 150, 300]
const xLabels = ['Yan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Avg', 'Sen']
// 4
import { BarChart } from '@mui/x-charts/BarChart'

// 5
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState
} from '@mui/x-charts/Gauge'

function GaugePointer () {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState()

  if (valueAngle === null) {
    // No value to display
    return null
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle)
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill='red' />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke='red'
        strokeWidth={3}
      />
    </g>
  )
}
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
        <div className='hero_top_card2 relative'>
          <h4 className='text-white text-2xl'>Satisfaction Rate</h4>
          <p className='text-gray-400 text-lg'>From all projects</p>
          <GaugeContainer
            startAngle={-110}
            endAngle={110}
            value={80}
            width={200}
          >
            <GaugeReferenceArc />
            <GaugeValueArc />
            <GaugePointer />
          </GaugeContainer>
          <div className='shadof'>
            <span className='text-3xl'>95%</span>
            Based on likes
          </div>
        </div>
        <div className='hero_top_card3'>
          <div className='w-[50%] flex flex-col gap-2'>
            <div className='shadof_card'>
              Invited
              <span className='text-white text-2xl'>145 people</span>
            </div>
            <div className='shadof_card'>
              Bonus
              <span className='text-white text-2xl'>1,465</span>
            </div>
          </div>
          <GaugeContainer
            startAngle={-110}
            endAngle={110}
            value={70}
            width={200}
          >
            <GaugeReferenceArc />
            <GaugeValueArc />
            <GaugePointer />
          </GaugeContainer>
        </div>
      </div>

      <div className='hero_bottom'>
        <div className='hero_bottom1'>
          <LineChart
            series={[
              {
                data: uData,
                label: 'uv',
                area: true,
                showMark: false,
                color: '#0075FF'
              }
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                display: 'block',
                color: 'blue',
                stroke: 'blue',
                fill: 'transparent'
              }
            }}
          />
        </div>

        <div className='hero_bottom2'>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['Users', 'Clicks', 'Sales'] }]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] }
            ]}
            barLabel='value'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
