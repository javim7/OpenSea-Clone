import './Banner.css'
import { PlayCircleFilled } from '@mui/icons-material'
import BannerImg from './bannerBackground.jpeg'
import featImg from './featuredImg.jpeg'
// import Beanz from './beanz.png'
// import BeanzAvatar from './beanzAvatar.png'

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
          <article className="articuloCont">
            <a className="imgLink" href="https://opensea.io/collection/otherdeed">
              <img alt="featured" className="featImg" src={BannerImg} />
              <footer className="footer">
                <div className="featuredPic">
                  <img alt="featured" className="featImg2" src={featImg} />
                </div>
                <div className="featTextCont">
                  <span className="span1Cont">
                    <span className="span1">Otherdeed for Otherside</span>
                  </span>
                  <span className="span2Cont">
                    <span style={{ fontWeight: '400', color: '#04111d', fontSize: '14px' }}>by</span>
                    <span style={{ fontWeight: '500', marginLeft: '4px', color: '#04111d' }}>OthersideMeta</span>
                  </span>
                </div>
              </footer>
            </a>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Banner
