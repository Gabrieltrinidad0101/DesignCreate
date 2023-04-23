import Design from '../application/design'
import DesignRepository from './Database/designRepository'
import DesignControl from './designControl'

const designRepository = new DesignRepository()
const design = new Design(designRepository)
export const designControl = new DesignControl(design)
