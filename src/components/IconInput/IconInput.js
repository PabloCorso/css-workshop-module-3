import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 24,
    iconSize: 16,
    fontSize: 14,
    borderSize: 1,
  },
  large: {
    height: 36,
    iconSize: 24,
    fontSize: 18,
    borderSize: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>
        <label htmlFor="icon-input">{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon
          id={icon}
          strokeWidth={styles.borderSize}
          size={styles.iconSize}
        />
      </IconWrapper>
      <Input
        id={"icon-input"}
        {...delegated}
        style={{
          "--width": width ? width + "px" : undefined,
          "--height": styles.height + "px",
          "--font-size": styles.fontSize / 16 + "rem",
          "--border-size": styles.borderSize + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-size) solid ${COLORS.black};
  outline-offset: 2px;
  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
