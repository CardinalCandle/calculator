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
        alert("Roses are red, i'm a bad translator, i know you want me dead, but don't bully my calculator")
    }
    else {
        return `${a/b}`
    }
}
function operate(op,a,b) {
    return op(a,b)
}

