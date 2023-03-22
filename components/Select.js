import React from 'react'
import { Field } from 'formik'

export default function Select(props) {
    const { options, name, label, isRequired, placeholder } = props;
    
    return (
        <div className="flex flex-col mb-4">
            <label className="text-text_color text-[13px] pb-1" htmlFor={name} >{label}
                {isRequired && <span className="text-red-500"> * </span>}
            </label>
            <Field
                className="border-[1px] outline-none font-input selection:font-input selection:text-text_color focus:border-[#79589F] focus:shadow-[0_0_0_2px_rgba(121,88,159,0.2)] border-[#d3d3d3] shadow-[0_0_2px_rgba(121,88,159,0)] p-2 rounded-[4px] text-text_color"
                as="select" id={name} name={name} >
                    <option className='font-input' id='hidden' hidden>{placeholder}</option>
                {options.map((item, index) =>
                    <option className="text-text_color text-[13px] font-input " value={item} key={index} >{item}</option>
                )}
            </Field>
        </div>
    )
}
