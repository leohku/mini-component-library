import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  value = value ? value : '';
  // const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Arrow>
        <Icon id='chevron-down' strokeWidth={2} />
      </Arrow>
      <Menu value={value} onChange={onChange} aria-label={label}>
        {children}
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: max-content;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
`;

const Menu = styled.select`
  display: inline-block;
  background: transparent;
  position: relative;
  padding: 12px 52px 12px 16px;
  border: none;
  width: 100%;
  outline-offset: -2px;

  /* Typography */
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 18.75px;
  color: ${COLORS.gray700};

  /* Remove the default arrow icon */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const Arrow = styled.div.attrs({'aria-hidden': true})`
  position: absolute;
  right: 0;
  top: 0;
  width: 52px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default Select;
