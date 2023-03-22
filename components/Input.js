import React from 'react'
import { Field } from 'formik'

export default function Input(props) {
    const { name, label, placeholder, isRequired, ...rest } = props
    return (
        <div className="flex flex-col mb-4 font-normal">
            <label className="text-text_color text-[13px] pb-[5px]" htmlFor={name} >{label}
                {isRequired && <span className="text-red-500"> * </span>}
            </label>
            <Field
                className="border-[1px] font-input outline-none focus:border-[#79589F] focus:shadow-[0_0_0_2px_rgba(121,88,159,0.2)] border-[#d3d3d3] shadow-[0_0_2px_rgba(121,88,159,0)] p-2 rounded-[4px] text-text_color"
                id={name} name={name} placeholder={placeholder} {...rest} />
        </div>
    )
}
