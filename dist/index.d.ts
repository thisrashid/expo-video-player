import { AVPlaybackStatus, VideoProps } from 'expo-av';
import { ImageURISource, TextStyle, ViewStyle } from 'react-native';
import { Color } from 'csstype';
import { ReactNode } from 'react';
declare enum ErrorSeverity {
    Fatal = "Fatal",
    NonFatal = "NonFatal"
}
declare type Error = {
    type: ErrorSeverity;
    message: string;
    obj: Record<string, unknown>;
};
declare type Props = {
    videoProps: VideoProps;
    inFullscreen: boolean;
    width: number;
    height: number;
    children: ReactNode;
    fadeInDuration: number;
    fadeOutDuration: number;
    quickFadeOutDuration: number;
    hideControlsTimerDuration: number;
    playIcon: () => JSX.Element;
    replayIcon: () => JSX.Element;
    pauseIcon: () => JSX.Element;
    spinner: () => JSX.Element;
    fullscreenEnterIcon: () => JSX.Element;
    fullscreenExitIcon: () => JSX.Element;
    showFullscreenButton: boolean;
    iosThumbImage: ImageURISource;
    iosTrackImage: ImageURISource;
    controlBarStyle: ViewStyle;
    textStyle: TextStyle;
    videoBackground: Color;
    debug: boolean;
    playbackCallback: (callback: AVPlaybackStatus) => void;
    errorCallback: (error: Error) => void;
    switchToLandscape: () => void;
    switchToPortrait: () => void;
    showControlsOnLoad: boolean;
    sliderColor: Color;
    disableSlider: boolean;
};
declare const _default: (props: Pick<Props, "videoProps" | "controlBarStyle"> & {
    children?: null | undefined;
    playIcon?: (() => JSX.Element) | undefined;
    pauseIcon?: (() => JSX.Element) | undefined;
    spinner?: (() => JSX.Element) | undefined;
    fullscreenEnterIcon?: (() => JSX.Element) | undefined;
    fullscreenExitIcon?: (() => JSX.Element) | undefined;
    replayIcon?: (() => JSX.Element) | undefined;
    switchToLandscape?: (() => void) | undefined;
    switchToPortrait?: (() => void) | undefined;
    inFullscreen?: boolean | undefined;
    sliderColor?: string | undefined;
    disableSlider?: boolean | undefined;
    iosThumbImage?: any;
    iosTrackImage?: any;
    showFullscreenButton?: boolean | undefined;
    textStyle?: {
        color: string;
        fontSize: number;
    } | undefined;
    videoBackground?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    errorCallback?: ((error: Error) => void) | undefined;
    debug?: boolean | undefined;
    playbackCallback?: ((callback: AVPlaybackStatus) => void) | undefined;
    fadeInDuration?: number | undefined;
    quickFadeOutDuration?: number | undefined;
    fadeOutDuration?: number | undefined;
    hideControlsTimerDuration?: number | undefined;
    showControlsOnLoad?: boolean | undefined;
}, ref?: unknown) => JSX.Element;
export default _default;
