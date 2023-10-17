'use client'
import { memo, useEffect, useRef } from "react";
import { data } from "./options";
import { Separator } from "./shared/styled/MainText/Separator";
import { App } from "./functions/App";
import {CanvasStylesStyled} from "./styles/canvasStyles.styled";
import GridHolder from "./shared/styled/Grid/Grid";
import Loading from "./shared/styled/Loading/LoadingScreen";
import Wrapper from "./shared/styled/AppWrapper";
import Container from "./shared/styled/MainText/Container";
import MainText from "./shared/styled/MainText/MainText";
import Title from "./shared/styled/MainText/MainTitle";
import WrapperSharedContent from "./shared/styled/MainText/Wrapper";
import LoadingText from "./shared/styled/Loading/LoadingText";
import LoadingTextBar from "./shared/styled/Loading/LoadingTextBar";
import FocusHolder from "./shared/styled/Focused/Focus";
import ContentWrapper from "./shared/styled/ContentWrapper/Wrapper";
import CloseFocus from "./shared/styled/CloseFocus/CloseFocus";
import InfoHolder from "./shared/styled/InfoHolder/InfoHolder";
import SeparatorWrapper from "./shared/styled/InfoHolder/Separator/SeparatorWrapper";
import SmallTitle from "./shared/styled/InfoHolder/SmallTitle";
import AvatarTitle from "./shared/styled/InfoHolder/AvatarTitle";
import SeparatorBottom from "./shared/styled/InfoHolder/Separator/SeparatorBottom";
import Description from "./shared/styled/InfoHolder/Description";
import TextWrapper from "./shared/styled/InfoHolder/TextWrapper";
import React from "react";

const Canvas = memo(() => {
  const canvasWrapperEl = useRef<HTMLDivElement>(null!);
  const gridTitleWrapper = useRef<HTMLDivElement>(null!);
  const loadingScreen = useRef<HTMLDivElement>(null!);
  const loadingText = useRef<HTMLDivElement>(null!);
  const loadingTextBar = useRef<HTMLDivElement>(null!);
  const gridHolder = useRef<HTMLDivElement>(null!);
  const focusedHolder = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    data.closeFocusEl = document.querySelector('[data-close="focus"]');
    data.gridTitleWrapperEl = gridTitleWrapper.current;
    data.loadingScreenEl = loadingScreen.current;
    data.loadingTextEl = loadingText.current;
    data.loadingTextBarEl = loadingTextBar.current;
    data.canvasWrapperEl = canvasWrapperEl.current;
    data.gridHolder = gridHolder.current;
    data.focusedHolder = focusedHolder.current;

    data.app = new App({
      rendererEl: canvasWrapperEl.current
    });

    return () => {
      if (data.app) {
        data.app.destroy();
        data.app = null!;
      }
    }
  }, [])

  return (
    <>

      <CanvasStylesStyled />
      <Loading ref={loadingScreen}>
        <LoadingText ref={loadingText}>
          <LoadingTextBar ref={loadingTextBar} />
        </LoadingText>
      </Loading>

      <Wrapper ref={canvasWrapperEl} />

      <WrapperSharedContent>
        <Container ref={gridTitleWrapper}>
          <Title>
            Lorem
            <br />
            ipsum. dolor.
          </Title>
          <Separator />
          <MainText>
            Avatars
          </MainText>
        </Container>
        <ContentWrapper>
          <FocusHolder ref={focusedHolder} />
          <InfoHolder>
            {data.avatarsArray?.map((avatar) => (
              <TextWrapper data-avatar="textWrapper" data-avatarname={`${avatar.name}`} key={avatar.order}>
                <SeparatorWrapper>
                  <Separator data-avatar="separator" data-avatarname={`${avatar.name}`}/>
                </SeparatorWrapper>
                <SmallTitle data-avatar="tag" data-animation="paragraph" data-avatarname={`${avatar.name}`}>
                  Avatars
                </SmallTitle>
                <AvatarTitle data-avatar="title" data-animation="paragraph">
                  {avatar.name}
                </AvatarTitle>
                <SeparatorBottom data-avatar="separatorBottom" data-avatarname={`${avatar.name}`}/>
                <Description data-avatar="description" data-animation="paragraph">
                  {avatar.description}
                </Description>
              </TextWrapper>
            ))}
          </InfoHolder>
        </ContentWrapper>
        <CloseFocus />
      </WrapperSharedContent>

      <GridHolder ref={gridHolder} />

    </>
  )
})

Canvas.displayName = "Canvas"

export default Canvas
