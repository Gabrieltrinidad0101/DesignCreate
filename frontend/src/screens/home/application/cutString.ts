export const cutString = (text: string, cut: number): string => {
  return text.length > 17 ? `${text.slice(0, cut)}...` : text
}
