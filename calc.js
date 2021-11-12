function calc() {
    let x1 = prompt("input x1");
    let x2 = prompt("input x2");
    let sign = prompt("input sign");
    // let f;
    // let functionStr = "f = function(x){return " + /*...*/ +";}";
    alert(eval(x1 + sign + x2));
}

// function printTable(from, to, step, func) {
//     if (func === undefined) {
//         return;
//     }
//     from = from;
//     to = to;
//     step = step || 1;
//     document.write("<table border='1'>");
//     for (var x = from; x <= to; x += step) {
//         document.write("<tr>");
//         document.write("<td>" + x + "</td>");
//         document.write("<td>" + func(x) + "</td>");
//         document.write("</tr>");
//     }
//     document.write("</table>");
// }

// function quadratic(x) {
//     return x * x;
// }

// function cube(x) {
//     return x * x * x;
// }

// let expr = prompt("input expression for function");

// let functionStr = "let f = function(x){return " + expr + ";}";
// eval(functionStr);
// //alert(functionStr);
// // let ff = [quadratic, cube];
// printTable(-4, 4, 1, f);