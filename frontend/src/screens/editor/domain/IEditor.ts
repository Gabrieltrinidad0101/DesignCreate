export interface IEditorEvents {
  save: () => Promise<void>
  designName?: string
  changeName: (name: string) => void
}
