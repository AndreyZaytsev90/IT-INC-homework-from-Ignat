import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styleBtn from "../h4/common/c2-SuperButton/SuperButton.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>()
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    clearInterval(timerId)

  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = date && date.toLocaleTimeString() || <br/> // fix with date
  const stringDate = date && date.toLocaleDateString() || <br/> // fix with date

  return (
    <div>
      <div style={{fontSize: "large", fontWeight: "bolder"}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {stringTime}
      </div>

      <div style={{marginTop: 20, fontSize: "large", fontWeight: "bolder"}}>
        {show ? stringDate : <br/>}
      </div>

      <div style={{paddingTop: 20, marginLeft: -25}}>
        <SuperButton className={styleBtn.buttonLow} onClick={start}>start</SuperButton>
        <SuperButton className={styleBtn.buttonHigh} onClick={stop}>stop</SuperButton>
      </div>
    </div>
  )
}

export default Clock
