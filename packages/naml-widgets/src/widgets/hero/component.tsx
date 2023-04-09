import React from "react";
import { ReactWidget } from "../../types";
import { headingImpl } from "../../utils";
import { WidgetShell, WidgetShellViewProps } from "./views";

type HeroComponentProps = {
  text?: string;
  textAsElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textColor?: string;
  textClassname?: string;
  textId?: string;
  subtitle?: string;
  imageSrc?: string;
  imageHeight?: string;
  imageWidth?: string;
  imageAltText?: string;
  imageClassname?: string;
  imageId?: string;
  videoSrc?: string;
  videoMediaType?: string;
  videoSrcLowResFallback?: string;
  videoLowResFallbackMediaType?: string;
  videoPosterImage?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

export type HeroWidgetProps = WidgetShellViewProps &
  ReactWidget &
  HeroComponentProps;

export function HeroWidget(props: HeroWidgetProps) {
  const {
    text,
    textAsElement = "h2",
    textClassname,
    textColor,
    textId,
    subtitle,
    imageSrc,
    imageHeight = "auto",
    imageWidth = "400px",
    imageAltText,
    imageId,
    imageClassname,
    videoMediaType,
    videoSrc,
    videoSrcLowResFallback,
    videoLowResFallbackMediaType,
    videoPosterImage,
    loop,
    muted,
    controls,
    autoPlay,
    children,
    ref,
    ...rest
  } = props;

  function renderContent() {
    if (text && imageSrc) {
      const log = `Exception in <HeroWidget />: Hero widget is intended to be used with a single content type. Props 'imageSrc' and 'text' are set, resulting in conflicting content types.`;
      console.warn(log);
      return null;
    }

    if (!text && imageSrc) {
      return (
        <img
          id={imageId}
          className={imageClassname}
          src={imageSrc}
          height={imageHeight}
          width={imageWidth}
          alt={imageAltText}
          style={{ objectFit: "cover" }}
        />
      );
    }

    if (!imageSrc && text) {
      return (
        <>
          {headingImpl(
            textAsElement,
            text,
            textColor,
            rest.gridNumber,
            textClassname,
            textId,
          )}
          {subtitle && <p>{subtitle}</p>}
        </>
      );
    }

    if (videoSrc) {
      return (
        <video
          preload="auto"
          poster={videoPosterImage}
          style={{ margin: "0 auto", padding: "0px", objectFit: 'cover' }}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          width="100%"
          height="100%"
        >
          <source src={videoSrc} type={videoMediaType} />
          <source src={videoSrcLowResFallback} type={videoLowResFallbackMediaType} />
        </video>
      );
    }

    return null;
  }

  const content = React.useMemo(
    () => renderContent(),
    [
      text,
      textAsElement,
      textClassname,
      textColor,
      textId,
      imageSrc,
      imageAltText,
      imageHeight,
      imageWidth,
      imageClassname,
      imageId,
      videoLowResFallbackMediaType,
      videoMediaType,
      videoSrc,
      videoSrcLowResFallback,
    ],
  );

  return (
    <WidgetShell ref={ref} {...rest} p={videoSrc ? undefined : rest.p}>
      {content}
    </WidgetShell>
  );
}
