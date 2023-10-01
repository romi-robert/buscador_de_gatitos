
document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById("Buscar");
    const Divgato = document.getElementById("gatoimg");

    buscador.addEventListener('click', () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                const catImageUrl = data[0].url;

                const catImage = document.createElement('img');
                catImage.src = catImageUrl;

                Divgato.innerHTML = '';
                Divgato.appendChild(catImage);
                console.log(data)
            })
            .catch(error => console.error('Error:', error));
    });
});
