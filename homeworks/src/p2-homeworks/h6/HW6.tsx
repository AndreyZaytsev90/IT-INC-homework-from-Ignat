import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import styleBtn from "../h4/common/c2-SuperButton/SuperButton.module.css";

function HW6() {
  const [value, setValue] = useState<string>('')

  const save = () => {
    saveState<string>('editable-span-value', value)

  }
  const restore = () => {
    const newValue = restoreState<string>('editable-span-value', value)
    setValue(newValue)
  }

  return (
    <div>
      <hr/>
      <h2 style={{marginLeft: 20}}>homeworks 6</h2>

      {/*should work (должно работать)*/}
      <div>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{children: value ? undefined : 'ENTER TEXT'}}
        />
      </div>
      <div style={{marginLeft: 20, marginTop: 20}}>
        <SuperButton className={styleBtn.buttonAll} onClick={save}>save</SuperButton>
        <SuperButton style={{marginLeft: 20}} className={styleBtn.buttonAll} onClick={restore}>restore</SuperButton>
      </div>


      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr/>
    </div>
  )
}

export default HW6
