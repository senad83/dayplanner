console.log ("Hellooo")

$("#currentDay")
console.log ($("#currentDay"))

moment().format();

console.log (moment().format("LLLL"))

$("#currentDay").html(moment().format("LLLL"));


console.log (document.getElementById ("9-am-save")
)
function setup (time){


    // Get the '9-am-save' button
    var button = document.getElementById (time + "-save")

    // When we click that button, run this function
    button.addEventListener ("click", function(){
    console.log ("Time")

    // Grap the 9-am-text from the text area
    var text = document.getElementById (time + "-text");
    console.log (text.value);

    // Save that 'grabbed' text into localstorage with a '9AM' key
    localStorage.setItem(time, text.value)
    

    })


    // Get the '9-am-text' text area
    var text = document.getElementById (time + "-text");

    // set the value inside the text area to the localstorage item we set eariler via the key ('9AM')
    text.value = localStorage.getItem (time)

} 
setup ("9-am")

setup ("10-am")

setup ("11-am")

setup ("12-am")

setup ("1-pm")

setup ("2-pm")

setup ("2-pm")

setup ("3-pm")

setup ("4-pm")

setup ("5-pm")

setup ("6-pm")


function colorBlocks (row) {


    var rowTime = (document.getElementById (row))

    var currentTime = moment().format("H");
    

     if (rowTime.id < currentTime) {
      rowTime.classList.add ("past")
     }
     else if (rowTime.id === currentTime) {
        rowTime.classList.remove ("past")
        rowTime.classList.add ("present")
     }
     else {
        rowTime.classList.remove ("past")
        rowTime.classList.remove ("present")
        rowTime.classList.add ("future")
     }
}

colorBlocks ("9")

colorBlocks ("10")

colorBlocks ("11")

colorBlocks ("12")

colorBlocks ("13")

colorBlocks ("14")

colorBlocks ("15")

colorBlocks ("16")

colorBlocks ("17")

colorBlocks ("18")

