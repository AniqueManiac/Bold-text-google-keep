

var e = document.getElementById("ddlViewBy");
var selectedFont = document.getElementsByName('font');

//SEND VAR TO MAIN
function show(){
var strUser = e.value;
window.localStorage.setItem('getval', e.value);
chrome.storage.local.set({
    varvalue:strUser
  },function(){
    chrome.tabs.executeScript({
      file:"src/content.js",
    });
});
}


//GET VALUE FROM STORAGE AND CHANGE THE SELECTED
var sele = localStorage.getItem('getval');
  checkSelect = document.getElementsByTagName('option');
  selectedFont.forEach((radio) => { 
    console.log(radio.value);
    console.log(sele);
        e.onchange = function() {
          show();
          clearSelected();
          document.getElementById(e.value).setAttribute('selected','selected');
          console.log("onchange");
        }      
        if (radio.value === sele) { 
          clearSelected();
          document.getElementById(sele).setAttribute('selected','selected');
          console.log("evalur");
        }
});
//CLEAR THE SELECTION
function clearSelected() {
  checkSelect = document.getElementsByTagName('option');
  for(j=0; j<checkSelect.length; j++){
  checkSelect[j].removeAttribute('selected');
  }
}


