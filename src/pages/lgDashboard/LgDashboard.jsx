import React from 'react'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Money from '@/components/money/Money'
import Table from '@/components/table/Table'

const LgDashboard = () => {
  return (
    <div className='w-full h-screen'>
      <Header />
      <Money />
      <Hero />
      <Table />
      <Footer />
    </div>
  )
}

export default LgDashboard
