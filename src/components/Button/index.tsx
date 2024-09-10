import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={styles.defaultInput} onClick={onClick}>
      {children}
    </button>
  );
};
