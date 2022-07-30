import * as React from 'react';
import { Modal, ModalProps, Typography } from 'components/atoms';
import {
  Container, Grid, styled,
} from '@mui/material';
import { CheckRounded, CloseRounded } from '@mui/icons-material';
import { getPOSAbbr } from 'utils';
import { IVocab } from 'types/vocab';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';

interface ResultModalProps extends Omit<ModalProps, 'children'> {
    vocabs: (IVocab & { correct: boolean})[];
}

const StyledContainer = styled(Container)`
  position: relative;
`;

const ResultModal: React.FC<ResultModalProps> = ({ vocabs, onClose, ...rest }) => {
  const correctCount = vocabs.filter((v) => v.correct).length;
  const incorrectCount = vocabs.length - correctCount;
  return (
    <Modal
      onClose={onClose}
      header={{
        icon: <PlaylistAddCheckRoundedIcon />,
        title: 'Result',
      }}
      {...rest}
    >
      <StyledContainer>
        <Grid container direction="column" mb={2} mt={2}>
          <Grid container item alignItems="center" columnGap={2} alignSelf="center" mb={2}>
            <Grid item container alignItems="center" justifyContent="center" xs columnGap={1}>
              <CheckRounded fontSize="medium" color="success" />
              <Typography variant="h5" color="success.main">
                {correctCount}
              </Typography>
            </Grid>
            <Grid item container alignItems="center" justifyContent="center" xs columnGap={1}>
              <CloseRounded fontSize="medium" color="error" />
              <Typography variant="h5" color="error">
                {incorrectCount}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item rowGap={1}>
            {
                vocabs.map(({
                  word, translation, partOfSpeech, correct,
                }, index) => (
                  <Grid key={`${word}_${index}`} container item columnGap={2}>
                    <Grid item xs={2}>
                      <Typography variant="h4" textAlign="right">{index + 1}</Typography>
                    </Grid>
                    <Grid item container direction="column" xs="auto">
                      <Typography variant="h5" color={!correct ? 'error' : 'success.main'}>{word}</Typography>
                      <Grid item container alignItems="center" columnGap={1}>
                        <Typography variant="body1">{getPOSAbbr(partOfSpeech)}</Typography>
                        <Typography variant="body1">{translation}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))
            }

          </Grid>
        </Grid>
      </StyledContainer>
    </Modal>
  );
};

export default ResultModal;
