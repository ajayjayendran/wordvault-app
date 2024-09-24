import { SearchInput } from "./components/SearchInput";
import { WordMeaning } from "./components/WordMeaning";
import { WordPhonetics } from "./components/WordPhonetics";
import { useEffect, useState } from "react";
import { meanings, phonetics } from "../../types/Dictionary.type";
import styles from "./WordSearch.module.css";
import { useFetchWord } from "../../hooks/useFetchWord";

export const WordSearch = () => {
  const [searchWord, setSearchWord] = useState("");

  const { data, refetch } = useFetchWord(searchWord);

  useEffect(() => {
    if (searchWord) {
      refetch();
    }
  }, [searchWord, refetch]);

  return (
    <div>
      <SearchInput
        fetchResult={(value: string) => {
          setSearchWord(value);
        }}
      />
      {data && data.length > 0 && (
        <div className={styles.resultContainer}>
          {data[0].phonetics.map((phonetics: phonetics) => {
            return (
              <>
                {phonetics?.license?.name &&
                  phonetics.text &&
                  phonetics?.audio && (
                    <WordPhonetics phonetics={phonetics} word={data[0].word} />
                  )}
              </>
            );
          })}

          {data[0].meanings.map((meanings: meanings) => {
            return <WordMeaning meanings={meanings} />;
          })}
        </div>
      )}
    </div>
  );
};
