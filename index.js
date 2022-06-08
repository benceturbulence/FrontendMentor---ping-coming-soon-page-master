const emailEl = document.getElementById("email_input")
const inputBtn = document.getElementById("input_btn")

inputBtn.addEventListener("click", function(){
    if (emailEl.value.includes("@")){
        document.getElementById("error_msg").style.display = "none"
        email_input.style.borderColor ="initial"
        emailEl.value = ""
    }

    
    else {
        console.log("email okay")
        document.getElementById("error_msg").style.display = "block"
        email_input.style.borderColor = "hsl(354, 100%, 66%)"
    }
})