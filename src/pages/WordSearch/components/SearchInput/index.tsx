import { useState } from "react";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  fetchResult: (value: string) => void;
}

export const SearchInput = ({ fetchResult }: SearchInputProps) => {
  const [word, setWord] = useState("");
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setWord(event.target.value);
  };
  return (
    <div className={styles.searchInput}>
      <Input onChange={onInputChange} placeholder="Start typing..." />
      <div className={styles.buttonContainer}>
        <Button onClick={() => fetchResult(word)}>Done !</Button>
      </div>
    </div>
  );
};
