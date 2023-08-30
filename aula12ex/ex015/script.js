function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', '')
        if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 14){
            //criança
            img.setAttribute('src', 'bebemenino.png')
            
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovenmenino.png')
        } else if (idade < 47){
            //adulto
            img.setAttribute('src', 'adultohomem.png')
        } else {
            //idoso
            img.setAttribute('src', 'idodohomem.png')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 14){
            //criança
            img.setAttribute('src', 'bebemenina.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovenmenina.png')
        } else if (idade < 47){
            //adulto
            img.setAttribute('src', 'adultomulher.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosomulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}

}