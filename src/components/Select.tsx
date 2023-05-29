import * as React from 'react';
import { PlasmicSelect, DefaultSelectProps } from './plasmic/synthetic_prop_creator/PlasmicSelect';
import { SelectRef } from '@plasmicapp/react-web';
import Select__Option from './Select__Option';
import Select__OptionGroup from './Select__OptionGroup';

export interface SelectProps extends DefaultSelectProps {}

function Select_(props: SelectProps, ref: SelectRef) {
  const { plasmicProps } = PlasmicSelect.useBehavior(props, ref);
  return <PlasmicSelect {...plasmicProps} />;
}

const Select = React.forwardRef(Select_);

export default Object.assign(Select, {
  Option: Select__Option,
  OptionGroup: Select__OptionGroup,
  __plumeType: 'select',
});
