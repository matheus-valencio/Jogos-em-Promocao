function requisicao(url){
    fetch(url)
    .then(resposta => resposta.text())
    .then(pagina => {
        let dom = new DOMParser()
        let documento = dom.parseFromString(pagina, 'text/html')

        raspar(documento)
    })
    .catch(erro => console.log(erro))    
}

function raspar(documento){
    documento.querySelectorAll('.product-card--wrapper').forEach(item => 
        document.getElementById("nuuvem-games").appendChild(item))   
    documento.querySelectorAll('.search_result_row').forEach(jogo => 
        document.getElementById("steam-games").appendChild(jogo))
    documento.querySelectorAll('.catalog-item-container').forEach(item => 
        document.getElementById("gamersgate-games").appendChild(item))   

    var br = document.querySelectorAll("BR")
    for(let i = 0; i< br.length; i++){
        br[i].remove()              
    }     
    var as = document.querySelectorAll('.search_result_row')
    for(let i = 0; i< as.length; i++){
        as[i].removeAttribute('onmouseover')
        as[i].removeAttribute('onmouseout')}    
    var links = document.querySelectorAll('.catalog-item--image')
    for(let i = 0; i< links.length; i++){ 
        var a = links[i].children
        Array.from(a)
        for(let i = 0; i< a.length; i++){
            var link2 = a[i].getAttribute('href')
            var link1 = 'https://www.gamersgate.com'
            a[i].setAttribute('href', link1+link2)
        }      
    }
    var links2 = document.querySelectorAll('.catalog-item--title')
    for(let i = 0; i< links2.length; i++){ 
        var a = links2[i].children
        Array.from(a)
        for(let i = 0; i< a.length; i++){
            var link2 = a[i].getAttribute('href')
            var link1 = 'https://www.gamersgate.com'
            a[i].setAttribute('href', link1+link2)
        }      
    }
    var titulos = document.querySelectorAll('.product-title')
    for(let i = 0; i< titulos.length; i++){
        var d = document.createElement('span');
        d.classList.add('nuuvem-title')
        d.innerHTML = titulos[i].innerHTML;
        titulos[i].parentNode.replaceChild(d, titulos[i]);
    }
}




requisicao('https://cors-anywhere.herokuapp.com/https://www.nuuvem.com/catalog/price/promo/sort/bestselling/sort-mode/desc')
requisicao('https://cors-anywhere.herokuapp.com/https://store.steampowered.com/search/?specials=1&filter=topsellers')
requisicao('https://cors-anywhere.herokuapp.com/https://www.gamersgate.com/offers/')