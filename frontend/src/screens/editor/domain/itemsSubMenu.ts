export default interface IItemsSubMenu<T> {
  Shapes: () => T
  EditShapes: () => T
}

export type TypeItemSubMenu = 'Shapes' | 'EditShapes'
