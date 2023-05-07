export default interface IInfinitiveScroll<T> {
  next: () => Promise<void>
  children?: T | T[]
  className?: string
}
