import { Dictionary } from "../types/Dictionary.type";
import { db } from "./dexieDb";

export const cacheWordResponse = async (
  word: string,
  response: Dictionary[]
) => {
  const timestamp = Date.now();
  await db.wordCache.put({ word, response, timestamp });
};

export const getCachedWordResponse = async (word: string) => {
  return await db.wordCache.get(word);
};
