var now = new Date()
var time = now.getHours
console.log(`it is now exactly ${time} o'clock.`)
if (time  < 12){
    console.log('Good Morning')
} else if (time <= 18) {
    console.log('Good Afternoom')
} else {
    console.log('Good Night')
}