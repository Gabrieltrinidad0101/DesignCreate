export default interface IInfinitiveScroll<T> {
  next: () => Promise<void>
  children: T[]
  className: string
}
