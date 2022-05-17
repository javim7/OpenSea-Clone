/* eslint-disable object-curly-newline */
import './Trending.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import unigrids from './unigrids.png'
import skullbot from './skullbot.jpg'
import skullbotL from './skullbotL.png'

function Trending() {
  const cards = [
    { title: 'Unigrids by Zeblocks', by: 'ArtBlocks_Admin', description: 'Unigrids by Zeblocks - Art Blocks Curated', src: unigrids, logo: unigrids },
    { title: 'Unigrids by Zeblocks', by: 'ArtBlocks_Admin', description: 'Unigrids by Zeblocks - Art Blocks Curated', src: unigrids, logo: unigrids },
    { title: 'Unigrids by Zeblocks', by: 'ArtBlocks_Admin', description: 'Unigrids by Zeblocks - Art Blocks Curated', src: unigrids, logo: unigrids },
    { title: 'Skullbot Biker Gang', by: 'Skullbots', description: 'Skullbot Biker Gang is a Couterculture Movement. A Rebellious Organization of 3,666...', src: skullbot, logo: skullbotL },
    { title: 'Unigrids by Zeblocks', by: 'ArtBlocks_Admin', description: 'Unigrids by Zeblocks - Art Blocks Curated', src: unigrids, logo: unigrids },
    { title: 'Unigrids by Zeblocks', by: 'ArtBlocks_Admin', description: 'Unigrids by Zeblocks - Art Blocks Curated', src: unigrids, logo: unigrids },
    { title: 'Unigrids by Zeblocks', by: 'ArtBlocks_Admin', description: 'Unigrids by Zeblocks - Art Blocks Curated', src: unigrids, logo: unigrids },
  ]

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
            <button type="button" className="lSlide" aria-label="prev slide">
              <div aria-hidden="true" className="lIconCont">
                <ChevronLeftIcon className="lIcon" />
              </div>
            </button>
            <div className="car">
              <div className="carSty">
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
            <button type="button" className="rSlide" aria-label="next slide">
              <div aria-hidden="true" className="rIconCont">
                <ChevronRightIcon className="rIcon" />
              </div>
            </button>
            <ul className="listBtns">
            
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trending
