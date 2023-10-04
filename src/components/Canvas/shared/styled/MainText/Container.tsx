import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { sharedValues } from "../../utils/sharedValues";

const Container = styled.div`
  max-width: 1440px;
  margin: 5rem auto;
  position: relative;
  padding: 0 5rem;
  z-index: 100000;
  transition: transform .95s ${sharedValues.ease},
              opacity .65s ease-in-out;
  ${media.tablet} {
    padding: 0 2rem;
  }
`;

Container.displayName = "MainTextContainer"

export default Container;