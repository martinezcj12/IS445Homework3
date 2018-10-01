const numberStr = prompt('Please input your number')
const number = Number(numberStr)
const result1 = triple(number)
const result2 = dec2bin(number)
result = result1 + '<br>' + result 2

function writeoutput(result)


const result = number * 2
const h3Element = document.getElementById('output')
h3Element.innerHTML = result

function triple(num) {
return num * 3
}
function dec2bin(dec) {
// the >>> rightshift to 0 remove the sign
// thus it can handle negative number
return (dec >>> 0).toString(2)
}