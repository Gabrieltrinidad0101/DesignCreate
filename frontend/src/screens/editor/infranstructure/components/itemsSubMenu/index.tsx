import type IItemsSubMenu from '../../../domain/itemsSubMenu'
import Shapes from './shapes/Shapes'
import EditShapes from './editShape/EditShapes'
import Text from './text/Text'

const ItemsSubMenu: IItemsSubMenu<JSX.Element> = {
  Shapes,
  EditShapes,
  Text
}

export default ItemsSubMenu
