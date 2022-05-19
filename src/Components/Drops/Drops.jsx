import './Drops.css'
import { useState, useEffect } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Iceland from './iceland.jpg'
import Sign from './sign.jpg'
import Surge from './surge.jpg'
import Wackie from './wackie.jpg'
import Grannies from './supergrannies.jpg'
import Star from './nftstar.jpg'
import Vogue from './vogue.jpg'

function Drops() {
  const promoCards = [
    {
      index: 0, title: '`Everybody` NFT Collection', id: 'vogue', description: 'A collection by Vogue Singapore, in collaboration The MetaArt Club', src: Vogue,
    },
    {
      index: 1, title: 'SuperGrannies of Korogocho', id: 'grannies', description: 'The lastest collection from ART3', src: Grannies,
    },
    {
      index: 2, title: 'NFTSTAR Fan Pass: Son Heung-Min', id: 'star', description: 'IRL and web3 empowerment for fans & holders', src: Star,
    },
    {
      index: 3, title: 'Signs of the Times', id: 'sign', description: '', src: Sign,
    },
    {
      index: 4, title: 'Surge Passport NFT', id: 'surge', description: 'Onborading the next gen Web3: 5,000 utility tokens', src: Surge,
    },
    {
      index: 5, title: 'wackies', id: 'wackie', description: '', src: Wackie,
    },
    {
      index: 6, title: 'Powerful Iceland', id: 'iceland', description: '', src: Iceland,
    },
  ]

  const [circulitos, setCirculitos] = useState({
    activeObject: null,
    objects: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
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
    if (contadorPx === -828) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[1] })
    }
    if (contadorPx === -1242) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[2] })
    }
    if (contadorPx === -1656) {
      setCirculitos({ ...circulitos, activeObject: circulitos.objects[3] })
    }
    if (direction === 'right') {
      setContadorPx((prev) => prev - 414)
      const temp = { ...estilo }
      temp.transform = `translate3d(${contadorPx}px, 0px, 0px)`
      setEstilo(temp)
      if (contadorPx === -1656) {
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
        setContadorPx(-1656)
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
  }

  function toggleActiveStyle(index) {
    if (circulitos.objects[index] === circulitos.activeObject) {
      return 'ElCarrBtn active'
    }
    return 'ElCarrBtn inactive'
  }

  return (
    <div className="DropsContainer">
      <section className="DropsSect">
        <h2 className="txtSect">Notable Drops</h2>
        <div className="carouselCont">
          <div className="carouselCont2">
            <div className="carouselCont3">
              <button type="button" className="leftSlide" aria-label="prev slide" onClick={() => handleClick('left')}>
                <div aria-hidden="true" className="leftIconCont">
                  <ChevronLeftIcon className="leftIcon" />
                </div>
              </button>
              <div className="carousel">
                <div className="carouselSty" style={estilo}>
                  {
                    promoCards.map((card) => (
                      <div className="fullCardCont">
                        <div>
                          <div className="fullCardCont2">
                            <a className="fullCardLInk" href="https://opensea.io/collection/incaptivity" style={{ backgroundImage: `url(${card.src})` }}>
                              <div className="upperCardCont">
                                <div className="upperCardCont2">
                                  <div className="upperCardCont3">
                                    <div className="liveBtnCont">
                                      <p className="liveBtn">Live</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="lowerCardCont">
                                <div className="lowerCard">
                                  { card.title }
                                </div>
                                {
                                  card.description.length > 0
                                    ? <p className="cardDescription">{ card.description}</p>
                                    : null
                                }
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <button type="button" className="rightSlide" aria-label="next slide" onClick={() => handleClick('right')}>
                <div aria-hidden="true" className="rightIconCont">
                  <ChevronRightIcon className="rightIcon" />
                </div>
              </button>
              <ul className="listaBtns">
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
    </div>
  )
}

export default Drops
