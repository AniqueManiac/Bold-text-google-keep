//GET THE VAR FROM POP
var popvar = {};
chrome.storage.local.get('varvalue',function(items){
  popvar.font = items.varvalue;
});


//KEYS TO CONVERT
var map = {};
onkeydown = onkeyup = function(e){
 var selectedText = getSelectionText();
 e = e || event; // to deal with IE
 map[e.keyCode] = e.type == 'keydown';
 //e.keyCode === 17 && e.keyCode === 66
if( map[17] && map[66] && selectedText != "") {
e.preventDefault();
  // replaceSelectedText(strcon(selectedText));
   document.execCommand('insertText', false, strcon(selectedText));
}
};

// function swap(json){
//   var ret = {};
//   for(var key in json){
//     ret[json[key]] = key;
//   }
//   return ret;
// }


//GET THE SELECTION
function getSelectionText() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
		text = document.selection.createRange().text;
	}
	return text;
}

//NEW ARRAY FROM TWO CHARMAP
function makearray(map1,map2){
resswap = swap(map1);
itswap = swap(map2);
var resultKeys = [];
for (var k in resswap) {
  resultKeys.push(k);
}
var itemKeys =[];
for(var s in itswap){
    itemKeys.push(s);
}

var obj={}
resultKeys.forEach(function(val, index) {
  obj[val] = itemKeys[index];
});
return obj;

}

//SWAP CHARMAP

function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}




var boldCharMap = {"0":"𝟬","1":"𝟭","2":"𝟮","3":"𝟯","4":"𝟰","5":"𝟱","6":"𝟲","7":"𝟳","8":"𝟴","9":"𝟵","a":"𝗮","b":"𝗯","c":"𝗰","d":"𝗱","e":"𝗲","f":"𝗳","g":"𝗴","h":"𝗵","i":"𝗶","j":"𝗷","k":"𝗸","l":"𝗹","m":"𝗺","n":"𝗻","o":"𝗼","p":"𝗽","q":"𝗾","r":"𝗿","s":"𝘀","t":"𝘁","u":"𝘂","v":"𝘃","w":"𝘄","x":"𝘅","y":"𝘆","z":"𝘇","A":"𝗔","B":"𝗕","C":"𝗖","D":"𝗗","E":"𝗘","F":"𝗙","G":"𝗚","H":"𝗛","I":"𝗜","J":"𝗝","K":"𝗞","L":"𝗟","M":"𝗠","N":"𝗡","O":"𝗢","P":"𝗣","Q":"𝗤","R":"𝗥","S":"𝗦","T":"𝗧","U":"𝗨","V":"𝗩","W":"𝗪","X":"𝗫","Y":"𝗬","Z":"𝗭"};

//CHARMAPS

var boldItalicCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝙖","b":"𝙗","c":"𝙘","d":"𝙙","e":"𝙚","f":"𝙛","g":"𝙜","h":"𝙝","i":"𝙞","j":"𝙟","k":"𝙠","l":"𝙡","m":"𝙢","n":"𝙣","o":"𝙤","p":"𝙥","q":"𝙦","r":"𝙧","s":"𝙨","t":"𝙩","u":"𝙪","v":"𝙫","w":"𝙬","x":"𝙭","y":"𝙮","z":"𝙯","A":"𝘼","B":"𝘽","C":"𝘾","D":"𝘿","E":"𝙀","F":"𝙁","G":"𝙂","H":"𝙃","I":"𝙄","J":"𝙅","K":"𝙆","L":"𝙇","M":"𝙈","N":"𝙉","O":"𝙊","P":"𝙋","Q":"𝙌","R":"𝙍","S":"𝙎","T":"𝙏","U":"𝙐","V":"𝙑","W":"𝙒","X":"𝙓","Y":"𝙔","Z":"𝙕"};
var italicCharMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝘢","b":"𝘣","c":"𝘤","d":"𝘥","e":"𝘦","f":"𝘧","g":"𝘨","h":"𝘩","i":"𝘪","j":"𝘫","k":"𝘬","l":"𝘭","m":"𝘮","n":"𝘯","o":"𝘰","p":"𝘱","q":"𝘲","r":"𝘳","s":"𝘴","t":"𝘵","u":"𝘶","v":"𝘷","w":"𝘸","x":"𝘹","y":"𝘺","z":"𝘻","A":"𝘈","B":"𝘉","C":"𝘊","D":"𝘋","E":"𝘌","F":"𝘍","G":"𝘎","H":"𝘏","I":"𝘐","J":"𝘑","K":"𝘒","L":"𝘓","M":"𝘔","N":"𝘕","O":"𝘖","P":"𝘗","Q":"𝘘","R":"𝘙","S":"𝘚","T":"𝘛","U":"𝘜","V":"𝘝","W":"𝘞","X":"𝘟","Y":"𝘠","Z":"𝘡"};
//var boldCharMap = {"0":"𝟎","1":"𝟏","2":"𝟐","3":"𝟑","4":"𝟒","5":"𝟓","6":"𝟔","7":"𝟕","8":"𝟖","9":"𝟗","a":"𝐚","b":"𝐛","c":"𝐜","d":"𝐝","e":"𝐞","f":"𝐟","g":"𝐠","h":"𝐡","i":"𝐢","j":"𝐣","k":"𝐤","l":"𝐥","m":"𝐦","n":"𝐧","o":"𝐨","p":"𝐩","q":"𝐪","r":"𝐫","s":"𝐬","t":"𝐭","u":"𝐮","v":"𝐯","w":"𝐰","x":"𝐱","y":"𝐲","z":"𝐳","A":"𝐀","B":"𝐁","C":"𝐂","D":"𝐃","E":"𝐄","F":"𝐅","G":"𝐆","H":"𝐇","I":"𝐈","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝐌","N":"𝐍","O":"𝐎","P":"𝐏","Q":"𝐐","R":"𝐑","S":"𝐒","T":"𝐓","U":"𝐔","V":"𝐕","W":"𝐖","X":"𝐗","Y":"𝐘","Z":"𝐙"};
var normalMap = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"5","7":"5","8":"8","9":"9","a":"a","b":"b","c":"c","d":"d","e":"e","f":"f","g":"g","h":"h","i":"i","j":"j","k":"k","l":"l","m":"m","n":"n","o":"o","p":"p","q":"q","r":"r","s":"s","t":"t","u":"u","v":"v","w":"w","x":"x","y":"y","z":"z","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z"};
// const normalMap= _.invert(boldCharMap);

//CHARMAP COMBINATION
var bold_italic = makearray(boldCharMap,italicCharMap);
var italic_bold = makearray(italicCharMap,boldCharMap);

var bold_bolditalic =makearray(boldCharMap,boldItalicCharMap);
var bolditalic_bold = makearray(boldItalicCharMap,boldCharMap);

var boldItalic_italic =makearray(boldItalicCharMap,italicCharMap);
var italic_bolditalic =makearray(italicCharMap,boldItalicCharMap);



//GET THE FONT TYPE
function fontname(){

  let changedfontMap;

switch (popvar.font) {
case "Normal":
    changedfontMap = normalMap;
  break;
case "font1":
  changedfontMap = boldCharMap;
  break;
case "font2":
  changedfontMap = italicCharMap;
  break;
case "font3":
  changedfontMap = boldItalicCharMap;
  break;
default:
  changedfontMap = normalMap;
}
return changedfontMap;
}




//APPLY CHARMAP
function applyCharMap(map, text) {
      let out = "";
       for(let c of [...text]) {        
         if(map[c] !== undefined){
           out += map[c];
         } 
         else if(map[c.toLowerCase()] !== undefined){
          out += map[c.toLowerCase()] ; 
         } 
         else {
           out += c;
          }
       }
      return out;
    }

//CHARMAP DESCISION
function strcon(givenString) {
  var changedfontMap= fontname();
	var b = '';
	var a = givenString;
  var cx =  [...a];
  
  for (i = 0; i < cx.length; i++) {
    var ax = cx[i];
    //ITALIC
    if (Object.values(italicCharMap).indexOf(ax) > -1 && changedfontMap === boldItalicCharMap ) {
      b= b+ax;
      b = applyCharMap(italic_bolditalic,b);
      console.log("italic to bold italic");       
    }else if(Object.values(italicCharMap).indexOf(ax) > -1 && changedfontMap === boldCharMap){
      b= b+ax;
      b = applyCharMap(italic_bold,b);
      console.log("italic to bold");
    }else if(Object.values(italicCharMap).indexOf(ax) > -1 && changedfontMap === normalMap){
      b= b+ax;
      b = applyCharMap(swap(italicCharMap),b);
      console.log("italic to normal");

    //BOLD
    }else if(Object.values(boldCharMap).indexOf(ax) > -1 && changedfontMap === italicCharMap){
      b= b+ax;
      b = applyCharMap(bold_italic,b);
      console.log("bold to italic");
    }else if(Object.values(boldCharMap).indexOf(ax) > -1 && changedfontMap === normalMap){
      b= b+ax;
      b = applyCharMap(swap(boldCharMap),b);
      console.log("bold to normal");
    }else if(Object.values(boldCharMap).indexOf(ax) > -1 && changedfontMap === boldItalicCharMap){
      b= b+ax;
      b = applyCharMap(bold_bolditalic,b);
      console.log("bold to bolditalic");

    //BOLD_ITALIC
    }else if(Object.values(boldItalicCharMap).indexOf(ax) > -1 && changedfontMap === boldCharMap){
      b= b+ax;
      b = applyCharMap(bolditalic_bold,b);
      console.log("bolditalic to boldcharmap");
    }else if(Object.values(boldItalicCharMap).indexOf(ax) > -1 && changedfontMap === normalMap){
      b= b+ax;
      b = applyCharMap(swap(boldItalicCharMap),b);
      console.log("bolditalic to normal");
    }else if(Object.values(boldItalicCharMap).indexOf(ax) > -1 && changedfontMap === italicCharMap){
      b= b+ax;
      b = applyCharMap(boldItalic_italic,b);
      console.log("bolditalic to italic");

    //NORMAL
    }else if(Object.values(normalMap).indexOf(ax) > -1 && changedfontMap === italicCharMap){
      b= b+ax;
      b = applyCharMap(italicCharMap,b);
      console.log("normal to italic");
    }else if(Object.values(normalMap).indexOf(ax) > -1 && changedfontMap === boldCharMap){
      b= b+ax;
      b = applyCharMap(boldCharMap,b);
      console.log("Normal to bold");
    }else if(Object.values(normalMap).indexOf(ax) > -1 && changedfontMap === boldItalicCharMap){
      b= b+ax;
      b = applyCharMap(boldItalicCharMap,b);
      console.log("Normal to bold");
    }else{
      b = b+ax;
      console.log("ignore");
    }
  }
	return b;
}

