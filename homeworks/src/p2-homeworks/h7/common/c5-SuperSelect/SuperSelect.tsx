import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {findAllByLabelText} from "@testing-library/react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange,
    onChangeOption,
    value,
    ...restProps
  }
) => {
  const mappedOptions: any[] = options ? options.map((o, i) =>
    <option key={value + '-' + i}
            value={value}
    >{o}</option>
  ) : []// map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
    onChange && onChange(e)
    // onChange, onChangeOption
  }

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
