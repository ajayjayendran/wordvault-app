import { useState } from "react";
import { CloseIcon } from "../../assets/icons";
import styles from "./Input.module.css";

interface InputProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Input = ({ onChange, placeholder = "" }: InputProps) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValue(event.target.value);
      onChange(event.target.value);
    }
  };

  const onClear = () => {
    if (value) {
      setValue("");
      onChange("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        value={value}
        className={styles.defaultInput}
        onChange={handleOnChange}
      />
      <CloseIcon className={styles.icon} onClick={onClear} />
    </div>
  );
};
