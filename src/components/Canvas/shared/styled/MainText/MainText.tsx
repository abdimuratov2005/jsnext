import styled from "styled-components";
import { memo, ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
}

const StyledMainText = styled.p<TextProps> `
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  width: 50%;
  letter-spacing: 4px;
  line-height: 1.2;
`

const MainText = memo<TextProps>((props) => {
  const { children, ...rest } = props;
  return (
    <StyledMainText {...rest}>
      {children}
    </StyledMainText>
  )
});

MainText.displayName = "MainTextMainText"

export default MainText;