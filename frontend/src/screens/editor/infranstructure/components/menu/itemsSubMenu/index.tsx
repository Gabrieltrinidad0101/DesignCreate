import type IItemsSubMenu from '../../../../domain/itemsSubMenu'
import Shapes from './shapes/Shapes'
import EditShapes from './editShape/EditShapes'
import Images from './images/Images'

const ItemsSubMenu: IItemsSubMenu<JSX.Element> = {
  Shapes,
  EditShapes,
  Images
}

export default ItemsSubMenu
