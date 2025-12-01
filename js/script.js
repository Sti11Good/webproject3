function upDate(previewPic){
    var imageDiv = document.getElementById('image');
    var imageDes = document.getElementById('description');
    imageDiv.style.backgroundImage = 'url("' + previewPic.src + '")';
    imageDiv.innerHTML = "";
    imageDes.innerHTML = previewPic.alt;
}

function unDo(){
    var imageDiv = document.getElementById('image');
    var imageDes = document.getElementById('description');
    imageDiv.style.backgroundImage = '';
    imageDiv.innerHTML = 'Hover over an image below to display here.';
    imageDes.innerHTML = '?';
}

function navUpdate(link) {
    const imagePath = 'images/forbidden.png';
    link.style.backgroundImage = `url("${imagePath}")`;
    link.style.backgroundSize = 'auto 100%';
    link.style.backgroundRepeat = 'no-repeat';
    link.style.backgroundPosition = 'center';
    link.style.color = 'transparent';
}

function navUndo(link) {
    link.style.backgroundImage = '';
    link.style.backgroundSize = '';
    link.style.backgroundPosition = '';
    link.style.color = '';
}
