function mostraAlertaJPC(){
  alert("Alerta!");
}
function passaSeguentMMB(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let objPregAct = document.getElementById(idObjPregAct);
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i+1].id;
      break;
    };
  }
 
  let objPregSeg = document.getElementById(idObjPregSeg);
  objPregAct.classList.remove("mostraMMB");
  objPregAct.classList.add("amagarMMB");
  objPregSeg.classList.add("mostraMMB");
  objPregSeg.classList.remove("amagarMMB");
}

function passaAnteriorMMB(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let objPregAct = document.getElementById(idObjPregAct);
  let colArticles = document.getElementsByTagName("article");
  let idObjPregAnt;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregAnt = colArticles[i-1].id;
      break;
    };
  }
  let objPregAnt = document.getElementById(idObjPregAnt);
  objPregAct.classList.remove("mostraMMB");
  objPregAct.classList.add("amagarMMB");
  objPregAnt.classList.add("mostraMMB");
  objPregAnt.classList.remove("amagarMMB");
}