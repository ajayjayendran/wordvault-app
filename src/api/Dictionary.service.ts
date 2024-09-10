import axiosInstance from "./axios";

const API_METHODS = {
  entries: "/api/v2/entries",
};

const LANGUAGES = {
  english: "en",
};

export const fetchWordDefinition = async (word: string) => {
  const response = await axiosInstance.get(
    `${API_METHODS.entries}/${LANGUAGES.english}/${word}`
  );
  return response.data;
};
