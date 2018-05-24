import FacebookPixel from 'react-facebook-pixel'
import { fbPixelId } from 'config'

const advancedMatching = {}
const options = {
  autoConfig: true,
  debug: process.env.NODE_ENV !== 'production'
}

FacebookPixel.init(fbPixelId, advancedMatching, options)

export default FacebookPixel
