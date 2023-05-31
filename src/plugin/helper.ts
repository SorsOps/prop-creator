export function generateRandomKey(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  export function saveDataToComponent(data:[], comp: ComponentNode){
    comp.setSharedPluginData("plugin", "data", JSON.stringify(data))
  }

  export function isWithinMainComponent(layer) {
    let node = layer;
    while (node) {
        if (node.type === 'COMPONENT') {
            return true;
        }
        node = node.parent;
    }
    return false;
  }

  export function mainComponent(layer) {
    let node = layer
    while (node) {
        if (node.type === 'COMPONENT') {
            return node;
        }
        node = node.parent;
    }
    return node 
  }
  export function convertLayerToJSON(layer:SceneNode){
    // Create a new object with the required properties
    const CONTAINER_TYPES = ["FRAME", "BOOLEAN_OPERATION", "GROUP", "COMPONENT"];
    let jsonObject = {
        type: CONTAINER_TYPES.includes(layer.type) || layer.type === "BOOLEAN_OPERATION" || layer.type === "GROUP" ? "container" : "regular node",
        name: layer.name,
        id: layer.id,
        children: []
    };

    // If the layer has children, recursively call this function on each child
    if (CONTAINER_TYPES.includes(layer.type) && layer.children.length > 0) {
        for (let child of layer.children) {
            jsonObject.children.push(convertLayerToJSON(child));
        }
    }

    // Return the JSON string
    return jsonObject
}

export function hexToRgb(hex) {
  if (typeof hex !== 'string') {
      throw new Error('Expected a string');
  }

  let r = 0, g = 0, b = 0;

  // 3 digits
  if (hex.length == 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
  }
  // 6 digits
  else if (hex.length == 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
  }
  
  return {r: r / 255, g: g / 255, b: b / 255};
}

