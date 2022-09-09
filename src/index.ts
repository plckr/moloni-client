import { Products } from './products'
import { Base } from './base'
import { applyMixins } from './utils'
import { Users } from './users'
import { Company } from './company'
import { Entities } from './entities'
import { Documents } from './documents'
import { Settings } from './settings'
import { GlobalData } from './globalData'

class Moloni extends Base {}
interface Moloni
  extends Users,
    Products,
    Company,
    Entities,
    Documents,
    Settings,
    GlobalData {}
applyMixins(Moloni, [
  Users,
  Products,
  Company,
  Entities,
  Documents,
  Settings,
  GlobalData,
])

export default Moloni
