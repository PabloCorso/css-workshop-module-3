/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_STYLES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZE_STYLES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <InnerWrapper>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Bar
          style={{
            "--height": styles.height + "px",
            "--width": value + "%",
          }}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--radius);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const InnerWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners of the bar to match its wrapper radius */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};

  @media (prefers-reduced-motion: no-preference) {
    transition: width 200ms ease-in-out;
  }
`;

export default ProgressBar;
