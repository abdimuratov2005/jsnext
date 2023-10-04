import styled from "styled-components";
import { media } from "../../utils/breakpoints";

const InfoHolder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40%;

  ${media.tablet} {
    width: 100%;
    transform: translateY(5%) translateX(10%)
  }
`

InfoHolder.displayName = "InfoHolder"

export default InfoHolder