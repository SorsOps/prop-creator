// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kh4DHzfPKxHW3t3zk2aoXn
// Component: kHlDB0gRRG0SN

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
import Warning from '../../Warning'; // plasmic-import: RxL_wX8Eo6/component
import Group from '../../Group'; // plasmic-import: 0gQ3RbV4NzdZ9M/component
import Item from '../../Item'; // plasmic-import: 9gVbaqOElK63Ae/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_synthetic_prop_creator.module.css'; // plasmic-import: kh4DHzfPKxHW3t3zk2aoXn/projectcss
import sty from './PlasmicHomepage.module.css'; // plasmic-import: kHlDB0gRRG0SN/css

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<'div'>;
  section?: p.Flex<'section'>;
  warning?: p.Flex<typeof Warning>;
  freeBox?: p.Flex<'div'>;
  group?: p.Flex<typeof Group>;
  item2?: p.Flex<typeof Item>;
};

export interface DefaultHomepageProps {
  className?: string;
}

const __wrapUserFunction = globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: 'group.groupName',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => 'Prop list and default value' as const,
      },

      {
        path: 'item2.options',
        type: 'private',
        variableType: 'array',
        initFunc: ({ $props, $state, $queries, $ctx }) => ['apple', 'pear', 'Edit options...'],
      },

      {
        path: 'item2.isOn',
        type: 'private',
        variableType: 'boolean',
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
      },

      {
        path: 'item2.inputValue',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => ``,
      },

      {
        path: 'item2.typeSelect',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => ``,
      },
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <p.Stack
            as={'section'}
            data-plasmic-name={'section'}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
            id={'ContentWrap' as const}
          >
            <Warning
              data-plasmic-name={'warning'}
              data-plasmic-override={overrides.warning}
              className={classNames('__wab_instance', sty.warning)}
            />

            {true ? (
              <div
                data-plasmic-name={'freeBox'}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <Group
                  data-plasmic-name={'group'}
                  data-plasmic-override={overrides.group}
                  className={classNames('__wab_instance', sty.group)}
                  groupName={p.generateStateValueProp($state, ['group', 'groupName'])}
                  onGroupNameChange={p.generateStateOnChangeProp($state, ['group', 'groupName'])}
                  open={true}
                >
                  {true ? (
                    <Item
                      data-plasmic-name={'item2'}
                      data-plasmic-override={overrides.item2}
                      className={classNames('__wab_instance', sty.item2)}
                      hasButton={true}
                      inputValue={p.generateStateValueProp($state, ['item2', 'inputValue'])}
                      isOn={p.generateStateValueProp($state, ['item2', 'isOn'])}
                      name={'Size' as const}
                      onInputValueChange={p.generateStateOnChangeProp($state, ['item2', 'inputValue'])}
                      onIsOnChange={p.generateStateOnChangeProp($state, ['item2', 'isOn'])}
                      onOptionsChange={p.generateStateOnChangeProp($state, ['item2', 'options'])}
                      onTypeSelectChange={p.generateStateOnChangeProp($state, ['item2', 'typeSelect'])}
                      options={p.generateStateValueProp($state, ['item2', 'options'])}
                      typeSelect={p.generateStateValueProp($state, ['item2', 'typeSelect'])}
                    />
                  ) : null}
                </Group>
              </div>
            ) : null}
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'section', 'warning', 'freeBox', 'group', 'item2'],
  section: ['section', 'warning', 'freeBox', 'group', 'item2'],
  warning: ['warning'],
  freeBox: ['freeBox', 'group', 'item2'],
  group: ['group', 'item2'],
  item2: ['item2'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: 'div';
  section: 'section';
  warning: typeof Warning;
  freeBox: 'div';
  group: typeof Group;
  item2: typeof Item;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicHomepage__OverridesType, DescendantsType<T>>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHomepage__VariantsArgs;
  args?: PlasmicHomepage__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({ variants, args, overrides, forNode: nodeName });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicHomepage';
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent('section'),
    warning: makeNodeComponent('warning'),
    freeBox: makeNodeComponent('freeBox'),
    group: makeNodeComponent('group'),
    item2: makeNodeComponent('item2'),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
