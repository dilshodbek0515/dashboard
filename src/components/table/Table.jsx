import './Table.scss'
import { SiAdobexd } from 'react-icons/si'
import { IoMdMore } from 'react-icons/io'
import {
  FaCheckCircle,
  FaBell,
  FaCss3Alt,
  FaShoppingCart,
  FaWallet
} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Table = () => {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => setProduct(res.data.products))
      .catch(err => console.log(err))
      .finally()
  }, [])
  return (
    <div className='table'>
      <div className='table_left'>
        <div className='w-full flex justify-between'>
          <div className='table_right_parent'>
            <h3>Projects</h3>
            <span>
              <FaCheckCircle className='checkbox' /> 30 done this month
            </span>
          </div>
          <IoMdMore className='text-4xl text-gray-200' />
        </div>
        {product?.slice(0, 6)?.map(pro => (
          <div>
            <div
              key={pro.id}
              className='w-full flex justify-between items-center'
            >
              <div className='flex gap-5 items-center'>
                <img
                  className='w-10 h-10 bg-gray-500 rounded-sm'
                  src={pro.images}
                  alt=''
                />
                <h3 className='text-lg text-gray-200'>{pro.title}</h3>
              </div>
              <img
                className='w-10 h-10 bg-gray-500 rounded-sm'
                src={pro.images}
                alt=''
              />
              <p className='text-white text-lg font-semibold'>$ {pro.price}</p>
              <p className='text-white text-lg font-semibold'>{pro.stock} %</p>
            </div>
            <hr className='bg-gray-900 mt-3'/>
          </div>
        ))}
      </div>

      <div className='table_right'>
        <div className='table_right_parent'>
          <h3>Orders overview</h3>
          <span>
            <FaCheckCircle className='checkbox' /> +30% this month
          </span>
        </div>
        <div className='table_right_child'>
          <FaBell className='bell' />
          <div className='table_child_title_wrapper'>
            <p>$2400, Design changes</p>
            <span>22 DEC 7:20 PM</span>
          </div>
        </div>
        <div className='table_right_child'>
          <FaCss3Alt className='bell2' />
          <div className='table_child_title_wrapper'>
            <p>New order #4219423</p>
            <span>21 DEC 11:21 PM</span>
          </div>
        </div>
        <div className='table_right_child'>
          <FaShoppingCart className='bell' />
          <div className='table_child_title_wrapper'>
            <p>Server Payments for April</p>
            <span>21 DEC 9:28 PM</span>
          </div>
        </div>
        <div className='table_right_child'>
          <FaWallet className='bell3' />
          <div className='table_child_title_wrapper'>
            <p>New card added for order #3210145</p>
            <span>20 DEC 3:52 PM</span>
          </div>
        </div>
        <div className='table_right_child'>
          <FaBell className='bell' />
          <div className='table_child_title_wrapper'>
            <p>Unlock packages for Development</p>
            <span>19 DEC 11:35 PM</span>
          </div>
        </div>
        <div className='table_right_child'>
          <SiAdobexd className='bell4' />
          <div className='table_child_title_wrapper'>
            <p>New order #9851258</p>
            <span>18 DEC 4:41 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
