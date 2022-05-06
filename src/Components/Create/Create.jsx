/* eslint-disable max-len */
import './Create.css'
import bckg from './download.svg'
import wallet from './wallet.svg'
import collection from './collection.svg'
import nft from './nft.svg'
import sale from './sale.svg'

function Create() {
  return (
    <div className="CreateContainer">
      <div className="CreateCont2">
        <h2 className="createH2">Create and sell your NFTs</h2>
        <div className="createGrid">
          <div className="sectCont">
            <div className="topIconCont">
              <div className="createimgCont">
                <img src={bckg} alt="bckg" aria-hidden="true" className="bckgSvg" />
              </div>
              <img src={wallet} alt="wallet" className="walletSvg" />
            </div>
            <p className="createTitle">Set up your wallet</p>
            <p className="parCont">
              Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the
              <a className="parLink" href="https://support.opensea.io/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea"> wallets we support</a>
              .
            </p>
          </div>
          <div className="sectCont">
            <div className="topIconCont">
              <div className="createimgCont">
                <img src={bckg} alt="bckg" aria-hidden="true" className="bckgSvg" />
              </div>
              <img src={collection} alt="collection" className="walletSvg" />
            </div>
            <p className="createTitle">Create your collection</p>
            <p className="parCont">
              Click
              <a className="parLink" href="https://opensea.io/login?referrer=%2Fcollections"> My Collections </a>
              and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
            </p>
          </div>
          <div className="sectCont">
            <div className="topIconCont">
              <div className="createimgCont">
                <img src={bckg} alt="bckg" aria-hidden="true" className="bckgSvg" />
              </div>
              <img src={nft} alt="nft" className="walletSvg" />
            </div>
            <p className="createTitle">Add your NFTs</p>
            <p className="parCont">
              Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.
            </p>
          </div>
          <div className="sectCont">
            <div className="topIconCont">
              <div className="createimgCont">
                <img src={bckg} alt="bckg" aria-hidden="true" className="bckgSvg" />
              </div>
              <img src={sale} alt="sale" className="walletSvg" />
            </div>
            <p className="createTitle">List them for sale</p>
            <p className="parCont">
              Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
