// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'RO flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg viewBox="0 0 640 480" ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#00319c" d="M0 0h213.3v480H0z" />
        <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#de2110" d="M426.7 0H640v480H426.7z" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon aria-hidden={iconProps.title ? undefined : true} {...iconProps} svgRef={ref} />
));

export const ROFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

ROFlagIcon.displayName = 'ROFlagIcon';
