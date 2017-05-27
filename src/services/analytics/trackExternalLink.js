import ReactGA from './ReactGA'

export default label => () => {
  ReactGA.outboundLink({ label }, () => {})
}
