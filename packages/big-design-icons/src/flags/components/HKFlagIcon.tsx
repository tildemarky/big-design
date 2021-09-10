// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'HK flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg viewBox="0 0 640 480" ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="HKFlagIcon__a">
          <path fillOpacity={0.7} d="M-89 0h682.6v512H-89z" />
        </clipPath>
      </defs>
      <g clipPath="url(#HKFlagIcon__a)" transform="translate(83.5) scale(.94)">
        <path fill="#ba0000" fillRule="evenodd" d="M618 512h-731.4V0H618z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M241.9 247.8s-51.6-22.2-44.2-79.8c7.1-27.7 19.8-46.6 42.7-56.9 10.8-3.3 21.8-4.8 33-5.7-3 2.8-5.4 5.6-6.7 9-2.4 6.4-.6 12.4 2.7 18.5 4.1 7 6.6 14.2 7.4 23.6a36.6 36.6 0 01-14.6 33.7c-6.6 5.1-14.4 6.9-20.8 12.7-5 4.8-8 9.7-9 18.1-.2 16.1 4.1 18.4 9.5 26.8z"
        />
        <path fill="#ba0000" fillRule="evenodd" stroke="#000" strokeWidth={2.1} d="M232 164.5v-.3" />
        <path fill="none" stroke="#ba0000" strokeWidth={2.1} d="M235.3 241.8c-20-17.7-18.3-62.4-3-77.3" />
        <path
          fill="#ba0000"
          fillRule="evenodd"
          d="M244.6 154.5l3.3 5.5-6-2.5-4.7 5 .8-6.5-6-2.5 6.5-1.5.8-6.4 3.3 5.5 6.6-1.5"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M246.3 244s6-55.9 63.3-65.7c28.6-1.2 50.4 5.3 67 24.3 6.3 9.3 10.9 19.4 15 29.8-3.5-2-6.8-3.5-10.6-3.7-6.7-.5-12 3-16.8 7.9a53.2 53.2 0 01-20.4 14 36.6 36.6 0 01-36.5-4c-6.8-4.9-10.8-11.8-18.2-16.2a28.2 28.2 0 00-20-3.4c-15.5 4.6-16.3 9.4-22.8 17z"
        />
        <path fill="#ba0000" fillRule="evenodd" stroke="#000" strokeWidth={2.1} d="M323 210.2h.3" />
        <path fill="none" stroke="#ba0000" strokeWidth={2.1} d="M250 236c11.2-24.4 54.4-35.8 73.1-25.6" />
        <path
          fill="#ba0000"
          fillRule="evenodd"
          d="M336.3 219.3L332 224l.6-6.5-6-3 6.3-1 .6-6.7 3.4 6 6.4-1.2-4.3 4.7 3.3 6"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M250.1 248s55-12 82.4 39.3c10.3 26.7 11 49.4-1.7 71.1-6.8 9-15 16.5-23.5 23.8.8-4 1.1-7.6.1-11.2-1.6-6.6-6.6-10.5-12.8-13.5a53.1 53.1 0 01-19.8-15 36.6 36.6 0 01-7.7-35.8c2.4-8 7.7-14 9.5-22.4a28 28 0 00-3.1-20c-9.3-13.2-14.1-12.5-23.4-16.3z"
        />
        <path fill="#ba0000" fillRule="evenodd" stroke="#000" strokeWidth={2.1} d="M306.5 310.1l.2.2" />
        <path fill="none" stroke="#ba0000" strokeWidth={2.1} d="M259 249c26.6 2.9 51.1 40.2 47.4 61.3" />
        <path
          fill="#ba0000"
          fillRule="evenodd"
          d="M302.1 325.6l-5.9-2.6 6.5-1.5.8-6.7 3.1 5.7 6.5-1.5-4.5 5 3 5.7-5.8-2.6-4.5 5.1"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M248.9 253.7s26.9 49.4-14.5 90c-22.8 17.4-44.4 24.5-68.8 18.4-10.5-4-20-9.7-29.5-15.9 4-.3 7.7-1 10.9-3 5.8-3.4 8.1-9.3 9.3-16a53 53 0 018.8-23.3 36.6 36.6 0 0132.2-17.5c8.4.1 15.6 3.6 24.2 3 6.9-.9 12.3-2.8 18.4-8.8 10-12.5 8-17 9-27z"
        />
        <path fill="#ba0000" fillRule="evenodd" stroke="#000" strokeWidth={2.1} d="M205.1 325.3l-.1.2" />
        <path fill="none" stroke="#ba0000" strokeWidth={2.1} d="M250.3 262.4c4.9 26.4-24.1 60.5-45.4 62.7" />
        <path
          fill="#ba0000"
          fillRule="evenodd"
          d="M189 325.4l.9-6.4 3.3 5.7 6.6-1-4.6 4.6 3.3 5.7-6.1-2.9-4.6 4.6.8-6.4-6.1-2.9"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M242.8 252.6S205.2 294.4 153 269c-24-15.7-37.8-33.8-40.1-58.8.3-11.3 2.4-22.1 5.1-33 1.7 3.6 3.6 6.8 6.5 9.2 5.1 4.3 11.5 4.5 18.3 3.4a52 52 0 0124.7.6 36.6 36.6 0 0127.3 24.6c2.7 7.9 1.8 15.9 5.3 23.8 3 6.2 6.6 10.6 14.3 14.4 15.2 5.3 18.7 1.9 28.4-.5z"
        />
        <path fill="#ba0000" fillRule="evenodd" stroke="#000" strokeWidth={2.1} d="M160.7 235.2l-.2-.1" />
        <path fill="none" stroke="#ba0000" strokeWidth={2.1} d="M235 256.9c-23.2 13.3-65-2.7-74.2-22" />
        <path
          fill="#ba0000"
          fillRule="evenodd"
          d="M155.3 220l6.3-1.3-4.3 5 3.1 5.9-5.8-2.8-4.3 5 .7-6.8-5.9-2.8 6.3-1.3.7-6.8"
        />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon aria-hidden={iconProps.title ? undefined : true} {...iconProps} svgRef={ref} />
));

export const HKFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

HKFlagIcon.displayName = 'HKFlagIcon';
