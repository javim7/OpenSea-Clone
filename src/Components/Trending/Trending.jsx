import './Trending.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

function Trending() {
  return (
    <section className="TrendingContainer">
      <div className="h2Cont">
        <h2 className="trendH2">
          Trending in
          <div className="divDropDown">
            <h3 className="dropOptions">all categories</h3>
            <ExpandMoreIcon className="expandIcon" />
          </div>
        </h2>
      </div>
      <div className="carCont">
        <div className="carCont2">
          <div className="carCont3">
            <button type="button" className="lSlide" aria-label="prev slide">
                <div aria-hidden="true" className="lIconCont">
                  <ChevronLeftIcon className="lIcon" />
                </div>
              </button>
              <div className="car">
                <div className="carSty">

                </div>
              </div>
              <button type="button" className="rSlide" aria-label="next slide">
                <div aria-hidden="true" className="rIconCont">
                  <ChevronRightIcon className="rIcon" />
                </div>
              </button>
              <ul className="listBtns">

              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trending
