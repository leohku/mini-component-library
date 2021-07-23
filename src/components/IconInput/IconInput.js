import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const [ text, setText ] = React.useState('');

  const STYLES = {
    small: {
      wrapper: {
        '--border-thickness': 1 + 'px',
        '--padding': '4px 0',
        '--width': width + 'px',
      },
      icon: {
        '--size': (16 / 16) + 'rem',
        '--stroke-width': 1 + 'px',
      },
      input: {
        '--margin-left': 8 + 'px',
        '--font-size': (14 / 16) + 'rem',
        '--line-height': (16 / 16) + 'rem',
        '--width': `calc(${width}px - ${16 / 16}rem - 8px)`,
      }
    },
    large: {
      wrapper: {
        '--border-thickness': 2 + 'px',
        '--padding': '6px 0',
        '--width': width + 'px',
      },
      icon: {
        '--size': (24 / 16) + 'rem',
        '--stroke-width': 2 + 'px',
      },
      input: {
        '--margin-left': 12 + 'px',
        '--font-size': (18 / 16) + 'rem',
        '--line-height': (24 / 16) + 'rem',
        '--width': `calc(${width}px - ${24 / 16}rem - 12px)`,
      }
    }
  }

  const style = STYLES[size];

  return (
    <Wrapper style={style['wrapper']}>
      <IconWrapper style={style['icon']}>
        <Icon id={icon} size={style['icon']['--size']} strokeWidth={style['icon']['--stroke-width']} />
      </IconWrapper>
      <Input
        style={style['input']}
        placeholder={placeholder}
        value={text}
        onChange={ev => setText(ev.target.value)}
        />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: inline-block;
  padding: var(--padding);
  width: var(--width);
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  cursor: text;
  isolation: isolate;

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: var(--size);
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const Input = styled.input.attrs(props => ({
    type: 'text'
}))`
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-weight: 700;
  color: ${COLORS.gray700};
  width: var(--width);
  margin-left: var(--margin-left);
  font-size: var(--font-size);
  line-height: var(--line-height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  
  ${Wrapper}:hover & {
    color: ${COLORS.black};
    ::placeholder {
      color: ${COLORS.black};
    }
  }
`;

export default IconInput;
