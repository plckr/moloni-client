import { Products } from './products'
import { Base } from './base'
import { applyMixins } from './utils'

class Moloni extends Base {}
interface Moloni extends Products {}
applyMixins(Moloni, [Products])

export default Moloni
