const jsonOut = document.getElementById('tableHere')

fetch("JSON/mobs.json")
.then(res => {
    return res.json();
})
.then(data => {
    let table = ""
    table += "<table>"
    data.forEach(element => {
        table += "<tr>"
        table += `<td><img src="${element["imageLink"]}"></td>`
        table += `<td>${element["mobName"]}</td>`
        table += `<td>${element["Description"]}</td>`
        table += "</tr>"
    })
    table += "</table>"
    jsonOut.innerHTML = table;    
})