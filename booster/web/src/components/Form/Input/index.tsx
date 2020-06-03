import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { defaultValue, error, registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span className="error" style={{ color: '#f00' }}>{error}</span>}
    </>
  );
};

export default Input;