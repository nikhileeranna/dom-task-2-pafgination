var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
var data = []
request.onload  = () =>{
    data = JSON.parse(request.response);
    var button = document.createElement('div');
    button.setAttribute('class','button');

    var prev = createButton('Previous');
    prev.setAttribute('onClick','previous()');
    button.append(prev); 

    for(var i=1;i<=10;i++){
        var number = createButton(i);
        number.setAttribute('onClick','display(id)');
        button.append(number);
    }

    var next = createButton('Next');
    next.setAttribute('onClick','next()');
    button.append(next);
    document.body.append(button);
    display(1);
}
var table = document.createElement('table');
var thead=document.createElement('thead');
thead.setAttribute('class','thead');
var tr=document.createElement('tr');
var th1=document.createElement('th');
var th2=document.createElement('th');
var th3=document.createElement('th');
th1.innerHTML="ID";
th2.innerHTML="NAME";
th3.innerHTML="EMAIL";
tr.append(th1,th2,th3);
thead.append(tr);

var temp = 1;
function display(id){
    var id  = parseInt(id);
    temp = id;
    table.innerHTML="";
    for(var i=((id-1)*10);i<id*10;i++){
    var tr = document.createElement('tr');
    var td1  = document.createElement('td');
    var td2  = document.createElement('td');
    var td3  = document.createElement('td');
    td1.innerText = data[i].id;
    td2.innerText = data[i].name;
    td3.innerText = data[i].email;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    table.append(tr,thead);
    }
    document.body.append(table)
}

function previous(){
    if(temp>1){
      temp --;
        display(temp);
      }   
  }
  
  function next(){
    if(temp<10){
      temp ++;
        display(temp);
      }
  }
  

function createButton(buttonContent){
    var elem = document.createElement('input');
    elem.setAttribute('id',buttonContent);
    elem.setAttribute('type', 'button');
    elem.setAttribute('value', buttonContent);
    return elem;
}

request.send();
