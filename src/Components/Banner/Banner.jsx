import './Banner.css'
import { PlayCircleFilled } from '@mui/icons-material'
import BannerImg from './bannerBackground.jpeg'

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="BannerBackground">
        <div className="BannerImg" style={{ backgroundImage: `url(${BannerImg})` }}>
          <div className="BannerFade" />
        </div>
      </div>
      <div className="BannerObjects">
        <div className="BannerInfo">
          <h1 className="BannerTitle">Discover, collect, and sell extraordinary NFTs</h1>
          { /* eslint-disable-next-line react/no-unescaped-entities */ }
          <span className="BannerTxt">OpenSea is the world's first and largest NFT marketplace</span>
          <div className="BannerBtns">
            <div className="Btn1Cont">
              <a className="Btn1" href="https://opensea.io/explore-collections">Explore</a>
            </div>
            <a className="Btn2" href="https://opensea.io/login?referrer=%2Fasset%2Fcreate">Create</a>
          </div>
          <div className="Info2Cont">
            <a className="Btn3Cont" href="https://opensea.io/#meetopensea">
              <div className="divCont">
                <PlayCircleFilled className="iconoBtn3" />
                <p className="textoBtn3">Learn more about OpenSea</p>
              </div>
            </a>
          </div>
        </div>
        <div className="BannerImg2">

        </div>
      </div>
    </div>
  )
}

export default Banner
