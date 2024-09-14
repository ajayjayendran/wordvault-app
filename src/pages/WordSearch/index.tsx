import { useQuery } from "@tanstack/react-query";
import { SearchInput } from "./components/SearchInput";
import { WordMeaning } from "./components/WordMeaning";
import { WordPhonetics } from "./components/WordPhonetics";
import { fetchWordDefinition } from "../../api/Dictionary.service";
import { useEffect, useState } from "react";
import { Dictionary, meanings, phonetics } from "../../types/Dictionary.type";
import styles from "./WordSearch.module.css";

export const WordSearch = () => {
  const [searchWord, setSearchWord] = useState("");

  const { data, refetch } = useQuery<Dictionary[]>({
    queryKey: ["searchWord", searchWord],
    queryFn: () => fetchWordDefinition(searchWord),
    enabled: !!searchWord,
    staleTime: 0,
    retry: (_failureCount, error) => {
      if ((error as any).status === 404) {
        // Don't retry if it's a 404 error
        console.log(error);
      }
      return false;
    },
  });

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
