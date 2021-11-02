import React from 'react';
import { SpeechSegment } from '@speechly/react-client';
import '@speechly/browser-ui/big-transcript';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'big-transcript': any;
        }
    }
}
/**
 * Properties for BigTranscript component.
 *
 * @public
 */
export declare type BigTranscriptProps = {
    /**
     * Optional "top" string turns on internal placement without any CSS positioning.
     */
    placement?: string;
    /**
     * Optional boolean. If true, transcript is formatted with detected entities, e.g. numbers. Default: true
     */
    formatText?: boolean;
    /**
     * Optional CSS string for text size. Default: "1.5rem"
     */
    fontSize?: string;
    /**
     * Optional string (CSS color) for text. Default: "#ffffff"
     */
    color?: string;
    /**
     * Optional string (CSS color) for entity highlighting, vu meter and acknowledged icon. Default: "#15e8b5"
     */
    highlightColor?: string;
    /**
     * Optional string (CSS color) for hint text background. Default: "#202020"
     */
    backgroundColor?: string;
    /**
     * Optional string (CSS dimension). Dynamic margin added when element is visible. Default: "0rem"
     */
    marginBottom?: string;
    /**
     * Optional SpeechSegment to be displayed instead of actual transcription from API. Can be used to demonstrate voice functionality to the user.
     */
    mockSegment?: SpeechSegment | undefined;
};
/**
 * A React component that renders the transcript and entities received from Speechly SLU API.
 *
 * The component is intended to be used for providing visual feedback to the speaker.
 *
 * @public
 */
export declare const BigTranscript: React.FC<BigTranscriptProps>;
