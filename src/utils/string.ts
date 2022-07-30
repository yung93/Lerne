import { PartOfSpeech } from 'types/vocab';

export const getPOSAbbr: (partOfSpeech: PartOfSpeech) => string = (partOfSpeech) => {
  switch (partOfSpeech) {
    case 'verb':
      return 'v.';
    case 'noun':
      return 'n.';
    default:
      return partOfSpeech;
  }
};
