import styled from "styled-components";

const AvatarTitle = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1;
  margin-top: clamp(8px, 5vw, 15px);
  font-size: clamp(2rem, 5vw, 4rem);
`

AvatarTitle.displayName = "AvatarTitle"

export default AvatarTitle;