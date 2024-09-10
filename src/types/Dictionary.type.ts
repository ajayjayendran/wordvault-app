export type definitions = {
  definition: string;
  antonyms: string[];
  example: string;
  synonyms: string[];
};

export type license = {
  name: string;
  url: string;
};

export type phonetics = {
  audio: string;
  sourceUrl: string;
  license: license;
  text: string;
};

export type meanings = {
  partOfSpeech: string;
  definitions: definitions[];
  antonyms: string[];
  example: string;
  synonyms: string[];
};

export type Dictionary = {
  license: license;
  meanings: meanings[];
  phonetic: string;
  phonetics: phonetics[];
  sourceUrls: string[];
  word: string;
};
