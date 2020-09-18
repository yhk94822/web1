

const showClassDiv = (class_name) => {
    const element = document.getElementsByClassName(class_name);

    const visibilityElement = element[0].style.visibility;

    if(visibilityElement == 'hidden'){
        element[0].style.visibility = 'visible';
    } else {
        element[0].style.visibility = 'hidden';
    }
}

const showIdDiv = (id_name) => {
    const elementId = document.getElementById(id_name);

    if(elementId.style.visibility == 'hidden'){
        elementId.style.visibility = 'visible';
    } else {
        elementId.style.visibility = 'hidden';
    }
}

const offIdDiv = (id_name) => {
    const elementId = document.getElementById(id_name);
    elementId.style.visibility = 'hidden';
}

const offClassDiv = (class_name) => {
    const element = document.getElementsByClassName(class_name);
    element[0].style.visibility = 'hidden';
}

const weightUp = (obj) => {
    obj.style.fontWeight = 'bold';
    obj.style.backgroundColor = 'rgb(241,241,241)';
}

const weightDown = (obj) => {
    obj.style.fontWeight = 'normal';
    obj.style.backgroundColor = 'white';
}

