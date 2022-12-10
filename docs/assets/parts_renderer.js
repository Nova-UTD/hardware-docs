function renderPartsData(data) {
    parent = document.getElementById("main-content");

    // Our incoming data is an array of "part" objects
    // Iterate through all of them and add an HTML div
    // for each part.
    console.log(data);
    for (let idx in data) {
        part = data[idx]
        var partElement = document.createElement("div");
        id = part.id;
        console.log(part);
        console.log(part['title']);
        partElement.innerHTML = `
            <h2>${part.id}: ${part.title}</h2>
            ${part.description} <br/>
            <b>Purpose:</b> ${part.purpose} <br/>
        `;

        if (part.links !== undefined) {
            for (let idx in part.links) {
                link = part.links[idx];
                partElement.innerHTML += `
                <a href="${link.url}">${link.title}</a>. 
                `
            }
        }

        parent.appendChild(partElement);
    }

    

    return "";
}

// Replace ./data.json with your JSON feed
fetch('/hardware/assets/parts.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    renderPartsData(data);
    // console.log(data);
  }).catch(err => {
    // Do something for an error here
  });

// renderData();

// parts = readJson();

// console.log(parts)