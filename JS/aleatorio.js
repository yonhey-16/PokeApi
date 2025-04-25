var misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

function mostrarAleatorio() {
    const app = document.getElementById("app");

    let pokesAleatorios = '<section class="c-aleatorio c-lista">';

    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * totalPokes) + 1;

        if (!misNumeros.includes(num)) {
            misNumeros.push(num);
            localStorage.setItem("misNumeros", JSON.stringify(misNumeros));
        }

        pokesAleatorios += `
        <div class="c-lista-pokemon c-un_aleatorio">
            <p>#${num}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png" width="60" height="60">
        </div>`;
    }

    pokesAleatorios += "</section>";
    app.innerHTML = pokesAleatorios;
}