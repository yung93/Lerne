import * as React from 'react';
import { useController, UseControllerProps, useFormContext } from 'react-hook-form';
import {
  Avatar, Grid, IconButton, styled,
} from '@mui/material';
import { common } from '@mui/material/colors';
import AvatarsList from '../../../assets/images/avatars.json';

interface AvatarPickerInputProps<FieldValue extends Record<string, any>> extends UseControllerProps<FieldValue>{
    options?: string[];
    required?: boolean;
}

const AvatarButton = styled(IconButton)<{selected: boolean}>`
    ${({ theme, selected }) => (selected ? `
    border: 3px solid ${theme.palette.primary.main};
  ` : '')}
`;
const AvatarPickerInput = <FieldValue extends Record<string, any>>({
  options = AvatarsList, name, required, rules, ...rest
}: AvatarPickerInputProps<FieldValue>) => {
  const { control } = useFormContext<FieldValue>();

  const { field: { onChange, value } } = useController({
    name, control, rules: { required, ...rules }, ...rest,
  });
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      {options.map((url, index) => {
        const isSelected = value === url;
        return (
          <AvatarButton onClick={() => { onChange(url); }} selected={isSelected} key={`avatar_${index}`}>
            <Avatar src={url} key={`avatar_${index}`} sx={{ bgcolor: common.white, padding: 1 }} />
          </AvatarButton>
        );
      })}
    </Grid>
  );
};

export default AvatarPickerInput;
