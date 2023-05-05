import type IDesign from '../../../../../share/domain/design'

export default interface IEditorApp {
  save: (design: IDesign, showSucessAlter?: 'noShowSucessAlter') => Promise<string | undefined>
  findById: (design: IDesign) => Promise<string | undefined>
}

export interface IEditorEvents {
  save: () => Promise<void>
  designName?: string
  changeName: (name: string) => void
  clean: () => void
  download: () => void
}
