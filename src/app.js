import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const pronouns = ['the', 'our'];
  const adjectives = ['great', 'big'];
  const nouns = ['jogger', 'racoon', 'paredes', 'partio'];
  const extentions = ['.com', '.es', '.io', '.net'];

  let container = document.getElementById("results");
  container.innerHTML = "";

  let groupedResults = {};
  extentions.forEach(extention => {
    groupedResults[extention] = [];
  });

  pronouns.forEach(pronoun => {
    adjectives.forEach(adjective => {
      nouns.forEach(noun => {
        extentions.forEach(extention => {
          let generatedDomain = `${pronoun}${adjective}${noun}${extention}`;
          groupedResults[extention].push(generatedDomain);
        });
      });
    });
  });

  for (let key in groupedResults) {
    let colDiv = document.createElement("div");
    colDiv.className = "col-sm-6 col-md-4 col-lg-3 my-3";

    let card = document.createElement("div");
    card.className = "card shadow-sm h-100";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let tableTitle = document.createElement("h4");
    tableTitle.className = "card-title";
    tableTitle.textContent = `Domains that end with '${key}'`;

    let table = document.createElement("table");
    table.className = "table table-striped table-hover table-bordered mt-3";
    table.innerHTML = `
      <thead class="thead-dark">
        <tr>
          <th>Domain</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    let tbody = table.querySelector("tbody");

    groupedResults[key].forEach(dom => {
      let tr = document.createElement("tr");
      let tdDomain = document.createElement("td");
      tdDomain.textContent = dom;
      tr.appendChild(tdDomain);
      tbody.appendChild(tr);
    });
    cardBody.appendChild(tableTitle);
    cardBody.appendChild(table);
    card.appendChild(cardBody);
    colDiv.appendChild(card);
    container.appendChild(colDiv);
  }
};