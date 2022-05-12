import './Browse.css'
import Art from './art.png'
import Collectibles from './collectibles.png'
import Domain from './domain.png'
import Music from './music.png'
import Photography from './photography.png'
import Sports from './sports.png'
import Trading from './trading.png'
import utility from './utility.png'
import virtual from './virtual.png'

function Browse() {
  const cards = [
    { title: 'Art', src: Art, link: 'https://opensea.io/collection/art' },
    { title: 'Collectibles', src: Collectibles, link: 'https://opensea.io/collection/collectibles' },
    { title: 'Domain Names', src: Domain, link: 'https://opensea.io/collection/domain-names' },
    { title: 'Music', src: Music, link: 'https://opensea.io/collection/domain-names' },
    { title: 'Photography', src: Photography, link: 'https://opensea.io/collection/domain-names' },
    { title: 'Sports', src: Sports, link: 'https://opensea.io/collection/domain-names' },
    { title: 'Trading Cards', src: Trading, link: 'https://opensea.io/collection/domain-names' },
    { title: 'Utility', src: utility, link: 'https://opensea.io/collection/domain-names' },
    { title: 'Virtual Worlds', src: virtual, link: 'https://opensea.io/collection/domain-names' },
  ]

  return (
    <div className="BrowseContainer">
      <div className="BrowseCont2">
        <div className="browseH2cont">
          <h2 className="browseH2">Browse by category</h2>
        </div>
        <div className="browseCardsCont">
          {
            cards.map((card) => (
              <div className="browseCard">
                <a className="cardLink" href={card.link}>
                  <div className="cardImgCont">
                    <img src={card.src} className="cardImg" alt="cardImg" />
                  </div>
                  <div className="cardTitleCont">
                    <div className="cardTitleCont2">
                      <span className="cardTitle">{ card.title }</span>
                    </div>
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Browse
