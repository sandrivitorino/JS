function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imgft')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#ec924e'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#635f2f'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background ='#020a0c'
    }
    
}
