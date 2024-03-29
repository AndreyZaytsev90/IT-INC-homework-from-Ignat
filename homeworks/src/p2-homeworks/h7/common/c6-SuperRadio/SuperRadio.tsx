import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type,
    name,
    options,
    value,
    onChange,
    onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
    onChange && onChange(e)
  }

  const mappedOptions: any[] = options ? options.map((o, i) => (
    <label key={name + '-' + i}>
      <input
        type={'radio'}
        name={name}
        checked={value === o}
        value={o}
        onChange={onChangeCallback}
        {...restProps}
      />
      {o}
    </label>
  )) : [] // map options with key

  return (
    <>
      {mappedOptions}
    </>
  )
}

export default SuperRadio
