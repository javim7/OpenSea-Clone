/* eslint-disable object-curly-newline */
import './Collections.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Azuki from './azuki.jpg'
import Eth from './eth.svg'
import Otherdeed from './otherdeed.jpg'
import Pxn from './pxn.jpg'
import Beanzs from './beanz.png'
import bored from './bored.png'
import mutant from './mutant.png'
import doodles from './doodles.jpg'
import bears from './bears.png'
import birds from './birds.png'
import clones from './clone.png'
import art from './art.png'
import flower from './flower.png'
import ragnarok from './ragnarok.gif'
import ethe from './ethe.png'
import universe from './universe.png'

function Collections() {
  const column1 = [
    { rate: '1', name: 'Otherdeed for Oth...', img: Otherdeed, floor: '2.6', percent: '-81.49%', price: '39,076.93', id: 'pctMinus' },
    { rate: '2', name: 'Azuki', img: Azuki, floor: '7.5', percent: '+298.21%', price: '31,818.45', id: 'pctPlus' },
    { rate: '3', name: 'PXN: Ghost Division', img: Pxn, floor: '3.65', percent: '-', price: '24,673.15', id: 'pctSame' },
    { rate: '4', name: 'BEANZ Official', img: Beanzs, floor: '1', percent: '+303.03%', price: '12,666.59', id: 'pctPlus' },
    { rate: '5', name: 'Bored Ape Yatch C...', img: bored, floor: '89.95', percent: '-64.97%', price: '12,541.57', id: 'pctMinus' },
  ]
  const column2 = [
    { rate: '6', name: 'Mutant Ape Yatch C...', img: mutant, floor: '19.5', percent: '-65.86%', price: '11,995.7', id: 'pctMinus' },
    { rate: '7', name: 'Doodles', img: doodles, floor: '16.98', percent: '+4.01%', price: '8,822.18', id: 'pctPlus' },
    { rate: '8', name: 'OkayBears', img: bears, floor: '119', percent: '-35.10%', price: '336,053.27', id: 'pctMinus' },
    { rate: '9', name: 'Moonbirds', img: birds, floor: '22.9', percent: '-35.41%', price: '7,154.45', id: 'pctMinus' },
    { rate: '10', name: 'CLONE X- X TAKAS...', img: clones, floor: '13.25', percent: '-17.05%', price: '6,452.14', id: 'pctMinus' },
  ]
  const column3 = [
    { rate: '11', name: 'Art Blocks Curated', img: art, floor: '5.69', percent: '+126.02%', price: '5,886.87', id: 'pctPlus' },
    { rate: '12', name: 'Ragnarok Meta', img: ragnarok, floor: '0.9', percent: '-48.42%', price: '4,819.18', id: 'pctMinus' },
    { rate: '13', name: 'ENS: Ethereum Na...', img: ethe, floor: '-', percent: '-59.87%', price: '4,071.55', id: 'pctMinus' },
    { rate: '14', name: 'Murakami.Flower...', img: flower, floor: '3.88', percent: '-34.12%', price: '3,838.45', id: 'pctMinus' },
    { rate: '15', name: 'Mindblown Unive...', img: universe, floor: '0.29', percent: '-', price: '3,322.78', id: 'pctMinus' },
  ]

  return (
    <div className="CollectionsContainer">
      <section className="CollectionsSect">
        <div className="divSect">
          <h2 className="divH2">
            Top collections over
            <div className="divDropDown">
              <p className="dropOptions">last 7 days</p>
              <ExpandMoreIcon className="expandIcon" />
            </div>
          </h2>
        </div>
        <section className="sectSect">
          <div className="columnsCont">
            <div className="columnasSect">
              <div className="columnaSect" id="columna1">
                {
                  column1.map((element) => (
                    <a className="elementLink" href="https://opensea.io/collection/azuki">
                      <div className="rateContCol">
                        <span className="spanContCol">
                          <div className="rateCol">{ element.rate }</div>
                        </span>
                      </div>
                      <div className="imgContCol">
                        <div className="imgCont2Col">
                          <div className="imgCont3Col">
                            <img src={element.img} alt="elementImg" className="imgCol" />
                          </div>
                        </div>
                      </div>
                      <div className="infoContCol">
                        <span className="titleContCol">
                          <div className="titleCol">{ element.name }</div>
                        </span>
                        <span className="floorCont">
                          <div className="floorCont2">
                            <div className="floorPriceTitle">Floor Price:</div>
                            <div className="floorPrice2">
                              <div className="ethCont">
                                <button className="ehtBtn" type="button">
                                  <div className="ethBtnCont">
                                    <img src={Eth} alt="ethLogo" className="ethLogo" />
                                  </div>
                                </button>
                              </div>
                              <span className="fPriceCont">
                                <div className="fPriceTxt">{ element.floor }</div>
                              </span>
                            </div>
                          </div>
                        </span>
                      </div>
                      <div className="numberContCol">
                        <div className="numberContCol2">
                          <span className="pctCont" id={element.id}>
                            <div className="pctTxt">{ element.percent }</div>
                          </span>
                          <div className="priceCont">
                            <div className="ethCont">
                              <button className="ehtBtn" type="button">
                                <div className="ethBtnCont">
                                  <img src={Eth} alt="ethLogo" className="ethLogo" />
                                </div>
                              </button>
                            </div>
                            <span className="fPriceCont">
                              <div className="fPriceTxt">{ element.price }</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                }
              </div>
              <div className="columnaSect" id="columna2">
                {
                  column2.map((element) => (
                    <a className="elementLink" href="https://opensea.io/collection/azuki">
                      <div className="rateContCol">
                        <span className="spanContCol">
                          <div className="rateCol">{ element.rate }</div>
                        </span>
                      </div>
                      <div className="imgContCol">
                        <div className="imgCont2Col">
                          <div className="imgCont3Col">
                            <img src={element.img} alt="elementImg" className="imgCol" />
                          </div>
                        </div>
                      </div>
                      <div className="infoContCol">
                        <span className="titleContCol">
                          <div className="titleCol">{ element.name }</div>
                        </span>
                        <span className="floorCont">
                          <div className="floorCont2">
                            <div className="floorPriceTitle">Floor Price:</div>
                            <div className="floorPrice2">
                              <div className="ethCont">
                                <button className="ehtBtn" type="button">
                                  <div className="ethBtnCont">
                                    <img src={Eth} alt="ethLogo" className="ethLogo" />
                                  </div>
                                </button>
                              </div>
                              <span className="fPriceCont">
                                <div className="fPriceTxt">{ element.floor }</div>
                              </span>
                            </div>
                          </div>
                        </span>
                      </div>
                      <div className="numberContCol">
                        <div className="numberContCol2">
                          <span className="pctCont" id={element.id}>
                            <div className="pctTxt">{ element.percent }</div>
                          </span>
                          <div className="priceCont">
                            <div className="ethCont">
                              <button className="ehtBtn" type="button">
                                <div className="ethBtnCont">
                                  <img src={Eth} alt="ethLogo" className="ethLogo" />
                                </div>
                              </button>
                            </div>
                            <span className="fPriceCont">
                              <div className="fPriceTxt">{ element.price }</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                }
              </div>
              <div className="columnaSect" id="columna3">
                {
                  column3.map((element) => (
                    <a className="elementLink" href="https://opensea.io/collection/azuki">
                      <div className="rateContCol">
                        <span className="spanContCol">
                          <div className="rateCol">{ element.rate }</div>
                        </span>
                      </div>
                      <div className="imgContCol">
                        <div className="imgCont2Col">
                          <div className="imgCont3Col">
                            <img src={element.img} alt="elementImg" className="imgCol" />
                          </div>
                        </div>
                      </div>
                      <div className="infoContCol">
                        <span className="titleContCol">
                          <div className="titleCol">{ element.name }</div>
                        </span>
                        <span className="floorCont">
                          <div className="floorCont2">
                            <div className="floorPriceTitle">Floor Price:</div>
                            <div className="floorPrice2">
                              <div className="ethCont">
                                <button className="ehtBtn" type="button">
                                  <div className="ethBtnCont">
                                    <img src={Eth} alt="ethLogo" className="ethLogo" />
                                  </div>
                                </button>
                              </div>
                              <span className="fPriceCont">
                                <div className="fPriceTxt">{ element.floor }</div>
                              </span>
                            </div>
                          </div>
                        </span>
                      </div>
                      <div className="numberContCol">
                        <div className="numberContCol2">
                          <span className="pctCont" id={element.id}>
                            <div className="pctTxt">{ element.percent }</div>
                          </span>
                          <div className="priceCont">
                            <div className="ethCont">
                              <button className="ehtBtn" type="button">
                                <div className="ethBtnCont">
                                  <img src={Eth} alt="ethLogo" className="ethLogo" />
                                </div>
                              </button>
                            </div>
                            <span className="fPriceCont">
                              <div className="fPriceTxt">{ element.price }</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        <a className="aSect" href="https://opensea.io/rankings">Go to Rankings</a>
      </section>
    </div>
  )
}

export default Collections
