import { useState } from "react";
import { CloseIcon, SearchIcon } from "../../assets/icons";
import styles from "./Input.module.css";

interface InputProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Input = ({ onChange, placeholder = "" }: InputProps) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const onClear = () => {
    setValue("");
    onChange("");
  };

  return (
    <div className={styles.container}>
      <SearchIcon />
      <input
        placeholder={placeholder}
        value={value}
        className={styles.defaultInput}
        onChange={handleOnChange}
      />
      {value && <CloseIcon className={styles.icon} onClick={onClear} />}
    </div>
  );
};
