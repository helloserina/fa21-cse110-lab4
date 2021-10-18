setInterval(printSecond,1000);
function printSecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}