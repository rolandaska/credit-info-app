import React from 'react';

const Input = ({
    required,
    type,
    maxLength,
    name,
    value,
    onChange,
    className,
    placeholder,
}) => {
    return (
        <div className={className}>
            <input
                type={type}
                name={name}
                required={required}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
            >
                {value}
            </input>
        </div>
    );
};

export default Input;
