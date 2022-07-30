import * as React from 'react';
import { IVocab } from 'types/vocab';
import { Skeleton, Typography } from 'components/atoms';
import { Button, SplitInput } from 'components/molecules';
import styled from '@emotion/styled';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Container, ContainerProps } from '@mui/material';

interface SpellingCardProps
    extends Omit<ContainerProps, 'vocab'>{
    vocab: IVocab;
    loading?: boolean;
    onNext: (correct: boolean) => void;
}

const StyledContainer = styled(Container)`
    text-align: center;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AnswerWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SpellingCard: React.FC<SpellingCardProps> = ({
  vocab, loading, onNext, ...rest
}) => {
  const [correct, setCorrect] = React.useState<boolean | null>(null);
  const methods = useForm<{answer: string[]}>({ defaultValues: { answer: undefined } });
  const {
    reset, handleSubmit, formState: { isSubmitSuccessful },
  } = methods;
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);
  const nextButtonRef = React.useRef<HTMLButtonElement>(null);

  const checkAnswer: SubmitHandler<{answer: string[]}> = ({ answer }) => {
    const correct = answer.join('').toLowerCase() === vocab.word.toLowerCase();
    if (correct) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    reset(
      { answer: vocab.word.split('') },
      {
        keepValues: false,
        keepErrors: false,
        keepIsSubmitted: false,
      },
    );
  };

  const handleNext = () => {
    if (correct === null) return;
    reset(
      { answer: undefined },
      {
        keepValues: false,
        keepErrors: false,
        keepIsSubmitted: false,
      },
    );
    setCorrect(null);
    onNext(correct);
  };

  React.useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (correct !== null) {
          nextButtonRef?.current?.click();
        } else {
          submitButtonRef?.current?.click();
        }
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [correct]);
  return (
    <FormProvider {...methods}>
      <StyledContainer disableGutters {...rest}>
        <QuestionWrapper>
          {
            !loading
              ? (
                <>
                  <Typography variant="h3">
                    {vocab.translation}
                  </Typography>
                  <Typography variant="h5">
                    {vocab.partOfSpeech}
                  </Typography>
                </>
              )
              : <Skeleton type="vocab" />
        }
        </QuestionWrapper>
        {
            !loading
            && (
            <AnswerWrapper>
              <SplitInput
                size={vocab.word.length}
                name="answer"
                color={correct === null
                  ? 'primary' : correct
                    ? 'success' : 'error'}
                disabled={isSubmitSuccessful}
                required
              />
            </AnswerWrapper>
            )

        }
        {
            correct !== null
              ? (
                <Button
                  variant="outlined"
                  type="button"
                  onClick={handleNext}
                  disabled={loading}
                  endIcon={<ArrowForwardRoundedIcon />}
                  ref={nextButtonRef}
                >
                  Next
                </Button>
              )
              : (
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit(checkAnswer)}
                  disabled={loading}
                  ref={submitButtonRef}
                >
                  Submit
                </Button>
              )
        }
      </StyledContainer>
    </FormProvider>
  );
};

export default SpellingCard;
