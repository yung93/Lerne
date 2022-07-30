import React, { useRef } from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import {
  useForm, FormProvider, SubmitHandler,
} from 'react-hook-form';
import SplitInput from './SplitInput';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: () => ({
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      getFieldState: jest.fn(),
      _names: {
        array: new Set('test'),
        mount: new Set('test'),
        unMount: new Set('test'),
        watch: new Set('test'),
        focus: 'test',
        watchAll: false,
      },
      _subjects: {
        watch: jest.fn(),
        array: jest.fn(),
        state: jest.fn(),
      },
      _getWatch: jest.fn(),
      _formValues: ['test'],
      _defaultValues: ['test'],
    },
  }),
  useSubscribe: () => ({
    r: { current: { subject: { subscribe: () => jest.fn() } } },
  }),
  useController: () => ({
    field: {
      onChange: jest.fn(),
      value: '',
      ref: jest.fn(),
      name: 'test',
    },
    fieldState: {},
  }),
}));

describe('SplitInput', () => {
  it('renders separated input fields with given size', () => {
    const SIZE = 6;
    const methods = useForm<{test: string[]}>();

    const input = render(
      <FormProvider {...methods}>
        <SplitInput size={SIZE} name="test" />
      </FormProvider>,
    ).container;
    const inputs = input.querySelectorAll('input');
    expect(inputs).toHaveLength(SIZE);
  });
});
