import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const [value1, setValue1] = useState(10)
  const [value2, setValue2] = useState(100)

  const changeValue = () => {
    setValue1(value1)
  }

    return(
    <div>
      <hr/>
      <h2 style={{marginLeft: 20}}>homeworks 11</h2>

      {/*should work (должно работать)*/}
      <div style={{marginLeft: 20}}>
        <span>{value1}</span>
        <SuperRange
          value={value1}
          changeValue={changeValue}
          // сделать так чтоб value1 изменялось
        />
      </div>

      <div style={{marginLeft: 20, marginTop: 5}}>
        <span>{value1}</span>
        <SuperDoubleRange
          // сделать так чтоб value1 и value2 изменялось
        />
        <span>{value2}</span>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
