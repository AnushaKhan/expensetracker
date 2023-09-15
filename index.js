var bal=0.0;
var inc=0.0;
var exp=0.0;
var hist=[];

function onSub(event){
    event.preventDefault();
    if(document.querySelector(".inc:checked")!=undefined){
      var desc=document.querySelector("#desc").value;
      var amt=(parseFloat(document.querySelector("#amt").value)*100)/100;
      var select=document.querySelector(".inc:checked").value;
      console.log(desc,amt,select);
      hist.push({
        description:desc,
        amount:amt,
        select:select

      })
      if(select=="Income")
      {
        bal=bal+amt;
        inc=inc+amt;
      }
      if(select=="Expense")
      {
        bal=bal-amt;
        exp=exp+amt;
      }
      var cont=document.querySelector("#sp");
      cont.textContent=`rs ${bal}`;

      var inco=document.querySelector("#isp");
      inco.textContent=`rs ${inc}`;

      var expe=document.querySelector("#esp");
      expe.textContent=`rs ${exp}`;

      var toup="";
      hist.forEach((elem, index) => {
        toup += `<li class="${
          elem.select == "Income" ? "green" : "red"
        } _${index}"><span>${elem.description}</span><span>${elem.amount}</span>
      <button class="_${index}" onclick="onCross(event)" >X</button></li>`;
      });

      document.querySelector("#list").innerHTML=toup;
      document.querySelector("#desc").value="";
      document.querySelector("#amt").value="";
      desc=document.querySelector(".inc:checked").checked=false;
    }
    else{
        alert("please select income or expense");
    }
}

function onCross(event){
    var index=-1;
    var listel=document.querySelectorAll("#list li");
    listel.forEach((elem,ind)=>{ 
        if(elem==event.target){
            index=ind;
        }
    })

    hist.splice(index, 1);
  bal = 0.0;
  inc = 0.0;
  exp = 0.0;
  if(hist.length!=0)
  {
    hist.forEach((elem)=>{
        if(elem.select=="Income")
        {
            inc=inc+elem.amount;
            bal=bal+elem.amount;
        }
        if(elem.select=="Expense")
        {
            exp=exp+elem.amount;
            bal=bal-elem.amount;
        }
    })

    var toup="";
      hist.forEach((elem, index) => {
        toup += `<li class="${
          elem.select == "Income" ? "green" : "red"
        } _${index}"><span>${elem.description}</span><span>${elem.amount}</span>
      <button class="_${index}" onclick="onCross(event)" >X</button></li>`;
      });

      document.querySelector("#list").innerHTML=toup;

  }
  else{
    document.querySelector("#list").innerHTML="";
  }

  var cont=document.querySelector("#sp");
      cont.textContent=`rs ${bal}`;

      var inco=document.querySelector("#isp");
      inco.textContent=`rs ${inc}`;

      var expe=document.querySelector("#esp");
      expe.textContent=`rs ${exp}`;


}





