import './Resources.css'
import Setup from './setup.png'
import img2 from './img2.png'
import img3 from './img3.png'

function Resources() {
  const cards = [
    { description: 'How to Easily Setup a MetaMask Wallet', src: Setup },
    { description: 'How to Fund MetaMask with ETH', src: img2 },
    { description: 'How to Find an NFT You Love', src: img3 },
  ]

  return (
    <section className="ResourcesContainer">
      <div className="ResCont2">
        <h2 className="resH2">Resources for getting started</h2>
        <div className="resCardsCont">
          <div className="resCardsCont2">
            <div className="resCardsCont3">
              <div className="resCardsCont4">
                <div className="resCardsCont5">
                  {
                  cards.map((card) => (
                    <div className="resDivCont">
                      <div style={{ disable: 'block' }}>
                        <div className="resDivCont2">
                          <a className="resDivLink" href="https://opensea.io/blog/learn/how-to-easily-setup-a-metamask-wallet/">
                            <div className="resImgCont">
                              <img className="resImg" alt="ImgRes" src={card.src} />
                            </div>
                            <div className="resTitleCont">
                              <div className="resTitle">{ card.description }</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
