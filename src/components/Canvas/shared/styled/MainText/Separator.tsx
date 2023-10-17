import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { sharedValues } from "../../utils/sharedValues";

interface SeparatorProps {}

export const Separator = styled.span<SeparatorProps>`
  display: block;
  width: 100%;
  height: 3px;
  transform: scaleX(1);
  transform-origin: left;
  margin: 25px 0;
  transition: transform .7s ${sharedValues.ease};
  background-color: #e93434;

  ${media.tablet} {
    margin: 1rem 0;
  }
`;

Separator.displayName = "Main Text Separator";