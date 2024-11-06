// Estado inicial do jogo
let health = 100;

// Atualiza o status do jogador
function updateStatus() {
  document.getElementById("health").textContent = health;
}

// Função principal do jogo
function makeChoice(choice) {
  const story = document.getElementById("story");
  
  if (choice === 1) {
    story.textContent = "Você escolheu explorar a floresta. Após caminhar, encontra uma fruta misteriosa. Comer ou ignorar?";
    document.getElementById("choices").innerHTML = `
      <button onclick="eatFruit()">Comer</button>
      <button onclick="ignoreFruit()">Ignorar</button>
    `;
  } else if (choice === 2) {
    story.textContent = "Você encontra um monstro! Deseja lutar ou fugir?";
    document.getElementById("choices").innerHTML = `
      <button onclick="fightMonster()">Lutar</button>
      <button onclick="runAway()">Fugir</button>
    `;
  } else if (choice === 3) {
    story.textContent = "Você encontrou um tesouro escondido! Sua aventura termina com uma grande vitória!";
    document.getElementById("choices").innerHTML = `
      <button onclick="restartGame()">Reiniciar Jogo</button>
    `;
  }
}

// Funções para os resultados das escolhas
function eatFruit() {
  health -= 10;
  document.getElementById("story").textContent = "A fruta estava envenenada! Você perde 10 de vida.";
  updateStatus();
  endOrContinue();
}

function ignoreFruit() {
  document.getElementById("story").textContent = "Você ignora a fruta e segue em frente.";
  endOrContinue();
}

function fightMonster() {
  health -= 30;
  document.getElementById("story").textContent = "Você luta com o monstro e vence, mas perde 30 de vida.";
  updateStatus();
  endOrContinue();
}

function runAway() {
  document.getElementById("story").textContent = "Você foge do monstro e escapa ileso.";
  endOrContinue();
}

function endOrContinue() {
  if (health <= 0) {
    document.getElementById("story").textContent = "Você perdeu todas as suas vidas. Fim de jogo!";
    document.getElementById("choices").innerHTML = `<button onclick="restartGame()">Reiniciar Jogo</button>`;
  } else {
    document.getElementById("choices").innerHTML = `
      <button onclick="makeChoice(1)">Explorar Floresta</button>
      <button onclick="makeChoice(2)">Encontrar Monstro</button>
      <button onclick="makeChoice(3)">Procurar Tesouro</button>
    `;
  }
}

// Reiniciar o jogo
function restartGame() {
  health = 100;
  updateStatus();
  document.getElementById("story").textContent = "Bem-vindo ao jogo de aventura!";
  document.getElementById("choices").innerHTML = `
    <button onclick="makeChoice(1)">Explorar Floresta</button>
    <button onclick="makeChoice(2)">Encontrar Monstro</button>
    <button onclick="makeChoice(3)">Procurar Tesouro</button>
  `;
}

// Inicializa o status do jogador
updateStatus();
