// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon4IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 16 16'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M5.647 4.646l.707.708L3.707 8l2.646 2.647-.707.707L2.293 8l3.354-3.354zm4 .708L12.293 8l-2.646 2.646.707.708L13.708 8l-3.354-3.354-.707.708z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
