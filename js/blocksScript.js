const jsonOut = document.getElementById('tableHere')
var id = 0

fetch("JSON/blocks.json")
.then(res => {
    return res.json();
})
.then(data => {
    let table = ""
    table += "<table class='itemTable'>"
    data.forEach(element => {
        table += "<tr>"
        table += `<td><img src="${element["imageLink"]}"></td>`
        table += `<td>${element["blockName"]}</td>`
        table += `<td>${element["Description"]}</td>`
        // table += '<td name="starBox" class="starBox">'
        // table += `<input type="checkbox" name="star" id="star${id}"></input>`
        // id++;
        // table += `<input type="checkbox" name="star" id="star${id}"></input>`
        // id++;
        // table += `<input type="checkbox" name="star" id="star${id}"></input>`
        // id++;
        // table += `<input type="checkbox" name="star" id="star${id}"></input>`
        // id++;
        // table += `<input type="checkbox" name="star" id="star${id}"></input>`
        // id++;
        // table += '</td>'
        // table += "</tr>"        
    })
    table += "</table>"
    jsonOut.innerHTML = table; 
       
    var nStars = 25

    var stars1 = [document.getElementById("star0"), document.getElementById("star1"), document.getElementById("star2"), document.getElementById("star3") ,document.getElementById("star4")]
    var stars2 = [document.getElementById("star5"), document.getElementById("star6"), document.getElementById("star7"), document.getElementById("star8") ,document.getElementById("star9")]
    var stars3 = [document.getElementById("star10"), document.getElementById("star11"), document.getElementById("star12"), document.getElementById("star13") ,document.getElementById("star14")]
    var stars4 = [document.getElementById("star15"), document.getElementById("star16"), document.getElementById("star17"), document.getElementById("star18") ,document.getElementById("star19")]
    var stars5 = [document.getElementById("star20"), document.getElementById("star21"), document.getElementById("star22"), document.getElementById("star23") ,document.getElementById("star24")]



})

