import './Meet.css'
import bckg from './video-background.svg'
import vid from './video.png'

function Meet() {
  return (
    <div className="MeetContainer">
      <div className="MeetCont2">
        <div className="MeetCont3">
          <p className="MeetTitle">Meet Opesea</p>
          <p className="MeetDescription">The NFT marketplace with everything for everyone</p>
          <div className="meetVidCont" style={{ background: `url(${bckg})` }}>
            <div className="meetVidCont2">
              <img style={{ cursor: 'pointer' }} src={vid} alt="video" />
              <button className="btnYT" type="button">
                <svg className="YTsvg">
                  <path className="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" />
                  <path d="M 45,24 27,14 27,34" fill="#fff" />
                </svg>
              </button>
            </div>
            <p className="vidTxtS">Fiat on-ramp and profile customization is coming soon.</p>
          </div>
          <div className="meetBtnCont">
            <a href="https://opensea.io/explore-collections" className="meetBtn">Explore the marketplace</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meet
