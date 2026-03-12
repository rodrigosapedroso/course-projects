const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const description = document.getElementById("description");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const mainArray = [creatureName, creatureId, weight, height, types]
const statsArray = [hp, attack, defense, specialAttack, specialDefense, speed]

const creatureEndpoint = "https://rpg-creature-api.freecodecamp.rocks/api/creature";

const fetchData = async (endpoint) => {
  try {
    const res = await fetch(endpoint)
    const data = await res.json()
    return data;
  } catch (err) {
    console.log(err)
  }
}

const getData = async () => {
  const input = searchInput.value.toLowerCase();
  const creatureData = await fetchData(`${creatureEndpoint}/${input}`)

  creatureName.textContent = creatureData.name;
  creatureId.textContent = `#${creatureData.id}`;
  weight.textContent = `Weight: ${creatureData.weight}`;
  height.textContent = `Height: ${creatureData.height}`;

  types.innerHTML = creatureData.types.map(obj => `<span>${obj.name.toUpperCase()}</span>`).join(" ");

  description.innerHTML = `
    <div>${creatureData.special.name}</div>
    <div>${creatureData.special.description}</div>`;

  statsArray.forEach((el, index) => el.textContent = creatureData.stats[index].base_stat);
}

const clearCreature = () => {
  mainArray.forEach(el => el.textContent = "");
  statsArray.forEach(el => el.textContent = "");
}

const validateCreature = async () => {
  try {
    await getData()
  } catch {
    alert("Creature not found")
    clearCreature()
  }
}

searchBtn.addEventListener("click", validateCreature)