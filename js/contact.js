var sumbitButton = document.getElementById("submit")

const Submitted = () => {
    var name = document.getElementById("nameInput").value
    alert(`Thank you for your message ${name}`)
}

sumbitButton.addEventListener('click', Submitted)
