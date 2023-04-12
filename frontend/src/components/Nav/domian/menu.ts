export default interface INav<T> {
  text?: string
  children: T
  onClick?: () => void
}
