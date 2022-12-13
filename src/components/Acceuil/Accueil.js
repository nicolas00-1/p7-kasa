import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div className="Acceuil">
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </div>
  )
}