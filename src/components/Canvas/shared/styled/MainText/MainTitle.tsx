import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { memo, ReactNode } from "react";

interface MainTitleProps {
  children?: ReactNode;
}

const StyledMainTitle = styled.p <MainTitleProps>`
  text-transform: uppercase;
  color: #fff;
  font-size: 4rem;
  white-space: nowrap;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: .9;
  ${media.desktop} {
    font-size: 4.5rem;
  }
  ${media.desktopLarge} {
    font-size: 4rem;
  }
  ${media.tabletLand} {
    font-size: 3rem;
  }
  ${media.tablet} {
    font-size: 2rem;
  }
`;

const Title = memo<MainTitleProps>((props) => {
  const { children, ...rest } = props;

  return (
    <StyledMainTitle
      {...rest}
    >
      {children}
    </StyledMainTitle>
  )
})
Title.displayName = "Main Title"

export default Title