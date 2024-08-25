const Selection = {
    object : undefined,
    objects : undefined,
}

const Editor = {
    //One of: none, transform, rotate, scale
    transformMode: 'none',
    transformModeElement: undefined,
}

const SceneHierarchy = {

}

//Atacheo el cambio de modo.

//Keyboard events
function SetKeyEvents(){
    if(Editor.transformModeElement == undefined){
        Editor.transformModeElement = document.getElementById('transformMode');
    }

    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        // Alert the key name and key code on keydown
        // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
        // console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
        var transformModeChanged = new CustomEvent('Editor_transfomModeChanged', {editor:Editor});

        if(code === 'KeyQ'){
            console.log("Q apretado");
            Editor.transformMode = "none";
            Editor.transformModeElement.innerHTML = "none";
            document.dispatchEvent(transformModeChanged); 
        }
        if(code === 'KeyW'){
            console.log("W apretado");
            Editor.transformMode = "translate";
            Editor.transformModeElement.innerHTML = "Translate";
            document.dispatchEvent(transformModeChanged);
        }
        if(code === 'KeyE'){
            console.log("E apretado");
            Editor.transformMode = "rotate";
            Editor.transformModeElement.innerHTML = "Rotate";
            document.dispatchEvent(transformModeChanged);
        }
        if(code === 'KeyR'){
            console.log("R apretado");
            Editor.transformMode = "scale";
            Editor.transformModeElement.innerHTML = "Scale";
            document.dispatchEvent(transformModeChanged);
        }
    }, false);
};

document.addEventListener('DOMContentLoaded', (ev)=>{
    SetKeyEvents();
});