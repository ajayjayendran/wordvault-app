import Dexie, { Table } from "dexie";
import { Dictionary } from "../types/Dictionary.type";

export interface WordCache {
  word: string;
  response: Dictionary[];
  timestamp: number;
}

export interface RecentSearch {
  word: string;
  timestamp: number;
}

class DictionaryDexie extends Dexie {
  // Define tables
  wordCache!: Table<WordCache, string>;
  recentSearches!: Table<RecentSearch, string>;

  constructor() {
    super("DictionaryDatabase");
    this.version(1).stores({
      wordCache: "word, response, timestamp", // Word cache for dictionary responses
      recentSearches: "word, timestamp", // Store recent searches
    });
  }
}

export const db = new DictionaryDexie();
