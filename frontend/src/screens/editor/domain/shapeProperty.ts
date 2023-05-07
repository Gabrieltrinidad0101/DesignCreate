export type ShapeProperty = 'fill' | 'stroke' | 'strokeWidth' | 'flipX' | 'flipY' | 'fontFamily'
export type Align = 'centerObject' | 'centerObjectLeft' | 'centerObjectRight' | 'centerObjectTop' | 'centerObjectBottom'
export interface IShapeProperty {
  fill?: string
  stroke?: string
  strokeWidth?: number
  flipX?: boolean
  flipY?: boolean
  type?: string
  fontFamily?: string
}
