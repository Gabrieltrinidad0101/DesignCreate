export default interface IEncrypt {
  sign: (value: string) => string
  verify: (value: string) => string | null
}
