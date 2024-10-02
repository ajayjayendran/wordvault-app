import { useEffect, useState } from "react";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  fetchResult: (value: string) => void;
  searchWord: string;
}

export const SearchInput = ({ fetchResult, searchWord }: SearchInputProps) => {
  const [word, setWord] = useState(searchWord);
  const onInputChange = (value: string) => {
    setWord(value);
  };

  useEffect(() => {
    setWord(searchWord);
  }, [searchWord]);

  return (
    <div className={styles.searchInput}>
      <Input
        defaultValue={word}
        onChange={onInputChange}
        placeholder="Start typing..."
      />
      <div className={styles.buttonContainer}>
        <Button onClick={() => fetchResult(word)}>Search</Button>
      </div>
    </div>
  );
};
