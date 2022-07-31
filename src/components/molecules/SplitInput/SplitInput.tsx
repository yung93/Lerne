import * as React from 'react';
import {
  UseControllerProps, useController, useFormContext,
} from 'react-hook-form';
import { Input, styled } from '@mui/material';
import { ChangeEvent } from 'react';

interface SplitInputProps<FieldValue extends Record<string, any>> extends UseControllerProps<FieldValue>{
    size: number;
    required?: boolean;
    color?: 'error' | 'success' | 'primary';
    disabled?: boolean;
}

const InputWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const StyledInput = styled(Input)<{color: 'error' | 'success' | 'primary'}>`
  margin-right: 5px;
  margin-left: 5px;
  font-size: 40px;
  max-width: 50px;
  color: ${({ theme, color }) => theme.palette[color].main};
  
  & input {
    text-align: center;
    &.Mui-disabled {
      color: ${({ theme, color }) => theme.palette[color].main};
      -webkit-text-fill-color: ${({ theme, color }) => theme.palette[color].main};
    }
  }
  &.Mui-disabled {
    color: ${({ theme, color }) => theme.palette[color].main};
  }
`;

const SplitInput = <FieldValue extends Record<string, any>>({
  size, required, color = 'primary', disabled, name, rules, ...rest
}: SplitInputProps<FieldValue>) => {
  const inputsRef = React.useRef<HTMLInputElement[]>([]);
  const { control } = useFormContext<FieldValue>();
  const { field: { onChange, value, ref }, fieldState: { error } } = useController({
    name, control, rules: { required, ...rules }, ...rest,
  });

  const handleOnValueChange:
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, onChange: (...event: any[]) => void, currValue: string[]) => void = (e, index, onChange, currValue) => {
        const temp = currValue || Array(size).fill('');
        temp[index] = e.target.value;
        onChange(temp);
        if (e.target.value.length >= 1 && index < size - 1) {
          inputsRef.current[index + 1].focus();
        }
        if (e.target.value.length <= 0 && index > 0) {
          inputsRef.current[index - 1].focus();
        }
      };

  const handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, onChange: (...event: any[]) => void, currValue: string[]) => void = (e, index) => {
    if (e.key === 'Backspace' && e.target.value.length <= 0 && index > 0) {
      inputsRef.current[index - 1].focus();
      e.preventDefault();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1].focus();
      e.preventDefault();
    }
    if (e.key === 'ArrowRight' && index < size - 1) {
      inputsRef.current[index + 1].focus();
      e.preventDefault();
    }
    if (e.key === e.target.value && index < size - 1) {
      inputsRef.current[index + 1].focus();
      e.preventDefault();
    }
  };

  React.useEffect(() => {
    if (!disabled) {
      inputsRef.current[0].focus();
    }
  }, [disabled]);

  return (
    <InputWrapper>
      {
          Array(size).fill('').map((_, index) => (
            <StyledInput
              inputRef={
                (e: HTMLInputElement) => {
                  inputsRef.current[index] = e;
                  if (index === 0) {
                    ref(e);
                  }
                }
              }
              maxRows={1}
              multiline={false}
              key={`${name}_${index}`}
              inputProps={{
                maxLength: 1,
                autoCapitalize: 'none',
                autoComplete: 'none',
              }}
              onChange={(e) => {
                e.preventDefault();
                handleOnValueChange(e, index, onChange, value);
              }}
              onFocus={(e) => {
                e.target.select();
              }}
              onKeyDown={(e) => {
                handleKeyPress(e, index, onChange, value);
              }}
              color={error ? 'error' : color}
              disabled={disabled}
              value={value ? value[index] : ''}
              autoFocus={index === 0}
            />
          ))
      }
    </InputWrapper>
  );
};

export default SplitInput;
