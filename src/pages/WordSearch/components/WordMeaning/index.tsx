import { meanings } from "../../../../types/Dictionary.type";
import styles from "./WordMeaning.module.css";

interface WordMeaningProps {
  meanings: meanings;
}

export const WordMeaning = ({ meanings }: WordMeaningProps) => {
  return (
    <div className={styles.wordMeaningContainer}>
      <div className={styles.partOfSpeech}>{meanings.partOfSpeech}</div>

      <div className={styles.meaning}>Meaning</div>

      {meanings.definitions.map((definitions) => {
        return (
          <ul>
            <li>{definitions.definition}</li>
          </ul>
        );
      })}
    </div>
  );
};
