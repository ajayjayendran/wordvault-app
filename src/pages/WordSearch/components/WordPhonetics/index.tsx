import { phonetics } from "../../../../types/Dictionary.type";
import styles from "./WordPhonetics.module.css";

interface WordPhoneticsProps {
  phonetics: phonetics;
  word: string;
}

export const WordPhonetics = ({ phonetics, word }: WordPhoneticsProps) => {
  return (
    <div className={styles.phoneticsContainer}>
      <div className={styles.word}>{word}</div>
      <div className={styles.pronunciation}>{phonetics.text}</div>
    </div>
  );
};
