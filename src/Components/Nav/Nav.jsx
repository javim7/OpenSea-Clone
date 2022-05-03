import './Nav.css'
import { Search } from '@mui/icons-material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import OpenSeaLogo from './opensea-logo.png'

function Nav() {
  return (
    <div className="NavBarContainer">
      <div className="NavBarMain">
        <div className="NavBarLeft">
          <img src={OpenSeaLogo} className="openseaLogo" alt="openseaLogo" />
        </div>
        <div className="NavInput">
          <Search className="searchIcon" />
          <input className="searchInput" type="text" placeholder="Search items, collections, and accounts" />
        </div>
        <ul className="NavBarRight">
          <div className="RightLeft">
            <li className="LiLeft">Explore</li>
            <li className="LiLeft">Stats</li>
            <li className="LiLeft">Resources</li>
            <li className="LiLeft">Create</li>
          </div>
          <div className="RightRight">
            <li>
              <AccountCircleOutlinedIcon className="LiRight" style={{ color: 'gray', fontSize: '32' }} />
            </li>
            <li>
              <AccountBalanceWalletOutlinedIcon className="LiRight" style={{ color: 'gray', fontSize: '32' }} />
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Nav
