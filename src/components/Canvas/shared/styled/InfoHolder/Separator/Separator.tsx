import styled from "styled-components";
import { sharedValues } from "../../../utils/sharedValues";

const Separator = styled.div`
  width: 100%;
  height: 3px;
  background: #e93434;
  transform: translateY(120%);
  transition: transform .9s .4s ${sharedValues.ease};
`

Separator.displayName = "Separator"

export default Separator;