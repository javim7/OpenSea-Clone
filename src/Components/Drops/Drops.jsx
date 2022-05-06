import './Drops.css'
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
      title: '`Everybody` NFT Collection', id: 'vogue', description: 'A collection by Vogue Singapore, in collaboration The MetaArt Club', src: { Vogue },
    },
    {
      title: 'SuperGrannies of Korogocho', id: 'grannies', description: 'The lastest collection from ART3', src: { Grannies },
    },
    {
      title: 'NFTSTAR Fan Pass: Son Heung-Min', id: 'star', description: 'IRL and web3 empowerment for fans & holders', src: { Star },
    },
    {
      title: 'Signs of the Times', id: 'sign', src: { Sign },
    },
    {
      title: 'Surge Passport NFT', id: 'surge', description: 'Onborading the next gen Web3: 5,000 utility tokens', src: { Surge },
    },
    {
      title: 'wackies', id: 'wackie', src: { Wackie },
    },
    {
      title: 'Powerful Iceland', id: 'iceland', src: { Iceland },
    },
  ]

  return (
    <div className="DropsContainer">
      <section className="DropsSect">
        <h2 className="txtSect">Notable Drops</h2>
        <div className="carouselCont">
          <div className="carouselCont2">
            <div className="carouselCont3">
              <button type="button" className="leftSlide" aria-label="prev slide">
                <div aria-hidden="true" className="leftIconCont">
                  <ChevronLeftIcon className="leftIcon" />
                </div>
              </button>
              <div className="carousel">
                <div className="carouselSty">

                </div>
              </div>
              <button type="button" className="rightSlide" aria-label="next slide">
                <div aria-hidden="true" className="rightIconCont">
                  <ChevronRightIcon className="rightIcon" />
                </div>
              </button>
              <ul className="listaBtns">

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Drops
