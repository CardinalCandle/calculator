var fnumber = ""
var operator = ""
var snumber = ""
document.getElementById("box").value = ""
function add(a,b) {
    return a+b
}
function subtract(a,b) {
    return add(a,-b)
}
function multiply(a,b) {
    return a*b
}
function divide(a,b) {
    if (b == 0) {
        alert("Roses are red, i'm a bad translator, you want me dead, but don't bully my calculator")
        return ""
    }
    else {
        console.log("dividing " + a + " by " + b)
        return a/b
    }
}
function operate() {
   if (operator == "" || snumber == "" || fnumber == "") {
       return
   }
   else {
        //if (snumber.toString().includes(",") || fnumber.toString().includes(",")) {
            fnumber = parseFloat(fnumber)
            snumber = parseFloat(snumber)
   // }
        //else {
          //  fnumber = fnumber.toFixed(2)
          //  snumber = snumber.toFixed(2)
   // }
    if (operator == "+") {
        result = add(fnumber, snumber)
        result = result.toFixed(2)
        document.getElementById("box").value = result
        document.getElementById("box").value = result
        snumber = ""
        fnumber = result
        operator = ""
        return delFluff()
    }
    else if (operator == "-") {
        result = subtract(fnumber, snumber)
        result = result.toFixed(2)
        document.getElementById("box").value = result
        document.getElementById("box").value = result
        snumber = ""
        fnumber = result
        operator = ""
        return delFluff()
    }
    else if (operator == "*") {
        result = multiply(fnumber, snumber)
        result = result.toFixed(2)
        document.getElementById("box").value = result
        document.getElementById("box").value = result
        snumber = ""
        fnumber = result
        operator = ""
        return delFluff()
    }
    else if (operator == "/") {
        result = divide(fnumber, snumber)
        result = result.toFixed(2)
        document.getElementById("box").value = result
        snumber = ""
        fnumber = ""
        operator = ""
        return delFluff();
    }
    else {
        return;
    }
   }
}

function delFluff() {
    keep = true
    while (document.getElementById("box").value.includes(".") &&
        document.getElementById("box").value[document.getElementById("box").value.length-1] == "0"||
        document.getElementById("box").value.includes(".") &&
        document.getElementById("box").value[document.getElementById("box").value.length-1] == ".") {
        delLast()
    }
    keep = false
}

function myFunction(id) {
    if (fnumber == "") {
        document.getElementById("box").value = ""
    }
    if (operator != "") {
        snumber += document.getElementById(`${id}`).innerText
        document.getElementById("box").value += document.getElementById(`${id}`).innerText;
        return;

    }
    else if (operator == "") {
        fnumber += document.getElementById(`${id}`).innerText
        document.getElementById("box").value += document.getElementById(`${id}`).innerText;
        return;
    }
}
function addComma(id) {
    if (document.getElementById("box").value.includes(".")) {return}
    else {
        if (operator != "") {
            snumber += document.getElementById(`${id}`).innerText
            document.getElementById("box").value += document.getElementById(`${id}`).innerText;
            return;

        }
        else if (operator == "") {
            fnumber += document.getElementById(`${id}`).innerText
            document.getElementById("box").value += document.getElementById(`${id}`).innerText;
            return;
            }
    }
}

function addOperator(id) {
    if (fnumber != "" && snumber == "") {
        document.getElementById("box").value = ""
        operator = document.getElementById(`${id}`).innerText;
        return
    }
    else {
        return;
    }
}
 function clearCalc() {
     snumber = ""
     fnumber = ""
     operator = ""
     document.getElementById("box").value = ""
     return
 }
 function delLast(){
    if (snumber != "") {
        snumber = snumber.substring(0, snumber.length - 1)
        document.getElementById("box").value = document.getElementById("box").value.substring(0, document.getElementById("box").value.length - 1)
        return
    }
    else if (snumber == "") {
        fnumber = fnumber.substring(0, snumber.length - 1)
        document.getElementById("box").value = document.getElementById("box").value.substring(0, document.getElementById("box").value.length - 1)

        return
    }
 }
///EventListeners
document.getElementById("dv").addEventListener("click", function(){addOperator("dv")});
document.getElementById("by").addEventListener("click", function(){addOperator("by")});
document.getElementById("min").addEventListener("click", function(){addOperator("min")});
document.getElementById("pls").addEventListener("click", function(){addOperator("pls")});
document.getElementById("7").addEventListener("click", function(){myFunction("7")});
document.getElementById("8").addEventListener("click", function(){myFunction("8")});
document.getElementById("9").addEventListener("click", function(){myFunction("9")});
document.getElementById("4").addEventListener("click", function(){myFunction("4")});
document.getElementById("5").addEventListener("click", function(){myFunction("5")});
document.getElementById("6").addEventListener("click", function(){myFunction("6")});
document.getElementById("com").addEventListener("click", function(){addComma("com")});
document.getElementById("1").addEventListener("click", function(){myFunction("1")});
document.getElementById("2").addEventListener("click", function(){myFunction("2")});
document.getElementById("3").addEventListener("click", function(){myFunction("3")});
document.getElementById("0").addEventListener("click", function(){myFunction("0")});
document.getElementById("clr").addEventListener("click", function(){clearCalc()});
document.getElementById("eq").addEventListener("click", function(){operate()});
document.getElementById("del").addEventListener("click", function(){delLast()});
