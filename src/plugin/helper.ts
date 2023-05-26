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