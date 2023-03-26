export default interface Toast {
  sucess: (texto: string) => void
  error: (texto: string) => void
}
