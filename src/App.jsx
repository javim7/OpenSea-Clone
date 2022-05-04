/* eslint-disable import/extensions */
import React from 'react'
import './App.css'
import Nav from './Components/Nav/Nav.jsx'
import Banner from './Components/Banner/Banner.jsx'
import SmallBanner from './Components/Sbanner/Sbanner.jsx'

function App() {
  return (
    <div className="AppContainer">
      <Nav />
      <Banner />
      <SmallBanner />
    </div>
  )
}
export default App
