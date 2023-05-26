// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon8IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={classNames('plasmic-default__svg', className, 'svg')}
      viewBox={'0 0 12 14'}
      height={'1em'}
      width={'1em'}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M2 7.05V0h1v7.05a2.5 2.5 0 010 4.9V14H2v-2.05a2.5 2.5 0 010-4.9zM4 9.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 014 9.5zM9 14h1V6.95a2.5 2.5 0 000-4.9V0H9v2.05a2.5 2.5 0 000 4.9V14zm2-9.5a1.5 1.5 0 10-3.001.001A1.5 1.5 0 0011 4.5z'
        }
        fillRule={'evenodd'}
        fillOpacity={'1'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
