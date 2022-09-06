import { Products } from './products'
import { Base } from './base'
import { applyMixins } from './utils'
import { AccountProfile } from './accountProfile'

class Moloni extends Base {}
interface Moloni extends Products, AccountProfile {}
applyMixins(Moloni, [AccountProfile, Products])

export default Moloni
