import Grid from "./Grid";
import Particles from "./Particles";
import TextObserver from './TextObserver';
// @ts-ignore
import CustomScene from "./CustomScene";
// @ts-ignore
import { Easing, Tween, update as updateTween } from '@tweenjs/tween.js';
import { AnimationProps } from "../shared/types/AnimationProps";
import { Holder } from "../shared/types/Holder.interface";
import { avatarOptions, data } from "../options";
import { AvatarsProps, Data, CreateAvatarAssetsProps } from "../shared/types/Options.interface";
import { Coordinates } from "../shared/types/Coordinates.interface";
import { lerp } from "../shared/utils/lerp";
import { UpdateProps } from "../shared/types/UpdateEvent.interface";
import { Sizes } from '../shared/types/Size.interface';
import { EventTargetProps } from '../shared/types/EventTargetProps.interface';
import { AvatarTexts } from '../shared/types/AvatarTextProps.interface';
import { SetLoadedAssetsProps, SetLoadedNames } from "../shared/types/SetLoadedAssets.interface";
import { Texture } from "three";

export default class Avatars extends CustomScene {
  static autoScrollSpeed: number;
  _avatarsArray3D: Grid[];
  _gridHolderEl: Holder;
  _focusedHolderEl: Holder;
  _activeIndexFocused: { current: number; prev: number; };
  // @ts-ignore
  _snapFocusedTimeoutId: NodeJS.Timeout;
  _skipToFocusedPercentTween: Tween<any>;
  _focusedStateTween: Tween<Data>;
  // @ts-ignore
  _shouldAutoScrollGridTween: Tween<this>;
  _avatar3DClicked: any;
  _shouldAutoScrollGrid: number;
  _floor3D: Particles;
  _avatarTexts: AvatarTexts[];
  _onScroll: (scroll: Coordinates) => void;
  _onScrollTouch: (touchScroll: Coordinates) => void;
  _handleFocusClose: () => void;
  _handleAvatarClick: (e: EventTargetProps) => void;
  _animateShouldAutoScrollGrid: (params: AnimationProps) => void;
  _handleAvatarMouseEnter: () => void;
  _handleAvatarMouseLeave: () => void;
  _setFocusedIndex: (event: number) => void;
  _performFocusedSnap: () => void;

  constructor({ camera: perspCamera }: any) {
    super({ camera: perspCamera })
    this._avatarsArray3D = []
    this._gridHolderEl = {
      el: null!,
      rect: avatarOptions
    }
    this._focusedHolderEl = {
      el: null!,
      rect: avatarOptions
    }
    this._activeIndexFocused = {
      current: 0,
      prev: 0
    }
    this._snapFocusedTimeoutId = null!
    this._skipToFocusedPercentTween = null!
    this._focusedStateTween = null!;
    this._shouldAutoScrollGridTween = null!;
    this._avatar3DClicked = null!;
    this._shouldAutoScrollGrid = 1;
    this._avatarTexts = [];

    this._onScroll = (scroll) => {
      if (data.isFocused === 0) {
        data.scrollValuesGrid!.target.x! += scroll.y!;
      }
      if (data.isFocused === 1) {
        // 5e-4 || (5 * 10^(-4)) === 0.0005
        data.scrollValuesFocused!.target.x! -= 5e-4 * scroll.y! * 0.9;
        if (this._snapFocusedTimeoutId) {
          clearTimeout(this._snapFocusedTimeoutId);
        }
        this._snapFocusedTimeoutId = setTimeout(this._performFocusedSnap, 600);
        if (this._skipToFocusedPercentTween) {
          this._skipToFocusedPercentTween.stop();
        }
      }
    };

    this._onScrollTouch = (touchScroll) => {
      if (data.isFocused === 0) {
        data.scrollValuesGrid!.target.x! += 2.5 * touchScroll.x!;
      }

      if (data.isFocused === 1) {
        // 1.25e-3|| 1.25 * 10^(-3) === 0.00125
        data.scrollValuesFocused!.target.x! -= 1.25e-3 * touchScroll.x!;
        if (this._snapFocusedTimeoutId) {
          clearTimeout(this._snapFocusedTimeoutId);
        }
        this._snapFocusedTimeoutId = setTimeout(this._performFocusedSnap, 600);
        if (this._skipToFocusedPercentTween) {
          this._skipToFocusedPercentTween.stop();
        }
      }
    };

    this._handleFocusClose = () => {
      this._animateFocusState({
        destination: 0
      });
      if (data.canvasWrapperEl) {
        data.canvasWrapperEl.style.backgroundColor = data.defaultBackgroundColor
      }
    };

    this._handleAvatarClick = (event) => {
      if (data.isFocused === 1) return;
      const clickedAvatar = event.target;
      this._avatar3DClicked = clickedAvatar;

      if (clickedAvatar?.avatarItem) {
        const remainingAvatars = data.avatarsArray!.length - clickedAvatar.avatarItem.order!;
        this._skipToFocusedPercent({
          destination: remainingAvatars / data.avatarsArray!.length
        });
        this._animateFocusState({
          destination: 1
        });
      }
    };

    this._animateShouldAutoScrollGrid = (params) => {
      const {
        destination,
        duration: animationDuration = 100,
        delay: animationDelay = 0,
        easing: animationEasing = Easing.Exponential.InOut
      } = params;
      this._shouldAutoScrollGridTween && this._shouldAutoScrollGridTween.stop();

      this._shouldAutoScrollGridTween = new Tween(this)
        .to({ _shouldAutoScrollGrid: destination }, animationDuration)
        .delay(animationDelay)
        .easing(animationEasing)

      this._shouldAutoScrollGridTween.start();
    };

    this._handleAvatarMouseEnter = () => {
      this._animateShouldAutoScrollGrid({
        destination: 0
      })
    };

    this._handleAvatarMouseLeave = () => {
      this._animateShouldAutoScrollGrid({
        destination: 1
      })
    };

    this._performFocusedSnap = () => {
      const focusedIndex = data.avatarsArray!.length - this._activeIndexFocused.current;
      this._skipToFocusedPercent({
        destination: focusedIndex / data.avatarsArray!.length
      })
    };

    this._setFocusedIndex = (current) => {
      this._activeIndexFocused.prev = this._activeIndexFocused.current;
      this._activeIndexFocused.current = current
    };

    this._floor3D = new Particles({});
    // @ts-ignore
    this.add(this._floor3D);
    this._addListeners();
    this._getRef();
    this._sizeRef()

  }

  _createAvatars(array: CreateAvatarAssetsProps[]) {
    array.forEach(avatarItem => {
      const avatarsGrid = new Grid({
        name: avatarItem.name,
        setFocusedIndex: this._setFocusedIndex
      });
      avatarsGrid.setAsset(avatarItem.loadedAsset!, avatarItem.blurTexture!)
      avatarsGrid.setColliderName("sceneItem")
      this._avatarsArray3D.push(avatarsGrid)
    })

    // @ts-ignore
    this._avatarsArray3D.forEach(avatar => {
      // @ts-ignore
      this.add(avatar)
      // @ts-ignore
      avatar.addEventListener("click", this._handleAvatarClick.bind(this))
      avatar.addEventListener("mouseenter", this._handleAvatarMouseEnter.bind(this))
      avatar.addEventListener("mouseleave", this._handleAvatarMouseLeave.bind(this))
    })
    this._sizeAvatars()
  }

  _destroyAvatars() {
    this._avatarsArray3D.forEach((avatar) => {
      avatar.destroy()
      // @ts-ignore
      this.remove(avatar)
    })

    this._avatarsArray3D = []
  }
  _sizeRef() {
    if (this._gridHolderEl.el) {
      this._gridHolderEl.rect = this._gridHolderEl.el.getBoundingClientRect()
    }
    if (this._focusedHolderEl.el) {
      this._focusedHolderEl.rect = this._focusedHolderEl.el.getBoundingClientRect()
    }
  }

  _getRef() {
    this._gridHolderEl.el = data.gridHolder;
    this._focusedHolderEl.el = data.focusedHolder;

    const avatarTitle = Array.from(document.querySelectorAll('[data-avatar="title"]')!);
    const avatarDescription = Array.from(document.querySelectorAll('[data-avatar="description"]')!);
    const avatarSeparator = Array.from(document.querySelectorAll('[data-avatar="separator"]')!);
    const avatarSeparatorBottom = Array.from(document.querySelectorAll('[data-avatar="separatorBottom"]')!);
    const avatarTextWrapper = Array.from(document.querySelectorAll('[data-avatar="textWrapper"]')!);
    const avatarTag = Array.from(document.querySelectorAll('[data-avatar="tag"]')!);

    data.avatarsArray?.forEach((avatar) => {
      // @ts-ignore
      const avatarTitleName = avatarTitle && avatarTitle.find((e: HTMLElement) => e.innerHTML === avatar.name);
      // @ts-ignore
      const avatarDescriptionName = avatarDescription && avatarDescription.find((e: HTMLElement) => e.innerHTML === avatar.description);
      // @ts-ignore
      const avatarSeparatorName = avatarSeparator && avatarSeparator.find((e: HTMLElement) => e.dataset.avatarname === avatar.name);
      // @ts-ignore
      const avatarSeparatorBottomName = avatarSeparatorBottom && avatarSeparatorBottom.find((e: HTMLElement) => e.dataset.avatarname === avatar.name);
      // @ts-ignore
      const avatarTextWrapperName = avatarTextWrapper && avatarTextWrapper.find((e: HTMLElement) => e.dataset.avatarname === avatar.name);
      // @ts-ignore
      const avatarTagName = avatarTag && avatarTag.find((e: HTMLElement) => e.dataset.avatarname === avatar.name);

      this._avatarTexts.push({
        avatarName: avatar.name,
        // @ts-ignore
        titleParagraph: new TextObserver({
          element: avatarTitleName
        }),
        // @ts-ignore
        descriptionParagraph: new TextObserver({
          element: avatarDescriptionName
        }),
        // @ts-ignore
        separatorEl: avatarSeparatorName,
        // @ts-ignore
        textWrapperEl: avatarTextWrapperName,
        // @ts-ignore
        separatorBottomEl: avatarSeparatorBottomName,
        // @ts-ignore
        avatarTag: new TextObserver({
          element: avatarTagName
        })
      })
    })
  }

  _animateFocusState(params: AnimationProps) {
    let {
      destination: focusDestination,
      duration: animationDuration = 1400,
      delay: animationDelay = 0,
      easing: animationEasing = Easing.Exponential.InOut,
    } = params;

    this._focusedStateTween && this._focusedStateTween.stop();

    let isAnimatingOut = false;
    let isAnimatingIn = false;
    let isTransitioning = false;

    this._focusedStateTween = new Tween(data)
      .to({ isFocused: focusDestination }, animationDuration)
      .delay(animationDelay)
      .easing(animationEasing)
      .onUpdate(() => {
        this._avatarsArray3D.forEach((avatar) => {
          avatar.updatePlaneSize();
          this._floor3D.rotation.x = data.isFocused * Math.PI * 0.5;
          this._floor3D.setFloorOpacity(1 - data.isFocused);

          if (focusDestination === 0 && !isTransitioning) {
            isTransitioning = true;
            this._animateAvatarTextsOut();

            if (data.closeFocusEl) {
              data.closeFocusEl.style.opacity = "0";
              data.closeFocusEl.style.transform = "translateY(120%)";
              data.closeFocusEl.style.pointerEvents = "none";
            }
          }

          if (focusDestination === 1 && !isTransitioning && data.isFocused >= 0.99) {
            isTransitioning = true;
            let avatarName = data.avatarsArray![this._activeIndexFocused.current].name;
            this._animateAvatarTextsIn(avatarName);

            if (data.closeFocusEl) {
              data.closeFocusEl.style.opacity = "1";
              data.closeFocusEl.style.transform = "translateY(0)";
              data.closeFocusEl.style.pointerEvents = "initial";
            }
          }

          if (focusDestination === 1 && !isAnimatingOut) {
            isAnimatingOut = true;
            if (!this._avatar3DClicked || !this._avatar3DClicked.avatarItem) return;

            let bgColor = this._avatar3DClicked.avatarItem.backgroundColor;
            let hslColor = `hsl(${bgColor[0]}, ${bgColor[1]}%, ${bgColor[2]}%)`;
            if (data.canvasWrapperEl) {
              data.canvasWrapperEl.style.backgroundColor = hslColor;
            }
          }

          if (focusDestination === 0 && !isAnimatingIn && data.isFocused <= 0.99) {
            isAnimatingIn = true;

            if (data.gridTitleWrapperEl) {
              data.gridTitleWrapperEl.style.opacity = "1";
              data.gridTitleWrapperEl.style.transform = "scale(1)";
              let titleElement = data.gridTitleWrapperEl?.children[1] as HTMLElement;
              titleElement.style.transform = "scaleX(1)";
            }
          }

          if (focusDestination === 1 && !isAnimatingIn && data.isFocused >= 0.01) {
            if (data.gridTitleWrapperEl) {
              data.gridTitleWrapperEl.style.opacity = "0";
              data.gridTitleWrapperEl.style.transform = "scale(1.5)";

              let titleElement = data.gridTitleWrapperEl?.children[1] as HTMLElement;
              titleElement.style.transform = "scaleX(0)";
            }
          }
        });
      })
      .onComplete(() => {
        if (focusDestination === 1) {
          document.body.style.cursor = "initial";
        }
      })
      .start();
  }

  _skipToFocusedPercent(params: AnimationProps) {
    let {
      destination: focusDestination,
      duration: animationDuration = 600,
      delay: animationDelay = 0,
      easing: animationEasing = Easing.Sinusoidal.InOut
    } = params;

    this._snapFocusedTimeoutId && clearTimeout(this._snapFocusedTimeoutId);
    this._skipToFocusedPercentTween && this._skipToFocusedPercentTween.stop();

    let targetPosition;
    let currentScrollIndex = 0;

    if (data.scrollValuesFocused!.current.x! >= 0) {
      currentScrollIndex = Math.floor(data.scrollValuesFocused!.current.x!);
    } else {
      focusDestination = -(1 - focusDestination!);
      currentScrollIndex = Math.ceil(data.scrollValuesFocused!.current.x!);
    }

    const initialAvatarName = data.avatarsArray!.find((avatar) => avatar.order === 0)?.name;
    const avatar3D = this._avatarsArray3D.find((avatar3D) => {
      const currentAvatar = avatar3D.avatarItem?.name;
      return currentAvatar === initialAvatarName;
    });

    if (avatar3D!._focusedNormalizedProgress! > 0.5 && this._activeIndexFocused.current === 0) {
      const absTargetPosition = Math.abs(focusDestination!);
      if (absTargetPosition === 0 || absTargetPosition === 1) {
        currentScrollIndex -= 1;
      }
    }

    targetPosition = currentScrollIndex + focusDestination!;

    this._skipToFocusedPercentTween = new Tween(data.scrollValuesFocused!.target)
      .to({ x: targetPosition }, animationDuration)
      .delay(animationDelay)
      .easing(animationEasing)
      .onUpdate((values: Coordinates) => {
        data.scrollValuesFocused!.target.x = values.x;
      });

    this._skipToFocusedPercentTween.start()
  }

  _addListeners() {
    super._addListeners();
    // @ts-ignore
    this._scroll.addEventListener("wheel", this._onScroll);
    // @ts-ignore
    this._scroll.addEventListener("touch", this._onScrollTouch);
    // @ts-ignore
    this._scroll.addEventListener("mouse", this._onScrollTouch);

    data.closeFocusEl?.addEventListener("click", this._handleFocusClose);
  }

  _removeListeners() {
    super._removeListeners();
    // @ts-ignore
    this._scroll.removeEventListener("wheel", this._onScroll);
    // @ts-ignore
    this._scroll.removeEventListener("touch", this._onScrollTouch);
    // @ts-ignore
    this._scroll.removeEventListener("mouse", this._onScrollTouch);

    data.closeFocusEl?.removeEventListener("click", this._handleFocusClose);

    this._avatarsArray3D.forEach(avatar => {
      // @ts-ignore
      avatar.removeEventListener("click", this._handleAvatarClick.bind(this));
      avatar.removeEventListener("mouseenter", this._handleAvatarMouseEnter.bind(this));
      avatar.removeEventListener("mouseleave", this._handleAvatarMouseLeave.bind(this));
    });
  }

  _sizeAvatars() {
    this._avatarsArray3D.forEach((avatar3D) => {
      avatar3D.setStageSize(this._stageSize);
      avatar3D.setFocusedElBounds(this._focusedHolderEl.rect!);
      avatar3D.setGridElBounds(this._gridHolderEl.rect!);
      avatar3D.updatePlaneSize();
      avatar3D.resetExtraScrollGrid();

      this._avatarTexts.forEach((avatarText) => {
        avatarText.descriptionParagraph!.onResize();
        avatarText.titleParagraph!.onResize();
        avatarText.avatarTag!.onResize();
      });

      if (data.isFocused === 1) {
        const activeAvatarName = data.avatarsArray![this._activeIndexFocused.current].name;
        this._animateAvatarTextsIn(activeAvatarName);
      }
    });
  }

  _resetScrollValues() {
    data.scrollValuesGrid!.current.x = 0;
    data.scrollValuesGrid!.target.x = 0;
    data.scrollValuesGrid!.last.x = 0;
    data.scrollValuesGrid!.direction.x = "left";
    data.scrollValuesFocused!.current.x = 0;
    data.scrollValuesFocused!.target.x = 0;
    data.scrollValuesFocused!.last.x = 0;
    data.scrollValuesFocused!.direction.x = "left";
  }

  setStageSize(e: Sizes) {
    super.setStageSize(e);
    data.isTouchDevice = "ontouchstart" in window || "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    this._floor3D.setStageSize(e);
    this._resetScrollValues();
    this._sizeAvatars();

    if (this._snapFocusedTimeoutId) {
      clearTimeout(this._snapFocusedTimeoutId);
    }

    if (this._skipToFocusedPercentTween) {
      this._skipToFocusedPercentTween.stop();
    }
  }

  setLoadedAssets(assets: SetLoadedAssetsProps & SetLoadedNames) {
    const particleMask = assets.particleMask!;
    this._floor3D.setAsset(particleMask);

    const loadedElements: CreateAvatarAssetsProps[] = [];
    // @ts-ignore
    Object.entries(assets).forEach(([name, asset]: [string, HTMLImageElement]) => {
      const element = data.avatarsArray!.find((avatarName) => avatarName.name === name);

      data.avatarsArray!.forEach((avatar) => {
        avatar.name === name && (avatar.assetSizeRatio = asset.naturalWidth / asset.naturalHeight)
      });

      if (element) {
        loadedElements.push({
          name: element.name,
          description: element.description,
          loadedAsset: asset,
          blurTexture: (assets[`${name}_blur`]?.asset as Texture | undefined)
        });
      }
    });

    // @ts-ignore
    this._createAvatars(loadedElements);
  }

  _handleScrollValues(e: UpdateProps) {
    data.scrollValuesGrid!.current.x = lerp(data.scrollValuesGrid!.current.x!, data.scrollValuesGrid!.target.x!, CustomScene.lerpEase * e.slowDownFactor!);
    data.scrollValuesGrid!.direction.x = data.scrollValuesGrid!.current.x <= data.scrollValuesGrid!.last.x! ? "left" : "right";
    data.scrollValuesGrid!.last.x = data.scrollValuesGrid!.current.x;
    data.scrollValuesGrid!.last.y = data.scrollValuesGrid!.current.y;

    data.scrollValuesFocused!.current.x = lerp(data.scrollValuesFocused!.current.x!, data.scrollValuesFocused!.target.x!, CustomScene.lerpEase * e.slowDownFactor!);
    data.scrollValuesFocused!.direction.x = data.scrollValuesFocused!.current.x <= data.scrollValuesFocused!.last.x! ? "left" : "right";
    data.scrollValuesFocused!.last.x = data.scrollValuesFocused!.current.x;
    data.scrollValuesFocused!.last.y = data.scrollValuesFocused!.current.y;
  }

  _handleFocusedProgress() {
    data.focusedModProgress = data.scrollValuesFocused!.current.x! % 1
  }

  _handleFocusedIndexChange() {
    if (this._activeIndexFocused.current !== this._activeIndexFocused.prev && data.isFocused === 1) {
      if (data.canvasWrapperEl) {
        const color = data.avatarsArray![this._activeIndexFocused.current].backgroundColor!;
        const setColor = `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;

        if (data.isFocused === 1) {
          data.canvasWrapperEl.style.backgroundColor = setColor;
        }
      }
      this._animateAvatarTextsOut();
      let currentText = data.avatarsArray![this._activeIndexFocused.current].name;
      this._animateAvatarTextsIn(currentText)
    }
  }

  _animateAvatarTextsIn(name: string | undefined) {
    this._avatarTexts.forEach(text => {
      text.avatarName === name && (
        text.descriptionParagraph!.animateIn(),
        text.titleParagraph && text.titleParagraph.animateIn(),
        text.avatarTag && text.avatarTag.animateIn(),
        text.separatorEl && (text.separatorEl.style.transform = "translateY(0%)"),
        text.separatorBottomEl && (text.separatorBottomEl.style.transform = "scaleX(1)"),
        text.separatorBottomEl && (text.separatorBottomEl.style.transformOrigin = "left"),
        text.textWrapperEl && (text.textWrapperEl.style.opacity = "1"),
        text.textWrapperEl && (text.textWrapperEl.style.transform = "scale(1)"))
    }
    )
  }
  _animateAvatarTextsOut() {
    this._avatarTexts.forEach(text => {
      text.descriptionParagraph && text.descriptionParagraph.animateOut();
      text.titleParagraph && text.titleParagraph.animateOut();
      text.avatarTag && text.avatarTag.animateOut();
      text.separatorEl && (text.separatorEl.style.transform = "translateY(110%)");
      text.separatorBottomEl && (text.separatorBottomEl.style.transform = "scaleX(0)")
      text.separatorBottomEl && (text.separatorBottomEl.style.transformOrigin = "right");
      text.textWrapperEl && (text.textWrapperEl.style.opacity = "0");
      text.textWrapperEl && (text.textWrapperEl.style.transform = "scale(1.35)")
    }
    )
  }

  _handleAutoScrollGrid(scroll: UpdateProps) {
    !this._scroll._isTouching && data.isFocused < .5
      &&
      ("left" === data.scrollValuesGrid!.direction.x
        ? data.scrollValuesGrid!.target.x! -= Avatars.autoScrollSpeed * scroll.slowDownFactor! * this._shouldAutoScrollGrid
        : data.scrollValuesGrid!.target.x! += Avatars.autoScrollSpeed * scroll.slowDownFactor! * this._shouldAutoScrollGrid
      )
  }

  setPixelRatio(pixelRation: number) {
    super.setPixelRatio(pixelRation);
    this._floor3D.setPixelRatio(pixelRation);
  }

  update(event: UpdateProps) {
    super.update(event);
    updateTween(event.time);
    this._floor3D.update(event);
    this._avatarsArray3D.forEach(avatar => {
      // @ts-ignore
      avatar.update(event);
    });
    this._handleAutoScrollGrid(event);
    this._handleScrollValues(event);
    this._handleFocusedProgress();
    this._handleFocusedIndexChange();
  }

  destroy() {
    super.destroy();
    // @ts-ignore
    this._removeListeners();
    // @ts-ignore
    this._destroyAvatars();
    this._floor3D.destroy();

    this._avatarTexts.forEach(text => {
      text.descriptionParagraph!.destroy();
      text.titleParagraph!.destroy();
      text.avatarTag!.destroy();
    })

    this._snapFocusedTimeoutId && clearTimeout(this._snapFocusedTimeoutId);
    this._skipToFocusedPercentTween && this._skipToFocusedPercentTween.stop();
    this._focusedStateTween && this._focusedStateTween.stop();
    this._shouldAutoScrollGridTween && this._shouldAutoScrollGridTween.stop()
  }
}
Avatars.autoScrollSpeed = 1.9;