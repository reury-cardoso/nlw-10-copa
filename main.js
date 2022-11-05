function criarJogo(playr1, hour, playr2) {
  return `<li>
          <img src="./assets/icons_time/icon-${playr1}.svg" alt="Bandeira da ${playr1}" />
          <strong>${hour}</strong>
          <img src="./assets/icons_time/icon-${playr2}.svg" alt="Bandeira da ${playr2}" />
        </li>`
}

let delay = -0.4
function criarcard(date, dey, games) {
  delay = delay + 0.4
  return `<div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${dey}</span> 
        <!--h4>GRUPO A</h4>--></h2>
        <ul>
            ${games}
        </ul>
      </div>`
}

document.querySelector("#cards").innerHTML =
  criarcard(
    "24/11",
    "Quinta",
    criarJogo("switzerland", "07:00", "cameroon") +
      criarJogo("uruguay", "10:00", "south korea") +
      criarJogo("serbia", "16:00", "brazil")
  ) +
  criarcard(
    "28/11",
    "segunda",
    criarJogo("serbia", "07:00", "cameroon") +
      criarJogo("ghana", "10:00", "south korea") +
      criarJogo("brazil", "13:00", "switzerland")
  ) +
  criarcard(
    "02/12",
    "Quinta",
    criarJogo("south korea", "07:00", "portugal") +
      criarJogo("ghana", "12:00", "uruguay") +
      criarJogo("cameroon", "16:00", "brazil")
  )