import React from "react";
import s from "./InputTag.module.scss";
import { InputTagProps } from "./InputTagProps";
export const InputTag = ({
  value,
  name,
  readOnly,
  comment,
  refs,
  error,
}: InputTagProps) => {
  return (
    <div className={s.container}>
      <span className={s.value}>{value}</span>
      {!comment ? (
        <input
          name={name}
          className={s.input}
          readOnly={readOnly}
          {...refs}
          style={{ border: error ? "1px solid red" : "" }}
          
        />
      ) : (
        <textarea className={s.textarea} readOnly={readOnly} {...refs} />
      )}
    </div>
  );
};
