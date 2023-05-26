
import * as React from 'react';
import { PlasmicHomepage, DefaultHomepageProps } from './plasmic/synthetic_prop_creator/PlasmicHomepage';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import Item from './Item';
import {dispatch, handleEvent} from '../../src/plugin/uiMessageHandler';
import { generateRandomKey } from '../plugin/helper';
import { Container, Draggable } from 'react-smooth-dnd';


export interface HomepageProps extends DefaultHomepageProps {

}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<'div'>) {
  const [data, setData] = React.useState([])
  const [showWarning, setShowWarning] = React.useState(false)

  React.useEffect(()=> {
    dispatch('requestData')

    handleEvent("loadData",(data)=>{
      console.log("loading data ", JSON.stringify(data))
      setData(data)
      dispatch('updateUISize', { width:document.body.scrollWidth, height:document.getElementById('ContentWrap')?.offsetHeight})
    })

    handleEvent("showWarning",(data)=>{
      setShowWarning(data)
    })
    
  },[])


  const onDrop = (dropResult) => {
    const { removedIndex, addedIndex } = dropResult;
    if (removedIndex !== null || addedIndex !== null) {
      const newList = [...data];
      const [removed] = newList.splice(removedIndex, 1);
      newList.splice(addedIndex, 0, removed);
      setData(newList);
    }
  }

  return (
    <PlasmicHomepage
      root={{ ref }}
      {...props}
      warning={{
        props: {
          appear: showWarning,
        }
      }}
      group={{
        // @ts-ignore
        props: {
          plus: {
            onClick: () => {
              let key = generateRandomKey(6);
              dispatch('updateData', [
                ...data,
                { name: 'new prop', key: key, type: 'Select', options: [{ name: 'name', value: 'value' }] },
              ]);
              setData([
                ...data,
                { name: 'new prop', key: key, type: 'Select', options: [{ name: 'name', value: 'value' }] },
              ]);
            },
          },

          children: (
            <>
              <Container onDrop={onDrop} style={{ alignItems: 'stretch', width: '100%' }}>
                {data?.map((each, i) => {
                  return (
                    <Draggable key={i}>
                      <Item
                        hasButton={true}
                        id={each.key}
                        key={each.key}
                        name={each.name}
                        type={each.type ? each.type.toLowerCase() : 'select'}
                        options={each.options ? each.options.map((n) => n.name):[]}
                        select={{
                          props:{
                            value:each.defaultValue?each.defaultValue:"unset",
                            onChange:(val)=>{
                              let newData = [...data]
                              newData[i].defaultValue = val
                              setData(newData)
                              dispatch('updateData', newData)
                              dispatch('defaultValueChanged',{value:val,index:i})
                            }
                          }
                        }}
                        textInput={{
                          props:{
                            value:each.defaultValue?each.defaultValue:"unset",
                            onChange:(val)=>{
                              let newData = [...data]
                              newData[i].defaultValue = val.target.value
                              setData(newData)
                              dispatch('updateData', newData)
                              dispatch('defaultValueChanged',{value:val.target.value,index:i})

                            }
                          }
                        }}
                        toggle={{
                          props:{
                            on:each.isOn !== undefined? each.isOn:false,
                            onIsOnChange:(val) => {
                              console.log(" is on changed to ", val)
                              let newData = [...data]
                              newData[i]['isOn'] = val
                              console.log("new data is ", newData)
                              setData(newData)
                              dispatch('updateData', newData)
                            }
                          }
                        }}
                      />
                    </Draggable>
                  );
                })}
              </Container>
            </>
          ),
        },
      }}
    />
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
