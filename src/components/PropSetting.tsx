import * as React from 'react';
import { PlasmicPropSetting, DefaultPropSettingProps } from './plasmic/synthetic_prop_creator/PlasmicPropSetting';
import { HTMLElementRefOf, set } from '@plasmicapp/react-web';
import { dispatch, handleEvent } from '../plugin/uiMessageHandler';
import OptionItem from './OptionItem';
import { Container, Draggable } from 'react-smooth-dnd';
import Select__Option from './Select__Option';
import EffectItem from './EffectItem';



export interface PropSettingProps extends DefaultPropSettingProps {
 
}


function PropSetting_(props: PropSettingProps, ref: HTMLElementRefOf<'div'>) {
  
  
  const [data, setData] = React.useState({name:'',type:'Select',options:[{name:"option1",value:"value1"},{name:"option2" ,value:"value2"}]})
  const [componentLayerTree, setComponentLayerTree] = React.useState({})
  let contrianerAttributes = [
    'itemSpacing',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'cornerRadius',
    'horizontalPadding',
    'verticalPadding',
    'horizontalSpacing',
    'verticalSpacing',
    'strokeWeight',
    'character',
    'opacity',
    'visible',
  ];
  function createSelectOptionsFromLayerTree(layer, depth = 0) {
    // Create a prefix for this option based on the depth.
    let prefix = "  ".repeat(depth);

    // Collect the option for the current layer.
    let options = [prefix + layer.name];
  
    // If the current layer is of type 'container', it has children. Recursively get their options.
    if (layer.type === 'container' && layer.children) {
      layer.children.forEach(child => {
        options = [...options, ...createSelectOptionsFromLayerTree(child, depth + 1)];
      });
    }
    
    return options;
}
  function onDrop(dropResult) {
    const { removedIndex, addedIndex } = dropResult;
    if (removedIndex !== null || addedIndex !== null) {
      const newList = [...data.options]; 
      const [removed] = newList.splice(removedIndex, 1);
      newList.splice(addedIndex, 0, removed);
  
      let newItemData = { ...data, options: newList };
      setData(newItemData);
      dispatch('updateItem', newItemData);
    }
  }
  
 React.useEffect(()=> {

  dispatch('requestData')
  dispatch('requestComponentLayerTree')
  handleEvent("loadData",(data)=>{
    setData(data)
    dispatch('updateUISize', { width:document.body.scrollWidth, height:document.getElementById('ContentWrap').offsetHeight})
  })
  handleEvent("loadComponentLayerTree",(data)=>{

    setComponentLayerTree(data)
  } )
 },[])

React.useEffect(() => {
  requestAnimationFrame(() => {

  dispatch('updateUISize', {
    width: document.body.scrollWidth,
    height: document.getElementById('ContentWrap').offsetHeight,
  });
  })
}, [data]);
// current component, if new selection is not within the current component then back to home

  return (
    <PlasmicPropSetting
      root={{ ref }}
      header={{
        // @ts-ignore
        onClick: () => {
          dispatch('backClicked');
        },
      }}
      itemName={{
        props: {
          // @ts-ignore
          inputValue: data?.name?? " ",
          onInputValueChange: (e) => {
            let newItemData = { ...data, name: e };
            setData(newItemData);
            dispatch('updateItem', newItemData);
          },
        },
      }}
      itemType={{
        props: {
          options: ['Select', 'Text', 'Numeric', 'Boolean'],
          typeSelect: data?.type?? "Select",
          onTypeSelectChange: (e) => {
            let newItemData = { ...data, type: e };
            setData(newItemData);
            dispatch('updateItem', newItemData);
          },
        },
      }}
      options={{
        open: data.options.length > 0,
        props: {
          hidden: data.type !== 'Select',
          children: <Container onDrop={onDrop} style={{alignItems:"stretch",width:"100%"}}>{data.options.map((each, i) => {
            return (
              <Draggable   key={i}>
              <OptionItem
                key={i}
                optinoName={{
                    value:each.name||'',
                    onChange: (e) => {

                    let newItemData = { ...data, options: data.options.map((each, index) => index === i ? {...each,name:e.target.value} : each) };
                    setData(newItemData);
                    dispatch('updateItem', newItemData);
                    }
                }}
                optionValue={{
                    value:each.value||'',
                    onChange: (e) => {
                    let newItemData = { ...data, options: data.options.map((each, index) => index === i ? {...each,value:e.target.value} : each) };
                    setData(newItemData);
                    dispatch('updateItem', newItemData);
                    }
                }}
                _delete={{
                  onClick: () => {
                    let newItemData = { ...data, options: data.options.filter((_, index) => index !== i) };
                    setData(newItemData);
                    dispatch('updateItem', newItemData);
                  },
                }}
              />
              </Draggable>

            );
          })}</Container>,
          plus: {
            onClick: () => {
              let newItemData = { ...data, options: [...data.options, {name:'new option',value:"new value"}] };
              setData(newItemData);
              dispatch('updateItem', newItemData);
            },
          },
        },
      }}
      effects={{
        props:{

          plus:{
            onClick:() => {
              let effects = Array.isArray(data.effects) ? data.effects : [];
              if (effects.length === 0) {
                setData({...data, effects:[ {targetLayer:'layer...',targetAttribute:"attribute..."}]});
              }
              let newItemData = { ...data, effects: [...effects, {targetLayer:'layer...',targetAttribute:"attribute..."}] };
              setData(newItemData);
              dispatch('updateItem', newItemData);
            }
          },
          // @ts-ignore
          children:data.effects ? data.effects.map((each, i) => {
            return  <EffectItem key={i} _delete={{

                onClick:() => {

                  let newItemData = { ...data, effects: data.effects.filter((_, index) => index !== i) };
                  setData(newItemData);
                  dispatch('updateItem', newItemData)
                }
              
              
            }} layer={{
              props:{
                options: createSelectOptionsFromLayerTree(componentLayerTree),
                onChange:(value) => {
                  let newItemData = { ...data, effects: data.effects.map((each, index) => index === i ? {...each,targetLayer:value} : each) };
                  setData(newItemData);

                  dispatch('updateItem', newItemData)
                },
                value:each.targetLayer
              }
            }} attribute={{
              props:{
                options: contrianerAttributes,
                onChange:(value) => {
                  let newItemData = { ...data, effects: data.effects.map((each, index) => index === i ? {...each,targetAttribute:value} : each) };
                  setData(newItemData);
                  dispatch('updateItem', newItemData)
                },
                value:each.targetAttribute
              }
            }} />

          }) : null
        }
         
      }}
      remove={{
        onClick:() => {
          dispatch('removeClicked',data['key'])
        }
      }}
      {...props}
    />
  );
}

const PropSetting = React.forwardRef(PropSetting_);
export default PropSetting;
