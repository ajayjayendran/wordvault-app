import { useQuery } from "@tanstack/react-query";
import { SearchInput } from "./components/SearchInput";
import { WordMeaning } from "./components/WordMeaning";
import { WordPhonetics } from "./components/WordPhonetics";
import { fetchWordDefinition } from "../../api/Dictionary.service";
import { useState } from "react";
import { Dictionary, meanings, phonetics } from "../../types/Dictionary.type";

export const WordSearch = () => {
  const [searchWord, setSearchWord] = useState("");

  const { isPending, error, data } = useQuery<Dictionary[]>({
    queryKey: ["searchWord"],
    queryFn: () => fetchWordDefinition(searchWord),
    enabled: !!searchWord,
  });

  console.log(data);

  return (
    <div>
      <SearchInput
        fetchResult={(value: string) => {
          setSearchWord(value);
        }}
      />
      {data?.map((dictionary: Dictionary, index) => {
        return (
          <div key={index}>
            {dictionary.phonetics.map((phonetics: phonetics) => {
              return (
                <WordPhonetics phonetics={phonetics} word={dictionary.word} />
              );
            })}

            {dictionary.meanings.map((meanings: meanings) => {
              return <WordMeaning meanings={meanings} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
