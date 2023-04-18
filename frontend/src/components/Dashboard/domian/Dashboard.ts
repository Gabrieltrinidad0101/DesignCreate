
export default interface IDashboard<T> {
  Header: () => T
  Menu: () => T
  Body: () => T

}
