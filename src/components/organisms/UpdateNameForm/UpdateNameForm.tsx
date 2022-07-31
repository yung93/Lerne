import * as React from 'react';
import { AvatarPickerInput, Button } from 'components/molecules';
import styled from '@emotion/styled';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import {
  Container, ContainerProps, Grid, TextField,
} from '@mui/material';
import { useUser } from 'contexts/UserContext';
import AvatarsList from 'assets/images/avatars.json';

interface SpellingCardProps extends ContainerProps {
    onSave: (name: string, avatar: string) => void;
}

const StyledContainer = styled(Container)`
    text-align: center;
`;

const UpdateNameForm: React.FC<SpellingCardProps> = ({
  onSave, ...rest
}) => {
  const { user } = useUser();
  const methods = useForm<{name: string, avatar: string}>({ defaultValues: { name: user?.name, avatar: user?.avatar || AvatarsList[0] } });
  const {
    handleSubmit,
    register,
  } = methods;
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitButtonRef?.current?.click();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const handleSave: SubmitHandler<{ name: string, avatar: string}> = ({ name, avatar }) => {
    onSave(name, avatar);
  };

  return (
    <FormProvider {...methods}>
      <StyledContainer disableGutters {...rest}>
        <form onSubmit={handleSubmit(handleSave)}>
          <Grid container direction="column" rowGap={2}>
            <AvatarPickerInput name="avatar" />
            <Grid container item alignItems="center" columnGap={1} mb={2}>
              <Grid item xs>
                <TextField
                  required
                  id="filled-required"
                  label="Name"
                  variant="filled"
                  autoFocus
                  fullWidth
                  {...register('name')}
                />
              </Grid>
              <Button size="small" variant="contained" type="submit" ref={submitButtonRef}>Save</Button>
            </Grid>
          </Grid>

        </form>
      </StyledContainer>
    </FormProvider>
  );
};

export default UpdateNameForm;
