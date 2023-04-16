export default interface IItemsSubMenu<T> {
  Shapes: () => T
  EditShapes: () => T
  Text: () => T
}

export type TypeItemSubMenu = 'Shapes' | 'EditShapes' | 'Text'
