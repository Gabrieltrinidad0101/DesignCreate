import { type IImages } from '../domain/image'
export const getImages = async (imageName: string): Promise<IImages> => {
  const API_KEY = '20535059-e0c82276dce2e2c40c5096545'
  const endpoint = `https://pixabay.com/api/?key=${API_KEY}&q=${imageName}&per_page=15`
  const res = await fetch(endpoint)
  const info = await res.json()
  return info as IImages
}
