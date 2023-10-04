import styled from "styled-components";
import { sharedValues } from "../../../utils/sharedValues";

const SeparatorBottom = styled.div `
  width: 100%;
  height: 1px;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left;
  opacity: .5;
  transition: transform .9s .4s ${sharedValues.ease};
  margin-top: clamp(1rem, 5vw, 25px);
  margin-bottom: clamp(1rem, 5vw, 25px);
`

SeparatorBottom.displayName = "SeparatorBottom"

export default SeparatorBottom;