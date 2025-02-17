// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'SD flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-labelledby={titleId}
      ref={svgRef}
      viewBox="0 0 640 480"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="SDFlagIcon__a">
          <path d="M0 0h682.7v512H0z" fillOpacity={0.7} />
        </clipPath>
      </defs>
      <g
        clipPath="url(#SDFlagIcon__a)"
        fillRule="evenodd"
        strokeWidth="1pt"
        transform="scale(.9375)"
      >
        <path d="M0 341.3h1024V512H0z" />
        <path d="M0 170.6h1024v170.7H0z" fill="#fff" />
        <path d="M0 0h1024.8v170.7H0z" fill="red" />
        <path d="M0 0v512l341.3-256L0 0z" fill="#009a00" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const SDFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

SDFlagIcon.displayName = 'SDFlagIcon';
