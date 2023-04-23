import type IItemsSubMenu from '../../../../domain/itemsSubMenu'
import Shapes from './shapes/Shapes'
import EditShapes from './editShape/EditShapes'

const ItemsSubMenu: IItemsSubMenu<JSX.Element> = {
  Shapes,
  EditShapes
}

export default ItemsSubMenu