/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import './Footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import RedditIcon from '@mui/icons-material/Reddit'
import FacebookIcon from '@mui/icons-material/Facebook'
import logo from './opensea-white.svg'

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterCont2">
        <div className="Footer1Cont">
          <div className="Footer11Cont">
            <div className="loopTxt">
              Stay in the loop
            </div>
            <div className="loopDesc">
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
            </div>
            <form action="signUp" className="signUpCont">
              <div className="signUpCont2">
                <div className="signInputCont">
                  <div className="signInputCont2">
                    <div className="labelCont">
                      <label htmlFor="email" className="labelInput">Email Address</label>
                    </div>
                    <div className="signInpCont">
                      <input type="email" className="signInp" placeholder="Your email address" />
                    </div>
                  </div>
                </div>
                <button type="button" className="signUpBtn">Sign up</button>
              </div>
            </form>
          </div>
          <div className="Footer12Cont">
            <div className="joinTxt">Join the community</div>
            <div className="logosContF">
              <a href="https://twitter.com/opensea" className="logosLinkF">
                <div className="logosContF2">
                  <svg className="logosSvgF">
                    <TwitterIcon className="mailIcon" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/opensea" className="logosLinkF">
                <div className="logosContF2">
                  <svg className="logosSvgF">
                    <InstagramIcon className="mailIcon" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/opensea" className="logosLinkF">
                <div className="logosContF2">
                  <svg className="logosSvgF">
                    <path d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/opensea" className="logosLinkF">
                <div className="logosContF2">
                  <svg className="logosSvgF">
                    <RedditIcon className="mailIcon" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/opensea" className="logosLinkF">
                <div className="logosContF2">
                  <svg className="logosSvgF">
                    <YouTubeIcon className="mailIcon" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/opensea" className="logosLinkF">
                <div className="logosContF2">
                  <svg className="logosSvgF">
                    <FacebookIcon className="mailIcon" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/opensea" className="logosLinkF">
                <div className="logosContF2">
                  <MailOutlineIcon className="mailIcon" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="Footer2Cont">
          <div className="opLogoCont">
            <div className="opLogo">
              <img src={logo} alt="opLogoImg" className="opLogoImg" />
            </div>
            <a href="https://opensea.io/" className="opLink">
              OpenSea
            </a>
            <div className="opDesc">
              The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </div>
          </div>
          <div className="optionsCont">
            <div className="ColumnsContF" id="MarketCont">
              <h3 className="columnTitle">Marketplace</h3>
              <ul className="columList">
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">All NFTs</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Solana NFTs</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Art</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Collectibles</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Domain Names</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Music</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Photography</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Sports</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Trading Cards</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Utility</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Virtual Worlds</a>
                </li>
              </ul>
            </div>
            <div className="ColumnsContF">
              <h3 className="columnTitle">My Account</h3>
              <ul className="columList">
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Profile</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Favorites</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Watchlist</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">My Collections</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Settings</a>
                </li>
              </ul>
              <h3 className="columnTitle" style={{ marginTop: '48px' }}>Stats</h3>
              <ul className="columList">
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Rankings</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Activity</a>
                </li>
              </ul>
            </div>
            <div className="ColumnsContF">
              <h3 className="columnTitle">Resources</h3>
              <ul className="columList">
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Help Center</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Platform Status</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Partners</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Gas-Free Marketplace</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Taxes</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Blog</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Docs</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Newsletter</a>
                </li>
              </ul>
            </div>
            <div className="ColumnsContF">
              <h3 className="columnTitle">Company</h3>
              <ul className="columList">
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">About</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Careers</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Ventures</a>
                </li>
                <li className="columListEl">
                  <a href="https://opensea.io/assets" className="elementLinkF">Grants</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Footer3Cont">
          <div className="Foot31Cont">
            <p className="year">
              © 2018 -
              2022
              Ozone Networks, Inc
            </p>
          </div>
          <div className="Foot32Cont">
            <a href="https://opensea.io/privacy" className="privacy">Privacy Policy</a>
            <a href="https://opensea.io/privacy" className="service">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
