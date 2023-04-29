export default interface IItemsSubMenu<T> {
  Shapes: () => T
  EditShapes: () => T
  Images: () => T
}

export type TypeItemSubMenu = 'Shapes' | 'EditShapes' | 'Images'
