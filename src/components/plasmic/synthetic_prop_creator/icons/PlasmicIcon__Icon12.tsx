// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon12IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 20 33'}
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
          'M12.406 12.146a.502.502 0 00-.708.708L14.845 16H4.052a.5.5 0 000 1h10.793l-3.147 3.146a.502.502 0 00.708.708l3.823-3.824a.749.749 0 000-1.06l-3.823-3.824z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
