/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import './Trending.css'
import { useState, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import unigrids from './unigrids.png'
import skullbot from './skullbot.jpg'
import skullbotL from './skullbotL.png'
import ninja from './ninja.jpg'
import karafuru from './karafuru.jpg'
import karafuruA from './karafurusgif.gif'
import invasion from './invasion.gif'
import henulu from './henulu.png'
import milady from './milady.jpg'
import bored from './bored.png'
import galactic from './galactic.jpg'
import galacticA from './galacticA.jpg'
import mont from './mont.jpg'
import monta from './monta.gif'
import boys from './boys.png'
import boysa from './boysa.gif'
// import punk from './punk.png'
// import punka from './punka.jpg'

function Trending() {
  const cards = [
    { title: 'HENI: Damien Hisrt -The...', by: 'HENI', description: 'The Empresses by Damien Hirst is a series of five glorious prints depicting carefully composed image...', src: henulu, logo: henulu },
    { title: 'Milady Maker', by: 'Milady-Sonora', description: 'Milady Maker is a collection of 10,000 generative pfpNFTs in a neochibi aesthetic inspired by stree...', src: milady, logo: milady },
    { title: 'Unigrids by Zeblocks', by: 'ArtBlocks_Admin', description: 'Unigrids by Zeblocks - Art Blocks Curated', src: unigrids, logo: unigrids },
    { title: 'Skullbot Biker Gang', by: 'Skullbots', description: 'Skullbot Biker Gang is a Couterculture Movement. A Rebellious Organization of 3,666...', src: skullbot, logo: skullbotL },
    { title: 'Stoned Ninjas', by: 'StonedNinjasSolana', description: '4200 Stoned Ninjas are conquering the Cannabis Industry with their utility token $KUNAI planning to...', src: ninja, logo: ninja },
    { title: 'Karafuru Gachapon', by: 'KarafuruDeployer', description: 'The Karafuru Gachapon is your acces ticket to 3D Kafarufu Collection. 1 Karafuru Gachapon = 1...', src: karafuru, logo: karafuruA },
    { title: 'The Invasion', by: 'TheInvasionSolana', description: 'Get ready for the invasion of the world! Preparations for destroying the boring world order has begu...', src: invasion, logo: invasion },
    { title: 'Bored Ape solana Club', by: 'Bored-Ape-Solana-Club', description: 'The intention was always set to be a community-driven Solana NFT project full of 6001 Bored Apes han...', src: bored, logo: bored },
    { title: 'Aetherian Deed', by: '223FCC', description: 'Explore the Aetherian Deed collection', src: galactic, logo: galacticA },
    { title: 'Duck Punkz Universe', by: 'DuckPunkzUniversola...', description: 'An exclusive collection of 4500 uniquely generated pixel Duck Punkz, waddling their way through the ...', src: mont, logo: monta },
    { title: 'BBRC - IVY BOYS', by: 'BBRC_Studios', description: 'IVY BOYS by Aaron Chang is the genesis project of BBRC Studios and the first of many creator collabora...', src: boys, logo: boysa },
  ]

  const [circulitos, setCirculitos] = useState({
    activeObject: null,
    objects: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }],
  })

  useEffect(() => {
    setCirculitos({ ...circulitos, activeObject: circulitos.objects[0] })
  }, [])

  const [contadorPx, setContadorPx] = useState(-1242)

  const [estilo, setEstilo] = useState({
    width: '4554px',
    opacity: '1',
    transform: 'translate3d(0px, 0px, 0px)',
    position: 'relative',
    top: '0px',
    left: '0px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  })

  const handleClick = (direction) => {
    if (contadorPx === 0) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[0] })
    }
    if (contadorPx === -414) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[1] })
    }
    if (contadorPx === -828) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[2] })
    }
    if (contadorPx === -1242) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[3] })
    }
    if (contadorPx === -1656) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[4] })
    }
    if (contadorPx === -2060) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[5] })
    }
    if (contadorPx === -2474) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[6] })
    }
    if (contadorPx === -2888) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[7] })
    }
    if (contadorPx === -3302) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[8] })
    }
    if (contadorPx === -1656) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[9] })
    }
    if (contadorPx === -1656) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[10] })
    }
    if (contadorPx === -1656) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[11] })
    }
    if (direction === 'right') {
      setContadorPx((prev) => prev - 414)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
      if (contadorPx === -3312) {
        const tem2 = { ...estilo }
        setContadorPx(0)
        tem2.transform = `translate3d(${contadorPx}px, 0px, 0px)`
        setEstilo(temp)
      }
    }
    if (direction === 'left') {
      setContadorPx((prev) => prev + 414)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
      if (contadorPx === 0) {
        const tem3 = { ...estilo }
        setContadorPx(-3312)
        tem3.transform = `translate3d(${contadorPx}px, 0px, 0px)`
        setEstilo(temp)
      }
    }
  }

  function toggleActive(index) {
    setCirculitos({ ...circulitos, activeObject: circulitos.objects[index] })
    if (circulitos.objects[index].id === 0) {
      setContadorPx(0)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
    }
    if (circulitos.objects[index].id === 1) {
      setContadorPx(-828)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
    }
    if (circulitos.objects[index].id === 2) {
      setContadorPx(-1242)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
    }
    if (circulitos.objects[index].id === 3) {
      setContadorPx(-1656)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
    }
    if (circulitos.objects[index].id === 4) {
      setContadorPx(-2070)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
    }
    if (circulitos.objects[index].id === 5) {
      setContadorPx(-2484)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
    }
    if (circulitos.objects[index].id === 6) {
      setContadorPx(-2898)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
    }
    if (circulitos.objects[index].id === 7) {
      setContadorPx(-3312)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
    }
  }

  function toggleActiveStyle(index) {
    if (circulitos.objects[index] === circulitos.activeObject) {
      return 'ElCarrBtn active'
    }
    return 'ElCarrBtn inactive'
  }

  return (
    <section className="TrendingContainer">
      <div className="h2Cont">
        <h2 className="trendH2">
          Trending in
          <div className="divDropDown">
            <h3 className="dropOptions">all categories</h3>
            <ExpandMoreIcon className="expandIcon" />
          </div>
        </h2>
      </div>
      <div className="carCont">
        <div className="carCont2">
          <div className="carCont3">
            <button type="button" className="lSlide" aria-label="prev slide" onClick={() => handleClick('left')}>
              <div aria-hidden="true" className="lIconCont">
                <ChevronLeftIcon className="lIcon" />
              </div>
            </button>
            <div className="car">
              <div className="carSty" style={estilo}>
                {
                  cards.map((card) => (
                    <div className="fullCCont">
                      <div>
                        <div className="fullCCont2">
                          <a className="fullCLink" href="https://opensea.io/collection/unigrids-by-zeblocks">
                            <div className="upperCCont">
                              <img src={card.src} alt="cardImg" className="cImgT" />
                            </div>
                            <div className="lowerCCont">
                              <div className="cLogoCont">
                                <img src={card.logo} alt="cardLogo" className="cLogoT" />
                              </div>
                              <div className="titleCardContT">
                                <div className="titleCT">
                                  {card.title}
                                </div>
                              </div>
                              <div className="byCContT">
                                <p className="byTxtT">by</p>
                                <div className="authorCCont">
                                  <a className="authotCLink" href="https://opensea.io/ArtBlocks_Admin">
                                    {card.by}
                                  </a>
                                </div>
                              </div>
                              <span className="descripctionContC">
                                <span className="descriptcionCT">
                                  {card.description}
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <button type="button" className="rSlide" aria-label="next slide" onClick={() => handleClick('right')}>
              <div aria-hidden="true" className="rIconCont">
                <ChevronRightIcon className="rIcon" />
              </div>
            </button>
            <ul className="listBtns">
              {
                circulitos.objects.map((elements, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li className="listElCarr" key={index}>
                    <button type="button" className={toggleActiveStyle(index)} onClick={() => toggleActive(index)}>1</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trending
