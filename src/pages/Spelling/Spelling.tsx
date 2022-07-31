import * as React from 'react';
import { Container as MUIContainer, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { IVocab } from 'types/vocab';

import VocabList from 'assets/data/vocabs.json';
import { shuffleArray } from 'utils';
import { ResultModal, SpellingCard, Timer } from 'components/organisms';
import { Typography } from 'components/atoms';
import { useSocket } from 'contexts/SocketContext';
import { TimerHandle } from 'components/organisms/Timer';
import { useNavigate } from 'react-router-dom';

const vocabs = (VocabList as IVocab[]);
const NO_OF_QUESTIONS = Math.min(vocabs.length, 5);

const Container = styled(MUIContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const CounterWrapper = styled(Grid)`
`;

const Spelling: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [records, setRecords] = React.useState<boolean[]>(Array(NO_OF_QUESTIONS).fill(false));
  const [resultModalOpen, setResultModalOpen] = React.useState(false);
  const { updateScore } = useSocket();
  const timerRef = React.useRef<TimerHandle>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loaded) {
      shuffleArray(vocabs);
      setRecords(Array(NO_OF_QUESTIONS).fill(false));
      setIndex(0);
      setLoaded(vocabs && vocabs.length > 0);
    } else {
      timerRef?.current?.start();
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
      timerRef?.current?.pause();
      setResultModalOpen(true);
    }
  }, [index]);

  const handelModalClose = () => {
    setResultModalOpen(false);
    setLoaded(false);
    timerRef?.current?.reset();
  };

  const handleUpdateScore = (name: string, avatar: string) => {
    updateScore(
      name,
      avatar,
      records.filter((r) => r).length,
      timerRef?.current?.time || 0,
    );
    handelModalClose();
    navigate('/leaderboard');
  };

  return (
    <Container>
      <CounterWrapper container direction="column" alignItems="center" justifyContent="center">
        <Timer ref={timerRef} />
        <Typography variant="h5">
          {`${index + 1} / ${NO_OF_QUESTIONS}`}
        </Typography>
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
        time={timerRef?.current?.time || 0}
        onSave={handleUpdateScore}
      />
    </Container>
  );
};

export default Spelling;
