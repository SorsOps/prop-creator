// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type IconIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      className={classNames('plasmic-default__svg', className, 'svg')}
      viewBox={'0 0 8 7'}
      height={'1em'}
      width={'1em'}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={'M3.646 5.354l-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707l-.354-.353z'}
        fillRule={'evenodd'}
        fillOpacity={'1'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
