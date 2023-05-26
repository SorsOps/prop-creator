
import * as React from 'react';
import { PlasmicItem, DefaultItemProps } from './plasmic/synthetic_prop_creator/PlasmicItem';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import {dispatch, handleEvent} from '../../src/plugin/uiMessageHandler';

export interface ItemProps extends DefaultItemProps {}

function Item_(props: ItemProps, ref: HTMLElementRefOf<'div'>) {
 

  return <PlasmicItem root={{ ref }} {...props} iconButton={{
    props: {
      onClick: () => {

        dispatch('itemDetailClicked', {key:props.id})
      }
    }
  }} />;
}

const Item = React.forwardRef(Item_);
export default Item;
