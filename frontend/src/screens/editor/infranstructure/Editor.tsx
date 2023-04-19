import React from 'react'
import Dashboard from '../../../components/Dashboard/infranstructure/Dashboard'
import EditorMenu from './components/menu/EditorMenu'
import GraphicEditor from './components/GraphicEditor/GraphicEditor'

export default function Editor (): JSX.Element {
  return (<>
    <Dashboard
      Header={<h1>ddd</h1> }
      Body={<GraphicEditor/>}
      Menu={<EditorMenu/>}
    />
  </>
  )
}
