import { gaTrackingId } from 'config'
import ReactGA from 'react-ga'

if (gaTrackingId) {
  ReactGA.initialize(gaTrackingId)
}

export default ReactGA
