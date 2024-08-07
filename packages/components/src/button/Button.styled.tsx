import { createStitches, createTheme } from '@stitches/react';

// Default colors
const { styled } = createStitches({
  theme: {
    colors: {
      primaryBackground: '#3A76F8',
      hovered: '#346ADF',
      focused: '#2953AE',
      subtleHovered: '#EDEEF1',
      primaryText: '#F8F8F9',
      text: '#323E4D',
      disabled: '#EDEEF1',
      disabledText: '#6C798B',
      border: '#DADEE2',
    },
  },
});

// Dark theme button colours
export const darkTheme = createTheme({
  colors: {
    text: '#EEF0F2',
    disabled: '#323E4D',
    disabledText: '#9BA5B1',
    border: '#404F63',
    subtleHovered: '#323E4D',
  },
});

export const ButtonContainer = styled('button', {
  variants: {
    type: {
      primary: {
        borderRadius: 4,
        borderWidth: 0,
        backgroundColor: '$primaryBackground',
        color: '$primaryText',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '$hovered',
        },
      },
      ghost: {
        color: '$text',
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderColor: '$border',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '$subtleHovered',
        },
      },
      text: {
        color: '$text',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRadius: 4,
        '&:hover': {
          backgroundColor: '$subtleHovered',
        },
      },
    },
    disabled: {
      true: {
        borderRadius: 4,
        borderWidth: 0,
        backgroundColor: '$disabled',
        color: '$disabledText',
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: '$disabled',
        },
      },
    },
  },

  // If a button is disabled, this takes priority over if its type is ghost or text
  compoundVariants: [
    {
      type: 'ghost',
      disabled: true,
      css: {
        borderRadius: 4,
        borderWidth: 0,
        backgroundColor: '$disabled',
        color: '$disabledText',
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: '$disabled',
        },
      },
    },
    {
      type: 'text',
      disabled: true,
      css: {
        borderRadius: 4,
        borderWidth: 0,
        backgroundColor: '$disabled',
        color: '$disabledText',
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: '$disabled',
        },
      },
    },
  ],

  defaultVariants: {
    type: 'primary',
    disabled: false,
  },

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: 16,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 12,
  paddingRight: 12,
  height: 44,
  gap: 6,
});

export const LabelWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
});

export const IconWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignContent: 'center',
  width: 'min-content',
});
