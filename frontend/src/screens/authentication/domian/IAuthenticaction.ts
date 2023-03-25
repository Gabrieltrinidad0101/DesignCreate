export default interface IAuthentication {
  buttonName: string
  onSubmit: (name: string, password: string) => void
}
