import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { sharedValues } from "../../utils/sharedValues";

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  display: flex;
  opacity: 0;
  flex-direction: column;
  transition: transform calc(.95 * 0.9s) ${sharedValues.ease},
              opacity calc(.75 * 0.9s) ease-in-out;

  ${media.tablet} {
    width: 100%;
  }
`

TextWrapper.displayName = "TextWrapper"

export default TextWrapper