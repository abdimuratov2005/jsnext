import styled from "styled-components";
import { media } from "../../utils/breakpoints";

const FocusHolder = styled.div`
  position: relative;
  top: auto;
  left: auto;
  width: 100%;
  height: 100%;
  transform: scale(1.6) translateY(20%) translateX(-17%);
 
  ${media.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    height: 80%;
    transform: translateX(-20%) scale(1.3) translateY(40%);
  }
`;

FocusHolder.displayName = "FocusHolder"

export default FocusHolder