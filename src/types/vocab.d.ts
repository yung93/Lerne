export type PartOfSpeech = 'noun' | 'verb';

export interface IVocab {
    word: string;
    translation: string;
    partOfSpeech: PartOfSpeech;
}
