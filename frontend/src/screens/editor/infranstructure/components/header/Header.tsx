import React from 'react'
import HeaderCss from './Header.module.css'
import type IProp from '../../../../../share/domian/prop'
import { type IEditorEvents } from '../../../domain/IEditor'

export default function Header ({ Prop: editorEvents }: IProp<IEditorEvents>): JSX.Element {
  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    editorEvents.changeName(e.target.value)
  }

  const save = (): void => {
    editorEvents.save()
      .catch(error => {
        console.log(error)
      })
  }

  return (
        <div className={HeaderCss.container}>
            <div className={HeaderCss.logoContainer}>
                DesignCreate
            </div>
            <div className={HeaderCss.containerDesignName}>
                <input type="text" value={editorEvents.designName} onChange={changeEvent} placeholder='Design name' />
            </div>
            <div className={`${HeaderCss.buttoSaveAndClose} ${HeaderCss.icon}`}>
                <div onClick={save}>
                    <i className="fa-solid fa-floppy-disk"></i>
                </div>
                <div onClick={editorEvents.download}>
                    <i className="fa-solid fa-download"></i>
                </div>
                <div onClick={editorEvents.clean}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
  )
}
