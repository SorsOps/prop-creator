import 'core-js/stable';
import { handleEvent, dispatch } from './codeMessageHandler';
import {saveDataToComponent,isWithinMainComponent, mainComponent, convertLayerToJSON, hexToRgb} from './helper'
import { minimizeFlowGraph,execute,nodes } from '@tokens-studio/graph-engine';
import Card from './Card.json';
figma.showUI(__html__, { width: 240, height: 128 });

let defaultInput = { product: 'JioBase', colorMode: 'light', surface: 'bold', appearance: 'primary' }

let totalData = [
  {
    name: 'default',
    key: 'initial',
    type: 'Select',
    options: [
      [
        { name: 'option1', value: 'value1' },
        { name: 'option2', value: 'value2' },
      ],
    ],
  },
];
let selection = figma.currentPage.selection
let currentlyDetailId = ""
let currentComponent = null

figma.on('selectionchange', () => {
  selectionLogic()
});

function selectionLogic() {

  let newSelection = figma.currentPage.selection;
  selection = newSelection
  // guard
  if (newSelection.length === 0) {
    return 
  }

  // if not within main component
  if (!isWithinMainComponent(newSelection[0])) {
    dispatch('showWarning', true);
  } else { // else don't show warning
    dispatch('showWarning', false);

    // check if the main component is the same as the previous one
    if (currentComponent === mainComponent(newSelection[0])) {
      return
    }
    currentComponent = mainComponent(newSelection[0])
    currentlyDetailId = ""

    dispatch('pageSwitch', 'home');
    // in component and has saved data then retrive the saved data
    if (mainComponent( selection[0]).getSharedPluginData("plugin", "data")) {
      let data = JSON.parse(mainComponent( selection[0]).getSharedPluginData("plugin", "data"))
    
      dispatch("loadData", data)
      console.log("selection data is ", data)

      totalData = data
    } else {  // else set the default data
     totalData= [{name:"default", key:"initial", type:"Select", options:[{name:"option1",value:"value1"},{name:"option2" ,value:"value2"}]}]
      dispatch("loadData", totalData)
    }
  }
}
selectionLogic()
handleEvent('updateUISize', ({ width = 128, height }) => {
  figma.ui.resize(width, height);
});

handleEvent('itemDetailClicked', (key) => {

  currentlyDetailId = key.key

  dispatch('pageSwitch', 'detail');
});

handleEvent('backClicked', () => {
  currentlyDetailId = ""
  dispatch('pageSwitch', 'home');
});

handleEvent('defaultValueChanged', ({value,index}) => {
 
  for (let i = 0; i < totalData[index].effects.length; i++) {

    let resultValue
    if (totalData[index].type === "Select") {
      resultValue = totalData[index].options.filter((item)=>item.name === value)[0].value
    } else if (totalData[index].type === "Text") {
      resultValue = value
    }

    let targetLayer = totalData[index].effects[i].targetLayer;

    let targetAttribute = totalData[index].effects[i].targetAttribute;
    let n 
    if (selection[0].name === targetLayer) n = selection[0]
    else n = (selection[0] as ComponentNode).findOne((node) => node.name === targetLayer.trimStart());

    console.log("found n is ", n.name)
    if (targetAttribute === 'character') {
      figma.loadFontAsync((n as TextNode).fontName as FontName).then(() => {
        n.name = n.name
        n.characters = resultValue;
      });
    }
    else if (targetAttribute === "itemSpacing" || targetAttribute === "opacity" || targetAttribute.toLowerCase().includes("padding")  || targetAttribute.toLowerCase().includes("radius") || targetAttribute.toLowerCase().includes("stroke")) {
    n[targetAttribute] = +resultValue;
    } else if (targetAttribute === "fill") {
      defaultInput = {...defaultInput, [totalData[index].name]: resultValue}
      execute({
        graph: minimizeFlowGraph(Card),
        inputValues: defaultInput,
        nodes,
      }).then((result) => {

        let rgb = hexToRgb( result.container.background);
    
        (n as FrameNode).fills = [{type:"SOLID", color:rgb}]

      }).catch((err) => {
      
        console.log(err);
      });

    } else {
      n[targetAttribute] = resultValue;
    }
  }
});
handleEvent('removeClicked',(key)=>{
  currentlyDetailId = ""
  totalData = totalData.filter((item)=>item.key !== key)
  dispatch('pageSwitch', 'home');
})
handleEvent('updateData', (data) => {
  totalData = data;
  selection.forEach(sel => {
    saveDataToComponent(data, mainComponent(sel))
  })
});
handleEvent("requestComponentLayerTree", () => {
  let layerTree = convertLayerToJSON(mainComponent(selection[0]))
  console.log("layer tree is ", JSON.stringify(layerTree))
  dispatch("loadComponentLayerTree", layerTree)
})

handleEvent('updateItem', (itemData) => {
  const index = totalData.findIndex((item) => item.key === currentlyDetailId);

  if (index !== -1) {
    // Update the object
    totalData[index] = itemData;
  }
  saveDataToComponent(totalData, mainComponent(selection[0]))

});

handleEvent("requestData", () => {
  if (currentlyDetailId === "") {
  dispatch("loadData", totalData)
  } else {
    dispatch("loadData", totalData.find((item) => item.key === currentlyDetailId))
  }
})

