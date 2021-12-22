let numTareas = parseInt(prompt("Introduce el número de tareas realizadas"));


function evaluaTareas(numTareas) {

    if(numTareas >= 1 && numTareas <= 6){
        console.log("**Failed**");
    }else if(numTareas > 6 && numTareas <= 9){
        console.log("*Insufficient**");
    }else if(numTareas > 9 && numTareas <= 14){
        console.log("**Good**");
    }else if(numTareas == 15){
        console.log("**Excellent**");
    }else if(numTareas <= 0 || numTareas > 15){
        console.log("**Error**");
    }

}
evaluaTareas(numTareas);
