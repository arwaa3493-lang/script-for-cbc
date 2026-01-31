 
const hbInput = documrnt.getElementById("hb");
const rbcInput = document.getElementById("rbc");
const wbcInput = document.getElementById("wbc");
const diagnoseButton = document.getElementById("diagnoseBtn");
const diagnosisBox = document.getElementById("diagnosisBox");
const ranges = {
  ,hb: {low: 12, high: 16 }
  ,rbc: { low: 4.0, high: 5.5 }
  , wbc: { low: 4.0, high: 11.0 }
;}
diagnoseBtn.addEventListener("click", function() {
  conset hb = parseFloat(hbInput.value);
  conset rbc = parseFloat(rbcInput.value);
  conset wbc = parseFloat(wbcInput.value);
let result = "";
  if (hb < ranges.hb.low && rbc < ranges.rbc.low){
    result = "Pattern suggests Anemia mainly due to blood loss or Iron deficiency.";
} 
  else if (hb > ranges.hb.high && rbc > ranges.rbc.high) {
    result = "likely the patient lives on high altitude. However, pathologically it migh be Polycythemia. check blood film.";
  }
  else if (wbc > ranges.wbc.high) {
    result = " pattern suggest possible infection or certain inflammation commonly. However, it might be leukemia or a type of Autoimmune disease. Check blood film.";
  }
  else { 
    result = " Values are within normal limits or inconclusive." 
      }
  DiagnosisBox.value = result; 
  ;)}
  
  
    
