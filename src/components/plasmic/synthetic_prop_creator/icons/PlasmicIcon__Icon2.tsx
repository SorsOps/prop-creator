// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={classNames('plasmic-default__svg', className, 'svg')}
      viewBox={'0 0 8 8'}
      height={'1em'}
      width={'1em'}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={'M1.176 2.824L3.06 4.706 6.824.941 8 2.118 3.059 7.059 0 4l1.176-1.176z'}
        fillRule={'evenodd'}
        fillOpacity={'1'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
