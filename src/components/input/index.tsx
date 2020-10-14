import React from "react";
import "./styles.scss";

interface InputProps {
  id: string;
  label: string;
  sublabel?: string;
  typeTextarea?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  sublabel,
  typeTextarea = false,
  children,
}) => {
  return (
    <div className="input-block">
      <label htmlFor={id}>
        {label} {sublabel && <span>{sublabel}</span>}
      </label>
      {children ? (
        children
      ) : typeTextarea ? (
        <textarea id={id} maxLength={300} />
      ) : (
        <input id={id} />
      )}
    </div>
  );
};

export default Input;
