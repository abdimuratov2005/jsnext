import styled from "styled-components";
import { media } from "../../utils/breakpoints";

const GridHolder = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  transform: translateY(-50%);
  opacity: 0;
  top: calc(56% + 100px);
  width: 450px;
  height: 38%;

  
  ${media.tablet} {
    top: calc(50% + 120px);
    width: 250px;
    height: 32%;
  }
`

GridHolder.displayName = "Styled GridHolder"

export default GridHolder