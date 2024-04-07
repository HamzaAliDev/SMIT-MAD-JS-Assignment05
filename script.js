// global variables
let originalText = "<p>I love my country Pakistan. <br /> I like my city Faisalabad. <br /> I love my Homeland.</p>"
let cityList = ['lahore', 'multan', 'karachi', 'quetta', 'gujrat']

// Function to show a toast notification
function showToast(message) {
    Toastify({
        text: message,
        duration: 3000, // Duration in milliseconds
        gravity: "top", // 'top' or 'bottom'
        position: "center", // 'left', 'center', 'right'
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Background color
        stopOnFocus: true, // Stop timeout when mouse is hovered over toast
    }).showToast();
}

// show original statement
document.getElementById('original-statement').innerHTML = originalText

// lowerCase button handle
function handleLowerCase() {
    let lowerCaseText = originalText.toLowerCase();
    originalText = lowerCaseText

    console.log(lowerCaseText);
    document.getElementById('output-field').style.textTransform = "none";
    document.getElementById('output-field').innerHTML = originalText
}

// uppercase button handle
function handleUpperCase() {
    let upperCaseText = originalText.toUpperCase();
    originalText = upperCaseText

    console.log(upperCaseText);
    document.getElementById('output-field').innerHTML = originalText
}

// capitalize button handle
function handleCapitalize() {
    let lowerCaseText = originalText.toLowerCase();
    originalText = lowerCaseText

    document.getElementById('output-field').style.textTransform = "capitalize"
    document.getElementById('output-field').innerHTML = originalText
}

// better formatting button handle 
function handleFormatting() {
    if (document.getElementById('userinput').value == "") {
        showToast("Please Enter a Word Correctly!")
    } else {
        let word = document.getElementById('userinput').value
        let lowerCaseText = word.toLowerCase();
        word = lowerCaseText

        document.getElementById('output-field').style.textTransform = "capitalize"
        document.getElementById('output-field').innerHTML = word
    }

    document.getElementById('userinput').value = ""
}

// show list of cities
function handleCityList() {
    document.getElementById('output-field').style.textTransform = "capitalize"
    document.getElementById('output-field').innerHTML = ""

    for (let index = 0; index < cityList.length; index++) {
        const element = cityList[index];

        document.getElementById('output-field').innerHTML += index + 1 + ")  " + element + "<br />"
    }
}

// add city into list of cities
function handleAddCity() {
    if (document.getElementById('userinput').value == "") {
        showToast("Please Enter a City!")
    } else {
        let city = document.getElementById('userinput').value
        let cityCase = city.toLowerCase();
        // check city is it already in list
        let flag = false
        for (let index = 0; index < cityList.length; index++) {
            if (cityList[index] === cityCase) {
                flag = true
            }
        }
        if (flag == true) {
            document.getElementById('output-field').innerHTML = "<span style='color:red;'>" + city + " </span>is already exist."
        } else {
            cityList.push(cityCase)
            console.log(cityList);
            showToast("City Added Successfully!")
            document.getElementById('output-field').innerHTML = "<span style='color:green;'>" + city + " </span>is successfully added in the list."
        }
    }
    document.getElementById('userinput').value = ""
}

// check city by name 
function handleCheckCity() {
    if (document.getElementById('userinput').value == "") {
        showToast("Please Enter a City Name!")
    } else {
        let city = document.getElementById('userinput').value
        let cityCase = city.toLowerCase();
        let flag = false
        for (let index = 0; index < cityList.length; index++) {
            if (cityList[index] === cityCase) {
                flag = true
            }
        }
        if (flag == true) {
            document.getElementById('output-field').innerHTML = "<span style='color:green;'>" + city + " </span>is already in city list."
        } else {
            document.getElementById('output-field').innerHTML = "Sorry we couldn't found your city <span style='color:red;'>" + city + " </span> in city list."
        }
    }
    document.getElementById('userinput').value = ""
}

// find word button handle
function handleFindWord() {
    if (document.getElementById('userinput').value == "") {
        showToast("Please Enter a Word")
    } else {
        let word = document.getElementById('userinput').value
        let flag = originalText.search(word)
        // if word is not exist
        if (flag == -1) {
            document.getElementById('output-field').innerHTML = "The word <span style='color:red;'>" + word + " </span> is not found."
        } else {
        // if word exit
            let currentIndex = 0;
            let occurrences = [];

            while (currentIndex !== -1) {
                currentIndex = originalText.indexOf(word, currentIndex);
                if (currentIndex !== -1) {
                    occurrences.push(currentIndex);
                    currentIndex += 1; // Move to the next character to avoid finding the same occurrence again
                }
            }            
            console.log("Indices of Search word:", occurrences);

            // show the index of word
            document.getElementById('output-field').innerHTML = "the word you enter is found at index: "
            for (let i = 0; i < occurrences.length; i++) {
                const element = occurrences[i];

                document.getElementById('output-field').innerHTML += element + " , "
            }
        }
    }
    document.getElementById('userinput').value = ""
}

// replace word button handle
function handleReplaceWord() {
    if (document.getElementById('userinput').value == "") {
        showToast("Please Enter a Word")
    } else {
        let replaceWord = prompt("Enter the new word")
        let word = document.getElementById('userinput').value
        let text = originalText.replaceAll(word, replaceWord)

        document.getElementById('output-field').style.textTransform = "none";
        document.getElementById('output-field').innerHTML = text
    }
    document.getElementById('userinput').value = ""
}

// clear output / result button
function handleClearBtn() {
    document.getElementById('output-field').innerHTML = ""
}

// clear inputfield button
function handleInputClear() {
    document.getElementById('userinput').value = ""
}


