function randomPeoples(containerId) {
  const container = document.querySelector(containerId);

  const title = document.createElement("h1");
  title.textContent = "StarWars Users";

  const button = document.createElement("button");
  button.classList.add('get-user-button');
  button.textContent = "Get User";

  let url = "https://swapi.tech/api/people/";
  
  button.addEventListener("click", (ev) => {
    let randomUrl = url.concat(Math.floor(Math.random() * 82) + 1);
    fetch(randomUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((users) => {
        const user = document.createElement('div');
        user.innerHTML = `<strong>Name:</strong> ${users.result.properties.name} <br> 
                          <strong>Hair color:</strong> ${users.result.properties.hair_color}<br>
                          <strong>Hender:</strong> ${users.result.properties.gender}<br>
                          <strong>Height:</strong> ${users.result.properties.height}<br>
                          <strong>Uid:</strong> ${users.result.uid}<br>
                          <strong>Description:</strong> ${users.result.description}<br>`;
        user.classList.add('user-div');
        container.append(user);
        console.log(`Se obtubo el usuario de la url ${randomUrl}`);
        console.log(users)
      })
      .catch((err) => {
        console.log(err.message);
      });
      
  });

  container.before(title);
  container.before(button);
}
const personaje = randomPeoples("#personaje");
