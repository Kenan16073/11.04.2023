'use strict'

function uploadFiles() {
    let files = document.querySelector('#upload').files;
    if(files.length==0){
        return;
    }
    let filenames=" ";
    for(let i=0;i<files.length;i++){
        filenames+=files[i].name+"\n";
    }
}