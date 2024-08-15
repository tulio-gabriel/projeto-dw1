function clicando(){
    let nick=document.getElementById('nome')
    let novonick=document.getElementById('txtnome')
    nick.innerHTML=novonick
}
function barraclique(){
    var barra=document.querySelector('.barranav')
    barra.style.backgroundcolor="blue";
}


function clico(){
    let cp=document.getElementById('cpf')
    let bt=document.getElementById('confbuta')
    if(cp.length!=11){
        window.alert('dados incorretos, tente novamente')
    }else{
        document.location=('http://127.0.0.1:5500/fim.html')
    }
}
