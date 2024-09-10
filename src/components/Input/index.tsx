import styles from "./Input.module.css";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = ({ onChange, placeholder = "" }: InputProps) => {
  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        className={styles.defaultInput}
        onChange={onChange}
      />
    </div>
  );
};
