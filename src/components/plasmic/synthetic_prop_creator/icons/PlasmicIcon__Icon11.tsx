// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon11IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 32 32'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M15 9.5a1 1 0 00-1 1h4a1 1 0 00-1-1h-2zm4 1a2 2 0 00-2-2h-2a2 2 0 00-2 2h-3v1h1v10a2 2 0 002 2h6a2 2 0 002-2v-10h1v-1h-3zm1 1h-8v10a1 1 0 001 1h6a1 1 0 001-1v-10zm-6 7v-4h1v4h-1zm3 0v-4h1v4h-1z'
        }
        fill={'currentColor'}
        fillOpacity={'.8'}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
