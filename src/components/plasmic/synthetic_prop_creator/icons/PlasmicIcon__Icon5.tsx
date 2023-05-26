// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon5IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 7'}
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
        d={'M4.354 1.646l3 3-.708.708L4 2.707 1.354 5.354l-.708-.708 3-3L4 1.293l.354.353z'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
