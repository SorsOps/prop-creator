// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kh4DHzfPKxHW3t3zk2aoXn
// Component: 0Jteo_49Jd

import * as React from 'react';

import * as p from '@plasmicapp/react-web';
import * as ph from '@plasmicapp/react-web/lib/host';

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from '@plasmicapp/react-web';

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_synthetic_prop_creator.module.css'; // plasmic-import: kh4DHzfPKxHW3t3zk2aoXn/projectcss
import sty from './PlasmicIconButton.module.css'; // plasmic-import: 0Jteo_49Jd/css

import Icon6Icon from './icons/PlasmicIcon__Icon6'; // plasmic-import: 6mZ-ajJ6aX/icon

export type PlasmicIconButton__VariantMembers = {};

export type PlasmicIconButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicIconButton__VariantsArgs;
export const PlasmicIconButton__VariantProps = new Array<VariantPropType>();

export type PlasmicIconButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicIconButton__ArgsType;
export const PlasmicIconButton__ArgProps = new Array<ArgPropType>('children');

export type PlasmicIconButton__OverridesType = {
  root?: p.Flex<'div'>;
};

export interface DefaultIconButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction = globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicIconButton__RenderFunc(props: {
  variants: PlasmicIconButton__VariantsArgs;
  args: PlasmicIconButton__ArgsType;
  overrides: PlasmicIconButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    true ? (
      <div
        data-plasmic-name={'root'}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: <Icon6Icon className={classNames(projectcss.all, sty.svg__uwNug)} role={'img'} />,

          value: args.children,
        })}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicIconButton__OverridesType, DescendantsType<T>>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicIconButton__VariantsArgs;
  args?: PlasmicIconButton__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicIconButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicIconButton__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<NodeOverridesType<T>, ReservedPropsType | VariantPropType | ArgPropType> &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(props: T & StrictProps<T, PropsType>) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicIconButton__ArgProps,
          internalVariantPropNames: PlasmicIconButton__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicIconButton__RenderFunc({ variants, args, overrides, forNode: nodeName });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicIconButton';
  } else {
    func.displayName = `PlasmicIconButton.${nodeName}`;
  }
  return func;
}

export const PlasmicIconButton = Object.assign(
  // Top-level PlasmicIconButton renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicIconButton
    internalVariantProps: PlasmicIconButton__VariantProps,
    internalArgProps: PlasmicIconButton__ArgProps,
  }
);

export default PlasmicIconButton;
/* prettier-ignore-end */