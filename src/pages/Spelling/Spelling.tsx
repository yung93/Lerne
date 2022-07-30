import * as React from 'react';
import { Container as MUIContainer } from '@mui/material';
import styled from '@emotion/styled';
import { IVocab } from 'types/vocab';

import VocabList from 'assets/data/vocabs.json';
import { shuffleArray } from 'utils';
import { ResultModal, SpellingCard } from 'components/organisms';
import { Typography } from 'components/atoms';

const vocabs = (VocabList as IVocab[]);
const NO_OF_QUESTIONS = Math.min(vocabs.length, 10);

const Container = styled(MUIContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CounterWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Spelling: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [records, setRecords] = React.useState<boolean[]>(Array(NO_OF_QUESTIONS).fill(false));
  const [resultModalOpen, setResultModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (!loaded) {
      shuffleArray(vocabs);
      setRecords(Array(NO_OF_QUESTIONS).fill(false));
      setIndex(0);
      setLoaded(vocabs && vocabs.length > 0);
    }
  }, [loaded]);

  const nextQuestion = React.useCallback((correct: boolean) => {
    setRecords(((prevState) => {
      prevState[index] = correct;
      return prevState;
    }));
    if (index < NO_OF_QUESTIONS - 1) {
      setIndex(index + 1);
    } else {
      setResultModalOpen(true);
    }
  }, [index]);

  const handelModalClose = () => {
    setResultModalOpen(false);
    setLoaded(false);
  };

  return (
    <Container>
      <CounterWrapper>
        <Typography variant="h5">{`${index + 1} / ${NO_OF_QUESTIONS}`}</Typography>
      </CounterWrapper>
      <SpellingCard
        vocab={vocabs[index]}
        loading={!loaded}
        onNext={nextQuestion}
      />
      <ResultModal
        open={resultModalOpen}
        onClose={handelModalClose}
        vocabs={
          records.map((record, index) => ({
            ...vocabs[index], correct: record,
          }))
        }
      />
    </Container>
  );
};

export default Spelling;
