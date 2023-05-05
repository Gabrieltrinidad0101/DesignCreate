export default interface IImage {
  id?: number
  webformatURL?: string
}

export interface IImageOnClick extends IImage {
  onClick: (imageUrl?: string) => void
}

export interface IImages {
  hits?: IImage[]
}
