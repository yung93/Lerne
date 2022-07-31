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

export const formatTime = (timer: number) => {
  const seconds = `0${(timer % 60)}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;

  return `${minutes} : ${seconds}`;
};
