import { db } from "./dexieDb";

export const addRecentSearch = async (word: string) => {
  await db.transaction("rw", db.recentSearches, async () => {
    const timestamp = Date.now();

    // Add word to recent searches
    await db.recentSearches.put({ word, timestamp });

    // Limit recent searches to 10
    const allSearches = await db.recentSearches.toArray();
    if (allSearches.length > 10) {
      const oldest = allSearches
        .sort((a, b) => a.timestamp - b.timestamp)
        .slice(0, 1);
      await db.recentSearches.delete(oldest[0].word);
    }
  });
};

export const getRecentSearches = async () => {
  return await db.recentSearches
    .orderBy("timestamp")
    .reverse()
    .limit(10)
    .toArray();
};
