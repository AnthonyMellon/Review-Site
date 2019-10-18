const commentSection = document.getElementById("comments")
const sumbmitButton = document.getElementById("submitComment")
const commentInput = document.getElementById("commentSection")
const nameInput = document.getElementById("nameInput")

const sumbmitComment = () => {
    const comment = commentInput.value
    const name = nameInput.value
    commentSection.innerHTML += `<div>${name} said:</div> <div>${comment}</div> <div>at ${new Date()}</div><br>`    
}

sumbmitButton.addEventListener('click', sumbmitComment)

