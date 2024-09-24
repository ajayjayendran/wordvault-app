import { useQuery } from "@tanstack/react-query";
import { cacheWordResponse, getCachedWordResponse } from "../db/wordCache";
import { fetchWordDefinition } from "../api/Dictionary.service";
import { addRecentSearch } from "../db/recentSearches";
import { Dictionary } from "../types/Dictionary.type";

export const useFetchWord = (word: string) => {
  return useQuery<Dictionary[]>({
    queryKey: ["searchWord", word],
    queryFn: async () => {
      // Check for cached response
      const cachedResponse = await getCachedWordResponse(word);
      if (cachedResponse) {
        return cachedResponse.response; // Return cached response if available
      }

      // If not cached, make API call
      const response = await fetchWordDefinition(word);

      console.log(response);

      // Cache the response
      await cacheWordResponse(word, response);

      addRecentSearch(word);

      return response;
    },
    enabled: !!word,
    staleTime: 0,
    retry: (_failureCount, error) => {
      if ((error as any).status === 404) {
        // Don't retry if it's a 404 error
        console.log(error);
      }
      return false;
    },
  });
};
