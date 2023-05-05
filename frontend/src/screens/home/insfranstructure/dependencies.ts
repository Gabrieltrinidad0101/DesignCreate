import { customFecth, Toast } from '../../../share/infranstruture/dependencies'
import DesignApp from '../application/design'
import EditorApp from '../../editor/application/editorApp'

const editorApp = new EditorApp({
  customFecth,
  toast: Toast
})

export const designApp = new DesignApp(editorApp, Toast, customFecth)
