import styled from "styled-components";
import { memo } from "react";
import { sharedValues } from "../../utils/sharedValues";
import { media } from "../../utils/breakpoints";

interface StripeProps {
  $stripe: number
}

const CloseWrapper = styled.div`
  position: absolute;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  bottom: 60px;

  @media (max-width: 767.98px){
    bottom: 50px;
  }
`

CloseWrapper.displayName = "CloseWrapper"

const StyledCloseFocus = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: #fff;
  transition: transform .65s ${sharedValues.ease}, 
              opacity .45s ease-in-out;
  opacity: 0;
  transform: translateY(120%);
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    border: 1px solid;
    border-radius: 50%;
    transition: transform .65s ${sharedValues.ease}
  }
  &:hover:before {
    transform: translate(-50%,-50%) scale(1.25);
  };
  ${media.tablet} {
    width: 45px;
    height: 45px;
  }
`;

const Stripe = styled.span<StripeProps>`
  position: absolute;
  display: inline-block;
  z-index: 1;
  top: 50%;
  left: 50%;
  background-color: currentColor;
  width: 40%;
  height: 1px;
  transform: translate(-50%,-50%) rotate(${({ $stripe }) => $stripe === 1 ? '45' : '-45'}deg);
`;

Stripe.displayName = "Stripe"

const CloseFocus = memo(() => {

  return (
    <CloseWrapper>
      <StyledCloseFocus data-close="focus">
        <Stripe $stripe={1} />
        <Stripe $stripe={2} />
      </StyledCloseFocus>
    </CloseWrapper>
  )
});
CloseFocus.displayName = "CloseFocus";
export default CloseFocus