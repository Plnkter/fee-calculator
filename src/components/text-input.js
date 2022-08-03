import React from "react";

const TextInput = ({ id, value, handleChange, placeholder, label, type, min, max, ...rest }) => {
    return (
        <div className={`transition duration-150 ease-in-out focus-within:border-primary`} >
            <label hidden
                htmlFor={id}
                className={`text-xs text-primary font-light placeholder-gray-400 px-2 pt-1.5`}
            >
                {label}
            </label>
            <input
                type={type}
                className={`border border-slate-200 focus:border-indigo-400 w-full h-full px-2 py-3 text-primary outline-none font-light rounded`}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={e => handleChange(e.target.value)}
                min={min}
                max={max}
                {...rest}
                //onBlur={() => console.log()}

            />
        </div>
    );
};

export default TextInput;