export default interface IToken {
  sign: (value: object) => string
  verify: (value: string) => string | null
}
