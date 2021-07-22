/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  /* Sanitize value */
  value = value > 100 ? 100 : value < 0 ? 0 : value;

  const barStyles = {
    width: value + '%',
    borderRadius: value === 100 && 4 + 'px'
  }
  
  /* Structure value first because more concerned about dynamic behavior */
  const styles = {
    small: {
      wrapper: {
        height: 8 + 'px',
        borderRadius: 4 + 'px'
      },
      bar: barStyles
    },
    medium: {
      wrapper: {
        height: 12 + 'px',
        borderRadius: 4 + 'px',
      },
      bar: barStyles
    },
    large: {
      wrapper: {
        height: 24 + 'px',
        borderRadius: 8 + 'px',
        padding: 4 + 'px' 
      },
      bar: barStyles
    }
  }

  /* This is a bit redundant if we use Typescript */
  if (!styles[size]) throw new Error(`Unknown size passed to ProgressBar ${size}`);

  return (
    <Wrapper style={styles[size]["wrapper"]}>
      <BarWrapper>
        <Bar style={styles[size]["bar"]} value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`

const BarWrapper = styled.div.attrs({
  'aria-hidden': 'true'
})`
  border-radius: 4px;
  height: 100%;
  /* Trim off hard corners of Bar when near-full */
  overflow: hidden;
`

const Bar = styled.div.attrs(props => ({
  role: 'progressbar',
  'aria-valuemin': 0,
  'aria-valuemax': 100,
  'aria-valuenow': props.value
}))`
  height: 100%;
  background: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

export default ProgressBar;
