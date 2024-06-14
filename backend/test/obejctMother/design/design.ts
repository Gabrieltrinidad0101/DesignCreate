import type IDesign from '../../../src/share/domain/design'

export const Design = ({ name = 'Design', content = '', svg = '', _id = '' }: IDesign): IDesign => {
  return {
    name,
    content,
    svg,
    _id
  }
}
