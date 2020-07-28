
function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let myText = document.getElementById('paragraph1');
    myText.style.color = '#' + randomColor;
}

function resetColor() {
    document.getElementById('paragraph1').style = "Color: black";
}


function replaceWith() {
    var str = document.getElementById("paragraph2").innerHTML;
    var chngFrom = changeFrom();
    var regExpression = new RegExp(chngFrom, "g");
    var chngTo = changeTo();
    var res = str.replace(regExpression, chngTo);
    document.getElementById("paragraph2").innerHTML = res;
}

function changeFrom() {
    fromWord = document.getElementById('change-from').value;
    return(fromWord);
}

function changeTo() {
    toWord = document.getElementById('change-to').value;
    return(toWord);
}


function getSelectedText() {
    var selectedText = '';
    selectedText = window.getSelection().toString();
    return selectedText;
}

function addtext() {
    var newtext = getSelectedText();
    document.testform.selectedtext.value += newtext;
}

function clearText() {
    document.testform.selectedtext.value ='';
}

function encryptText(myText) {
    let strSplit = myText.split('');
    let arrayAscii = strSplit.map(l => l.charCodeAt());
    for (i = 0; i < arrayAscii.length; i++) {
        if (arrayAscii[i] >= 65 && arrayAscii[i] <= 90) {
            if (arrayAscii[i] < 78) {
                arrayAscii[i] = arrayAscii[i] + 13;
            } else {
                arrayAscii[i] = arrayAscii[i] - 13;
            }
        }
        if (arrayAscii[i] >= 97 && arrayAscii[i] <= 122) {
            if (arrayAscii[i] < 110) {
                arrayAscii[i] = arrayAscii[i] + 13;
            } else {
                arrayAscii[i] = arrayAscii[i] - 13;
            }
        }
    }
    let strConvert = new TextDecoder().decode(Uint8Array.from(arrayAscii));
    document.testform.selectedtext.value = strConvert;
}