import * as React from 'react';
import { PlasmicTextInput, DefaultTextInputProps } from './plasmic/synthetic_prop_creator/PlasmicTextInput';
import { TextInputRef } from '@plasmicapp/react-web';

export interface TextInputProps extends DefaultTextInputProps {}

function TextInput_(props: TextInputProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTextInput.useBehavior<TextInputProps>(props, ref);
  return <PlasmicTextInput {...plasmicProps} />;
}

const TextInput = React.forwardRef(TextInput_);

export default Object.assign(TextInput, {
  __plumeType: 'text-input',
});
