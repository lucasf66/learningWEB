var nomeSeries= ['Himym']
var imagensSeries = ["https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/b/5/7/1b57d537d615c2675da3ead4dff11e38.jpg"]
function resetElementoSeries(){
  document.getElementById("Series").innerHTML="";
}

function confereUrl(url){
    if(url.endsWith(".jpg") || url.endsWith(".png")){
      return true
    }else{
      return false
    }
}

function limparCache(){
  document.getElementById("url").value="";
  document.getElementById("name").value="";
}


function setSerie(){
  var elementosSeries = document.getElementById("Series")
  for (var i = 0; i < imagensSeries.length; i++){
    var elementoSerie="<img src=" + imagensSeries[i] + "><h2 class=nameSeries>"+nomeSeries[i]+"</h2>"
    console.log(elementoSerie)
    elementosSeries.innerHTML+=elementoSerie
  }
}
setSerie();
function Salvar(){
  var condition1=false;
  var condition2=false;
  var inputNameSerie = document.getElementById("name").value
  var inputUrl = document.getElementById("url").value
  //Condição para verificar se o nome e url já existem, caso sim inserem!
    
    //Nome
    nomeSeries.forEach(function(serie){
      if(serie==inputNameSerie){
        condition1=true
        alert("Já existe essa série")
      }
    });
    if(condition1==false){
      console.log(inputNameSerie)
      nomeSeries.push(inputNameSerie)
    }
    //Se existe condition=true, for nova condition=false

    //URL
    if(confereUrl(inputUrl)==true){//Após conferir Url
      imagensSeries.forEach(function(urls){ //Roda A arrya de imagens
        if(inputUrl==urls){
          condition2=true
          alert("Já existe essa Imagem!")
        }
      });
      if(condition2==false && condition1==false){
        console.log(inputUrl)
        imagensSeries.push(inputUrl)
      }
      }else{
        alert("Não é Url")
      }
      console.log(nomeSeries)
      console.log(imagensSeries)
      console.log("Passou aqui e : "+condition1+" - "+condition2)
      //Confere se existe nome AND url iguais
      if(condition1==false && (condition2==false)){
      resetElementoSeries()
      setSerie()
      limparCache()
      }
}


function apagarSeriePorNome(nome){
  for(var i=0;i<nomeSeries.length;i++){
    if(nomeSeries[i]==nome){
      nomeSeries.splice(i,1)
      imagensSeries.splice(i,1)
    }
  }
}


function Apagar(){
  var condition1=false;
  var inputNameSerie = document.getElementById("name").value
   //Condição para verificar se o nome e url já existem, caso sim inserem!
   //Se existe condition=true, for nova condition=false
   console.log(nomeSeries)
   //Nome
    nomeSeries.forEach(function(serie){
      if(serie==inputNameSerie){
        condition1=true
      }
    });
    if(condition1==false){
      alert("Serie Não existe")
    }
    if(condition1==true){
      apagarSeriePorNome(inputNameSerie);
    }
    console.log(nomeSeries)
    resetElementoSeries()
    setSerie()
    limparCache()
}
