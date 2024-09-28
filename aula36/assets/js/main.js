function main(){
    const elementos = [
        {tag: 'p', texto: 'Frase 1'}, // 0
        {tag: 'div', texto: 'Frase 2'}, // 1
        {tag: 'section', texto: 'Frase 3'}, // 2
        {tag: 'footer', texto: 'Frase 4'}, // 3
    ];
    
    const campo = document.querySelector('.container');
    const div = document.createElement('div');
    
    for (let i = 0; i < elementos.length; i++){
        // campo.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;

        let { tag, texto } = elementos[i];
        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);
        tagCriada.appendChild(textoCriado);
        div.appendChild(tagCriada);
    }

    campo.appendChild(div);
}

main();