// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon7IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 14 15'}
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
        d={'M4.828 7.111l5.17-5.169-.55-.55-5.721 5.72 5.719 5.719.55-.55-5.168-5.17z'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
