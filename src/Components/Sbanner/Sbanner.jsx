import './Sbanner.css'
import homeBanner from './home-banner.png'

function Sbanner() {
  return (
    <div className="SbannerContainer">
      <div className="SbannerImg" style={{ backgroundImage: `url(${homeBanner})` }}>
        <a className="exploreSol" href="https://opensea.io/explore-solana">
          <div className="contenedor">
            <div className="txtCont">
              <div className="contVacio" />
              <div className="contLLeno">
                <h3 className="txtSol">Solana is in beta on OpenSea</h3>
              </div>
            </div>
            <div className="btnCont">
              <div className="contVacio" />
              <div className="contLLeno">
                <button className="btnSol" type="button">Explore</button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Sbanner
