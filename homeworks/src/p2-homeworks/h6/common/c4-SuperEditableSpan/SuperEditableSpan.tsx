import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState, KeyboardEvent} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import styleInput from "../../../h4/common/c1-SuperInputText/SuperInputText.module.css";
import DoubleClick from "../../img/double-arrows.svg"
import style from "../../css/superEditableSpan.module.css"

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string

  spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
  {
    autoFocus, // игнорировать изменение этого пропса
    onBlur,
    onEnter,
    spanProps,

    ...restProps// все остальные пропсы попадут в объект restProps
  }
) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

  const onEnterCallback = () => {
    setEditMode(false)
    // setEditMode() // выключить editMode при нажатии Enter +++
    onEnter && onEnter()
  }
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(false)
    // setEditMode() // выключить editMode при нажатии за пределами инпута ++++

    onBlur && onBlur(e)
  }
  const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setEditMode(true)
    // setEditMode() // включить editMode при двойном клике ++++

    onDoubleClick && onDoubleClick(e)
  }

  const spanClassName = `${'сделать красивый стиль для спана'} ${className}`

  return (
    <span style={{marginLeft: 20}} className={style.span}>
      <img style={{width:22, height:22}} src={DoubleClick} alt="DoubleClick"/>
      <div className={style.enterText}>
        {editMode
          ? (
            <SuperInputText
              className={styleInput.greetingInput}
              placeholder={"enter text..."}
              autoFocus // пропсу с булевым значением не обязательно указывать true
              onBlur={onBlurCallback}
              onEnter={onEnterCallback}

              {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
          ) : (
            <span onDoubleClick={onDoubleClickCallBack}
                  className={spanClassName}
                  {...restSpanProps}>

            {/*если нет захардкодженного текста для спана, то значение инпута*/}
              {children || restProps.value}
                    </span>
          )
        }
      </div>
    </span>
  )
}

export default SuperEditableSpan
