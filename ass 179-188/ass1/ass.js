function getData(jsonfile){
return new Promise((resolve,reject)=>{
    let myRequest = new XMLHttpRequest();
    console.log(myRequest);

myRequest.onload=function(){
    if(this.readyState===4 &&this.status===200){
resolve(JSON.parse(this.responseText));
    }
    else{
reject(Error("Your json file is wrong"));
    }
}
myRequest.open("GET",jsonfile)
myRequest.send();
})
}
getData("./ass.json")
.then((showData)=>{
showData.forEach((data)=>{
    let containerDiv = document.createElement("div");
    let title = document.createElement("h3");
    let titleText = document.createTextNode(data.title);
    title.appendChild(titleText);
    let description = document.createElement("p");
    let descriptionText = document.createTextNode(data.description);
    description.appendChild(descriptionText);
    containerDiv.appendChild(title);
    containerDiv.appendChild(description);
    document.body.appendChild(containerDiv);
    
})
})
