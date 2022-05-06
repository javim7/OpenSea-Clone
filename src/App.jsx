/* eslint-disable import/extensions */
import React from 'react'
import './App.css'
import Nav from './Components/Nav/Nav.jsx'
import Banner from './Components/Banner/Banner.jsx'
import SmallBanner from './Components/Sbanner/Sbanner.jsx'
import Drops from './Components/Drops/Drops.jsx'
import Collections from './Components/Collections/Collections.jsx'
import Trending from './Components/Trending/Trending.jsx'
import Create from './Components/Create/Create.jsx'
import Resources from './Components/Resources/Resources.jsx'

function App() {
  return (
    <div className="AppContainer">
      <Nav />
      <Banner />
      <SmallBanner />
      <Drops />
      <Collections />
      <Trending />
      <Create />
      <Resources />
    </div>
  )
}
export default App
