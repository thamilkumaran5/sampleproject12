import React from 'react'
import Hero from '../Hero/Hero.jsx'
import Popular from '../Popular/Popular.jsx'
import Offers from '../Offers/Offers.jsx'
import NewCollections from '../NewCollections/NewCollections.jsx'
import NewsLetter from '../NewsLetter/NewsLetter.jsx'
export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop