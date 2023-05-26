// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon6IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 16 3'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M3.5 1.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 013.5 1.5zm6 0a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 019.5 1.5zM14 3a1.5 1.5 0 10-.001-3.001A1.5 1.5 0 0014 3z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
