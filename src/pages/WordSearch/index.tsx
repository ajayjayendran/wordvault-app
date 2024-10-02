import { SearchInput } from "./components/SearchInput";
import { WordMeaning } from "./components/WordMeaning";
import { WordPhonetics } from "./components/WordPhonetics";
import { useEffect, useState } from "react";
import { meanings, phonetics } from "../../types/Dictionary.type";
import styles from "./WordSearch.module.css";
import { useFetchWord } from "../../hooks/useFetchWord";
import { getRecentSearches } from "../../db/recentSearches";
import { RecentSearch } from "../../db/dexieDb";

export const WordSearch = () => {
  const [searchWord, setSearchWord] = useState("");
  const [recentWords, setRecentWords] = useState<RecentSearch[]>();

  const { data, refetch } = useFetchWord(searchWord);

  const getRecentWords = async () => {
    const response = await getRecentSearches();
    setRecentWords(response);
  };

  useEffect(() => {
    if (searchWord) {
      refetch();
      getRecentWords();
    }
  }, [searchWord, refetch]);

  useEffect(() => {
    getRecentWords();
  }, []);

  return (
    <div>
      <SearchInput
        searchWord={searchWord}
        fetchResult={(value: string) => {
          setSearchWord(value);
        }}
      />
      {recentWords &&
        recentWords.length > 0 &&
        (data?.length === 0 || !data) && (
          <div className={styles.recentContainer}>
            <div className={styles.title}>Recent Searches</div>
            <div className={styles.recentList}>
              {recentWords.map((item) => {
                return (
                  <div
                    onClick={() => {
                      setSearchWord(item.word);
                    }}
                    className={styles.recentWord}
                  >
                    {item.word}
                  </div>
                );
              })}
            </div>
          </div>
        )}
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
