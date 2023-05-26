// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon10IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
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
          'M9 16a7 7 0 1114 0 7 7 0 01-14 0zm7 8a8 8 0 110-16 8 8 0 010 16zm-.5-4.5v-4h1v4h-1zm1.25-6.5a.75.75 0 01-1.5 0v-.069a.75.75 0 011.5 0v.07z'
        }
        fill={'currentColor'}
        fillOpacity={'.8'}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
