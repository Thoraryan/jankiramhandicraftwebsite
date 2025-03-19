import React from 'react'
import Banner from '../Banner/Banner'
import TopProducts from '../TopProducts/TopProducts'
import ExploreCategories from '../ExploreCategories/ExploreCategories'
import Requirements from '../Requirements/Requirements'
import Collections from '../Collections/Collections'
import OurWebsite from '../OurWebsite/OurWebsite'

const Home = () => {
  return (
    <div>
      <div className="mb-md-5 mb-4">
      <Banner />
      </div>
      <div className="vh-100">
        <ExploreCategories />
      </div>
      <div className="mb-md-5 mb-4">
        <TopProducts />
      </div>
      <div className="mb-md-5 mb-4">
        <Collections />
      </div>
      <div className="vh-100 pt-4">
        <OurWebsite />
      </div>
        <Requirements />
    </div>
  )
}

export default Home
