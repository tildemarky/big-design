// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'DO flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg viewBox="0 0 640 480" ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="DOFlagIcon__a">
          <path fillOpacity={0.7} d="M-222.6-115.2h958v718.4h-958z" />
        </clipPath>
      </defs>
      <g clipPath="url(#DOFlagIcon__a)" transform="matrix(.67 0 0 .67 148.7 77)">
        <path fill="#00319c" fillRule="evenodd" d="M322 329h446.5v273.9H322z" />
        <path fill="#d62918" fillRule="evenodd" d="M-256.7 329.8h445.2v273h-445.2z" />
        <path fill="#00319c" fillRule="evenodd" d="M-255.8-115.2h445.2v305.4h-445.2z" />
        <path fill="#d62918" fillRule="evenodd" d="M324.6-112.7h443V193h-443z" />
        <path fill="#fff" fillRule="evenodd" d="M-256.4 190.1H769.5v141.7h-1026z" />
        <path fill="#fff" fillRule="evenodd" d="M187.4-113.7h138.3v717H187.4z" />
        <path fill="#cecece" d="M246.5 194.3l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M247.2 194.3l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M247.9 194.3l.7.6-.7-.6z" />
        <path fill="#848c9c" d="M252.8 194.3l.7.6-.7-.6z" />
        <path fill="#848ca5" d="M254 194.5l.4.2-.4-.2z" />
        <path fill="#848c9c" d="M254.9 194.3l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M259.8 194.3l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M260.5 194.3l.7.6-.7-.6z" />
        <path fill="#cecece" d="M261.2 194.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M241.5 195l.7.6-.7-.7z" />
        <path fill="#bdbdbd" d="M242.2 195l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M243 195l.6.6-.7-.7z" />
        <path fill="#42425a" d="M243.7 195l.7.6-.8-.7z" />
        <path fill="#425a84" d="M244.3 195l.7.6-.7-.7z" />
        <path fill="#00184a" d="M245.5 195.2l.5.2-.5-.2z" />
        <path fill="#002984" d="M247 195.2l.4.2-.5-.2z" />
        <path
          fill="#003994"
          d="M235.7 201.5a59 59 0 00-26.7 4.9c-4.8 2.8-4.3 10.7 2.1 10.5v.6h-1.4v.7l10.6-2.7v-.6H216v-.7h5l-1.4-2.7 25.3-2.7-1.4-4.7a69 69 0 0126 2v.7l-5.6-1.3c.6 2.9 4 2.2 6.3 1.3l-7 1.4v.6l16.2 1.5 16.8 3.9v.7l-9.1-1.4v.7l11.2 3.3-2-2v-.6l2.7 3.3c4.5.2 7.9 1.2 10.6 4.7l-9.8-4 5.6 12.7h.7v-2h.7v2l6.3-1.3c-1.6-6.8-4.5-14.8-11.2-18.1.6-2.6 0-3.7-2.2-5.4 2.6 5.2-1.7 7.3-5.6 3.4l-1.4 1.3 1.4-4.7-4.2 4 .7-4.6h-.7l-.7 4-2.1-2-.7 2-11.3-1.4v-6l1.4 2h.7v-2l3.5 2h.7l14.1.7.7 5.3h.7l2.1-4.6a74.3 74.3 0 00-26.7-4.7c.5-4.6-4.5-5.4-8.4-6-6.8-1-27.4-3.3-28.2 6z"
        />
        <path fill="#002984" d="M261 195.2l.5.2-.5-.2z" />
        <path fill="#00184a" d="M262.4 195.2l.5.2-.5-.2z" />
        <path fill="#314a7b" d="M263.4 195l.7.6-.8-.7z" />
        <path fill="#42425a" d="M264 195l.8.6-.8-.7z" />
        <path fill="#8c8c8c" d="M264.8 195l.6.6-.6-.7z" />
        <path fill="#ada5a5" d="M265.5 195l.7.6-.7-.7z" />
        <path fill="#dedede" d="M266.2 195l.7.6-.7-.7z" />
        <path fill="#ada5a5" d="M239.4 195.6l.7.7-.7-.7z" />
        <path fill="#63636b" d="M240.1 195.6l.7.7-.7-.7z" />
        <path fill="#21315a" d="M240.8 195.6l.7.7-.7-.7z" />
        <path fill="#00215a" d="M241.5 195.6l.7.7-.7-.7z" />
        <path fill="#002984" d="M242.2 195.6l.7.7-.7-.7m23.3 0l.6.7-.7-.7z" />
        <path fill="#00216b" d="M266.2 195.6l.7.7-.7-.7z" />
        <path fill="#10295a" d="M266.9 195.6l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M267.6 195.6l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M268.3 195.6l.7.7-.7-.7z" />
        <path fill="#efefef" d="M237.3 196.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M238 196.3l.7.7-.7-.7z" />
        <path fill="#10214a" d="M238.7 196.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M239.4 196.3l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M246.5 196.3l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M247.2 196.3l.7.7-.7-.7z" />
        <path fill="#295284" d="M247.9 196.3l.7.7-.7-.7m1.4 0l.7.7-.7-.7zm4.2 0l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M257.7 196.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M259.8 196.3l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M260.5 196.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M268.3 196.3l.7.7-.7-.7z" />
        <path fill="#10295a" d="M269 196.3l.7.7-.7-.7z" />
        <path fill="#63636b" d="M269.7 196.3l.7.7-.7-.7z" />
        <path fill="#dedede" d="M270.4 196.3l.7.7-.7-.7z" />
        <path fill="#efefef" d="M236 197l-.8 1.3.7-1.3z" />
        <path fill="#8c8c8c" d="M236.6 197l.7.6-.7-.6z" />
        <path fill="#10295a" d="M237.3 197l.7.6-.7-.6z" />
        <path fill="#5a6b63" d="M241.5 197l.7.6-.7-.6z" />
        <path fill="#7b7b52" d="M242.2 197l.7.6-.7-.6z" />
        <path fill="#ad9431" d="M243 197l.6.6-.7-.6z" />
        <path fill="#9c8c42" d="M243.7 197l.7.6-.8-.6z" />
        <path fill="#395273" d="M244.3 197l.7.6-.7-.6z" />
        <path fill="#8c8442" d="M246.5 197l.7.6-.7-.6z" />
        <path fill="#9c8c42" d="M247.9 197l.7.6-.7-.6z" />
        <path fill="#395273" d="M249.3 197l.7.6-.7-.6zm4.2 0l.7.6-.7-.6z" />
        <path fill="#9c8c42" d="M260.5 197l.7.6-.7-.6z" />
        <path fill="#bd9c29" d="M263.8 197.2l.5.2-.5-.2z" />
        <path fill="#295284" d="M264.8 197l.6.6-.6-.6z" />
        <path fill="#00184a" d="M270.4 197l.7.6-.7-.6z" />
        <path fill="#63636b" d="M271 197l.8.6-.7-.6z" />
        <path fill="#dedede" d="M271.8 197l.7.6-.7-.6z" />
        <path fill="#31394a" d="M236 197.6l.6.7-.7-.7z" />
        <path fill="#deb518" d="M241.5 197.6l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M244.3 197.6l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M246.5 197.6l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M247.9 197.6l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M255.6 197.6l.7.7-.7-.7z" />
        <path fill="#003994" d="M256.3 197.6l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M257 197.6l.7.7-.7-.7z" />
        <path fill="#395273" d="M258.4 197.6l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M262.6 197.6l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M264.8 197.6l.6.7-.6-.7z" />
        <path fill="#10214a" d="M271.8 197.6l1.4 1.4-1.4-1.4z" />
        <path fill="#cecece" d="M272.5 197.6l.7.7-.7-.7z" />
        <path fill="#212139" d="M235.2 198.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M241.5 198.3l.7.7-.7-.7z" />
        <path fill="#cead21" d="M242.2 198.3l.7.7-.7-.7z" />
        <path fill="#003994" d="M243.2 198.7l.2.5-.2-.5z" />
        <path fill="#395273" d="M243.9 198.7l.2.5-.2-.5z" />
        <path fill="#6b735a" d="M245 198.3l.8.7-.7-.7z" />
        <path fill="#cead21" d="M247.2 198.3l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M248.6 198.3l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M255.6 198.3l.7.7-.7-.7z" />
        <path fill="#395273" d="M256.3 198.3l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M257 198.3l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M258.4 198.3l.7.7-.7-.7z" />
        <path fill="#295284" d="M259.1 198.3l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M262.6 198.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M264.8 198.3l.6.7-.6-.7z" />
        <path fill="#efefef" d="M273.2 198.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M234.5 199l.7.6-.7-.6z" />
        <path fill="#00216b" d="M235.2 199l.7.6-.7-.6z" />
        <path fill="#7b7b52" d="M241.5 199l.7.6-.7-.6z" />
        <path fill="#395273" d="M245 199l.8.6-.7-.6z" />
        <path fill="#295284" d="M245.8 199l.7.6-.7-.6z" />
        <path fill="#4a636b" d="M247.2 199l.7.6-.7-.6z" />
        <path fill="#deb518" d="M247.9 199l.7.6-.7-.6z" />
        <path fill="#ad9431" d="M248.6 199l.7.6-.7-.6m9.1 0l.7.6-.7-.6z" />
        <path fill="#395273" d="M259.4 199.4l.2.5-.2-.5z" />
        <path fill="#efbd08" d="M262.6 199l.7.6-.7-.6z" />
        <path fill="#ad9431" d="M263.4 199l.7.6-.8-.6z" />
        <path fill="#cead21" d="M264 199l.8.6-.8-.6z" />
        <path fill="#ad9431" d="M264.8 199l.6.6-.6-.6z" />
        <path fill="#002984" d="M272.5 199l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M273.2 199l.7.6-.7-.6m-38.7.6l.7.7-.7-.7z" />
        <path fill="#002984" d="M235.4 200l.3.5-.3-.4z" />
        <path fill="#6b735a" d="M241.5 199.6l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M243 199.6l.6.7-.7-.7z" />
        <path fill="#184a8c" d="M245 199.6l.8.7-.7-.7z" />
        <path fill="#5a6b63" d="M245.8 199.6l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M247.2 199.6l.7.7-.7-.7z" />
        <path fill="#cead21" d="M247.9 199.6l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M255.6 199.6l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M256.3 199.6l.7.7-.7-.7z" />
        <path fill="#deb518" d="M257 199.6l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M262 199.6l.6.7-.7-.7z" />
        <path fill="#4a636b" d="M263.4 199.6l.7.7-.8-.7z" />
        <path fill="#bd9c29" d="M264.5 199.9l.5.2-.5-.2z" />
        <path fill="#bdbdbd" d="M234.5 200.3l.7.7-.7-.7z" />
        <path fill="#395273" d="M241.5 200.3l.7.7-.7-.7z" />
        <path fill="#cead21" d="M243 200.3l.6.7-.7-.7z" />
        <path fill="#8c8442" d="M243.7 200.3l.7.7-.8-.7z" />
        <path fill="#395273" d="M244.3 200.3l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M245.8 200.3l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M249.3 200.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M255.8 200.8l.3.4-.3-.5m1.2-.4l1.4 2-1.4-2z" />
        <path fill="#4a636b" d="M259.1 200.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M262 200.3l.6.7-.7-.7z" />
        <path fill="#deb518" d="M264 200.3l.8.7-.8-.7z" />
        <path fill="#ada5a5" d="M231.7 201l.7.6-.7-.6z" />
        <path fill="#42425a" d="M234.5 201l.7.6-.7-.6z" />
        <path fill="#00216b" d="M235.2 201l.7.6-.7-.6z" />
        <path fill="#7b7b52" d="M243 201l.6.6-.7-.6z" />
        <path fill="#bd9c29" d="M245.8 201l.7.6-.7-.6z" />
        <path fill="#cead21" d="M246.5 201l.7.6-.7-.6z" />
        <path fill="#395273" d="M247.2 201l.7.6-.7-.6z" />
        <path fill="#295284" d="M247.9 201l.7.6-.7-.6z" />
        <path fill="#deb518" d="M248.6 201l.7.6-.7-.6z" />
        <path fill="#bd9c29" d="M249.3 201l.7.6-.7-.6z" />
        <path fill="#7b7b52" d="M259.1 201l.7.6-.7-.6z" />
        <path fill="#ad9431" d="M262.6 201l.7.6-.7-.6z" />
        <path fill="#cead21" d="M264 201l.8.6-.8-.6z" />
        <path fill="#184a8c" d="M265.5 201l.7.6-.7-.6z" />
        <path fill="#002984" d="M272.5 201l.7.6-.7-.6z" />
        <path fill="#42425a" d="M273.2 201l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M276 201l.7.6-.7-.6z" />
        <path fill="#efefef" d="M278.8 201l.7.6-.7-.6z" />
        <path fill="#cecece" d="M223.3 201.6l.6.7-.7-.7z" />
        <path fill="#bdbdbd" d="M224 201.6l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M225.1 201.9l.5.2-.5-.2z" />
        <path fill="#42425a" d="M226 201.6l.8.7-.7-.7z" />
        <path fill="#314a7b" d="M226.8 201.6l.7.7-.7-.7z" />
        <path fill="#00184a" d="M228 201.9l.4.2-.5-.2z" />
        <path fill="#00216b" d="M228.9 201.6l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M243 201.6l.6.7-.7-.7z" />
        <path fill="#ffce08" d="M245.8 201.6l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M246.5 201.6l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M248.6 201.6l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M249.3 201.6l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M250.7 201.6l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M251.4 201.6l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M252 201.6l.8.7-.7-.7z" />
        <path fill="#395273" d="M254.9 201.6l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M259.1 201.6l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M259.8 201.6l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M261.2 201.6l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M262.6 201.6l.7.7-.7-.7z" />
        <path fill="#395273" d="M264 201.6l.8.7-.8-.7m1.5 0l.7.7-.7-.7z" />
        <path fill="#00216b" d="M278.8 201.6l.7.7-.7-.7z" />
        <path fill="#00184a" d="M280 201.9l.5.2-.5-.2z" />
        <path fill="#314a7b" d="M281 201.6l.6.7-.7-.7z" />
        <path fill="#42425a" d="M281.6 201.6l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M282.3 201.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M283 201.6l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M283.8 201.6l.6.7-.6-.7z" />
        <path fill="#cecece" d="M284.4 201.6l.8.7-.8-.7m-65.4.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M219.7 202.3l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M220.4 202.3l.7.7-.7-.7z" />
        <path fill="#42425a" d="M221.1 202.3l.7.7-.7-.7z" />
        <path fill="#29396b" d="M221.8 202.3l.7.7-.7-.7z" />
        <path fill="#00184a" d="M222.5 202.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M223.3 202.3l.6.7-.7-.7z" />
        <path fill="#002984" d="M224 202.3l.6.7-.7-.7z" />
        <path fill="#00216b" d="M234.5 202.3l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M242.2 202.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M243 202.3l.6.7-.7-.7z" />
        <path fill="#184a8c" d="M264 202.3l.8.7-.8-.7z" />
        <path fill="#7b7b52" d="M264.8 202.3l.6.7-.6-.7z" />
        <path fill="#295284" d="M265.5 202.3l.7.7-.7-.7z" />
        <path fill="#00184a" d="M271.8 202.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M284.2 202.5l.5.3-.5-.3z" />
        <path fill="#00184a" d="M285.1 202.3l.7.7-.7-.7z" />
        <path fill="#10295a" d="M285.9 202.3l.7.7-.7-.7z" />
        <path fill="#42425a" d="M286.6 202.3l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M287.3 202.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M288 202.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M288.7 202.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M216.2 203l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M217 203l.6.6-.7-.6z" />
        <path fill="#525a6b" d="M217.6 203l.7.6-.7-.6z" />
        <path fill="#10295a" d="M218.3 203l.7.6-.7-.6z" />
        <path fill="#00216b" d="M219 203l.7.6-.7-.6z" />
        <path fill="#395273" d="M226.8 203l.7.6-.7-.6z" />
        <path fill="#00184a" d="M234.5 203l.7.6-.7-.6z" />
        <path fill="#00215a" d="M271.8 203l-.7 1.3.7-1.3z" />
        <path fill="#395273" d="M275.3 203l.7.6-.7-.6z" />
        <path fill="#184a8c" d="M276 203l.7.6-.7-.6z" />
        <path fill="#395273" d="M277.4 203l.7.6-.7-.6z" />
        <path fill="#00216b" d="M288.7 203l.7.6-.7-.6z" />
        <path fill="#00184a" d="M289.4 203l.7.6-.7-.6z" />
        <path fill="#42425a" d="M290 203l.8.6-.7-.6z" />
        <path fill="#8c8c8c" d="M290.8 203l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M291.5 203l.7.6-.7-.6z" />
        <path fill="#efefef" d="M292.2 203l.7.6-.7-.6z" />
        <path fill="#dedede" d="M213.4 203.7l.7.6-.7-.7z" />
        <path fill="#7b7373" d="M214.1 203.7l.7.6-.7-.7z" />
        <path fill="#314a7b" d="M214.8 203.7l.7.6-.7-.7z" />
        <path fill="#00184a" d="M215.5 203.7l.7.6-.7-.7z" />
        <path fill="#002984" d="M216.2 203.7l.7.6-.7-.7z" />
        <path fill="#184a8c" d="M221.1 203.7l.7.6-.7-.7z" />
        <path fill="#6b735a" d="M221.8 203.7l.7.6-.7-.7z" />
        <path fill="#395273" d="M222.5 203.7l.7.6-.7-.7z" />
        <path fill="#5a6b63" d="M225.4 203.7l.7.6-.7-.7z" />
        <path fill="#efbd08" d="M226 203.7l.8.6-.7-.7z" />
        <path fill="#ffce08" d="M227.2 203.9l.5.2-.5-.2z" />
        <path fill="#4a636b" d="M228.2 203.7l.7.6-.7-.7z" />
        <path fill="#00215a" d="M234.5 203.7l.7.6-.7-.7z" />
        <path fill="#002984" d="M246.2 203.9l.5.2-.5-.2z" />
        <path fill="#00215a" d="M247.2 203.7l.7.6-.7-.7z" />
        <path fill="#00184a" d="M247.9 203.7l.7.6-.7-.7z" />
        <path fill="#29396b" d="M248.6 203.7l.7.6-.7-.7z" />
        <path fill="#425a84" d="M249.3 203.7l.7.6-.7-.7z" />
        <path fill="#636b7b" d="M253.5 203.7l.7.6-.7-.7z" />
        <path fill="#737b94" d="M254.2 203.7l.7.6-.7-.7z" />
        <path fill="#29396b" d="M259.1 203.7l.7.6-.7-.7z" />
        <path fill="#00184a" d="M260.3 203.9l.5.2-.5-.2z" />
        <path fill="#002984" d="M261.7 203.9l.5.2-.5-.2z" />
        <path fill="#6b6b4a" d="M271.8 203.7l.7.6-.7-.7z" />
        <path fill="#7b7b52" d="M276 203.7l1.4 5.3-1.4-5.3z" />
        <path fill="#cead21" d="M279.5 203.7l.7.6-.7-.7z" />
        <path fill="#4a636b" d="M280.2 203.7l.7.6-.7-.7z" />
        <path fill="#8c8442" d="M281.6 203.7l.7.6-.7-.7z" />
        <path fill="#395273" d="M284.4 203.7l-.6 2.6.6-2.6z" />
        <path fill="#002984" d="M291.5 203.7l.7.6-.7-.7z" />
        <path fill="#00215a" d="M292.2 203.7l.7.6-.7-.7z" />
        <path fill="#314a7b" d="M292.9 203.7l.7.6-.7-.7z" />
        <path fill="#7b7373" d="M293.6 203.7l.7.6-.7-.7z" />
        <path fill="#cecece" d="M294.3 203.7l.7.6-.7-.7z" />
        <path fill="#efefef" d="M211.3 204.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M212 204.3l.7.7-.7-.7z" />
        <path fill="#31425a" d="M212.7 204.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M213.4 204.3l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M220.4 204.3l.7.7-.7-.7z" />
        <path fill="#cead21" d="M223.3 204.3l.6.7-.7-.7z" />
        <path fill="#deb518" d="M225.8 204.5l.5.3-.5-.3z" />
        <path fill="#7b7b52" d="M226.8 204.3l.7.7-.7-.7z" />
        <path fill="#deb518" d="M228 204.5l.4.3-.5-.3z" />
        <path fill="#00216b" d="M235.2 204.3l.7.7-.7-.7m8.5 0l.7.7-.8-.7z" />
        <path fill="#63636b" d="M244.3 204.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M261.2 204.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M262 204.3l.6.7-.7-.7z" />
        <path fill="#ada5a5" d="M262.6 204.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M263.4 204.3l.7.7-.8-.7z" />
        <path fill="#00184a" d="M264.3 204.8l.2.4-.2-.4z" />
        <path fill="#001039" d="M271 204.3l.8.7-.7-.7z" />
        <path fill="#deb518" d="M271.8 204.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M278.1 204.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M278.8 204.3l-.7 1.4.7-1.4z" />
        <path fill="#deb518" d="M279.5 204.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M281.6 204.3l1.4 1.4-1.4-1.4zm4.3 0l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M286.6 204.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M287.3 204.3l.7.7-.7-.7z" />
        <path fill="#ad9431" d="M288 204.3l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M288.7 204.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M294.3 204.3l.7.7-.7-.7z" />
        <path fill="#21315a" d="M295 204.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M295.7 204.3l.7.7-.7-.7z" />
        <path fill="#dedede" d="M296.4 204.3l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M209.9 205l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M210.6 205l.7.7-.7-.7z" />
        <path fill="#00215a" d="M211.3 205l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M217.6 205l.7.7-.7-.7z" />
        <path fill="#deb518" d="M221.1 205l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M221.8 205l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M222.5 205l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M224 205l.6.7-.7-.7z" />
        <path fill="#ffce08" d="M225.4 205l1.4 1.3-1.4-1.3z" />
        <path fill="#8c8442" d="M226 205l.8.7-.7-.7z" />
        <path fill="#003994" d="M226.8 205l.7.7-.7-.7z" />
        <path fill="#295284" d="M227.5 205l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M228.2 205l.7.7-.7-.7z" />
        <path fill="#001039" d="M235.2 205l.7.7-.7-.7z" />
        <path fill="#00216b" d="M241.5 205l.7.7-.7-.7z" />
        <path fill="#00184a" d="M242.2 205l.7.7-.7-.7z" />
        <path fill="#00216b" d="M243 205l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M244.3 205l.7.7-.7-.7z" />
        <path fill="#dedede" d="M262.6 205l.7.7-.7-.7z" />
        <path fill="#63636b" d="M263.6 205.4l.2.5-.2-.5z" />
        <path fill="#002984" d="M265 205.4l.2.5-.2-.5z" />
        <path fill="#313931" d="M271 205l.8.7-.7-.7z" />
        <path fill="#295284" d="M276.7 205l.7.7-.7-.7z" />
        <path fill="#003994" d="M278.8 205l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M279.5 205l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M281 205l.6.7-.7-.7z" />
        <path fill="#efbd08" d="M281.6 205l.7.7-.7-.7z" />
        <path fill="#003994" d="M283 205l.7.7-.7-.7m2.4.4l.2.5-.2-.5z" />
        <path fill="#cead21" d="M285.9 205l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M286.6 205l.7.7-.7-.7z" />
        <path fill="#cead21" d="M287.3 205l.7.7-.7-.7z" />
        <path fill="#295284" d="M289.4 205l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M290 205l.8.7-.7-.7z" />
        <path fill="#cead21" d="M290.8 205l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M291.5 205l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M292.2 205l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M292.9 205l.7.7-.7-.7z" />
        <path fill="#00216b" d="M296.4 205l.7.7-.7-.7z" />
        <path fill="#31394a" d="M297.1 205l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M297.8 205l.7.7-.7-.7z" />
        <path fill="#efefef" d="M298.5 205l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M208.5 205.7l.7.6-.7-.6z" />
        <path fill="#212139" d="M209.2 205.7l.7.6-.7-.6z" />
        <path fill="#002984" d="M209.9 205.7l.7.6-.7-.6z" />
        <path fill="#5a6b63" d="M212.7 205.7l.7.6-.7-.6z" />
        <path fill="#9c8c42" d="M213.4 205.7l.7.6-.7-.6z" />
        <path fill="#deb518" d="M214.1 205.7l.7.6-.7-.6z" />
        <path fill="#bd9c29" d="M215.5 205.7l.7.6-.7-.6z" />
        <path fill="#7b7b52" d="M217.6 205.7l.7.6-.7-.6z" />
        <path fill="#184a8c" d="M219 205.7l.7.6-.7-.6z" />
        <path fill="#395273" d="M219.7 205.7l.7 2-.7-2z" />
        <path fill="#7b7b52" d="M221.1 205.7l.7.6-.7-.6z" />
        <path fill="#003994" d="M221.8 205.7v2.6h1.4v-2.6h-1.4z" />
        <path fill="#efbd08" d="M223.3 205.7l.6.6-.7-.6z" />
        <path fill="#deb518" d="M224 205.7l.6.6-.7-.6z" />
        <path fill="#bd9c29" d="M225.4 205.7l.7.6-.7-.6z" />
        <path fill="#efbd08" d="M226.8 205.7l.7.6-.7-.6z" />
        <path fill="#bd9c29" d="M227.5 205.7l-.7 1.3.7-1.3z" />
        <path fill="#7b7b52" d="M228.2 205.7l.7.6-.7-.6z" />
        <path fill="#00215a" d="M235.2 205.7l.7.6-.7-.6z" />
        <path fill="#002984" d="M238 205.7l.7.6-.7-.6z" />
        <path fill="#00184a" d="M239.7 206.6v1.6h3.3l-3.3-1.6z" />
        <path fill="#00215a" d="M240.8 205.7l.7.6-.7-.6z" />
        <path fill="#002984" d="M241.5 205.7l.7.6-.7-.6z" />
        <path fill="#31394a" d="M244.3 205.7l.7.6-.7-.6z" />
        <path fill="#00216b" d="M267.6 205.7l1.4 1.3-1.4-1.3z" />
        <path fill="#002984" d="M268.3 205.7l.7.6-.7-.6z" />
        <path fill="#00184a" d="M270.6 206.1l.2.5-.2-.5z" />
        <path fill="#8c8442" d="M271 205.7l.8.6-.7-.6z" />
        <path fill="#9c8c42" d="M280.2 205.7l.7.6-.7-.6z" />
        <path fill="#003994" d="M281.2 206.1l.2.5-.2-.5z" />
        <path fill="#deb518" d="M282.3 205.7l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M283 205.7l.7.6-.7-.6z" />
        <path fill="#295284" d="M284.4 205.7l.8.6-.8-.6z" />
        <path fill="#ad9431" d="M286.6 205.7l.7.6-.7-.6z" />
        <path fill="#003994" d="M287.3 205.7l.7.6-.7-.6z" />
        <path fill="#295284" d="M288 205.7l.7.6-.7-.6z" />
        <path fill="#8c8442" d="M289.4 205.7l.7.6-.7-.6z" />
        <path fill="#9c8c42" d="M290 205.7l.8.6-.7-.6z" />
        <path fill="#deb518" d="M290.8 205.7l.7.6-.7-.6z" />
        <path fill="#ffce08" d="M291.5 207l2.1-.7-2.1.7z" />
        <path fill="#6b735a" d="M293.6 205.7l.7.6-.7-.6z" />
        <path fill="#295284" d="M295 205.7l-.7 1.3.7-1.3z" />
        <path fill="#10214a" d="M298.5 205.7l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M299.2 205.7l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M207 206.3l.8.7-.7-.7z" />
        <path fill="#42425a" d="M207.8 206.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M208.5 206.3l.7.7-.7-.7z" />
        <path fill="#ad9431" d="M212.7 206.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M214.6 206.6l.4.2-.4-.3m1.6-.2l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M217.6 206.3l.7.7-.7-.7z" />
        <path fill="#395273" d="M221.1 206.3l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M225.6 206.8l.2.4-.2-.4z" />
        <path fill="#9c8c42" d="M226 206.3l.8.7-.7-.7z" />
        <path fill="#ffce08" d="M228 206.6l.4.2-.5-.3z" />
        <path fill="#8c8442" d="M228.9 206.3l.7.7-.7-.7z" />
        <path fill="#00184a" d="M236.1 206.8l.3.4-.3-.4z" />
        <path fill="#002984" d="M236.6 206.3l.7.7-.7-.7z" />
        <path fill="#001039" d="M237.3 206.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M238 206.3l.7.7-.7-.7z" />
        <path fill="#00215a" d="M244.3 206.3l.7.7-.7-.7z" />
        <path fill="#efefef" d="M245 206.3l.8.7-.7-.7z" />
        <path fill="#21315a" d="M263.4 206.3l.7.7-.8-.7z" />
        <path fill="#00184a" d="M269 206.3l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M278.1 206.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M278.8 206.3l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M279.5 206.3l.7.7-.7-.7z" />
        <path fill="#deb518" d="M280.2 206.3l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M284.4 206.3l.8.7-.8-.7z" />
        <path fill="#184a8c" d="M285.1 206.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M286.6 206.3l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M287.3 206.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M288 206.3l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M289.4 206.3l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M290.8 206.3l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M292.2 206.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M292.9 206.3l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M293.6 206.3l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M295.7 206.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M299.2 206.3l.7.7-.7-.7z" />
        <path fill="#212139" d="M300 206.3l.6.7-.7-.7z" />
        <path fill="#ada5a5" d="M300.6 206.3l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M206.4 207l-.7 1.3.7-1.3z" />
        <path fill="#00215a" d="M207 207l.8.7-.7-.7z" />
        <path fill="#6b735a" d="M212.7 207l.7.7-.7-.7z" />
        <path fill="#295284" d="M214.1 207l.7.7-.7-.7z" />
        <path fill="#003994" d="M214.8 207v2.7h.7l-.7-2.7z" />
        <path fill="#9c8c42" d="M215.5 207l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M217 207l1.3 1.3-1.4-1.3z" />
        <path fill="#395273" d="M217.6 207l.7.7-.7-.7zm8.5 0l.7.7-.7-.7z" />
        <path fill="#003994" d="M227.2 207.2l.5.2-.5-.2z" />
        <path fill="#deb518" d="M228.2 207l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M228.9 207l.7.7-.7-.7z" />
        <path fill="#001039" d="M236.8 207.4l.3.5-.3-.5z" />
        <path fill="#002984" d="M244.3 207l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M245 207l.8.7-.7-.7z" />
        <path fill="#cecece" d="M262.6 207l.7.7-.7-.7z" />
        <path fill="#00216b" d="M263.4 207l.7.7-.8-.7z" />
        <path fill="#000818" d="M269.7 207l.7.7-.7-.7z" />
        <path fill="#395273" d="M278.1 207l.7.7-.7-.7z" />
        <path fill="#003994" d="M278.8 207l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M279.5 207l-.7 1.3.7-1.3z" />
        <path fill="#ffce08" d="M280.2 207l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M282.3 207l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M283.8 207l.6.7-.6-.7z" />
        <path fill="#395273" d="M285 207.2l.4.2-.5-.2z" />
        <path fill="#9c8c42" d="M290.8 207l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M291.5 207l.7.7-.7-.7z" />
        <path fill="#cead21" d="M294.3 207l.7.7-.7-.7z" />
        <path fill="#395273" d="M298.5 207l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M299.2 207l.7.7-.7-.7z" />
        <path fill="#00216b" d="M300.6 207l.7.7-.7-.7z" />
        <path fill="#63636b" d="M301.3 207l1.4 1.3-1.4-1.3z" />
        <path fill="#00216b" d="M206.4 207.7l.7.6-.7-.6z" />
        <path fill="#295284" d="M212.7 207.7l.7.6-.7-.6z" />
        <path fill="#184a8c" d="M215.5 207.7l.7.6-.7-.6z" />
        <path fill="#5a6b63" d="M217 207.7l.6.6-.7-.6z" />
        <path fill="#7b7b52" d="M219 207.7l.7.6-.7-.6z" />
        <path fill="#cead21" d="M221.1 207.7l.7.6-.7-.6m2.1 0l.8.6-.8-.6z" />
        <path fill="#7b7b52" d="M225.4 207.7l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M226.8 207.7l.7.6-.7-.6z" />
        <path fill="#efbd08" d="M228.4 208.1l.2.5-.2-.5z" />
        <path fill="#ad9431" d="M228.9 207.7l.7.6-.7-.6z" />
        <path fill="#00216b" d="M237.3 207.7l.7.6-.7-.6z" />
        <path fill="#002984" d="M237.3 209l2.1-1.3-2 1.3z" />
        <path fill="#00216b" d="M239.4 207.7l.7.6-.7-.6z" />
        <path fill="#525a6b" d="M245 207.7l.8.6-.7-.6z" />
        <path fill="#63636b" d="M262.6 207.7l.7.6-.7-.6z" />
        <path fill="#00216b" d="M266.9 207.7l.7.6-.7-.6z" />
        <path fill="#002984" d="M266.9 209l2-1.3-2 1.3z" />
        <path fill="#00184a" d="M269 207.7l.7.6-.7-.6z" />
        <path fill="#00216b" d="M269.7 207.7l.7.6-.7-.6z" />
        <path fill="#5a6b63" d="M276.7 207.7l.7.6-.7-.6z" />
        <path fill="#9c8c42" d="M278.1 207.7l.7.6-.7-.6z" />
        <path fill="#efbd08" d="M279.5 207.7l.7.6-.7-.6z" />
        <path fill="#deb518" d="M280.2 207.7l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M282.3 207.7l.7.6-.7-.6zm2.8 0l.7.6-.7-.6m1.4 0l.8.6-.7-.6z" />
        <path fill="#5a6b63" d="M287.3 207.7l.7.6-.7-.6z" />
        <path fill="#efbd08" d="M288 207.7l.7.6-.7-.6z" />
        <path fill="#cead21" d="M290.8 207.7l.7.6-.7-.6z" />
        <path fill="#bd9c29" d="M291.5 207.7l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M293.6 207.7l.7.6-.7-.6z" />
        <path fill="#9c8c42" d="M300 207.7l.6.6-.7-.6z" />
        <path fill="#002984" d="M301.3 207.7l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M205 208.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M205.7 208.3l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M213.4 208.3l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M214.1 208.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M217.2 208.8l.2.4-.3-.4z" />
        <path fill="#ad9431" d="M219 208.3l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M220.4 208.3l.7.7-.7-.7z" />
        <path fill="#ad9431" d="M222.3 208.6l.5.2-.5-.2m1.6-.3l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M226 208.3l.8.7-.7-.7z" />
        <path fill="#4a636b" d="M228.9 208.3l.7.7-.7-.7z" />
        <path fill="#00184a" d="M243.7 208.3l.7.7-.8-.7z" />
        <path fill="#636b7b" d="M245 208.3l.8.7-.7-.7z" />
        <path fill="#8c8c8c" d="M262 208.3l.6.7-.7-.7z" />
        <path fill="#424242" d="M262.6 208.3l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M271 208.3l.8.7-.7-.7z" />
        <path fill="#5a6b63" d="M280.2 208.3l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M284.4 208.3l.8.7-.8-.7z" />
        <path fill="#7b7b52" d="M285.1 208.3l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M286.6 208.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M291.5 208.3l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M292.9 208.3l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M293.6 208.3l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M294.3 208.3l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M295 208.3l-.7 1.4.7-1.4z" />
        <path fill="#5a6b63" d="M297.8 208.3l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M298.5 208.3l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M300.6 208.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M302 208.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M302.7 208.3l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M205 209l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M213.4 209l.7.7-.7-.7z" />
        <path fill="#deb518" d="M214.1 209l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M215.5 209l.7.7-.7-.7z" />
        <path fill="#cead21" d="M218.3 209l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M219 209l-.7 1.3.7-1.3z" />
        <path fill="#ad9431" d="M221.1 209l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M223.3 209l.6.7-.7-.7z" />
        <path fill="#4a636b" d="M226.8 209l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M227.5 209l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M228.2 209l.7.7-.7-.7z" />
        <path fill="#292921" d="M244.3 209l.7.7-.7-.7z" />
        <path fill="#cecece" d="M245 209l.8.7-.7-.7m16.8 0l.7.7-.7-.7z" />
        <path fill="#efefef" d="M262.6 209l1.4 1.3-1.4-1.3z" />
        <path fill="#31394a" d="M263.4 209l.7.7-.8-.7z" />
        <path fill="#7b7b52" d="M281.6 209l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M282.3 209l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M284.4 209l.8.7-.8-.7z" />
        <path fill="#ad9431" d="M285.1 209l.7.7-.7-.7z" />
        <path fill="#deb518" d="M288 209l.7.7-.7-.7z" />
        <path fill="#395273" d="M290 209l.8.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M292.9 209l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M295 209l.7.7-.7-.7z" />
        <path fill="#cead21" d="M295.7 209l.7.7-.7-.7z" />
        <path fill="#003994" d="M299.2 209l-.7 2.7h.7V209z" />
        <path fill="#7b7b52" d="M300 209l.6.7-.7-.7z" />
        <path fill="#5a6b63" d="M301.3 209l.7.7-.7-.7z" />
        <path fill="#425a84" d="M303 209.4l.2.5-.2-.5z" />
        <path fill="#42425a" d="M205 209.7l.7.6-.7-.6z" />
        <path fill="#7b7b52" d="M213.4 209.7l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#deb518" d="M215.5 209.7l.7.6-.7-.6z" />
        <path fill="#5a6b63" d="M217 209.7l.6.6-.7-.6z" />
        <path fill="#ffce08" d="M219 209.7l.7.6-.7-.6z" />
        <path fill="#00216b" d="M242.2 209.7l.7.6-.7-.6z" />
        <path fill="#21315a" d="M243 209.7l.6.6-.7-.6z" />
        <path fill="#63636b" d="M243.7 209.7l.7.6-.8-.6z" />
        <path fill="#efefef" d="M244.3 209.7l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M264 209.7l.8.6-.8-.6z" />
        <path fill="#21315a" d="M264.8 209.7l.6.6-.6-.6z" />
        <path fill="#00216b" d="M265.5 209.7l.7.6-.7-.6z" />
        <path fill="#395273" d="M285.9 209.7l.7.6-.7-.6z" />
        <path fill="#8c8442" d="M288 209.7l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M288.7 209.7l.7.6-.7-.6z" />
        <path fill="#7b7b52" d="M290 209.7l.8.6-.7-.6z" />
        <path fill="#6b735a" d="M292.2 209.7l.7.6-.7-.6z" />
        <path fill="#bd9c29" d="M295.7 209.7l-.7 2 .7-2z" />
        <path fill="#5a6b63" d="M297.1 209.7l.7.6-.7-.6z" />
        <path fill="#ffce08" d="M297.8 209.7l.7.6-.7-.6z" />
        <path fill="#5a6b63" d="M298.5 209.7l.7.6-.7-.6z" />
        <path fill="#395273" d="M300 209.7l.6.6-.7-.6z" />
        <path fill="#6b735a" d="M301.3 209.7l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M205 210.3l.7.7-.7-.7z" />
        <path fill="#395273" d="M213.4 210.3l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M216.2 210.3l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M218.3 210.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M226.8 210.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M227.5 210.3l.7.7-.7-.7z" />
        <path fill="#00184a" d="M228.2 210.3l.7.7-.7-.7z" />
        <path fill="#10295a" d="M228.9 210.3l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M238 210.3l.7.7-.7-.7z" />
        <path fill="#848c9c" d="M238.7 210.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M242.2 210.3l.7.7-.7-.7z" />
        <path fill="#dedede" d="M265.5 210.3l.7.7-.7-.7z" />
        <path fill="#848c9c" d="M269 210.3l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M269.7 210.3l.7.7-.7-.7z" />
        <path fill="#10295a" d="M278.8 210.3l.7.7-.7-.7z" />
        <path fill="#00184a" d="M279.5 210.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M280.2 210.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M281 210.3l.6.7-.7-.7z" />
        <path fill="#4a636b" d="M290 210.3l.8.7-.7-.7z" />
        <path fill="#6b735a" d="M290.8 210.3l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M292.2 210.3l.7.7-.7-.7z" />
        <path fill="#cead21" d="M292.9 210.3l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M294.3 210.3l.7.7-.7-.7z" />
        <path fill="#deb518" d="M295 210.3l.7.7-.7-.7m2.6.3l.4.2-.4-.2z" />
        <path fill="#8c8442" d="M300 210.3l.6.7-.7-.7z" />
        <path fill="#184a8c" d="M301.3 210.3l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M302.7 210.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M205 211l.7.7-.7-.7z" />
        <path fill="#00216b" d="M205.7 211l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M214.1 211l.7.7-.7-.7z" />
        <path fill="#4a636b" d="M214.8 211l.7.7-.7-.7z" />
        <path fill="#002984" d="M219.7 212.3l2.1-.6-2 .7z" />
        <path fill="#00215a" d="M221.8 211l.7.7-.7-.7z" />
        <path fill="#00184a" d="M222.5 211l.7.7-.7-.7z" />
        <path fill="#314a7b" d="M223.3 211l.6.7-.7-.7z" />
        <path fill="#42425a" d="M224 211l.6.7-.7-.7z" />
        <path fill="#636b7b" d="M224.7 211l.7.7-.8-.7z" />
        <path fill="#8c8c8c" d="M225.4 211l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M226 211l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M226.8 211l.7.7-.7-.7z" />
        <path fill="#cecece" d="M227.5 211l.7.7-.7-.7z" />
        <path fill="#dedede" d="M280.2 211l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M281 211l.6.7-.7-.7z" />
        <path fill="#9c9494" d="M281.6 211l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M282.3 211l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M283 211l.7.7-.7-.7z" />
        <path fill="#42425a" d="M283.8 211l.6.7-.6-.7z" />
        <path fill="#314a7b" d="M284.4 211l.8.7-.8-.7z" />
        <path fill="#00184a" d="M285.1 211l.7.7-.7-.7z" />
        <path fill="#00215a" d="M285.9 211l.7.7-.7-.7z" />
        <path fill="#002984" d="M287 211.2l.5.3-.5-.3z" />
        <path fill="#184a8c" d="M292.9 211l.7.7-.7-.7z" />
        <path fill="#5a6b63" d="M296.4 211l.7.7-.7-.7zm1.4 0l.7.7-.7-.7z" />
        <path fill="#295284" d="M299.2 211l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M300.6 211l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M302.7 211l.7.7-.7-.7z" />
        <path fill="#dedede" d="M205 211.7l.7.7-.7-.7z" />
        <path fill="#001039" d="M205.7 211.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M220.4 211.7l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M221.1 211.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M221.8 211.7l-.7 1.3.7-1.3z" />
        <path fill="#bdbdbd" d="M286.6 211.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M287.3 211.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M288 211.7l.7.7-.7-.7z" />
        <path fill="#395273" d="M295 211.7l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M295.7 211.7l.7.7-.7-.7z" />
        <path fill="#deb518" d="M296.4 211.7l.7.7-.7-.7z" />
        <path fill="#bd9c29" d="M297.8 211.7l.7.7-.7-.7z" />
        <path fill="#7b7b52" d="M298.5 211.7l.7.7-.7-.7z" />
        <path fill="#00215a" d="M302 211.7l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M302.7 211.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M203.6 212.3l.7.7-.8-.7z" />
        <path fill="#63636b" d="M204.3 212.3l.6.7-.7-.7z" />
        <path fill="#001039" d="M205.2 212.8l.2.5-.2-.5z" />
        <path fill="#00216b" d="M217.6 212.3l-.7 1.4.7-1.3z" />
        <path fill="#00184a" d="M218.3 212.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M219 212.3l.7.7-.7-.7z" />
        <path fill="#10214a" d="M220.4 212.3l.7.7-.7-.7z" />
        <path fill="#dedede" d="M286.6 212.3l.7.7-.7-.7z" />
        <path fill="#212139" d="M287.3 212.3l.7.7-.7-.7z" />
        <path fill="#00184a" d="M288 212.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M289 212.8l.1.5-.2-.5z" />
        <path fill="#184a8c" d="M296.4 212.3l.7.7-.7-.7z" />
        <path fill="#9c8c42" d="M297.1 212.3l.7.7-.7-.7z" />
        <path fill="#295284" d="M300 212.3l.6.7-.7-.7z" />
        <path fill="#00216b" d="M302.7 212.3l.7.7-.7-.7z" />
        <path fill="#42425a" d="M303.4 212.3l.8.7-.8-.7z" />
        <path fill="#bdbdbd" d="M304.1 212.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M202.8 213l-1.4 2 1.4-2z" />
        <path fill="#10214a" d="M203.6 213l-1.4 2 1.4-2z" />
        <path
          fill="#003994"
          d="M204.3 213c-2 2.1-5 4.5-3.6 7.4-3.7 2-4.4 6.4-5.6 10l7.7 1.4 5.7-12.7-7.8.6v-.6l7-.7-3.5-5.4z"
        />
        <path fill="#002984" d="M214.1 213l.7.7-.7-.7z" />
        <path fill="#00215a" d="M214.8 213l.7.7-.7-.7z" />
        <path fill="#00184a" d="M216 213.2l.4.3-.4-.3z" />
        <path fill="#002984" d="M217.6 213l.7.7-.7-.7z" />
        <path fill="#63636b" d="M221.1 213l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M286.6 213l.7.7-.7-.7z" />
        <path fill="#002984" d="M287.3 213l.7.7-.7-.7z" />
        <path fill="#00216b" d="M291.5 213l.7.7-.7-.7z" />
        <path fill="#184a8c" d="M297.8 213l.7.7-.7-.7z" />
        <path fill="#395273" d="M298.5 213l.7.7-.7-.7z" />
        <path fill="#00215a" d="M304.1 213l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M304.9 213l2 2-2-2z" />
        <path fill="#00216b" d="M205 213.7l.7.7-.7-.7z" />
        <path fill="#002984" d="M205.7 213.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M212 213.7l.7.7-.7-.7z" />
        <path fill="#00184a" d="M213.2 214l.4.1-.4-.2z" />
        <path fill="#00216b" d="M214.1 213.7l.7.7-.7-.7z" />
        <path fill="#42425a" d="M221.1 213.7l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M286.6 213.7l.7.7-.7-.7z" />
        <path fill="#002984" d="M291.5 213.7l.7.7-.7-.7z" />
        <path fill="#00215a" d="M292.2 213.7l.7.7-.7-.7z" />
        <path fill="#00184a" d="M293.4 214l.4.1-.4-.2z" />
        <path fill="#00216b" d="M294.5 214.1l.3.5-.3-.5m10.3-.4l.7.7-.7-.7z" />
        <path fill="#001039" d="M205.7 214.4l.7.6-.7-.6z" />
        <path fill="#00216b" d="M210.1 214.8l.2.5-.2-.5z" />
        <path fill="#00184a" d="M211 214.6l.5.2-.4-.2z" />
        <path fill="#00215a" d="M216.2 214.4l.7.6-.7-.6z" />
        <path fill="#002984" d="M220.4 214.4l.7.6-.7-.6z" />
        <path fill="#21315a" d="M221.1 214.4l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M285.9 214.4l.7.6-.7-.6z" />
        <path fill="#101810" d="M286.6 214.4l.7.6-.7-.6z" />
        <path fill="#00184a" d="M287.7 214.6l.5.2-.5-.2z" />
        <path fill="#00215a" d="M288.7 214.4l.7.6-.7-.6z" />
        <path fill="#00184a" d="M289.4 214.4l.7.6-.7-.6z" />
        <path fill="#00216b" d="M290 214.4l.8.6-.7-.6z" />
        <path fill="#00184a" d="M295.5 214.6l.4.2-.4-.2z" />
        <path fill="#00216b" d="M305.6 214.4l.7.6-.7-.6z" />
        <path fill="#efefef" d="M200.7 215l.7.7-.7-.7z" />
        <path fill="#212139" d="M201.4 215l.7.7-.7-.7z" />
        <path fill="#00216b" d="M205.7 215l.7.7-.7-.7z" />
        <path fill="#002984" d="M206.4 215l.7.7-.7-.7z" />
        <path fill="#00184a" d="M209 215.3l.4.2-.5-.3z" />
        <path fill="#00216b" d="M214.1 215l.7.7-.7-.7z" />
        <path fill="#00184a" d="M214.8 215l.7.7-.7-.7z" />
        <path fill="#00216b" d="M215.5 215l.7.7-.7-.7z" />
        <path fill="#001039" d="M220.4 215l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M221.1 215l-.7 1.4.7-1.4z" />
        <path fill="#7b7373" d="M285.9 215l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M286.6 215l.7.7-.7-.7z" />
        <path fill="#00215a" d="M287.3 215l.7.7-.7-.7z" />
        <path fill="#002984" d="M290 215l.8.7-.7-.7z" />
        <path fill="#00184a" d="M291.3 215.3l.4.2-.4-.3z" />
        <path fill="#002984" d="M292.2 215l.7.7-.7-.7z" />
        <path fill="#00216b" d="M296.4 215l.7.7-.7-.7z" />
        <path fill="#00184a" d="M297.1 215l.7.7-.7-.7z" />
        <path fill="#002984" d="M297.8 215l.7.7-.7-.7z" />
        <path fill="#00184a" d="M306.3 215l.7.7-.7-.7z" />
        <path fill="#cecece" d="M307 215l.7.7-.7-.7z" />
        <path fill="#52525a" d="M200.7 215.7l.7.7-.7-.7z" />
        <path fill="#002984" d="M208.5 215.7l.7.7-.7-.7z" />
        <path fill="#00184a" d="M213.2 216l.4.1-.4-.2z" />
        <path fill="#002984" d="M214.1 215.7l.7.7-.7-.7z" />
        <path fill="#10214a" d="M219.7 215.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M287.3 215.7l.7.7-.7-.7z" />
        <path fill="#21315a" d="M288 215.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M292.2 215.7l.7.7-.7-.7z" />
        <path fill="#001039" d="M292.9 215.7l.7.7-.7-.7z" />
        <path fill="#002984" d="M293.6 215.7l.7.7-.7-.7z" />
        <path fill="#31425a" d="M307 215.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M307.7 215.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M200 216.4l.7.6-.7-.6z" />
        <path fill="#00216b" d="M200.7 216.4l.7.6-.7-.6m5.7 0l.7.6-.7-.6z" />
        <path fill="#00184a" d="M211.8 216.6l.4.2-.4-.2z" />
        <path fill="#00216b" d="M217.6 216.4l.7.6-.7-.6z" />
        <path fill="#21315a" d="M218.3 216.4l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M219 216.4l.7.6-.7-.6z" />
        <path fill="#efefef" d="M219.7 216.4l.7.6-.7-.6m68.3 0l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M288.7 216.4l.7.6-.7-.6z" />
        <path fill="#314a7b" d="M289.4 216.4l.7.6-.7-.6z" />
        <path fill="#00216b" d="M290 216.4l.8.6-.7-.6m3.5 0l-.7 1.3.7-1.3z" />
        <path fill="#001039" d="M294.3 216.4l.7.6-.7-.6z" />
        <path fill="#002984" d="M295 216.4l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M307.7 216.4l.7.6-.7-.6z" />
        <path fill="#efefef" d="M199.3 217l.7.7-.7-.7z" />
        <path fill="#10214a" d="M200 217l.7.7-.7-.7z" />
        <path fill="#002984" d="M207.8 217l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#00184a" d="M210.3 217.3l.5.2-.5-.2z" />
        <path fill="#002984" d="M214.1 217l.7.7-.7-.7z" />
        <path fill="#00216b" d="M214.8 217l.7.7-.7-.7z" />
        <path fill="#00184a" d="M215.5 217l.7.7-.7-.7z" />
        <path fill="#42425a" d="M216.2 217l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M217 217l.6.7-.7-.7z" />
        <path fill="#cecece" d="M217.6 217l.7.7-.7-.7z" />
        <path fill="#dedede" d="M290 217l.8.7-.7-.7z" />
        <path fill="#8c8c8c" d="M290.8 217l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M291.5 217l.7.7-.7-.7z" />
        <path fill="#10295a" d="M292.2 217l.7.7-.7-.7z" />
        <path fill="#002984" d="M293.6 217l.7.7-.7-.7z" />
        <path fill="#003994" d="M294.3 217l.7.7-.7-.7z" />
        <path fill="#00216b" d="M295 217l.7.7-.7-.7z" />
        <path fill="#001039" d="M295.7 217l.7.7-.7-.7z" />
        <path fill="#00216b" d="M296.4 217l.7.7-.7-.7m2.8 0l.7.7-.7-.7m8.5 0l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M308.4 217l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M199.3 217.7l.7.7-.7-.7z" />
        <path fill="#00215a" d="M207.8 217.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M209.2 217.7l.7.7-.7-.7m2 0l.8.7-.7-.7z" />
        <path fill="#21315a" d="M212 217.7l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M212.7 217.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M214.1 217.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M214.8 217.7l.7.7-.7-.7m78 0l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M293.6 217.7l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M295 217.7l.7.7-.7-.7z" />
        <path fill="#21315a" d="M295.7 217.7l.7.7-.7-.7z" />
        <path fill="#002984" d="M298.5 217.7l.7.7-.7-.7z" />
        <path fill="#42425a" d="M308.4 217.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M198.6 218.4l.7.6-.7-.6z" />
        <path fill="#10295a" d="M199.3 218.4l.7.6-.7-.6z" />
        <path fill="#00215a" d="M205 218.4l.7.6-.7-.6z" />
        <path fill="#21315a" d="M209.9 218.4l.7.6-.7-.6z" />
        <path fill="#52525a" d="M210.6 218.4l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M211.3 218.4l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M214.1 218.4l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M292.2 218.4l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M292.9 218.4l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M295.5 218.6l.4.2-.4-.2z" />
        <path fill="#8c8c8c" d="M296.4 218.4l.7.6-.7-.6z" />
        <path fill="#292921" d="M297.1 218.4l.7.6-.7-.6z" />
        <path fill="#080829" d="M297.8 218.4l.7.6-.7-.6z" />
        <path fill="#00216b" d="M301.3 218.4l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M309 218.4l.8.6-.7-.6z" />
        <path fill="#63636b" d="M198.6 219l.7.7-.7-.6z" />
        <path fill="#00215a" d="M200.7 219l.7.7-.7-.6z" />
        <path fill="#00184a" d="M202 219.3l.4.2-.5-.2z" />
        <path fill="#00216b" d="M202.8 219l.7.7-.7-.6z" />
        <path fill="#8c8c8c" d="M209.2 219l.7.7-.7-.6z" />
        <path fill="#efefef" d="M209.9 219l.7.7-.7-.6z" />
        <path fill="#8c8c8c" d="M298.5 219l.7.7-.7-.6z" />
        <path fill="#10295a" d="M299.2 219l.7.7-.7-.6z" />
        <path fill="#00216b" d="M303.4 219l.8.7-.8-.6z" />
        <path fill="#00184a" d="M304.6 219.3l.5.2-.5-.2z" />
        <path fill="#002984" d="M305.8 219.5l.2.4-.2-.4z" />
        <path fill="#212139" d="M309 219l.8.7-.7-.6z" />
        <path fill="#dedede" d="M198 219.7l.6.7-.7-.7z" />
        <path fill="#10214a" d="M207.8 219.7l.7.7-.7-.7z" />
        <path fill="#cecece" d="M208.5 219.7l-.7 1.4.7-1.4m90.7 0l1.4 1.4-1.4-1.4z" />
        <path fill="#10214a" d="M300 219.7l.6.7-.7-.7z" />
        <path fill="#00184a" d="M306.3 219.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M307 219.7l2.8 2.7-2.8-2.7z" />
        <path fill="#002984" d="M309 219.7l.8.7-.7-.7z" />
        <path fill="#9c9494" d="M309.8 219.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M198 220.4l.6.6-.7-.6z" />
        <path fill="#001039" d="M198.6 220.4l.7.6-.7-.6z" />
        <path fill="#10295a" d="M207 220.4l.8.6-.7-.6z" />
        <path fill="#101831" d="M300.6 220.4l.7.6-.7-.6z" />
        <path fill="#42425a" d="M309.8 220.4l.7.6-.7-.6z" />
        <path fill="#efefef" d="M197.2 221l.7.7-.7-.6z" />
        <path fill="#101829" d="M198 221l.6.7-.7-.6z" />
        <path fill="#002984" d="M206.4 221l.7.7-.7-.6z" />
        <path fill="#9c9494" d="M207 221l.8.7-.7-.6z" />
        <path fill="#cecece" d="M213.4 221l.7.7-.7-.6z" />
        <path fill="#bdbdbd" d="M214.1 221v.7H295l-24.6-.6H214m86.5 0l.7.6-.7-.6z" />
        <path fill="#00215a" d="M301.3 221l.7.7-.7-.6z" />
        <path fill="#00216b" d="M309.8 221l.7.7-.7-.6z" />
        <path fill="#dedede" d="M310.5 221l.7.7-.7-.6z" />
        <path fill="#424242" d="M197.2 221.7l.7.7-.7-.7z" />
        <path fill="#002984" d="M198 221.7l.6.7-.7-.7z" />
        <path fill="#52525a" d="M206.4 221.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M213.4 221.7l3.5 3.4-3.5-3.4z" />
        <path fill="#00216b" d="M214.1 221.7l2.1 2-2.1-2z" />
        <path
          fill="#003994"
          d="M214.8 221.7l5.9 7.4.4 26h6.4c0-8.2 1.8-16.8-4.3-23.3l8.5 5.3-3.5-10 19.7 18.7-14.8-22.7 14 18h.8v-19.4h-33.1z"
        />
        <path fill="#00184a" d="M247.9 221.7v20.1h.7l-.7-20z" />
        <path fill="#631808" d="M259.8 221.7v20.1h.7l-.7-20z" />
        <path
          fill="#de2110"
          d="M260.5 221.7v18.8l14.8-17.4-14.8 22.7 20.4-18.7-4.2 9.3 8.4-5.3c-4.5 8.3-4.2 14.5-4.2 24h6.4l.4-26 5.9-7.4h-33z"
        />
        <path fill="#b51010" d="M293.6 221.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M294.3 221.7l-1.4 2 1.4-2z" />
        <path fill="#8c8c8c" d="M301.3 221.7l.7.7-.7-.7z" />
        <path fill="#002984" d="M302 221.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M310.5 221.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M196.5 222.4l.7.7-.7-.7z" />
        <path fill="#000818" d="M197.2 222.4l.7.7-.7-.7z" />
        <path fill="#00184a" d="M205.7 222.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M206.4 222.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M292.9 222.4l.7.7-.7-.7z" />
        <path fill="#21315a" d="M302 222.4l.7.7-.7-.7z" />
        <path fill="#00184a" d="M309 222.4l.8.7-.7-.7z" />
        <path fill="#10214a" d="M310.5 222.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M311.2 222.4l.7.7-.7-.7z" />
        <path fill="#313931" d="M196.5 223l.7.7-.7-.6z" />
        <path fill="#00216b" d="M197.2 223l.7.7-.7-.6z" />
        <path fill="#63636b" d="M205.7 223l.7.7-.7-.6z" />
        <path fill="#002984" d="M233.1 223l.7.7-.7-.6z" />
        <path fill="#8c8c8c" d="M302 223l.7.7-.7-.6z" />
        <path fill="#00184a" d="M310 223.5l.2.5-.2-.5z" />
        <path fill="#9c9494" d="M311.2 223l.7.7-.7-.6M196 224l.3.5-.3-.4z" />
        <path fill="#292921" d="M196.5 223.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M205 223.7l.7.7-.7-.7z" />
        <path fill="#cecece" d="M205.7 223.7l.7.7-.7-.7z" />
        <path fill="#00215a" d="M216.2 223.7l.7.7-.7-.7z" />
        <path fill="#001039" d="M233.1 223.7l.7.7-.7-.7z" />
        <path fill="#212139" d="M233.8 223.7l1.4 1.4-1.4-1.4z" />
        <path fill="#100808" d="M274.6 223.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M292.2 223.7l-4.2 4.7 4.2-4.7z" />
        <path fill="#efefef" d="M302 223.7l.7.7-.7-.7z" />
        <path fill="#10295a" d="M302.7 223.7l.7.7-.7-.7z" />
        <path fill="#31425a" d="M311.2 223.7l.7.7-.7-.7z" />
        <path fill="#10295a" d="M196.5 224.4l.7.7-.7-.7z" />
        <path fill="#42425a" d="M205 224.4l.7.7-.7-.7z" />
        <path fill="#001039" d="M217 224.4l.6.7-.7-.7z" />
        <path fill="#002984" d="M233.1 224.4l.7.7-.7-.7z" />
        <path fill="#6b5a00" d="M233.8 224.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M273.2 224.4l.7.7-.7-.7z" />
        <path fill="#7b5a00" d="M273.9 224.4l.7.7-.7-.7z" />
        <path fill="#63636b" d="M302.7 224.4l.7.7-.7-.7z" />
        <path fill="#00216b" d="M311.2 224.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M311.9 224.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M195.8 225l.7.7-.7-.6z" />
        <path fill="#002984" d="M204.3 225l.6.7-.7-.6z" />
        <path fill="#9c9494" d="M205 225l.7.7-.7-.6z" />
        <path fill="#cecece" d="M217 225l3.4 3.4-3.5-3.3z" />
        <path fill="#10214a" d="M217.6 225l.7.7-.7-.6z" />
        <path fill="#392121" d="M233.8 225l.7.7-.7-.6z" />
        <path fill="#cea508" d="M234.7 225.5l.3.5-.3-.5z" />
        <path fill="#293129" d="M235.2 225l1.4 1.4-1.4-1.3z" />
        <path fill="#631808" d="M272.5 225l.7.7-.7-.6z" />
        <path fill="#634a00" d="M273.9 225l.7.7-.7-.6z" />
        <path fill="#ce2110" d="M274.6 225l.7.7-.7-.6z" />
        <path fill="#dedede" d="M302.7 225l.7.7-.7-.6z" />
        <path fill="#00216b" d="M303.4 225l.8.7-.8-.6z" />
        <path fill="#636b7b" d="M311.9 225l.7.7-.7-.6z" />
        <path fill="#42425a" d="M195.8 225.7l.7.7-.7-.7z" />
        <path fill="#21315a" d="M204.3 225.7l.6.7-.7-.7z" />
        <path fill="#10214a" d="M218.3 225.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M233.8 225.7l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M235.2 225.7l.7.7-.7-.7z" />
        <path fill="#5a2908" d="M271.8 225.7l.7.7-.7-.7z" />
        <path fill="#efbd08" d="M273.2 225.7l.7.7-.7-.7z" />
        <path fill="#631808" d="M273.9 225.7l.7.7-.7-.7z" />
        <path fill="#42425a" d="M303.4 225.7l.8.7-.8-.7z" />
        <path fill="#10214a" d="M311.9 225.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M195.1 226.4l.7.7-.7-.7z" />
        <path fill="#00215a" d="M195.8 226.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M204.3 226.4l.6.7-.7-.7z" />
        <path fill="#10214a" d="M219 226.4l.7.7-.7-.7z" />
        <path fill="#634a00" d="M234.5 226.4l.7.7-.7-.7z" />
        <path fill="#deb508" d="M235.2 226.4l.7.7-.7-.7z" />
        <path fill="#292100" d="M236 226.4l.6.7-.7-.7z" />
        <path fill="#211800" d="M271.8 226.4l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M273.9 226.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M303.4 226.4l.8.7-.8-.7z" />
        <path fill="#002984" d="M304.1 226.4l.7.7-.7-.7z" />
        <path fill="#00216b" d="M311.9 226.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M312.6 226.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M195.1 227l.7.8-.7-.7z" />
        <path fill="#002984" d="M195.8 227l.7.8-.7-.7z" />
        <path fill="#00216b" d="M203.6 227l.7.8-.8-.7z" />
        <path fill="#cecece" d="M204.3 227l.6.8-.7-.7z" />
        <path fill="#10214a" d="M219.7 227l.7.8-.7-.7z" />
        <path fill="#00184a" d="M228.4 227.5l.2.5-.2-.5z" />
        <path fill="#10295a" d="M234.5 227l.7.8-.7-.7z" />
        <path fill="#000818" d="M235.2 227l.7.8-.7-.7z" />
        <path fill="#392100" d="M236 227l1.3 1.4-1.4-1.3z" />
        <path fill="#00184a" d="M236.6 227l.7.8-.7-.7z" />
        <path fill="#7b1008" d="M271 227l.8.8-.7-.7z" />
        <path fill="#392100" d="M271.8 227l.7.8-.7-.7z" />
        <path fill="#210800" d="M272.5 227l.7.8-.7-.7z" />
        <path fill="#5a1008" d="M273.2 227l.7.8-.7-.7z" />
        <path fill="#631808" d="M279.5 227l.7.8-.7-.7z" />
        <path fill="#ce2110" d="M280.2 227l.7.8-.7-.7z" />
        <path fill="#7b1008" d="M288 227l.7.8-.7-.7z" />
        <path fill="#00184a" d="M304.1 227l.7.8-.7-.7z" />
        <path fill="#7b7373" d="M312.6 227l.7.8-.7-.7z" />
        <path fill="#636b7b" d="M195.1 227.8l.7.6-.7-.7z" />
        <path fill="#21315a" d="M203.6 227.8l.7.6-.8-.7z" />
        <path fill="#10295a" d="M220.4 227.8l.7.6-.7-.7z" />
        <path fill="#102110" d="M228.9 227.8l.7.6-.7-.7z" />
        <path fill="#002984" d="M229.6 227.8l.7.6-.7-.7z" />
        <path fill="#101810" d="M236 227.8l.6.6-.7-.7z" />
        <path fill="#00216b" d="M237.3 227.8l.7.6-.7-.7z" />
        <path fill="#b51010" d="M270.4 227.8l.7.6-.7-.7z" />
        <path fill="#211800" d="M271.6 228l.4.2-.4-.2z" />
        <path fill="#b51010" d="M272.5 227.8l.7.6-.7-.7z" />
        <path fill="#bd2110" d="M278.1 227.8l.7.6-.7-.7z" />
        <path fill="#5a2908" d="M278.8 227.8l.7.6-.7-.7z" />
        <path fill="#310000" d="M279.5 227.8l.7.6-.7-.7z" />
        <path fill="#7b1008" d="M287.3 227.8l.7.6-.7-.7z" />
        <path fill="#42425a" d="M304.1 227.8l.7.6-.7-.7z" />
        <path fill="#314a7b" d="M312.6 227.8l.7.6-.7-.7z" />
        <path fill="#10214a" d="M195.1 228.4l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M203.6 228.4l.7.7-.8-.7z" />
        <path fill="#42425a" d="M220.4 228.4V256h.7c0-7.9 2.5-20.3-.7-27.5z" />
        <path fill="#634a00" d="M228.9 228.4l.7.7-.7-.7z" />
        <path fill="#8c7300" d="M229.6 228.4l.7.7-.7-.7z" />
        <path fill="#10214a" d="M230.3 228.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M236 228.4l.6.7-.7-.7z" />
        <path fill="#211800" d="M236.6 228.4l.7.7-.7-.7z" />
        <path fill="#181000" d="M237.3 228.4l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M269.7 228.4l.7.7-.7-.7z" />
        <path fill="#311000" d="M270.4 228.4l.7.7-.7-.7z" />
        <path fill="#392100" d="M271 228.4l-1.3 2 1.4-2z" />
        <path fill="#7b1008" d="M271.8 228.4l.7.7-.7-.7m5.6 0l.7.7-.7-.7z" />
        <path fill="#7b5a00" d="M278.1 228.4l.7.7-.7-.7z" />
        <path fill="#6b5a00" d="M278.8 228.4l.7.7-.7-.7z" />
        <path fill="#b51010" d="M279.5 228.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M287.3 228.4v26.8h.7c0-7.7 2.4-19.7-.7-26.8z" />
        <path fill="#8c8c8c" d="M304.1 228.4l.7.7-.7-.7z" />
        <path fill="#00216b" d="M312.6 228.4l.7.7-.7-.7z" />
        <path fill="#dedede" d="M313.3 228.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M194.4 229l.7.8-.7-.7z" />
        <path fill="#00216b" d="M195.1 229l.7.8-.7-.7z" />
        <path fill="#002984" d="M202.8 229l.7.8-.7-.7z" />
        <path fill="#9c9494" d="M203.6 229l.7.8-.8-.7z" />
        <path fill="#00215a" d="M228.9 229l.7.8-.7-.7z" />
        <path fill="#bd9408" d="M229.6 229l.7.8-.7-.7z" />
        <path fill="#cea508" d="M230.3 229l.7.8-.7-.7z" />
        <path fill="#293129" d="M231 229l.7.8-.7-.7z" />
        <path fill="#002984" d="M231.7 229l.7.8-.7-.7z" />
        <path fill="#00184a" d="M236.6 229l.7.8-.7-.7z" />
        <path fill="#392100" d="M237.3 229l1.4 1.4-1.4-1.3z" />
        <path fill="#101829" d="M238 229l.7.8-.7-.7z" />
        <path fill="#5a1008" d="M269.7 229l.7.8-.7-.7z" />
        <path fill="#420000" d="M271 229l.8.8-.7-.7z" />
        <path fill="#ce2110" d="M276 229l.7.8-.7-.7z" />
        <path fill="#5a2908" d="M276.7 229l.7.8-.7-.7z" />
        <path fill="#bd9408" d="M277.4 229l.7.8-.7-.7z" />
        <path fill="#efbd08" d="M278.1 229l.7.8-.7-.7z" />
        <path fill="#631808" d="M278.8 229l.7.8-.7-.7z" />
        <path fill="#cecece" d="M304.1 229l.7.8-.7-.7z" />
        <path fill="#00216b" d="M304.9 229l.7.8-.8-.7z" />
        <path fill="#8c8c8c" d="M313.3 229l.7.8-.7-.7m-118.9.7l.7.6-.7-.6z" />
        <path fill="#00215a" d="M202.8 229.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M203.6 229.8l.7.6-.8-.6z" />
        <path fill="#313918" d="M229.6 229.8l.7.6-.7-.6z" />
        <path fill="#ffce08" d="M230.3 229.8l.7.6-.7-.6z" />
        <path fill="#ad8c08" d="M231 229.8l.7.6-.7-.6z" />
        <path fill="#00215a" d="M231.7 229.8l.7.6-.7-.6z" />
        <path fill="#101829" d="M237.3 229.8l.7.6-.7-.6z" />
        <path fill="#00184a" d="M238.7 229.8l.7.6-.7-.6z" />
        <path fill="#941808" d="M269 229.8l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M271 229.8l.8.6-.7-.6z" />
        <path fill="#ad1810" d="M276 229.8l.7.6-.7-.6z" />
        <path fill="#7b5a00" d="M276.7 229.8l.7.6-.7-.6z" />
        <path fill="#ffce08" d="M277.4 229.8l.7.6-.7-.6z" />
        <path fill="#634a00" d="M278.1 229.8l-.7 1.3.7-1.3z" />
        <path fill="#ce2110" d="M278.8 229.8l.7.6-.7-.6z" />
        <path fill="#10214a" d="M304.9 229.8l.7.6-.8-.6z" />
        <path fill="#00216b" d="M306.3 229.8l.7.6-.7-.6z" />
        <path fill="#525a6b" d="M313.3 229.8l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M193.7 230.4l.7.7-.7-.7z" />
        <path fill="#dedede" d="M194.4 230.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M195.1 230.4l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M195.8 230.4l.7.7-.7-.7z" />
        <path fill="#42425a" d="M196.5 230.4l.7.7-.7-.7z" />
        <path fill="#00184a" d="M197.2 230.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M198 230.4l.6.7-.7-.7z" />
        <path fill="#314a7b" d="M202.8 230.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M229.6 230.4l.7.7-.7-.7z" />
        <path fill="#423100" d="M230.3 230.4l.7.7-.7-.7z" />
        <path fill="#211800" d="M231 230.4l.7.7-.7-.7z" />
        <path fill="#181000" d="M231.7 230.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M232.4 230.4l.7.7-.7-.7z" />
        <path fill="#181000" d="M238 230.4l.7.7-.7-.7z" />
        <path fill="#211800" d="M238.7 230.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M239.4 230.4l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M268.3 230.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M270.4 230.4l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M275.3 230.4l-.7 1.4.7-1.4z" />
        <path fill="#211800" d="M276.7 230.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M278.1 230.4l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M304.9 230.4l.7.7-.8-.7z" />
        <path fill="#000818" d="M306.3 230.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M309.8 230.4l.7.7-.7-.7z" />
        <path fill="#00184a" d="M310.5 230.4l.7.7-.7-.7z" />
        <path fill="#314a7b" d="M311.2 230.4l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M311.9 230.4l.7.7-.7-.7z" />
        <path fill="#63636b" d="M312.6 230.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M313.3 230.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M195.1 231l.7.8-.7-.7z" />
        <path fill="#dedede" d="M195.8 231l.7.8-.7-.7z" />
        <path fill="#bdbdbd" d="M196.5 231l.7.8-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M198.6 231l.7.8-.7-.7z" />
        <path fill="#314a7b" d="M199.3 231l.7.8-.7-.7z" />
        <path fill="#00216b" d="M200 231l.7.8-.7-.7z" />
        <path fill="#7b7373" d="M202.8 231l.7.8-.7-.7z" />
        <path fill="#cecece" d="M204.3 231l.6.8-.7-.7z" />
        <path fill="#efefef" d="M205 231l.7.8-.7-.7z" />
        <path fill="#001039" d="M231 231l2.1 2-2.1-2z" />
        <path fill="#392100" d="M231.7 231l5 4.8-5-4.7z" />
        <path fill="#001010" d="M232.4 231l.7.8-.7-.7z" />
        <path fill="#00216b" d="M238 231l.7.8-.7-.7z" />
        <path fill="#392100" d="M238.7 231l2.1 2-2-2z" />
        <path fill="#101810" d="M239.4 231l.7.8-.7-.7z" />
        <path fill="#310000" d="M268.3 231l1.4 1.4-1.4-1.3z" />
        <path fill="#392100" d="M269 231l.7.8-.7-.7z" />
        <path fill="#631808" d="M269.7 231l.7.8-.7-.7z" />
        <path fill="#420000" d="M276.7 231l.7.8-.7-.7z" />
        <path fill="#ce2110" d="M277.4 231l.7.8-.7-.7m7 0l.8.7-.7-.7z" />
        <path fill="#9c9494" d="M304.9 231l.7.8-.8-.7z" />
        <path fill="#001000" d="M306.3 231l.7.8-.7-.7z" />
        <path fill="#00216b" d="M307.7 231l.7.8-.7-.7z" />
        <path fill="#21315a" d="M308.4 231l.7.8-.7-.7z" />
        <path fill="#7b7373" d="M309 231l.8.8-.7-.7z" />
        <path fill="#bdbdbd" d="M311.6 231.3l.5.2-.5-.2z" />
        <path fill="#cecece" d="M193 231.8l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M193.7 231.8l.7.6-.7-.6z" />
        <path fill="#cecece" d="M195.8 231.8l1.4 1.3-1.4-1.3z" />
        <path fill="#ada5a5" d="M196.5 231.8l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M197.2 231.8l2.1 2.6-2-2.6z" />
        <path fill="#9c9494" d="M198 231.8l.6.6-.7-.6z" />
        <path fill="#efefef" d="M199 232l.6.2-.5-.2z" />
        <path fill="#dedede" d="M200 231.8l-.7 1.3.7-1.3z" />
        <path fill="#8c8c8c" d="M200.7 231.8l2.1 3.3-2-3.3z" />
        <path fill="#314a7b" d="M201.4 231.8l.7.6-.7-.6z" />
        <path fill="#00184a" d="M202.1 231.8l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M202.8 231.8l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M204.3 231.8l.6.6-.7-.6z" />
        <path fill="#63636b" d="M205 231.8l.7.6-.7-.6z" />
        <path fill="#002984" d="M284 231.3l.7.7-.7-.7z" />
        <path fill="#000818" d="M224 231.8l.6.6-.7-.6z" />
        <path fill="#00216b" d="M224.7 231.8l.7.6-.8-.6z" />
        <path fill="#001010" d="M233.1 231.8l.7.6-.7-.6z" />
        <path fill="#001039" d="M238.7 231.8l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#631808" d="M267.6 231.8l.7.6-.7-.6z" />
        <path fill="#392100" d="M268.3 231.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M274.6 231.8l-1.4 2 1.4-2z" />
        <path fill="#392100" d="M275.3 231.8l-2.1 2.6 2.1-2.6z" />
        <path fill="#ce2110" d="M276.7 231.8l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M283 231.8l.7.6-.7-.6z" />
        <path fill="#310000" d="M283.8 231.8l.6.6-.6-.6z" />
        <path fill="#941808" d="M284.4 231.8l.8.6-.8-.6z" />
        <path fill="#8c8c8c" d="M296.6 232.2l.3.5-.3-.5z" />
        <path fill="#dedede" d="M300 231.8l.6.6-.7-.6z" />
        <path fill="#7b7373" d="M300.6 231.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M304.9 231.8l.7.6-.8-.6z" />
        <path fill="#080829" d="M305.6 231.8l.7.6-.7-.6z" />
        <path fill="#184a00" d="M306.3 231.8l.7.6-.7-.6z" />
        <path fill="#424242" d="M307 231.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M307.7 231.8l1.4 1.3-1.4-1.3z" />
        <path fill="#cecece" d="M308.4 231.8l.7.6-.7-.6z" />
        <path fill="#424242" d="M310.5 231.8l.7.6-.7-.6z" />
        <path fill="#cecece" d="M311.2 231.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M193 232.4l.7.7-.7-.7z" />
        <path fill="#dedede" d="M193.7 232.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M195.8 232.4l.7.7-.7-.7m5 0l.6.7-.7-.7z" />
        <path fill="#dedede" d="M202 232.7l.4.2-.5-.2z" />
        <path fill="#cecece" d="M203.6 232.4l.7.7-.8-.7z" />
        <path fill="#294200" d="M204.3 232.4l.6.7-.7-.7z" />
        <path fill="#295200" d="M205 232.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M205.7 232.4l.7.7-.7-.7z" />
        <path fill="#00184a" d="M224 232.4l.6.7-.7-.7z" />
        <path fill="#8c7300" d="M224.7 232.4l.7.7-.8-.7z" />
        <path fill="#392121" d="M225.4 232.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M226 232.4l.8.7-.7-.7z" />
        <path fill="#00184a" d="M231.7 232.4v4.7h.7l-.7-4.7z" />
        <path fill="#001010" d="M233.8 232.4l.7.7-.7-.7m5.6 0l.7.7-.7-.7z" />
        <path fill="#00215a" d="M240.8 232.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M266.9 232.4l.7.7-.7-.7z" />
        <path fill="#211800" d="M266.9 233.8l2-.7-2 .7z" />
        <path fill="#bd2110" d="M269 232.4l.7.7-.7-.7z" />
        <path fill="#001010" d="M275.3 232.4l-.7 1.4.7-1.4z" />
        <path fill="#6b1821" d="M276 232.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M281.6 232.4l.7.7-.7-.7z" />
        <path fill="#5a2908" d="M282.3 232.4l1.4 1.4-1.4-1.4z" />
        <path fill="#8c7300" d="M283 232.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M283.8 232.4l.6.7-.6-.7z" />
        <path fill="#ada5a5" d="M297.1 232.4l-.7 1.4.7-1.4z" />
        <path fill="#101810" d="M300.6 232.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M301.3 232.4l.7.7-.7-.7m3.3.3l.5.2-.5-.3z" />
        <path d="M305.6 232.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M306.3 232.4l.7.7-.7-.7z" />
        <path fill="#313931" d="M307 232.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M307.7 232.4l.7.7-.7-.7z" />
        <path fill="#52525a" d="M310.5 232.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M311.2 232.4l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M193 233.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M194.2 233.3l.4.3-.4-.3m2.8 0l.4.3-.4-.3z" />
        <path fill="#ada5a5" d="M199.3 233.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M200 233.1l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M201.4 233.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M202.8 233.1l.7.7-.7-.7z" />
        <path fill="#314231" d="M203.6 233.1l.7.7-.8-.7z" />
        <path fill="#397b00" d="M204.3 233.1l.6.7-.7-.7z" />
        <path
          fill="#428c00"
          d="M205 233.1l-1.4 5.4h-.7l1.3-4.7h-.6l-.7 5.3 2.8-1.3-3.5 5.3 2.8-2-3.6 2.7-.7 3.4h.7l7-8-2 .6v-.7l2-.6v-.7h-2.7l-.7-4.7z"
        />
        <path fill="#5a6b52" d="M205.7 233.1l.7.7-.7-.7z" />
        <path fill="#102121" d="M224.7 233.1l.7.7-.8-.7z" />
        <path fill="#efbd08" d="M225.4 233.1l.7.7-.7-.7z" />
        <path fill="#ad8c08" d="M226 233.1l.8.7-.7-.7z" />
        <path fill="#102121" d="M226.8 233.1l.7.7-.7-.7z" />
        <path fill="#002984" d="M227.5 233.1l.7.7-.7-.7z" />
        <path fill="#003994" d="M232.4 233.1c0 5.4 3.2 7.9 7.7 10.7-.3-4.5-4.1-8-7.7-10.7z" />
        <path fill="#001010" d="M233.1 233.1l.7.7-.7-.7z" />
        <path fill="#001039" d="M234.5 233.1l.7.7-.7-.7z" />
        <path fill="#002984" d="M239.4 233.1l.7.7-.7-.7z" />
        <path fill="#211800" d="M240.6 233.3l.5.3-.5-.3z" />
        <path fill="#002984" d="M241.5 233.1l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M266.2 233.1l.7.7-.7-.7z" />
        <path fill="#392100" d="M267.6 233.1l-1.4 2 1.4-2z" />
        <path fill="#941808" d="M268.3 233.1l.7.7-.7-.7z" />
        <path fill="#003994" d="M275.3 233.1l-7 10.7c3.9-2.3 9.2-5.8 7-10.7z" />
        <path fill="#ce2110" d="M280.2 233.1l.7.7-.7-.7z" />
        <path fill="#6b2908" d="M281 233.1l.6.7-.7-.7z" />
        <path fill="#9c7b08" d="M281.6 233.1l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M282.3 233.1l-.7 1.3.7-1.3z" />
        <path fill="#ce2110" d="M283.8 233.1l.6.7-.6-.7z" />
        <path fill="#294221" d="M300.6 233.1l1.4 1.3-1.4-1.3z" />
        <path fill="#8c8c8c" d="M301.3 233.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M304.6 233.3l.5.3-.5-.3z" />
        <path fill="#103910" d="M305.6 233.1l.7.7-.7-.7z" />
        <path fill="#319400" d="M306.3 233.1l.7 14h.7l2-12h-.6l-1.4 8h-.7l-.7-10z" />
        <path fill="#424242" d="M307 233.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M307.7 233.1l.7.7-.7-.7z" />
        <path fill="#185200" d="M309.8 233.1l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M311.2 233.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M312.6 233.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M313.3 233.1l-.7 1.3.7-1.3z" />
        <path fill="#ada5a5" d="M315.4 233.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M193 233.8l2.1 2-2.1-2z" />
        <path fill="#cecece" d="M194.4 233.8l.7 2h.7l-1.4-2z" />
        <path fill="#9c9494" d="M195.1 233.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M197.2 233.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M198 233.8l-.8 1.3.7-1.3z" />
        <path fill="#425242" d="M199.3 233.8l.7.6-.7-.6z" />
        <path fill="#213918" d="M200 233.8l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M200.7 233.8l.7.6-.7-.6z" />
        <path fill="#63636b" d="M202.8 233.8l.7.6-.7-.6z" />
        <path fill="#294200" d="M204.5 234.2l.2.5-.2-.5z" />
        <path fill="#295200" d="M205.7 233.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M206.4 233.8l.7.6-.7-.6z" />
        <path fill="#4a4208" d="M225.4 233.8l.7.6-.7-.6z" />
        <path fill="#ffce08" d="M226 233.8l.8.6-.7-.6z" />
        <path fill="#bd9408" d="M226.8 233.8l.7.6-.7-.6z" />
        <path fill="#00184a" d="M227.5 233.8l.7.6-.7-.6z" />
        <path fill="#001010" d="M233.8 233.8l.7.6-.7-.6z" />
        <path fill="#001039" d="M235.2 233.8l.7.6-.7-.6z" />
        <path fill="#00215a" d="M240.1 233.8l.7.6-.7-.6z" />
        <path fill="#392100" d="M240.8 233.8l1.4 1.3-1.4-1.3z" />
        <path fill="#001010" d="M241.5 233.8l.7.6-.7-.6z" />
        <path fill="#efefef" d="M255.6 233.8l.7.6-.7-.6z" />
        <path fill="#420000" d="M266.2 233.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M267.6 233.8l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M272.5 233.8l.7.6-.7-.6z" />
        <path fill="#181000" d="M273.9 233.8l-1.4 2 1.4-2z" />
        <path fill="#002984" d="M274.6 233.8l.7.6-.7-.6z" />
        <path fill="#941808" d="M280.2 233.8l.7.6-.7-.6z" />
        <path fill="#7b5a00" d="M281 233.8l.6.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#b51010" d="M283 233.8l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M296.4 233.8l.7.6-.7-.6z" />
        <path fill="#103910" d="M297.1 233.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M297.8 233.8l.7.6-.7-.6z" />
        <path fill="#4a6342" d="M300.6 233.8l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M304.9 233.8l.7.6-.8-.6z" />
        <path fill="#185200" d="M305.6 233.8l.7.6-.7-.6z" />
        <path fill="#7b8c73" d="M307 233.8l.7.6-.7-.6z" />
        <path fill="#395231" d="M309 233.8l.8.6-.7-.6z" />
        <path fill="#319400" d="M309.8 233.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M313.3 233.8l.7.6-.7-.6z" />
        <path fill="#63636b" d="M314.7 233.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M315.4 233.8l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M193 234.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M198 234.4l.6.7-.7-.7z" />
        <path fill="#424242" d="M198.6 234.4l.7.7-.7-.7z" />
        <path fill="#295200" d="M199.3 234.4l.7.7-.7-.7z" />
        <path fill="#294200" d="M200 234.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M200.7 234.4l1.4 1.4-1.4-1.4z" />
        <path fill="#397b00" d="M202.8 234.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M206.4 234.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M225.4 234.4l1.4 1.4-1.4-1.4z" />
        <path fill="#6b5a00" d="M226 234.4l.8.7-.7-.7z" />
        <path fill="#211800" d="M226.8 234.4l2 1.4-2-1.4z" />
        <path fill="#00216b" d="M228.2 234.4l.7.7-.7-.7z" />
        <path fill="#001010" d="M234.5 234.4l.7.7-.7-.7z" />
        <path fill="#001039" d="M236 234.4l.6.7-.7-.7m5 0l.6.7-.7-.7z" />
        <path fill="#00184a" d="M242.2 234.4l.7.7-.7-.7z" />
        <path fill="#bd9408" d="M253.5 234.4v.7l1.4 2.7h.7l-2.1-3.4z" />
        <path fill="#7b1008" d="M265.5 234.4l.7.7-.7-.7z" />
        <path fill="#311000" d="M266.9 234.4l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M267.6 234.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M271.8 234.4l-.7 1.4.7-1.4z" />
        <path fill="#211800" d="M272.5 234.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M273.9 234.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M279.5 234.4l.7.7-.7-.7z" />
        <path fill="#211800" d="M280.2 234.4l-1.4 2 1.4-2z" />
        <path fill="#181000" d="M281 234.4l.6.7-.7-.7z" />
        <path fill="#6b5a00" d="M281.6 234.4l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M282.3 234.4l.7.7-.7-.7z" />
        <path fill="#dedede" d="M296.4 234.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M297.1 234.4l.7.7-.7-.7z" />
        <path fill="#425242" d="M297.8 234.4l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M300.6 234.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M301.3 234.4l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M302 234.4l.7.7-.7-.7z" />
        <path fill="#313931" d="M304.9 234.4l.7.7-.8-.7z" />
        <path fill="#297b00" d="M305.6 234.4l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M307 234.4v3.4h.7l-.7-3.4z" />
        <path fill="#7b7373" d="M308.4 234.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M309.5 234.7l.5.2-.5-.2z" />
        <path fill="#63636b" d="M310.5 234.4l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M311.2 234.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M312.4 234.7l.4.2-.4-.2z" />
        <path fill="#8c8c8c" d="M313.3 234.4l-.7 1.4.7-1.4z" />
        <path fill="#7b7373" d="M314 234.4l.7.7-.7-.7z" />
        <path fill="#103910" d="M314.7 234.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M315.4 234.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M192.3 235.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M193 235.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M195.8 235.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M198 235.1l.6.7-.7-.7z" />
        <path fill="#001000" d="M198.6 235.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M199.3 235.1v2l2.1-.6v-.7l-2-.7z" />
        <path fill="#213918" d="M200.7 235.1l.7.7-.7-.7z" />
        <path fill="#294200" d="M202.1 235.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M204 235.3l.5.3-.5-.3z" />
        <path fill="#8c8c8c" d="M206.4 235.1l.7.7-.7-.7z" />
        <path fill="#00216b" d="M226.8 235.1l.7.7-.7-.7z" />
        <path fill="#00184a" d="M228.9 235.1l.7.7-.7-.7z" />
        <path fill="#002984" d="M234.5 235.1l2.1 2-2.1-2z" />
        <path fill="#181000" d="M235.2 235.1l.7.7-.7-.7z" />
        <path fill="#00184a" d="M236.6 235.1l.7.7-.7-.7z" />
        <path fill="#181000" d="M241.5 235.1l.7.7-.7-.7z" />
        <path fill="#211800" d="M242.5 235.6l.2.4-.2-.4z" />
        <path fill="#00216b" d="M243 235.1l.6.7-.7-.7z" />
        <path fill="#7b5a00" d="M252.8 235.1v2.7h.7l-.7-2.7z" />
        <path fill="#ffce08" d="M253.5 235.1v3.4h-2.8v2h2.8v8h.7l.7-8h3.5v-2H255V235h-1.4z" />
        <path fill="#b51010" d="M264.8 235.1l.6.7-.6-.7z" />
        <path fill="#211800" d="M266 235.3l.4.3-.5-.3z" />
        <path fill="#b51010" d="M266.9 235.1l.7.7-.7-.7z" />
        <path fill="#211800" d="M271.8 235.1l-2.1 2.7 2-2.7z" />
        <path fill="#002984" d="M273.2 235.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M278.8 235.1l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M281 235.1l.6.7-.7-.7z" />
        <path fill="#b51010" d="M281.6 235.1l.7.7-.7-.7z" />
        <path fill="#214210" d="M297.1 235.1l.7.7-.7-.7z" />
        <path fill="#296300" d="M297.8 235.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M298.5 235.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M300.6 235.1l.7.7-.7-.7z" />
        <path fill="#319400" d="M301.3 235.1l.7.7-.7-.7z" />
        <path fill="#425242" d="M302 235.1l.7.7-.7-.7z" />
        <path fill="#52525a" d="M304.9 235.1l.7.7-.8-.7z" />
        <path fill="#395231" d="M308.4 235.1l.7.7-.7-.7z" />
        <path fill="#296300" d="M309.8 235.1l.7.7-.7-.7z" />
        <path fill="#424242" d="M310.5 235.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M311.2 235.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M311.9 235.1l.7.7-.7-.7z" />
        <path fill="#52525a" d="M313.3 235.1l.7.7-.7-.7z" />
        <path fill="#185200" d="M314 235.1l.7.7-.7-.7z" />
        <path fill="#63636b" d="M314.7 235.1l.7.7-.7-.7z" />
        <path fill="#dedede" d="M193.7 235.8l.7.6-.7-.6z" />
        <path fill="#efefef" d="M194.4 235.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M195.6 236l.5.2-.5-.2z" />
        <path fill="#9c9494" d="M196.5 235.8l.7.6-.7-.6z" />
        <path fill="#424242" d="M198 235.8l.6.6-.7-.6z" />
        <path fill="#428c00" d="M198.6 235.8c-1.9 4-1.6 6.6 0 10.7h1.4l1.4-10h-.7l-.7 8h-1.4v-8.7z" />
        <path fill="#313931" d="M201.4 235.8l.7.6-.7-.6z" />
        <path fill="#294200" d="M203.8 236.2l.2.5-.2-.5z" />
        <path fill="#6b735a" d="M206.4 235.8l.7.6-.7-.6z" />
        <path fill="#00216b" d="M227.5 235.8l1.4 1.3-1.4-1.3z" />
        <path fill="#100808" d="M228.2 235.8l.7.6-.7-.6z" />
        <path fill="#392100" d="M228.9 235.8l2.8 2.7-2.8-2.7z" />
        <path fill="#001039" d="M229.6 235.8l.7.6-.7-.6z" />
        <path fill="#181000" d="M236 235.8l1.3 1.3-1.4-1.3z" />
        <path fill="#211800" d="M236.6 235.8l2.8 3.3-2.8-3.3z" />
        <path fill="#00216b" d="M237.3 235.8l.7.6-.7-.6z" />
        <path fill="#002984" d="M241.5 235.8l.7.6-.7-.6z" />
        <path fill="#181000" d="M243 235.8l.6.6-.7-.6z" />
        <path fill="#311000" d="M264.8 235.8l.6.6-.6-.6z" />
        <path fill="#392100" d="M265.5 235.8l-.7 1.3.7-1.3z" />
        <path fill="#7b1008" d="M266.2 235.8l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M270.4 235.8l.7.6-.7-.6z" />
        <path fill="#00216b" d="M272.5 235.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M278.1 235.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M280.2 235.8l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M297.1 235.8l.7.6-.7-.6z" />
        <path fill="#319400" d="M297.8 235.8l.7.6-.7-.6z" />
        <path fill="#103910" d="M298.5 235.8l.7.6-.7-.6z" />
        <path fill="#efefef" d="M299.2 235.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M300.6 235.8l.7.6-.7-.6z" />
        <path fill="#297b00" d="M301.3 235.8l.7.6-.7-.6z" />
        <path fill="#185200" d="M302 235.8l.7.6-.7-.6z" />
        <path fill="#cecece" d="M302.7 235.8l.7.6-.7-.6z" />
        <path fill="#315221" d="M304.9 235.8l.7.6-.8-.6z" />
        <path fill="#185200" d="M308.4 235.8l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M310.5 235.8l.7.6-.7-.6z" />
        <path fill="#efefef" d="M311.6 236l.5.2-.5-.2z" />
        <path fill="#ada5a5" d="M312.6 235.8l.7.6-.7-.6z" />
        <path fill="#214210" d="M313.3 235.8l.7.6-.7-.6z" />
        <path fill="#296300" d="M314 235.8l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M314.7 235.8l.7.6-.7-.6z" />
        <path fill="#397b00" d="M198 236.4l.6.7-.7-.7z" />
        <path fill="#103900" d="M201.4 236.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M206.4 236.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M227.5 236.4v18.8H221v.7l7-.7v3.3h.8c0-5.7 2.3-17.4-1.4-22z" />
        <path fill="#001010" d="M228.9 236.4l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#00216b" d="M238 236.4l.7.7-.7-.7z" />
        <path fill="#00184a" d="M242.2 236.4l.7.7-.7-.7z" />
        <path fill="#392100" d="M243 236.4l1.3 1.4-1.4-1.4z" />
        <path fill="#101829" d="M243.7 236.4l.7.7-.8-.7z" />
        <path fill="#631808" d="M264 236.4l.8.7-.8-.7z" />
        <path fill="#420000" d="M265.5 236.4l.7.7-.7-.7z" />
        <path fill="#b51010" d="M269.7 236.4l.7.7-.7-.7z" />
        <path fill="#00216b" d="M271.8 236.4l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M276.7 236.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M277.4 236.4l.7.7-.7-.7z" />
        <path fill="#392100" d="M278.1 236.4l-2 2.7 2-2.6z" />
        <path fill="#181000" d="M278.8 236.4l.7.7-.7-.7z" />
        <path fill="#002984" d="M279.5 236.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M280.2 236.4v18.8h.7l-.7-18.7z" />
        <path fill="#8c8c8c" d="M297.1 236.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M298.3 236.7l.5.2-.5-.2z" />
        <path fill="#52525a" d="M299.2 236.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M300.6 236.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M301.3 236.4l.7.7-.7-.7z" />
        <path fill="#319400" d="M302 236.4l2.9 16.8h.7a21.2 21.2 0 00-3.6-16.8z" />
        <path fill="#63636b" d="M302.7 236.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M304.1 236.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M304.9 236.4l.7.7-.8-.7z" />
        <path fill="#297b00" d="M308.4 236.4l.7.7-.7-.7z" />
        <path fill="#184a00" d="M309.8 236.4l.7.7-.7-.7z" />
        <path fill="#314231" d="M312.6 236.4l.7.7-.7-.7z" />
        <path fill="#319400" d="M313.3 236.4l.7.7-.7-.7z" />
        <path fill="#294221" d="M314 236.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M196.5 237.1l.7.7-.7-.7z" />
        <path fill="#214210" d="M197.2 237.1l.7.7-.7-.7z" />
        <path fill="#295200" d="M199.6 237.6l.2.4-.2-.4z" />
        <path fill="#294200" d="M201.4 237.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M203.3 237.3l.5.3-.5-.3z" />
        <path fill="#294200" d="M205.7 237.1l.7.7-.7-.7z" />
        <path fill="#315221" d="M206.8 237.3l.5.3-.5-.3z" />
        <path fill="#294200" d="M207.8 237.1l.7.7-.7-.7z" />
        <path fill="#8c8442" d="M208.5 237.1l.7.7-.7-.7z" />
        <path fill="#63636b" d="M209.2 237.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M209.9 237.1l.7.7-.7-.7z" />
        <path fill="#003994" d="M228.9 237.1c0 5-2.5 18.3.7 22.3 1.4 1.8 4.9 2 7 2.5 0-10.3 2-18.4-7.7-24.8z" />
        <path fill="#101829" d="M229.6 237.1l.7.7-.7-.7z" />
        <path fill="#100808" d="M231 237.1l.7.7-.7-.7z" />
        <path fill="#001039" d="M231.7 237.1l.7.7-.7-.7z" />
        <path fill="#00216b" d="M236.6 237.1l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#001010" d="M243 237.1l.6.7-.7-.7z" />
        <path fill="#00184a" d="M244.3 237.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M263.4 237.1l.7.7-.8-.7z" />
        <path fill="#211800" d="M263.4 238.5l2-1.4-2 1.4z" />
        <path fill="#ce2110" d="M265.5 237.1l.7.7-.7-.7z" />
        <path fill="#b51010" d="M269 237.1l.7.7-.7-.7z" />
        <path fill="#00216b" d="M271 237.1l.8.7-.7-.7z" />
        <path fill="#5a1831" d="M276 237.1l.7.7-.7-.7z" />
        <path fill="#311000" d="M276.7 237.1l.7.7-.7-.7z" />
        <path fill="#001010" d="M278.1 237.1l.7.7-.7-.7z" />
        <path fill="#003994" d="M271.8 261.9c2.3-.6 5.6-.8 7.3-2.5 3.6-3.6 1.1-17.4 1.1-22.3-11 4.9-8.4 15-8.4 24.8z" />
        <path fill="#dedede" d="M297.1 237.1l.7.7-.7-.7z" />
        <path fill="#185200" d="M297.8 237.1l.7.7-.7-.7z" />
        <path
          fill="#319400"
          d="M298.5 237.1l5.6 21.4h-.7c-1-3.7-5.5-18-11.2-12.7 7.5.3 10 13.1 11.2 18.8h.7l9.2-26.8h-.7l-7 17.4h-.8c-1.9-5.7-1.7-13.7-6.3-18z"
        />
        <path fill="#296300" d="M299.2 237.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M300 237.1l.6.7-.7-.7z" />
        <path fill="#dedede" d="M300.6 237.1l.7.7-.7-.7z" />
        <path fill="#185200" d="M301.3 237.1l.7.7-.7-.7z" />
        <path fill="#184a00" d="M302.7 237.1l.7.7-.7-.7z" />
        <path fill="#dedede" d="M303.4 237.1l.8.7-.8-.7z" />
        <path fill="#8c8c8c" d="M304.1 237.1l-.7 1.4.8-1.4z" />
        <path fill="#297b00" d="M304.9 237.1l.7.7-.8-.7z" />
        <path fill="#395231" d="M307.7 237.1l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M309.8 237.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M311.9 237.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M313 237.3l.5.3-.4-.3z" />
        <path fill="#8c8c8c" d="M314 237.1l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M196.5 237.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M201.4 237.8l.7.7-.7-.7z" />
        <path fill="#294200" d="M202.8 237.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M204.3 237.8l-2.9.7v.6l2.8-1.3z" />
        <path fill="#103900" d="M205 237.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M208.7 238.2l.2.5-.2-.5z" />
        <path fill="#428c00" d="M209.2 237.8l.7.7-.7-.7z" />
        <path fill="#294200" d="M209.9 237.8l.7.7-.7-.7z" />
        <path fill="#313931" d="M210.6 237.8l.7.7-.7-.7z" />
        <path fill="#001039" d="M230.3 237.8l.7.7-.7-.7z" />
        <path fill="#181000" d="M231.7 237.8l.7.7-.7-.7z" />
        <path fill="#00216b" d="M232.4 237.8l1.4 1.3-1.4-1.3m5 0l.6.7-.7-.7z" />
        <path fill="#181000" d="M238.7 237.8l2.1 2-2-2z" />
        <path fill="#002984" d="M239.4 237.8l.7.7-.7-.7z" />
        <path fill="#211800" d="M244.1 238l.5.2-.5-.2z" />
        <path fill="#002984" d="M245 237.8l.8.7-.7-.7z" />
        <path fill="#dedede" d="M249.3 237.8l.7.7-.7-.7z" />
        <path fill="#ada584" d="M250 237.8l.7.7-.7-.7z" />
        <path fill="#9c7b08" d="M252.8 237.8l.7.7-.7-.7z" />
        <path fill="#cea508" d="M254.9 237.8l.7.7-.7-.7z" />
        <path fill="#9c9463" d="M255.6 237.8l.7.7-.7-.7z" />
        <path fill="#bdb584" d="M256.3 237.8v.7h2.1l-2-.7z" />
        <path fill="#bdbdbd" d="M258.4 237.8l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M262.6 237.8l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M264.8 237.8l.6.7-.6-.7z" />
        <path fill="#bd2110" d="M268.3 237.8l.7.7-.7-.7z" />
        <path fill="#210800" d="M269 237.8l.7.7-.7-.7z" />
        <path fill="#392100" d="M269.7 237.8l-1.4 2 1.4-2z" />
        <path fill="#00184a" d="M270.4 237.8l.7.7-.7-.7z" />
        <path fill="#002984" d="M275.3 237.8l.7.7-.7-.7z" />
        <path fill="#100808" d="M276 237.8l.7.7-.7-.7z" />
        <path fill="#101829" d="M277.4 237.8l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M294.3 237.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M295 237.8l.7.7-.7-.7z" />
        <path fill="#315221" d="M297.8 237.8l.7.7-.7-.7z" />
        <path fill="#103910" d="M300 237.8l.6.7-.7-.7z" />
        <path fill="#efefef" d="M300.6 237.8l.7.7-.7-.7z" />
        <path fill="#184a00" d="M301.3 237.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M302.7 237.8l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M304.1 237.8l.7.7-.7-.7z" />
        <path fill="#294221" d="M307 237.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M307.7 237.8l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M309.8 237.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M311.2 237.8l.7.7-.7-.7z" />
        <path fill="#184a00" d="M311.9 237.8l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#efefef" d="M314 237.8l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M196.5 238.5l.7.6-.7-.6z" />
        <path fill="#294200" d="M199.3 238.5v2h.7l-.7-2m5 0l.6.6-.7-.6m3.3.2l.5.2-.5-.2z" />
        <path fill="#214210" d="M209.2 238.5l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M209.9 238.5l.7.6-.7-.6z" />
        <path fill="#00215a" d="M231 238.5l.7.6-.7-.6z" />
        <path fill="#211800" d="M231.7 238.5v.6l2.1.7-2.1-1.3z" />
        <path fill="#00216b" d="M238 238.5l.7.6-.7-.6z" />
        <path fill="#002984" d="M240.1 238.5l.7.6-.7-.6z" />
        <path fill="#00216b" d="M243.7 238.5l.7.6-.8-.6z" />
        <path fill="#392100" d="M244.3 238.5l2.2 2-2.1-2z" />
        <path fill="#101810" d="M245 238.5l.8.6-.7-.6z" />
        <path fill="#bd9408" d="M250 238.5v2h.7l-.7-2z" />
        <path fill="#310000" d="M262.6 238.5l.7.6-.7-.6z" />
        <path fill="#392100" d="M263.4 238.5l-.7 1.3.7-1.3z" />
        <path fill="#631808" d="M264 238.5l.8.6-.8-.6z" />
        <path fill="#ce2110" d="M267.6 238.5l-.7 1.3.7-1.3z" />
        <path fill="#311000" d="M268.3 238.5l.7.6-.7-.6z" />
        <path fill="#001039" d="M269.7 238.5l.7.6-.7-.6z" />
        <path fill="#00216b" d="M274.6 238.5l-.7 1.3.7-1.3z" />
        <path fill="#181000" d="M275.3 238.5l.7.6-.7-.6z" />
        <path fill="#001039" d="M276.7 238.5l.7.6-.7-.6z" />
        <path fill="#101810" d="M295 238.5l.7.6-.7-.6z" />
        <path fill="#efefef" d="M295.7 238.5l.7.6-.7-.6z" />
        <path fill="#63636b" d="M297.8 238.5l.7.6-.7-.6z" />
        <path fill="#297b00" d="M300 238.5l.6.6-.7-.6z" />
        <path fill="#7b7373" d="M300.6 238.5l.7.6-.7-.6z" />
        <path fill="#315221" d="M301.3 238.5l.7.6-.7-.6z" />
        <path fill="#214210" d="M303.4 238.5l.8.6-.8-.6z" />
        <path fill="#103900" d="M304.1 238.5l.7.6-.7-.6z" />
        <path fill="#184a00" d="M307 238.5v4h.7l-.7-4z" />
        <path fill="#297b00" d="M307.7 238.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M309.8 238.5l.7.6-.7-.6z" />
        <path fill="#63636b" d="M311.2 238.5l.7.6-.7-.6z" />
        <path fill="#297b00" d="M311.9 238.5l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M313.3 238.5l.7.6-.7-.6z" />
        <path fill="#294200" d="M196.5 239.1l.7.7-.7-.7m5.6 0l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#103900" d="M206.4 239.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M207 239.1l.8.7-.7-.7z" />
        <path fill="#294200" d="M208.5 239.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M209.2 239.1l.7.7-.7-.7z" />
        <path fill="#00216b" d="M231.7 239.1l.7.7-.7-.7z" />
        <path fill="#001039" d="M233.8 239.1l1.4 1.4-1.4-1.4z" />
        <path fill="#00184a" d="M238.7 239.1l.7.7-.7-.7z" />
        <path fill="#392100" d="M239.4 239.1l5.7 5.4-5.7-5.4z" />
        <path fill="#001039" d="M244.3 239.1l.7.7-.7-.7m1.4 0l.8.7-.7-.7z" />
        <path fill="#631808" d="M262 239.1l.6.7-.7-.7z" />
        <path fill="#311000" d="M263.4 239.1l.7.7-.8-.7m4.3 0l.7.7-.7-.7z" />
        <path fill="#001039" d="M269 239.1l.7.7-.7-.7z" />
        <path fill="#211800" d="M273.9 240.5l2.1-.7-2.1.7z" />
        <path fill="#00215a" d="M276 239.1l.7.7-.7-.7z" />
        <path fill="#103900" d="M295 239.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M295.7 239.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M297.8 239.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M298.5 239.1l.7.7-.7-.7z" />
        <path fill="#295210" d="M300.6 239.1l.7.7-.7-.7z" />
        <path fill="#395231" d="M301.3 239.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M303.4 239.1l.8.7-.8-.7z" />
        <path fill="#185200" d="M304.1 239.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M309 239.1l.8.7-.7-.7z" />
        <path fill="#9c9494" d="M309.8 239.1l.7.7-.7-.7z" />
        <path fill="#dedede" d="M310.5 239.1l.7.7-.7-.7z" />
        <path fill="#184a00" d="M311.2 239.1l.7.7-.7-.7z" />
        <path fill="#296300" d="M312.6 239.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M313.3 239.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M195.8 239.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M196.5 239.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M202.1 239.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M202.8 239.8l-.7 2h.8v-2m2.8 0l-.7 1.3.7-1.3z" />
        <path fill="#397b00" d="M207.8 239.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M208.5 239.8l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#002984" d="M232.4 239.8l.7.7-.7-.7z" />
        <path fill="#392100" d="M233.8 239.8l2.8 2.7-2.8-2.7z" />
        <path fill="#001039" d="M239.4 239.8l.7.7-.7-.7z" />
        <path fill="#001010" d="M240.8 239.8l.7.7-.7-.7z" />
        <path fill="#101810" d="M245 239.8l.8.7-.7-.7z" />
        <path fill="#00216b" d="M246.5 239.8l.7.7-.7-.7z" />
        <path fill="#b51010" d="M261.2 239.8l.7.7-.7-.7z" />
        <path fill="#211800" d="M261.2 241.1l2.2-.6-2.2.6z" />
        <path fill="#bd2110" d="M263.4 239.8l.7.7-.8-.7z" />
        <path fill="#310000" d="M266.9 239.8l.7.7-.7-.7z" />
        <path fill="#422100" d="M267.6 239.8l.7.7-.7-.7z" />
        <path fill="#101829" d="M268.3 239.8l.7.7-.7-.7z" />
        <path fill="#001039" d="M273.2 239.8l-.7 1.3.7-1.3z" />
        <path fill="#181000" d="M274.6 239.8l-.7 1.3.7-1.3z" />
        <path fill="#00216b" d="M275.3 239.8l.7.7-.7-.7z" />
        <path fill="#426331" d="M295 239.8l.7.7-.7-.7z" />
        <path fill="#214210" d="M295.7 239.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M296.4 239.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M298.5 239.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M300.6 239.8l.7.7-.7-.7z" />
        <path fill="#001000" d="M301.3 239.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M304.1 239.8l.7.7-.7-.7z" />
        <path fill="#296300" d="M309 239.8l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M309.8 239.8l.7.7-.7-.7z" />
        <path fill="#63636b" d="M310.5 239.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M311.2 239.8l.7.7-.7-.7z" />
        <path fill="#315221" d="M312.6 239.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M196 241l.3.4-.3-.5z" />
        <path fill="#295200" d="M199.3 240.5l.7.6-.7-.6z" />
        <path fill="#397b00" d="M201.7 241l.2.4-.2-.5m1.1-.4l.7.6-.7-.6z" />
        <path fill="#425242" d="M207.8 240.5l.7.6-.7-.6z" />
        <path fill="#001000" d="M211.3 240.5l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M212 240.5l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M217.6 240.5l.7.6-.7-.6z" />
        <path fill="#52525a" d="M218.3 240.5l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M219 240.5l.7.6-.7-.6z" />
        <path fill="#001010" d="M233.8 240.5l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#001039" d="M240.1 240.5l.7.6-.7-.6z" />
        <path fill="#001010" d="M241.5 240.5l.7.6-.7-.6z" />
        <path fill="#002984" d="M245 240.5l.8.6-.7-.6z" />
        <path fill="#211800" d="M246.2 240.7l.5.2-.5-.2z" />
        <path fill="#dedede" d="M249.3 240.5l.7.6-.7-.6z" />
        <path fill="#ada584" d="M250 240.5l.7.6-.7-.6z" />
        <path fill="#9c7b08" d="M252.8 240.5l.7.6-.7-.6z" />
        <path fill="#cea508" d="M254.9 240.5l.7.6-.7-.6z" />
        <path fill="#9c9463" d="M255.6 240.5l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M258.4 240.5l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M260.5 240.5l.7.6-.7-.6z" />
        <path fill="#392100" d="M262 240.5l-1.5 2 1.4-2z" />
        <path fill="#941808" d="M262.6 240.5l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M266.2 240.5l-1.4 2 1.4-2z" />
        <path fill="#392100" d="M266.9 240.5l-1.4 2 1.4-2z" />
        <path fill="#001010" d="M267.6 240.5l.7.6-.7-.6z" />
        <path fill="#392100" d="M273.2 240.5L271 243l2-2.6z" />
        <path fill="#002984" d="M274.6 240.5l.7.6-.7-.6z" />
        <path fill="#4a6342" d="M295 240.5l.7.6-.7-.6z" />
        <path fill="#297b00" d="M295.7 240.5l.7.6-.7-.6z" />
        <path fill="#52525a" d="M296.4 240.5l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M298.5 240.5l.7.6-.7-.6z" />
        <path fill="#103900" d="M301.3 240.5l.7.6-.7-.6z" />
        <path fill="#185200" d="M304.1 240.5l.7.6-.7-.6z" />
        <path fill="#297b00" d="M304.9 240.5l-.7 1.3.7-1.3z" />
        <path fill="#185200" d="M309 240.5l.8.6-.7-.6z" />
        <path fill="#dedede" d="M309.8 240.5l.7.6-.7-.6z" />
        <path fill="#184a00" d="M310.5 240.5l.7.6-.7-.6z" />
        <path fill="#297b00" d="M311.9 240.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M312.6 240.5l.7.6-.7-.6z" />
        <path fill="#cecece" d="M314.7 240.5l.7.6-.7-.6z" />
        <path fill="#294221" d="M315.4 240.5l.7.6-.7-.6z" />
        <path fill="#103900" d="M316.1 240.5l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M316.8 240.5l.7.6-.7-.6z" />
        <path fill="#397b00" d="M198.6 241.1v3.4h1.4V241h-1.4z" />
        <path fill="#103900" d="M204.3 241.1l.6.7-.7-.7z" />
        <path fill="#295200" d="M207 241.1l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M207.8 241.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M210.6 241.1l.7.7-.7-.7z" />
        <path fill="#295200" d="M211.3 241.1l1.4 1.4-1.4-1.4z" />
        <path fill="#425242" d="M212 241.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M216.2 241.1l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M217 241.1l.6.7-.7-.7z" />
        <path fill="#397b00" d="M217.6 241.1l.7.7-.7-.7z" />
        <path fill="#396b10" d="M218.3 241.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M219 241.1l.7.7-.7-.7z" />
        <path fill="#001039" d="M234.5 241.1l.7.7-.7-.7z" />
        <path fill="#181000" d="M236 241.1l1.3 1.4-1.4-1.4z" />
        <path fill="#002984" d="M236.6 241.1l.7.7-.7-.7z" />
        <path fill="#52525a" d="M240.8 241.1l.7.7-.7-.7z" />
        <path fill="#001010" d="M242.2 241.1l.7.7-.7-.7z" />
        <path fill="#00184a" d="M245.8 241.1l.7.7-.7-.7z" />
        <path fill="#392100" d="M246.5 241.1l1.4 1.4-1.4-1.4z" />
        <path fill="#001010" d="M247.2 241.1l.7.7-.7-.7z" />
        <path fill="#7b5a00" d="M252.8 241.1v7.4h.7l-.7-7.4z" />
        <path fill="#420000" d="M260.5 241.1l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M262 241.1l.6.7-.7-.7z" />
        <path fill="#313931" d="M266.9 241.1l.7.7-.7-.7z" />
        <path fill="#314a7b" d="M267.6 241.1l.7.7-.7-.7z" />
        <path fill="#001010" d="M271.8 241.1l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M295 241.1l.7.7-.7-.7z" />
        <path fill="#319400" d="M295.7 241.1l3.5 6h.7l-4.2-6z" />
        <path fill="#296300" d="M296.4 241.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M297.1 241.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M298.5 241.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M299.2 241.1l.7.7-.7-.7z" />
        <path fill="#296300" d="M301.3 241.1l1.4 1.4-1.4-1.4z" />
        <path fill="#297b00" d="M302 241.1l.7.7-.7-.7z" />
        <path fill="#184a00" d="M304.9 241.1l.7.7-.8-.7z" />
        <path fill="#214210" d="M309 241.1l.8.7-.7-.7z" />
        <path fill="#63636b" d="M309.8 241.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M310.5 241.1l.7.7-.7-.7z" />
        <path fill="#185200" d="M311.9 241.1l.7.7-.7-.7z" />
        <path fill="#dedede" d="M312.6 241.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M314 241.1l.7.7-.7-.7z" />
        <path fill="#184a00" d="M314.7 241.1l.7.7-.7-.7z" />
        <path fill="#319400" d="M311.2 245.8l7-2-1.4-2.7-5.6 4.7z" />
        <path fill="#214210" d="M316.8 241.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M317.5 241.1l.7.7-.7-.7m-121.7.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M196.5 241.8l.7.7-.7-.7z" />
        <path fill="#294200" d="M201.7 242.3l.2.4-.2-.5m1.8-.4l.7.7-.7-.7z" />
        <path fill="#397b00" d="M204.3 241.8l.6.7-.7-.7z" />
        <path fill="#425242" d="M207 241.8l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M210.6 241.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M211.3 241.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M212.7 241.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M215.5 241.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M216.2 241.8l.7.7-.7-.7z" />
        <path
          fill="#428c00"
          d="M214.1 251.8h-.7v-7.3h-.7l-.7 3.3h-.7v-3.3h-.7l-4.2 15.4h.7l1.4-2.7h.7l-1.4 3.4h.7l3.5-4.7-2.8 6h.7l7-10 1.4-10c-4.6 2-4.2 5.6-4.2 10z"
        />
        <path fill="#63636b" d="M218.3 241.8l.7.7-.7-.7z" />
        <path fill="#001039" d="M235.2 241.8l.7.7-.7-.7z" />
        <path fill="#00216b" d="M237.3 241.8l1.4 1.3-1.4-1.3z" />
        <path fill="#efefef" d="M240.8 241.8l2.1 2-2-2z" />
        <path fill="#313931" d="M241.5 241.8l.7.7-.7-.7z" />
        <path fill="#001039" d="M243 241.8l.6.7-.7-.7z" />
        <path fill="#101829" d="M246.5 241.8l.7.7-.7-.7z" />
        <path d="M247.9 241.8l.7.7-.7-.7z" />
        <path fill="#210800" d="M259.8 241.8l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M262 241.8l.6.7-.7-.7z" />
        <path fill="#292921" d="M266.2 241.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M266.9 241.8l.7.7-.7-.7z" />
        <path fill="#002984" d="M270.4 241.8l.7.7-.7-.7z" />
        <path fill="#181000" d="M271 241.8l.8.7-.7-.7z" />
        <path fill="#001039" d="M272.5 241.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M295.2 242.3l.3.4-.3-.5z" />
        <path fill="#297b00" d="M295.7 241.8l.7.7-.7-.7z" />
        <path fill="#103910" d="M297.1 241.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M297.8 241.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M298.5 241.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M299.2 241.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M301.3 241.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M304.9 241.8l.7.7-.8-.7z" />
        <path fill="#294221" d="M309 241.8l.8.7-.7-.7z" />
        <path fill="#184a00" d="M309.8 241.8l.7.7-.7-.7z" />
        <path fill="#425242" d="M311.9 241.8l.7.7-.7-.7z" />
        <path fill="#63636b" d="M313.3 241.8l-1.4 2 1.4-2z" />
        <path fill="#297b00" d="M314 241.8l.7.7-.7-.7z" />
        <path fill="#425242" d="M317.5 241.8l.7.7-.7-.7z" />
        <path fill="#396b10" d="M196.5 242.5l.7.6-.7-.6z" />
        <path fill="#295200" d="M202.8 242.5l.7.6-.7-.6z" />
        <path fill="#397b00" d="M203.6 242.5l.7.6-.8-.6z" />
        <path fill="#314231" d="M206.4 242.5l.7.6-.7-.6z" />
        <path fill="#efefef" d="M207 242.5l-.6 1.3.7-1.3z" />
        <path fill="#7b7373" d="M210.6 242.5l.7.6-.7-.6z" />
        <path fill="#428c00" d="M211.8 242.7l.4.2-.4-.2z" />
        <path fill="#7b7373" d="M212.7 242.5l.7.6-.7-.6z" />
        <path fill="#63636b" d="M214.8 242.5l-.7 1.3.7-1.3z" />
        <path fill="#397b00" d="M215.5 242.5l.7.6-.7-.6m2.1 0l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M218.3 242.5l.7.6-.7-.6z" />
        <path fill="#00216b" d="M236 242.5l.6.6-.7-.6z" />
        <path fill="#211800" d="M237 242.7l.6.2-.5-.2z" />
        <path fill="#313931" d="M242.2 242.5l.7.6-.7-.6z" />
        <path fill="#001039" d="M243.7 242.5l.7.6-.8-.6z" />
        <path fill="#181000" d="M247.2 242.5l.7.6-.7-.6z" />
        <path fill="#211800" d="M248.1 243l.2.4-.2-.5z" />
        <path fill="#bdbdbd" d="M248.6 242.5l.7.6-.7-.6z" />
        <path fill="#dedede" d="M259.1 242.5l.7.6-.7-.6z" />
        <path fill="#b51010" d="M261.2 242.5l.7.6-.7-.6z" />
        <path fill="#941808" d="M264 242.5l-1.3 2 1.4-2z" />
        <path fill="#211800" d="M264.8 242.5l-3.6 4 3.6-4z" />
        <path fill="#212118" d="M265.5 242.5l-.7 1.3.7-1.3z" />
        <path fill="#cecece" d="M266.2 242.5l-1.4 2 1.4-2z" />
        <path fill="#00216b" d="M269.7 242.5l-.7 1.3.7-1.3z" />
        <path fill="#181000" d="M270.4 242.5l.7.6-.7-.6z" />
        <path fill="#001039" d="M271.8 242.5l.7.6-.7-.6z" />
        <path fill="#cecece" d="M293.6 242.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M294.3 242.5l.7.6-.7-.6z" />
        <path fill="#296300" d="M295.7 242.5l.7.6-.7-.6z" />
        <path fill="#297b00" d="M297.1 242.5l.7.6-.7-.6z" />
        <path fill="#52525a" d="M297.8 242.5l.7.6-.7-.6z" />
        <path fill="#395231" d="M299.2 242.5l.7.6-.7-.6z" />
        <path fill="#184a00" d="M302 242.5v2h.7l-.7-2z" />
        <path fill="#296300" d="M305.3 242.7l.5.2-.5-.2m1.7-.2l.7.6-.7-.6z" />
        <path fill="#001000" d="M309 242.5l.8.6-.7-.6z" />
        <path fill="#297b00" d="M309.8 242.5l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M311.9 242.5l.7.6-.7-.6z" />
        <path fill="#297b00" d="M313.3 242.5l.7.6-.7-.6z" />
        <path fill="#296300" d="M317.5 242.5l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M318.2 242.5l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M196.5 243.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M200.7 243.1v.7h2.1l-2-.7z" />
        <path fill="#294200" d="M202.8 243.1l.7.7-.7-.7z" />
        <path fill="#295200" d="M205 243.1l.7.7-.7-.7z" />
        <path fill="#52525a" d="M205.7 243.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M209.9 243.1l.7.7-.7-.7z" />
        <path fill="#214210" d="M210.6 243.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M210.6 243.8v.7l2 .6v-2l-2 .7z" />
        <path fill="#5a5231" d="M212.7 243.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M214.8 243.1l.7.7-.7-.7z" />
        <path fill="#295200" d="M217.4 243.4l.4.2-.4-.2z" />
        <path fill="#dedede" d="M218.3 243.1l.7.7-.7-.7z" />
        <path fill="#424242" d="M236.6 243.1l.7.7-.7-.7z" />
        <path fill="#212118" d="M237.3 243.1l.7.7-.7-.7z" />
        <path fill="#392100" d="M238 243.1l2.8 2.7-2.8-2.7z" />
        <path fill="#001039" d="M238.7 243.1l.7.7-.7-.7z" />
        <path fill="#292921" d="M243 243.1l.6.7-.7-.7z" />
        <path fill="#001039" d="M244.3 243.1l.7.7-.7-.7z" />
        <path fill="#00216b" d="M247.2 243.1l.7.7-.7-.7z" />
        <path fill="#211810" d="M248.6 243.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M249.3 243.1l.7.7-.7-.7z" />
        <path fill="#313931" d="M259.1 243.1l.7.7-.7-.7z" />
        <path fill="#392100" d="M259.8 243.1l-.7 1.4.7-1.4z" />
        <path fill="#631808" d="M260.5 243.1l.7.7-.7-.7z" />
        <path fill="#211800" d="M270.1 243.4l.5.2-.5-.2z" />
        <path fill="#313931" d="M271 243.1l.8.7-.7-.7z" />
        <path fill="#63636b" d="M292.9 243.1l.7.7-.7-.7z" />
        <path fill="#185200" d="M293.6 243.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M294.3 243.1l.7.7-.7-.7z" />
        <path fill="#295210" d="M295 243.1l.7.7-.7-.7z" />
        <path fill="#103900" d="M295.7 243.1l.7.7-.7-.7z" />
        <path fill="#296300" d="M297.8 243.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M298.5 243.1l1.4 1.4-1.4-1.4z" />
        <path fill="#8c8c8c" d="M299.2 243.1l.7.7-.7-.7z" />
        <path fill="#103900" d="M305.6 243.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M308.4 243.1l1.4 1.4-1.4-1.4z" />
        <path fill="#184a00" d="M309 243.1l.8.7-.7-.7z" />
        <path fill="#214210" d="M311.2 243.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M312.6 243.1l.7.7-.7-.7m1.4 0l-4.2 2.7v.7l1.4.7 2.8-4z" />
        <path fill="#214210" d="M314.7 243.1l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M315.4 243.1l.7.7-.7-.7z" />
        <path fill="#214210" d="M316.1 243.1l.7.7-.7-.7z" />
        <path fill="#296300" d="M316.8 243.1l.7.7-.7-.7z" />
        <path fill="#294221" d="M318.2 243.1l-.7 1.4.7-1.4z" />
        <path fill="#bdbdbd" d="M196.5 243.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M197.2 243.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M200.7 243.8l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#397b00" d="M203.6 243.8l-.7 1.3.7-1.3z" />
        <path fill="#5a5231" d="M204.3 243.8l.6.7-.7-.7z" />
        <path fill="#bdbdbd" d="M205 243.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M209.9 243.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M212.7 243.8l1.4 1.3-1.4-1.3z" />
        <path fill="#52525a" d="M213.4 243.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M214.1 243.8l.7.7-.7-.7z" />
        <path fill="#294200" d="M216.4 244.3l.3.4-.3-.4m1.2-.5v4.7h.7l-.7-4.7z" />
        <path fill="#8c8c8c" fillOpacity={0.5} d="M236.6 243.8v18h.7l-.7-18z" />
        <path fill="#cecece" d="M237.3 243.8l.7.7-.7-.7z" />
        <path fill="#211810" d="M238 243.8l.7.7-.7-.7z" />
        <path fill="#001039" d="M239.4 243.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M243 243.8l2 2-2-2z" />
        <path fill="#212118" d="M243.7 243.8l.7.7-.8-.7z" />
        <path fill="#00215a" d="M245 243.8l.8.7-.7-.7z" />
        <path fill="#001039" d="M247.9 243.8l.7.7-.7-.7z" />
        <path fill="#392100" d="M248.6 243.8l1.4 1.3-1.4-1.3z" />
        <path fill="#424242" d="M249.3 243.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M258.4 243.8l.7.7-.7-.7z" />
        <path fill="#310000" d="M259.8 243.8l.7.7-.7-.7z" />
        <path fill="#001039" d="M268.3 243.8l.7.7-.7-.7z" />
        <path fill="#392100" d="M269 243.8l-2.1 2.7 2-2.7z" />
        <path fill="#212118" d="M269.7 243.8l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M270.4 243.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M271 243.8v18h.8l-.7-18m21 0l.8.7-.7-.7z" />
        <path fill="#296300" d="M292.9 243.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M295.7 243.8l.7.7-.7-.7z" />
        <path fill="#296300" d="M296.4 243.8l.7.7-.7-.7z" />
        <path fill="#214210" d="M298.5 243.8l.7.7-.7-.7z" />
        <path fill="#296300" d="M300 243.8l.6.7-.7-.7z" />
        <path fill="#184a00" d="M305.6 243.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M306.3 243.8l-.7 1.3.7-1.3z" />
        <path fill="#185200" d="M308.4 243.8l.7.7-.7-.7z" />
        <path fill="#314231" d="M314 243.8l-1.4 2 1.4-2z" />
        <path fill="#efefef" d="M314.7 243.8l-2.1 2.7 2.1-2.7z" />
        <path fill="#bdbdbd" d="M316.8 243.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M318.2 243.8l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M319 243.8l.6.7-.7-.7z" />
        <path fill="#63636b" d="M197.2 244.5l.7.6-.7-.6z" />
        <path fill="#295200" d="M200.7 244.5l.7.6-.7-.6z" />
        <path fill="#397b00" d="M201.4 244.5l.7.6-.7-.6z" />
        <path fill="#63636b" d="M203.6 244.5l-.7 1.3.7-1.3z" />
        <path fill="#7b7373" d="M204.3 244.5l.6.6-.7-.6z" />
        <path fill="#8c8c8c" d="M205 244.5l.7.6-.7-.6z" />
        <path fill="#efefef" d="M205.7 244.5l.7.6-.7-.6m3.5 0l.7.6-.7-.6z" />
        <path fill="#214210" d="M209.9 244.5l.7.6-.7-.6z" />
        <path fill="#efefef" d="M238 244.5l1.4 1.3-1.4-1.3z" />
        <path fill="#313931" d="M238.7 244.5l.7.6-.7-.6z" />
        <path d="M240.1 244.5l.7.6-.7-.6z" />
        <path fill="#efefef" d="M240.8 244.5l.7.6-.7-.6z" />
        <path fill="#212118" d="M244.3 244.5l1.4 1.3-1.3-1.3z" />
        <path fill="#211800" d="M245 244.5l2.9 3.3-2.8-3.3z" />
        <path fill="#00216b" d="M245.8 244.5l.7.6-.7-.6z" />
        <path fill="#00184a" d="M247.9 244.5v2h.7l-.7-2z" />
        <path fill="#313931" d="M248.6 244.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M250 244.5l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M257.7 244.5l.7.6-.7-.6z" />
        <path fill="#211800" d="M258.7 245l.2.4-.2-.5z" />
        <path fill="#211810" d="M259.1 244.5l.7.6-.7-.6z" />
        <path fill="#b51010" d="M262 244.5l.6.6-.7-.6z" />
        <path fill="#9c9494" d="M264 244.5l-1.3 2 1.4-2z" />
        <path fill="#efefef" d="M266.9 244.5l-.7 1.3.7-1.3z" />
        <path fill="#292921" d="M267.6 244.5l.7.6-.7-.6z" />
        <path fill="#211810" d="M269 244.5l.7.6-.7-.6z" />
        <path fill="#cecece" d="M269.7 244.5l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M291.5 244.5l.7.6-.7-.6z" />
        <path fill="#185200" d="M292.2 244.5l.7.6-.7-.6z" />
        <path fill="#103900" d="M296.4 244.5l2.1 2-2-2z" />
        <path fill="#297b00" d="M297.1 244.5l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#314231" d="M299.2 244.5l.7.6-.7-.6z" />
        <path fill="#185200" d="M300 244.5l.6.6-.7-.6m2.1 0l.7.6-.7-.6z" />
        <path fill="#297b00" d="M302.7 244.5l.7.6-.7-.6z" />
        <path fill="#296300" d="M306.3 244.5l.7.6-.7-.6z" />
        <path fill="#103900" d="M308.4 244.5l.7.6-.7-.6z" />
        <path fill="#185200" d="M310.5 244.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M318.2 244.5l.7.6-.7-.6z" />
        <path fill="#63636b" d="M319 244.5l.6.6-.7-.6z" />
        <path fill="#dedede" d="M197.2 245.2l.7.6-.7-.7z" />
        <path fill="#294200" d="M198 245.2l.6.6-.7-.7z" />
        <path fill="#397b00" d="M200.5 245.4l.5.2-.5-.2z" />
        <path fill="#295200" d="M202.1 245.2l.7.6-.7-.7z" />
        <path fill="#6b735a" d="M204.3 245.2l.6.6-.7-.7z" />
        <path fill="#295200" d="M205 245.2l.7.6-.7-.7z" />
        <path fill="#396b10" d="M205.7 245.2l.7.6-.7-.7z" />
        <path fill="#7b7373" d="M206.4 245.2l.7.6-.7-.7z" />
        <path fill="#efefef" d="M207 245.2l.8.6-.7-.7z" />
        <path fill="#8c8c8c" d="M209.2 245.2l.7.6-.7-.7z" />
        <path fill="#295200" d="M211.3 245.2l.7.6-.7-.7z" />
        <path fill="#294200" d="M213.4 245.2v6h.7l-.7-6z" />
        <path fill="#397b00" d="M216 245.4l.4.2-.4-.2z" />
        <path fill="#52525a" d="M239.4 245.2l.7.6-.7-.7z" />
        <path fill="#211810" d="M240.8 245.2l.7.6-.7-.7z" />
        <path fill="#cecece" d="M241.5 245.2l.7.6-.7-.7z" />
        <path fill="#00216b" d="M246.5 245.2l.7.6-.7-.7z" />
        <path fill="#cecece" d="M248.6 245.2l.7.6-.7-.7z" />
        <path fill="#392121" d="M249.3 245.2l.7.6-.7-.7z" />
        <path fill="#211800" d="M250 245.2l.7.6-.7-.7z" />
        <path fill="#cecece" d="M250.7 245.2l.7.6-.7-.7z" />
        <path fill="#efefef" d="M257 245.2l.7.6-.7-.7z" />
        <path fill="#211810" d="M257.7 245.2l.7.6-.7-.7z" />
        <path fill="#ada5a5" d="M259.1 245.2l.7.6-.7-.7z" />
        <path fill="#b51010" d="M261.2 245.2l.7.6-.7-.7z" />
        <path fill="#313931" d="M266.9 245.2l.7.6-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#efefef" d="M269 245.2l-.7 1.3.7-1.3z" />
        <path fill="#294221" d="M291.5 245.2l.7.6-.7-.7z" />
        <path fill="#297b00" d="M292.9 245.2l.7.6-.7-.7z" />
        <path fill="#185200" d="M293.6 245.2l.7.6-.7-.7z" />
        <path fill="#184a00" d="M294.3 245.2l.7.6-.7-.7z" />
        <path fill="#297b00" d="M297.8 245.2l.7.6-.7-.7z" />
        <path fill="#296300" d="M299.2 245.2l.7.6-.7-.7z" />
        <path fill="#103900" d="M300 245.2l.6.6-.7-.7z" />
        <path fill="#296300" d="M302.5 245.4l.5.2-.5-.2z" />
        <path fill="#184a00" d="M306.3 245.2l.7.6-.7-.7z" />
        <path fill="#297b00" d="M307.7 245.2l.7.6-.7-.7z" />
        <path fill="#185200" d="M308.4 245.2l.7.6-.7-.7z" />
        <path fill="#103900" d="M310.5 245.2l.7.6-.7-.7z" />
        <path fill="#9c9494" d="M315 245.6l.2.5-.3-.5z" />
        <path fill="#63636b" d="M198 245.8l.6.7-.7-.7z" />
        <path fill="#294200" d="M200.3 246.3l.2.4-.2-.4z" />
        <path fill="#8c8c8c" d="M202.1 245.8l.7.7-.7-.7m2.4.5l.2.4-.2-.4z" />
        <path fill="#397b00" d="M205.4 246l.5.3-.5-.3z" />
        <path fill="#428c00" d="M206.4 245.8l.7 6h.7l-1.4-6z" />
        <path fill="#315221" d="M207 245.8l.8.7-.7-.7z" />
        <path fill="#cecece" d="M207.8 245.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M208.5 245.8l.7.7-.7-.7z" />
        <path fill="#63636b" d="M240.1 245.8l.7.7-.7-.7z" />
        <path fill="#211800" d="M240.8 245.8l2.1 1.4v-.7l-2-.7z" />
        <path fill="#212118" d="M241.5 245.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M245 245.8l.8.7-.7-.7z" />
        <path fill="#002984" d="M247.2 245.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M249.3 245.8l.7.7-.7-.7z" />
        <path fill="#392100" d="M250 245.8l2 2-2-2z" />
        <path fill="#313931" d="M250.7 245.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M251.4 245.8l.7.7-.7-.7z" />
        <path fill="#424242" d="M257 245.8l.7.7-.7-.7z" />
        <path fill="#392100" d="M257.7 245.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M258.4 245.8l.7.7-.7-.7z" />
        <path fill="#b51010" d="M260.5 245.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M265.5 245.8l.7.7-.7-.7z" />
        <path fill="#211810" d="M266.2 245.8l.7.7-.7-.7z" />
        <path fill="#52525a" d="M267.6 245.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M290.8 245.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M291.5 245.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M292.2 245.8l.7.7-.7-.7z" />
        <path fill="#63636b" d="M292.9 245.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M293.6 245.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M294.3 245.8l.7.7-.7-.7z" />
        <path fill="#214210" d="M295 245.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M297.1 245.8l.7.7-.7-.7z" />
        <path fill="#184a00" d="M300 245.8l.6.7-.7-.7z" />
        <path fill="#297b00" d="M302 245.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M302.7 245.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M306.3 245.8l.7.7-.7-.7z" />
        <path fill="#184a00" d="M307.7 245.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M310.5 245.8l.7.7-.7-.7z" />
        <path fill="#293129" d="M311.9 245.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M313.3 245.8l.7.7-.7-.7z" />
        <path fill="#292921" d="M314 245.8l.7.7-.7-.7z" />
        <path fill="#424242" d="M195.1 246.5l1.4 1.3-1.4-1.3z" />
        <path fill="#dedede" d="M195.8 246.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M198 246.5l.6.7-.7-.7z" />
        <path fill="#292100" d="M198.6 246.5l.7.7-.7-.7z" />
        <path fill="#295200" d="M199.3 246.5l.7.7-.7-.7z" />
        <path fill="#315221" d="M201.4 246.5l.7.7-.7-.7z" />
        <path fill="#428c00" d="M205 246.5c-.2 3.6-1 6.7 2.8 8.7l-2.8-8.7z" />
        <path fill="#294200" d="M205.9 247l.2.4-.2-.5z" />
        <path fill="#214210" d="M207.8 246.5l.7.7-.7-.7z" />
        <path fill="#424242" d="M208.5 246.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M240.8 246.5l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M245.8 246.5l.7.7-.7-.7z" />
        <path fill="#181000" d="M247.2 246.5l1.4 1.3-1.4-1.3z" />
        <path fill="#001039" d="M247.9 246.5l.7.7-.7-.7z" />
        <path fill="#52525a" d="M250 246.5l.7.7-.7-.7z" />
        <path fill="#63636b" d="M251.4 246.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M256.3 246.5l.7.7-.7-.7z" />
        <path fill="#211800" d="M257 246.5l.7.7-.7-.7z" />
        <path d="M257.7 246.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M258.4 246.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M259.1 246.5l-.7 2 .7-2z" />
        <path fill="#5a1008" d="M259.8 246.5l.7.7-.7-.7z" />
        <path fill="#210800" d="M260.5 246.5l.7.7-.7-.7z" />
        <path fill="#392100" d="M261.2 246.5l-.7 1.3.7-1.3z" />
        <path fill="#63636b" d="M262 246.5l.6.7-.7-.7z" />
        <path fill="#ada5a5" d="M264.8 246.5l.6.7-.6-.7z" />
        <path fill="#212118" d="M265.5 246.5l.7.7-.7-.7z" />
        <path fill="#211800" d="M266.2 246.5l-1.4 2 1.4-2z" />
        <path fill="#63636b" d="M266.9 246.5l.7.7-.7-.7z" />
        <path fill="#efefef" d="M290 246.5l.8.7-.7-.7z" />
        <path fill="#214210" d="M291.3 246.7l.4.2-.4-.2z" />
        <path fill="#9c9494" d="M292.2 246.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M295 246.5l.7.7-.7-.7z" />
        <path fill="#296300" d="M295.7 246.5l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#185200" d="M298.5 246.5l.7.7-.7-.7m1.4 0l1.4 1.3-1.4-1.3z" />
        <path fill="#297b00" d="M300.6 246.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M302.7 246.5l.7.7-.7-.7m3.6 0l1.4 1.3-1.4-1.3z" />
        <path fill="#103900" d="M307.7 246.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M309.8 246.5l1.4 1.3-1.4-1.3z" />
        <path fill="#214210" d="M311.2 246.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M311.9 246.5l-.7 1.3.7-1.3z" />
        <path fill="#9c9494" d="M312.6 246.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M313.3 246.5l.7.7-.7-.7z" />
        <path fill="#294221" d="M314 246.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M317.5 246.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M318.2 246.5l.7.7-.7-.7z" />
        <path fill="#214210" d="M195.1 247.2l.7.6-.7-.6z" />
        <path fill="#efefef" d="M196.5 247.2l.7.6-.7-.6z" />
        <path fill="#5a1010" d="M198 247.2l.6.6-.7-.6z" />
        <path fill="#ce2110" d="M198.6 247.2l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M199.3 247.2l.7.6-.7-.6z" />
        <path fill="#311000" d="M200 247.2l.7.6-.7-.6z" />
        <path fill="#397b00" d="M200.7 247.2l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M201.4 247.2l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M204.3 247.2l.6.6-.7-.6z" />
        <path fill="#295200" d="M208.5 247.2l-.7 1.3.7-1.3m2.8 0l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M241.5 247.2l.7.6-.7-.6z" />
        <path fill="#212118" d="M242.2 247.2l.7.6-.7-.6z" />
        <path fill="#392100" d="M243 247.2l2.7 2.6-2.8-2.6z" />
        <path fill="#63636b" d="M243.7 247.2l.7.6-.8-.6z" />
        <path fill="#bdbdbd" d="M246 247.6l.2.5-.2-.5z" />
        <path fill="#520808" d="M246.5 247.2l.7.6-.7-.6z" />
        <path fill="#cecece" d="M248.6 247.2l.7.6-.7-.6z" />
        <path fill="#efefef" d="M250 247.2l.7.6-.7-.6z" />
        <path fill="#392121" d="M250.7 247.2l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M252 247.2l.8.6-.7-.6z" />
        <path fill="#9c7b08" d="M254.9 247.2l.7.6-.7-.6z" />
        <path fill="#424242" d="M255.6 247.2l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M256.3 247.2l.7.6-.7-.6z" />
        <path fill="#cecece" d="M257 247.2l.7.6-.7-.6z" />
        <path d="M259.8 247.2l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M262.2 247.6l.2.5-.2-.5z" />
        <path fill="#9c9494" d="M264 247.2l.8.6-.8-.6m2.2 0l.7.6-.7-.6z" />
        <path fill="#63636b" d="M290 247.2l.8.6-.7-.6z" />
        <path fill="#425242" d="M290.8 247.2l.7.6-.7-.6z" />
        <path fill="#cecece" d="M291.5 247.2l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M295.7 247.2l.7.6-.7-.6z" />
        <path fill="#297b00" d="M296.4 247.2l.7.6-.7-.6z" />
        <path fill="#184a00" d="M298.5 247.2l.7.6-.7-.6z" />
        <path fill="#297b00" d="M298.5 248.5l2.1-.7-2 .7z" />
        <path fill="#103900" d="M302.7 247.2l.7.6-.7-.6z" />
        <path fill="#296300" d="M306.3 247.2v2h.7l-.7-2m1.4 0l.7.6-.7-.6z" />
        <path fill="#103900" d="M309.8 247.2l-.7 2 .7-2z" />
        <path fill="#8c8c8c" d="M311.9 247.2l.7.6-.7-.6z" />
        <path fill="#185200" d="M312.6 247.2l-.7 1.3.7-1.3z" />
        <path fill="#296300" d="M313.3 247.2l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M314 247.2l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M316.1 247.2l.7.6-.7-.6z" />
        <path fill="#424242" d="M316.8 247.2l.7.6-.7-.6z" />
        <path fill="#313931" d="M317.5 247.2l.7.6-.7-.6z" />
        <path fill="#efefef" d="M318.2 247.2l-1.4 2 1.4-2z" />
        <path fill="#295200" d="M195.1 247.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M195.8 247.8l.7.7-.7-.7z" />
        <path fill="#314231" d="M196.5 247.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M197.2 247.8l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M198 247.8l.6.7-.7-.7z" />
        <path fill="#941808" d="M200 247.8l.7.7-.7-.7z" />
        <path fill="#313931" d="M200.7 247.8l.7.7-.7-.7z" />
        <path fill="#526b42" d="M204.3 247.8l.6.7-.7-.7z" />
        <path fill="#397b00" d="M206.1 248l.5.3-.5-.3m2.4-.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M210.6 247.8l.7.7-.7-.7z" />
        <path fill="#524242" d="M242.2 247.8l.7.7-.7-.7z" />
        <path fill="#210800" d="M243 247.8l.6.7-.7-.7z" />
        <path fill="#424242" d="M244.3 247.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M245 247.8l.8.7-.7-.7z" />
        <path fill="#ad1810" d="M246.7 248.3l.2.4-.2-.4z" />
        <path fill="#5a1008" d="M247.2 247.8l1.4 1.4-1.4-1.4z" />
        <path fill="#392100" d="M247.9 247.8l1.4 1.4-1.4-1.4z" />
        <path fill="#211810" d="M248.6 247.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M249.3 247.8l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M250.7 247.8l-.7 1.4.7-1.4z" />
        <path fill="#211800" d="M251.4 247.8l.7.7-.7-.7z" />
        <path fill="#212118" d="M252 247.8l.8.7-.7-.7z" />
        <path fill="#6b5a10" d="M254.2 247.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M254.9 247.8l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M256.3 247.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M257 247.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M257.7 247.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M259.1 247.8l.7.7-.7-.7z" />
        <path fill="#313931" d="M259.8 247.8l.7.7-.7-.7z" />
        <path fill="#de2110" d="M261.5 248.3l.2.4-.2-.4z" />
        <path fill="#63636b" d="M263.4 247.8l.7.7-.8-.7z" />
        <path fill="#392100" d="M264 247.8l-2 2.7 2-2.7z" />
        <path fill="#524242" d="M265.5 247.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M290 247.8l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M293.6 247.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M294.3 247.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M295.7 247.8l-.7 1.4.7-1.4z" />
        <path fill="#214210" d="M296.4 247.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M299.2 247.8l.7.7-.7-.7z" />
        <path fill="#319400" d="M300 247.8l.6.7-.7-.7z" />
        <path fill="#103900" d="M300.6 247.8l-.7 2 .7-2z" />
        <path fill="#184a00" d="M302.7 247.8l.7.7-.7-.7z" />
        <path fill="#082108" d="M307 247.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M309 247.8l.8.7-.7-.7z" />
        <path fill="#8c8c8c" d="M310.7 248.3l.2.4-.2-.4z" />
        <path fill="#63636b" d="M311.2 247.8l.7.7-.7-.7z" />
        <path fill="#319400" d="M312.6 247.8l-5 7.4 5-7.4z" />
        <path fill="#294221" d="M313.3 247.8l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M314.7 247.8l.7.7-.7-.7z" />
        <path fill="#425242" d="M315.4 247.8l.7.7-.7-.7z" />
        <path fill="#184a00" d="M316.1 247.8l.7.7-.7-.7z" />
        <path fill="#314231" d="M316.8 247.8l.7.7-.7-.7z" />
        <path fill="#294200" d="M195.1 248.5v1.3l1.4-1.3h-1.4z" />
        <path
          fill="#428c00"
          d="M196.5 248.5l1.4 2.7-2-1.4c.6 2.7 1.3 4.4 4.1 5.4v.7l-2.8-.7 1.4 2-2-.7 6.2 6 .7-2.6 2.2 1.3-4.3-4v-.7l2.1.7a12.3 12.3 0 00-7-8.7z"
        />
        <path fill="#294200" d="M197.2 248.5l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M198 248.5l.6.7-.7-.7z" />
        <path fill="#ce2110" d="M198.6 248.5l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M200 248.5l1.4 1.3-1.4-1.3z" />
        <path fill="#7b7373" d="M200.7 248.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M201.4 248.5l.7.7-.7-.7z" />
        <path fill="#294200" d="M204.3 248.5l.6.7-.7-.7z" />
        <path fill="#295200" d="M206.4 248.5l.7.7-.7-.7z" />
        <path fill="#294200" d="M207.8 248.5v6h.7l-.7-6m3 .5l.3.4-.3-.5z" />
        <path fill="#295200" d="M215.5 248.5l.7.7-.7-.7z" />
        <path fill="#527b31" d="M217.6 248.5l.7.7-.7-.7z" />
        <path fill="#734a42" fillOpacity={0.6} d="M242.2 248.5v14.7h.7l-.7-14.7z" />
        <path fill="#ce2110" d="M243 248.5l1.3 1.3-1.4-1.3z" />
        <path fill="#311000" d="M243.7 248.5l.7.7-.8-.7z" />
        <path fill="#313931" d="M245 248.5l.8.7-.7-.7z" />
        <path fill="#9c9494" d="M245.8 248.5l.7.7-.7-.7z" />
        <path fill="#de2110" d="M247.2 248.5v1.3h1.4l-1.4-1.3z" />
        <path fill="#313931" d="M249.3 248.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M250.7 248.5l.7.7-.7-.7z" />
        <path fill="#52525a" d="M251.4 248.5l.7.7-.7-.7z" />
        <path fill="#392121" d="M252 248.5l.8.7-.7-.7z" />
        <path fill="#423100" d="M252.8 248.5l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M253.5 248.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M254.2 248.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M254.9 248.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M255.6 248.5l-.7 1.3.7-1.3z" />
        <path fill="#9c9494" d="M256.3 248.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M259.8 248.5l-2.8 1.3v.7l3.5-1.3-.7-.7z" />
        <path fill="#ada5a5" d="M262 248.5l.6.7-.7-.7z" />
        <path fill="#424242" d="M262.6 248.5l.7.7-.7-.7z" />
        <path fill="#210800" d="M264 248.5l.8.7-.8-.7z" />
        <path fill="#b51010" d="M264.8 248.5l.6.7-.6-.7z" />
        <path fill="#734a42" d="M265.5 248.5l-.7 15.4h.7a26.7 26.7 0 000-15.4z" />
        <path d="M294.3 248.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M296.4 248.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M297.1 248.5l.7.7-.7-.7z" />
        <path fill="#296300" d="M299.2 248.5l.7.7-.7-.7z" />
        <path fill="#185200" d="M300 248.5l.6.7-.7-.7z" />
        <path fill="#296300" d="M303.2 248.7l.5.2-.5-.2z" />
        <path fill="#103900" d="M307 248.5l.7.7-.7-.7z" />
        <path fill="#52525a" d="M309.8 248.5l.7.7-.7-.7z" />
        <path fill="#296300" d="M311.2 248.5l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M313.3 248.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M314 248.5l.7.7-.7-.7z" />
        <path fill="#185200" d="M314.7 248.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M315.4 248.5l-1.4.7v.6l1.4-1.3z" />
        <path fill="#52525a" d="M316.1 248.5l.7.7-.7-.7z" />
        <path fill="#397b00" d="M195.8 249.2l.7.6-.7-.6z" />
        <path fill="#295200" d="M196.5 249.2l.7.6-.7-.6z" />
        <path fill="#293100" d="M198.6 249.2l.7.6-.7-.6z" />
        <path fill="#311000" d="M199.3 249.2l.7.6-.7-.6z" />
        <path fill="#103900" d="M200 249.2l.7.6-.7-.6z" />
        <path fill="#941808" d="M201.4 249.2l.7.6-.7-.6z" />
        <path fill="#5a2121" d="M202.1 249.2l.7.6-.7-.6z" />
        <path fill="#cecece" d="M202.8 249.2l.7.6-.7-.6z" />
        <path fill="#dedede" d="M203.6 249.2l.7.6-.8-.6z" />
        <path fill="#295200" d="M204.3 249.2l.6.6-.7-.6z" />
        <path fill="#397b00" d="M215.3 249.4l.4.2-.4-.2z" />
        <path fill="#526b42" d="M217.6 249.2l.7.6-.7-.6z" />
        <path fill="#de2110" d="M243 249.2v14l7.7 1.4c-1.7-5-2.7-12.8-7.8-15.4z" />
        <path fill="#5a1008" d="M244.3 249.2l.7.6-.7-.6z" />
        <path fill="#100808" d="M245.8 249.2l.7.6-.7-.6z" />
        <path fill="#941808" d="M246.5 249.2l.7.6-.7-.6z" />
        <path fill="#310000" d="M248.6 249.2l.7.6-.7-.6z" />
        <path fill="#524242" d="M249.3 249.2l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M250.2 249.6l.2.5-.2-.5z" />
        <path fill="#efefef" d="M252.8 249.2l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M253.7 249.6l.3.5-.3-.5z" />
        <path fill="#bdbdbd" d="M254.2 249.2l.7.6-.7-.6z" />
        <path fill="#dedede" d="M257 249.2l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M259.8 249.2l.7.6-.7-.6z" />
        <path fill="#100808" d="M260.5 249.2l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M261.2 249.2l.7.6-.7-.6z" />
        <path fill="#101810" d="M262 249.2l.6.6-.7-.6z" />
        <path fill="#311000" d="M263.4 249.2l.7.6-.8-.6z" />
        <path fill="#ce2110" d="M264 249.2l-.6 1.3.7-1.3z" />
        <path fill="#de2110" d="M264.8 249.2l-2.9 2 2.9 8.7-5 1.3.7 2.7 5-.7-.8-14z" />
        <path fill="#214210" d="M294.3 249.2l.7.6-.7-.6z" />
        <path fill="#425242" d="M295 249.2l.7.6-.7-.6z" />
        <path fill="#395231" d="M297.1 249.2l.7.6-.7-.6z" />
        <path fill="#184a00" d="M300.6 249.2l.7.6-.7-.6z" />
        <path fill="#297b00" d="M301.3 249.2l.7.6-.7-.6z" />
        <path fill="#184a00" d="M303.4 249.2v2h.8l-.8-2z" />
        <path fill="#185200" d="M306.3 249.2l.7.6-.7-.6z" />
        <path fill="#297b00" d="M307 249.2l.7.6-.7-.6z" />
        <path fill="#292921" d="M309 249.2l.8.6-.7-.6z" />
        <path fill="#bdbdbd" d="M309.8 249.2l.7.6-.7-.6z" />
        <path fill="#184a00" d="M310.5 249.2l.7.6-.7-.6z" />
        <path fill="#102110" d="M312.6 249.2l.7.6-.7-.6z" />
        <path fill="#314231" d="M313.3 249.2l.7.6-.7-.6z" />
        <path fill="#63636b" d="M314.7 249.8v.7h2.1l-2.1-.7z" />
        <path fill="#426331" d="M195.1 249.8l.7.7-.7-.7z" />
        <path fill="#294200" d="M196.5 249.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M197.2 249.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M199.3 249.8l2.1 2-2-2z" />
        <path fill="#211800" d="M200 249.8l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M202.4 250.3l.2.4-.2-.4z" />
        <path fill="#7b7373" d="M203 250.3l.3.4-.2-.4z" />
        <path fill="#bdbdbd" d="M203.6 249.8l.7.7-.8-.7z" />
        <path fill="#397b00" d="M204.3 249.8l.6.7-.7-.7z" />
        <path fill="#295200" d="M210.6 249.8l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M217.6 249.8l.7.7-.7-.7z" />
        <path fill="#631808" d="M245 249.8l.8.7-.7-.7z" />
        <path fill="#211800" d="M245.8 249.8l1.4 1.4v-1.4h-1.4z" />
        <path fill="#631808" d="M247.2 249.8l.7.7-.7-.7z" />
        <path fill="#5a2121" d="M247.9 249.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M248.8 250.3l.2.4-.2-.4z" />
        <path fill="#8c8c8c" d="M250.7 249.8v.7h2l-2-.7z" />
        <path fill="#bdbdbd" d="M252.8 249.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M255.6 249.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M256.3 249.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M257.7 249.8l.7.7-.7-.7z" />
        <path fill="#313931" d="M260.5 249.8l.7.7-.7-.7z" />
        <path fill="#211800" d="M261.2 249.8l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M262.6 249.8l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M294.3 249.8l.7.7-.7-.7z" />
        <path fill="#296300" d="M295 249.8l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M295.7 249.8l.7.7-.7-.7m1.6.5l.3.4-.3-.4z" />
        <path fill="#185200" d="M297.8 249.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M300 249.8l.6.7-.7-.7z" />
        <path fill="#082108" d="M300.6 249.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M301.3 249.8l.7.7-.7-.7z" />
        <path fill="#184a00" d="M306.5 250.3l.2.4-.2-.4z" />
        <path fill="#296300" d="M308.4 249.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M309 249.8l.8.7-.7-.7z" />
        <path fill="#314231" d="M309.8 249.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M311.9 249.8l.7.7-.7-.7z" />
        <path fill="#184a00" d="M312.6 249.8l.7.7-.7-.7z" />
        <path fill="#319400" d="M313.3 249.8l-.7 1.4.7-1.4z" />
        <path fill="#296300" d="M314 249.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M315.4 249.8l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M316.8 249.8l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M195.1 250.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M197.2 250.5l.7.7-.7-.7z" />
        <path fill="#941808" d="M200.7 250.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M203.6 250.5l.7.7-.8-.7z" />
        <path fill="#397b00" d="M210.3 250.7l.5.3-.5-.3z" />
        <path fill="#8c8c8c" d="M217.6 250.5l.7.7-.7-.7z" />
        <path fill="#941808" d="M245.8 250.5l.7.7-.7-.7z" />
        <path d="M247.2 250.5l3.5 13.4c4.3-1.5 10.9-2 13.4-6l-12.7 4-4.2-11.4z" />
        <path fill="#ada5a5" d="M247.9 250.5l.7.7-.7-.7z" />
        <path fill="#63636b" d="M249.3 250.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M250 250.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M253.5 250.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M254.2 250.5l.7.7-.7-.7z" />
        <path fill="#efefef" d="M256.3 250.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M258.7 251l.2.4-.2-.5z" />
        <path fill="#9c9494" d="M259.1 250.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M260.3 250.7l.5.3-.5-.3z" />
        <path d="M261.2 250.5l.7.7-.7-.7z" />
        <path fill="#631808" d="M262 250.5l.6.7-.7-.7z" />
        <path fill="#6b735a" d="M294.3 250.5l.7.7-.7-.7z" />
        <path
          fill="#319400"
          d="M295 250.5l5.6 21.4h-.7v-1.3h-.7l.7 6h-.7v-1.3h-.7v5.3h-.7c0-6.8-2.7-12.9-6.3-18.7l-1.4 1.3v.7c5.1 4.9 6.7 15.4 7 22h-1.4l-2.8-14h-.7l2 18.8h-.6l-2.8-14h-.7l2 21.3h-.6l-1.4-17.4h-.7l1.4 17.4h-.7l-.7-9.3h-.7l.7 11.4h-.7l-.7-9.4h-.7l-2.1 12.7 7.7-.7v-.6l-5-.7v-.7l18.4 4.7v-.7l-8.5-2.7v-.6l12.7 2.7c-4-4.9-9-4-14.8-3.4v-.7l16.2.7v-.7l-11.3-2.6v-.7l11.3.7v-.7c-8-1.8-12-.8-18.3 4.7l1.4-6.7h-.7l-.7 2h-.7l3.5-10h.7l-.7 7.3 16.2-6v-.7l-14.8 4a42.2 42.2 0 0121.1-8.7v-.6c-8.4 0-13 1.9-19.7 6.7 5.3-6.6 13.5-7.3 21.1-10v-.8c-9.5.8-14 3-21.8 8 4.8-4.5 13-12.4 20.4-10.6l-1.4-3.4c-6.5 1.5-12.1 5-16.9 9.4 3.3-4.4 14.8-16.5 20.4-16-5.7-5-16.6 10.1-20.4 13.3l15.5-16.7-13.4 11.4 14.8-18.8v-.7c-7 2.5-9 10.8-14 15.4l10.5-16.7a26.8 26.8 0 00-9.9 14.7c-3.2.4-2 5.5-2 8h-.8c0-8-1-18-6.3-24.7z"
        />
        <path fill="#314231" d="M295.7 250.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M296.4 250.5l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M297.8 250.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M300.6 250.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M301.3 250.5l.7.7-.7-.7m7 0l.8.7-.7-.7z" />
        <path fill="#63636b" d="M309 250.5l.8.7-.7-.7z" />
        <path fill="#297b00" d="M309.8 250.5l.7.7-.7-.7m1.4 0l1.4 1.3-1.4-1.3z" />
        <path fill="#103900" d="M311.9 250.5l.7.7-.7-.7z" />
        <path fill="#185200" d="M313.3 250.5L309 254v.6l4.2-4z" />
        <path fill="#8c8c8c" d="M314 250.5l-.7 1.3.7-1.3z" />
        <path fill="#ada5a5" d="M314.7 250.5l.7.7-.7-.7z" />
        <path fill="#102110" d="M315.4 250.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M316.1 250.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M195.1 251.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M195.8 251.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M198 251.2l2 2-2-2z" />
        <path fill="#5a1008" d="M201.4 251.2l.7.7-.7-.7z" />
        <path fill="#733939" d="M202.1 251.2l.7.7-.7-.7z" />
        <path fill="#dedede" d="M202.8 251.2l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M203.6 251.2l.7.7-.8-.7z" />
        <path fill="#295200" d="M206.4 251.2l1.4 1.3-1.4-1.3z" />
        <path fill="#294200" d="M209.9 251.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M213.4 251.2l.7.7-.7-.7m3.5 0l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M217.6 251.2l.7.7-.7-.7z" />
        <path fill="#100808" d="M246.5 251.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M247.9 251.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M250.7 251.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M251.4 251.2v.7h2.1l-2.1-.7z" />
        <path fill="#efefef" d="M253.5 251.2l.7.7-.7-.7z" />
        <path fill="#dedede" d="M256.3 251.2l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M257.5 251.4l.5.2-.5-.2z" />
        <path fill="#dedede" d="M259.1 251.2l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#210800" d="M261.2 251.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M292.9 251.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M293.6 251.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M294.3 251.2l-.7 1.3.7-1.3z" />
        <path fill="#185200" d="M295.7 251.2l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M296.4 251.2l.7.7-.7-.7z" />
        <path fill="#292921" d="M297.1 251.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M297.8 251.2l.7.7-.7-.7z" />
        <path fill="#185200" d="M298.5 251.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M300.6 251.2l.7.7-.7-.7z" />
        <path fill="#082108" d="M301.3 251.2l.7.7-.7-.7z" />
        <path fill="#185200" d="M303.4 251.2l1.5 1.3-1.5-1.3z" />
        <path fill="#297b00" d="M304.1 251.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M306 251.4l.5.2-.5-.2z" />
        <path fill="#102110" d="M308.4 251.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M309 251.2l.8.7-.7-.7z" />
        <path fill="#184a00" d="M311.2 251.2l.7.7-.7-.7z" />
        <path fill="#425242" d="M314 251.2l.7.7-.7-.7z" />
        <path fill="#185200" d="M314.7 251.2l.7.7-.7-.7z" />
        <path fill="#314231" d="M315.4 251.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M195.1 251.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M195.8 251.8l.7.7-.7-.7z" />
        <path fill="#214210" d="M201.4 251.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M202.1 251.8l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M203.6 251.8l.7.7-.8-.7z" />
        <path fill="#397b00" d="M204.3 251.8l.6.7-.7-.7m2.2 0l.7.7-.7-.7z" />
        <path fill="#295200" d="M209.9 251.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M212.7 251.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M214.6 252l.4.3-.4-.2z" />
        <path fill="#315221" d="M217 251.8l.6.7-.7-.7z" />
        <path fill="#420000" d="M246.5 251.8l.7.7-.7-.7z" />
        <path fill="#101810" d="M247.9 251.8l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M249.3 251.8l-.7 1.4.7-1.3z" />
        <path fill="#7b7373" d="M250 251.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M250.7 251.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M256 252l.5.3-.4-.2z" />
        <path fill="#efefef" d="M257 251.8l1.4 4h.7l-2-4m2 0l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M260 252.3l.3.4-.2-.4z" />
        <path fill="#ada5a5" d="M260.5 251.8l.7.7-.7-.7z" />
        <path fill="#313931" d="M261.2 251.8l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M262 251.8l.6.7-.7-.7z" />
        <path fill="#ada5a5" d="M292.9 251.8l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#297b00" d="M295 251.8l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M296.4 251.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M297.1 251.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M297.8 251.8l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M298.5 251.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M299.2 251.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M301.3 251.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M303.4 251.8l.8.7-.8-.7z" />
        <path fill="#184a00" d="M305.6 251.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M307.7 251.8l1.4 1.4-1.4-1.3z" />
        <path fill="#103900" d="M308.4 251.8l.7.7-.7-.7z" />
        <path fill="#296300" d="M310.5 251.8l.7.7-.7-.7z" />
        <path fill="#313931" d="M312.6 251.8l.7.7-.7-.7z" />
        <path fill="#214210" d="M313.3 251.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M314 251.8l.7.7-.7-.7z" />
        <path fill="#103910" d="M314.7 251.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M315.4 251.8l.7.7-.7-.7z" />
        <path fill="#425242" d="M195.8 252.5l.7.7-.7-.7z" />
        <path fill="#63636b" d="M202.1 252.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M203.6 252.5l-.7 1.4.7-1.4z" />
        <path fill="#396b10" d="M204.3 252.5l.6.7-.7-.7z" />
        <path fill="#397b00" d="M209.9 252.5l.7.7-.7-.7m1.4 1.4l2.1-.7-2.1.7z" />
        <path fill="#103900" d="M214.1 252.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M217 252.5l.6.7-.7-.7z" />
        <path fill="#941808" d="M246.5 252.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M249.3 252.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M251.4 252.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M252 252.5l.8.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#cecece" d="M254.9 252.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M257.7 252.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M258.9 252.7l.5.3-.5-.3z" />
        <path fill="#efefef" d="M260.5 252.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M261.2 252.5l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M262 252.5l.6.7-.7-.7z" />
        <path fill="#dedede" d="M292.9 252.5l.7.7-.7-.7z" />
        <path fill="#101810" d="M293.6 252.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M294.3 252.5l.7.7-.7-.7z" />
        <path fill="#296300" d="M295 252.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M296.4 252.5l.7.7-.7-.7z" />
        <path fill="#082108" d="M297.1 252.5l.7.7-.7-.7z" />
        <path fill="#185200" d="M297.8 252.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M298.5 252.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M299.2 252.5l.7.7-.7-.7z" />
        <path fill="#296300" d="M301.8 252.7l.5.3-.5-.3z" />
        <path fill="#103900" d="M304.1 252.5l.7.7-.7-.7m1.4 0l.8.7-.7-.7m2 0l.8.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path d="M311.9 252.5l.7.7-.7-.7z" />
        <path fill="#296300" d="M312.6 252.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M314 252.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M314.7 252.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M195.1 253.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M195.8 253.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M196.5 253.2l.7.7-.7-.7z" />
        <path fill="#292100" d="M200 253.2l.7.7-.7-.7z" />
        <path fill="#294200" d="M202.1 253.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M204.3 253.2l.6.7-.7-.7z" />
        <path fill="#397b00" d="M205 253.2l.7.7-.7-.7z" />
        <path fill="#294200" d="M212 253.2l.7.7-.7-.7z" />
        <path fill="#428c00" d="M212.7 253.2l-.7 1.3.7-1.3z" />
        <path fill="#295200" d="M213.4 253.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M214.1 253.2l.7.7-.7-.7z" />
        <path fill="#213918" d="M216.2 253.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M217 253.2l.6.7-.7-.7z" />
        <path fill="#ce2110" d="M246.5 253.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M248.6 253.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M250 253.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M251.2 253.4l.4.2-.4-.2z" />
        <path fill="#cecece" d="M252 253.2l2.2 2-2.1-2z" />
        <path fill="#8c8c8c" d="M254.9 253.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M255.6 253.2l1.4 2-1.4-2z" />
        <path fill="#8c8c8c" d="M256.8 253.4l.4.2-.4-.2z" />
        <path fill="#dedede" d="M260.5 253.2l1.4 1.3-1.4-1.3z" />
        <path fill="#bdbdbd" d="M261.2 253.2l.7.7-.7-.7z" />
        <path fill="#210800" d="M262 253.2l.6.7-.7-.7z" />
        <path fill="#103910" d="M293.6 253.2l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M294.3 253.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M295 253.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M296.4 253.2l.7.7-.7-.7z" />
        <path fill="#001000" d="M297.1 253.2l.7.7-.7-.7z" />
        <path fill="#319400" d="M297.8 253.2l.7.7-.7-.7z" />
        <path fill="#103910" d="M298.5 253.2l.7.7-.7-.7z" />
        <path fill="#425242" d="M299.2 253.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M302 253.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M304.1 253.2l.7.7-.7-.7z" />
        <path fill="#185200" d="M305.6 253.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M307 253.2l1.4 1.3-1.4-1.3z" />
        <path fill="#184a00" d="M307.7 253.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M309.8 253.2l.7.7-.7-.7z" />
        <path fill="#001000" d="M311.2 253.2l-.7 1.3.7-1.3z" />
        <path fill="#297b00" d="M311.9 253.2l.7.7-.7-.7m1.4 0l-.7 1.3.7-1.3z" />
        <path fill="#8c8c8c" d="M314 253.2l.7.7-.7-.7z" />
        <path fill="#dedede" d="M314.7 253.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M315.4 253.2l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M316.1 253.2l.7.7-.7-.7z" />
        <path fill="#8c9c84" d="M316.8 253.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M317.5 253.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M318.2 253.2l.7.7-.7-.7z" />
        <path fill="#313931" d="M195.1 253.8l.7.7-.7-.7z" />
        <path fill="#63636b" d="M195.8 253.8l.7.7-.7-.7z" />
        <path fill="#425242" d="M196.5 253.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M200 253.8l.7.7-.7-.7z" />
        <path fill="#294200" d="M200.7 253.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M202.8 253.8l.7.7-.7-.7z" />
        <path fill="#425242" d="M205 253.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M211.3 253.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M212.7 253.8l-.7 1.4.7-1.3z" />
        <path fill="#294200" d="M213.4 253.8l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#cecece" d="M216.2 253.8l.7.7-.7-.7z" />
        <path fill="#420000" d="M247.2 253.8l.7.7-.7-.7z" />
        <path fill="#101810" d="M248.6 253.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M249.3 253.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M250 253.8l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M253.5 253.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M254.2 253.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M254.9 253.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M256.3 253.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M258.4 253.8v.7h2.1l-2-.7z" />
        <path fill="#ada5a5" d="M260.5 253.8l.7.7-.7-.7z" />
        <path fill="#313931" d="M262 253.8l.6.7-.7-.7z" />
        <path fill="#bd2110" d="M262.6 253.8l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M293.6 253.8l.7.7-.7-.7z" />
        <path fill="#294221" d="M294.3 253.8l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M295 253.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M297.1 253.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M297.1 255.2l2.1-.7-2 .7z" />
        <path fill="#313931" d="M299.2 253.8l.7.7-.7-.7z" />
        <path fill="#296300" d="M300 253.8l.6.7-.7-.7z" />
        <path fill="#185200" d="M302 253.8l1.4 1.4-1.4-1.3z" />
        <path fill="#297b00" d="M302.7 253.8l.7.7-.7-.7z" />
        <path fill="#103900" d="M307 253.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M311.2 253.8l.7.7-.7-.7z" />
        <path fill="#425242" d="M313.3 253.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M314 253.8l.7.7-.7-.7z" />
        <path fill="#214210" d="M314.7 253.8l.7.7-.7-.7z" />
        <path fill="#297b00" d="M315.4 253.8l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#296300" d="M318.2 253.8l.7.7-.7-.7z" />
        <path fill="#184a00" d="M319 253.8l.6.7-.7-.7z" />
        <path fill="#425242" d="M319.6 253.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M320.6 254.3l.2.5-.2-.5z" />
        <path fill="#8c8c8c" d="M195.1 254.5l.7.7-.7-.7z" />
        <path fill="#428c00" d="M195.8 254.5l.7.7-.7-.7z" />
        <path fill="#294200" d="M196.5 254.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M197.2 254.5l.7.7-.7-.7z" />
        <path fill="#397b00" d="M198 254.5l.6.7-.7-.7z" />
        <path fill="#295200" d="M200.7 254.5l.7.7-.7-.7z" />
        <path fill="#397b00" d="M201.7 255l.2.4-.2-.4z" />
        <path fill="#315221" d="M202.8 254.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M205 254.5l.7.7-.7-.7z" />
        <path fill="#294200" d="M205.7 254.5l.7.7-.7-.7z" />
        <path fill="#295200" d="M207.8 254.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M210.6 254.5l.7.7-.7-.7z" />
        <path fill="#294200" d="M212.7 254.5l.7.7-.7-.7z" />
        <path fill="#295200" d="M214.8 254.5l-.7 1.4.7-1.4z" />
        <path fill="#9c9494" d="M215.5 254.5l-.7 1.4.7-1.4z" />
        <path fill="#941808" d="M247.2 254.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M249.3 254.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M250.7 254.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M251.9 254.8l.4.2-.4-.3z" />
        <path fill="#ada5a5" d="M252.8 254.5l.7.7-.7-.7m2.6.2l.4.3-.4-.3z" />
        <path fill="#8c8c8c" d="M257 254.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M257.7 254.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M262 254.5l-2.9.7v.7l3.5-.7-.7-.7z" />
        <path fill="#7b1008" d="M262.6 254.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M293.6 254.5l.7.7-.7-.7z" />
        <path fill="#296300" d="M294.3 254.5l.7.7-.7-.7z" />
        <path fill="#001000" d="M295 254.5l.7.7-.7-.7z" />
        <path fill="#185200" d="M297.8 254.5l.7.7-.7-.7z" />
        <path fill="#319400" d="M298.5 254.5l2.8 11.4h.7c0-4.1-.5-8.2-3.5-11.4z" />
        <path fill="#184a00" d="M299.2 254.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M300 254.5l.6.7-.7-.7z" />
        <path fill="#297b00" d="M302 254.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M304.9 254.5l.7.7-.8-.7z" />
        <path fill="#184a00" d="M307 254.5l.7.7-.7-.7m2 0l.8.7-.7-.7z" />
        <path fill="#103900" d="M309.8 254.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M310.5 254.5l.7.7-.7-.7z" />
        <path fill="#214210" d="M312.6 254.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M313.3 254.5l.7.7-.7-.7z" />
        <path fill="#214210" d="M314 254.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M316.1 254.5l.7.7-.7-.7z" />
        <path fill="#185200" d="M316.8 254.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M317.5 254.5l.7.7-.7-.7z" />
        <path fill="#295210" d="M318.2 254.5l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M319 254.5l.6.7-.7-.7z" />
        <path fill="#5a6b52" d="M319.6 254.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M195.1 255.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M195.8 255.2l2.1 1.3-2-1.3m2 0l.7.7-.7-.7z" />
        <path fill="#103900" d="M198.6 255.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M199.3 255.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M202.8 255.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M203.6 255.2l.7.7-.8-.7z" />
        <path fill="#8c8c8c" d="M205.7 255.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M206.4 255.2v.7h2l-2-.7z" />
        <path fill="#103900" d="M209.9 255.2l.7.7-.7-.7m2 0l.8.7-.7-.7z" />
        <path fill="#00215a" d="M227.5 255.2l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M247.2 255.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M249.3 255.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M250 255.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M250.7 255.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M251.6 255.6l.3.5-.3-.5z" />
        <path fill="#bdbdbd" d="M254.4 255.6l.3.5-.3-.5z" />
        <path fill="#dedede" d="M255.1 255.6l.3.5-.3-.5z" />
        <path fill="#7b7373" d="M255.8 255.6l.3.5-.3-.5z" />
        <path fill="#bdbdbd" d="M256.3 255.2l.7.7-.7-.7z" />
        <path fill="#dedede" d="M257 255.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M262 255.2l.6.7-.7-.7z" />
        <path fill="#210800" d="M262.6 255.2l.7.7-.7-.7z" />
        <path fill="#520808" d="M280.2 255.2l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M281 255.2v.7h6.3l-6.4-.7z" />
        <path fill="#520808" d="M287.3 255.2l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M291.5 255.2l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M293.6 255.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M294.3 255.2l.7.7-.7-.7z" />
        <path fill="#082108" d="M295 255.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M297.8 255.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M299.2 255.2l.7.7-.7-.7z" />
        <path fill="#001000" d="M300 255.2l.6.7-.7-.7z" />
        <path fill="#297b00" d="M300.6 255.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M303 255.6l.2.5-.2-.5z" />
        <path fill="#103900" d="M306.3 255.2l.7.7-.7-.7m2 0l1.5 1.3-1.4-1.3z" />
        <path fill="#185200" d="M309 255.2l.8.7-.7-.7z" />
        <path fill="#296300" d="M309.8 255.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M311.9 255.2l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M312.6 255.2l.7.7-.7-.7z" />
        <path fill="#314231" d="M313.3 255.2l-.7 1.3.7-1.3z" />
        <path fill="#297b00" d="M314 255.2l.7.7-.7-.7z" />
        <path fill="#214210" d="M315.4 255.2l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M316.1 255.2l-.7 1.3.7-1.3z" />
        <path fill="#5a5231" d="M195.8 255.9l.7.6-.7-.6z" />
        <path fill="#294200" d="M200.5 256l.5.3-.5-.2z" />
        <path fill="#8c8c8c" d="M203.6 255.9l.7.6-.8-.6z" />
        <path fill="#314231" d="M206.4 255.9l.7.6-.7-.6z" />
        <path fill="#294200" d="M207 255.9l.8.6-.7-.6z" />
        <path fill="#295200" d="M209.2 255.9l.7.6-.7-.6z" />
        <path fill="#397b00" d="M209.9 255.9l.7.6-.7-.6z" />
        <path fill="#103900" d="M211.3 255.9l.7.6-.7-.6z" />
        <path fill="#214210" d="M213.4 255.9l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M214.1 255.9l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M220.4 255.9l.7.6-.7-.6z" />
        <path fill="#bdbdbd" fillOpacity={0.3} d="M221.1 255.9v.6h6.4v10c3.8-6 .2-10.6-6.4-10.6z" />
        <path fill="#8c8c8c" d="M227.5 255.9l.7.6-.7-.6z" />
        <path fill="#420000" d="M247.9 255.9l.7.6-.7-.6z" />
        <path fill="#101810" d="M249.3 255.9l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M250.7 256.5v.7l3.5-.7h-3.5m7-.6l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M258.4 255.9l.7.6-.7-.6z" />
        <path fill="#dedede" d="M259.1 255.9l.7.6-.7-.6z" />
        <path fill="#292921" d="M262.6 255.9l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M263.4 255.9l.7.6-.8-.6z" />
        <path fill="#63636b" d="M280.2 255.9l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M281 255.9v.6h6.3l-6.4-.6z" />
        <path fill="#63636b" d="M287.3 255.9l.7.6-.7-.6z" />
        <path fill="#292921" d="M291.5 255.9l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M292.2 255.9l.7.6-.7-.6m1.6.4l.3.5-.3-.5z" />
        <path fill="#296300" d="M294.3 257.2l2.1-.7-2.1.7z" />
        <path fill="#185200" d="M297.8 255.9l1.4 1.3-1.4-1.3z" />
        <path fill="#297b00" d="M298.5 255.9l.7.6-.7-.6z" />
        <path fill="#296300" d="M300 255.9l.6.6-.7-.6z" />
        <path fill="#185200" d="M300.6 255.9l.7.6-.7-.6z" />
        <path fill="#184a00" d="M306.3 255.9l.7.6-.7-.6z" />
        <path fill="#319400" d="M307 255.9l.7.6-.7-.6z" />
        <path fill="#184a00" d="M307.7 255.9l.7.6-.7-.6z" />
        <path fill="#214210" d="M311.9 255.9l.7.6-.7-.6z" />
        <path fill="#297b00" d="M313.3 255.9l.7.6-.7-.6z" />
        <path fill="#296300" d="M314.7 255.9l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M195.8 256.5l.7.7-.7-.7z" />
        <path fill="#397b00" d="M197.2 256.5l.7.7-.7-.7z" />
        <path fill="#294200" d="M198 256.5l.6.7-.7-.7m4 .2l.5.3-.5-.2z" />
        <path fill="#5a6b52" d="M203.6 256.5l.7.7-.8-.7z" />
        <path fill="#9c9494" d="M206.4 256.5l.7.7-.7-.7z" />
        <path fill="#292100" d="M207 256.5l.8.7-.7-.7z" />
        <path fill="#294200" d="M209.2 256.5l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#397b00" d="M211.3 256.5l.7.7-.7-.7z" />
        <path fill="#314231" d="M212.7 256.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M213.4 256.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M220.4 256.5v5.4h.7l-.7-5.4z" />
        <path fill="#941808" d="M247.9 256.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M250 256.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M252 256.5l.8.7-.7-.7z" />
        <path fill="#efefef" d="M254.9 256.5l1.4 1.4-1.4-1.4z" />
        <path fill="#bdbdbd" d="M255.6 256.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M256.8 256.8l.4.2-.4-.2z" />
        <path fill="#dedede" d="M257.7 256.5l.7.7-.7-.7z" />
        <path fill="#efefef" d="M259.1 256.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M259.8 256.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M261 256.8l.5.2-.5-.2z" />
        <path fill="#9c9494" d="M262 256.5l.6.7-.7-.7z" />
        <path fill="#7b7373" d="M262.6 256.5l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M263.4 256.5l.7.7-.8-.7z" />
        <path fill="#8c8c8c" d="M280.2 256.5v8.7h.7l-.7-8.7m7 0v10h.8l-.7-10z" />
        <path fill="#6b735a" d="M291.5 256.5l.7.7-.7-.7z" />
        <path fill="#395231" d="M292.2 256.5l.7.7-.7-.7z" />
        <path fill="#319400" d="M295 256.5l3.5 12h.7l-4.2-12z" />
        <path fill="#103900" d="M295.7 256.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M297.8 256.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M300.9 257l.2.4-.2-.4z" />
        <path fill="#296300" d="M302.7 256.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M303.4 256.5l-.6 1.4.6-1.4z" />
        <path fill="#184a00" d="M305.6 256.5l.7.7-.7-.7z" />
        <path fill="#296300" d="M307.4 256.8l.5.2-.5-.2z" />
        <path fill="#185200" d="M308.4 256.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M311.2 256.5l.7.7-.7-.7z" />
        <path d="M311.9 256.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M312.6 256.5l.7.7-.7-.7z" />
        <path fill="#425242" d="M314.7 256.5l.7.7-.7-.7z" />
        <path fill="#efefef" d="M195.8 257.2l.7.7-.7-.7z" />
        <path fill="#315221" d="M196.5 257.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M198.6 257.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M199.6 257.6l.2.5-.2-.5m2.5-.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M202.8 257.2l1.4 1.3-1.3-1.3z" />
        <path fill="#213918" d="M203.6 257.2l.7.7-.8-.7z" />
        <path fill="#dedede" d="M206.4 257.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M207 257.2l.8.7-.7-.7z" />
        <path fill="#103900" d="M208.5 257.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M209.9 257.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M210.6 257.2l.7.7-.7-.7z" />
        <path fill="#213918" d="M212 257.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M212.7 257.2l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M247.9 257.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M250 257.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M252 257.2l.8.7-.7-.7z" />
        <path fill="#9c9494" d="M252.8 257.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M253.5 257.2v.7h2.1l-2.1-.7m2.8 0l-2 1.3v.7l2-2m2.1 0l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M259.1 257.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M259.8 257.2l.7.7-.7-.7m2.8 0l-.7 1.3.7-1.3z" />
        <path fill="#210800" d="M263.4 257.2l.7.7-.8-.7z" />
        <path fill="#8c8c8c" d="M291.5 257.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M292.4 257.6l.3.5-.3-.5z" />
        <path fill="#8c8c8c" d="M292.9 257.2l.7.7-.7-.7z" />
        <path fill="#185200" d="M294.3 257.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M295.7 257.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M296.4 257.2l-.7 1.3.7-1.3z" />
        <path fill="#103900" d="M298.5 257.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M301.3 257.2l-.7 1.3.7-1.3z" />
        <path fill="#184a00" d="M303.7 257.6l.2.5-.2-.5z" />
        <path fill="#103900" d="M305.6 257.2l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M308.4 257.2l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#296300" d="M311.9 257.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M314 257.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M314.7 257.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M317.4 260.4l-2.8 4.7c1.9-1.3 3.7-2.4 2.8-4.7z" />
        <path fill="#dedede" d="M321.7 257.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M196.5 257.9l.7.6-.7-.6z" />
        <path fill="#295200" d="M197.2 257.9l.7.6-.7-.6z" />
        <path fill="#294200" d="M200 257.9l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M204.3 257.9l.6.6-.7-.6z" />
        <path fill="#8c8c8c" d="M206.4 257.9l.7.6-.7-.6z" />
        <path fill="#295200" d="M207.8 257.9l.7.6-.7-.6z" />
        <path fill="#397b00" d="M208.5 257.9l.7.6-.7-.6z" />
        <path fill="#294200" d="M209.9 257.9l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#cecece" d="M212 257.9l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M214.6 258l.4.3-.4-.2z" />
        <path fill="#420000" d="M248.6 257.9l.7.6-.7-.6z" />
        <path fill="#101810" d="M250 257.9l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M251.4 257.9l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M252 257.9l.8.6-.7-.6z" />
        <path fill="#dedede" d="M252.8 257.9l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M257.7 257.9l.7.6-.7-.6z" />
        <path fill="#cecece" d="M258.4 257.9l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M262.6 257.9l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M264 257.9l.8.6-.8-.6z" />
        <path fill="#cecece" d="M291.5 257.9l.7.6-.7-.6z" />
        <path fill="#184a00" d="M292.9 257.9l-.7 1.3.7-1.3z" />
        <path fill="#dedede" d="M293.6 257.9l.7.6-.7-.6z" />
        <path fill="#184a00" d="M294.5 258.3l.3.5-.3-.5z" />
        <path fill="#185200" d="M296.4 257.9l.7.6-.7-.6m2.1 0l.7.6-.7-.6z" />
        <path fill="#297b00" d="M299.2 257.9l.7.6-.7-.6z" />
        <path fill="#296300" d="M301.3 257.9l.7.6-.7-.6z" />
        <path fill="#185200" d="M304.9 257.9l.7.6-.8-.6z" />
        <path fill="#296300" d="M305.6 257.9l.7.6-.7-.6z" />
        <path fill="#184a00" d="M306.3 257.9l.7.6-.7-.6z" />
        <path fill="#103900" d="M307.7 257.9l.7.6-.7-.6z" />
        <path fill="#185200" d="M311.2 257.9l.7.6-.7-.6z" />
        <path fill="#297b00" d="M313.3 257.9l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M314 257.9l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M320.3 257.9l.7.6-.7-.6z" />
        <path fill="#424242" d="M321 257.9l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M197.2 258.5l.7.7-.7-.7z" />
        <path fill="#294200" d="M200.7 258.5l1.4 1.4-1.4-1.4z" />
        <path fill="#397b00" d="M201.4 258.5l.7.7-.7-.7z" />
        <path fill="#315221" d="M204.3 258.5l.6.7-.7-.7z" />
        <path fill="#efefef" d="M205.4 258.8l.5.2-.5-.2z" />
        <path fill="#214210" d="M206.4 258.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M207.8 258.5l.7.7-.7-.7z" />
        <path fill="#295200" d="M209.2 258.5l.7.7-.7-.7z" />
        <path fill="#397b00" d="M209.9 258.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M211.3 258.5l.7.7-.7-.7z" />
        <path fill="#315221" d="M214.1 258.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M214.8 258.5l.7.7-.7-.7z" />
        <path fill="#00216b" d="M228.2 258.5l.7.7-.7-.7z" />
        <path fill="#941808" d="M248.6 258.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M250.7 258.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M253.5 258.5l.7.7-.7-.7z" />
        <path fill="#cecece" d="M256.3 258.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M257 258.5l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#52525a" d="M259.8 258.5l.7.7-.7-.7z" />
        <path fill="#313931" d="M260.5 258.5l.7.7-.7-.7z" />
        <path fill="#941808" d="M264 258.5l.8.7-.8-.7z" />
        <path fill="#319400" d="M292.9 258.5l5 16.1h.6c0-5.6-1.8-11.7-5.6-16z" />
        <path fill="#425242" d="M293.6 258.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M296.4 258.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M299.2 258.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M301.6 259l.2.4-.2-.4m3.2-.5l.7.7-.7-.7z" />
        <path fill="#319400" d="M305.6 258.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M306.3 258.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M307.7 258.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M310.5 258.5l.7.7-.7-.7z" />
        <path fill="#103910" d="M313.3 258.5l.7.7-.7-.7z" />
        <path fill="#efefef" d="M314 258.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M315.4 258.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M316.1 258.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M319 258.5l.6.7-.7-.7z" />
        <path fill="#314231" d="M319.6 258.5l-1.4 2.7 1.4-2.7z" />
        <path fill="#313931" d="M320.3 258.5l.7.7-.7-.7z" />
        <path fill="#efefef" d="M197.2 259.2l2.1 2-2-2z" />
        <path fill="#314231" d="M198 259.2l.6.7-.7-.7z" />
        <path fill="#397b00" d="M202.1 259.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M205 259.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M205.7 259.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M207 259.2l.8.7-.7-.7z" />
        <path fill="#295200" d="M207.8 259.2l.7.7-.7-.7z" />
        <path fill="#294200" d="M209.2 259.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M210.6 259.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M211.3 259.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M213.4 259.2l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M214.8 259.2l.7.7-.7-.7z" />
        <path fill="#101829" d="M228.2 259.2l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M248.6 259.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M250.7 259.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M251.6 259.7l.3.4-.3-.4z" />
        <path fill="#9c9494" d="M252 259.2l.8.7-.7-.7z" />
        <path fill="#7b7373" d="M252.8 259.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M253.5 259.2l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M257 259.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M257.7 259.2l.7.7-.7-.7z" />
        <path fill="#313931" d="M258.4 259.2l.7.7-.7-.7z" />
        <path fill="#210800" d="M263.4 259.2l.7.7-.8-.7z" />
        <path fill="#7b1008" d="M264 259.2l.8.7-.8-.7z" />
        <path fill="#10214a" d="M279.5 259.2l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M292.4 259.7l.3.4-.3-.4z" />
        <path fill="#296300" d="M293.6 259.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M294.5 259.7l.3.4-.3-.4z" />
        <path fill="#296300" d="M296.9 259.4l.5.3-.5-.3z" />
        <path fill="#103900" d="M299.2 259.2l.7.7-.7-.7z" />
        <path fill="#185200" d="M305.3 259.4l.5.3-.5-.3m1.7-.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M309.8 259.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M312.6 259.2l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M313.3 259.2l.7.7-.7-.7z" />
        <path fill="#dedede" d="M314 259.2l.7.7-.7-.7z" />
        <path fill="#425242" d="M314.7 259.2l.7.7-.7-.7z" />
        <path fill="#313931" d="M315.4 259.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M316.1 259.2l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#63636b" d="M318.2 259.2l.7.7-.7-.7z" />
        <path fill="#185200" d="M319 259.2l.6.7-.7-.7z" />
        <path fill="#ada5a5" d="M189.5 259.9l.7.7-.7-.7z" />
        <path fill="#efefef" d="M190.2 259.9l.7.7-.7-.7z" />
        <path fill="#314231" d="M198.6 259.9l.7.7-.7-.7z" />
        <path fill="#397b00" d="M199.3 259.9l1.4 1.3-1.4-1.3m4.3 0l.7.7-.8-.7m1.5 0l.7.7-.7-.7z" />
        <path fill="#214210" d="M205.7 259.9l.7.7-.7-.7z" />
        <path fill="#295200" d="M206.4 259.9l.7.7-.7-.7z" />
        <path fill="#292100" d="M207 259.9l.8.7-.7-.7z" />
        <path fill="#397b00" d="M208.5 259.9v1.3h1.4l-1.4-1.3z" />
        <path fill="#295200" d="M209.2 259.9l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M210.6 259.9l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M212.7 259.9l.7.7-.7-.7z" />
        <path fill="#294200" d="M214.8 259.9l.7.7-.7-.7z" />
        <path fill="#efefef" d="M215.5 259.9l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M228.2 259.9l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M228.9 259.9l.7.7-.7-.7z" />
        <path fill="#10214a" d="M229.6 259.9l.7.7-.7-.7z" />
        <path fill="#420000" d="M249.3 259.9l.7.7-.7-.7z" />
        <path fill="#101810" d="M250.7 259.9l.7.7-.7-.7z" />
        <path fill="#dedede" d="M252 259.9l.8.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M254.9 259.9l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M256 260.1l.5.2-.4-.2z" />
        <path fill="#313931" d="M257 259.9l.7.7-.7-.7z" />
        <path fill="#101810" d="M257.7 259.9l.7.7-.7-.7z" />
        <path fill="#310000" d="M261.2 259.9l.7.7-.7-.7z" />
        <path fill="#941808" d="M262 259.9l.6.7-.7-.7z" />
        <path fill="#00184a" d="M278.1 259.9l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M278.8 259.9l.7.7-.7-.7z" />
        <path fill="#efefef" d="M279.5 259.9l.7.7-.7-.7z" />
        <path fill="#297b00" d="M295 259.9l-.7 1.3.7-1.3z" />
        <path fill="#184a00" d="M297.1 259.9l.7.7-.7-.7z" />
        <path fill="#185200" d="M299.2 259.9l1.4 1.3-1.4-1.3z" />
        <path fill="#297b00" d="M300 259.9l.6.7-.7-.7z" />
        <path fill="#296300" d="M301.3 259.9l.7.7-.7-.7z" />
        <path fill="#297b00" d="M302 259.9l-.7 1.3.7-1.3z" />
        <path fill="#184a00" d="M304.4 260.3l.2.5-.2-.5z" />
        <path fill="#103900" d="M305.6 259.9l.7.7-.7-.7z" />
        <path fill="#319400" d="M306.3 259.9l.7.7-.7-.7z" />
        <path fill="#103900" d="M307 259.9l.7.7-.7-.7z" />
        <path fill="#296300" d="M309.5 260.1l.5.2-.5-.2z" />
        <path fill="#425242" d="M312.6 259.9l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M313.3 259.9l.7.7-.7-.7z" />
        <path fill="#184a00" d="M314.5 260.1l.4.2-.4-.2z" />
        <path fill="#cecece" d="M315.4 259.9l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M316.8 259.9l.7.7-.7-.7z" />
        <path fill="#214210" d="M317.5 259.9l.7.7-.7-.7z" />
        <path fill="#297b00" d="M318.2 259.9l.7.7-.7-.7z" />
        <path fill="#8c9c84" d="M189.5 260.6l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M190.2 260.6l.7.6-.7-.6z" />
        <path fill="#63636b" d="M199.3 260.6l.7.6-.7-.6z" />
        <path fill="#001000" d="M203.6 260.6l.7.6-.8-.6z" />
        <path fill="#295200" d="M204.3 260.6l.6.6-.7-.6z" />
        <path fill="#292100" d="M205.7 260.6l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M206.8 260.8l.5.2-.5-.2z" />
        <path fill="#311000" d="M207.8 260.6l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M210.6 260.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M212 260.6l.7.6-.7-.6z" />
        <path fill="#295200" d="M212.7 260.6l.7.6-.7-.6z" />
        <path
          fill="#428c00"
          d="M209.7 267.4h-.7c-.1-3.8-1.6-6.3-5.6-7.4 0 2 1.6 10 5 7.4h.6l-1.4 6c2.1-2.2 10.8-10 7-13.5-3.2-2.9-4.8 6-4.9 7.5z"
        />
        <path fill="#295200" d="M214.1 260.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M215.5 260.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M229.6 260.6l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M230.3 260.6l.7.6-.7-.6z" />
        <path fill="#31425a" d="M231 260.6l.7.6-.7-.6z" />
        <path fill="#00216b" d="M231.7 260.6l.7.6-.7-.6z" />
        <path fill="#941808" d="M249.3 260.6l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M251.4 260.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M252.8 260.6l.7.6-.7-.6z" />
        <path fill="#63636b" d="M253.5 260.6l.7.6-.7-.6z" />
        <path fill="#310000" d="M259.8 260.6l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M260.5 260.6l.7.6-.7-.6z" />
        <path fill="#00216b" d="M276 260.6l.7.6-.7-.6z" />
        <path fill="#21315a" d="M276.7 260.6l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M277.4 260.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M278.1 260.6l.7.6-.7-.6m12 0l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M290.8 260.6l.7.6-.7-.6z" />
        <path fill="#cecece" d="M291.5 260.6l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M292.2 260.6l.7.6-.7-.6z" />
        <path fill="#184a00" d="M295 260.6l.7.6-.7-.6z" />
        <path fill="#103900" d="M297.1 260.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M297.8 260.6l-.7 1.3.7-1.3m1.4 0l.7.6-.7-.6z" />
        <path fill="#185200" d="M305.6 260.6l.7.6-.7-.6z" />
        <path fill="#103900" d="M309 260.6l.8.6-.7-.6z" />
        <path fill="#185200" d="M311.9 260.6l.7.6-.7-.6z" />
        <path fill="#102110" d="M312.6 260.6l.7.6-.7-.6z" />
        <path fill="#296300" d="M313.8 260.8l.4.2-.4-.2z" />
        <path fill="#8c8c8c" d="M314.7 260.6l.7.6-.7-.6z" />
        <path fill="#dedede" d="M315.4 260.6l.7.6-.7-.6z" />
        <path fill="#425242" d="M316.1 260.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M316.8 260.6l-2.1 3.3 3.5-3.3h-1.4z" />
        <path fill="#295200" d="M190.2 261.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M190.9 261.2l.7.7-.7-.7z" />
        <path fill="#dedede" d="M199.3 261.2l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M200 261.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M200.7 261.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M202.8 261.2v.7h2.2l-2.1-.7z" />
        <path fill="#294200" d="M205 261.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M205.7 261.2l.7.7-.7-.7z" />
        <path fill="#941808" d="M208 261.7l.2.4-.2-.4z" />
        <path fill="#292100" d="M208.5 261.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M209.9 261.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M210.6 261.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M211.3 261.2l.7.7-.7-.7z" />
        <path fill="#214210" d="M212 261.2l.7.7-.7-.7z" />
        <path fill="#294200" d="M213.6 261.7l.3.4-.3-.4z" />
        <path fill="#8c8c8c" d="M215.7 261.7l.3.4-.3-.4z" />
        <path fill="#dedede" d="M231.7 261.2l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M232.4 261.2l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M233.1 261.2l.7.7-.7-.7z" />
        <path fill="#21315a" d="M233.8 261.2l.7.7-.7-.7z" />
        <path fill="#00216b" d="M234.5 261.2l.7.7-.7-.7z" />
        <path fill="#002984" d="M235.2 261.2l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M249.3 261.2l.7.7-.7-.7z" />
        <path fill="#424242" d="M251.4 261.2l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M252 261.2l.8.7-.7-.7z" />
        <path fill="#101810" d="M252.8 261.2l.7.7-.7-.7z" />
        <path fill="#100808" d="M257.7 261.2l.7.7-.7-.7z" />
        <path fill="#310000" d="M258.4 261.2l.7.7-.7-.7z" />
        <path fill="#210800" d="M259.1 261.2l.7.7-.7-.7z" />
        <path fill="#002984" d="M272.5 261.2l.7.7-.7-.7z" />
        <path fill="#00216b" d="M273.2 261.2l.7.7-.7-.7z" />
        <path fill="#10295a" d="M273.9 261.2l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M274.6 261.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M275.3 261.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M276 261.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M290 261.2l.8.7-.7-.7z" />
        <path fill="#297b00" d="M290.8 261.2l1.4 1.4-1.4-1.4z" />
        <path fill="#103910" d="M291.5 261.2l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M292.2 261.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M295 261.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M295.7 261.2l-.7 1.4.7-1.4z" />
        <path fill="#185200" d="M297.8 261.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M300 261.2l.6.7-.7-.7z" />
        <path fill="#184a00" d="M304.9 261.2l.7.7-.8-.7z" />
        <path fill="#103900" d="M308.4 261.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M311.2 261.2v.7h2.8v-.7h-2.8z" />
        <path fill="#425242" d="M314 261.2l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M314.7 261.2l.7.7-.7-.7z" />
        <path fill="#214210" d="M315.4 261.2l.7.7-.7-.7z" />
        <path fill="#52525a" d="M317.5 261.2l.7.7-.7-.7z" />
        <path fill="#428c00" d="M190.2 261.9l.7.7-.7-.7z" />
        <path fill="#397b00" d="M191.1 262.3l.3.5-.3-.5z" />
        <path fill="#314231" d="M191.6 261.9l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M192.3 261.9l.7.7-.7-.7z" />
        <path fill="#dedede" d="M195.1 261.9l.7.7-.7-.7z" />
        <path fill="#efefef" d="M198.6 261.9l.7.7-.7-.7z" />
        <path fill="#101810" d="M199.3 261.9l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M200.7 261.9l.7.7-.7-.7z" />
        <path fill="#315221" d="M201.4 261.9l.7.7-.7-.7z" />
        <path fill="#295200" d="M202.8 261.9l.7.7-.7-.7z" />
        <path fill="#292100" d="M205.7 261.9l.7.7-.7-.7z" />
        <path fill="#941808" d="M206.4 261.9l.7.7-.7-.7z" />
        <path fill="#103900" d="M208.5 261.9l.7.7-.7-.7z" />
        <path fill="#5a2908" d="M209.2 261.9l-.7 1.3.7-1.3z" />
        <path fill="#7b1008" d="M209.9 261.9l.7.7-.7-.7z" />
        <path fill="#5a3131" d="M210.6 261.9l.7.7-.7-.7z" />
        <path fill="#314231" d="M211.3 261.9l.7.7-.7-.7z" />
        <path fill="#cecece" d="M219.7 261.9l.7.7-.7-.7z" />
        <path fill="#52525a" d="M220.4 261.9l.7.7-.7-.7z" />
        <path fill="#dedede" d="M221.1 261.9l.7.7-.7-.7m13.4 0l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M235.2 261.9l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M236 261.9l.6.7-.7-.7z" />
        <path fill="#bdbdbd" d="M236.6 261.9l.7.7-.7-.7z" />
        <path fill="#420000" d="M250 261.9l.7.7-.7-.7z" />
        <path fill="#100808" d="M256.3 261.9l.7.7-.7-.7z" />
        <path fill="#7b0008" d="M257 261.9l.7.7-.7-.7z" />
        <path
          fill="#de2110"
          d="M254.2 262.6v.6h2.1c-5.4 8.4-1.5 19.7-.7 28.8h.7c2-8.2 2.2-20 0-28.1l2.8 1.3.7-2.6-.7-.7-4.9.7z"
        />
        <path fill="#940008" d="M259.1 261.9l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M259.8 261.9l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M271 261.9l.8.7-.7-.7z" />
        <path fill="#9c9494" d="M271.8 261.9l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M272.5 261.9l.7.7-.7-.7z" />
        <path fill="#dedede" d="M273.2 261.9l.7.7-.7-.7z" />
        <path fill="#cecece" d="M289.4 261.9l.7.7-.7-.7z" />
        <path fill="#185200" d="M290 261.9l.8.7-.7-.7z" />
        <path fill="#313931" d="M292.2 261.9l.7.7-.7-.7z" />
        <path fill="#297b00" d="M292.9 261.9l.7.7-.7-.7z" />
        <path fill="#184a00" d="M295.7 261.9l.7.7-.7-.7z" />
        <path fill="#103900" d="M297.8 261.9l.7.7-.7-.7z" />
        <path fill="#184a00" d="M300 261.9l.6.7-.7-.7z" />
        <path fill="#297b00" d="M300.6 261.9l-.7 1.3.7-1.3z" />
        <path fill="#103900" d="M304.9 261.9l.7.7-.8-.7z" />
        <path fill="#185200" d="M307.7 261.9l.7.7-.7-.7z" />
        <path fill="#184a00" d="M311.2 261.9l.7.7-.7-.7z" />
        <path fill="#319400" d="M312.6 261.9l-.7 1.3.7-1.3z" />
        <path fill="#082108" d="M313.5 262.3l.3.5-.3-.5z" />
        <path fill="#52525a" d="M314 261.9l.7.7-.7-.7z" />
        <path fill="#296300" d="M314.7 261.9l.7.7-.7-.7z" />
        <path fill="#63636b" d="M316.8 261.9l-2.1 2.7 2.1-2.7z" />
        <path fill="#295200" d="M190.2 262.6l.7.6-.7-.6z" />
        <path fill="#428c00" d="M191.6 262.6l1.4 4h.7l.7-2.7-2.8-1.3z" />
        <path fill="#295200" d="M192.3 262.6l.7.6-.7-.6z" />
        <path fill="#63636b" d="M193 262.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M193.7 262.6l.7.6-.7-.6z" />
        <path fill="#101810" d="M195.1 262.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M195.8 262.6l.7.6-.7-.6z" />
        <path fill="#425242" d="M198.6 262.6l.7.6-.7-.6z" />
        <path fill="#294200" d="M199.3 262.6l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M202.1 262.6l.7.6-.7-.6z" />
        <path fill="#001000" d="M202.8 262.6l.7.6-.7-.6z" />
        <path fill="#294200" d="M206.4 262.6l.7.6-.7-.6z" />
        <path fill="#4a1000" d="M207 262.6l.8.6-.7-.6z" />
        <path fill="#294200" d="M207.8 262.6l.7.6-.7-.6z" />
        <path fill="#631808" d="M210.6 262.6l.7.6-.7-.6z" />
        <path fill="#397b00" d="M213.2 262.8l.4.2-.4-.2z" />
        <path fill="#6b735a" d="M215.5 262.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M217 262.6l.6.6-.7-.6z" />
        <path fill="#8c8c8c" d="M217.6 262.6l.7.6-.7-.6z" />
        <path fill="#526b42" d="M218.3 262.6l.7.6-.7-.6z" />
        <path fill="#396b10" d="M219 262.6l.7.6-.7-.6z" />
        <path fill="#295200" d="M219.7 262.6l.7.6-.7-.6z" />
        <path fill="#213918" d="M220.4 262.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M221.1 262.6l.7.6-.7-.6z" />
        <path fill="#941808" d="M250 262.6l.7.6-.7-.6z" />
        <path fill="#520808" d="M252.8 262.6l-.7 1.3.7-1.3z" />
        <path fill="#ad0008" d="M253.5 262.6l.7.6-.7-.6z" />
        <path fill="#520808" d="M259.8 262.6l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M289.4 262.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M290 262.6l.8.6-.7-.6z" />
        <path fill="#184a00" d="M292.2 262.6l.7.6-.7-.6z" />
        <path fill="#296300" d="M292.9 262.6l.7.6-.7-.6z" />
        <path fill="#103900" d="M295.7 262.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M296.4 262.6l-.7 1.3.7-1.3z" />
        <path fill="#185200" d="M297.8 262.6l1.4 1.3-1.4-1.3z" />
        <path fill="#297b00" d="M298.5 262.6l.7.6-.7-.6z" />
        <path fill="#185200" d="M300.6 262.6l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#297b00" d="M302.7 262.6l.7.6-.7-.6m1.4 0l1.4 1.3-1.3-1.3z" />
        <path fill="#185200" d="M304.9 262.6l.7.6-.8-.6z" />
        <path fill="#297b00" d="M307 262.6l.7.6-.7-.6z" />
        <path fill="#184a00" d="M307.7 262.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M310.5 262.6l1.4 1.3-1.4-1.3zm3.5 0l.7.6-.7-.6z" />
        <path fill="#dedede" d="M317.5 262.6l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M318.2 262.6l.7.6-.7-.6z" />
        <path fill="#425242" d="M319 262.6l.6.6-.7-.6z" />
        <path fill="#ada5a5" d="M319.6 262.6l.7.6-.7-.6z" />
        <path fill="#8c9c84" d="M189.5 263.2l.7.7-.7-.7z" />
        <path fill="#428c00" d="M190.2 263.2l2 3.4-2-3.4z" />
        <path fill="#103900" d="M190.9 263.2l.7.7-.7-.7z" />
        <path fill="#314231" d="M193.7 263.2l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M194.4 263.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M195.1 263.2l.7.7-.7-.7z" />
        <path fill="#314231" d="M195.8 263.2l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M198 263.2l.6.7-.7-.7z" />
        <path fill="#397b00" d="M199 263.4l.6.3-.5-.2z" />
        <path fill="#dedede" d="M200 263.2l.7.7-.7-.7z" />
        <path fill="#7b8c73" d="M202.8 263.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M207 263.2l1.5 1.4v-1.4H207z" />
        <path fill="#4a1000" d="M208.5 263.2l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M209.9 263.2l.7.7-.7-.7z" />
        <path fill="#526b42" d="M215.5 263.2l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M216.2 263.2l.7.7-.7-.7z" />
        <path fill="#214210" d="M217 263.2l.6.7-.7-.7z" />
        <path fill="#428c00" d="M214.8 268.6l1.4-.7v.7l-5 4c4.5-1.7 6.7-4 8.5-8l-2 1.3 1.3-2.7-4.2 5.4z" />
        <path fill="#294200" d="M219 263.2l-.7 1.4.7-1.4z" />
        <path fill="#397b00" d="M219.7 263.2l-.7 1.4.7-1.4z" />
        <path fill="#424242" d="M220.4 263.2l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M242.2 263.2l.7.7-.7-.7z" />
        <path fill="#845a52" d="M243 263.2l.6.7-.7-.7z" />
        <path fill="#734a42" d="M243.7 263.2l.7.7-.8-.7z" />
        <path fill="#842118" d="M244.3 263.2l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M245 263.2l.8.7-.7-.7z" />
        <path fill="#b51010" d="M245.8 263.2l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M250 263.2l.7.7-.7-.7z" />
        <path fill="#310000" d="M251.4 263.2l.7.7-.7-.7z" />
        <path fill="#310010" d="M252.8 263.2l.7.7-.7-.7z" />
        <path fill="#180821" d="M253.5 263.2l.7.7-.7-.7z" />
        <path fill="#310010" d="M254.2 263.2l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M254.9 263.2l.7.7-.7-.7z" />
        <path fill="#b51010" d="M255.6 263.2l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M259.8 263.2l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M262 263.2l.6.7-.7-.7z" />
        <path fill="#7b1008" d="M262.6 263.2l.7.7-.7-.7z" />
        <path fill="#631808" d="M263.4 263.2l.7.7-.8-.7z" />
        <path fill="#8c4a4a" d="M264 263.2l.8.7-.8-.7z" />
        <path fill="#9c9494" d="M265.5 263.2l.7.7-.7-.7z" />
        <path fill="#214210" d="M289.4 263.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M292.2 263.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M292.9 263.2l.7.7-.7-.7z" />
        <path fill="#185200" d="M296.4 263.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M297.8 263.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M300.6 263.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M304.4 263.7l.2.4-.2-.4m2.6-.5l.7.7-.7-.7z" />
        <path fill="#184a00" d="M312.6 263.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M316.8 263.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M317.5 263.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M319.6 263.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M320.3 263.2l1.4 1.4-1.4-1.4z" />
        <path fill="#8c8c8c" d="M189.7 264.3l.2.5-.2-.5z" />
        <path fill="#295200" d="M190.9 263.9l.7.7-.7-.7z" />
        <path fill="#397b00" d="M191.6 263.9l.7.7-.7-.7z" />
        <path fill="#102110" d="M194.4 263.9l.7.7-.7-.7z" />
        <path fill="#397b00" d="M195.1 263.9v.7l2.1.6-2-1.3z" />
        <path fill="#63636b" d="M196.5 263.9l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M198 263.9l.6.7-.7-.7z" />
        <path
          fill="#428c00"
          d="M198.6 263.9v3.3h-.7l-.7-2h-.7l.7 6.7h-.7l-.7-7.3h-.7l-.7 5.3h-.7l-3.5-2.7 2 4h-.6l-2.8-3.3c2.3 8 5.7 6.8 11.3 11.3 2.1 1.6 3.5 5.2 4.9 7.4l-2.9-2 1.4 2-3.5-2 4.3 4 .7-2h.7c-1.8 3.2-5 3.6-8.5 4v-.6l1.4-1.3 3.5.6c-2.5-2.5-5.6-3-9.1-2l4.2 3.4v.6L193 296l8.4-1.3-.7 1.3h.7l4.3-2-8.5 4v.7c7.1-.9 8-3.2 12-8-.6 2.1-.6 3.3 1.4 4.7l-1.1-8 9.5-10.8-3.5 2.7 2.8-4c-4 .8-5.7 3.6-5.6 7.3l-4.2 4h-.7c1.5-4.1 5.6-6.5 4.2-11.3-3.7 2.6-4.7 5.8-5 10l-2.7-13.4.7 2.7h-.7v-1.3h-.7l.7 9.3h-.7c-2.2-5-.3-15.4-5-18.7z"
        />
        <path fill="#9c9494" d="M200 263.9l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M203 264.3l.3.5-.2-.5z" />
        <path fill="#397b00" d="M205 263.9l1.4 1.3-1.4-1.3z" />
        <path fill="#5a1008" d="M209.2 263.9l.7.7-.7-.7z" />
        <path fill="#311000" d="M209.9 263.9l.7.7-.7-.7z" />
        <path fill="#213918" d="M215.5 263.9l.7.7-.7-.7z" />
        <path fill="#295200" d="M216.2 263.9l.7.7-.7-.7z" />
        <path fill="#315221" d="M219.7 263.9l.7.7-.7-.7z" />
        <path fill="#efefef" d="M245 263.9l.8.7-.7-.7z" />
        <path fill="#9c9494" d="M245.8 263.9l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M246.5 263.9l.7.7-.7-.7z" />
        <path fill="#6b2908" d="M247.2 263.9l.7.7-.7-.7z" />
        <path fill="#941808" d="M247.9 263.9l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M250.7 263.9l.7.7-.7-.7z" />
        <path fill="#000818" d="M251.4 263.9l.7.7-.7-.7z" />
        <path fill="#00216b" d="M252 263.9l-.6 1.3.7-1.3z" />
        <path fill="#003994" d="M250 287.3h.7a35.9 35.9 0 013.5-23.4c-8.3 4-7.8 16.8-4.2 23.4z" />
        <path fill="#52525a" d="M254.2 263.9l.7.7-.7-.7z" />
        <path fill="#9c2118" d="M254.9 263.9l.7.7-.7-.7z" />
        <path fill="#ce0008" d="M257.7 263.9l.7.7-.7-.7z" />
        <path fill="#bd0008" d="M259.1 263.9l.7.7-.7-.7z" />
        <path fill="#520808" d="M259.8 263.9l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M260.5 263.9l.7.7-.7-.7z" />
        <path fill="#7b5252" d="M261.2 263.9l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M262 263.9l.6.7-.7-.7z" />
        <path fill="#dedede" d="M262.6 263.9l.7.7-.7-.7z" />
        <path fill="#efefef" d="M279.5 263.9l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M288.7 263.9l.7.7-.7-.7z" />
        <path fill="#296300" d="M289.4 263.9l.7.7-.7-.7z" />
        <path fill="#314231" d="M290 263.9l.8.7-.7-.7z" />
        <path fill="#185200" d="M290.8 263.9l.7.7-.7-.7z" />
        <path fill="#184a00" d="M292.9 263.9l.7.7-.7-.7z" />
        <path fill="#297b00" d="M293.6 263.9l-.7 1.3.7-1.3z" />
        <path fill="#103900" d="M296.4 263.9l.7.7-.7-.7z" />
        <path fill="#184a00" d="M298.8 264.3l.2.5-.2-.5z" />
        <path fill="#185200" d="M300.6 263.9l.7.7-.7-.7z" />
        <path fill="#184a00" d="M306.5 264.3l.2.5-.2-.5z" />
        <path fill="#297b00" d="M307 263.9l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#296300" d="M314 263.9l.7.7-.7-.7z" />
        <path fill="#dedede" d="M315.4 263.9l.7.7-.7-.7z" />
        <path fill="#425242" d="M316.1 263.9l.7.7-.7-.7z" />
        <path fill="#297b00" d="M316.8 263.9l.7.7-.7-.7m3.5 0l.7.7-.7-.7z" />
        <path fill="#294200" d="M191.6 264.6l.7.6-.7-.6m2.8 0l.7.6-.7-.6z" />
        <path fill="#295200" d="M196 265l.3.5-.3-.5z" />
        <path fill="#ada5a5" d="M197.2 264.6l.7.6-.7-.6z" />
        <path fill="#526b42" d="M198 264.6l.6.6-.7-.6z" />
        <path fill="#5a6b52" d="M200 264.6l.7.6-.7-.6z" />
        <path fill="#294200" d="M205 264.6l.7.6-.7-.6m3.5 0l.7.6-.7-.6z" />
        <path fill="#397b00" d="M209.2 264.6l.7.6-.7-.6z" />
        <path fill="#295200" d="M209.9 264.6l.7.6-.7-.6z" />
        <path fill="#294200" d="M215.7 265l.3.5-.3-.5z" />
        <path fill="#397b00" d="M217.6 264.6l.7.6-.7-.6z" />
        <path fill="#295200" d="M218.3 264.6l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M219.7 264.6l.7.6-.7-.6z" />
        <path fill="#313931" d="M228.2 264.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M247.9 264.6l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M248.6 264.6l.7.6-.7-.6z" />
        <path fill="#733939" d="M249.3 264.6l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M250 264.6l.7.6-.7-.6z" />
        <path fill="#631808" d="M250.7 264.6l.7.6-.7-.6z" />
        <path fill="#00184a" d="M253.5 264.6l.7.6-.7-.6z" />
        <path fill="#6b5252" d="M254.2 264.6l.7.6-.7-.6z" />
        <path fill="#310000" d="M257.7 264.6l.7.6-.7-.6z" />
        <path fill="#5a1010" d="M259.1 264.6l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M259.8 264.6l.7.6-.7-.6z" />
        <path fill="#63636b" d="M279.5 264.6l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M288.7 264.6l.7.6-.7-.6z" />
        <path fill="#214210" d="M289.4 264.6l.7.6-.7-.6z" />
        <path fill="#dedede" d="M290 264.6l.8.6-.7-.6z" />
        <path fill="#425242" d="M290.8 264.6l.7.6-.7-.6z" />
        <path fill="#103900" d="M293.6 264.6l.7.6-.7-.6z" />
        <path fill="#185200" d="M296.4 264.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M297.1 264.6l-.7 1.3.7-1.3z" />
        <path fill="#184a00" d="M300.9 265l.2.5-.2-.5z" />
        <path fill="#297b00" d="M303.4 264.6l1.5 1.3-1.5-1.3z" />
        <path fill="#185200" d="M304.1 264.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M305.6 264.6l1.4 1.3-1.4-1.3z" />
        <path fill="#103900" d="M310.5 264.6l.7.6-.7-.6z" />
        <path fill="#185200" d="M313.3 264.6l-2.8 3.3 2.8-3.3z" />
        <path fill="#7b7373" d="M314 264.6l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M314.7 264.6l.7.6-.7-.6z" />
        <path fill="#214210" d="M315.4 264.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M316.1 264.6l.7.6-.7-.6z" />
        <path fill="#184a00" d="M317.5 264.6l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M318.2 264.6l.7.6-.7-.6z" />
        <path fill="#395231" d="M319 264.6l.6.6-.7-.6z" />
        <path fill="#296300" d="M319.6 264.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M321.3 265l.2.5-.2-.5z" />
        <path fill="#8c8c8c" d="M321.7 264.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M189.7 265.7l.2.4-.2-.4z" />
        <path fill="#397b00" d="M190.2 265.2l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#295200" d="M192.3 265.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M194.2 265.5l.4.2-.4-.2z" />
        <path fill="#213918" d="M197.2 265.2l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M198 265.2l.6.7-.7-.7z" />
        <path fill="#295200" d="M200 265.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M200.7 265.2l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M202.8 265.2l.7.7-.7-.7z" />
        <path fill="#397b00" d="M203.6 265.2l.7.7-.8-.7z" />
        <path fill="#103900" d="M205.7 265.2l.7.7-.7-.7z" />
        <path fill="#001000" d="M209.2 265.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M212.7 265.2l-.7 1.4.7-1.4z" />
        <path fill="#103900" d="M217.6 265.2l.7.7-.7-.7z" />
        <path fill="#214210" d="M219 265.2l.7.7-.7-.7z" />
        <path fill="#efefef" d="M219.7 265.2l.7.7-.7-.7z" />
        <path fill="#b51010" d="M228.2 265.2l.7.7-.7-.7z" />
        <path fill="#733939" d="M228.9 265.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M229.6 265.2l.7.7-.7-.7m20.4 0l.7.7-.7-.7z" />
        <path fill="#001039" d="M250.7 265.2l.7.7-.7-.7z" />
        <path fill="#002984" d="M252.8 265.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M253.5 265.2l.7.7-.7-.7z" />
        <path fill="#842118" d="M254.2 265.2l.7.7-.7-.7z" />
        <path d="M257.7 265.2l.7.7-.7-.7z" />
        <path fill="#ad0008" d="M258.4 265.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M259.1 265.2l.7.7-.7-.7z" />
        <path fill="#debdb5" d="M278.1 265.2l.7.7-.7-.7z" />
        <path fill="#8c4a4a" d="M278.8 265.2l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M279.5 265.2l.7.7-.7-.7z" />
        <path fill="#946b63" d="M280.5 265.7l.2.4-.2-.4z" />
        <path fill="#001000" d="M288.7 265.2l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M289.4 265.2l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#296300" d="M291.5 265.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M293.6 265.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M294.3 265.2l-.7 1.4.7-1.4z" />
        <path fill="#184a00" d="M297.1 265.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M298.5 265.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M299.2 265.2l-.7 1.4.7-1.4z" />
        <path fill="#103900" d="M303.7 265.7l.2.4-.2-.4m1.9-.5l.7.7-.7-.7z" />
        <path d="M309.8 265.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M310.5 265.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M313.3 265.2l.7.7-.7-.7z" />
        <path fill="#63636b" d="M314 265.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M314.7 265.2l.7.7-.7-.7z" />
        <path fill="#103900" d="M316.8 265.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M317.5 265.2l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M319.6 265.2l.7.7-.7-.7z" />
        <path fill="#294221" d="M320.3 265.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M321.7 265.2l.7.7-.7-.7z" />
        <path fill="#cecece" d="M322.4 265.2l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M186.7 265.9l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M187.8 266.1l.5.2-.5-.2z" />
        <path fill="#9c9494" d="M188.8 265.9l.7.7-.7-.7z" />
        <path fill="#294200" d="M190.2 265.9l1.4 1.3-1.4-1.3z" />
        <path fill="#103900" d="M192.3 265.9l.7.7-.7-.7z" />
        <path fill="#294200" d="M193.7 265.9l-.7 2 .7-2m2.1 0v2h.7l-.7-2z" />
        <path fill="#292100" d="M198 265.9l.6.7-.7-.7z" />
        <path fill="#9c9494" d="M200.7 265.9l.7.7-.7-.7z" />
        <path fill="#294200" d="M203.6 265.9l.7.7-.8-.7m2.9 0l.7.7-.7-.7z" />
        <path fill="#103900" d="M209.2 265.9l.7.7-.7-.7z" />
        <path fill="#397b00" d="M212.7 265.9l.7.7-.7-.7m2.6.2l.4.2-.4-.2z" />
        <path fill="#103900" d="M217 265.9l.6.7-.7-.7z" />
        <path fill="#7b7373" d="M219 265.9l.7.7-.7-.7z" />
        <path
          fill="#de2110"
          d="M228.9 265.9v10.7h-.7l-.7-9.4H221v19.4l2.9-1.3 1.4 4.7 3.5-2 .7 7.4 6.3-2c3 2 4.9 2 6.3-1.4h1.4l4.3 4-.7-12.7-12.7-.7v-.6l12 .6v-2c-9-.2-9.9-5.5-9.9-12.7l-7.7-2z"
        />
        <path fill="#b51010" d="M229.6 265.9l.7.7-.7-.7z" />
        <path fill="#7b5252" d="M230.3 265.9l.7.7-.7-.7z" />
        <path fill="#cecece" d="M231 265.9l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M250 265.9l.7.7-.7-.7z" />
        <path fill="#002984" d="M250.7 265.9l.7.7-.7-.7z" />
        <path fill="#10214a" d="M252.8 265.9l.7.7-.7-.7z" />
        <path fill="#c6b5b5" d="M253.5 265.9l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M254.2 265.9l.7.7-.7-.7z" />
        <path fill="#6b0808" d="M257 265.9l.7.7-.7-.7z" />
        <path fill="#100808" d="M257.7 265.9l.7.7-.7-.7z" />
        <path fill="#5a3131" d="M258.4 265.9l.7.7-.7-.7z" />
        <path fill="#dedede" d="M276.7 265.9l.7.7-.7-.7z" />
        <path fill="#a56363" d="M277.4 265.9l.7.7-.7-.7z" />
        <path fill="#b51010" d="M278.1 265.9l.7.7-.7-.7z" />
        <path
          fill="#de2110"
          d="M271.8 268c0 6.7-.7 12.2-9.1 12.6 1.8 5.1 11 1.9 14-.8 4.1-3.7 3.5-9 3.5-13.9l-8.4 2z"
        />
        <path fill="#bdbdbd" d="M288 265.9l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M288.7 265.9l.7.7-.7-.7z" />
        <path fill="#315221" d="M291.5 265.9l.7.7-.7-.7z" />
        <path fill="#103900" d="M294.3 265.9l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M299.2 265.9l.7.7-.7-.7z" />
        <path fill="#296300" d="M304.9 265.9l.7.7-.8-.7z" />
        <path fill="#185200" d="M305.6 265.9l.7.7-.7-.7z" />
        <path fill="#297b00" d="M304.1 272l6.4-6c-3.5.8-5 3-6.4 6z" />
        <path fill="#103900" d="M309 265.9l.8.7-.7-.7z" />
        <path fill="#7b7373" d="M312.6 265.9l.7.7-.7-.7z" />
        <path fill="#294221" d="M313.3 265.9l.7.7-.7-.7z" />
        <path fill="#297b00" d="M314 265.9l.7.7-.7-.7z" />
        <path fill="#185200" d="M316.1 265.9l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M316.8 265.9l.7.7-.7-.7z" />
        <path fill="#efefef" d="M320.3 265.9l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M321 265.9l.7.7-.7-.7z" />
        <path fill="#185200" d="M321.7 265.9l.7.7-.7-.7z" />
        <path fill="#294221" d="M322.4 265.9l.7.7-.7-.7z" />
        <path fill="#efefef" d="M323.1 265.9l.7.7-.7-.7m-136.4.7l.7.6-.7-.6z" />
        <path fill="#293129" d="M187.4 266.6l.7.6-.7-.6z" />
        <path fill="#428c00" d="M188.5 266.8l.5.2-.5-.2z" />
        <path fill="#397b00" d="M189.7 267l.2.5-.2-.5z" />
        <path fill="#295200" d="M190.2 266.6l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#397b00" d="M192.3 266.6l.7.6-.7-.6z" />
        <path fill="#294200" d="M198 266.6l.6.6-.7-.6z" />
        <path fill="#425242" d="M200.7 266.6l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M203.6 266.6l.7.6-.8-.6z" />
        <path fill="#295200" d="M206.4 266.6l.7.6-.7-.6z" />
        <path fill="#294200" d="M209.2 266.6v2h.7l-.7-2m3 .4l.3.5-.3-.5m2.6-.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M216.7 266.8l.5.2-.5-.2z" />
        <path fill="#295200" d="M218.3 266.6l.7.6-.7-.6z" />
        <path fill="#dedede" d="M219 266.6l.7.6-.7-.6z" />
        <path fill="#52525a" d="M220.4 266.6l.7.6-.7-.6z" />
        <path fill="#5a3131" d="M227.5 266.6l.7.6-.7-.6z" />
        <path fill="#b51010" d="M231 266.6l.7.6-.7-.6z" />
        <path fill="#842118" d="M231.7 266.6l.7.6-.7-.6z" />
        <path fill="#8c6363" d="M232.4 266.6l.7.6-.7-.6z" />
        <path fill="#cecece" d="M233.1 266.6l.7.6-.7-.6z" />
        <path fill="#dedede" d="M249.3 266.6l.7.6-.7-.6z" />
        <path fill="#00184a" d="M250 266.6l.7.6-.7-.6z" />
        <path fill="#002984" d="M252 266.6l.8.6-.7-.6z" />
        <path fill="#8c8c8c" d="M252.8 266.6l.7.6-.7-.6z" />
        <path fill="#8c6363" d="M253.5 266.6l.7.6-.7-.6z" />
        <path fill="#941808" d="M257 266.6l.7.6-.7-.6z" />
        <path fill="#4a2129" d="M257.7 266.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M258.4 266.6l.7.6-.7-.6z" />
        <path fill="#d6a5a5" d="M274.6 266.6l.7.6-.7-.6z" />
        <path fill="#946b63" d="M275.3 266.6l.7.6-.7-.6z" />
        <path fill="#a52921" d="M276 266.6l.7.6-.7-.6z" />
        <path fill="#b51010" d="M276.7 266.6l.7.6-.7-.6z" />
        <path fill="#4a2129" d="M280.2 266.6l.7.6-.7-.6z" />
        <path fill="#42425a" d="M281 266.6v.6h6.3l-6.4-.6z" />
        <path fill="#212139" d="M287.3 266.6l.7.6-.7-.6z" />
        <path fill="#dedede" d="M290 266.6l2.2 1.3v-.7l-2.1-.6z" />
        <path fill="#8c8c8c" d="M291.5 266.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M292.2 266.6l.7.6-.7-.6z" />
        <path fill="#184a00" d="M294.3 266.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M295 266.6l-.7 1.3.7-1.3m2.1 0l.7.6-.7-.6z" />
        <path fill="#296300" d="M297.8 266.6l.7.6-.7-.6z" />
        <path fill="#103900" d="M299.2 266.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M300.6 266.6l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#296300" d="M303.4 266.6l.8.6-.8-.6z" />
        <path fill="#103900" d="M304.9 266.6l.7.6-.8-.6m3.6 0l.7.6-.7-.6z" />
        <path fill="#313931" d="M311.9 266.6l.7.6-.7-.6z" />
        <path fill="#184a00" d="M312.6 266.6l.7.6-.7-.6z" />
        <path fill="#296300" d="M315.4 266.6l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M316.1 266.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M321.7 266.6l.7.6-.7-.6z" />
        <path fill="#424242" d="M322.4 266.6l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M323.1 266.6l.7.6-.7-.6z" />
        <path fill="#cecece" d="M187.4 267.2l.7.7-.7-.7z" />
        <path fill="#294200" d="M188 267.2l.8.7-.7-.7z" />
        <path fill="#103900" d="M188.8 267.2l.7.7-.7-.7z" />
        <path fill="#292100" d="M192.3 267.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M193.7 267.2l.7.7-.7-.7m5.2.5l.2.4-.2-.4m1.8-.5l.7.7-.7-.7z" />
        <path fill="#dedede" d="M201.4 267.2l.7.7-.7-.7m2.1 0l.8.7-.8-.7z" />
        <path fill="#294200" d="M204.3 267.2l.6.7-.7-.7m2.9 0l.7.7-.7-.7z" />
        <path fill="#397b00" d="M214.1 267.2l.7.7-.7-.7z" />
        <path fill="#295200" d="M214.8 267.2l.7.7-.7-.7z" />
        <path fill="#294200" d="M216.2 267.2l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M218.3 267.2l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M233.1 267.2l.7.7-.7-.7z" />
        <path fill="#a51008" d="M233.8 267.2l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M234.5 267.2l.7.7-.7-.7z" />
        <path fill="#943131" d="M235.7 267.5l.5.2-.5-.2z" />
        <path fill="#c6b5b5" d="M236.6 267.2l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M249.3 267.2l.7.7-.7-.7z" />
        <path fill="#001039" d="M252 267.2l.8.7-.7-.7z" />
        <path fill="#efefef" d="M252.8 267.2l.7.7-.7-.7z" />
        <path fill="#943131" d="M253.5 267.2l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M256.3 267.2l1.4 6-1.4-6z" />
        <path fill="#6b0808" d="M257 267.2l1.4 1.4-1.4-1.4z" />
        <path fill="#733939" d="M257.7 267.2l.7.7-.7-.7z" />
        <path fill="#c69c94" d="M271 267.2l.8.7-.7-.7z" />
        <path fill="#ad3931" d="M272.3 267.5l.4.2-.4-.2z" />
        <path fill="#bd2110" d="M273.2 267.2l.7.7-.7-.7z" />
        <path fill="#b51010" d="M273.9 267.2l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M274.6 267.2l.7.7-.7-.7z" />
        <path fill="#00184a" d="M280.2 267.2v5.4h.7l-.7-5.4z" />
        <path
          fill="#003994"
          d="M281 267.2c0 12.5-7.3 17-19.8 16.1l-.7 12.7c2.7 0 6.4.2 7-2.7l2.9 2 2.8-2.6-.7 2.6 1.4-1.3h.7l4.2-.7-.7 2 2.1-2.6 1.4 1.3h2.1v-2l1.5.7.7-6c3.5-3 1.4-15 1.4-19.5h-6.4z"
        />
        <path fill="#424242" d="M290 267.2l.8.7-.7-.7z" />
        <path fill="#185200" d="M292.2 267.2l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M297.8 267.2v2h.7l-.7-2z" />
        <path fill="#185200" d="M299.2 267.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M301.3 267.2v3.4h.7l-.7-3.4z" />
        <path fill="#185200" d="M304.1 267.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M304.9 267.2l.7.7-.8-.7z" />
        <path fill="#082108" d="M307.7 267.2l.7.7-.7-.7z" />
        <path d="M311.2 267.2l.7.7-.7-.7z" />
        <path fill="#296300" d="M311.9 267.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M314.7 267.2l-1.4 2 1.4-2z" />
        <path fill="#63636b" d="M315.4 267.2l.7.7-.7-.7m-127.3.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M189.5 268l1.4 1.3-1.4-1.4z" />
        <path fill="#295200" d="M190.2 268l.7.6-.7-.7z" />
        <path fill="#103900" d="M193 268l.7.6-.7-.7z" />
        <path fill="#397b00" d="M193.7 268l.7.6-.7-.7m2.1 0v1.4h1.4v-1.4h-1.4z" />
        <path fill="#8c8c8c" d="M201.4 268l.7.6-.7-.7z" />
        <path fill="#7b7373" d="M204.3 268l.6.6-.7-.7z" />
        <path fill="#103900" d="M215.5 268l.7.6-.7-.7z" />
        <path fill="#396b10" d="M217.6 268l.7.6-.7-.7z" />
        <path fill="#dedede" d="M218.3 268l.7.6-.7-.7z" />
        <path fill="#8c7373" fillOpacity={0.5} d="M236.6 268v6h.7l-.7-6z" />
        <path fill="#efefef" d="M248.6 268l.7.6-.7-.7z" />
        <path fill="#10214a" d="M249.3 268l.7.6-.7-.7z" />
        <path fill="#636b7b" d="M252 268l.8.6-.7-.7z" />
        <path fill="#ad1810" d="M253.5 268l.7.6-.7-.7z" />
        <path fill="#420000" d="M257 268l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M290 268l.8.6-.7-.7z" />
        <path fill="#63636b" d="M290.8 268l.7.6-.7-.7z" />
        <path fill="#425242" d="M292.2 268l.7.6-.7-.7z" />
        <path fill="#103900" d="M295 268l.7.6-.7-.7z" />
        <path fill="#184a00" d="M299.2 268l.7.6-.7-.7z" />
        <path fill="#297b00" d="M303.4 268l1.5 1.3-1.5-1.4z" />
        <path fill="#103900" d="M304.1 268l.7.6-.7-.7m2.9 0l.7.7-.7-.7m2.8 0l-3.5 4 3.5-4z" />
        <path fill="#082108" d="M310.5 268l.7.6-.7-.7z" />
        <path fill="#297b00" d="M311.2 268l.7.6-.7-.7z" />
        <path fill="#314231" d="M314.7 268l-.7 1.3.7-1.4z" />
        <path fill="#bdbdbd" d="M188 268.6l.8.6-.7-.6z" />
        <path fill="#397b00" d="M188.8 268.6l.7.6-.7-.6m2 0l.8.6-.7-.6z" />
        <path fill="#294200" d="M194 269l.2.5-.3-.5m5 0l.2.5-.2-.5z" />
        <path fill="#526b42" d="M201.4 268.6l.7.6-.7-.6z" />
        <path fill="#efefef" d="M204.3 268.6l.6.6-.7-.6z" />
        <path fill="#314231" d="M205 268.6l.7.6-.7-.6z" />
        <path fill="#397b00" d="M209.2 268.6l.7.6-.7-.6m4.2.6v.7h2.1l-2-.6m2-.7l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M217.6 268.6l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M242.7 268.8l.5.2-.5-.2z" />
        <path fill="#8c8c8c" d="M243.7 268.6l.7.6-.8-.6z" />
        <path fill="#bdbdbd" d="M244.3 268.6l.7.6-.7-.6z" />
        <path fill="#cecece" d="M245 268.6l.8.6-.7-.6z" />
        <path fill="#9c9494" d="M248.6 268.6l.7.6-.7-.6z" />
        <path fill="#00216b" d="M249.3 268.6l.7.6-.7-.6z" />
        <path fill="#00215a" d="M251.4 268.6l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M252 268.6l.8.6-.7-.6z" />
        <path fill="#a51008" d="M253.5 268.6l.7.6-.7-.6z" />
        <path fill="#310000" d="M257 268.6l.7.6-.7-.6z" />
        <path fill="#940008" d="M257.7 268.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M258.4 268.6l.7.6-.7-.6z" />
        <path fill="#cecece" d="M262.6 268.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M263.4 268.6l.7.6-.8-.6z" />
        <path fill="#8c8c8c" d="M264.5 268.8l.5.2-.5-.2z" />
        <path fill="#7b7373" d="M265.5 268.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M290 268.6l.8.6-.7-.6z" />
        <path fill="#103900" d="M290.8 268.6l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M291.5 268.6l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M292.2 268.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M292.9 268.6l.7.6-.7-.6z" />
        <path fill="#296300" d="M295.5 268.8l.4.2-.4-.2z" />
        <path fill="#297b00" d="M298.5 268.6l.7.6-.7-.6z" />
        <path fill="#185200" d="M299.2 268.6l.7.6-.7-.6z" />
        <path fill="#297b00" d="M300 268.6l.6.6-.7-.6z" />
        <path fill="#103900" d="M303.4 268.6l.8.6-.8-.6m2.9 0l.7.6-.7-.6z" />
        <path fill="#efefef" d="M314.7 268.6l.7.6-.7-.6z" />
        <path fill="#396b10" d="M188.8 269.3l.7.6-.7-.6z" />
        <path fill="#103900" d="M190.9 269.3l.7.6-.7-.6z" />
        <path fill="#294200" d="M196.8 269.7l.2.5-.3-.5z" />
        <path fill="#396b10" d="M201.4 269.3l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M203.6 269.3l.7.6-.8-.6z" />
        <path fill="#dedede" d="M205 269.3l.7.6-.7-.6z" />
        <path fill="#214210" d="M205.7 269.3l2 2-2-2z" />
        <path fill="#294200" d="M208.7 269.7l.2.5-.2-.5z" />
        <path fill="#103900" d="M214.1 269.3l.7.6-.7-.6z" />
        <path fill="#314231" d="M217 269.3l.6.6-.7-.6z" />
        <path fill="#003994" d="M243 269.3c0 3.3.3 5 4.2 5.3.6-3.6-.6-4.6-4.3-5.4z" />
        <path fill="#002984" d="M244.3 269.3l.7.6-.7-.6z" />
        <path fill="#00216b" d="M245 269.3l.8.6-.7-.6z" />
        <path fill="#10214a" d="M245.8 269.3l.7.6-.7-.6z" />
        <path fill="#636b7b" d="M246.5 269.3l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M247.2 269.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M247.9 269.3l.7.6-.7-.6z" />
        <path fill="#31425a" d="M248.6 269.3l.7.6-.7-.6z" />
        <path fill="#21315a" d="M251.4 269.3l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M252.8 269.3l.7.6-.7-.6z" />
        <path fill="#ce1810" d="M253.5 269.3l.7.6-.7-.6z" />
        <path fill="#420000" d="M257 269.3l.7.6-.7-.6z" />
        <path fill="#ce0008" d="M257.7 269.3l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M258.4 269.3l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M260.5 269.3l.7.6-.7-.6z" />
        <path fill="#63636b" d="M261.2 269.3l.7.6-.7-.6z" />
        <path fill="#21315a" d="M262 269.3l.6.6-.7-.6z" />
        <path fill="#00216b" d="M262.6 269.3l.7.6-.7-.6z" />
        <path fill="#002984" d="M263.4 269.3l.7.6-.8-.6z" />
        <path fill="#003994" d="M259.1 270.6c1.7 5.8 6.3 4 6.3-1.4l-6.3 1.4z" />
        <path fill="#efefef" d="M290 269.3l.8.6-.7-.6z" />
        <path fill="#185200" d="M290.8 269.3l.7.6-.7-.6z" />
        <path fill="#425242" d="M291.5 269.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M292.2 269.3l.7.6-.7-.6z" />
        <path fill="#103900" d="M292.9 269.3l.7.6-.7-.6m2.8 0l.7.6-.7-.6zm9.9 0l.7.6-.7-.6z" />
        <path fill="#185200" d="M309 269.3l.8.6-.7-.6z" />
        <path fill="#214210" d="M313.3 269.3l.7.6-.7-.6z" />
        <path fill="#cecece" d="M314 269.3l-.7 1.3.7-1.4z" />
        <path fill="#5a6b52" d="M188.8 270l.7.6-.7-.7z" />
        <path fill="#397b00" d="M190.9 270l.7.6-.7-.7z" />
        <path fill="#295200" d="M191.6 270l.7.6-.7-.7m2.8 0l.7.7-.7-.7m4.2 0l.7.7-.7-.7z" />
        <path fill="#425242" d="M203.6 270l.7.6-.8-.7z" />
        <path fill="#cecece" d="M205.7 270l2 2-2-2z" />
        <path fill="#397b00" d="M212.7 270l.7.6-.7-.7z" />
        <path fill="#214210" d="M216.2 270l-.7 1.3.7-1.4z" />
        <path fill="#cecece" d="M217 270l-.8 1.3.7-1.4z" />
        <path fill="#002984" d="M247.2 270l.7.6-.7-.7z" />
        <path fill="#001039" d="M247.9 270l.7.6-.7-.7z" />
        <path fill="#00184a" d="M248.6 270l.7.6-.7-.7z" />
        <path fill="#7b7373" d="M251.4 270l.7.6-.7-.7z" />
        <path fill="#b5adad" d="M252.8 270l.7.6-.7-.7z" />
        <path fill="#6b0808" d="M257 270l.7.6-.7-.7z" />
        <path fill="#de2110" d="M257.7 270l.7.6-.7-.7z" />
        <path fill="#524242" d="M258.4 270l.7.6-.7-.7z" />
        <path fill="#525a6b" d="M259.1 270l.7.6-.7-.7z" />
        <path fill="#00184a" d="M259.8 270l.7.6-.7-.7z" />
        <path fill="#002984" d="M260.5 270l.7.6-.7-.7z" />
        <path fill="#395231" d="M290.8 270l.7.6-.7-.7z" />
        <path fill="#296300" d="M291.5 270l.7.6-.7-.7z" />
        <path fill="#9c9494" d="M292.2 270l.7.6-.7-.7z" />
        <path fill="#5a6b52" d="M292.9 270l.7.6-.7-.7z" />
        <path fill="#185200" d="M295.7 270l1.4 1.3-1.4-1.4z" />
        <path fill="#297b00" d="M296.4 270l.7.6-.7-.7z" />
        <path fill="#103900" d="M298.8 270.4l.2.4-.2-.4z" />
        <path fill="#297b00" d="M299.2 270l.7.6-.7-.7z" />
        <path fill="#103900" d="M304.9 270l.7.6-.8-.7z" />
        <path fill="#296300" d="M308.4 270l.7.6-.7-.7z" />
        <path fill="#103900" d="M312.6 270l.7.6-.7-.7z" />
        <path fill="#9c9494" d="M188.8 270.6l.7.7-.7-.7z" />
        <path fill="#294200" d="M191.6 270.6l.7.7-.7-.7m3 .4l.3.5-.3-.5z" />
        <path fill="#295200" d="M196.5 270.6l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M204.3 270.6l.6.7-.7-.7z" />
        <path fill="#397b00" d="M207.8 270.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M208.5 270.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M212 270.6l.7.7-.7-.7z" />
        <path fill="#00215a" d="M247.9 270.6l.7.7-.7-.7z" />
        <path fill="#002984" d="M248.6 270.6l.7.7-.7-.7z" />
        <path fill="#00216b" d="M250.7 270.6l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M251.4 270.6l.7.7-.7-.7z" />
        <path fill="#ad0008" d="M257.7 270.6l.7.7-.7-.7z" />
        <path fill="#390821" d="M258.4 270.6l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M290.8 270.6l.7.7-.7-.7z" />
        <path fill="#319400" d="M291.5 270.6l.7.7-.7-.7z" />
        <path fill="#103910" d="M292.2 270.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M292.9 270.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M293.6 270.6l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M300 270.6l.6.7-.7-.7z" />
        <path fill="#185200" d="M301.3 270.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M304.1 270.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M307.7 270.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M311.9 270.6l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M312.6 270.6l.7.7-.7-.7z" />
        <path fill="#dedede" d="M188.8 271.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M189.5 271.3l.7.6-.7-.6m2.8 0l.7.6-.7-.6z" />
        <path fill="#397b00" d="M196.5 271.3l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M202.8 271.3l.7.6-.7-.6z" />
        <path fill="#214210" d="M204.3 271.3l1.3 1.3-1.3-1.3z" />
        <path fill="#cecece" d="M205 271.3l1.4 1.3-1.4-1.3z" />
        <path fill="#001000" d="M207.8 271.3l.7.6-.7-.6z" />
        <path fill="#103900" d="M210.6 271.3l.7.6-.7-.6z" />
        <path fill="#397b00" d="M211.3 271.3l.7.6-.7-.6m2.1 0l.7.6-.7-.6z" />
        <path fill="#214210" d="M214.1 271.3l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M214.8 271.3l.7.6-.7-.6z" />
        <path fill="#dedede" d="M215.5 271.3l.7.6-.7-.6z" />
        <path fill="#001039" d="M247.9 271.3l.7.6-.7-.6z" />
        <path fill="#00184a" d="M250.7 271.3l.7.6-.7-.6z" />
        <path fill="#7b0008" d="M257 271.3l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#efefef" d="M289.1 271.5l.5.2-.5-.2z" />
        <path fill="#9c9494" d="M290.8 271.3l.7.6-.7-.6z" />
        <path fill="#297b00" d="M292 271.5l.4.2-.4-.2z" />
        <path fill="#7b7373" d="M292.9 271.3l.7.6-.7-.6z" />
        <path fill="#185200" d="M293.6 271.3l.7.6-.7-.6z" />
        <path fill="#184a00" d="M296.6 271.7l.3.5-.3-.5m2.1 0l.3.5-.2-.5z" />
        <path fill="#296300" d="M300 271.3l.6.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#184a00" d="M303.4 271.3l.8.6-.8-.6z" />
        <path fill="#297b00" d="M307 271.3l.7.6-.7-.6z" />
        <path fill="#296300" d="M311.2 271.3l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M311.9 271.3l.7.6-.7-.6z" />
        <path fill="#dedede" d="M314.7 271.3l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M315.4 271.3l.7.6-.7-.6z" />
        <path fill="#214210" d="M316.1 271.3l.7.6-.7-.6z" />
        <path fill="#395231" d="M316.8 271.3l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M317.5 271.3l.7.6-.7-.6z" />
        <path fill="#5a5231" d="M189.5 272l.7.6-.7-.7z" />
        <path fill="#294200" d="M192.3 272l.7.6-.7-.7z" />
        <path fill="#295200" d="M194.4 272l1.4 1.3-1.4-1.4z" />
        <path fill="#397b00" d="M195.1 272l.7.6-.7-.7m3.5 0l-.7 1.4h1.4l-.7-1.4z" />
        <path fill="#396b10" d="M201.4 272l.7.6-.7-.7z" />
        <path fill="#526b42" d="M203 272.4l.3.4-.2-.4z" />
        <path fill="#efefef" d="M207 272l-.6 1.3.7-1.4z" />
        <path fill="#294200" d="M207.8 272l.7.6-.7-.7m2.3.5l.3.4-.3-.4z" />
        <path fill="#295200" d="M210.6 272l.7.6-.7-.7z" />
        <path fill="#294200" d="M212 272l.7.6-.7-.7z" />
        <path fill="#63636b" d="M212.7 272l.7.6-.7-.7z" />
        <path fill="#ada5a5" d="M213.4 272l.7.6-.7-.7z" />
        <path fill="#00184a" d="M247.9 272l.7.6-.7-.7z" />
        <path fill="#31425a" d="M250.7 272l.7.6-.7-.7z" />
        <path fill="#6b0808" d="M258 272.4l.2.4-.2-.4z" />
        <path fill="#bd0008" d="M258.4 272l.7.6-.7-.7z" />
        <path fill="#00215a" d="M259.1 272l.7.6-.7-.7z" />
        <path fill="#bdbdbd" d="M288.7 272l.7.6-.7-.7z" />
        <path fill="#7b7373" d="M289.4 272l.7.6-.7-.7z" />
        <path fill="#dedede" d="M290.8 272l.7.6-.7-.7z" />
        <path fill="#185200" d="M291.5 272l.7.6-.7-.7z" />
        <path fill="#184a00" d="M292.9 272l.7.6-.7-.7z" />
        <path fill="#314231" d="M293.6 272l.7.6-.7-.7z" />
        <path fill="#184a00" d="M301.3 272v2.6h.7l-.7-2.7z" />
        <path fill="#185200" d="M303.2 272.1l.5.3-.5-.2m2.4-.3l-1.5 2 1.4-2z" />
        <path fill="#296300" d="M306.3 272l.7.6-.7-.7z" />
        <path fill="#297b00" d="M310.5 272l-1.4 3.3h.7l.7-3.4z" />
        <path fill="#63636b" d="M311.2 272l.7.6-.7-.7z" />
        <path fill="#9c9494" d="M313.3 272l.7.6-.7-.7z" />
        <path fill="#425242" d="M314 272l.7.6-.7-.7z" />
        <path fill="#185200" d="M314.7 272l.7.6-.7-.7z" />
        <path fill="#297b00" d="M315.4 272l.7.6-.7-.7z" />
        <path fill="#184a00" d="M317.5 272l.7.6-.7-.7z" />
        <path fill="#cecece" d="M318.2 272l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M189.5 272.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M192.8 272.8l.4.2-.4-.2z" />
        <path fill="#526b42" d="M201.4 272.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M204 272.8l.5.2-.5-.2z" />
        <path fill="#314231" d="M205.7 272.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M207 272.6l-.6 1.3.7-1.3z" />
        <path fill="#397b00" d="M209.2 272.6v2l2-2h-2z" />
        <path fill="#5a6b52" d="M211.3 272.6l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M212 272.6l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M242.2 272.6l.7.7-.7-.7z" />
        <path fill="#00216b" d="M247.6 272.8l.5.2-.5-.2z" />
        <path fill="#7b7373" d="M250.7 272.6l.7.7-.7-.7z" />
        <path fill="#de2110" d="M258.7 273l.2.5-.2-.5z" />
        <path fill="#390821" d="M259.1 272.6l.7.7-.7-.7z" />
        <path fill="#00215a" d="M280.2 272.6l.7.7-.7-.7z" />
        <path fill="#292921" d="M289.4 272.6l.7.7-.7-.7z" />
        <path fill="#315221" d="M291.5 272.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M292.9 272.6l.7.7-.7-.7z" />
        <path fill="#001000" d="M293.6 272.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M294.3 272.6l.7.7-.7-.7z" />
        <path fill="#296300" d="M296.9 272.8l.5.2-.5-.2z" />
        <path fill="#185200" d="M298.5 272.6l.7.7-.7-.7z" />
        <path fill="#296300" d="M302.7 272.6l.7.7-.7-.7z" />
        <path fill="#425242" d="M310.5 272.6l.7.7-.7-.7z" />
        <path fill="#efefef" d="M311.2 272.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M311.9 272.6l.7.7-.7-.7z" />
        <path fill="#315221" d="M312.6 272.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M313.3 272.6l.7.7-.7-.7z" />
        <path fill="#314231" d="M318.2 272.6l.7.7-.7-.7z" />
        <path fill="#dedede" d="M189.5 273.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M190.2 273.3l.7.6-.7-.6z" />
        <path fill="#103900" d="M193 273.3l.7.6-.7-.6z" />
        <path fill="#294200" d="M195.1 273.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M198 273.3l.6.6-.7-.6z" />
        <path fill="#6b735a" d="M201.4 273.3l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M202.8 273.3l.7.6-.7-.6z" />
        <path fill="#294200" d="M204.5 273.7l.2.5-.2-.5z" />
        <path fill="#315221" d="M207 273.3l.8.6-.7-.6z" />
        <path fill="#103900" d="M209.2 273.3l.7.6-.7-.6z" />
        <path fill="#63636b" d="M210.6 273.3l-.7 1.3.7-1.3z" />
        <path fill="#292921" d="M212 273.3l.7.6-.7-.6z" />
        <path fill="#dedede" d="M212.7 273.3l.7.6-.7-.6z" />
        <path fill="#733939" d="M220.4 273.3l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M227.5 273.3l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M242.2 273.3l.7.6-.7-.6z" />
        <path fill="#002984" d="M250 273.3l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M250.7 273.3l.7.6-.7-.6z" />
        <path fill="#b51010" d="M257 273.3l.7.6-.7-.6z" />
        <path fill="#520808" d="M257.7 273.3l.7.6-.7-.6z" />
        <path fill="#7b0008" d="M259.1 273.3l.7.6-.7-.6z" />
        <path fill="#636b7b" d="M265.5 273.3l.7.6-.7-.6z" />
        <path fill="#002984" d="M280.5 273.7l.2.5-.2-.5z" />
        <path fill="#001000" d="M289.4 273.3l.7.6-.7-.6z" />
        <path fill="#dedede" d="M290 273.3l.8.6-.7-.6z" />
        <path fill="#6b735a" d="M291.5 273.3l.7.6-.7-.6z" />
        <path fill="#185200" d="M294 273.5l.5.2-.4-.2z" />
        <path fill="#103900" d="M297.1 273.3l.7.6-.7-.6z" />
        <path fill="#297b00" d="M299.2 273.3l.7.6-.7-.6z" />
        <path fill="#293129" d="M309.8 273.3l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M310.5 273.3l.7.6-.7-.6z" />
        <path fill="#214210" d="M311.2 273.3l.7.6-.7-.6z" />
        <path fill="#297b00" d="M311.9 273.3l.7.6-.7-.6z" />
        <path fill="#185200" d="M318.2 273.3l.7.6-.7-.6z" />
        <path fill="#cecece" d="M319 273.3l.6.6-.7-.6z" />
        <path fill="#314231" d="M190.2 274l.7.6-.7-.7z" />
        <path fill="#295200" d="M193 274l.7.6-.7-.7z" />
        <path fill="#397b00" d="M195.1 274l.7.6-.7-.7z" />
        <path fill="#295200" d="M195.8 274l.7.6-.7-.7z" />
        <path fill="#294200" d="M198 274l.6.6-.7-.7z" />
        <path fill="#8c8c8c" d="M201.7 274.4l.2.4-.2-.4m1.1-.5l.7.7-.7-.7z" />
        <path fill="#294200" d="M206.4 274l.7.6-.7-.7z" />
        <path fill="#397b00" d="M207 274l-.6 3.3h.7v-3.4z" />
        <path fill="#294200" d="M208.7 274.4l.2.4-.2-.4z" />
        <path fill="#bdbdbd" d="M211.3 274l.7.6-.7-.7z" />
        <path fill="#294200" d="M212.2 274.4l.3.4-.3-.4z" />
        <path fill="#bdbdbd" d="M212.7 274l.7.6-.7-.7m5.6 0l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M219 274l.7.6-.7-.7z" />
        <path fill="#315221" d="M219.7 274l.7.6-.7-.7z" />
        <path fill="#310000" d="M220.4 274l.7.6-.7-.7z" />
        <path fill="#a51008" d="M228.2 274l.7.6-.7-.7z" />
        <path fill="#845a52" d="M236.6 274l.7.6-.7-.7z" />
        <path fill="#dedede" d="M242.2 274l.7.6-.7-.7z" />
        <path fill="#10214a" d="M243 274l.6.6-.7-.7z" />
        <path fill="#00216b" d="M250 274l.7.6-.7-.7z" />
        <path fill="#bdbdbd" d="M250.7 274l.7.6-.7-.7z" />
        <path fill="#a51008" d="M257 274l.7.6-.7-.7z" />
        <path fill="#940008" d="M257.7 274l1.4 1.3-1.4-1.4z" />
        <path fill="#bd0008" d="M258.9 274.2l.5.2-.5-.2z" />
        <path fill="#00215a" d="M259.8 274l.7.6-.7-.7z" />
        <path fill="#10214a" d="M264.8 274l.6.6-.6-.7z" />
        <path fill="#cecece" d="M265.5 274l-.7 1.3.7-1.4z" />
        <path fill="#103900" d="M289.4 274l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M290 274l.8.6-.7-.7z" />
        <path fill="#9c9494" d="M291.5 274l.7.6-.7-.7z" />
        <path fill="#297b00" d="M292.2 274l.7.6-.7-.7z" />
        <path fill="#103900" d="M294.3 274l.7.6-.7-.7z" />
        <path fill="#184a00" d="M297.1 274l.7.6-.7-.7zm7 0l.8.6-.7-.7z" />
        <path fill="#103900" d="M309 274l.8.6-.7-.7z" />
        <path fill="#184a00" d="M309.8 274l.7.6-.7-.7z" />
        <path fill="#297b00" d="M310.5 274l.7.6-.7-.7m6 .3l.6.2-.5-.2m1.6-.3l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M319 274l.6.6-.7-.7z" />
        <path fill="#bdbdbd" d="M190.2 274.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M190.9 274.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M193.7 274.6l.7.7-.7-.7z" />
        <path fill="#294200" d="M195.8 274.6l1.4 1.3-1.4-1.3z" />
        <path fill="#397b00" d="M196.5 274.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M198 274.6l-.8 2 .7-2z" />
        <path fill="#bdbdbd" d="M202.8 274.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M203.6 274.6l.7.7-.8-.7z" />
        <path fill="#295200" d="M205 274.6l.7.7-.7-.7z" />
        <path fill="#738c63" d="M209.2 274.6l.7.7-.7-.7z" />
        <path fill="#cecece" d="M210.6 274.6l-2.8 3.4 2.8-3.4z" />
        <path fill="#214210" d="M211.3 274.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M213 275l.2.5-.3-.5z" />
        <path fill="#efefef" d="M215.5 274.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M216.2 274.6l.7.7-.7-.7z" />
        <path fill="#315221" d="M217 274.6l.6.7-.7-.7z" />
        <path fill="#294200" d="M217.6 274.6v2h.7l-.7-2z" />
        <path fill="#397b00" d="M218.8 274.8l.5.2-.5-.2z" />
        <path fill="#214210" d="M219.7 274.6l.7.7-.7-.7z" />
        <path fill="#733939" d="M220.4 274.6l.7.7-.7-.7z" />
        <path fill="#941808" d="M228.2 274.6l.7.7-.7-.7z" />
        <path fill="#943131" d="M236.6 274.6l.7.7-.7-.7z" />
        <path fill="#cecece" d="M243 274.6l.6.7-.7-.7z" />
        <path fill="#636b7b" d="M243.7 274.6l.7.7-.8-.7z" />
        <path fill="#10295a" d="M244.3 274.6l.7.7-.7-.7z" />
        <path fill="#00184a" d="M245.5 274.8l.5.2-.5-.2z" />
        <path fill="#001039" d="M246.5 274.6l.7.7-.7-.7z" />
        <path fill="#00215a" d="M250 274.6l.7.7-.7-.7z" />
        <path fill="#efefef" d="M250.7 274.6l.7.7-.7-.7z" />
        <path fill="#b51010" d="M257 274.6l.7.7-.7-.7z" />
        <path fill="#bd0008" d="M257.7 274.6l.7.7-.7-.7z" />
        <path fill="#de2110" d="M259.1 274.6l2.8 7.4-2.8-7.4z" />
        <path fill="#391810" d="M259.8 274.6l.7.7-.7-.7z" />
        <path fill="#636b7b" d="M260.5 274.6l.7.7-.7-.7z" />
        <path fill="#21315a" d="M261.2 274.6l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M264 274.6l.8.7-.8-.7z" />
        <path fill="#9c4a42" d="M271 274.6l.8.7-.7-.7z" />
        <path fill="#ce1810" d="M279.5 274.6l.7.7-.7-.7z" />
        <path fill="#184a00" d="M289.6 275l.2.5-.2-.5z" />
        <path fill="#395231" d="M290 274.6l.8.7-.7-.7z" />
        <path fill="#dedede" d="M291.5 274.6l-.7 1.3.7-1.3z" />
        <path fill="#296300" d="M292.2 274.6l.7.7-.7-.7z" />
        <path fill="#184a00" d="M294.3 274.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M297.1 274.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M303.4 274.6l.8.7-.8-.7z" />
        <path fill="#296300" d="M307.9 275l.2.5-.2-.5z" />
        <path fill="#103900" d="M308.4 274.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M314.7 274.6l.7.7-.7-.7z" />
        <path fill="#425242" d="M315.4 274.6l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M316.1 274.6l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M316.8 274.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M317.5 274.6l1.4 1.3-1.4-1.3z" />
        <path fill="#315221" d="M319 274.6l.6.7-.7-.7z" />
        <path fill="#7b7373" d="M190.9 275.3l.7.6-.7-.6z" />
        <path fill="#397b00" d="M191.6 275.3l1.4 1.3-1.4-1.3m2.1 0l2.1 1.3v-.7l-2.1-.6z" />
        <path fill="#294200" d="M194.4 275.3l.7.6-.7-.6z" />
        <path fill="#397b00" d="M197.2 275.3l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M201.4 275.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M202.8 275.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M203.6 275.3l.7.6-.8-.6z" />
        <path fill="#294200" d="M205 275.3v2h.7l-.7-2z" />
        <path fill="#295200" d="M207.8 275.3l.7.6-.7-.6z" />
        <path fill="#396b10" d="M208.5 275.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M209.2 275.3l.7.6-.7-.6z" />
        <path fill="#214210" d="M210.6 275.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M212 275.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M214.1 275.3l-.7 1.3.7-1.3z" />
        <path fill="#63636b" d="M214.8 275.3l.7.6-.7-.6z" />
        <path fill="#396b10" d="M215.5 275.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M219 275.3l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M219.7 275.3l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M228.2 275.3l.7.6-.7-.6z" />
        <path fill="#a51008" d="M236.6 275.3l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M246.5 275.3l.7.6-.7-.6z" />
        <path fill="#00216b" d="M247.2 275.3l.7.6-.7-.6z" />
        <path fill="#00184a" d="M250 275.3l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M252.8 275.3l.7.6-.7-.6z" />
        <path fill="#a51008" d="M257 275.3l.7.6-.7-.6z" />
        <path fill="#6b0808" d="M258.7 275.7l.2.5-.2-.5z" />
        <path fill="#7b0008" d="M259.8 275.3l.7.6-.7-.6z" />
        <path fill="#dedede" d="M260.5 275.3l.7.6-.7-.6z" />
        <path fill="#ad3931" d="M271 275.3l.8.6-.7-.6z" />
        <path fill="#842118" d="M279.5 275.3l.7.6-.7-.6z" />
        <path fill="#185200" d="M290 275.3l.8.6-.7-.6z" />
        <path fill="#184a00" d="M292.2 275.3l.7.6-.7-.6z" />
        <path fill="#296300" d="M294.8 275.5l.4.2-.4-.2z" />
        <path fill="#185200" d="M299.2 275.3l.7.6-.7-.6z" />
        <path fill="#297b00" d="M306.3 275.3l1.4 1.3-1.4-1.3z" />
        <path fill="#103900" d="M307 275.3l.7.6-.7-.6z" />
        <path fill="#296300" d="M313.3 275.3l.7.6-.7-.6z" />
        <path fill="#425242" d="M314 275.3l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M314.7 275.3l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M317.5 275.3l.7.6-.7-.6z" />
        <path fill="#296300" d="M319 275.3l.6.6-.7-.6z" />
        <path fill="#cecece" d="M319.6 275.3l.7.6-.7-.6z" />
        <path fill="#dedede" d="M324.6 275.3l.6.6-.6-.6z" />
        <path fill="#8c8c8c" d="M325.5 275.7l.2.5-.2-.5z" />
        <path fill="#63636b" d="M191.6 276l.7.6-.7-.7z" />
        <path fill="#001000" d="M198 276l.6.6-.7-.7z" />
        <path fill="#397b00" d="M200.7 276l.7.6-.7-.7z" />
        <path fill="#bdbdbd" d="M201.4 276l.7.6-.7-.7z" />
        <path fill="#294200" d="M203.6 276l.7.6-.8-.7z" />
        <path fill="#103900" d="M207.8 276l.7.6-.7-.7z" />
        <path fill="#bdc6ad" d="M208.5 276l.7.6-.7-.7z" />
        <path fill="#214210" d="M209.9 276l.7.6-.7-.7z" />
        <path fill="#295200" d="M211.3 276l.7.6-.7-.7z" />
        <path fill="#526b42" d="M213 276.4l.2.4-.3-.4z" />
        <path fill="#314231" d="M214.1 276l.7.6-.7-.7z" />
        <path fill="#397b00" d="M218.3 276l.7.6-.7-.7z" />
        <path fill="#214210" d="M219 276l.7.6-.7-.7z" />
        <path fill="#ce2110" d="M228.2 276l.7.6-.7-.7z" />
        <path fill="#ce1810" d="M236.6 276l.7.6-.7-.7z" />
        <path fill="#a59494" d="M237.3 276l.7.6-.7-.7z" />
        <path fill="#9c9494" d="M246.5 276l.7.6-.7-.7z" />
        <path fill="#002984" d="M247.2 276l.7.6-.7-.7z" />
        <path fill="#10295a" d="M250 276l.7.6-.7-.7z" />
        <path fill="#c6b5b5" d="M252.8 276l.7.6-.7-.7z" />
        <path fill="#ce1810" d="M253.7 276.4l.3.4-.3-.4z" />
        <path fill="#bd0008" d="M259.8 276l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M260.5 276l.7.6-.7-.7z" />
        <path fill="#debdb5" d="M270.4 276l.7.6-.7-.7z" />
        <path fill="#ce1810" d="M271 276l.8.6-.7-.7z" />
        <path fill="#00184a" d="M279.5 276l.7.6-.7-.7z" />
        <path fill="#5a7b42" d="M289.4 276l.7.6-.7-.7z" />
        <path fill="#297b00" d="M290 276l.8.6-.7-.7z" />
        <path fill="#8c8c8c" d="M290.8 276l.7.6-.7-.7z" />
        <path fill="#315221" d="M292.2 276l.7.6-.7-.7z" />
        <path fill="#297b00" d="M294.3 276l.7.6-.7-.7z" />
        <path fill="#184a00" d="M295 276v2h.7l-.7-2z" />
        <path fill="#185200" d="M298 276.4l.3.4-.2-.4z" />
        <path fill="#296300" d="M299.2 276l.7.6-.7-.7z" />
        <path fill="#184a00" d="M302 276l.7.6-.7-.7z" />
        <path fill="#185200" d="M305.6 276l.7.6-.7-.7z" />
        <path fill="#184a00" d="M306.3 276l.7.6-.7-.7z" />
        <path fill="#296300" d="M311.9 276l.7.6-.7-.7z" />
        <path fill="#395231" d="M312.6 276l.7.6-.7-.7z" />
        <path fill="#bdbdbd" d="M313.3 276l.7.6-.7-.7z" />
        <path fill="#63636b" d="M318.2 276l.7.6-.7-.7z" />
        <path fill="#297b00" d="M319 276l.6.6-.7-.7z" />
        <path fill="#63636b" d="M319.6 276l.7.6-.7-.7z" />
        <path fill="#dedede" d="M322.4 276l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M323.1 276l.7.6-.7-.7z" />
        <path fill="#314231" d="M323.9 276l.7.6-.8-.7z" />
        <path fill="#001000" d="M324.6 276l.6.6-.6-.7z" />
        <path fill="#8c8c8c" d="M192.3 276.6l.7.7-.7-.7z" />
        <path fill="#214210" d="M193 276.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M198 276.6l.6.7-.7-.7z" />
        <path fill="#294200" d="M198.9 277l.2.5-.2-.4z" />
        <path fill="#8c8c8c" d="M201.4 276.6l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M203.6 276.6l.7.7-.8-.7z" />
        <path fill="#295200" d="M207 276.6l-.6 1.3.7-1.3z" />
        <path fill="#425242" d="M207.8 276.6l.7.7-.7-.7z" />
        <path fill="#214210" d="M209.2 276.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M211.3 276.6l.7.7-.7-.7z" />
        <path fill="#425242" d="M213.4 276.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M217 276.6l.6.7-.7-.7z" />
        <path fill="#397b00" d="M217.6 276.6l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M219 276.6l.7.7-.7-.7z" />
        <path fill="#a51008" d="M228.9 276.6l.7.7-.7-.7z" />
        <path fill="#842118" d="M237.3 276.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M246.5 276.6l.7.7-.7-.7z" />
        <path fill="#42425a" d="M250 276.6v5.4h.7l-.7-5.4z" />
        <path fill="#bdbdbd" d="M252.8 276.6l.7.7-.7-.7z" />
        <path fill="#a51008" d="M257 276.6l.7.7-.7-.7z" />
        <path fill="#ad0008" d="M259.1 276.6l.7.7-.7-.7z" />
        <path fill="#733939" d="M260.5 276.6l.7.7-.7-.7z" />
        <path fill="#9c4239" d="M270.4 276.6l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M278.8 276.6l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M288 276.6l1.4 1.3-1.4-1.3z" />
        <path fill="#4a6342" d="M289.6 277l.2.5-.2-.4z" />
        <path fill="#314231" d="M290.8 276.6l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M292.2 276.6l.7.7-.7-.7z" />
        <path fill="#296300" d="M301.3 276.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M302 276.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M304.9 276.6l.7.7-.8-.7z" />
        <path fill="#296300" d="M305.6 276.6l.7.7-.7-.7m4.9 0l.7.7-.7-.7z" />
        <path fill="#294221" d="M311.2 276.6l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M311.9 276.6l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M319 276.6l.6.7-.7-.7z" />
        <path fill="#52525a" d="M319.6 276.6l.7.7-.7-.7z" />
        <path fill="#cecece" d="M320.3 276.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M321 276.6l.7.7-.7-.7z" />
        <path fill="#314231" d="M321.7 276.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M322.7 277l.2.5-.2-.4z" />
        <path fill="#296300" d="M323.1 276.6l.7.7-.7-.7z" />
        <path fill="#294221" d="M323.9 276.6l.7.7-.8-.7z" />
        <path fill="#bdbdbd" d="M324.6 276.6l.6.7-.6-.7z" />
        <path fill="#efefef" d="M193 277.3l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M193.7 277.3l.7.6-.7-.6z" />
        <path fill="#5a5231" d="M194.4 277.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M195.1 277.3l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M201.4 277.3l.7.6-.7-.6z" />
        <path fill="#526b42" d="M203.6 277.3l.7.6-.8-.6z" />
        <path fill="#213918" d="M207 277.3l.8.6-.7-.6z" />
        <path fill="#315221" d="M208.5 277.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M210.6 277.3l.7.6-.7-.6z" />
        <path fill="#397b00" d="M211.3 277.3l.7.6-.7-.6z" />
        <path fill="#292100" d="M212.7 277.3l.7.6-.7-.6z" />
        <path fill="#397b00" d="M213.4 277.3l.7.6-.7-.6z" />
        <path fill="#295200" d="M216.2 277.3l.7.6-.7-.6z" />
        <path fill="#397b00" d="M217 277.3l.6.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M219 277.3l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M228.9 277.3l.7.6-.7-.6z" />
        <path fill="#ce1810" d="M237.3 277.3l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M238 277.3l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M246.5 277.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M252.8 277.3l.7.6-.7-.6z" />
        <path fill="#b51010" d="M253.5 277.3l.7.6-.7-.6z" />
        <path fill="#ad0008" d="M257.7 277.3l.7.6-.7-.6z" />
        <path fill="#bd0008" d="M258.4 277.3l.7.6-.7-.6z" />
        <path fill="#7b0008" d="M259.1 277.3l.7.6-.7-.6z" />
        <path fill="#940008" d="M260.5 277.3l.7.6-.7-.6z" />
        <path fill="#dedede" d="M261.2 277.3l.7.6-.7-.6z" />
        <path fill="#a5847b" d="M269.7 277.3l-.7 1.3.7-1.3z" />
        <path fill="#ce1810" d="M270.4 277.3l.7.6-.7-.6z" />
        <path fill="#392121" d="M278.8 277.3l.7.6-.7-.6z" />
        <path fill="#103910" d="M288 277.3l.7.6-.7-.6z" />
        <path fill="#185200" d="M290.8 277.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M291.5 277.3l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M292.2 277.3l.7.6-.7-.6z" />
        <path fill="#184a00" d="M298 277.7l.3.5-.2-.5z" />
        <path fill="#297b00" d="M300.6 277.3l1.4 1.3-1.4-1.3z" />
        <path fill="#103900" d="M301.3 277.3l.7.6-.7-.6m2.8 0l.7.6-.7-.6z" />
        <path fill="#297b00" d="M309 277.3l.8.6-.7-.6z" />
        <path fill="#214210" d="M309.8 277.3l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M310.5 277.3l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M316.6 277.5l.4.2-.4-.2z" />
        <path fill="#8c8c8c" d="M317.5 277.3l.7.6-.7-.6z" />
        <path fill="#6b735a" d="M318.2 277.3l.7.6-.7-.6z" />
        <path fill="#4a6342" d="M319 277.3l.6.6-.7-.6z" />
        <path fill="#184a00" d="M319.6 277.3l.7.6-.7-.6z" />
        <path fill="#296300" d="M320.3 277.3l.7.6-.7-.6z" />
        <path fill="#297b00" d="M321 277.3l-.7 1.3.7-1.3z" />
        <path fill="#319400" d="M321.7 277.3l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M323.1 277.3l.7.6-.7-.6z" />
        <path fill="#efefef" d="M323.9 277.3l.7.6-.8-.6z" />
        <path fill="#dedede" d="M195.1 278l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M195.8 278l.7.6-.7-.7z" />
        <path fill="#5a5231" d="M196.5 278l.7.6-.7-.7z" />
        <path fill="#295200" d="M197.2 278l.7.6-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#315221" d="M201.4 278l.7.6-.7-.7z" />
        <path fill="#292100" d="M206.4 278l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M207 278l.8.6-.7-.7z" />
        <path fill="#63636b" d="M207.8 278l.7.6-.7-.7z" />
        <path fill="#294200" d="M210.6 278l.7.6-.7-.7m2 0l.8.7-.7-.7z" />
        <path fill="#397b00" d="M215.5 278l.7.6-.7-.7z" />
        <path fill="#294200" d="M216.2 278l.7.6-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#941808" d="M229.6 278l.7.6-.7-.7z" />
        <path fill="#b51010" d="M238 278l1.4 1.3-1.4-1.4z" />
        <path fill="#a59494" d="M238.7 278l.7.6-.7-.7z" />
        <path fill="#a51008" d="M253.5 278l.7.6-.7-.7z" />
        <path fill="#de2110" d="M258.4 278v9.3h2.1l-2-9.4z" />
        <path fill="#6b0808" d="M259.4 278.4l.2.5-.2-.5z" />
        <path fill="#ce0008" d="M260.5 278l.7.6-.7-.7z" />
        <path fill="#7b7373" d="M261.2 278l.7.6-.7-.7z" />
        <path fill="#ce1810" d="M269.7 278l.7.6-.7-.7z" />
        <path fill="#ad1810" d="M278.1 278l.7.6-.7-.7z" />
        <path fill="#5a6b52" d="M288 278l.7.6-.7-.7z" />
        <path fill="#185200" d="M288.7 278l.7.6-.7-.7z" />
        <path fill="#103910" d="M289.4 278l.7.6-.7-.7z" />
        <path fill="#297b00" d="M290.8 278l.7.6-.7-.7z" />
        <path fill="#9c9494" d="M291.5 278l.7.6-.7-.7z" />
        <path fill="#8c9c84" d="M292.4 278.4l.3.5-.3-.5z" />
        <path fill="#296300" d="M295 278l.7.6-.7-.7z" />
        <path fill="#297b00" d="M295.7 278l-.7 1.3.7-1.4z" />
        <path fill="#185200" d="M300.6 278l.7.6-.7-.7m2.1 0l-2 2.7 2-2.7z" />
        <path fill="#184a00" d="M303.4 278l.8.6-.8-.7z" />
        <path fill="#297b00" d="M307.7 278l.7.6-.7-.7z" />
        <path fill="#214210" d="M308.4 278l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M309 278l.8.6-.7-.7z" />
        <path fill="#cecece" d="M309.8 278l.7.6-.7-.7z" />
        <path fill="#bdbdbd" d="M310.5 278l.7.6-.7-.7z" />
        <path fill="#8c8c8c" d="M311.6 278.2l.5.2-.5-.2z" />
        <path fill="#6b735a" d="M312.6 278l.7.6-.7-.7z" />
        <path fill="#4a6342" d="M313.3 278l.7.6-.7-.7z" />
        <path fill="#426331" d="M314 278l.7.6-.7-.7z" />
        <path fill="#184a00" d="M314.7 278l.7.6-.7-.7z" />
        <path fill="#185200" d="M315.4 278l.7.6-.7-.7z" />
        <path fill="#296300" d="M316.6 278.2l.4.2-.4-.2z" />
        <path fill="#184a00" d="M321 278l.7.6-.7-.7z" />
        <path fill="#63636b" d="M321.7 278l.7.6-.7-.7z" />
        <path fill="#dedede" d="M322.4 278l.7.6-.7-.7m-125.2.7l.7.7-.7-.7z" />
        <path fill="#52525a" d="M198 278.6l.6.7-.7-.7z" />
        <path fill="#103900" d="M198.6 278.6l.7.7-.7-.7z" />
        <path fill="#422100" d="M199.3 278.6l.7.7-.7-.7z" />
        <path fill="#294200" d="M200 278.6l1.4 1.4-1.4-1.4z" />
        <path fill="#397b00" d="M201.4 278.6l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M202.1 278.6l.7.7-.7-.7z" />
        <path fill="#293129" d="M206.4 278.6l.7.7-.7-.7z" />
        <path fill="#dedede" d="M207 278.6l.8.7-.7-.7z" />
        <path fill="#295200" d="M207.8 278.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M209.9 278.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M212.7 278.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M215.5 278.6l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M218.3 278.6l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M229.6 278.6l.7.7-.7-.7z" />
        <path fill="#b51010" d="M230.3 278.6l1.4 2-1.4-2z" />
        <path fill="#8c7373" d="M239.4 278.6l.7.7-.7-.7z" />
        <path fill="#efefef" d="M240.1 278.6l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M253.5 278.6l.7.7-.7-.7z" />
        <path fill="#a51008" d="M258 279l.2.5-.2-.4z" />
        <path fill="#6b2131" d="M261.2 278.6l.7.7-.7-.7z" />
        <path fill="#946b63" d="M268.3 278.6l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M269 278.6l.7.7-.7-.7m8.4 0l-.7 1.4.7-1.4z" />
        <path fill="#00216b" d="M278.1 278.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M288 278.6l.7.7-.7-.7z" />
        <path fill="#319400" d="M288.7 278.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M289.4 278.6l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M291.5 278.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M296 279l.2.5-.3-.4m2-.5l.6.7-.7-.7z" />
        <path fill="#297b00" d="M306.3 278.6l.7.7-.7-.7z" />
        <path fill="#184a00" d="M307 278.6l.7.7-.7-.7z" />
        <path fill="#001000" d="M307.7 278.6l.7.7-.7-.7z" />
        <path fill="#395231" d="M308.4 278.6l.7.7-.7-.7z" />
        <path fill="#184a00" d="M309 278.6l.8.7-.7-.7z" />
        <path fill="#185200" d="M309.8 278.6l.7.7-.7-.7z" />
        <path fill="#296300" d="M310.5 278.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M319 278.6l.6.7-.7-.7z" />
        <path fill="#184a00" d="M319.6 278.6l.7.7-.7-.7z" />
        <path fill="#63636b" d="M320.3 278.6l.7.7-.7-.7z" />
        <path fill="#dedede" d="M321 278.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M198 279.3l.6.7-.7-.7z" />
        <path fill="#bd2110" d="M198.6 279.3l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M200 279.3l.7.7-.7-.7z" />
        <path fill="#425242" d="M202.1 279.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M205.7 279.3l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M206.4 279.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M207 279.3l.8.7-.7-.7z" />
        <path fill="#397b00" d="M209.7 279.5l.4.2-.4-.2m2.8 0l.4.2-.4-.2z" />
        <path fill="#103900" d="M214.8 279.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M217.6 279.3l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M218.3 279.3l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M240.1 279.3l.7.7-.7-.7z" />
        <path fill="#8c7373" d="M240.8 279.3l.7.7-.7-.7z" />
        <path fill="#efefef" d="M241.5 279.3l.7.7-.7-.7z" />
        <path fill="#943131" d="M253.7 279.7l.3.5-.3-.5z" />
        <path fill="#940008" d="M259.1 279.3l.7.7-.7-.7z" />
        <path fill="#ad0008" d="M259.8 279.3l.7.7-.7-.7z" />
        <path fill="#940008" d="M261.2 279.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M262 279.3l.6.7-.7-.7z" />
        <path fill="#a5847b" d="M266.9 279.3l.7.7-.7-.7z" />
        <path fill="#9c2118" d="M267.6 279.3l.7.7-.7-.7z" />
        <path fill="#00216b" d="M277.4 279.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M288.2 279.7l.2.5-.2-.5z" />
        <path fill="#297b00" d="M288.7 279.3v.7h2v-.7h-2z" />
        <path fill="#185200" d="M289.4 279.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M291.5 279.3l.7.7-.7-.7z" />
        <path fill="#395231" d="M292.2 279.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M297.8 279.3l.7.7-.7-.7m7.8 0l.7.7-.7-.7z" />
        <path fill="#082108" d="M306.3 279.3l.7.7-.7-.7z" />
        <path fill="#185200" d="M307 279.3l.7.7-.7-.7z" />
        <path fill="#297b00" d="M317.5 279.3l.7.7-.7-.7z" />
        <path fill="#214210" d="M318.2 279.3l.7.7-.7-.7z" />
        <path fill="#63636b" d="M319 279.3l.6.7-.7-.7z" />
        <path fill="#dedede" d="M319.6 279.3l.7.7-.7-.7z" />
        <path fill="#52525a" d="M198 280l.6.6-.7-.6z" />
        <path fill="#422100" d="M200.7 280l.7.6-.7-.6z" />
        <path fill="#295200" d="M202.1 280l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M202.8 280l.7.6-.7-.6z" />
        <path fill="#214210" d="M205.7 280l.7.6-.7-.6z" />
        <path fill="#314231" d="M207 280l.8.6-.7-.6z" />
        <path fill="#294200" d="M209.2 280l.7.6-.7-.6z" />
        <path fill="#103900" d="M212 280l.7.6-.7-.6z" />
        <path fill="#294200" d="M214.1 280l.7.6-.7-.6z" />
        <path fill="#397b00" d="M214.8 280l.7.6-.7-.6z" />
        <path fill="#396b10" d="M217.6 280l.7.6-.7-.6z" />
        <path fill="#efefef" d="M218.3 280l.7.6-.7-.6z" />
        <path fill="#a51008" d="M231.7 280l.7.6-.7-.6m9.8 0l.7.6-.7-.6z" />
        <path fill="#9c2929" d="M242.2 280l.7.6-.7-.6z" />
        <path fill="#845a52" d="M243 280l.6.6-.7-.6z" />
        <path fill="#a59494" d="M243.7 280l.7.6-.8-.6z" />
        <path fill="#c6b5b5" d="M244.3 280l.7.6-.7-.6z" />
        <path fill="#8c7373" d="M245.5 280.2l.5.2-.5-.2z" />
        <path fill="#212139" d="M246.5 280l.7.6-.7-.6z" />
        <path fill="#b51010" d="M257.7 280l.7.6-.7-.6z" />
        <path fill="#ce0008" d="M259.1 280l.7.6-.7-.6z" />
        <path fill="#6b0808" d="M259.8 280l.7.6-.7-.6z" />
        <path fill="#ce0008" d="M261.2 280l.7.6-.7-.6z" />
        <path fill="#734a42" d="M262 280l.6.6-.7-.6z" />
        <path fill="#946b63" d="M262.6 280l.7.6-.7-.6z" />
        <path fill="#bd8c8c" d="M263.4 280l.7.6-.8-.6z" />
        <path fill="#a5847b" d="M264 280l.8.6-.8-.6z" />
        <path fill="#9c5a52" d="M264.8 280l.6.6-.6-.6z" />
        <path fill="#ad3931" d="M265.5 280l.7.6-.7-.6z" />
        <path fill="#b51010" d="M266.2 280l.7.6-.7-.6m9.8 0l.7.6-.7-.6z" />
        <path fill="#00216b" d="M276.7 280l.7.6-.7-.6z" />
        <path fill="#296300" d="M288.7 280l.7.6-.7-.6z" />
        <path fill="#103900" d="M290.3 280.4l.2.5-.2-.5z" />
        <path fill="#297b00" d="M291.5 280l.7.6-.7-.6z" />
        <path fill="#082108" d="M292.2 280l.7.6-.7-.6z" />
        <path fill="#184a00" d="M295.7 280v2h.7l-.7-2z" />
        <path fill="#103900" d="M304.9 280l.7.6-.8-.6z" />
        <path fill="#297b00" d="M315.4 280l.7.6-.7-.6z" />
        <path fill="#185200" d="M316.1 280l.7.6-.7-.6z" />
        <path fill="#425242" d="M316.8 280l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M317.5 280l.7.6-.7-.6z" />
        <path fill="#efefef" d="M318.2 280l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M198 280.6l.6.7-.7-.7z" />
        <path fill="#7b1008" d="M198.6 280.6l.7.7-.7-.7z" />
        <path fill="#941808" d="M200 280.6l.7.7-.7-.7z" />
        <path fill="#213918" d="M200.7 280.6l.7.7-.7-.7z" />
        <path fill="#314231" d="M202.8 280.6l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M205.7 280.6l.7.7-.7-.7z" />
        <path fill="#efefef" d="M206.4 280.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M207 280.6l.8.7-.7-.7m2 0l.8.7-.7-.7m2 0l-1.3 2.7h.7l.7-2.7z" />
        <path fill="#397b00" d="M212 280.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M213.9 280.9l.4.2-.4-.2z" />
        <path fill="#397b00" d="M217 280.6l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M217.6 280.6l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M231.7 280.6l.7.7-.7-.7z" />
        <path fill="#941808" d="M232.4 280.6l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M246.5 280.6l.7.7-.7-.7z" />
        <path fill="#8c6363" d="M253.5 280.6l.7.7-.7-.7z" />
        <path fill="#a51008" d="M258 281l.2.5-.2-.4z" />
        <path fill="#520808" d="M259.8 280.6l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M262 280.6l.6.7-.7-.7z" />
        <path fill="#7b1008" d="M275.3 280.6l.7.7-.7-.7z" />
        <path fill="#002984" d="M276 280.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M288.7 280.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M292.2 280.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M300.6 280.6l.7.7-.7-.7z" />
        <path fill="#296300" d="M303.4 280.6l.8.7-.8-.7z" />
        <path fill="#103900" d="M304.1 280.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M314 280.6l.7.7-.7-.7z" />
        <path fill="#214210" d="M314.7 280.6l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M315.4 280.6l.7.7-.7-.7z" />
        <path fill="#dedede" d="M316.1 280.6l.7.7-.7-.7z" />
        <path fill="#cecece" d="M198.6 281.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M199.3 281.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M200 281.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M200.7 281.3l.7.7-.7-.7z" />
        <path fill="#294200" d="M201.4 281.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M202.8 281.3l.7.7-.7-.7z" />
        <path fill="#292921" d="M203.6 281.3l.7.7-.8-.7z" />
        <path fill="#8c8c8c" d="M205.7 281.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M206.4 281.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M207 281.3l.8.7-.7-.7z" />
        <path fill="#294200" d="M211.3 281.3l.7.7-.7-.7z" />
        <path fill="#103900" d="M212.7 281.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M213.4 281.3l.7.7-.7-.7z" />
        <path fill="#314231" d="M217 281.3l-1.5 2 1.4-2z" />
        <path fill="#ad1810" d="M233.1 281.3l.7.7-.7-.7z" />
        <path fill="#941808" d="M233.8 281.3l.7.7-.7-.7z" />
        <path fill="#a51008" d="M246.5 281.3l.7.7-.7-.7z" />
        <path fill="#8c7373" d="M253.5 281.3l.7.7-.7-.7z" />
        <path fill="#6b0808" d="M259.8 281.3l.7.7-.7-.7z" />
        <path fill="#b51010" d="M262 281.3l.6.7-.7-.7z" />
        <path fill="#ad1810" d="M273.9 281.3l.7.7-.7-.7z" />
        <path fill="#291029" d="M274.6 281.3l.7.7-.7-.7z" />
        <path fill="#29396b" d="M287.3 281.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M288.7 281.3l.7.7-.7-.7z" />
        <path fill="#296300" d="M290 281.3l.8.7-.7-.7z" />
        <path fill="#297b00" d="M290.8 281.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M292.2 281.3l.7.7-.7-.7m10.5 0l.7.7-.7-.7z" />
        <path fill="#185200" d="M303.4 281.3l.8.7-.8-.7z" />
        <path fill="#297b00" d="M309 281.3l1.5 1.3-1.4-1.3z" />
        <path fill="#185200" d="M309.8 281.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M310.5 281.3v.7h2.8l-2.8-.7z" />
        <path fill="#185200" d="M313.3 281.3l.7.7-.7-.7z" />
        <path fill="#296300" d="M314 281.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M314.7 281.3v.7h2.1l-2.1-.7z" />
        <path fill="#4a6342" d="M316.8 281.3v.7h2.1l-2-.7z" />
        <path fill="#7b8c73" d="M319 281.3l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M319.6 281.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M320.3 281.3l.7.7-.7-.7z" />
        <path fill="#efefef" d="M198.6 282l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M201.4 282l.7.6-.7-.6z" />
        <path fill="#294200" d="M203.6 282l.7.6-.8-.6z" />
        <path fill="#295200" d="M205 282l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M205.7 282l.7.6-.7-.6z" />
        <path fill="#733939" d="M206.4 282l.7.6-.7-.6z" />
        <path fill="#397b00" d="M211.3 282l.7.6-.7-.6z" />
        <path fill="#103900" d="M212 282l.7.6-.7-.6z" />
        <path fill="#efefef" d="M217 282l-.8 1.3.7-1.3z" />
        <path fill="#b51010" d="M234.5 282l.7.6-.7-.6z" />
        <path fill="#941808" d="M235.2 282l.7.6-.7-.6z" />
        <path fill="#b51010" d="M236 282l1.3 1.3-1.4-1.3z" />
        <path fill="#ce1810" d="M246.5 282l.7.6-.7-.6z" />
        <path fill="#00216b" d="M247.2 282l.7.6-.7-.6z" />
        <path fill="#425a84" d="M250 282l.7.6-.7-.6z" />
        <path fill="#b5adad" d="M253.5 282l.7.6-.7-.6z" />
        <path fill="#b51010" d="M257.7 282l.7.6-.7-.6z" />
        <path fill="#940008" d="M260.3 282.2l.5.2-.5-.2z" />
        <path fill="#ad0008" d="M261.2 282l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M262 282l1.3 1.3-1.4-1.3z" />
        <path fill="#ce1810" d="M271.8 282l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M272.5 282l.7.6-.7-.6z" />
        <path fill="#00184a" d="M273.2 282l.7.6-.7-.6z" />
        <path fill="#42425a" d="M287.3 282l.7.6-.7-.6z" />
        <path fill="#396321" d="M288.7 282l.7.6-.7-.6z" />
        <path fill="#184a00" d="M290.8 282v2h.7l-.7-2z" />
        <path fill="#296300" d="M292.2 282l.7.6-.7-.6z" />
        <path fill="#297b00" d="M292.9 282l-.7 1.3.7-1.3z" />
        <path fill="#296300" d="M295.7 282v3.3h1.4l-1.4-3.3z" />
        <path fill="#297b00" d="M296.4 282l.7.6-.7-.6z" />
        <path fill="#103900" d="M302 282l-1.4 2 1.4-2z" />
        <path fill="#297b00" d="M302.7 282l.7.6-.7-.6z" />
        <path fill="#296300" d="M307.9 282.4l.2.5-.2-.5z" />
        <path fill="#103900" d="M308.4 282l.7.6-.7-.6z" />
        <path fill="#185200" d="M309 282l.8.6-.7-.6z" />
        <path fill="#297b00" d="M319 282l.6.6-.7-.6z" />
        <path fill="#184a00" d="M319.6 282l.7.6-.7-.6z" />
        <path fill="#313931" d="M320.3 282l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M198.6 282.6l.7.7-.7-.7z" />
        <path fill="#63636b" d="M199.3 282.6l.7.7-.7-.7z" />
        <path fill="#efefef" d="M200 282.6l.7.7-.7-.7z" />
        <path fill="#cecece" d="M201.4 282.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M202.1 282.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M204.5 283l.2.5-.2-.4z" />
        <path fill="#7b1008" d="M205 282.6l.7.7-.7-.7z" />
        <path fill="#de2110" d="M205.9 283l.2.5-.2-.4z" />
        <path fill="#631808" d="M206.6 283l.2.5-.2-.4z" />
        <path fill="#294200" d="M209.2 282.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M214.8 282.6l.7.7-.7-.7z" />
        <path fill="#946b63" d="M220.4 282.6l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M236 282.6l.6.7-.7-.7z" />
        <path fill="#941808" d="M237.3 282.6l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M238 282.6l.7.7-.7-.7z" />
        <path fill="#a51008" d="M238.7 282.6l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M239.4 282.6v.7h5.7l-5.7-.7z" />
        <path fill="#941808" d="M245 282.6l.8.7-.7-.7z" />
        <path fill="#a51008" d="M245.8 282.6l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M246.5 282.6l.7.7-.7-.7z" />
        <path fill="#00184a" d="M247.2 282.6l.7.7-.7-.7m3 .5l.3.4-.3-.4z" />
        <path fill="#bdbdbd" d="M253.5 282.6l.7.7-.7-.7z" />
        <path fill="#ce1810" d="M254.4 283l.3.5-.3-.4z" />
        <path fill="#000818" d="M260.5 282.6l.7.7-.7-.7z" />
        <path fill="#00184a" d="M261.2 282.6l.7.7-.7-.7z" />
        <path fill="#080829" d="M262 282.6l.6.7-.7-.7z" />
        <path fill="#ce1810" d="M263.4 282.6l.7.7-.8-.7z" />
        <path fill="#b51010" d="M269 282.6l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M269.7 282.6l.7.7-.7-.7z" />
        <path fill="#5a1021" d="M270.4 282.6l.7.7-.7-.7z" />
        <path fill="#00215a" d="M271 282.6l.8.7-.7-.7z" />
        <path fill="#292921" d="M287.3 282.6l.7.7-.7-.7z" />
        <path fill="#5a7b42" d="M288.7 282.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M292.9 282.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M302 282.6l.7.7-.7-.7m3.6 0l1.4 1.4-1.4-1.4z" />
        <path fill="#185200" d="M306.3 282.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M307 282.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M315.4 282.6l.7.7-.7-.7z" />
        <path fill="#296300" d="M316.1 282.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M316.8 282.6l.7.7-.7-.7z" />
        <path fill="#395231" d="M317.5 282.6l.7.7-.7-.7z" />
        <path fill="#63636b" d="M318.2 282.6l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M319 282.6l.6.7-.7-.7z" />
        <path fill="#dedede" d="M319.6 282.6l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M198.6 283.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M199.3 283.3l.7.7-.7-.7z" />
        <path fill="#294200" d="M200 283.3l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M200.7 283.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M201.4 283.3l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M202.1 283.3l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M205 283.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M209 283.5l.4.2-.5-.2z" />
        <path fill="#396b10" d="M214.1 283.3l.7.7-.7-.7z" />
        <path fill="#b51010" d="M239.4 283.3l.7.7-.7-.7zm5 0l.6.7-.7-.7z" />
        <path fill="#391810" d="M247.2 283.3l.7.7-.7-.7z" />
        <path fill="#dedede" d="M253.5 283.3l.7.7-.7-.7z" />
        <path fill="#291029" d="M260.5 283.3l.7.7-.7-.7z" />
        <path fill="#002984" d="M264 283.3v.7h5l-5-.7z" />
        <path fill="#082108" d="M287.3 283.3l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M288 283.3l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M289 283.8l.1.4-.2-.5z" />
        <path fill="#184a00" d="M293.1 283.8l.3.4-.3-.5z" />
        <path fill="#297b00" d="M301.3 283.3l.7.7-.7-.7z" />
        <path fill="#185200" d="M304.9 283.3l.7.7-.8-.7z" />
        <path fill="#103900" d="M305.6 283.3l.7.7-.7-.7z" />
        <path fill="#297b00" d="M311.9 283.3l.7.7-.7-.7z" />
        <path fill="#296300" d="M312.6 283.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M313.3 283.3l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M314 283.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M314.7 283.3l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M315.4 283.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M316.1 283.3l.7.7-.7-.7z" />
        <path fill="#cecece" d="M198.6 284l.7.7-.7-.7z" />
        <path fill="#295200" d="M199.3 284l.7.7-.7-.7z" />
        <path fill="#292100" d="M200 284l.7.7-.7-.7z" />
        <path fill="#397b00" d="M200.7 284l1.4 1.3V284h-1.4z" />
        <path fill="#292100" d="M202.1 284l.7.7-.7-.7z" />
        <path fill="#397b00" d="M202.8 284l.7.7-.7-.7z" />
        <path fill="#392100" d="M205 284l.7.7-.7-.7z" />
        <path fill="#b51010" d="M205.7 284l.7.7-.7-.7z" />
        <path fill="#5a2908" d="M206.4 284l.7.7-.7-.7z" />
        <path fill="#294200" d="M208.5 284l.7.7-.7-.7z" />
        <path fill="#214210" d="M212.7 284l.7.7-.7-.7z" />
        <path fill="#63636b" d="M213.4 284l.7.7-.7-.7z" />
        <path fill="#dedede" d="M214.1 284l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M247.2 284l.7.7-.7-.7z" />
        <path fill="#00215a" d="M247.9 284l.7.7-.7-.7m2 0l.8.7-.7-.7z" />
        <path fill="#dedede" d="M250.7 284l.7.7-.7-.7z" />
        <path fill="#a51008" d="M254.2 284l.7.7-.7-.7z" />
        <path fill="#390821" d="M260.5 284l.7.7-.7-.7z" />
        <path fill="#184a00" d="M287.3 284l1.4 1.3-1.4-1.3z" />
        <path fill="#5a6b52" d="M288 284l.7.7-.7-.7z" />
        <path fill="#185200" d="M290.8 284l.7.7-.7-.7z" />
        <path fill="#297b00" d="M291.5 284l-.7 1.3.7-1.3z" />
        <path fill="#185200" d="M299.2 286l2.1-2-2 2z" />
        <path fill="#297b00" d="M303.4 284l1.5 1.3-1.5-1.3z" />
        <path fill="#103900" d="M304.1 284l.7.7-.7-.7z" />
        <path fill="#296300" d="M304.9 284l.7.7-.8-.7m5.7 0l.7.7-.7-.7z" />
        <path fill="#315221" d="M311.2 284l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M311.9 284l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M312.6 284l.7.7-.7-.7z" />
        <path fill="#dedede" d="M190.9 284.6l.7.7-.7-.7z" />
        <path fill="#efefef" d="M191.6 284.6l.7.7-.7-.7z" />
        <path fill="#315221" d="M199.3 284.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M200.7 284.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M202.8 284.6l.7.7-.7-.7z" />
        <path fill="#294200" d="M203.6 284.6l.7 2h.6l-1.4-2z" />
        <path fill="#397b00" d="M205.7 284.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M206.4 284.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M208.2 284.9l.5.2-.5-.2m2.4-.2l.7.6-.7-.7z" />
        <path fill="#315221" d="M211.3 284.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M212 284.6l.7.7-.7-.7z" />
        <path fill="#dedede" d="M212.7 284.6l.7.7-.7-.7z" />
        <path fill="#391810" d="M247.9 284.6l.7.7-.7-.7z" />
        <path fill="#00216b" d="M250 284.6l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M250.7 284.6l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M254.2 284.6l.7.7-.7-.7z" />
        <path fill="#b51010" d="M257.7 284.6l.7.7-.7-.7z" />
        <path fill="#6b0808" d="M260.5 284.6l.7.7-.7-.7z" />
        <path fill="#395231" d="M288.7 284.6l.7.7-.7-.7z" />
        <path fill="#296300" d="M291.5 284.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M292.9 284.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M293.6 284.6l-.7 1.4.7-1.4z" />
        <path fill="#296300" d="M302.7 284.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M303.4 284.6l.8.7-.8-.7z" />
        <path fill="#185200" d="M309 284.6l.8.7-.7-.7z" />
        <path fill="#425242" d="M309.8 284.6l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M310.5 284.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M190.9 285.3l.7.7-.7-.7z" />
        <path fill="#293129" d="M191.6 285.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M192.3 285.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M193 285.3l.7.7-.7-.7z" />
        <path fill="#efefef" d="M193.7 285.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M199.3 285.3l.7.7-.7-.7z" />
        <path fill="#295200" d="M201.4 285.3l.7.7-.7-.7z" />
        <path fill="#294200" d="M202.1 285.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M203.6 285.3l.7.7-.8-.7z" />
        <path fill="#294200" d="M207.8 285.3l.7.7-.7-.7z" />
        <path fill="#295200" d="M209.9 285.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M210.6 285.3l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M212 285.3l.7.7-.7-.7z" />
        <path fill="#314231" d="M212.7 285.3l.7.7-.7-.7z" />
        <path fill="#dedede" d="M218.3 285.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M219 285.3l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M223.3 285.3l.6.7-.7-.7z" />
        <path fill="#10214a" d="M248.6 285.3l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M250.7 285.3l.7.7-.7-.7z" />
        <path fill="#943131" d="M254.4 285.8l.3.4-.3-.4z" />
        <path fill="#a51008" d="M257.7 285.3l.7.7-.7-.7z" />
        <path fill="#297b00" d="M288 285.3l.7.7-.7-.7z" />
        <path fill="#082108" d="M288.7 285.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M291.7 285.8l.3.4-.3-.4z" />
        <path fill="#296300" d="M293.6 285.3l.7.7-.7-.7z" />
        <path fill="#297b00" d="M296.2 285.5l.5.3-.5-.3m2.3-.2l.7.7-.7-.7z" />
        <path fill="#184a00" d="M302 285.3l.7.7-.7-.7z" />
        <path fill="#185200" d="M302.7 285.3l.7.7-.7-.7z" />
        <path fill="#297b00" d="M307.7 285.3l.7.7-.7-.7z" />
        <path fill="#294221" d="M308.4 285.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M309 285.3l.8.7-.7-.7z" />
        <path fill="#cecece" d="M190.9 286l.7.7-.7-.7z" />
        <path fill="#295200" d="M191.6 286l.7.7-.7-.7zm2.1 0l.7.7-.7-.7z" />
        <path fill="#294200" d="M194.9 286.2l.4.2-.4-.2z" />
        <path fill="#526b42" d="M195.8 286l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M196.5 286l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M197.2 286l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M198 286l.6.7-.7-.7z" />
        <path fill="#dedede" d="M198.6 286l.7.7-.7-.7z" />
        <path fill="#efefef" d="M199.3 286l.7.7-.7-.7z" />
        <path fill="#315221" d="M200 286l-.7 1.3.7-1.3z" />
        <path fill="#397b00" d="M202.1 286l.7.7-.7-.7z" />
        <path fill="#103900" d="M202.8 286l.7.7-.7-.7z" />
        <path fill="#295200" d="M207.8 286l.7.7-.7-.7z" />
        <path fill="#397b00" d="M209.2 286l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M209.9 286l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M212 286l.7.7-.7-.7z" />
        <path fill="#397b00" d="M212.7 286v2.7h.7l-.7-2.7z" />
        <path fill="#63636b" d="M213.4 286l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M218.3 286l.7.7-.7-.7z" />
        <path fill="#213918" d="M219 286l1.4 1.3-1.4-1.3z" />
        <path fill="#cecece" d="M219.7 286l.7.7-.7-.7z" />
        <path fill="#941808" d="M222.5 286l-1.4 2 1.4-2z" />
        <path fill="#181000" d="M223.3 286l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M248.6 286l.7.7-.7-.7z" />
        <path fill="#00216b" d="M249.3 286l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M250.7 286l.7.7-.7-.7z" />
        <path fill="#b51010" d="M257.7 286l.7.7-.7-.7z" />
        <path fill="#319400" d="M288 286v2h.7l-.7-2z" />
        <path fill="#103900" d="M288.7 286l.7.7-.7-.7z" />
        <path fill="#184a00" d="M293.8 286.4l.3.5-.3-.5z" />
        <path fill="#297b00" d="M299.2 288l3.5-2-3.5 2z" />
        <path fill="#103900" d="M301.3 286l.7.7-.7-.7z" />
        <path fill="#296300" d="M307 286l.7.7-.7-.7z" />
        <path fill="#52525a" d="M307.7 286l.7.7-.7-.7z" />
        <path fill="#efefef" d="M308.4 286l.7.7-.7-.7z" />
        <path fill="#315221" d="M191.6 286.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M198 286.6l.6.7-.7-.7z" />
        <path fill="#295200" d="M198.6 286.6l.7.7-.7-.7z" />
        <path fill="#52525a" d="M200 286.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M200.7 286.6l2.1 2-2-2z" />
        <path fill="#294200" d="M203.6 286.6l.7.7-.8-.7z" />
        <path fill="#103900" d="M205 286.6l.7.7-.7-.7z" />
        <path fill="#52525a" d="M209.2 286.6l.7.7-.7-.7z" />
        <path fill="#dedede" d="M211.3 286.6l.7.7-.7-.7z" />
        <path fill="#294200" d="M212 286.6l.7.7-.7-.7z" />
        <path fill="#428c00" d="M212.7 286.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M214.1 286.6l.7.7-.7-.7z" />
        <path fill="#63636b" d="M218.3 286.6l.7.7-.7-.7z" />
        <path fill="#428c00" d="M219 286.6c-2.2 4.7-4.7 9.8 1.4 12.8 0-4 1.5-9.7-1.4-12.7z" />
        <path fill="#bd2110" d="M221.1 286.6l.7.7-.7-.7z" />
        <path fill="#295200" d="M222.5 286.6l.7.7-.7-.7z" />
        <path fill="#397b00" d="M223.3 286.6l-.8 1.4h1.5l-.7-1.4z" />
        <path fill="#b51010" d="M224 286.6l.6.7-.7-.7z" />
        <path fill="#31394a" d="M249.3 286.6l.7.7-.7-.7z" />
        <path fill="#525a6b" d="M250.7 286.6l.7.7-.7-.7z" />
        <path fill="#8c7373" d="M254.4 287.1l.3.5-.3-.5z" />
        <path fill="#a51008" d="M257.7 286.6l.7.7-.7-.7z" />
        <path fill="#002984" d="M286 287.1l.3.5-.2-.5z" />
        <path fill="#00216b" d="M286.6 286.6l.7.7-.7-.7z" />
        <path fill="#001000" d="M287.3 286.6l.7.7-.7-.7z" />
        <path fill="#184a00" d="M288.7 286.6l.7.7-.7-.7z" />
        <path fill="#185200" d="M291.5 286.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M296.4 286.6l-.7 1.4.7-1.4z" />
        <path fill="#103900" d="M300.6 286.6l.7.7-.7-.7z" />
        <path fill="#297b00" d="M305.6 286.6l.7.7-.7-.7z" />
        <path fill="#103900" d="M306.3 286.6l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M307 286.6l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M307.7 286.6l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M308.8 286.9l.5.2-.5-.2z" />
        <path fill="#4a6342" d="M310.3 286.9l.4.2-.4-.2z" />
        <path fill="#295210" d="M311.2 286.6l.7.7-.7-.7z" />
        <path fill="#184a00" d="M311.9 286.6l.7.7-.7-.7z" />
        <path fill="#296300" d="M312.6 286.6v.7h3.5l-3.5-.7z" />
        <path fill="#184a00" d="M316.1 286.6l.7.7-.7-.7z" />
        <path fill="#082108" d="M316.8 286.6l.7.7-.7-.7z" />
        <path fill="#313931" d="M317.5 286.6l.7.7-.7-.7z" />
        <path fill="#63636b" d="M318.2 286.6l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M319 286.6l.6.7-.7-.7m-127.3.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M193.7 287.3l.7.7-.7-.7z" />
        <path fill="#294200" d="M194.9 287.6l.4.2-.4-.2z" />
        <path fill="#397b00" d="M196 287.8l.3.4-.3-.4z" />
        <path fill="#292100" d="M200.7 287.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M205 287.3l-.7 2h.7v-2m3.5 0l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M209.2 287.3l.7.7-.7-.7z" />
        <path fill="#425242" d="M211.3 287.3l.7.7-.7-.7z" />
        <path fill="#428c00" d="M212 287.3c-1.7 4.3-1.2 6.9 1.4 10.7h.7v-10.7h-.7v8H212v-8z" />
        <path fill="#315221" d="M214.1 287.3l.7.7-.7-.7z" />
        <path fill="#efefef" d="M217.6 287.3l.7.7-.7-.7z" />
        <path fill="#396b10" d="M218.3 287.3l.7.7-.7-.7z" />
        <path fill="#293129" d="M220.4 287.3l.7.7-.7-.7z" />
        <path fill="#293100" d="M221.8 287.3l.7.7-.7-.7z" />
        <path fill="#631808" d="M224 287.3l.6.7-.7-.7z" />
        <path fill="#cecece" d="M249.3 287.3l.7.7-.7-.7z" />
        <path fill="#001039" d="M250 287.3l.7.7-.7-.7z" />
        <path fill="#42425a" d="M250.7 287.3l.7.7-.7-.7z" />
        <path fill="#520808" d="M257.7 287.3l.7.7-.7-.7z" />
        <path fill="#6b5252" d="M258.4 287.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M259.1 287.3l.7.7-.7-.7z" />
        <path fill="#290018" d="M259.8 287.3l.7.7-.7-.7z" />
        <path fill="#420000" d="M260.5 287.3l.7.7-.7-.7z" />
        <path fill="#001010" d="M286.6 287.3l.7.7-.7-.7z" />
        <path fill="#292921" d="M287.3 287.3l.7.7-.7-.7z" />
        <path fill="#185200" d="M288.7 287.3l1.4 1.4-1.4-1.4z" />
        <path fill="#297b00" d="M289.4 287.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M291.5 287.3v2h.7l-.7-2z" />
        <path fill="#185200" d="M293.6 287.3l.7.7-.7-.7z" />
        <path fill="#103900" d="M300 287.3l.6.7-.7-.7z" />
        <path fill="#297b00" d="M303.4 287.3l.8.7-.8-.7z" />
        <path fill="#184a00" d="M304.1 287.3v.7h2.2l-2.2-.7z" />
        <path fill="#296300" d="M306.7 287.6l.5.2-.5-.2z" />
        <path fill="#297b00" d="M307.7 287.3l.7.7-.7-.7m4.9 0l.7.7-.7-.7z" />
        <path fill="#185200" d="M313.3 287.3l.7.7-.7-.7z" />
        <path fill="#315221" d="M314 287.3l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M314.7 287.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M315.4 287.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M316.1 287.3l.7.7-.7-.7z" />
        <path fill="#425242" d="M192.3 288l.7.7-.7-.7z" />
        <path fill="#103900" d="M201.4 288l.7.7-.7-.7z" />
        <path fill="#294200" d="M205 288l.7.7-.7-.7m3.5 0l1.4 1.3-1.4-1.3z" />
        <path fill="#5a5231" d="M209.2 288l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M210.6 288l.7.7-.7-.7z" />
        <path fill="#397b00" d="M211.3 288l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M214.8 288l.7.7-.7-.7z" />
        <path fill="#52525a" d="M217.6 288l.7.7-.7-.7z" />
        <path fill="#294200" d="M219.3 288.4l.2.5-.2-.5z" />
        <path fill="#295200" d="M220.4 288l.7.7-.7-.7z" />
        <path fill="#100808" d="M221.1 288l.7.7-.7-.7z" />
        <path
          fill="#428c00"
          d="M221.8 288l-.7 10.7 2.1-2h.8l-.7 2.7c5.5-1.6 6.5-5.2 4.9-10l-3.5 7.3h-.7V288h-.7l-1.4 7.4V288z"
        />
        <path fill="#295200" d="M222.5 288l.7.7-.7-.7z" />
        <path fill="#293100" d="M224 288l.6.7-.7-.7z" />
        <path fill="#ce2110" d="M227.5 288l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M228.2 288l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M250 288l.7.7-.7-.7z" />
        <path fill="#080829" d="M250.7 288l.7.7-.7-.7z" />
        <path fill="#c6b5b5" d="M254.2 288l.7.7-.7-.7z" />
        <path fill="#b51010" d="M257 288l.7.7-.7-.7z" />
        <path fill="#cecece" d="M257.7 288l.7.7-.7-.7z" />
        <path fill="#103900" d="M286.6 288l.7.7-.7-.7z" />
        <path fill="#63636b" d="M287.3 288l.7.7-.7-.7z" />
        <path fill="#297b00" d="M288.4 288.2l.5.2-.5-.2z" />
        <path fill="#184a00" d="M293.6 288l.7.7-.7-.7z" />
        <path fill="#185200" d="M295.7 288l.7.7-.7-.7z" />
        <path fill="#184a00" d="M299.2 288l.7.7-.7-.7z" />
        <path fill="#185200" d="M302 288l.7.7-.7-.7z" />
        <path fill="#103900" d="M302.7 288l.7.7-.7-.7z" />
        <path fill="#185200" d="M303.4 288l.8.7-.8-.7z" />
        <path fill="#297b00" d="M309.8 288l.7.7-.7-.7z" />
        <path fill="#185200" d="M310.5 288l.7.7-.7-.7z" />
        <path fill="#315221" d="M311.2 288l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M311.9 288l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M312.6 288l.7.7-.7-.7z" />
        <path fill="#dedede" d="M313.3 288l.7.7-.7-.7z" />
        <path fill="#cecece" d="M192.3 288.7l1.4 1.3-1.4-1.3z" />
        <path fill="#214210" d="M193 288.7l.7.6-.7-.6z" />
        <path fill="#397b00" d="M202.1 288.7l1.4 1.3v-1.3h-1.4z" />
        <path fill="#103900" d="M203.6 288.7l.7.6-.8-.6m2.9 0l-.7 1.3.7-1.3z" />
        <path fill="#397b00" d="M207 288.7l.8.6-.7-.6z" />
        <path fill="#295200" d="M208.5 288.7l.7.6-.7-.6z" />
        <path fill="#213918" d="M210.6 288.7l.7.6-.7-.6z" />
        <path fill="#294200" d="M212.7 288.7v3.3h.7l-.7-3.3z" />
        <path fill="#526b42" d="M214.8 288.7l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M217 288.7l.6.6-.7-.6z" />
        <path fill="#397b00" d="M217.6 288.7l.7.6-.7-.6z" />
        <path fill="#103900" d="M221.1 288.7l.7.6-.7-.6z" />
        <path fill="#294200" d="M222.5 288.7v2.6h.7l-.7-2.6z" />
        <path fill="#397b00" d="M224 288.7l.6.6-.7-.6z" />
        <path fill="#941808" d="M224.7 288.7l.7.6-.8-.6m2.2 0l-.7 1.3.7-1.3z" />
        <path fill="#293100" d="M227.5 288.7l.7.6-.7-.6z" />
        <path fill="#103900" d="M228.2 288.7l.7.6-.7-.6z" />
        <path fill="#efefef" d="M250 288.7l.7.6-.7-.6z" />
        <path fill="#292921" d="M250.7 288.7l.7.6-.7-.6z" />
        <path fill="#efefef" d="M251.4 288.7l.7.6-.7-.6z" />
        <path fill="#842118" d="M257 288.7l.7.6-.7-.6z" />
        <path fill="#293129" d="M287.3 288.7l.7.6-.7-.6z" />
        <path fill="#296300" d="M288 288.7l.7.6-.7-.6z" />
        <path fill="#103900" d="M289.4 288.7l.7.6-.7-.6z" />
        <path fill="#185200" d="M293.6 288.7l.7.6-.7-.6z" />
        <path fill="#103900" d="M295.7 288.7l.7.6-.7-.6z" />
        <path fill="#296300" d="M300.6 288.7l.7.6-.7-.6z" />
        <path fill="#103900" d="M301.3 288.7l.7.6-.7-.6z" />
        <path fill="#296300" d="M302 288.7l.7.6-.7-.6z" />
        <path fill="#297b00" d="M307.7 288.7l.7.6-.7-.6z" />
        <path fill="#103900" d="M308.4 288.7l.7.6-.7-.6z" />
        <path fill="#001000" d="M309 288.7l.8.6-.7-.6z" />
        <path fill="#101810" d="M309.8 288.7l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M310.5 288.7l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M311.6 288.9l.5.2-.5-.2z" />
        <path fill="#214210" d="M193.7 289.3l1.4 1.4-1.4-1.4z" />
        <path fill="#397b00" d="M199.6 289.8l.2.4-.2-.4m9.6-.5l.7.7-.7-.7z" />
        <path fill="#63636b" d="M209.9 289.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M210.6 289.3l.7.7-.7-.7z" />
        <path fill="#294200" d="M215 289.8l.3.4-.3-.4z" />
        <path fill="#dedede" d="M216.2 289.3l.7.7-.7-.7z" />
        <path fill="#214210" d="M217 289.3l.6.7-.7-.7z" />
        <path fill="#295200" d="M219 289.3l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#422100" d="M224.7 289.3l.7.7-.8-.7z" />
        <path fill="#295200" d="M226.8 289.3l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M228.9 289.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M250.7 289.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M251.6 289.8l.3.4-.3-.4z" />
        <path fill="#736b6b" d="M257 289.3l.7.7-.7-.7z" />
        <path fill="#185200" d="M287.3 289.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M288 289.3l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#296300" d="M291.5 289.3l.7 2.7h.7l-1.4-2.7z" />
        <path fill="#297b00" d="M292.2 289.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M293.6 289.3l.7.7-.7-.7z" />
        <path fill="#297b00" d="M295 289.3l.7.7-.7-.7zm4.2 0l1.4 1.4-1.4-1.4z" />
        <path fill="#184a00" d="M300 289.3l.6.7-.7-.7z" />
        <path fill="#185200" d="M300.6 289.3l.7.7-.7-.7z" />
        <path fill="#297b00" d="M305.6 289.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M306.3 289.3v.7l2.8.7v-.7l-2.8-.7z" />
        <path fill="#103900" d="M307 289.3l.7.7-.7-.7z" />
        <path fill="#185200" d="M307.7 289.3l.7.7-.7-.7z" />
        <path fill="#319400" d="M308.4 289.3v.7h2l-2-.7z" />
        <path fill="#297b00" d="M310.7 289.8l.2.4-.2-.4z" />
        <path fill="#296300" d="M311.2 289.3v.7l2.8.7v-.7l-2.8-.7z" />
        <path fill="#185200" d="M312.6 289.3l.7.7-.7-.7z" />
        <path fill="#103900" d="M313.3 289.3l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M314 289.3l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M314.7 289.3l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M315.4 289.3l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M193.7 290l.7.7-.7-.7z" />
        <path fill="#294200" d="M197.7 290.2l.5.2-.5-.2z" />
        <path fill="#295200" d="M198.6 290l.7.7-.7-.7z" />
        <path fill="#292100" d="M205 290l.7.7-.7-.7z" />
        <path fill="#001000" d="M209.9 290l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M216.2 290l.7.7-.7-.7z" />
        <path fill="#294200" d="M219.3 290.4l.2.5-.2-.5z" />
        <path fill="#397b00" d="M220.9 290.2l.5.2-.5-.2z" />
        <path fill="#294200" d="M224.7 290l.7.7-.8-.7z" />
        <path fill="#bd2110" d="M225.4 290l.7.7-.7-.7z" />
        <path fill="#294200" d="M226 290l.8.7-.7-.7z" />
        <path fill="#397b00" d="M228.2 290l.7.7-.7-.7z" />
        <path fill="#941808" d="M228.9 290l.7.7-.7-.7z" />
        <path fill="#efefef" d="M252 290l-.6 1.3.7-1.3z" />
        <path fill="#ce1810" d="M256.3 290l.7.7-.7-.7z" />
        <path fill="#cecece" d="M257 290l.7.7-.7-.7z" />
        <path fill="#297b00" d="M287.3 290l.7.7-.7-.7z" />
        <path fill="#082108" d="M288 290l.7.7-.7-.7z" />
        <path fill="#185200" d="M289.4 290l.7.7-.7-.7z" />
        <path fill="#297b00" d="M290 290l.8.7-.7-.7z" />
        <path fill="#185200" d="M293.6 290l.7.7-.7-.7z" />
        <path fill="#103900" d="M299.2 290l.7.7-.7-.7z" />
        <path fill="#297b00" d="M303.4 290l1.5 1.3-1.5-1.3z" />
        <path fill="#185200" d="M304.1 290l.7.7-.7-.7z" />
        <path fill="#103900" d="M304.9 290l.7.7-.8-.7z" />
        <path fill="#185200" d="M306 290.2l.5.2-.5-.2m3-.2l.8.7-.7-.7z" />
        <path fill="#296300" d="M310 290.4l.2.5-.2-.5z" />
        <path fill="#319400" d="M311.2 290l.7.7-.7-.7z" />
        <path fill="#297b00" d="M311.9 290l.7.7-.7-.7z" />
        <path fill="#185200" d="M314 290l.7.7-.7-.7z" />
        <path fill="#184a00" d="M314.7 290l.7.7-.7-.7z" />
        <path fill="#082108" d="M315.4 290l.7.7-.7-.7z" />
        <path d="M316.1 290l.7.7-.7-.7z" />
        <path fill="#313931" d="M316.8 290l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M317.5 290l.7.7-.7-.7z" />
        <path fill="#dedede" d="M194.6 291.1l.3.5-.3-.5z" />
        <path fill="#52525a" d="M195.1 290.7l.7.6-.7-.6z" />
        <path fill="#294200" d="M195.8 290.7l.7.6-.7-.6z" />
        <path fill="#295200" d="M196.5 290.7l.7.6-.7-.6z" />
        <path fill="#294200" d="M204.3 290.7l.6.6-.7-.6z" />
        <path fill="#397b00" d="M205 290.7l.7.6-.7-.6m3.2.2l.5.2-.5-.2z" />
        <path fill="#294200" d="M210.1 291.1l.2.5-.2-.5z" />
        <path fill="#397b00" d="M214.8 290.7l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M215.5 290.7l.7.6-.7-.6z" />
        <path fill="#295200" d="M216.2 290.7l.7.6-.7-.6z" />
        <path fill="#294200" d="M220.4 290.7v2h.7l-.7-2z" />
        <path fill="#397b00" d="M224.7 290.7v1.3h1.4l-1.4-1.3z" />
        <path fill="#211800" d="M225.4 290.7l.7.6-.7-.6z" />
        <path fill="#294200" d="M227.5 290.7l.7.6-.7-.6z" />
        <path fill="#5a2908" d="M228.9 290.7l.7.6-.7-.6z" />
        <path fill="#63636b" d="M252 290.7l.8.6-.7-.6z" />
        <path fill="#9c2118" d="M256.3 290.7l.7.6-.7-.6z" />
        <path fill="#00216b" d="M285.9 290.7l.7.6-.7-.6z" />
        <path fill="#103910" d="M286.6 290.7l.7.6-.7-.6z" />
        <path fill="#103900" d="M288.2 291.1l.2.5-.2-.5z" />
        <path fill="#296300" d="M289.8 290.9l.5.2-.5-.2z" />
        <path fill="#103900" d="M297.8 290.7l.7.6-.7-.6z" />
        <path fill="#296300" d="M302.3 291.1l.2.5-.2-.5z" />
        <path fill="#103900" d="M303.2 290.9l.5.2-.5-.2z" />
        <path fill="#319400" d="M295 298.7a38 38 0 0119.7-6c-6.5-3.8-17.5-1.5-19.7 6z" />
        <path fill="#297b00" d="M309 290.7l.8.6-.7-.6z" />
        <path fill="#185200" d="M310.5 290.7l.7.6-.7-.6z" />
        <path fill="#103900" d="M311.2 290.7l.7.6-.7-.6z" />
        <path fill="#293129" d="M311.9 290.7l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M312.6 290.7l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M313.3 290.7l.7.6-.7-.6z" />
        <path fill="#314231" d="M195.1 291.3l.7.7-.7-.7z" />
        <path fill="#295200" d="M201.4 291.3l.7.7-.7-.7z" />
        <path fill="#294200" d="M202.1 291.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M203.6 291.3l.7.7-.8-.7z" />
        <path fill="#295200" d="M204.3 291.3l.6.7-.7-.7m3.6 0l.7.7-.7-.7z" />
        <path fill="#294200" d="M214.8 291.3l.7.7-.7-.7z" />
        <path fill="#63636b" d="M215.5 291.3l.7.7-.7-.7z" />
        <path fill="#397b00" d="M218.8 291.6l.5.2-.5-.2m3.7-.3v2h.7l-.7-2z" />
        <path fill="#295200" d="M226.8 291.3l.7.7-.7-.7z" />
        <path fill="#293100" d="M228.9 291.3l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M252 291.3l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M252.8 291.3l.7.7-.7-.7z" />
        <path fill="#8c6363" d="M256.3 291.3l.7.7-.7-.7z" />
        <path fill="#00184a" d="M285.1 291.3l.7.7-.7-.7z" />
        <path fill="#21315a" d="M285.9 291.3l.7.7-.7-.7z" />
        <path fill="#5a7b42" d="M286.6 291.3l.7.7-.7-.7z" />
        <path fill="#184a00" d="M290 291.3l.8.7-.7-.7z" />
        <path fill="#297b00" d="M291.5 291.3l.7.7-.7-.7z" />
        <path fill="#185200" d="M300.6 291.3l.7.7-.7-.7z" />
        <path fill="#103900" d="M301.3 291.3l.7.7-.7-.7z" />
        <path fill="#297b00" d="M312.6 291.3l.7.7-.7-.7z" />
        <path fill="#103900" d="M313.3 291.3l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M314 291.3l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M314.7 291.3l.7.7-.7-.7z" />
        <path fill="#dedede" d="M315.4 291.3l.7.7-.7-.7z" />
        <path fill="#efefef" d="M193.7 292l.7.7-.7-.7z" />
        <path fill="#314231" d="M194.4 292l.7.7-.7-.7z" />
        <path fill="#295200" d="M200 292l.7.7-.7-.7z" />
        <path fill="#103900" d="M200.7 292l.7.7-.7-.7z" />
        <path fill="#397b00" d="M201.4 292l.7.7-.7-.7z" />
        <path fill="#103900" d="M203.6 292l.7.7-.8-.7z" />
        <path fill="#294200" d="M208 292.5l.2.4-.2-.4z" />
        <path fill="#295200" d="M209.9 292l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#526b42" d="M215.3 292.2l.4.3-.4-.3z" />
        <path fill="#295200" d="M218.3 292l.7.7-.7-.7z" />
        <path fill="#294200" d="M224.9 292.5l.2.4-.2-.4m2.1 0l.2.4-.2-.4z" />
        <path fill="#397b00" d="M228.9 292l.7.7-.7-.7z" />
        <path fill="#b51010" d="M242.2 292l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M243 292l.6.7-.7-.7z" />
        <path fill="#63636b" d="M252.8 292l.7.7-.7-.7z" />
        <path fill="#dedede" d="M256.3 292l.7.7-.7-.7z" />
        <path fill="#00216b" d="M283.8 292l.6.7-.6-.7z" />
        <path d="M285.1 292l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M285.9 292l.7.7-.7-.7z" />
        <path fill="#396321" d="M286.6 292l.7.7-.7-.7z" />
        <path fill="#185200" d="M288 292l.7.7-.7-.7z" />
        <path fill="#297b00" d="M288.7 292l.7.7-.7-.7z" />
        <path fill="#185200" d="M290 292l.8.7-.7-.7m2 0l.8.7-.7-.7m3.5 0l.7.7-.7-.7z" />
        <path fill="#296300" d="M299.2 292l.7.7-.7-.7z" />
        <path fill="#103900" d="M300 292l.6.7-.7-.7z" />
        <path fill="#296300" d="M300.6 292l.7.7-.7-.7z" />
        <path fill="#297b00" d="M314.7 292l.7.7-.7-.7z" />
        <path fill="#185200" d="M315.4 292l.7.7-.7-.7z" />
        <path fill="#314231" d="M316.1 292l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M316.8 292l.7.7-.7-.7z" />
        <path fill="#424242" d="M193.7 292.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M198 292.7l.6.7-.7-.7z" />
        <path fill="#294200" d="M199 292.9l.6.2-.5-.2z" />
        <path fill="#397b00" d="M200 292.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M202.8 292.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M210.1 293.1l.2.5-.2-.5z" />
        <path fill="#397b00" d="M212 292.7v2.7h1.4v-2.7H212z" />
        <path fill="#6b735a" d="M214.8 292.7l.7.7-.7-.7z" />
        <path fill="#396b10" d="M215.5 292.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M218.3 292.7v3.3h.7l-.7-3.3z" />
        <path fill="#295200" d="M220.7 293.1l.2.5-.2-.5z" />
        <path fill="#392100" d="M242.2 292.7l.7.7-.7-.7z" />
        <path fill="#292100" d="M243 292.7l.6.7-.7-.7z" />
        <path fill="#9c9494" d="M252.8 292.7l.7.7-.7-.7z" />
        <path fill="#cecece" d="M253.5 292.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M254.2 292.7l-.7 1.3.7-1.3z" />
        <path fill="#bd0008" d="M254.9 292.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M255.6 292.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M271.8 292.7l-.7 1.3.7-1.3z" />
        <path fill="#002984" d="M272.7 293.1l.3.5-.3-.5m7.5-.4l.7.6-.7-.6z" />
        <path fill="#00184a" d="M281 292.7l2.7 2v-.7l-2.8-1.3z" />
        <path fill="#001010" d="M283.8 292.7l.6.7-.6-.7z" />
        <path fill="#002984" d="M284.4 292.7l.8.7-.8-.7z" />
        <path fill="#103900" d="M285.1 292.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M285.9 292.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M286.8 293.1l.2.5-.2-.5z" />
        <path fill="#296300" d="M288.4 292.9l.5.2-.5-.2z" />
        <path fill="#184a00" d="M290 292.7l.8.7-.7-.7z" />
        <path fill="#297b00" d="M291.5 292.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M292.2 292.7l-.7 2.7.7-2.7z" />
        <path fill="#103900" d="M294.3 292.7l.7.7-.7-.7z" />
        <path fill="#319400" d="M295.2 293.1l.3.5-.3-.5z" />
        <path fill="#103900" d="M295.7 292.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M297.1 293.4v.6h2.1l-2-.6z" />
        <path fill="#103900" d="M298.5 292.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M299.2 292.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M307 292.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M307.7 292.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M308.4 292.7l-1.4.7v.6l1.4-1.3z" />
        <path fill="#315221" d="M309 292.7l.8.7-.7-.7z" />
        <path fill="#4a6342" d="M309.8 292.7v.7h4.9l-5-.7z" />
        <path fill="#295210" d="M314.7 292.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M315.4 292.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M316.1 292.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M316.8 292.7l.7.7-.7-.7z" />
        <path fill="#294221" d="M317.5 292.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M318.2 292.7l.7.7-.7-.7m-125.2.7l.7.6-.7-.6z" />
        <path fill="#397b00" d="M193.7 293.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M196.5 293.4l.7.6-.7-.6z" />
        <path fill="#294200" d="M197.2 293.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M198 293.4l.6.6-.7-.6z" />
        <path fill="#292100" d="M202.1 293.4l.7.6-.7-.6m5.7 0l.7.6-.7-.6z" />
        <path fill="#397b00" d="M214.1 293.4l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M214.8 293.4l.7.6-.7-.6z" />
        <path fill="#294200" d="M215.5 293.4l.7.6-.7-.6m7 0l.7.6-.7-.6z" />
        <path fill="#397b00" d="M224.4 293.6l.5.2-.5-.2z" />
        <path fill="#295200" d="M226.8 293.4l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M236 293.4l.6.6-.7-.6z" />
        <path fill="#631808" d="M241.5 293.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M242.2 293.4l1.4 1.3-1.4-1.3z" />
        <path fill="#428c00" d="M243 293.4l.6.6-.7-.6z" />
        <path fill="#631808" d="M243.7 293.4l.7.6-.8-.6z" />
        <path fill="#8c7373" d="M254.2 293.4l.7.6-.7-.6z" />
        <path fill="#6b0808" d="M254.9 293.4l.7.6-.7-.6z" />
        <path fill="#dedede" d="M255.6 293.4l.7.6-.7-.6z" />
        <path fill="#000818" d="M267.6 293.4l.7.6-.7-.6z" />
        <path fill="#082108" d="M271.8 293.4l.7.6-.7-.6z" />
        <path fill="#002984" d="M277.4 293.4l1.4 1.3v-1.3h-1.4z" />
        <path fill="#001039" d="M280.2 293.4l.7.6-.7-.6m2.1 0l.7.6-.7-.6z" />
        <path fill="#103900" d="M283.8 293.4l.6.6-.6-.6z" />
        <path d="M284.4 293.4l.8.6-.8-.6z" />
        <path fill="#296300" d="M285.1 293.4l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M285.9 293.4l.7.6-.7-.6z" />
        <path fill="#185200" d="M290.3 293.8l.2.4-.2-.4z" />
        <path fill="#297b00" d="M293.6 293.4v.6l3.5 1.4v-.7l-3.5-1.3z" />
        <path fill="#185200" d="M294.3 293.4l.7.6-.7-.6z" />
        <path fill="#184a00" d="M295.7 293.4l.7.6-.7-.6z" />
        <path fill="#103900" d="M297.8 293.4l.7.6-.7-.6z" />
        <path fill="#296300" d="M304.9 293.4l.7.6-.8-.6z" />
        <path fill="#103900" d="M306 293.6l.5.2-.5-.2z" />
        <path fill="#214210" d="M308.4 293.4l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M309 293.4l.8.6-.7-.6z" />
        <path fill="#8c8c8c" d="M309.8 293.4l.7.6-.7-.6z" />
        <path fill="#cecece" d="M310.5 293.4l.7.6-.7-.6m5.6 0l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M316.8 293.4l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M317.5 293.4l.7.6-.7-.6z" />
        <path fill="#292921" d="M318.7 293.6l.5.2-.5-.2z" />
        <path fill="#315221" d="M193 294l.7.7-.7-.7z" />
        <path fill="#295200" d="M195.1 294l.7.7-.7-.7z" />
        <path fill="#294200" d="M195.8 294l.7.7-.7-.7m5.6 0l.7.7-.7-.7z" />
        <path fill="#397b00" d="M202.1 294l.7.7-.7-.7z" />
        <path fill="#294200" d="M204.3 294l-.8 1.4.8-1.4z" />
        <path fill="#397b00" d="M205 294l.7.7-.7-.7z" />
        <path fill="#295200" d="M207 294l.8.7-.7-.7z" />
        <path fill="#63636b" d="M207.8 294l.7.7-.7-.7z" />
        <path fill="#397b00" d="M208.5 294l.7.7-.7-.7m1.8.2l.5.3-.5-.3z" />
        <path fill="#295200" d="M214.1 294l.7.7-.7-.7z" />
        <path fill="#efefef" d="M214.8 294l.7.7-.7-.7z" />
        <path fill="#426331" d="M215.5 294l.7.7-.7-.7z" />
        <path fill="#294200" d="M220.7 294.5l.2.4-.2-.4z" />
        <path fill="#295200" d="M222.5 294l.7.7-.7-.7m1.4 0l.7.7-.6-.7z" />
        <path fill="#397b00" d="M226.5 294.2l.5.3-.5-.3m2.4-.2l.7.7-.7-.7z" />
        <path fill="#b51010" d="M235.2 294l.7.7-.7-.7z" />
        <path fill="#211800" d="M236 294l.6.7-.7-.7z" />
        <path fill="#ce2110" d="M236.6 294l1.4 1.4-1.4-1.4z" />
        <path fill="#b51010" d="M240.8 294l.7.7-.7-.7z" />
        <path fill="#294200" d="M241.5 294l.7.7-.7-.7z" />
        <path
          fill="#428c00"
          d="M242.2 294l-1.4 4-2-1.3 2 5.3h.7v-2.6h.7v4.7c3.4-2.2 3-6 2.2-9.4h-.7v6.7h-.7l-.8-7.4z"
        />
        <path fill="#294200" d="M243.7 294l.7.7-.8-.7z" />
        <path fill="#ce2110" d="M244.3 294l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M253.5 294l.7.7-.7-.7z" />
        <path fill="#6b4242" d="M254.2 294l.7.7-.7-.7z" />
        <path fill="#63636b" d="M254.9 294l.7.7-.7-.7z" />
        <path fill="#103910" d="M267.6 294l.7.7-.7-.7z" />
        <path fill="#10214a" d="M268.3 294l.7.7-.7-.7z" />
        <path fill="#002984" d="M270.4 294l.7.7-.7-.7z" />
        <path fill="#103900" d="M271 294l.8.7-.7-.7z" />
        <path fill="#184a00" d="M271.8 294l.7.7-.7-.7z" />
        <path fill="#002984" d="M273.9 294l.7.7-.7-.7z" />
        <path fill="#001010" d="M277.4 294l.7.7-.7-.7z" />
        <path fill="#184a00" d="M280.2 294l.7.7-.7-.7z" />
        <path fill="#296300" d="M283.8 294l.6.7-.6-.7z" />
        <path fill="#424242" d="M284.4 294l.8.7-.8-.7z" />
        <path fill="#319400" d="M285.1 294l-4.2 12c4-2 6-8 4.2-12z" />
        <path fill="#293129" d="M285.9 294l.7.7-.7-.7z" />
        <path fill="#296300" d="M286.6 294l.7.7-.7-.7z" />
        <path fill="#184a00" d="M293.6 294l.7.7-.7-.7z" />
        <path fill="#185200" d="M296.2 294.2l.5.3-.5-.3z" />
        <path fill="#184a00" d="M297.1 294l.7.7-.7-.7z" />
        <path fill="#185200" d="M302.7 294l.7.7-.7-.7z" />
        <path fill="#184a00" d="M302.7 294.7v.7h3.6l-3.6-.7z" />
        <path fill="#297b00" d="M304.9 294l.7.7-.8-.7z" />
        <path fill="#319400" d="M305.6 294v.7h4.9l-5-.7z" />
        <path fill="#296300" d="M310.5 294l.7.7-.7-.7z" />
        <path fill="#315221" d="M311.2 294l-.7 1.4.7-1.4z" />
        <path fill="#7b7373" d="M311.9 294l.7.7-.7-.7z" />
        <path fill="#cecece" d="M312.6 294l.7.7-.7-.7z" />
        <path fill="#dedede" d="M319 294l.6.7-.7-.7z" />
        <path fill="#bdbdbd" d="M192.3 294.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M193 294.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M194.4 294.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M195.1 294.7l.7.7-.7-.7m5 0v2h.6l-.7-2z" />
        <path fill="#103900" d="M200.7 294.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M204.3 294.7l.6.7-.7-.7z" />
        <path fill="#425242" d="M207 294.7l.8.7-.7-.7z" />
        <path fill="#315221" d="M208.5 294.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M210.6 294.7l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M214.1 294.7l.7.7-.7-.7z" />
        <path fill="#526b42" d="M215.5 294.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M222.3 295l.5.1-.5-.2z" />
        <path fill="#294200" d="M224.2 295.1l.2.5-.2-.5m1.9-.4l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#631808" d="M235.2 294.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M236 294.7l1.3 3.3h2.1l-3.5-3.3z" />
        <path fill="#311000" d="M236.6 294.7l.7.7-.7-.7z" />
        <path fill="#422100" d="M240.8 294.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M243 294.7v2.7h.6l-.7-2.7z" />
        <path fill="#5a1008" d="M244.3 294.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M253.5 294.7l.7.7-.7-.7z" />
        <path fill="#101810" d="M254.2 294.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M254.9 294.7l.7.7-.7-.7z" />
        <path fill="#083121" d="M267.6 294.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M268.3 294.7l.7.7-.7-.7z" />
        <path fill="#002984" d="M269 294.7l.7.7-.7-.7z" />
        <path fill="#102110" d="M270.4 294.7l.7.7-.7-.7z" />
        <path fill="#319400" d="M271 294.7l-.6 6h.7v-6z" />
        <path fill="#083121" d="M271.8 294.7l.7.7-.7-.7z" />
        <path fill="#000818" d="M273.9 294.7l.7.7-.7-.7z" />
        <path fill="#00216b" d="M276.7 294.7l.7.7-.7-.7z" />
        <path fill="#082108" d="M277.4 294.7l-.7 1.3.7-1.3z" />
        <path fill="#00215a" d="M279.5 294.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M280.2 294.7l.7.7-.7-.7z" />
        <path fill="#00215a" d="M281 294.7l.6.7-.7-.7z" />
        <path fill="#103910" d="M281.6 294.7l.7.7-.7-.7z" />
        <path fill="#424242" d="M282.3 294.7l.7.7-.7-.7z" />
        <path fill="#103910" d="M283 294.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M283.8 294.7l-.8 1.3.8-1.3z" />
        <path fill="#294221" d="M284.4 294.7l.8.7-.8-.7z" />
        <path fill="#103900" d="M285.9 294.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M286.6 294.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M290.3 295.1l.2.5-.2-.5z" />
        <path fill="#103900" d="M293.6 294.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M295 294.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M301.3 294.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M302 294.7l.7.7-.7-.7m4.3 0l.7.7-.7-.7z" />
        <path fill="#082108" d="M307 294.7v.7h2l-2-.7z" />
        <path fill="#4a6342" d="M309.5 295l.5.1-.5-.2z" />
        <path fill="#184a00" d="M311.2 294.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M311.9 294.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M312.6 294.7l.7.7-.7-.7z" />
        <path fill="#425242" d="M313.3 294.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M314 294.7l1.4 1.3-1.4-1.3z" />
        <path fill="#7b7373" d="M192.3 295.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M197.2 295.4l.7 2.6h.7l-1.4-2.6z" />
        <path fill="#294200" d="M199 295.6l.6.2-.5-.2z" />
        <path fill="#295200" d="M202.1 295.4l.7.6-.7-.6z" />
        <path fill="#103900" d="M202.8 295.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M203.6 295.4l.7.6-.8-.6z" />
        <path fill="#213918" d="M206.4 295.4l.7.6-.7-.6z" />
        <path fill="#efefef" d="M207 295.4l.8.6-.7-.6z" />
        <path fill="#8c8c8c" d="M208.5 295.4l.7.6-.7-.6z" />
        <path fill="#294200" d="M209.2 295.4l.7.6-.7-.6z" />
        <path fill="#5a2908" d="M209.9 295.4l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M210.6 295.4l.7.6-.7-.6z" />
        <path fill="#292100" d="M211.3 295.4l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M214.1 295.4l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M215.5 295.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M220.4 295.4l.7.6-.7-.6z" />
        <path fill="#103900" d="M226 295.4l.8.6-.7-.6z" />
        <path fill="#181000" d="M228.9 295.4l.7.6-.7-.6z" />
        <path fill="#310000" d="M229.6 295.4l.7.6-.7-.6z" />
        <path fill="#313918" d="M235.2 295.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M236 295.4l.6.6-.7-.6z" />
        <path fill="#293100" d="M237.3 295.4l.7.6-.7-.6z" />
        <path fill="#5a1010" d="M238 295.4l.7.6-.7-.6z" />
        <path fill="#734a42" d="M239.2 295.6l.5.2-.5-.2z" />
        <path fill="#5a2121" d="M240.1 295.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M240.8 295.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M244.3 295.4l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M245 295.4l.8.6-.7-.6z" />
        <path fill="#bdbdbd" d="M253.5 295.4l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M254.2 295.4l.7.6-.7-.6z" />
        <path fill="#002984" d="M264 295.4l.8.6-.8-.6z" />
        <path fill="#00216b" d="M264.8 295.4l.6.6-.6-.6z" />
        <path fill="#103921" d="M267.6 295.4l.7.6-.7-.6z" />
        <path fill="#319400" d="M268.3 295.4l-.7 8.7c2.6-2.5 2.5-5.8.7-8.7z" />
        <path fill="#102121" d="M269 295.4l.7.6-.7-.6z" />
        <path fill="#212139" d="M269.7 295.4l.7.6-.7-.6z" />
        <path fill="#296300" d="M270.4 295.4l.7.6-.7-.6z" />
        <path fill="#293129" d="M271.8 295.4l.7.6-.7-.6z" />
        <path fill="#42425a" d="M272.5 295.4l.7.6-.7-.6z" />
        <path fill="#31425a" d="M273.2 295.4l.7.6-.7-.6z" />
        <path fill="#103900" d="M273.9 295.4l.7.6-.7-.6z" />
        <path fill="#31425a" d="M274.6 295.4l.7.6-.7-.6z" />
        <path fill="#42425a" d="M275.8 295.6l.4.2-.4-.2z" />
        <path fill="#184a00" d="M277.6 295.8l.3.5-.2-.5z" />
        <path fill="#42425a" d="M278.1 295.4l.7.6-.7-.6z" />
        <path fill="#636b7b" d="M278.8 295.4l.7.6-.7-.6z" />
        <path fill="#082108" d="M279.5 295.4l.7.6-.7-.6z" />
        <path fill="#292921" d="M281 295.4l.6.6-.7-.6z" />
        <path fill="#185200" d="M281.6 295.4l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M282.3 295.4l.7.6-.7-.6z" />
        <path fill="#184a00" d="M283.8 295.4l.6.6-.6-.6z" />
        <path fill="#214210" d="M284.4 295.4l.8.6-.8-.6z" />
        <path fill="#185200" d="M291.5 295.4l.7.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#297b00" d="M293.6 295.4l.7.6-.7-.6z" />
        <path fill="#103900" d="M295 295.4l.7.6-.7-.6z" />
        <path fill="#185200" d="M300 295.4l.6.6-.7-.6z" />
        <path fill="#103900" d="M300.6 295.4l.7.6-.7-.6z" />
        <path fill="#296300" d="M301.3 295.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M307.7 295.4l.7.6-.7-.6z" />
        <path fill="#296300" d="M308.4 295.4l.7.6-.7-.6z" />
        <path fill="#214210" d="M309 295.4l.8.6-.7-.6z" />
        <path fill="#7b7373" d="M309.8 295.4l.7.6-.7-.6z" />
        <path fill="#dedede" d="M310.5 295.4l.7.6-.7-.6z" />
        <path fill="#cecece" d="M311.9 295.4l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M312.6 295.4l-.7 1.3.7-1.3z" />
        <path fill="#8c8c8c" d="M313.3 295.4l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M314 295.4l.7.6-.7-.6z" />
        <path fill="#314231" d="M192.3 296l.7.7-.7-.7z" />
        <path fill="#397b00" d="M193 296l.7.7-.7-.7z" />
        <path fill="#295200" d="M193.7 296l.7.7-.7-.7z" />
        <path fill="#396b10" d="M194.4 296l.7.7-.7-.7z" />
        <path fill="#213918" d="M195.1 296l.7.7-.7-.7z" />
        <path fill="#294200" d="M196.3 296.3l.4.2-.4-.2z" />
        <path fill="#428c00" d="M199 296.3l.6.2-.5-.2z" />
        <path fill="#294200" d="M201.2 296.3l.5.2-.5-.2z" />
        <path fill="#397b00" d="M202.1 296l.7.7-.7-.7z" />
        <path fill="#315221" d="M205.7 296l.7.7-.7-.7z" />
        <path fill="#cecece" d="M206.4 296l.7.7-.7-.7z" />
        <path fill="#420000" d="M209.2 296l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M211.5 296.5l.3.4-.3-.4z" />
        <path fill="#295200" d="M212 296l.7 2.7h.7L212 296z" />
        <path fill="#8c8c8c" d="M214.3 296.5l.3.4-.3-.4z" />
        <path fill="#efefef" d="M215.5 296l.7.7-.7-.7z" />
        <path fill="#214210" d="M216.2 296l.7.7-.7-.7z" />
        <path fill="#294200" d="M220.4 296l.7.7-.7-.7z" />
        <path fill="#295200" d="M224 296l.6.7-.7-.7z" />
        <path fill="#294200" d="M225.4 296l.7.7-.7-.7z" />
        <path fill="#295200" d="M228.2 296l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M228.9 296l.7.7-.7-.7z" />
        <path fill="#313931" d="M229.6 296l.7.7-.7-.7z" />
        <path fill="#213918" d="M230.3 296l.7.7-.7-.7z" />
        <path fill="#63636b" d="M231 296l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M231.7 296l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M232.4 296l.7.7-.7-.7z" />
        <path fill="#cecece" d="M233.1 296l.7.7-.7-.7z" />
        <path fill="#526b42" d="M235.2 296l.7.7-.7-.7z" />
        <path fill="#428c00" d="M236 296l1.3 1.4-1.4-1.4z" />
        <path fill="#103900" d="M236.6 296l.7.7-.7-.7z" />
        <path fill="#425242" d="M238.7 296l.7.7-.7-.7z" />
        <path fill="#dedede" d="M239.4 296l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M240.1 296l.7.7-.7-.7z" />
        <path fill="#313931" d="M245 296l.8.7-.7-.7z" />
        <path fill="#7b5252" d="M245.8 296l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M246.5 296l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M247.2 296l.7.7-.7-.7z" />
        <path fill="#002984" d="M260.5 296l.7.7-.7-.7z" />
        <path fill="#00184a" d="M261.2 296l.7.7-.7-.7z" />
        <path fill="#42425a" d="M262 296l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M262.6 296l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M263.4 296l.7.7-.8-.7z" />
        <path fill="#bdbdbd" d="M264 296l.8.7-.8-.7z" />
        <path fill="#dedede" d="M264.8 296l.6.7-.6-.7z" />
        <path fill="#214210" d="M269 296l.7.7-.7-.7z" />
        <path fill="#425242" d="M269.7 296l.7.7-.7-.7z" />
        <path fill="#63636b" d="M273.2 296l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M276 296l.7.7-.7-.7z" />
        <path fill="#296300" d="M276.7 296l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M278.8 296l.7.7-.7-.7z" />
        <path fill="#103900" d="M281 296l1.3 1.4-1.4-1.4z" />
        <path fill="#296300" d="M281.6 296l.7.7-.7-.7z" />
        <path fill="#313931" d="M282.3 296l.7.7-.7-.7z" />
        <path fill="#297b00" d="M283 296l.7.7-.7-.7z" />
        <path fill="#103900" d="M283.8 296l.6.7-.6-.7z" />
        <path fill="#185200" d="M284.4 296l.8.7-.8-.7m5.7 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M291.7 296.5l.3.4-.3-.4m1.2-.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M294.3 296l1.4 1.4-1.4-1.4z" />
        <path fill="#184a00" d="M295 296l.7.7-.7-.7z" />
        <path fill="#297b00" d="M298.5 296l.7.7-.7-.7z" />
        <path fill="#103900" d="M299.2 296l.7.7-.7-.7z" />
        <path fill="#296300" d="M300 296l.6.7-.7-.7z" />
        <path fill="#297b00" d="M309.8 296l.7.7-.7-.7z" />
        <path fill="#185200" d="M310.5 296l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M311.2 296l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M192.8 297l.4.1-.4-.2z" />
        <path fill="#efefef" d="M194.4 296.7l.7.7-.7-.7z" />
        <path fill="#214210" d="M195.1 296.7l.7.7-.7-.7z" />
        <path fill="#428c00" d="M196.5 299.4l1.4-2c-1.8-.4-2.9.6-1.4 2z" />
        <path fill="#294200" d="M199 297l.6.1-.5-.2z" />
        <path fill="#295200" d="M200 296.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M204.3 296.7l.6.7-.7-.7z" />
        <path fill="#63636b" d="M205 296.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M205.7 296.7l.7.7-.7-.7z" />
        <path fill="#5a2121" d="M209.2 296.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M216.2 296.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M217 296.7l.6.7-.7-.7z" />
        <path fill="#295200" d="M220.7 297.1l.2.5-.2-.5m2.5-.4l.8.7-.8-.7z" />
        <path fill="#63636b" d="M228.2 296.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M229.6 296.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M230.3 296.7l.7.7-.7-.7z" />
        <path fill="#428c00" d="M231 296.7l.7 4.7 3.5 2.7 5 .6.6-.6c-.5-1.9-6.2-9.7-7-5.4l-1.4-2H231z" />
        <path fill="#397b00" d="M232.4 296.7v1.3l1.4-1.3h-1.4z" />
        <path fill="#295200" d="M233.8 296.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M235 297l.4.1-.4-.2z" />
        <path fill="#397b00" d="M236.1 297.1l.3.5-.3-.5z" />
        <path fill="#294200" d="M237.3 296.7l.7.7-.7-.7z" />
        <path fill="#214210" d="M239.4 296.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M240.1 296.7l.7.7-.7-.7z" />
        <path fill="#526b42" d="M245 296.7l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M247.2 296.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M247.9 296.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M248.6 296.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M249.3 296.7l.7.7-.7-.7m9.1 0l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M259.1 296.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M259.8 296.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M260.5 296.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M261.2 296.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M269 296.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M269.7 296.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M272.5 296.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M273.2 296.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M275.3 296.7l.7.7-.7-.7z" />
        <path fill="#294221" d="M276 296.7l.7.7-.7-.7z" />
        <path fill="#319400" d="M276.7 296.7l-5 8c5.6 0 8-2.9 8.5-8h-.7l-4.9 7.4 2.1-7.4z" />
        <path fill="#4a6342" d="M277.4 296.7l.7.7-.7-.7z" />
        <path fill="#425242" d="M278.8 296.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M280.2 296.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M281 296.7l.6.7-.7-.7z" />
        <path fill="#184a00" d="M282.3 296.7l.7.7-.7-.7z" />
        <path fill="#319400" d="M283 296.7l-4.9 8.7c3.3-1.5 5.7-5.2 5-8.7z" />
        <path fill="#082108" d="M283.8 296.7l.6.7-.6-.7z" />
        <path fill="#297b00" d="M284.4 296.7l.8.7-.8-.7z" />
        <path fill="#184a00" d="M290 296.7l.8.7-.7-.7z" />
        <path fill="#185200" d="M294.3 296.7l.7.7-.7-.7m3.5 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M298.5 296.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M301.1 297l.5.1-.5-.2z" />
        <path fill="#296300" d="M302 296.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M302.7 296.7v.7h2.2l-2.2-.7z" />
        <path fill="#185200" d="M304.9 296.7l.7.7-.8-.7z" />
        <path fill="#184a00" d="M306 297l.5.1-.5-.2z" />
        <path fill="#185200" d="M307 296.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M307.9 297.1l.2.5-.2-.5z" />
        <path fill="#297b00" d="M308.4 296.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M311.9 296.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M312.6 296.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M313.3 296.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M194.4 297.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M196.5 297.4l-.7 1.3h1.4l-.7-1.3z" />
        <path fill="#103900" d="M197.2 297.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M202.8 297.4l.7.6-.7-.6z" />
        <path fill="#5a5231" d="M203.6 297.4l.7.6-.8-.6z" />
        <path fill="#ada5a5" d="M204.3 297.4l.6.6-.7-.6z" />
        <path fill="#bdbdbd" d="M207 297.4l.8.6-.7-.6z" />
        <path fill="#8c8c8c" d="M207.8 297.4l.7.6-.7-.6z" />
        <path fill="#8c9c84" d="M208.5 297.4l.7.6-.7-.6z" />
        <path fill="#5a5231" d="M209.2 297.4l.7.6-.7-.6z" />
        <path fill="#422100" d="M209.9 297.4l.7.6-.7-.6z" />
        <path fill="#5a2908" d="M210.6 297.4l.7.6-.7-.6z" />
        <path fill="#311000" d="M211.3 297.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M212.7 297.4l.7.6-.7-.6z" />
        <path fill="#5a6b52" d="M214.1 297.4l.7.6-.7-.6z" />
        <path fill="#52525a" d="M217 297.4l.6.6-.7-.6z" />
        <path fill="#103900" d="M223.3 297.4l.6.6-.7-.6z" />
        <path fill="#314231" d="M227.5 297.4l-.7 1.3.7-1.3z" />
        <path fill="#dedede" d="M228.2 297.4l.7.6-.7-.6z" />
        <path fill="#63636b" d="M230.3 297.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M231.7 297.4l.7.6-.7-.6z" />
        <path fill="#103900" d="M236.6 297.4l.7.6-.7-.6z" />
        <path fill="#294200" d="M238 297.4l-.7 1.3.7-1.3z" />
        <path fill="#103900" d="M240.1 297.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M243.2 297.8l.2.5-.2-.5z" />
        <path fill="#294200" d="M245.3 297.8l.2.5-.2-.5z" />
        <path fill="#dedede" d="M248.6 297.4l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M249.3 297.4l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M250 297.4l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M257.7 297.4l.7.6-.7-.6z" />
        <path fill="#63636b" d="M258.4 297.4l.7.6-.7-.6z" />
        <path fill="#dedede" d="M259.1 297.4l.7.6-.7-.6z" />
        <path fill="#184a00" d="M269.7 297.4l.7.6-.7-.6z" />
        <path fill="#63636b" d="M272.5 297.4l-.7 1.3.7-1.3z" />
        <path fill="#297b00" d="M273.2 297.4l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M275.3 297.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M276 297.4l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M277.9 297.6l.5.2-.5-.2z" />
        <path fill="#296300" d="M278.8 297.4l.7.6-.7-.6z" />
        <path fill="#103900" d="M280.2 297.4l.7.6-.7-.6z" />
        <path fill="#319400" d="M281 297.4l.6.6-.7-.6z" />
        <path fill="#082108" d="M281.6 297.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M282.3 297.4l.7.6-.7-.6z" />
        <path fill="#103900" d="M283.8 297.4l.6.6-.6-.6z" />
        <path fill="#296300" d="M290 297.4l.8.6-.7-.6m1.4 0l.7.6-.7-.6z" />
        <path fill="#103900" d="M294.3 297.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M295.7 298v.7h2.1l-2-.7z" />
        <path fill="#103900" d="M297.1 297.4l.7.6-.7-.6z" />
        <path fill="#296300" d="M297.8 297.4l.7.6-.7-.6z" />
        <path fill="#082108" d="M308.4 297.4l.7.6-.7-.6z" />
        <path fill="#001000" d="M309 297.4l.8.6-.7-.6z" />
        <path fill="#395231" d="M309.8 297.4l.7.6-.7-.6z" />
        <path fill="#184a00" d="M310.5 297.4l.7.6-.7-.6z" />
        <path fill="#296300" d="M311.2 297.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M312.4 297.6l.4.2-.4-.2z" />
        <path fill="#214210" d="M313.3 297.4l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M314 297.4l.7.6-.7-.6z" />
        <path fill="#5a5231" d="M194.4 298l.7.7-.7-.7z" />
        <path fill="#397b00" d="M199.3 298l.7.7-.7-.7z" />
        <path fill="#295200" d="M200 298l.7.7-.7-.7z" />
        <path fill="#294200" d="M200.7 298l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M201.4 298l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M202.1 298l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M202.8 298l.7.7-.7-.7z" />
        <path fill="#efefef" d="M204 298.3l.5.2-.5-.2z" />
        <path fill="#9c9494" d="M205 298l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M205.7 298l.7.7-.7-.7z" />
        <path fill="#396b10" d="M206.4 298l.7.7-.7-.7z" />
        <path fill="#397b00" d="M207 298l.8.7-.7-.7z" />
        <path
          fill="#428c00"
          d="M205.7 298.7v.7h6.3v.6h-6.3v.7h1.4v.7c-3.9.2-5.8 1.5-7.8 4.7l12-.7v.7c-3.3 1-8 .6-9.2 4 4.5-1.8 11-2.4 13.4-6.7l-4.2 2 2-2.7-6.2-.6v-.7l11.2.7v.6h-2v.7l9-.7v-.6h-2v-.7h4.2v-.7l-5.7 1.3-16.1-3.3z"
        />
        <path fill="#294200" d="M213.4 298l.7.7-.7-.7z" />
        <path fill="#315221" d="M214.1 298l.7.7-.7-.7z" />
        <path fill="#efefef" d="M217 298l.6.7-.7-.7z" />
        <path fill="#314231" d="M217.6 298l.7.7-.7-.7z" />
        <path fill="#294200" d="M220.4 298l1.4 1.4-1.4-1.4z" />
        <path fill="#397b00" d="M223 298.3l.5.2-.5-.2m3-.3l.8.7-.7-.7z" />
        <path fill="#efefef" d="M227.5 298l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M230.3 298l.7.7-.7-.7z" />
        <path fill="#397b00" d="M231 298l.7.7-.7-.7z" />
        <path fill="#294200" d="M232.9 298.3l.4.2-.4-.2z" />
        <path fill="#295200" d="M238 298l2.1 1.4v-.7l-2-.7z" />
        <path fill="#103900" d="M239 298.5l.2.4-.2-.4z" />
        <path fill="#294200" d="M240.8 298l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M250 298l.7.7-.7-.7z" />
        <path fill="#52525a" d="M250.7 298l.7.7-.7-.7z" />
        <path fill="#cecece" d="M251.4 298l.7.7-.7-.7m5 0l-1.5 2 1.4-2z" />
        <path fill="#63636b" d="M257 298l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M257.7 298l.7.7-.7-.7z" />
        <path fill="#185200" d="M269.7 298l.7.7-.7-.7z" />
        <path fill="#184a00" d="M272.5 298l.7.7-.7-.7z" />
        <path fill="#319400" d="M273.2 298l-4.2 6.7c2.6-1.3 5-3.7 4.2-6.7z" />
        <path fill="#184a00" d="M273.9 298l.7.7-.7-.7z" />
        <path fill="#cecece" d="M274.6 298l.7.7-.7-.7z" />
        <path fill="#184a00" d="M275.3 298l.7.7-.7-.7z" />
        <path fill="#296300" d="M276.7 298l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M277.4 298l.7.7-.7-.7z" />
        <path fill="#214210" d="M278.1 298l.7.7-.7-.7z" />
        <path fill="#184a00" d="M280.2 298l1.4 1.4-1.4-1.4z" />
        <path fill="#297b00" d="M281 298l1.3 1.4-1.4-1.4z" />
        <path fill="#103900" d="M281.6 298l.7.7-.7-.7z" />
        <path fill="#297b00" d="M283 298l.7.7-.7-.7z" />
        <path fill="#296300" d="M283.8 298l.6.7-.6-.7z" />
        <path fill="#185200" d="M288.7 298l.7.7-.7-.7zm5.6 0l.7.7-.7-.7z" />
        <path fill="#103900" d="M296.4 298l.7.7-.7-.7z" />
        <path fill="#296300" d="M309 298l.8.7-.7-.7z" />
        <path fill="#425242" d="M309.8 298l.7.7-.7-.7z" />
        <path fill="#efefef" d="M310.5 298l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M311.2 298l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M311.9 298l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M312.6 298l.7.7-.7-.7z" />
        <path fill="#185200" d="M313.3 298l.7.7-.7-.7z" />
        <path fill="#184a00" d="M314 298l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M314.7 298l.7.7-.7-.7z" />
        <path fill="#294200" d="M194.6 299.1l.3.5-.3-.5m2-.4l.6.7-.7-.7z" />
        <path fill="#526b42" d="M197.2 298.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M198.4 299l.5.2-.5-.3z" />
        <path fill="#bdbdbd" d="M199.3 298.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M200 298.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M202.8 298.7l.7.7-.7-.7z" />
        <path d="M203.6 298.7l.7.7-.8-.7z" />
        <path fill="#295200" d="M204.3 298.7l.6.7-.7-.7z" />
        <path fill="#397b00" d="M205 298.7l.7.7-.7-.7z" />
        <path fill="#292100" d="M214.1 298.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M214.8 298.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M217 298.7l.6.7-.7-.7z" />
        <path fill="#63636b" d="M217.6 298.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M218.3 298.7l.7.7-.7-.7z" />
        <path fill="#001000" d="M220.4 298.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M221.8 298.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M222.5 298.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M224.7 298.7l.7.7-.8-.7z" />
        <path fill="#214210" d="M225.4 298.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M226 298.7l.8.7-.7-.7z" />
        <path fill="#efefef" d="M230.3 298.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M231 298.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M233.8 298.7l1.4 1.3-1.4-1.3z" />
        <path fill="#295200" d="M240.8 298.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M243 298.7v2.7h.6l-.7-2.7z" />
        <path fill="#295200" d="M245 298.7l.8.7-.7-.7z" />
        <path fill="#7b7373" d="M251.4 298.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M252 298.7l2.2 2.7-2.1-2.7z" />
        <path fill="#7b7373" d="M256.3 298.7l-1.4 2 1.4-2z" />
        <path fill="#efefef" d="M257 298.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M270 299.1l.1.5-.2-.5z" />
        <path d="M271.8 298.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M272.5 298.7l.7.7-.7-.7z" />
        <path fill="#315221" d="M273.9 298.7l.7.7-.7-.7z" />
        <path fill="#314231" d="M274.6 298.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M276.7 298.7l.7.7-.7-.7z" />
        <path fill="#425242" d="M277.4 298.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M278.1 298.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M280.2 298.7l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M288.7 298.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M295 298.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M295.7 298.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M309.8 298.7l.7.7-.7-.7z" />
        <path fill="#103910" d="M310.5 298.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M311.2 298.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M313.3 298.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M314 298.7l.7.7-.7-.7z" />
        <path fill="#52525a" d="M314.7 298.7l.7.7-.7-.7z" />
        <path fill="#424242" d="M315.4 298.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M193.7 299.4l.7.6-.7-.6z" />
        <path fill="#213918" d="M195.1 299.4l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M195.8 299.4l.7.6-.7-.6z" />
        <path fill="#efefef" d="M196.5 299.4l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M203.6 299.4l1.4 1.3-1.4-1.3z" />
        <path fill="#214210" d="M204.3 299.4l.6.6-.7-.6z" />
        <path fill="#294200" d="M205 299.4v.6h3.5l-3.5-.6z" />
        <path fill="#295200" d="M208.5 299.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M209.2 299.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M209.9 299.4l.7.6-.7-.6z" />
        <path fill="#294200" d="M210.6 299.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M211.3 299.4l.7.6-.7-.6z" />
        <path fill="#213918" d="M214.8 299.4l.7.6-.7-.6z" />
        <path fill="#cecece" d="M215.5 299.4l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M216.2 299.4l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M217 299.4l.6.6-.7-.6z" />
        <path fill="#941808" d="M218.3 299.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M219 299.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M219.7 299.4l.7.6-.7-.6z" />
        <path fill="#941808" d="M220.4 299.4l.7.6-.7-.6z" />
        <path fill="#de2110" d="M221.1 299.4l-.7 1.3.7-1.3z" />
        <path fill="#b51010" d="M221.8 299.4l.7.6-.7-.6z" />
        <path fill="#294200" d="M222.5 299.4l.7.6-.7-.6z" />
        <path fill="#295200" d="M223.3 299.4l.6.6-.7-.6z" />
        <path fill="#102110" d="M224 299.4l.6.6-.7-.6z" />
        <path fill="#63636b" d="M224.7 299.4l.7.6-.8-.6z" />
        <path fill="#bdbdbd" d="M225.4 299.4l.7.6-.7-.6z" />
        <path fill="#315221" d="M231 299.4l.7.6-.7-.6z" />
        <path fill="#397b00" d="M235.2 299.4l2.1 2-2-2m4.1 0l.7.6-.7-.6z" />
        <path fill="#294200" d="M241.8 299.8l.2.5-.2-.5m3.2-.4l.8.6-.8-.6z" />
        <path fill="#6b735a" d="M267.6 299.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M271 299.4l.8.6-.7-.6z" />
        <path fill="#184a00" d="M271.8 299.4l.7.6-.7-.6z" />
        <path fill="#101810" d="M273.9 299.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M274.6 299.4l.7.6-.7-.6z" />
        <path fill="#001000" d="M276.7 299.4l.7.6-.7-.6z" />
        <path fill="#296300" d="M277.4 299.4l.7.6-.7-.6m2.1 0l.7.6-.7-.6z" />
        <path fill="#185200" d="M280.7 299.6l.5.2-.5-.2z" />
        <path fill="#184a00" d="M283 299.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M285.1 299.4l1.4 1.3-1.4-1.3z" />
        <path fill="#184a00" d="M295 299.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M297.1 299.4l1.4 1.3-1.4-1.3z" />
        <path fill="#185200" d="M297.8 299.4l.7.6-.7-.6z" />
        <path fill="#184a00" d="M298.5 299.4v.6h2.1l-2-.6z" />
        <path fill="#296300" d="M300.6 299.4l.7.6-.7-.6z" />
        <path fill="#184a00" d="M301.3 299.4v.6h3.5l-3.5-.6z" />
        <path fill="#296300" d="M304.9 299.4l.7.6-.8-.6z" />
        <path fill="#184a00" d="M305.6 299.4l.7.6-.7-.6z" />
        <path fill="#296300" d="M306.3 299.4l.7.6-.7-.6z" />
        <path fill="#297b00" d="M307 299.4l.7.6-.7-.6z" />
        <path fill="#185200" d="M311.2 299.4l1.4 1.3-1.4-1.3z" />
        <path fill="#9c9494" d="M311.9 299.4l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M193.7 300l.7.7-.7-.7z" />
        <path fill="#313931" d="M194.4 300l.7.7-.7-.7z" />
        <path fill="#efefef" d="M195.1 300l-1.4.7v.7l1.4-1.4z" />
        <path fill="#103900" d="M205 300l.7.7-.7-.7z" />
        <path fill="#295200" d="M212 300l.7.7-.7-.7z" />
        <path fill="#294200" d="M212.7 300l.7.7-.7-.7m2.8 0l.7.7-.7-.7z" />
        <path fill="#391810" d="M216.2 300l.7.7-.7-.7z" />
        <path fill="#423100" d="M219.5 300.3l.5.2-.5-.2z" />
        <path fill="#ce2110" d="M221.1 300l.7.7-.7-.7z" />
        <path fill="#631808" d="M221.8 300l.7.7-.7-.7z" />
        <path fill="#293100" d="M222.5 300l.7.7-.7-.7z" />
        <path fill="#397b00" d="M223.3 300v.7h2.8l-2.8-.7z" />
        <path fill="#294200" d="M226 300l.8.7-.7-.7z" />
        <path fill="#315221" d="M226.8 300l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M227.5 300l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M228.2 300l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M231 300l.7.7-.7-.7z" />
        <path fill="#294200" d="M235.2 300l.7.7-.7-.7m4.2 0l.7 2h.7l-1.4-2z" />
        <path fill="#315221" d="M245 300l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M254.2 300l.7.7-.7-.7z" />
        <path fill="#4a6342" d="M267.6 300l.7.7-.7-.7z" />
        <path fill="#103900" d="M271 300l.8.7-.7-.7z" />
        <path fill="#185200" d="M273.2 300l.7.7-.7-.7z" />
        <path fill="#103900" d="M273.9 300l-.7 1.4.7-1.4z" />
        <path fill="#297b00" d="M276 300l1.4 1.4-1.4-1.4z" />
        <path fill="#103900" d="M276.7 300l.7.7-.7-.7z" />
        <path fill="#184a00" d="M279.5 300l.7.7-.7-.7z" />
        <path fill="#103900" d="M280.2 300l.7.7-.7-.7z" />
        <path fill="#297b00" d="M282.3 300l1.4 1.4-1.4-1.4z" />
        <path fill="#185200" d="M283 300l.7.7-.7-.7m2.2 0l.7.7-.7-.7z" />
        <path fill="#297b00" d="M295.7 300l.7.7-.7-.7z" />
        <path fill="#184a00" d="M296.4 300l.7.7-.7-.7z" />
        <path fill="#185200" d="M297.1 300l.7.7-.7-.7z" />
        <path fill="#297b00" d="M305.6 300l.7.7-.7-.7z" />
        <path fill="#103900" d="M306.3 300l.7.7-.7-.7z" />
        <path fill="#101810" d="M307 300l.7.7-.7-.7z" />
        <path fill="#425242" d="M307.7 300l.7.7-.7-.7z" />
        <path fill="#315221" d="M308.4 300l.7.7-.7-.7z" />
        <path fill="#185200" d="M309 300l.8.7-.7-.7z" />
        <path fill="#296300" d="M309.8 300l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M312.6 300l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M202.8 300.7l.7.7-.7-.7z" />
        <path fill="#5a5231" d="M203.6 300.7l.7.7-.8-.7z" />
        <path fill="#295200" d="M204.3 300.7l.6.7-.7-.7z" />
        <path fill="#397b00" d="M205 300.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M206.1 301l.5.2-.5-.3z" />
        <path fill="#397b00" d="M216.2 300.7l.7.7-.7-.7z" />
        <path fill="#293100" d="M217 300.7l.6.7-.7-.7z" />
        <path fill="#631808" d="M217.6 300.7l.7.7-.7-.7z" />
        <path fill="#941808" d="M218.3 300.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M219 300.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M219.7 300.7l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M220.4 300.7l.7.7-.7-.7z" />
        <path fill="#392100" d="M221.1 300.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M227.5 300.7l-2.1 2 2-2z" />
        <path fill="#294200" d="M228.2 300.7v1.3h1.4l-1.4-1.3z" />
        <path fill="#213918" d="M228.9 300.7l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M229.6 300.7l1.4 1.3-1.4-1.3z" />
        <path fill="#8c8c8c" d="M231 300.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M236 300.7l.6.7-.7-.7z" />
        <path fill="#397b00" d="M239.4 300.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M241.5 300.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M245 300.7l.8.7-.7-.7m9.1 0l.7.7-.7-.7z" />
        <path fill="#294221" d="M267.6 300.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M271 300.7l.8.7-.7-.7z" />
        <path fill="#297b00" d="M273.9 300.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M276 300.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M278.8 300.7l.7.7-.7-.7z" />
        <path d="M279.5 300.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M280.2 300.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M282.3 300.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M285.1 300.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M288 300.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M289.1 301l.5.2-.5-.3z" />
        <path fill="#185200" d="M290 300.7l.8.7-.7-.7z" />
        <path fill="#297b00" d="M290.8 300.7l-.7 1.3.7-1.3m2.8 0l.7.7-.7-.7m13.4 0l.7.7-.7-.7z" />
        <path fill="#103910" d="M307.7 300.7l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M308.4 300.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M309 300.7l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M309.8 300.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M310.5 300.7l.7.7-.7-.7z" />
        <path fill="#294221" d="M311.2 300.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M311.9 300.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M312.6 300.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M313.3 300.7l1.4 1.3-1.4-1.3z" />
        <path fill="#efefef" d="M201.4 301.4l-1.4 2 1.4-2z" />
        <path fill="#425242" d="M202.1 301.4l.7.7-.7-.7z" />
        <path fill="#397b00" d="M202.8 301.4l.7.7-.7-.7z" />
        <path fill="#294200" d="M207.5 301.6l.5.2-.5-.2z" />
        <path fill="#397b00" d="M208.7 301.8l.2.5-.2-.5z" />
        <path fill="#294200" d="M218.8 301.6l.5.2-.5-.2z" />
        <path d="M220.4 301.4l.7.7-.7-.7z" />
        <path fill="#397b00" d="M221.1 301.4l.7.7-.7-.7z" />
        <path fill="#294200" d="M223.3 301.4v.7h2l-2-.7z" />
        <path fill="#103900" d="M229.6 301.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M231 301.4l.7.7-.7-.7z" />
        <path fill="#397b00" d="M231.7 301.4l.7.7-.7-.7z" />
        <path fill="#294200" d="M232.4 301.4l.7.7-.7-.7z" />
        <path fill="#422100" d="M233.1 301.4l.7.7-.7-.7z" />
        <path fill="#4a4208" d="M233.8 301.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M236.6 301.4l.7.7-.7-.7z" />
        <path fill="#295200" d="M237.3 301.4v1.3h1.4l-1.4-1.3zm7 0l.7.7-.7-.7z" />
        <path fill="#dedede" d="M245 301.4l.8.7-.7-.7z" />
        <path fill="#cecece" d="M266.9 301.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M267.6 301.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M269.7 301.4l1.4 1.3-1.4-1.3z" />
        <path fill="#185200" d="M272.5 301.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M273.2 301.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M275.3 301.4l1.4 1.3-1.4-1.3z" />
        <path fill="#103900" d="M276 301.4l.7.7-.7-.7z" />
        <path fill="#184a00" d="M279.3 301.6l.5.2-.5-.2m3-.2l.7.7-.7-.7z" />
        <path fill="#297b00" d="M284.4 301.4l1.5 1.3-1.5-1.3z" />
        <path fill="#185200" d="M285.1 301.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M290.8 301.4l.7.7-.7-.7z" />
        <path fill="#184a00" d="M291.5 301.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M292.2 301.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M292.9 301.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M297.8 301.4l.7.7-.7-.7z" />
        <path fill="#184a00" d="M298.5 301.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M299.2 301.4v1.3h1.4l-1.4-1.3z" />
        <path fill="#297b00" d="M300 301.4l.6.7-.7-.7z" />
        <path fill="#185200" d="M308.4 301.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M309 301.4l.8.7-.7-.7z" />
        <path fill="#bdbdbd" d="M311.9 301.4l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M312.6 301.4l.7.7-.7-.7z" />
        <path fill="#082108" d="M313.3 301.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M314.7 301.4l.7.7-.7-.7z" />
        <path fill="#314231" d="M201.4 302l.7.7-.7-.6z" />
        <path fill="#295200" d="M209.2 302l.7.7-.7-.6z" />
        <path fill="#294200" d="M209.9 302v.7h2.8l-2.8-.6z" />
        <path fill="#295200" d="M212.7 302l.7.7-.7-.6z" />
        <path fill="#397b00" d="M213.4 302v2l2.8-2h-2.8z" />
        <path fill="#294200" d="M216.7 302.3l.5.2-.5-.2z" />
        <path fill="#397b00" d="M217.6 302l.7.7-.7-.6z" />
        <path fill="#103900" d="M221.8 302l.7.7-.7-.6z" />
        <path fill="#295200" d="M222.5 302l.7.7-.7-.6z" />
        <path fill="#214210" d="M226 302l.8.7-.7-.6z" />
        <path fill="#63636b" d="M226.8 302l.7.7-.7-.6z" />
        <path fill="#8c8c8c" d="M227.5 302l-.7 1.4.7-1.3z" />
        <path fill="#bdbdbd" d="M228.2 302v1.4h1.4l-1.4-1.3z" />
        <path fill="#cecece" d="M230 302.3l.5.2-.4-.2z" />
        <path d="M231.7 302l.7.7-.7-.6z" />
        <path fill="#bd2110" d="M232.4 302l.7.7-.7-.6zm1.4 0l.7.7-.7-.6z" />
        <path fill="#294200" d="M234.5 302l.7.7-.7-.6z" />
        <path fill="#397b00" d="M240.6 302.3l.5.2-.5-.2z" />
        <path fill="#5a6b52" d="M244.3 302l.7.7-.7-.6z" />
        <path fill="#7b7373" d="M266.9 302l.7.7-.7-.6z" />
        <path fill="#103900" d="M269.7 302l.7.7-.7-.6z" />
        <path fill="#297b00" d="M271.8 302l1.4 1.4-1.4-1.3z" />
        <path fill="#103900" d="M272.5 302l.7.7-.7-.6z" />
        <path fill="#184a00" d="M275.5 302.5l.3.5-.3-.5z" />
        <path fill="#297b00" d="M278.1 302l1.4 1.4-1.4-1.3z" />
        <path fill="#082108" d="M278.8 302l.7.7-.7-.6z" />
        <path fill="#296300" d="M282.1 302.3l.5.2-.5-.2z" />
        <path fill="#185200" d="M284.4 302l.8.7-.8-.6m8.7.4l.3.4-.3-.4z" />
        <path fill="#103900" d="M293.8 302.5l.3.5-.3-.5z" />
        <path fill="#297b00" d="M294.3 302l.7.7-.7-.6z" />
        <path fill="#296300" d="M296.4 302l.7.7-.7-.6z" />
        <path fill="#297b00" d="M297.1 302l-1.4 2 1.4-2z" />
        <path fill="#184a00" d="M300.6 302v.7h2.1l-2-.6z" />
        <path fill="#185200" d="M302.7 302l1.4 1.4V302h-1.4z" />
        <path fill="#297b00" d="M304.1 302l.7.7-.7-.6m5 0l2 2-2-2z" />
        <path fill="#63636b" d="M309.8 302l2 2-2-2z" />
        <path fill="#efefef" d="M313.3 302l.7.7-.7-.6z" />
        <path fill="#8c8c8c" d="M314.5 302.3l.4.2-.4-.2z" />
        <path fill="#314231" d="M200.7 302.7l.7.7-.7-.7z" />
        <path fill="#292100" d="M213.4 302.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M223.3 302.7l2.8 1.4v-.7l-2.8-.7z" />
        <path fill="#103900" d="M224 302.7l.6.7-.7-.7z" />
        <path fill="#292921" d="M224.7 302.7l.7.7-.8-.7z" />
        <path fill="#7b7373" d="M225.4 302.7l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M226 302.7l.8.7-.7-.7z" />
        <path fill="#9c9494" d="M227.5 302.7l.7.7-.7-.7z" />
        <path fill="#dedede" d="M229.6 302.7l.7.7-.7-.7z" />
        <path fill="#734a42" d="M231.7 302.7l.7.7-.7-.7z" />
        <path fill="#423100" d="M234.5 302.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M241 303.2l.3.4-.2-.4z" />
        <path fill="#397b00" d="M243.7 302.7l.7.7-.8-.7z" />
        <path fill="#9c9494" d="M244.3 302.7l.7.7-.7-.7z" />
        <path fill="#315221" d="M266.9 302.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M269.2 303.2l.2.4-.2-.4z" />
        <path fill="#296300" d="M269.7 302.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M271.8 302.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M274.6 302.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M278.4 303.2l.2.4-.2-.4m3.2-.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M284.4 302.7l.8.7-.8-.7z" />
        <path fill="#297b00" d="M286.6 302.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M287.3 302.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M285.9 303.4v.7l6.3-.7h-6.3z" />
        <path fill="#296300" d="M292.2 302.7l-.7 1.4.7-1.4z" />
        <path d="M294.3 302.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M295 302.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M297.1 302.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M297.8 302.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M298.5 302.7l.7.7-.7-.7z" />
        <path d="M304.1 302.7l.7.7-.7-.7z" />
        <path fill="#52525a" d="M304.9 302.7l.7.7-.8-.7z" />
        <path fill="#315221" d="M305.6 302.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M306.3 302.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M307 302.7l.7.7-.7-.7z" />
        <path fill="#314231" d="M200 303.4l.7.7-.7-.7z" />
        <path fill="#295200" d="M209.2 303.4l-.7 1.3.7-1.3z" />
        <path fill="#294200" d="M209.9 303.4l.7.7-.7-.7z" />
        <path fill="#295200" d="M212.7 303.4l-.7 2 .7-2z" />
        <path fill="#103900" d="M215.5 303.4l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M216.2 303.4l.7.7-.7-.7z" />
        <path fill="#315221" d="M217 303.4l.6.7-.7-.7z" />
        <path fill="#295200" d="M217.6 303.4l.7.7-.7-.7z" />
        <path fill="#397b00" d="M218.3 303.4v.7h2.8l-2.8-.7z" />
        <path fill="#294200" d="M221.1 303.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M221.8 303.4l.7.7-.7-.7z" />
        <path fill="#292100" d="M222.5 303.4l.7.7-.7-.7z" />
        <path fill="#428c00" d="M219.7 306.7l14.8-2c-4.6-1.8-11.3-1.6-14.8 2z" />
        <path fill="#397b00" d="M228.2 303.4v.7h2l-2-.7z" />
        <path fill="#294200" d="M230.3 303.4v.7h2l-2-.7z" />
        <path fill="#422100" d="M232.4 303.4l.7.7-.7-.7z" />
        <path fill="#5a2908" d="M233.1 303.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M233.8 303.4l.7.7-.7-.7z" />
        <path fill="#294200" d="M234.5 303.4l1.4 1.3-1.4-1.3z" />
        <path fill="#214210" d="M243.7 303.4l.7.7-.8-.7z" />
        <path fill="#bdbdbd" d="M266.2 303.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M270.4 304.7l2-1.3-2 1.3z" />
        <path fill="#103900" d="M274.6 303.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M277.4 303.4l-1.4 2h2.1l-.7-2z" />
        <path fill="#296300" d="M281.4 303.6l.5.2-.5-.2z" />
        <path fill="#185200" d="M283.8 303.4l.6.7-.6-.7z" />
        <path fill="#296300" d="M285 303.6l.4.2-.5-.2z" />
        <path fill="#185200" d="M290 303.4l.8.7-.7-.7z" />
        <path fill="#297b00" d="M292.2 303.4l-.7 1.3.7-1.3z" />
        <path fill="#319400" d="M292.9 303.4v.7l9.8 2.6v-.6l-9.8-2.7z" />
        <path fill="#296300" d="M295 303.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M298.5 303.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M299.2 303.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M300 303.4l.6.7-.7-.7z" />
        <path fill="#297b00" d="M304.1 303.4l1.4 1.3-1.4-1.3z" />
        <path fill="#314231" d="M304.9 303.4l.7.7-.8-.7z" />
        <path fill="#cecece" d="M305.6 303.4l1.4 1.3-1.4-1.3z" />
        <path fill="#dedede" d="M306.3 303.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M307 303.4l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M307.7 303.4l.7.7-.7-.7z" />
        <path fill="#214210" d="M308.4 303.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M309 303.4l.8.7-.7-.7z" />
        <path fill="#63636b" d="M199.3 304l.7.7-.7-.6z" />
        <path fill="#397b00" d="M200 304l.7.7-.7-.6m2.8 0v1.3h2.1v-1.3h-2z" />
        <path fill="#295200" d="M205 304l.7.7-.7-.6z" />
        <path fill="#294200" d="M205.7 304l.7.7-.7-.6z" />
        <path fill="#295200" d="M206.4 304l.7.7-.7-.6z" />
        <path fill="#294200" d="M207.5 304.3l.5.2-.5-.2z" />
        <path fill="#8c8c8c" d="M215.5 304l.7.7-.7-.6z" />
        <path fill="#dedede" d="M217.6 304l.7.7-.7-.6z" />
        <path fill="#bdbdbd" d="M218.3 304v.7h2.8l-2.8-.6z" />
        <path fill="#52525a" d="M221.1 304l.7.7-.7-.6z" />
        <path fill="#397b00" d="M221.8 304l.7.7-.7-.6m12.7 0l.7.6-.7-.6z" />
        <path fill="#292100" d="M236 304v.7h2l-2-.6z" />
        <path fill="#295200" d="M238 304l.7.7-.7-.6z" />
        <path fill="#397b00" d="M240.1 304l.7.7-.7-.6z" />
        <path fill="#103900" d="M240.8 304l.7.7-.7-.6z" />
        <path fill="#313931" d="M243.7 304l.7.7-.8-.6z" />
        <path fill="#bd8c8c" d="M244.8 304.3l.5.2-.5-.2z" />
        <path fill="#845a52" d="M245.8 304l.7.7-.7-.6z" />
        <path fill="#9c4a42" d="M253.5 304l.7.7-.7-.6z" />
        <path fill="#ad524a" d="M254.2 304l.7.7-.7-.6z" />
        <path fill="#845a52" d="M262 304l.6.7-.7-.6z" />
        <path fill="#bd8c8c" d="M263.1 304.3l.5.2-.5-.2z" />
        <path fill="#293129" d="M266.2 304l.7.7-.7-.6z" />
        <path fill="#082108" d="M268.3 304l.7.7-.7-.6z" />
        <path fill="#103900" d="M277.4 304l.7.7-.7-.6z" />
        <path fill="#297b00" d="M280.2 304l-.7 1.4.7-1.3z" />
        <path fill="#103900" d="M281 304l.6.7-.7-.6z" />
        <path fill="#297b00" d="M283 304l1.4 1.4-1.4-1.3z" />
        <path fill="#184a00" d="M283.8 304l.6.7-.6-.6z" />
        <path fill="#319400" d="M283.8 306l17.5 2.7v2.7c2-5.8-14.2-9.7-17.6-5.3z" />
        <path fill="#103900" d="M292.2 304l.7.7-.7-.6z" />
        <path fill="#184a00" d="M292.9 304l.7.7-.7-.6z" />
        <path fill="#185200" d="M293.6 304l1.4 1.4-1.4-1.3z" />
        <path fill="#297b00" d="M294.3 304l.7.7-.7-.6z" />
        <path fill="#296300" d="M300 304l.6.7-.7-.6z" />
        <path fill="#082108" d="M300.6 304l.7.7-.7-.6z" />
        <path fill="#103900" d="M301.3 304l.7.7-.7-.6z" />
        <path fill="#296300" d="M302 304l.7.7-.7-.6z" />
        <path fill="#214210" d="M305.6 304l.7.7-.7-.6z" />
        <path fill="#9c9494" d="M309 304l.8.7-.7-.6z" />
        <path fill="#425242" d="M309.8 304l.7.7-.7-.6z" />
        <path fill="#185200" d="M311 304.3l.4.2-.4-.2z" />
        <path fill="#9c9494" d="M311.9 304l.7.7-.7-.6m-113.3.6l-1.4 2 1.4-2z" />
        <path fill="#397b00" d="M199.3 304.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M200.7 304.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M202 305l.4.2-.5-.2m9.4-.3l.7.7-.7-.7z" />
        <path fill="#315221" d="M214.8 304.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M219.7 304.7l-.7 1.4.7-1.4z" />
        <path fill="#293129" d="M220.4 304.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M232.9 305l.4.2-.4-.2z" />
        <path fill="#294200" d="M233.8 304.7l.7.7-.7-.7z" />
        <path fill="#423100" d="M234.5 304.7l.7.7-.7-.7z" />
        <path fill="#422100" d="M235.7 305l.5.2-.5-.2z" />
        <path fill="#5a2908" d="M236.6 304.7l.7.7-.7-.7z" />
        <path fill="#631808" d="M237.3 304.7v.7h2.1l-2-.7z" />
        <path fill="#ad1810" d="M239.4 304.7v.7h2.1l-2-.7z" />
        <path fill="#bd2110" d="M241.5 304.7l.7.7-.7-.7z" />
        <path
          fill="#de2110"
          d="M225.4 316.8v-.7l-4.3.7v-.7c19-5.7 47.1-5.7 66.2 0v.7l-3.6-.7c3.5 5 13 2 9.9-4-2.7-5-12.5-5.5-17.6-6.2-14.3-2-30-2.1-44.3.1-5 .8-11.3 1.2-15.3 4.6-3 2.4-1.9 7.3 2 8.4 2.4.7 5-1.1 7-2.2z"
        />
        <path fill="#ce2110" d="M266.2 304.7l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M269 304.7l.7.7-.7-.7z" />
        <path fill="#631808" d="M270.1 305l.5.2-.5-.2z" />
        <path fill="#6b2908" d="M271 304.7l.8.7-.7-.7z" />
        <path fill="#184a00" d="M273.9 304.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M274.6 304.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M275.3 304.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M276.7 304.7l.7.7-.7-.7m3.5 0l-.7 1.4.7-1.4m2.8 0l.7.7-.7-.7z" />
        <path fill="#297b00" d="M293.6 304.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M295.5 305l.4.2-.4-.2z" />
        <path fill="#297b00" d="M296.4 304.7l-.7 1.4.7-1.4m4.2 0l.7.7-.7-.7z" />
        <path fill="#214210" d="M301.3 304.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M302 304.7l1.4 1.4-1.4-1.4z" />
        <path fill="#7b7373" d="M302.7 304.7l.7.7-.7-.7z" />
        <path fill="#315221" d="M303.4 304.7l.8.7-.8-.7z" />
        <path fill="#185200" d="M304.1 304.7l.7.7-.7-.7z" />
        <path fill="#103910" d="M306.3 304.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M307 304.7l1.4 1.4-1.4-1.4z" />
        <path fill="#cecece" d="M310.5 304.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M311.2 304.7l.7.7-.7-.7z" />
        <path fill="#102110" d="M311.9 304.7l.7.7-.7-.7z" />
        <path fill="#cecece" d="M312.6 304.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M198.6 305.4l4.2 2-4.2-2z" />
        <path fill="#397b00" d="M210.1 305.8l.2.5-.2-.5z" />
        <path fill="#294200" d="M210.6 305.4l.7.7-.7-.7z" />
        <path fill="#214210" d="M214.1 305.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M214.8 305.4l.7.7-.7-.7z" />
        <path fill="#314231" d="M219.7 305.4l.7.7-.7-.7z" />
        <path fill="#397b00" d="M228.2 305.4l.7.7-.7-.7z" />
        <path fill="#295200" d="M228.9 305.4l.7.7-.7-.7z" />
        <path fill="#294200" d="M229.6 305.4l.7.7-.7-.7z" />
        <path fill="#422100" d="M230.3 305.4l.7.7-.7-.7z" />
        <path fill="#520808" d="M231 305.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M231.7 305.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M232.4 305.4l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M233.1 305.4l.7.7-.7-.7m41.5 0l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M275.3 305.4l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M276 305.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M276.7 305.4l.7.7-.7-.7z" />
        <path fill="#422100" d="M277.4 305.4l.7.7-.7-.7z" />
        <path fill="#4a4208" d="M278.1 305.4l.7.7-.7-.7z" />
        <path fill="#184a00" d="M278.8 305.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M280.2 305.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M282.3 305.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M283 305.4l.7.7-.7-.7m1.4 0l3.6.7-3.6-.7z" />
        <path fill="#297b00" d="M287.3 305.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M296.4 305.4l.7.7-.7-.7z" />
        <path fill="#082108" d="M297.1 305.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M297.8 305.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M298.5 305.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M302 305.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M304.1 305.4l.7.7-.7-.7z" />
        <path fill="#6b735a" d="M304.9 305.4l.7.7-.8-.7z" />
        <path fill="#184a00" d="M305.6 305.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M306.3 305.4l.7.7-.7-.7z" />
        <path fill="#314231" d="M307 305.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M311.9 305.4l.7.7-.7-.7z" />
        <path fill="#dedede" d="M312.6 305.4l.7.7-.7-.7z" />
        <path fill="#292100" d="M198 306l.6.7-.7-.6z" />
        <path fill="#397b00" d="M202.8 306v1.4h1.4v-1.3H203m5.1.4l.2.5-.2-.5z" />
        <path fill="#294200" d="M209 306.3l.4.2-.5-.2z" />
        <path fill="#397b00" d="M212.7 306l.7.7-.7-.6z" />
        <path fill="#314231" d="M213.4 306l.7.7-.7-.6z" />
        <path fill="#dedede" d="M214.1 306l.7.7-.7-.6z" />
        <path fill="#425242" d="M219 306l.7.7-.7-.6z" />
        <path fill="#397b00" d="M222.3 306.3l.5.2-.5-.2z" />
        <path fill="#294200" d="M223.7 306.3l.5.2-.5-.2z" />
        <path fill="#292100" d="M224.7 306l.7.7-.8-.6z" />
        <path fill="#181000" d="M225.4 306l.7.7-.7-.6z" />
        <path fill="#310000" d="M226 306l.8.7-.7-.6z" />
        <path fill="#631808" d="M226.8 306l.7.7-.7-.6z" />
        <path fill="#941808" d="M227.5 306l.7.7-.7-.6z" />
        <path fill="#ad1810" d="M228.2 306l.7.7-.7-.6z" />
        <path fill="#ce2110" d="M228.9 306l.7.7-.7-.6z" />
        <path fill="#de3110" d="M244.3 306l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M245 306l.8.7-.7-.6z" />
        <path fill="#de3110" d="M245.8 306l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M248.6 306l.7.7-.7-.6z" />
        <path fill="#de3110" d="M249.3 306l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M254.7 306.3l.4.2-.4-.2z" />
        <path fill="#de3110" d="M255.6 306l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M259.6 306.3l.5.2-.5-.2z" />
        <path fill="#de3110" d="M260.5 306l.7.7-.7-.6z" />
        <path fill="#ad1810" d="M279.5 306l.7.7-.7-.6z" />
        <path fill="#941808" d="M280.2 306l.7.7-.7-.6z" />
        <path fill="#631808" d="M281 306l.6.7-.7-.6z" />
        <path fill="#5a2908" d="M281.6 306l.7.7-.7-.6z" />
        <path fill="#293100" d="M282.3 306l.7.7-.7-.6z" />
        <path fill="#185200" d="M283 306l.7.7-.7-.6z" />
        <path fill="#297b00" d="M283.8 306l.6.7-.6-.6z" />
        <path fill="#184a00" d="M288 306v.7h2l-2-.6z" />
        <path fill="#185200" d="M290 306l1.5 1.4-1.4-1.3z" />
        <path fill="#297b00" d="M290.8 306l.7.7-.7-.6z" />
        <path fill="#185200" d="M297.8 306l.7.7-.7-.6z" />
        <path fill="#001000" d="M298.5 306l.7.7-.7-.6z" />
        <path fill="#293129" d="M299.2 306l.7.7-.7-.6z" />
        <path fill="#214210" d="M300 306l.6.7-.7-.6z" />
        <path fill="#296300" d="M300.6 306l.7.7-.7-.6m2.1 0l1.4 1.3-1.4-1.3z" />
        <path fill="#63636b" d="M303.4 306l.8.7-.8-.6z" />
        <path fill="#dedede" d="M305.6 306l.7.7-.7-.6z" />
        <path fill="#63636b" d="M306.3 306l.7.7-.7-.6z" />
        <path fill="#214210" d="M307 306l.7.7-.7-.6z" />
        <path fill="#63636b" d="M307.7 306l.7.7-.7-.6z" />
        <path fill="#cecece" d="M197.2 306.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M204.3 306.7l.6.7-.7-.7z" />
        <path fill="#294200" d="M205 306.7l.7.7-.7-.7z" />
        <path fill="#295200" d="M205.7 306.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M206.8 307l.5.2-.5-.2z" />
        <path fill="#397b00" d="M211.3 306.7l.7.7-.7-.7z" />
        <path fill="#214210" d="M212 306.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M212.7 306.7l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M218.3 306.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M219.5 307l.5.2-.5-.2z" />
        <path fill="#294200" d="M218.3 308v.7l4.2-1.3-4.2.7z" />
        <path fill="#293100" d="M222.5 306.7l.7.7-.7-.7z" />
        <path fill="#5a2908" d="M223.3 306.7l.6.7-.7-.7z" />
        <path fill="#7b1008" d="M224 306.7l.6.7-.7-.7z" />
        <path fill="#b51010" d="M224.7 306.7l.7.7-.8-.7z" />
        <path fill="#de3110" d="M233.8 306.7l.7.7-.7-.7zm2.8 0l1.4 1.4-1.4-1.4z" />
        <path fill="#e75a10" d="M243.7 306.7l.7.7-.8-.7zm2.8 0l.7.7-.7-.7z" />
        <path fill="#f7b508" d="M249.3 306.7l.7.7-.7-.7z" />
        <path fill="#de3110" d="M257 306.7l1.4 1.4-1.4-1.4z" />
        <path fill="#ef9408" d="M258.4 306.7l1.4 1.4-1.4-1.4z" />
        <path fill="#e75a10" d="M261.2 306.7l1.4 1.4-1.4-1.4z" />
        <path fill="#de3110" d="M262 306.7l.6.7-.7-.7z" />
        <path fill="#e75a10" d="M264.8 306.7l.6.7-.6-.7z" />
        <path fill="#ef9408" d="M266.2 306.7l-.7 4.7.7-4.7z" />
        <path fill="#e75a10" d="M266.9 306.7l.7.7-.7-.7z" />
        <path fill="#de3110" d="M268.3 306.7l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M269 306.7l.7.7-.7-.7z" />
        <path fill="#ef7b08" d="M269.7 306.7l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M271 306.7l.8.7-.7-.7z" />
        <path fill="#de3110" d="M273.9 306.7l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M283 306.7l.7.7-.7-.7z" />
        <path fill="#941808" d="M283.8 306.7l.6.7-.6-.7z" />
        <path fill="#4a1000" d="M284.4 306.7l.8.7-.8-.7z" />
        <path fill="#293100" d="M285.1 306.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M286.6 306.7l.7.7-.7-.7z" />
        <path fill="#319400" d="M287.3 306.7v.7l7 1.4-7-2z" />
        <path fill="#297b00" d="M290 306.7l.8.7-.7-.7z" />
        <path fill="#184a00" d="M291.5 306.7l.7.7-.7-.7z" />
        <path fill="#103900" d="M292.2 306.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M293.1 307.2l.3.4-.3-.4m6.1-.5l.7.7-.7-.7z" />
        <path fill="#425242" d="M300 306.7l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M300.6 306.7l.7.7-.7-.7z" />
        <path fill="#63636b" d="M301.3 306.7l.7.7-.7-.7z" />
        <path fill="#184a00" d="M302 306.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M302.7 306.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M304.1 306.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M307 306.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M307.7 306.7l.7.7-.7-.7z" />
        <path fill="#cecece" d="M308.4 306.7l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M201.4 307.4l.7.7-.7-.7z" />
        <path fill="#397b00" d="M202.1 307.4l.7.7-.7-.7m6.4 0l.7.7-.7-.7z" />
        <path fill="#295200" d="M209.2 307.4l.7.7-.7-.7z" />
        <path fill="#396b10" d="M209.9 307.4l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M210.6 307.4l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M211.3 307.4l.7.7-.7-.7m6.3 0l.7.7-.7-.7z" />
        <path fill="#295200" d="M218.3 307.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M221.1 307.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M221.8 307.4l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M230.3 307.4l.7.7-.7-.7z" />
        <path fill="#f7b508" d="M236.6 307.4l.7.7-.7-.7m2.1 0l.7.7-.7-.7m5.4.2l.5.3-.5-.3z" />
        <path fill="#e75a10" d="M245 307.4l.8.7-.7-.7z" />
        <path fill="#f7b508" d="M246.2 307.6l.5.2-.5-.2z" />
        <path fill="#ef9408" d="M257 307.4l.7.7-.7-.7z" />
        <path fill="#f7b508" d="M261 307.6l.5.2-.5-.2z" />
        <path fill="#de3110" d="M264 307.4l.8.7-.8-.7z" />
        <path fill="#de2110" d="M268.5 307.9l.2.4-.2-.5z" />
        <path fill="#ef9408" d="M275.3 307.4l1.4 1.4-1.4-1.4z" />
        <path fill="#ef7b08" d="M277.4 307.4l.7.7-.7-.7z" />
        <path fill="#de3110" d="M280.2 307.4l.7.7-.7-.7z" />
        <path fill="#b51010" d="M285.9 307.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M286.6 307.4l.7.7-.7-.7z" />
        <path fill="#293100" d="M287.3 307.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M288 307.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M293.6 307.4l.7.7-.7-.7z" />
        <path fill="#001000" d="M294.3 307.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M295 307.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M295.7 307.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M296.4 307.4l.7.7-.7-.7m3.5 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M300.6 307.4l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M301.3 307.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M302 307.4l.7.7-.7-.7z" />
        <path fill="#63636b" d="M302.7 307.4l.7.7-.7-.7z" />
        <path fill="#184a00" d="M304 307.6l.4.2-.5-.2z" />
        <path fill="#bdbdbd" d="M304.9 307.4l.7.7-.8-.7z" />
        <path fill="#9c9494" d="M201.4 308l.7.7-.7-.6z" />
        <path fill="#397b00" d="M205.7 308l.7.7-.7-.6z" />
        <path fill="#396b10" d="M206.4 308l.7.7-.7-.6z" />
        <path fill="#526b42" d="M207 308l.8.7-.7-.6z" />
        <path fill="#8c8c8c" d="M207.8 308l.7.7-.7-.6z" />
        <path fill="#ada5a5" d="M208.5 308l.7.7-.7-.6z" />
        <path fill="#dedede" d="M209.2 308l.7.7-.7-.6z" />
        <path fill="#efefef" d="M217 308l.6.7-.7-.6z" />
        <path fill="#213918" d="M217.6 308l.7.7-.7-.6z" />
        <path fill="#4a1000" d="M219 308l.7.7-.7-.6z" />
        <path fill="#941808" d="M219.7 308l.7.7-.7-.6z" />
        <path fill="#de3110" d="M224.4 308.3l.5.2-.5-.2z" />
        <path fill="#ef7b08" d="M229.6 308l.7.7-.7-.6zm3.7.5l.3.5-.3-.5z" />
        <path fill="#de2110" d="M235.2 308l.7.7-.7-.6z" />
        <path fill="#de3110" d="M236 308l.6.7-.7-.6z" />
        <path fill="#e75a10" d="M237.3 308l.7.7-.7-.6z" />
        <path fill="#de3110" d="M245.8 308l.7.7-.7-.6z" />
        <path fill="#ef7b08" d="M246.5 308l.7.7-.7-.6m1.4 0l.7.6-.7-.6zm2 0l.8.6-.7-.6z" />
        <path fill="#de2110" d="M255.6 308v2h.7l-.7-2z" />
        <path fill="#ef9408" d="M256.3 308l.7.7-.7-.6z" />
        <path fill="#de3110" d="M259.1 308l.7.7-.7-.6z" />
        <path fill="#de2110" d="M259.8 308l.7 2-.7-2z" />
        <path fill="#e75a10" d="M264 308l.8.7-.8-.6z" />
        <path fill="#ef9408" d="M264.8 308l.6.7-.6-.6z" />
        <path fill="#ef7b08" d="M274.6 308l.7.7-.7-.6z" />
        <path fill="#ffce08" d="M275.3 308l.7.7-.7-.6z" />
        <path fill="#f7b508" d="M276.7 308l.7.7-.7-.6z" />
        <path fill="#de3110" d="M278.1 308l.7.7-.7-.6z" />
        <path fill="#ef7b08" d="M279.5 308l.7.7-.7-.6z" />
        <path fill="#ffce08" d="M280.2 308l-.7 2 .7-2z" />
        <path fill="#ef7b08" d="M281.2 308.5l.2.5-.2-.5z" />
        <path fill="#e75a10" d="M283 308l.7.7-.7-.6z" />
        <path fill="#de3110" d="M283.8 308l.6.7-.6-.6z" />
        <path fill="#941808" d="M288 308l.7.7-.7-.6z" />
        <path fill="#5a2908" d="M288.7 308l.7.7-.7-.6z" />
        <path fill="#184a00" d="M289.4 308l.7.7-.7-.6z" />
        <path fill="#297b00" d="M290 308l.8.7-.7-.6m4.4.4l.3.5-.3-.5z" />
        <path fill="#184a00" d="M295 308l.7.7-.7-.6z" />
        <path fill="#424242" d="M295.7 308l.7.7-.7-.6z" />
        <path fill="#8c8c8c" d="M296.4 308l.7.7-.7-.6z" />
        <path fill="#5a6b52" d="M297.1 308l.7.7-.7-.6z" />
        <path fill="#214210" d="M297.8 308l.7.7-.7-.6z" />
        <path fill="#296300" d="M298.5 308l.7.7-.7-.6z" />
        <path fill="#297b00" d="M301.3 308l1.4 1.4-1.4-1.3z" />
        <path fill="#314231" d="M302 308l.7.7-.7-.6z" />
        <path fill="#dedede" d="M303.4 308l.8.7-.8-.6z" />
        <path fill="#63636b" d="M304.1 308l.7.7-.7-.6z" />
        <path fill="#101810" d="M304.9 308l.7.7-.8-.6z" />
        <path fill="#8c8c8c" d="M201.4 308.7l.7.7-.7-.7z" />
        <path fill="#294200" d="M204.3 308.7l.6.7-.7-.7z" />
        <path fill="#6b735a" d="M205 308.7l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M205.7 308.7l.7.7-.7-.7z" />
        <path fill="#52525a" d="M217 308.7l.6.7-.7-.7z" />
        <path fill="#311000" d="M217.6 308.7l.7.7-.7-.7z" />
        <path fill="#b51010" d="M218.3 308.7l.7.7-.7-.7z" />
        <path fill="#ef7b08" d="M221.8 308.7l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M222.5 308.7l.7.7-.7-.7z" />
        <path fill="#f7b508" d="M223.3 308.7l.6.7-.7-.7z" />
        <path fill="#ffce08" d="M224 308.7l.6.7-.7-.7z" />
        <path fill="#ef9408" d="M224.7 308.7l.7.7-.8-.7z" />
        <path fill="#de3110" d="M231 308.7l.7.7-.7-.7zm6.3 0l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M249 309l.5.2-.5-.2z" />
        <path fill="#ef7b08" d="M256.3 308.7l.7.7-.7-.7m7.7 0l.8.7-.8-.7z" />
        <path fill="#de3110" d="M268.3 308.7l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M269.7 308.7l.7.7-.7-.7z" />
        <path fill="#de2110" d="M276 308.7v2.7l2.8-.6-2.8-2z" />
        <path fill="#e75a10" d="M278.1 308.7l.7.7-.7-.7z" />
        <path fill="#f7b508" d="M279.5 308.7l.7.7-.7-.7m4 .3l.5.2-.5-.2z" />
        <path fill="#de3110" d="M285.1 308.7l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M285.9 308.7l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M289.4 308.7l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M290 308.7l.8.7-.7-.7z" />
        <path fill="#184a00" d="M291.3 309l.4.2-.4-.2z" />
        <path fill="#185200" d="M292.2 308.7l.7.7-.7-.7z" />
        <path fill="#296300" d="M293.4 309l.4.2-.4-.2z" />
        <path fill="#319400" d="M295 308.7l.7.7-.7-.7z" />
        <path fill="#297b00" d="M295.7 308.7l.7.7-.7-.7z" />
        <path fill="#185200" d="M296.4 308.7l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M297.1 308.7l.7.7-.7-.7z" />
        <path fill="#efefef" d="M297.8 308.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M298.5 308.7l1.4 2-1.4-2z" />
        <path fill="#63636b" d="M299.2 308.7l.7.7-.7-.7z" />
        <path fill="#214210" d="M300 308.7l.6.7-.7-.7z" />
        <path fill="#297b00" d="M300.6 308.7l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M302.7 308.7l.7.7-.7-.7z" />
        <path fill="#397b00" d="M202.8 309.4l.7.7-.7-.7z" />
        <path fill="#425242" d="M203.6 309.4l.7.7-.8-.7z" />
        <path fill="#dedede" d="M204.3 309.4l.6.7-.7-.7m11.3 0l.7.7-.7-.7z" />
        <path fill="#524242" d="M216.2 309.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M217 309.4l.6.7-.7-.7z" />
        <path fill="#de3110" d="M219.5 309.6l.5.3-.5-.3z" />
        <path fill="#f7b508" d="M221.8 309.4l.7.7-.7-.7z" />
        <path fill="#ef7b08" d="M223.3 309.4l.6.7-.7-.7z" />
        <path fill="#de2110" d="M227.5 309.4l.7.7-.7-.7z" />
        <path fill="#ef7b08" d="M228.2 309.4l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M231.2 309.9l.3.4-.3-.4z" />
        <path fill="#ef7b08" d="M246.5 309.4l.7.7-.7-.7z" />
        <path fill="#de3110" d="M247.2 309.4l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M248.1 309.9l.2.4-.2-.4m2.1 0l.2.4-.2-.4z" />
        <path fill="#ef9408" d="M256.8 309.6l.4.3-.4-.3z" />
        <path fill="#de3110" d="M259.1 309.4l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M263.4 309.4l.7.7-.8-.7zm8.4 0l-.7 2.7.7-2.7z" />
        <path fill="#de3110" d="M273.9 309.4l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M274.8 309.9l.3.4-.3-.4z" />
        <path fill="#ef7b08" d="M275.5 309.9l.3.4-.3-.4z" />
        <path fill="#e75a10" d="M278.8 309.4l.7.7-.7-.7z" />
        <path fill="#f7b508" d="M280.2 309.4l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M281.2 309.9l.2.4-.2-.4z" />
        <path fill="#de3110" d="M282.3 309.4l.7.7-.7-.7z" />
        <path fill="#ef7b08" d="M285.1 309.4l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M285.9 309.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M290.8 309.4l.7.7-.7-.7z" />
        <path fill="#210800" d="M291.5 309.4l.7.7-.7-.7z" />
        <path fill="#292921" d="M292.2 309.4l.7.7-.7-.7z" />
        <path fill="#313931" d="M292.9 309.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M293.6 309.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M294.3 309.4l1.4 1.4-1.4-1.4z" />
        <path fill="#8c8c8c" d="M295 309.4l.7.7-.7-.7z" />
        <path fill="#5a6b52" d="M295.7 309.4l.7.7-.7-.7z" />
        <path fill="#214210" d="M296.4 309.4l.7.7-.7-.7z" />
        <path fill="#184a00" d="M297.1 309.4l.7.7-.7-.7z" />
        <path fill="#293129" d="M297.8 309.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M300 309.4l.6.7-.7-.7z" />
        <path fill="#294221" d="M300.6 309.4l.7.7-.7-.7z" />
        <path fill="#296300" d="M302 309.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M302.7 309.4l.7.7-.7-.7z" />
        <path fill="#295200" d="M202.1 310l.7.7-.7-.6z" />
        <path fill="#63636b" d="M202.8 310l.7.7-.7-.6z" />
        <path fill="#9c9494" d="M214.8 310l.7.7-.7-.6z" />
        <path fill="#631808" d="M215.5 310l.7.7-.7-.6z" />
        <path fill="#ce2110" d="M216.2 310l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M217.6 310l.7.7-.7-.6z" />
        <path fill="#ef9408" d="M218.3 310l.7.7-.7-.6zm2.1 0l.7.7-.7-.6z" />
        <path fill="#ef7b08" d="M221.8 310l.7.7-.7-.6z" />
        <path fill="#de3110" d="M223.3 310l.6.7-.7-.6z" />
        <path fill="#ef7b08" d="M226 310l.8.7-.7-.6z" />
        <path fill="#de3110" d="M229.6 310l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M235.2 310l.7.7-.7-.6z" />
        <path fill="#de2110" d="M236 310l.6.7-.7-.6z" />
        <path fill="#f7b508" d="M244.1 310.3l.5.2-.5-.2m2.1 0l.5.2-.5-.2z" />
        <path fill="#e75a10" d="M247.2 310l-.7 1.4.7-1.3z" />
        <path fill="#ef9408" d="M249 310.3l.5.2-.5-.2z" />
        <path fill="#e75a10" d="M250.7 310l.7.7-.7-.6z" />
        <path fill="#ef7b08" d="M255.6 310l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M257 310l.7.7-.7-.6z" />
        <path fill="#de3110" d="M257.7 310l.7.7-.7-.6z" />
        <path fill="#f7b508" d="M261 310.3l.5.2-.5-.2z" />
        <path fill="#ef7b08" d="M263.4 310l.7.7-.8-.6z" />
        <path fill="#f7b508" d="M264.8 310l.6.7-.6-.6z" />
        <path fill="#ef9408" d="M270.4 310l.7.7-.7-.6zm9.1 0l.7.7-.7-.6z" />
        <path fill="#ef7b08" d="M280.2 310l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M282.3 310l.7.7-.7-.6m2.1 0l.8.6-.8-.6z" />
        <path fill="#f7b508" d="M285.1 310l.7.7-.7-.6z" />
        <path fill="#ef9408" d="M285.9 310l.7.7-.7-.6z" />
        <path fill="#e75a10" d="M288 310l.7.7-.7-.6z" />
        <path fill="#ffce08" d="M289 310.5l.1.5-.2-.5z" />
        <path fill="#7b1008" d="M292.2 310l.7.7-.7-.6z" />
        <path fill="#185200" d="M292.9 310l1.4 1.4v-1.3h-1.4z" />
        <path fill="#314231" d="M294.3 310l.7.7-.7-.6z" />
        <path fill="#dedede" d="M297.1 310l.7.7-.7-.6z" />
        <path fill="#9c9494" d="M297.8 310l.7.7-.7-.6z" />
        <path fill="#63636b" d="M298.5 310l.7.7-.7-.6z" />
        <path fill="#6b735a" d="M300.6 310l.7.7-.7-.6z" />
        <path fill="#184a00" d="M302 310l.7.7-.7-.6z" />
        <path fill="#52525a" d="M202.1 310.8l.7.6-.7-.6z" />
        <path fill="#cecece" d="M214.1 310.8l.7.6-.7-.6z" />
        <path fill="#631818" d="M214.8 310.8l.7.6-.7-.6z" />
        <path fill="#de3110" d="M217 310.8l.6.6-.7-.6z" />
        <path fill="#ffce08" d="M217.6 310.8l.7.6-.7-.6z" />
        <path fill="#ef7b08" d="M219 310.8l.7.6-.7-.6z" />
        <path fill="#ef9408" d="M219.7 310.8l.7.6-.7-.6z" />
        <path fill="#e75a10" d="M221.8 310.8l.7.6-.7-.6m4.3 0l.7.6-.7-.6z" />
        <path fill="#f7b508" d="M227.5 310.8l.7.6-.7-.6z" />
        <path fill="#e75a10" d="M228.2 310.8l.7.6-.7-.6z" />
        <path fill="#f7b508" d="M230.3 310.8l.7.6-.7-.6z" />
        <path fill="#ef9408" d="M231 310.8l-.7 1.3.7-1.4zm9.8 0l.7.6-.7-.6z" />
        <path fill="#e75a10" d="M243.7 310.8l.7.6-.8-.6z" />
        <path fill="#ef9408" d="M247.2 310.8l.7.6-.7-.6z" />
        <path fill="#f7b508" d="M247.9 310.8l.7.6-.7-.6m2 0l.8.6-.7-.6z" />
        <path fill="#ef9408" d="M250.7 310.8l.7.6-.7-.6z" />
        <path fill="#f7b508" d="M256.3 310.8l.7.6-.7-.6z" />
        <path fill="#ef9408" d="M258.4 310.8l.7.6-.7-.6z" />
        <path fill="#e75a10" d="M263.4 310.8l.7.6-.8-.6z" />
        <path fill="#ef7b08" d="M264.8 310.8l.6.6-.6-.6z" />
        <path fill="#f7b508" d="M274.6 310.8l.7.6-.7-.6z" />
        <path fill="#ef9408" d="M275.3 310.8l.7.6-.7-.6z" />
        <path fill="#ef7b08" d="M276.7 310.8l1.4 1.3-1.4-1.4z" />
        <path fill="#e75a10" d="M278.1 310.8l.7.6-.7-.6z" />
        <path fill="#ffce08" d="M278.8 310.8l.7.6-.7-.6z" />
        <path fill="#f7b508" d="M283 310.8l.7.6-.7-.6z" />
        <path fill="#ef7b08" d="M284.4 310.8l-.6 1.3.6-1.4zm1.5 0l.7.6-.7-.6z" />
        <path fill="#de3110" d="M287.3 310.8l.7.6-.7-.6z" />
        <path fill="#941808" d="M292.9 310.8l.7.6-.7-.6z" />
        <path fill="#319400" d="M294.3 310.8l.7.6-.7-.6z" />
        <path fill="#296300" d="M295.2 311.2l.3.5-.3-.5z" />
        <path fill="#314231" d="M295.7 310.8l.7.6-.7-.6z" />
        <path fill="#cecece" d="M296.4 310.8l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M300.6 310.8l.7.6-.7-.6z" />
        <path fill="#4a6342" d="M302 310.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M213.4 311.4l.7.7-.7-.7z" />
        <path fill="#631818" d="M214.1 311.4l.7.7-.7-.7z" />
        <path fill="#de2110" d="M219 311.4l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M219.7 311.4l.7.7-.7-.7z" />
        <path fill="#de3110" d="M221.1 311.4l.7.7-.7-.7z" />
        <path fill="#de2110" d="M222 311.9l.3.4-.2-.4z" />
        <path fill="#ef9408" d="M223.5 311.9l.2.4-.2-.4z" />
        <path fill="#e75a10" d="M224 311.4l1.3 1.4-1.4-1.4z" />
        <path fill="#de3110" d="M226 311.4l.8.7-.7-.7z" />
        <path fill="#e75a10" d="M227.5 311.4l.7.7-.7-.7zm5.6 0l.7.7-.7-.7z" />
        <path fill="#de3110" d="M238 311.4l.7.7-.7-.7zm6.4 0l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M245 311.4l.8.7-.7-.7z" />
        <path fill="#de3110" d="M245.8 311.4l.7.7-.7-.7m1.8.2l.5.3-.5-.3m2.8 0l.5.3-.5-.3zm8.7-.2l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M259.8 311.4l.7.7-.7-.7z" />
        <path fill="#de3110" d="M260.5 311.4l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M262.6 311.4l.7.7-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#de3110" d="M264.8 311.4v.7h2l-2-.7m3.5 0l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M269 311.4l.7.7-.7-.7z" />
        <path fill="#ef7b08" d="M274.6 311.4l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M279.5 311.4l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M281.2 311.9l.2.4-.2-.4z" />
        <path fill="#f7b508" d="M282.3 311.4l.7.7-.7-.7m2.1 0l.8.7-.8-.7z" />
        <path fill="#e75a10" d="M285.9 311.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M293.6 311.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M294.3 311.4l.7.7-.7-.7z" />
        <path fill="#297b00" d="M295.7 311.4l.7.7-.7-.7z" />
        <path fill="#185200" d="M296.4 311.4l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M297.1 311.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M300.9 311.9l.2.4-.2-.4z" />
        <path fill="#296300" d="M301.3 311.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M302 311.4l.7.7-.7-.7m-88.6.7l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M214.1 312l.7.8-.7-.7z" />
        <path fill="#e75a10" d="M217.6 312l.7.8-.7-.7z" />
        <path fill="#ffce08" d="M218.3 312l.7.8-.7-.7z" />
        <path fill="#ef7b08" d="M221.1 312l.7.8-.7-.7z" />
        <path fill="#f7b508" d="M222.5 312l.7.8-.7-.7z" />
        <path fill="#de2110" d="M224 312l.6.8-.7-.7z" />
        <path fill="#ef7b08" d="M225.4 312l.7.8-.7-.7z" />
        <path fill="#f7b508" d="M226.8 312l.7.8-.7-.7z" />
        <path fill="#ef7b08" d="M227.5 312l.7.8-.7-.7z" />
        <path fill="#e75a10" d="M231 312l.7.8-.7-.7z" />
        <path fill="#ef7b08" d="M231.7 312l.7.8-.7-.7z" />
        <path fill="#e75a10" d="M232.4 312l.7.8-.7-.7m42.9 0l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M276 312l.7.8-.7-.7z" />
        <path fill="#e75a10" d="M276.7 312l.7.8-.7-.7z" />
        <path fill="#de3110" d="M277.4 312l.7.8-.7-.7z" />
        <path fill="#e75a10" d="M278.8 312l.7.8-.7-.7m1.4 0l.7.7-.7-.7z" />
        <path fill="#de3110" d="M281.6 312l.7.8-.7-.7z" />
        <path fill="#ffce08" d="M282.6 312.5l.2.5-.2-.5z" />
        <path fill="#e75a10" d="M283.5 312.3l.5.2-.5-.2z" />
        <path fill="#de2110" d="M285.9 312l.7.8-.7-.7z" />
        <path fill="#ef7b08" d="M286.6 312l.7.8-.7-.7z" />
        <path fill="#e75a10" d="M288 312l.7.8-.7-.7zm1.6.5l.2.5-.2-.5z" />
        <path fill="#736b6b" d="M294.3 312l.7.8-.7-.7z" />
        <path fill="#cecece" d="M295 312l.7.8-.7-.7z" />
        <path fill="#8c8c8c" d="M295.7 312l.7.8-.7-.7z" />
        <path fill="#294221" d="M296.4 312l.7.8-.7-.7z" />
        <path fill="#082108" d="M297.1 312l.7.8-.7-.7z" />
        <path fill="#8c8c8c" d="M297.8 312l.7.8-.7-.7z" />
        <path fill="#103900" d="M301.3 312l.7.8-.7-.7z" />
        <path fill="#dedede" d="M302 312l.7.8-.7-.7z" />
        <path fill="#6b4242" d="M213.4 312.8l.7.6-.7-.6z" />
        <path fill="#ef7b08" d="M219.7 312.8l.7.6-.7-.6z" />
        <path fill="#ef9408" d="M220.4 312.8l.7.6-.7-.6z" />
        <path fill="#ef7b08" d="M222.5 312.8l.7.6-.7-.6z" />
        <path fill="#f7b508" d="M225.4 312.8l.7.6-.7-.6z" />
        <path fill="#e75a10" d="M226.8 312.8l.7.6-.7-.6z" />
        <path fill="#de3110" d="M227.5 312.8l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M243 312.8v.6h4.2l-4.3-.6z" />
        <path fill="#7b1008" d="M247.2 312.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M247.9 312.8v.6h13.3l-13.3-.6z" />
        <path fill="#ad1810" d="M261.2 312.8v.6h4.3l-4.3-.6z" />
        <path fill="#ce2110" d="M265.5 312.8l.7.6-.7-.6z" />
        <path fill="#de3110" d="M280.2 312.8l.7.6-.7-.6z" />
        <path fill="#ef7b08" d="M281 312.8l.6.6-.7-.6z" />
        <path fill="#e75a10" d="M281.6 312.8l.7.6-.7-.6z" />
        <path fill="#de3110" d="M283.5 313l.5.2-.5-.2z" />
        <path fill="#f7b508" d="M285.1 312.8l1.4 1.3-1.4-1.3z" />
        <path fill="#e75a10" d="M285.9 312.8l.7.6-.7-.6z" />
        <path fill="#ef9408" d="M288 312.8l.7.6-.7-.6z" />
        <path fill="#631818" d="M294.3 312.8l.7.6-.7-.6z" />
        <path fill="#cecece" d="M297.4 313.2l.2.5-.2-.5z" />
        <path fill="#7b7373" d="M297.8 312.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M298.5 312.8l.7.6-.7-.6m2.1 0l.7.6-.7-.6z" />
        <path fill="#52525a" d="M301.3 312.8l.7.6-.7-.6z" />
        <path fill="#dedede" d="M205 313.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M205.7 313.4l.7.7-.7-.7z" />
        <path fill="#6b4242" d="M206.4 313.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M209.2 313.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M209.9 313.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M210.6 313.4l.7.7-.7-.7z" />
        <path fill="#6b2908" d="M213.4 313.4l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M218.3 313.4l.7.7-.7-.7z" />
        <path fill="#ffce08" d="M219.3 313.9l.2.4-.2-.4z" />
        <path fill="#f7b508" d="M221.1 313.4l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M224 313.4l.6.7-.7-.7z" />
        <path fill="#de3110" d="M224.7 313.4l.7.7-.8-.7z" />
        <path fill="#ad1810" d="M234.3 313.6l.4.3-.4-.2z" />
        <path fill="#941808" d="M235.2 313.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M236 313.4l.6.7-.7-.7z" />
        <path fill="#733129" d="M236.6 313.4l.7.7-.7-.7z" />
        <path fill="#734a42" d="M237.8 313.6l.5.3-.5-.2z" />
        <path fill="#845a52" d="M238.7 313.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M239.4 313.4v.7h2.8l-2.8-.7z" />
        <path fill="#ada5a5" d="M242.2 313.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M243 313.4v.7h2l-2-.7z" />
        <path fill="#cecece" d="M245 313.4l.8.7-.7-.7z" />
        <path fill="#63636b" d="M245.8 313.4l.7.7-.7-.7z" />
        <path fill="#295200" d="M246.5 313.4l2 2-2-2z" />
        <path fill="#428c00" d="M247.2 313.4c1.8 2.3 3.3 3.2 6.3 2.7l-6.3-2.7z" />
        <path fill="#397b00" d="M251.4 313.4l1.4 3.4h1.4l-2.8-3.4z" />
        <path fill="#63636b" d="M252 313.4l2.2 2-2.1-2z" />
        <path fill="#cecece" d="M254.9 313.4l-.7 1.4.7-1.4z" />
        <path fill="#214210" d="M255.6 313.4l.7.7-.7-.7z" />
        <path fill="#319400" d="M256.3 316.8l5.6-2.7c-2.8-1.1-6.2-.8-5.6 2.7z" />
        <path fill="#185200" d="M262 313.4l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M262.6 313.4l.7.7-.7-.7z" />
        <path fill="#946b63" d="M269 313.4l.7.7-.7-.7z" />
        <path fill="#734a42" d="M270.1 313.6l.5.3-.5-.2z" />
        <path fill="#8c3939" d="M271 313.4l.8.7-.7-.7z" />
        <path fill="#631808" d="M271.8 313.4l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M272.5 313.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M273.7 313.6l.4.3-.4-.2z" />
        <path fill="#ce2110" d="M274.6 313.4l.7.7-.7-.7z" />
        <path fill="#ef9408" d="M285 313.6l.4.3-.5-.2m1.7-.3l.7.7-.7-.7z" />
        <path fill="#ef7b08" d="M287.3 313.4l.7.7-.7-.7z" />
        <path fill="#f7b508" d="M288 313.4l.7.7-.7-.7z" />
        <path fill="#de3110" d="M289.4 313.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M294.3 313.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M297.8 313.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M298.5 313.4l.7.7-.7-.7zm3.5 0l.7.7-.7-.7z" />
        <path fill="#cecece" d="M302.7 313.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M204.3 314.1l.6.7-.7-.7z" />
        <path fill="#631818" d="M205 314.1l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M205.7 314.1l.7.7-.7-.7z" />
        <path
          fill="#de2110"
          d="M205 320.1c7.3-4.2 16.8 7.4 22.5-2l-.7-.7c-2.4.9-5.2 2.8-7.8 2.4-1.7-.2-19.4-11.7-14 .3z"
        />
        <path fill="#bd2110" d="M209.9 314.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M210.6 314.1l.7.7-.7-.7z" />
        <path fill="#631818" d="M211.3 314.1l.7.7-.7-.7z" />
        <path fill="#63636b" d="M212 314.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M212.7 314.1l.7.7-.7-.7z" />
        <path fill="#734a42" d="M213.4 314.1l.7.7-.7-.7z" />
        <path fill="#de3110" d="M218.3 314.1l.7.7-.7-.7z" />
        <path fill="#ef7b08" d="M219.7 314.1l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M228.2 314.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M228.9 314.1l.7.7-.7-.7z" />
        <path fill="#631808" d="M229.6 314.1l.7.7-.7-.7z" />
        <path fill="#733129" d="M230.3 314.1l.7.7-.7-.7z" />
        <path fill="#734a42" d="M231 314.1l.7.7-.7-.7z" />
        <path fill="#8c6363" d="M231.7 314.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M232.9 314.3l.4.2-.4-.2z" />
        <path fill="#bdbdbd" d="M234.3 314.3l.4.2-.4-.2z" />
        <path fill="#efefef" d="M235.2 314.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M246.5 314.1l2 2-2-2z" />
        <path fill="#103910" d="M254.9 314.1l.7.7-.7-.7z" />
        <path fill="#214210" d="M261.2 314.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M262 314.1l.6.7-.7-.7z" />
        <path fill="#bdbdbd" d="M273.7 314.3l.4.2-.4-.2z" />
        <path fill="#8c8c8c" d="M275 314.3l.5.2-.4-.2z" />
        <path fill="#8c7373" d="M276 314.1l.7.7-.7-.7z" />
        <path fill="#734a42" d="M276.7 314.1l.7.7-.7-.7z" />
        <path fill="#733939" d="M277.4 314.1l.7.7-.7-.7z" />
        <path fill="#631808" d="M278.1 314.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M278.8 314.1l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M279.5 314.1l.7.7-.7-.7z" />
        <path fill="#e75a10" d="M285.9 314.1l.7.7-.7-.7m2.3.5l.2.4-.2-.4z" />
        <path fill="#6b2908" d="M294.3 314.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M295 314.1l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M295.7 314.1l.7.7-.7-.7z" />
        <path fill="#733129" d="M296.4 314.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M297.1 314.1l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M297.8 314.1l.7.7-.7-.7z" />
        <path
          fill="#de2110"
          d="M282.3 317.4c-1 9.4 16.6.1 21.1 2.7 2.5-5-3.2-7.4-7.6-4.7-2 1.3-3.1 3.9-5.8 4.4-2.6.4-5.4-1.4-7.7-2.4z"
        />
        <path fill="#ce2110" d="M302 314.1l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M302.7 314.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M303.4 314.1l.8.7-.8-.7m-99.8.7l.6.6-.7-.6z" />
        <path fill="#631808" d="M204.3 314.8l.6.6-.7-.6z" />
        <path fill="#941808" d="M212.7 314.8l.7.6-.7-.6z" />
        <path fill="#310000" d="M213.4 314.8l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M214.1 314.8l.7.6-.7-.6z" />
        <path fill="#ef9408" d="M219 314.8l.7.6-.7-.6z" />
        <path fill="#e75a10" d="M219.7 314.8l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M224 314.8l.6.6-.7-.6z" />
        <path fill="#ad1810" d="M224.7 314.8l.7.6-.8-.6z" />
        <path fill="#7b1008" d="M225.4 314.8l.7.6-.7-.6z" />
        <path fill="#6b2908" d="M226 314.8l.8.6-.7-.6z" />
        <path fill="#734a42" d="M226.8 314.8l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M227.5 314.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M228.2 314.8l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M228.9 314.8l.7.6-.7-.6z" />
        <path fill="#293129" d="M254.2 314.8l.7.6-.7-.6z" />
        <path fill="#297b00" d="M254.9 314.8l1.4 2-1.4-2m5 0l-.8 1.3.7-1.3z" />
        <path fill="#103910" d="M260.5 314.8l.7.6-.7-.6z" />
        <path fill="#cecece" d="M261.2 314.8l-.7 1.3.7-1.3z" />
        <path fill="#bdbdbd" d="M278.8 314.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M279.5 314.8l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M280.2 314.8l.7.6-.7-.6z" />
        <path fill="#734a42" d="M281 314.8l.6.6-.7-.6z" />
        <path fill="#733129" d="M281.6 314.8l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M282.3 314.8l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M283 314.8l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M283.8 314.8l.6.6-.6-.6z" />
        <path fill="#f7b508" d="M288.7 314.8l.7.6-.7-.6z" />
        <path fill="#420000" d="M294.3 314.8l.7.6-.7-.6z" />
        <path fill="#941808" d="M295 314.8l.7.6-.7-.6m8.4 0l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M304.1 314.8l.7.6-.7-.6z" />
        <path fill="#efefef" d="M202.8 315.4l.7.7-.7-.7z" />
        <path fill="#842118" d="M203.6 315.4l.7.7-.8-.7z" />
        <path fill="#bd2110" d="M213.4 315.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M214.1 315.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M221.8 315.4l.7.7-.7-.7z" />
        <path fill="#520808" d="M224.7 315.4l.7.7-.8-.7z" />
        <path fill="#bdbdbd" d="M225.4 315.4l.7.7-.7-.7z" />
        <path fill="#214210" d="M248.6 315.4l.7.7-.7-.7z" />
        <path fill="#103900" d="M254.2 315.4l.7.7-.7-.7z" />
        <path fill="#293129" d="M259.8 315.4l.7.7-.7-.7z" />
        <path fill="#dedede" d="M282.3 315.4l.7.7-.7-.7z" />
        <path fill="#391810" d="M283 315.4l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M283.8 315.4l.6.7-.6-.7z" />
        <path fill="#5a1008" d="M284.4 315.4l.8.7-.8-.7z" />
        <path fill="#631808" d="M285.1 315.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M285.9 315.4l1.4 1.4-1.4-1.4m7.7 0l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M294.3 315.4l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M304.1 315.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M304.9 315.4l.7.7-.8-.7z" />
        <path fill="#8c8c8c" d="M202.8 316.1l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M203.6 316.1l.7.7-.8-.7z" />
        <path fill="#7b1008" d="M214.1 316.1l.7.7-.7-.7z" />
        <path fill="#b51010" d="M214.8 316.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M221.6 316.3l.5.2-.5-.2z" />
        <path fill="#631818" d="M225.4 316.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M226 316.1l.8.7-.7-.7z" />
        <path fill="#cecece" d="M245.8 316.1l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M246.5 316.1l.7.7-.7-.7z" />
        <path fill="#734a42" d="M247.2 316.1v.7h2l-2-.7z" />
        <path fill="#293100" d="M249.3 316.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M250 316.1l.7.7-.7-.7z" />
        <path fill="#295200" d="M254.2 316.1l.7.7-.7-.7z" />
        <path fill="#082108" d="M254.9 316.1l.7.7-.7-.7z" />
        <path fill="#296300" d="M257.7 316.1l.7.7-.7-.7z" />
        <path fill="#184a00" d="M258.4 316.1l.7.7-.7-.7z" />
        <path fill="#392100" d="M259.1 316.1l.7.7-.7-.7z" />
        <path fill="#733939" d="M259.8 316.1l.7.7-.7-.7z" />
        <path fill="#734a42" d="M260.5 316.1l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M261.2 316.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M262 316.1l.6.7-.7-.7z" />
        <path fill="#cecece" d="M281.6 316.1l-.7 1.3.7-1.3z" />
        <path fill="#5a1010" d="M282.3 316.1l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M283 316.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M285.9 316.1l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M292.9 316.1l1.4 1.3-1.4-1.3z" />
        <path fill="#5a1008" d="M293.6 316.1l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M304.9 316.1l.7.7-.8-.7z" />
        <path fill="#8c6363" d="M202.8 316.8l.7.6-.7-.6z" />
        <path fill="#520808" d="M214.8 316.8l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M215.5 316.8l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M224.7 316.8l.7.6-.8-.6z" />
        <path fill="#7b1008" d="M225.4 316.8l-.7 1.3.7-1.3z" />
        <path fill="#100808" d="M226 316.8l.8.6-.7-.6z" />
        <path fill="#9c9494" d="M226.8 316.8l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M243 316.8l.6.6-.7-.6z" />
        <path fill="#ada5a5" d="M243.7 316.8l.7.6-.8-.6z" />
        <path fill="#8c8c8c" d="M244.3 316.8l.7.6-.7-.6z" />
        <path fill="#52525a" d="M245 316.8l.8.6-.7-.6z" />
        <path fill="#7b1008" d="M245.8 316.8l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M246.5 316.8l.7.6-.7-.6z" />
        <path fill="#de2110" d="M245.8 320.1l5.6.7c-.4-4.1-4.8-5.1-5.6-.7z" />
        <path fill="#b51010" d="M250 316.8l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M250.7 316.8l.7.6-.7-.6z" />
        <path fill="#292100" d="M251.4 316.8l.7.6-.7-.6z" />
        <path fill="#422100" d="M252 316.8l.8.6-.7-.6z" />
        <path fill="#941808" d="M252.8 316.8l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M253.5 316.8v.6h2.1l-2.1-.6z" />
        <path fill="#311000" d="M255.6 316.8l.7.6-.7-.6z" />
        <path fill="#293100" d="M256.3 316.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M257 316.8l.7.6-.7-.6z" />
        <path fill="#941808" d="M257.7 316.8l.7.6-.7-.6z" />
        <path fill="#de2110" d="M257 317.4l.7 3.4 5-.7c-.6-3.3-2.6-3.3-5.7-2.7z" />
        <path fill="#b51010" d="M262 316.8l.6.6-.7-.6z" />
        <path fill="#423131" d="M262.6 316.8l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M263.4 316.8l.7.6-.8-.6z" />
        <path fill="#9c9494" d="M264 316.8l.8.6-.8-.6z" />
        <path fill="#bdbdbd" d="M264.8 316.8l.6.6-.6-.6z" />
        <path fill="#efefef" d="M265.5 316.8l.7.6-.7-.6z" />
        <path fill="#101810" d="M281.6 316.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M282.3 316.8l.7.6-.7-.6z" />
        <path fill="#b51010" d="M283 316.8l.7.6-.7-.6z" />
        <path fill="#520808" d="M292.9 316.8l.7.6-.7-.6z" />
        <path fill="#734a42" d="M305 317.2l.3.5-.2-.5z" />
        <path fill="#8c8c8c" d="M202.8 317.4l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M214.8 317.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M215.5 317.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M223.3 317.4l.6.7-.7-.7z" />
        <path fill="#5a1008" d="M224 317.4l.6.7-.7-.7z" />
        <path fill="#ce2110" d="M225.4 317.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M226.8 317.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M227.5 317.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M240.1 317.4l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M240.8 317.4l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M241.5 317.4l.7.7-.7-.7z" />
        <path fill="#631818" d="M242.2 317.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M243 317.4l.6.7-.7-.7z" />
        <path fill="#b51010" d="M243.7 317.4l.7.7-.8-.7z" />
        <path fill="#de2110" d="M244.3 317.4l-2.8.7v4c2.5-1 3.9-2 2.8-4.7z" />
        <path fill="#5a1008" d="M245 317.4l.8.7-.7-.7z" />
        <path fill="#520808" d="M251.4 317.4l.7.7-.7-.7z" />
        <path fill="#de2110" d="M252 317.4v4h4.3v-4h-4.2z" />
        <path fill="#520808" d="M256.3 317.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M262.6 317.4l.7.7-.7-.7z" />
        <path fill="#b51010" d="M263.4 317.4l.7.7-.8-.7z" />
        <path fill="#bd2110" d="M264 317.4l.8.7-.8-.7z" />
        <path fill="#ad1810" d="M264.8 317.4l.6.7-.6-.7z" />
        <path fill="#7b1008" d="M265.5 317.4l.7.7-.7-.7z" />
        <path fill="#6b4242" d="M266.2 317.4l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M266.9 317.4l.7.7-.7-.7z" />
        <path fill="#dedede" d="M267.6 317.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M280.2 317.4l.7.7-.7-.7z" />
        <path fill="#5a1010" d="M281 317.4l.6.7-.7-.7z" />
        <path fill="#ce2110" d="M281.6 317.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M283 317.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M283.8 317.4l.6.7-.6-.7z" />
        <path fill="#941808" d="M284.4 317.4l.8.7-.8-.7z" />
        <path fill="#7b1008" d="M292.2 317.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M292.9 317.4l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M203 318.6l.3.4-.2-.4z" />
        <path fill="#ad1810" d="M203.6 318.1l.7.7-.8-.7z" />
        <path fill="#ce2110" d="M207 318.1l.8.7-.7-.7z" />
        <path fill="#bd2110" d="M207.8 318.1l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M215.5 318.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M216.2 318.1l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M221.8 318.1l.7.7-.7-.7z" />
        <path fill="#520808" d="M222.5 318.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M223.3 318.1l.6.7-.7-.7z" />
        <path fill="#ada5a5" d="M227.5 318.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M240.4 318.6l.2.4-.2-.4z" />
        <path fill="#941808" d="M240.8 318.1l.7.7-.7-.7z" />
        <path fill="#631808" d="M245 318.1v2.7h.8l-.7-2.7m6.3 0v2.7h.7l-.7-2.7z" />
        <path fill="#941808" d="M256.3 318.1l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M257 318.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M262.6 318.1l-2 3.4h2V320l1.4.7V318h-1.4z" />
        <path fill="#de2110" d="M264 318.1v3.4l2.9.6.7-3.3-3.6-.7z" />
        <path fill="#bd2110" d="M266.9 318.1l.7.7-.7-.7z" />
        <path fill="#6b4242" d="M267.6 318.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M280.2 318.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M281 318.1l.6.7-.7-.7m3.6 0l.6.7-.7-.7z" />
        <path fill="#520808" d="M285.1 318.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M285.9 318.1l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M291.5 318.1l.7.7-.7-.7z" />
        <path fill="#631808" d="M292.2 318.1l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M300.4 318.3l.5.3-.5-.3m3.8-.2l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M304.9 318.1l.7.7-.8-.7z" />
        <path fill="#cecece" d="M198 318.8l.6.6-.7-.6z" />
        <path fill="#bdbdbd" d="M198.6 318.8l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M202.1 318.8l.7.6-.7-.6z" />
        <path fill="#5a1010" d="M203.6 318.8l.7.6-.8-.6z" />
        <path fill="#bd2110" d="M205.7 318.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M206.4 318.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M207 318.8l.8.6-.7-.6z" />
        <path fill="#941808" d="M207.8 318.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M208.5 318.8l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M209.2 318.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M209.9 318.8l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M210.6 318.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M216.2 318.8l.7.6-.7-.6z" />
        <path fill="#941808" d="M217.2 319.2l.2.5-.3-.5z" />
        <path fill="#b51010" d="M220.4 318.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M221.1 318.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M221.8 318.8l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M222.5 318.8l.7.6-.7-.6z" />
        <path fill="#941808" d="M226.8 318.8l.7.6-.7-.6z" />
        <path fill="#cecece" d="M227.5 318.8l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M240.8 318.8l.7.6-.7-.6m15.5 0v1.3h1.4v-1.3h-1.4z" />
        <path fill="#8c8c8c" d="M267.8 319.2l.2.5-.2-.5z" />
        <path fill="#dedede" d="M280.2 318.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M281 318.8l.6.6-.7-.6z" />
        <path fill="#941808" d="M285.9 318.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M286.6 318.8l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M287.3 318.8l.7.6-.7-.6z" />
        <path fill="#b51010" d="M290.8 318.8l.7.6-.7-.6z" />
        <path fill="#520808" d="M291.5 318.8l.7.6-.7-.6z" />
        <path fill="#ce2110" d="M292.2 318.8l.7.6-.7-.6m5 0l.6.6-.7-.6z" />
        <path fill="#7b1008" d="M297.8 318.8l.7.6-.7-.6z" />
        <path fill="#631808" d="M299 319l.5.2-.5-.2z" />
        <path fill="#941808" d="M300 318.8l.6.6-.7-.6z" />
        <path fill="#7b1008" d="M300.6 318.8l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M301.3 318.8l.7.6-.7-.6z" />
        <path fill="#b51010" d="M302 318.8l.7.6-.7-.6z" />
        <path fill="#520808" d="M304.1 318.8l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M305.3 319l.5.2-.5-.2z" />
        <path fill="#bdbdbd" d="M309.5 319l.5.2-.5-.2z" />
        <path fill="#ada5a5" d="M195.8 319.4l.7.7-.7-.7z" />
        <path fill="#63636b" d="M196.5 319.4l.7.7-.7-.7z" />
        <path fill="#733129" d="M197.2 319.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M198 319.4l.6.7-.7-.7z" />
        <path fill="#de2110" d="M194.4 321.5c2.8 5.7 17.6 7.3 21.1 1.3-8.2 1-13.4-5.2-21.1-1.3z" />
        <path fill="#ce2110" d="M202.1 319.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M202.8 319.4l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M203.6 319.4l.7.7-.8-.7z" />
        <path fill="#ce2110" d="M206.4 319.4l.7.7-.7-.7z" />
        <path fill="#de2110" d="M214.8 322.1c-6.6-5-10.9 1.3 0 0z" />
        <path fill="#ce2110" d="M209.9 319.4l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M210.6 319.4l.7.7-.7-.7z" />
        <path fill="#520808" d="M211.3 319.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M212 319.4l.7.7-.7-.7zm8.4 0l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M221.1 319.4l.7.7-.7-.7z" />
        <path fill="#5a2121" d="M226.8 319.4l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M240.8 319.4l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M281 319.4l.6.7-.7-.7z" />
        <path fill="#ce2110" d="M281.6 319.4l.7.7-.7-.7z" />
        <path fill="#941808" d="M287.3 319.4l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M288 319.4l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M295.7 319.4l.7.7-.7-.7z" />
        <path fill="#631808" d="M296.9 319.7l.5.2-.5-.2z" />
        <path fill="#bd2110" d="M297.8 319.4l.7.7-.7-.7z" />
        <path fill="#de2110" d="M293.6 321.5v.6c3.6.5 7.7 1.8 8.4-2.7l-8.4 2z" />
        <path fill="#520808" d="M302 319.4l.7.7-.7-.7z" />
        <path fill="#b51010" d="M303.4 319.4l.8.7-.8-.7z" />
        <path fill="#5a1008" d="M304.1 319.4l-.7 1.4.8-1.4z" />
        <path fill="#ad1810" d="M304.9 319.4l.7.7-.8-.7z" />
        <path fill="#ce2110" d="M305.6 319.4l.7.7-.7-.7z" />
        <path fill="#de2110" d="M292.9 322.8c3.5 6 18.3 4.4 21-1.3-7.6-3.9-12.8 2.3-21 1.3z" />
        <path fill="#941808" d="M309.8 319.4l.7.7-.7-.7z" />
        <path fill="#6b2908" d="M310.5 319.4l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M311.2 319.4l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M311.9 319.4l.7.7-.7-.7z" />
        <path fill="#efefef" d="M312.6 319.4l.7.7-.7-.7z" />
        <path fill="#cecece" d="M194.4 320.1l-1.4 2 1.4-2z" />
        <path fill="#5a3131" d="M195.1 320.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M195.8 320.1l.7.7-.7-.7z" />
        <path fill="#631808" d="M204.3 320.1l.6.7-.7-.7z" />
        <path fill="#ad1810" d="M212 320.1l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M213.2 320.4l.4.2-.4-.2z" />
        <path fill="#bd2110" d="M214.1 320.1l.7.7-.7-.7z" />
        <path fill="#631818" d="M226 320.1l.8.7-.7-.7z" />
        <path fill="#cecece" d="M226.8 320.1l-.7 1.4.7-1.4z" />
        <path fill="#631808" d="M240.8 320.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M245.8 320.1v.7l2.8.7-2.8-1.4z" />
        <path fill="#941808" d="M256.3 320.1l1.4 1.4-1.4-1.4z" />
        <path fill="#ce2110" d="M257 320.1l.7.7-.7-.7z" />
        <path fill="#b51010" d="M259.8 320.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M262.6 320.1l1.4 1.4-1.4-1.4z" />
        <path fill="#ad1810" d="M266.9 320.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M267.6 320.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M281 320.1l.6.7-.7-.7z" />
        <path fill="#5a2121" d="M281.6 320.1l1.4 1.4-1.4-1.4z" />
        <path fill="#ce2110" d="M293.6 320.1l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M294.3 320.1l-.7 1.4.7-1.4z" />
        <path fill="#5a1008" d="M295 320.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M295.7 320.1l.7.7-.7-.7z" />
        <path fill="#b51010" d="M302 320.1l.7.7-.7-.7z" />
        <path fill="#631808" d="M302.7 320.1l.7.7-.7-.7z" />
        <path fill="#b51010" d="M311.9 320.1l.7.7-.7-.7z" />
        <path fill="#5a2121" d="M312.6 320.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M313.3 320.1l.7.7-.7-.7z" />
        <path fill="#631818" d="M194.4 320.8l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M204.3 320.8l.6.7-.7-.7z" />
        <path fill="#210800" d="M205 320.8l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M205.7 320.8l-.7 1.3.7-1.3z" />
        <path fill="#ce2110" d="M213.4 320.8l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M214.1 320.8l.7.7-.7-.7z" />
        <path fill="#420000" d="M214.8 320.8l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M215.5 320.8l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M224.7 320.8l.7.7-.8-.7z" />
        <path fill="#5a1010" d="M225.4 320.8l.7.7-.7-.7z" />
        <path fill="#734a42" d="M240.8 320.8l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M244.3 320.8l.7.7-.7-.7z" />
        <path fill="#310000" d="M245 320.8l.8.7-.7-.7z" />
        <path fill="#941808" d="M246 321.2l.2.5-.2-.5z" />
        <path fill="#b51010" d="M247 321l.4.2-.5-.2z" />
        <path fill="#7b1008" d="M248.6 320.8l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M249.3 320.8l.7.7-.7-.7z" />
        <path fill="#631808" d="M250 320.8l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M250.7 320.8l.7.7-.7-.7z" />
        <path fill="#520808" d="M251.4 320.8l.7.7-.7-.7z" />
        <path fill="#420000" d="M256.3 320.8l.7.7-.7-.7z" />
        <path fill="#631808" d="M257.7 320.8v.7h2.1l-2-.7z" />
        <path fill="#941808" d="M259.8 320.8l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M261.2 320.8l.7.7-.7-.7z" />
        <path fill="#310000" d="M262.6 320.8l.7.7-.7-.7z" />
        <path fill="#941808" d="M266.9 320.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M267.6 320.8l.7.7-.7-.7m14 0l.7.7-.7-.7z" />
        <path fill="#b51010" d="M283 320.8l.7.7-.7-.7m9.2 0l.7.7-.7-.7z" />
        <path fill="#520808" d="M292.9 320.8l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M294.3 320.8l.7.7-.7-.7m7.7 0l.7.7-.7-.7z" />
        <path fill="#210800" d="M302.7 320.8l.7.7-.7-.7z" />
        <path fill="#bd2110" d="M303.4 320.8l.8.7-.8-.7z" />
        <path fill="#7b1008" d="M313.3 320.8l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M314 320.8l.7.7-.7-.7z" />
        <path fill="#631818" d="M193.7 321.5l3.5 4-3.5-4z" />
        <path fill="#420000" d="M205.7 321.5l.7.6-.7-.6z" />
        <path fill="#842118" d="M214.8 321.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M215.5 321.5l.7.6-.7-.6z" />
        <path fill="#524242" d="M216.2 321.5l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M217 321.5l.6.6-.7-.6z" />
        <path fill="#b51010" d="M217.6 321.5l.7.6-.7-.6m5.7 0l.6.6-.7-.6z" />
        <path fill="#5a1008" d="M224 321.5l.6.6-.7-.6z" />
        <path fill="#7b7373" d="M224.7 321.5l.7.6-.8-.6z" />
        <path fill="#efefef" d="M225.4 321.5l.7.6-.7-.6z" />
        <path fill="#845a52" d="M240.8 321.5l.7.6-.7-.6z" />
        <path fill="#bd2110" d="M242.2 321.5l.7.6-.7-.6z" />
        <path fill="#631818" d="M243 321.5l.6.6-.7-.6z" />
        <path fill="#7b5252" d="M243.7 321.5l.7.6-.8-.6z" />
        <path fill="#8c8c8c" d="M244.3 321.5l.7.6-.7-.6z" />
        <path fill="#63636b" d="M245 321.5l.8.6-.7-.6z" />
        <path fill="#de2110" d="M246.5 321.5v.6h2.8l-2.8-.6z" />
        <path fill="#b51010" d="M249.3 321.5l.7.6-.7-.6z" />
        <path fill="#941808" d="M250 321.5l.7.6-.7-.6z" />
        <path fill="#5a1008" d="M250.7 321.5l.7.6-.7-.6z" />
        <path fill="#392100" d="M251.4 321.5l.7.6-.7-.6z" />
        <path fill="#292100" d="M252 321.5l.8.6-.7-.6z" />
        <path fill="#7b1008" d="M252.8 321.5l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M254 321.7l.4.2-.4-.2z" />
        <path fill="#941808" d="M254.9 321.5l.7.6-.7-.6z" />
        <path fill="#311000" d="M255.6 321.5l.7.6-.7-.6z" />
        <path fill="#292100" d="M256.3 321.5l.7.6-.7-.6z" />
        <path fill="#4a1000" d="M257 321.5l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M257.7 321.5l.7.6-.7-.6z" />
        <path fill="#ad1810" d="M258.4 321.5l.7.6-.7-.6z" />
        <path fill="#de2110" d="M259.1 321.5v.6h2.8l-2.8-.6z" />
        <path fill="#b51010" d="M262 321.5l.6.6-.7-.6z" />
        <path fill="#5a1010" d="M262.6 321.5l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M263.4 321.5l.7.6-.8-.6z" />
        <path fill="#7b7373" d="M264 321.5l.8.6-.8-.6z" />
        <path fill="#6b2131" d="M264.8 321.5l.6.6-.6-.6z" />
        <path fill="#941808" d="M265.5 321.5l.7.6-.7-.6z" />
        <path fill="#631808" d="M266.9 321.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M283 321.5l.7.6-.7-.6z" />
        <path fill="#631818" d="M283.8 321.5l.6.6-.6-.6z" />
        <path fill="#ad1810" d="M284.4 321.5l.8.6-.8-.6z" />
        <path fill="#b51010" d="M290 321.5l.8.6-.7-.6z" />
        <path fill="#7b1008" d="M290.8 321.5l.7.6-.7-.6z" />
        <path fill="#733939" d="M291.5 321.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M292.2 321.5l.7.6-.7-.6z" />
        <path fill="#631818" d="M292.9 321.5l.7.6-.7-.6z" />
        <path fill="#941808" d="M314 321.5l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M314.7 321.5l.7.6-.7-.6z" />
        <path fill="#63636b" d="M193 322.1l2.8 2.7-2.8-2.7z" />
        <path fill="#941808" d="M205.7 322.1l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M206.4 322.1l1.4 1.4-1.4-1.4z" />
        <path fill="#ce2110" d="M212 322.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M213 322.6l.2.4-.3-.4z" />
        <path fill="#631808" d="M213.9 322.4l.4.2-.4-.2z" />
        <path fill="#7b1008" d="M214.8 322.1l.7.7-.7-.7z" />
        <path fill="#392121" d="M215.5 322.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M217 322.1l.6.7-.7-.7z" />
        <path fill="#ada5a5" d="M217.6 322.1l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M218.3 322.1l.7.7-.7-.7z" />
        <path fill="#6b2131" d="M219 322.1l.7.7-.7-.7z" />
        <path fill="#631808" d="M219.7 322.1l.7.7-.7-.7z" />
        <path fill="#9c4239" d="M220.4 322.1l.7.7-.7-.7z" />
        <path fill="#ad524a" d="M221.1 322.1l.7.7-.7-.7z" />
        <path fill="#734a42" d="M221.8 322.1l.7.7-.7-.7z" />
        <path fill="#63636b" d="M222.5 322.1l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M223.3 322.1l.6.7-.7-.7z" />
        <path fill="#efefef" d="M224 322.1l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M240.8 322.1l.7.7-.7-.7z" />
        <path fill="#6b2131" d="M241.5 322.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M242.2 322.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M243 322.1l.6.7-.7-.7m2.1 0l.8.7-.8-.7z" />
        <path fill="#313931" d="M245.8 322.1l.7.7-.7-.7z" />
        <path fill="#184a00" d="M246.5 322.1v.7h2.8l-2.8-.7z" />
        <path fill="#296300" d="M249.3 322.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M250 322.1l-.7 2.7.7-2.7z" />
        <path fill="#319400" d="M251.2 322.4l.4.2-.4-.2z" />
        <path fill="#214210" d="M252 322.1l-.6 1.4.7-1.4z" />
        <path fill="#9c9494" d="M252.8 322.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M254 322.4l.4.2-.4-.2z" />
        <path fill="#efefef" d="M254.9 322.1l.7.7-.7-.7z" />
        <path fill="#63636b" d="M255.6 322.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M256.3 322.1l.7.7-.7-.7z" />
        <path fill="#428c00" d="M257 322.1c2.6 3 7 6.8 10.6 3.4L257 322z" />
        <path fill="#397b00" d="M258.4 322.1l.7.7-.7-.7z" />
        <path fill="#294200" d="M259.1 322.1v.7h2.8l-2.8-.7z" />
        <path fill="#103900" d="M262 322.1l.6.7-.7-.7z" />
        <path fill="#8c8c8c" d="M262.6 322.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M265.5 322.1l.7.7-.7-.7z" />
        <path fill="#524242" d="M266.2 322.1l.7.7-.7-.7z" />
        <path fill="#5a1010" d="M266.9 322.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M284.4 322.1l.8.7-.8-.7z" />
        <path fill="#7b7373" d="M285.1 322.1l.7.7-.7-.7z" />
        <path fill="#734a42" d="M285.9 322.1l.7.7-.7-.7z" />
        <path fill="#ad524a" d="M287 322.4l.5.2-.5-.2z" />
        <path fill="#631808" d="M288 322.1l.7.7-.7-.7z" />
        <path fill="#733129" d="M288.7 322.1l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M289.4 322.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M290 322.1l.8.7-.7-.7z" />
        <path fill="#dedede" d="M290.8 322.1l.7.7-.7-.7z" />
        <path fill="#52525a" d="M292.2 322.1l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M292.9 322.1l.7.7-.7-.7z" />
        <path fill="#631808" d="M294 322.4l.5.2-.4-.2z" />
        <path fill="#ad1810" d="M295.2 322.6l.3.4-.3-.4z" />
        <path fill="#ce2110" d="M295.7 322.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M301.3 322.1l.7.7-.7-.7z" />
        <path fill="#631818" d="M314 322.1l.7.7-.7-.7z" />
        <path fill="#63636b" d="M314.7 322.1l-.7 1.4.7-1.4z" />
        <path fill="#efefef" d="M315.4 322.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M192.3 322.8l2.8 2.7-2.8-2.7z" />
        <path fill="#cecece" d="M193 322.8l.7.7-.7-.7z" />
        <path fill="#b51010" d="M206.4 322.8l.7.7-.7-.7z" />
        <path fill="#631808" d="M208.2 323l.5.2-.5-.2z" />
        <path fill="#941808" d="M209.2 322.8l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M209.9 322.8l.7.7-.7-.7z" />
        <path fill="#941808" d="M210.6 322.8l.7.7-.7-.7z" />
        <path fill="#631808" d="M211.8 323l.4.2-.4-.2z" />
        <path fill="#5a1008" d="M215.5 322.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M216.2 322.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M240.8 322.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M244.3 322.8l.7.7-.7-.7z" />
        <path fill="#294221" d="M245 322.8l.8.7-.7-.7z" />
        <path fill="#297b00" d="M245.8 322.8l.7.7-.7-.7z" />
        <path fill="#319400" d="M241.5 325.5c3.3 3 6.8.2 9.2-2.7l-9.2 2.7z" />
        <path fill="#cecece" d="M252 322.8l-.6 1.3.7-1.3z" />
        <path fill="#8c8c8c" d="M256.3 322.8l.7.7-.7-.7z" />
        <path fill="#294200" d="M257 322.8l.7.7-.7-.7z" />
        <path fill="#397b00" d="M262.6 322.8l.7.7-.7-.7z" />
        <path fill="#52525a" d="M263.4 322.8l.7.7-.8-.7z" />
        <path fill="#efefef" d="M264 322.8l.8.7-.8-.7z" />
        <path fill="#dedede" d="M266.9 322.8l.7.7-.7-.7z" />
        <path fill="#420000" d="M292.2 322.8l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M295.7 322.8l.7.7-.7-.7z" />
        <path fill="#631808" d="M296.4 322.8l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M297.1 322.8l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M297.8 322.8l.7.7-.7-.7z" />
        <path fill="#941808" d="M298.5 322.8l.7.7-.7-.7z" />
        <path fill="#631808" d="M299.2 322.8v.7h2.1l-2-.7z" />
        <path fill="#ad1810" d="M301.3 322.8l.7.7-.7-.7z" />
        <path fill="#520808" d="M313.3 322.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M314.7 322.8l-1.4 2 1.4-2z" />
        <path fill="#8c8c8c" d="M315.4 322.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M191.6 323.5l.7.6-.7-.6z" />
        <path fill="#cecece" d="M193.7 323.5l.7.6-.7-.6z" />
        <path fill="#7b1008" d="M215.5 323.5l.7.6-.7-.6z" />
        <path fill="#dedede" d="M216.2 323.5l.7.6-.7-.6z" />
        <path fill="#8c8c8c" d="M243.7 323.5l.7.6-.8-.6z" />
        <path fill="#184a00" d="M244.3 323.5l.7.6-.7-.6z" />
        <path fill="#314231" d="M250.7 323.5l-.7 1.3.7-1.3z" />
        <path fill="#bdbdbd" d="M257 323.5l.7.6-.7-.6z" />
        <path fill="#213918" d="M257.7 323.5l.7.6-.7-.6m6.4 0l.6.6-.6-.6z" />
        <path fill="#bdbdbd" d="M264.8 323.5l.6.6-.6-.6z" />
        <path fill="#5a1008" d="M292.2 323.5l.7.6-.7-.6z" />
        <path fill="#631808" d="M312.6 323.5l.7.6-.7-.6z" />
        <path fill="#424242" d="M313.3 323.5l.7.6-.7-.6z" />
        <path fill="#7b7373" d="M314.7 323.5l-1.4 2 1.4-2z" />
        <path fill="#9c9494" d="M315.4 323.5l-.7 1.3.7-1.3z" />
        <path fill="#cecece" d="M192.3 324.1l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#b51010" d="M214.8 324.1l-.7 1.4.7-1.4z" />
        <path fill="#63636b" d="M215.5 324.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M242.2 324.1l.7.7-.7-.7z" />
        <path fill="#294221" d="M243 324.1l.6.7-.7-.7z" />
        <path fill="#296300" d="M243.7 324.1l.7.7-.8-.7z" />
        <path fill="#efefef" d="M250.7 324.1l.7.7-.7-.7m7 0l.7.7-.7-.7z" />
        <path fill="#425242" d="M258.4 324.1l.7.7-.7-.7z" />
        <path fill="#397b00" d="M259.1 324.1l.7.7-.7-.7z" />
        <path fill="#295200" d="M264.8 324.1l.6.7-.6-.7z" />
        <path fill="#425242" d="M265.5 324.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M266.2 324.1l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M292.2 324.1l.7.7-.7-.7z" />
        <path fill="#ad1810" d="M292.9 324.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M311.9 324.1l-1.4 2 1.4-2z" />
        <path fill="#424242" d="M312.6 324.1l-1.4 2 1.4-2z" />
        <path fill="#7b7373" d="M316.1 324.1l.7.7-.7-.7z" />
        <path fill="#dedede" d="M191.6 324.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M193 324.8l1.4 1.3-1.4-1.3z" />
        <path fill="#7b7373" d="M193.7 324.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M195.1 324.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M195.8 324.8l1.4 1.3-1.4-1.3z" />
        <path fill="#5a3131" d="M214.8 324.8l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M240.8 324.8l.7.7-.7-.7z" />
        <path fill="#425242" d="M241.5 324.8l.7.7-.7-.7z" />
        <path fill="#296300" d="M242.2 324.8l.7.7-.7-.7z" />
        <path fill="#185200" d="M248.6 324.8l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M249.3 324.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M259.1 324.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M259.8 324.8l.7.7-.7-.7m6.4 0l.7.7-.7-.7z" />
        <path fill="#63636b" d="M266.9 324.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M267.6 324.8l.7.7-.7-.7z" />
        <path fill="#63636b" d="M292.9 324.8l.7.7-.7-.7z" />
        <path fill="#941808" d="M293.6 324.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M312.6 324.8l.7.7-.7-.7z" />
        <path fill="#a59494" d="M314 324.8l.7.7-.7-.7z" />
        <path fill="#63636b" d="M315.4 324.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M316.1 324.8l-.7 2 .7-2z" />
        <path fill="#bdbdbd" d="M192.3 325.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M194.4 325.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M195.1 325.5l5 4-5-4z" />
        <path fill="#9c9494" d="M195.8 325.5l.7.7-.7-.7z" />
        <path fill="#7b1008" d="M197.2 325.5l.7.7-.7-.7z" />
        <path fill="#941808" d="M203.6 325.5l.7.7-.8-.7z" />
        <path fill="#631808" d="M204.3 325.5l.6.7-.7-.7z" />
        <path fill="#8c3939" d="M205 325.5l.7.7-.7-.7z" />
        <path fill="#843129" d="M209.9 325.5l.7.7-.7-.7z" />
        <path fill="#6b5252" d="M213.4 325.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M214.1 325.5l.7.7-.7-.7m26 0l.7.7-.7-.7z" />
        <path fill="#184a00" d="M240.8 325.5l.7.7-.7-.7z" />
        <path fill="#297b00" d="M247.2 325.5l.7.7-.7-.7z" />
        <path fill="#294221" d="M247.9 325.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M248.6 325.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M259.8 325.5l.7.7-.7-.7z" />
        <path fill="#213918" d="M260.5 325.5l.7.7-.7-.7z" />
        <path fill="#103900" d="M267.6 325.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M268.3 325.5l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M293.6 325.5l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M294.3 325.5l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M295 325.5l.7.7-.7-.7z" />
        <path fill="#842118" d="M297.8 325.5l.7.7-.7-.7z" />
        <path fill="#8c4a4a" d="M298.5 325.5l.7.7-.7-.7zm4.2 0l.7.7-.7-.7z" />
        <path fill="#631808" d="M303.4 325.5l.8.7-.8-.7z" />
        <path fill="#941808" d="M304.1 325.5l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M304.9 325.5l.7.7-.8-.7z" />
        <path fill="#cecece" d="M311.9 325.5l-2.1 2.7 2-2.7z" />
        <path fill="#8c8c8c" d="M312.6 325.5l-3.5 4.7 3.5-4.7z" />
        <path fill="#ada5a5" d="M313.8 325.7l.4.2-.4-.2z" />
        <path fill="#dedede" d="M192.3 326.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M193 326.1l1.4 2-1.4-2z" />
        <path fill="#efefef" d="M194.4 326.1l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M196.5 326.1l.7.7-.7-.7z" />
        <path fill="#52525a" d="M197.2 326.1l.7.7-.7-.7z" />
        <path fill="#941808" d="M198 326.1l.6.7-.7-.7z" />
        <path fill="#bd2110" d="M201.4 326.1l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M202.1 326.1l.7.7-.7-.7z" />
        <path fill="#736b6b" d="M202.8 326.1l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M203.6 326.1l.7.7-.8-.7z" />
        <path fill="#efefef" d="M240.1 326.1l.7.7-.7-.7z" />
        <path fill="#314231" d="M240.8 326.1l.7.7-.7-.7z" />
        <path fill="#297b00" d="M241.5 326.1l1.4 1.4-1.4-1.4z" />
        <path fill="#185200" d="M246.5 326.1l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M247.2 326.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M247.9 326.1l.7.7-.7-.7m12.6 0l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M261.2 326.1l.7.7-.7-.7z" />
        <path fill="#294200" d="M262 326.1l.6.7-.7-.7z" />
        <path fill="#397b00" d="M266.9 326.1l-.7 1.4.7-1.4z" />
        <path fill="#52525a" d="M267.6 326.1l.7.7-.7-.7z" />
        <path fill="#efefef" d="M268.3 326.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M304.1 326.1l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M304.9 326.1l.7.7-.8-.7z" />
        <path fill="#631818" d="M305.6 326.1l.7.7-.7-.7z" />
        <path fill="#b51010" d="M306.3 326.1l.7.7-.7-.7m3.5 0l-.7 1.4.7-1.4z" />
        <path fill="#292921" d="M310.5 326.1l.7.7-.7-.7z" />
        <path fill="#cecece" d="M313.3 326.1l.7.7-.7-.7m1.4 0l-2.1 2.7 2-2.7z" />
        <path fill="#bdbdbd" d="M193.7 326.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M195.1 326.8l.7.7-.7-.7z" />
        <path fill="#424242" d="M198 326.8l.6.7-.7-.7z" />
        <path fill="#ad1810" d="M198.6 326.8l.7.7-.7-.7m2.1 0l.7.7-.7-.7z" />
        <path fill="#63636b" d="M201.4 326.8l.7.7-.7-.7z" />
        <path fill="#efefef" d="M202.1 326.8l.7.7-.7-.7z" />
        <path fill="#63636b" d="M241.5 326.8l.7.7-.7-.7z" />
        <path fill="#296300" d="M245 326.8l.8.7-.7-.7z" />
        <path fill="#425242" d="M245.8 326.8l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M246.5 326.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M262 326.8l.6.7-.7-.7z" />
        <path fill="#425242" d="M262.6 326.8l.7.7-.7-.7z" />
        <path fill="#295200" d="M263.4 326.8l.7.7-.8-.7z" />
        <path fill="#63636b" d="M266.9 326.8l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M306.3 326.8l.7.7-.7-.7z" />
        <path fill="#941808" d="M307 326.8l.7.7-.7-.7z" />
        <path fill="#292921" d="M309.8 326.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M312.6 326.8l.7.7-.7-.7z" />
        <path fill="#ada5a5" d="M314.7 326.8l-1.4 2 1.4-2z" />
        <path fill="#cecece" d="M195.8 327.5l2.8 2.7-2.8-2.7z" />
        <path fill="#7b7373" d="M196.5 327.5l.7.7-.7-.7z" />
        <path fill="#292921" d="M198.6 327.5l.7.7-.7-.7z" />
        <path fill="#b51010" d="M199.3 327.5l.7.7-.7-.7z" />
        <path fill="#941808" d="M200 327.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M200.7 327.5l.7.7-.7-.7m41.5 0l.7.7-.7-.7z" />
        <path fill="#185200" d="M243 327.5l.6.7-.7-.7z" />
        <path fill="#296300" d="M243.7 327.5l.7.7-.8-.7z" />
        <path fill="#395231" d="M244.3 327.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M245 327.5l.8.7-.7-.7m18.3 0l.7.7-.8-.7z" />
        <path fill="#5a5231" d="M264 327.5l.8.7-.8-.7z" />
        <path fill="#397b00" d="M264.8 327.5l.6.7-.6-.7z" />
        <path fill="#295200" d="M265.5 327.5l.7.7-.7-.7z" />
        <path fill="#9c9494" d="M266.2 327.5l.7.7-.7-.7m40.8 0l.7.7-.7-.7z" />
        <path fill="#5a1008" d="M307.7 327.5l.7.7-.7-.7z" />
        <path fill="#ce2110" d="M308.4 327.5l.7.7-.7-.7z" />
        <path fill="#391810" d="M309 327.5l.8.7-.7-.7z" />
        <path fill="#cecece" d="M311.9 327.5l.7.7-.7-.7z" />
        <path fill="#7b7373" d="M197.2 328.2l.7.6-.7-.6z" />
        <path fill="#313931" d="M199.3 328.2l.7.6-.7-.6z" />
        <path fill="#9c9494" d="M200 328.2l.7.6-.7-.6z" />
        <path fill="#ada5a5" d="M243 328.2l.6.6-.7-.6z" />
        <path fill="#9c9494" d="M243.7 328.2l.7.6-.8-.6m21.2 0l.6.6-.6-.6z" />
        <path fill="#ada5a5" d="M265.5 328.2l.7.6-.7-.6z" />
        <path fill="#cecece" d="M307.7 328.2l1.4 1.3-1.4-1.3z" />
        <path fill="#292921" d="M308.4 328.2l.7.6-.7-.6z" />
        <path fill="#bdbdbd" d="M309 328.2l.8.6-.7-.6m2 0l.8.6-.7-.6z" />
        <path fill="#8c8c8c" d="M195.1 328.8l.7.7-.7-.7z" />
        <path fill="#cecece" d="M195.8 328.8l2.8 2.7-2.8-2.7z" />
        <path fill="#7b7373" d="M198 328.8l.6.7-.7-.7z" />
        <path fill="#bdbdbd" d="M310.5 328.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M311.9 328.8l-.7 1.4.7-1.4z" />
        <path fill="#7b7373" d="M312.6 328.8l-.7 1.4.7-1.4m-116.8.7l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M198.6 329.5l.7.7-.7-.7z" />
        <path fill="#bdbdbd" d="M309.8 329.5l.7.7-.7-.7z" />
        <path fill="#8c8c8c" d="M196.5 330.2l1.4 1.3-1.4-1.3z" />
        <path fill="#efefef" d="M198.6 330.2l.7.6-.7-.6z" />
        <path fill="#dedede" d="M310.5 330.2l.7.6-.7-.6m-114 .6l1.4 1.4-1.4-1.4z" />
        <path fill="#efefef" d="M309.8 330.8l.7.7-.7-.7z" />
        <path fill="#dedede" d="M311.2 330.8l-.7 1.4.7-1.4z" />
        <path
          fill="#ecca5e"
          d="M230.9 207.5l1.1-.3a.8.8 0 00.4.5h.6c.3 0 .6 0 .7-.2a.3.3 0 00.1-.3.3.3 0 00-.1-.2 1 1 0 00-.4 0 6.5 6.5 0 01-1.8-.4 1 1 0 01-.7-.9c0-.4 0-.7.3-1 .3-.2.8-.4 1.4-.5.6 0 1 0 1.4.2.3.1.5.3.7.7l-1.1.3a.6.6 0 00-.3-.3 1 1 0 00-.6 0l-.6.1-.1.2.1.2c.1.1.5.2 1.1.2.7 0 1.1.2 1.4.4a1 1 0 01.4.7c0 .4 0 .7-.3 1-.3.4-.8.6-1.5.6-.6.1-1 0-1.4-.1a1.6 1.6 0 01-.8-.9zm-5.1-.4a2.1 2.1 0 01.1-1l.7-1c.4-.1.7-.3 1.2-.3a2 2 0 011.7.4c.4.4.7.8.8 1.5a2 2 0 01-.5 1.6c-.3.5-.8.7-1.5.8l-1.2-.1a1.9 1.9 0 01-.9-.7l-.4-1.2zm1.2 0c0 .4.2.7.4.9.2.2.5.2.8.2a1 1 0 00.7-.4c.2-.3.2-.6.2-1s-.2-.7-.4-.9a1 1 0 00-.8-.2 1 1 0 00-.7.4c-.2.2-.3.5-.2 1zm-3.6-2.3l-.1-1 1.1-.1.1 1-1.1.1zm.6 4.7l-.5-4.1 1.1-.2.5 4.2-1.1.1zm-6.8-5l2.2-.3h1.2c.3 0 .7.2 1 .4l.7.9c.1.3.3.8.3 1.3v1.3a2.5 2.5 0 01-.5 1 2 2 0 01-.8.6l-1 .3-2.4.2-.7-5.7zm1.3.8l.5 3.8h1l.7-.2.4-.3.3-.6v-1a3.3 3.3 0 00-.3-1 1.3 1.3 0 00-.4-.6 1.2 1.2 0 00-.6-.2h-1l-.5.1z"
        />
        <path
          fill="#ecca5e"
          fillRule="evenodd"
          d="M233.4 223.4l17 21.4-.7 1-17.1-21.4zm44-1.6L258.3 247l-1.5-.5 19.1-25.2zm-48.4 5.8l20.2 18.8-.7 1-20.2-18.7zm-4.7 4.4l22.2 16.6-.5 1-22.3-16.5zm56-3.3l-20 19-1.2-.7 20-19zm4.4 3.5l-22.4 16.4-1-.8 22.4-16.4z"
        />
        <path fill="#7b5a00" fillOpacity={0.6} d="M271.3 229.6l4.6-5.9-.6-.4-4 6.3z" />
        <path fill="#7b5a00" fillOpacity={0.5} d="M260.8 243.5l4.6-5.9-.6-.4-4 6.3z" />
        <path fill="#7b5a00" fillOpacity={0.7} d="M266 236.8l4.6-5.9-.5-.4-4.1 6.3z" />
        <path fill="#7b5a00" fillOpacity={0.5} d="M276.8 237.6l6.5-4-.4-.6-6 4.6z" />
        <path fill="#7b5a00" fillOpacity={0.4} d="M268.3 240l5.8-5-.5-.5-5.3 5.4z" />
        <path
          fill="#428c00"
          d="M213.6 288.6h-.7c-.1-3.8-1.6-6.3-5.6-7.3.1 2 1.6 10 5 7.3h.6l-1.4 6c2.1-2.2 10.8-10 7-13.4-3.2-3-4.8 6-4.9 7.4zm-5.3-47.9h-.8c0-3.8-1.6-6.3-5.6-7.3.1 2 1.6 10 5 7.3h.6l-1.4 6c2.1-2.2 10.8-10 7-13.4-3.2-3-4.8 6-4.9 7.4z"
        />
        <path
          fill="#ecca5e"
          d="M299.5 210.8h-1v-.7l-.7.5a1.7 1.7 0 01-.7 0c-.5 0-1-.2-1.2-.7-.3-.4-.5-1-.4-1.6.1-.7.3-1.2.7-1.6.4-.3.9-.4 1.4-.4.5.1.9.3 1.2.8l.3-2.1 1.1.1-.7 5.7zm-2.8-2.5v1a.9.9 0 00.8.5.9.9 0 00.7-.2c.2-.2.4-.5.4-1l-.1-1a.9.9 0 00-.7-.4.9.9 0 00-.7.2c-.2.2-.4.5-.4 1zm-4.6-1.2l-1-.3c.1-.4.3-.7.7-.8l1.3-.2 1.1.3.5.5v1l-.2 1.3v.8l.1.6-1.1-.1a4.7 4.7 0 010-.4 2 2 0 01-1.5.3c-.5 0-.8-.2-1-.5a1.1 1.1 0 01-.3-.9 1.1 1.1 0 01.8-1l1-.1 1-.1.1-.2-.1-.4-.6-.2a.9.9 0 00-.5 0 .8.8 0 00-.3.4zm1.4 1a8 8 0 01-.7.2h-.7l-.2.4a.5.5 0 000 .5.6.6 0 00.5.2c.2 0 .4 0 .7-.2a.7.7 0 00.3-.3v-.5l.1-.2zm-3-2.4v.8h-.8l-.2 1.6v.7l.2.1h.5v.8l-1 .1a1.5 1.5 0 01-.5-.2.8.8 0 01-.4-.3 1 1 0 010-.4v-.8l.2-1.8h-.5v-1l.6.1.1-.8 1.3-.5-.2 1.5h.8zm-4.6 3.6l-1.1-.1.5-4.1h1v.7l.5-.5.5-.1c.3 0 .5.1.8.3l-.5.9a1 1 0 00-.5-.2.7.7 0 00-.5 0l-.3.5-.2 1.4-.2 1.2zm-3-1.6l1 .3a1.8 1.8 0 01-.8.8 2 2 0 01-1.2.2c-.8-.1-1.3-.4-1.6-1-.2-.3-.3-.8-.3-1.4.1-.7.4-1.2.8-1.5.4-.4 1-.5 1.5-.4a2 2 0 011.5.7c.3.5.4 1.1.3 2l-2.9-.4c0 .4 0 .6.2.8.1.2.4.3.6.4l.5-.1a.9.9 0 00.3-.4zm.1-1.1c0-.4 0-.6-.2-.8a.8.8 0 00-.5-.3.8.8 0 00-.7.2 1 1 0 00-.3.7l1.7.2zm-8 1.5l.7-5.7 1.1.1-.2 2c.4-.2.8-.4 1.3-.3.5 0 1 .3 1.2.7.3.4.4.9.4 1.6-.1.7-.4 1.2-.8 1.5a1.7 1.7 0 01-2 .2 1.8 1.8 0 01-.6-.6v.6H275zm1.4-2v1c.2.3.5.5.8.5a.8.8 0 00.7-.2c.2-.2.3-.6.4-1 0-.5 0-.8-.2-1a.9.9 0 00-.6-.4.9.9 0 00-.7.2c-.2.2-.4.5-.4.9zm-3.1-3v-1l1.2.2v1l-1.2-.1zm-.6 4.8l.5-4.2 1.1.2-.5 4h-1.1zm-5-.6l.6-5.7 1.2.2-.6 4.7 3 .3v1l-4.3-.5z"
        />
        <path
          fill="#428c00"
          d="M201 254h-.6c-.1-3.8-1.6-6.2-5.6-7.3 0 2 1.5 10 4.9 7.4h.7l-1.4 6c2-2.2 10.7-10 7-13.5-3.2-3-4.9 6-5 7.5z"
        />
        <path
          fill="#fac349"
          fillRule="evenodd"
          d="M226 232.8c0 .5-.6 1-1.4 1s-1.3-.5-1.3-1 .6-1 1.3-1 1.3.5 1.3 1zm4.3-4.7c0 .6-.5 1-1.3 1s-1.3-.4-1.3-1c0-.5.6-.9 1.3-.9s1.3.4 1.3 1zm4.1-4.3c0 .5-.6 1-1.3 1s-1.3-.5-1.3-1 .6-1 1.3-1 1.3.5 1.3 1zm43.3-1.7c0 .5-.5 1-1.2 1s-1.4-.5-1.4-1 .6-1 1.3-1 1.4.5 1.4 1zm3.1 6c0 .6-.5 1-1.3 1s-1.3-.4-1.3-1c0-.5.6-.9 1.3-.9s1.3.4 1.3 1zm4.6 4c0 .4-.6.8-1.3.8s-1.3-.4-1.3-.9.6-1 1.3-1 1.3.5 1.3 1z"
        />
        <path
          fill="#ecca5e"
          d="M262.6 199.3l-1-.2c0-.4.3-.7.6-.9.3-.2.7-.3 1.3-.3l1.1.2.5.5.2 1v2.1l.2.5h-1.1a4 4 0 01-.1-.3 1.4 1.4 0 000-.1 1.9 1.9 0 01-1.5.5c-.4 0-.8-.1-1-.4a1.1 1.1 0 01-.4-.9 1.1 1.1 0 01.7-1 4 4 0 011-.3l1-.2v-.1l-.1-.5-.6-.1-.5.1a.8.8 0 00-.3.4zm1.5.9l-.7.2-.6.2-.2.3c0 .2 0 .3.2.4a.7.7 0 00.4.2c.2 0 .4 0 .6-.2.2 0 .2-.2.3-.3v-.8zm-4.7-2.8v-1h1.2v1h-1.2zm0 4.8V198h1.2v4.2h-1.2zm-2.2 0H256V198h1.1v.6l.5-.6a1 1 0 01.5-.1c.3 0 .6 0 .8.2l-.4 1a1 1 0 00-.5-.2l-.4.1-.3.5-.1 1.4v1.2zm-1.9-4.2v.8h-.8v2.3l.1.1.2.1.5-.1v.9l-.9.1h-.5a.9.9 0 01-.4-.3 1 1 0 01-.1-.5 5.3 5.3 0 010-.8v-1.8h-.6v-.9h.6v-.8l1.1-.6v1.5h.8zm-5.8 1.2l-1-.2c0-.4.2-.7.5-.9.3-.2.8-.3 1.3-.3s1 0 1.2.2l.5.5.1 1v2l.3.6h-1.2a4.2 4.2 0 010-.3l-.1-.2a1.9 1.9 0 01-1.4.6c-.4 0-.8-.2-1-.4a1.1 1.1 0 01-.4-.9 1.1 1.1 0 01.6-1 4 4 0 011-.3l1.1-.2v-.1l-.1-.5-.7-.1h-.4a.8.8 0 00-.3.5zm1.5.9a9 9 0 01-.7.2l-.6.1c-.2.1-.3.3-.3.4a.5.5 0 00.2.4l.5.2c.2 0 .4 0 .6-.2l.3-.3v-.8zm-8 2v-5.8h3.4l.9.7c.2.3.3.6.3 1s0 .7-.2 1l-.5.5a1 1 0 01-.7.3h-2v2.2h-1.3zm1.2-4.8v1.6h1.7l.3-.4a.7.7 0 00.2-.4.7.7 0 00-.2-.5.8.8 0 00-.5-.3 6.2 6.2 0 00-.9 0h-.6zm2.4 110.6h-.8c0-.3.2-.6.4-.7.2-.2.5-.3.9-.4h.9c.2 0 .3.2.4.3.1.1.2.3.2.7l.2 1 .1.5.2.4-.8.2a3.5 3.5 0 01-.1-.3 1.5 1.5 0 01-1 .5c-.4 0-.6 0-.9-.2a.9.9 0 01-.3-.6.8.8 0 010-.5.8.8 0 01.3-.3l.7-.3.8-.3v-.1c0-.2-.1-.3-.2-.3h-.5a.6.6 0 00-.3 0 .6.6 0 00-.2.4zm1.3.5l-.5.2c-.3 0-.4.2-.5.2v.6h.5a.8.8 0 00.4-.1.5.5 0 00.1-.3v-.6zm-2.6-.3l-.8.2a.6.6 0 00-.3-.3.6.6 0 00-.4 0 .7.7 0 00-.5.2v.8c0 .3.1.6.3.7l.6.2a.6.6 0 00.3-.2l.2-.5h.8a1.4 1.4 0 01-.3.9c-.2.2-.6.4-1 .4-.5 0-.9 0-1.2-.2a1.6 1.6 0 01-.6-1.2c0-.5 0-.9.2-1.2a2 2 0 011.1-.6l1 .1c.3.1.5.3.6.7zm-4.8-.7v-.8h.8l.1.7-.9.1zm.6 3.5l-.5-3 .9-.2.5 3-.9.2zm-1.7.3l-.7-4.3.8-.1.7 4.2-.8.2zm-3.9.5l-.7-4.3h.9l.2 1.5c.2-.4.5-.6.9-.6s.7 0 1 .3c.3.2.5.6.6 1 .1.6 0 1-.2 1.3a1.3 1.3 0 01-1.4.6 1.4 1.4 0 01-.6-.4l.1.5-.8.1zm.6-1.7c0 .3.1.5.3.7a.7.7 0 00.6.2.6.6 0 00.5-.3c0-.2.1-.4 0-.8 0-.3-.1-.6-.3-.7a.7.7 0 00-.5-.2.7.7 0 00-.5.3 1 1 0 00-.1.8zm-2.3 2v-.5a1.2 1.2 0 01-.4.5l-.6.2h-.6a.8.8 0 01-.5-.4l-.2-.7-.3-2h.9l.2 1.4.2.8a.5.5 0 00.2.2.6.6 0 00.3 0 .7.7 0 00.4-.2.6.6 0 00.2-.3v-.8l-.3-1.3.9-.1.5 3-.8.1zm-6.4-2.3h.8v.4a1.2 1.2 0 011-.7c.4 0 .7 0 1 .3.3.2.5.6.6 1.1 0 .5 0 1-.2 1.3-.2.3-.5.5-1 .5a1.2 1.2 0 01-.4 0 1.8 1.8 0 01-.5-.3l.2 1.6h-.8l-.7-4.2zm1 1.4c.1.3.2.6.4.7a.7.7 0 00.6.2.6.6 0 00.4-.3c.1-.2.2-.4.1-.8 0-.3-.2-.5-.3-.7a.7.7 0 00-.5-.1.7.7 0 00-.5.3c-.1.2-.2.4-.1.7zm-2.3 1h1l-.5.7c-.2.2-.5.3-.9.4-.5 0-1 0-1.3-.4a1.7 1.7 0 01-.5-1c0-.5 0-.9.2-1.2a1.4 1.4 0 011-.6c.5 0 1 0 1.3.3.3.2.5.7.6 1.3l-2.2.3c0 .3.2.4.3.5.2.2.4.2.6.2a.5.5 0 00.3-.2.7.7 0 00.1-.3zm0-.9c0-.2-.2-.4-.3-.5a.6.6 0 00-.5-.1.6.6 0 00-.4.3.7.7 0 00-.1.5l1.3-.2zm-6.2 2.8l-.7-4.3 2-.3h1l.6.3.3.7c0 .3 0 .6-.2.8-.2.2-.4.4-.8.5l.5.3.6.6.7.8-1 .1-.9-.8-.5-.6a.7.7 0 00-.3 0 1.6 1.6 0 00-.5 0h-.2l.3 1.7-.9.2zm.5-2.6l.7-.1.8-.2a.5.5 0 00.2-.2.6.6 0 000-.3.5.5 0 00-.1-.4.6.6 0 00-.4 0h-1.4l.2 1.2zm67 .4l-.7-.2c.1-.3.3-.5.5-.6.3-.1.6-.2 1-.1l.9.2.3.4v.8l-.1 1a3.5 3.5 0 000 .5v.5l-.8-.1v-.3a1.6 1.6 0 01-.6.1 1.4 1.4 0 01-.6 0 1.1 1.1 0 01-.7-.3.8.8 0 01-.2-.7.8.8 0 01.6-.7 3 3 0 01.7 0l.9-.2v-.4l-.5-.2a.6.6 0 00-.4 0 .6.6 0 00-.2.3zm1.1.8l-.5.1h-.5l-.2.3a.4.4 0 000 .4.5.5 0 00.4.1.8.8 0 00.4 0 .5.5 0 00.3-.3 1.6 1.6 0 00.1-.4v-.2zm-2.9 1.2l-.8-.1.2-1.6v-.7a.4.4 0 00-.1-.2.5.5 0 00-.3-.2.7.7 0 00-.4.1.6.6 0 00-.3.3l-.2.7-.2 1.4-.8-.1.4-3.1h.8v.5c.3-.3.7-.4 1.1-.3l.5.1a.8.8 0 01.3.3.9.9 0 01.1.4v.5l-.3 2zm-5.5-3l-.7-.2c.1-.3.3-.5.5-.6h1c.4 0 .7 0 .9.2l.3.3v.8l-.1 1a3.4 3.4 0 000 .6v.4l-.8-.1a3.2 3.2 0 010-.3 1 1 0 00-.1 0l-.5.2a1.4 1.4 0 01-.6 0 1.1 1.1 0 01-.7-.4.8.8 0 01-.2-.7.9.9 0 01.6-.7h.7l.9-.2v-.4l-.5-.2a.7.7 0 00-.4 0 .6.6 0 00-.3.3zm1.1.9h-.6l-.4.1c-.2 0-.2.2-.2.3a.4.4 0 000 .3.5.5 0 00.4.2.8.8 0 00.4-.1.5.5 0 00.3-.3v-.5zm-2.4-1h-.8a.6.6 0 00-.2-.4.6.6 0 00-.3-.2.7.7 0 00-.6.2l-.3.6.1.8c.1.2.3.3.5.3a.6.6 0 00.4 0l.3-.5.8.3c-.1.3-.3.6-.6.8-.3.1-.6.2-1 .1a1.5 1.5 0 01-1.1-.6 1.6 1.6 0 01-.3-1.2c.1-.5.3-1 .6-1.2.4-.2.8-.3 1.2-.2.4 0 .7.1 1 .3.2.2.3.5.3.8zm-4.3-2v-.8l1 .2-.2.7h-.8zm-.6 3.5l.5-3h.9l-.5 3.1h-.9zm-.8-.1l-.9-.1.2-1.6v-.6a.4.4 0 000-.3.5.5 0 00-.3-.1h-.5c-.2 0-.2.2-.3.3l-.1.7-.2 1.4h-.9l.5-3.2.8.1v.5a1.4 1.4 0 011.6-.2.8.8 0 01.3.3.9.9 0 01.1.3 2.4 2.4 0 010 .6l-.3 1.9zm-4.2-4.1l.1-.8.9.1-.1.8-.9-.1zm-.5 3.5l.4-3.1.9.1-.5 3.1-.8-.1zm-5.2-3.9l.8.1v.5c.3-.3.6-.4 1-.4l.5.2.4.4.5-.3h.5c.3 0 .5 0 .6.2a.8.8 0 01.3.4v.7l-.3 2-.8-.2.2-1.7v-.6c0-.2-.2-.2-.3-.3a.6.6 0 00-.7.4l-.1.6-.2 1.5-.9-.1.3-1.7v-.6a.4.4 0 00-.1-.2.4.4 0 00-.3-.1.7.7 0 00-.3 0 .6.6 0 00-.3.3 2.1 2.1 0 00-.2.6l-.2 1.5h-.9l.5-3.2zm-4.2 1a1.6 1.6 0 011-1.3h1c.4 0 .8.2 1 .6.3.3.4.7.4 1.2a1.6 1.6 0 01-.7 1c-.4.4-.8.5-1.3.4a2 2 0 01-.8-.3 1.4 1.4 0 01-.5-.7v-.9zm.9.2l.1.7c.1.2.3.3.5.3a.8.8 0 00.6-.1l.4-.7c0-.3 0-.6-.2-.8a.7.7 0 00-.5-.3.8.8 0 00-.6.2c-.2.1-.3.4-.3.7zm-4.8-3.5l1.6.3c.4 0 .7 0 .9.2.2 0 .4.2.6.4.2.3.3.5.3.8a3.2 3.2 0 01-.3 2 1.9 1.9 0 01-.5.6l-.7.3h-.8l-1.7-.3.6-4.3zm.8.9l-.4 2.8.6.1h.6a.8.8 0 00.4 0c0-.2.2-.3.3-.5l.2-.7v-.8a1 1 0 00-.2-.5.9.9 0 00-.4-.2 4.4 4.4 0 00-.7-.2h-.4z"
        />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon aria-hidden={iconProps.title ? undefined : true} {...iconProps} svgRef={ref} />
));

export const DOFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

DOFlagIcon.displayName = 'DOFlagIcon';
