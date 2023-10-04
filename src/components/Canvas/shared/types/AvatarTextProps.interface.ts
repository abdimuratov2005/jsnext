import TextObserver from "canvas/functions/TextObserver";

export interface AvatarTexts {
  avatarName?: string | undefined;
  titleParagraph?: TextObserver;
  descriptionParagraph?: TextObserver;
  separatorEl?: HTMLElement | undefined & Element;
  textWrapperEl?: HTMLElement | undefined & Element;
  separatorBottomEl?: HTMLElement | undefined & Element;
  avatarTag?: TextObserver
}