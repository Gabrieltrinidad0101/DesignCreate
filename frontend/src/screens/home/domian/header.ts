export default interface IHeader {
  createNewDesign: () => Promise<void>
  searchDesign: string
  setSearchDesign: (searchDesign: string) => void
}
