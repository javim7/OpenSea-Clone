import './Collections.css'
import Select from 'react-select'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Collections() {
  const opciones = [
    { id: 1, opcion: 'last 7 days' },
    { id: 3, opcion: 'last 24 hours' },
    { id: 3, opcion: 'last 30 days' },
  ]

  return (
    <div className="CollectionsContainer">
      <section className="CollectionsSect">
        <div className="divSect">
          <h2 className="divH2">
            Top collections over
            <div className="divDropDown">
              <p className="dropOptions">last 7 days</p>
              <ExpandMoreIcon className="expandIcon" />
            </div>
          </h2>
        </div>
        <section className="sectSect">

        </section>
        <a className="aSect" href="https://opensea.io/rankings">Go to Rankings</a>
      </section>
    </div>
  )
}

export default Collections
