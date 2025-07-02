function randomPeoples(containerId) {
  const container = document.querySelector(containerId);

  const title = document.createElement("h1");
  title.textContent = "StarWars Peoples";

  const button = document.createElement("button");
  button.classList.add("get-person-button");
  button.textContent = "Get Person";

  let url = "https://swapi.tech/api/people/";

  const memo = {}

  function getPerson(properties) {
    const personDiv = document.createElement("div");
    personDiv.innerHTML = `<strong>Name:</strong> ${properties.name} <br> 
                          <strong>Hair color:</strong> ${properties.hair_color}<br>
                          <strong>Hender:</strong> ${properties.gender}<br>
                          <strong>Height:</strong> ${properties.height}<br>
                          <strong>Eye color:</strong> ${properties.eye_color}<br>`
    personDiv.classList.add("person-div");
    container.innerHTML = "";
    container.append(personDiv);
    console.log(properties);
  }

  button.addEventListener("click", (ev) => {
    let randomId =(Math.floor(Math.random() * 82) + 1);

    if (memo[randomId]) {
      getPerson(memo[randomId]);
      return;
    }

    const randomUrl = url.concat(randomId);
    fetch(randomUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        memo[randomId] = data.result.properties;
        getPerson(memo[randomId]);
        console.log(`Se obtubo el usuario de la url ${randomUrl}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  container.before(title);
  container.before(button);
}
const personaje = randomPeoples("#personaje");
