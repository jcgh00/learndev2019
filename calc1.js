//3-21-2019 jc
//javascript code go es h ere
function add1(val){
    return val+10;
}
function complexCalc(val,rate,trm){
    return "**"+val+"?"+rate+"/"+trm;
}
function alert1(){
    console.log(1);
   alert (1);
}
function fillRateDropDown(){
    fillRate(4,16);
}
function fillRate(start,quan){
    var sel=fm1.rate;
    for (var i=0; i<quan; i++){
      sel.options[i]= new Option(start+i/4,start+i/4);
    }
}
function putResult(){
    var tmp=parseFloat(fm1.amount.value);
    var idx=fm1.rate.selectedIndex;
    var rt=parseFloat(fm1.rate.options[idx].value);
    var idxt=fm1.term.selectedIndex;
    var trm=parseFloat(fm1.term.options[idxt].value);
    var result=complexCalc(tmp, rt,trm);
    fm1.result.value= result;
}
