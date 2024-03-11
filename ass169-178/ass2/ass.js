let myrequest= new XMLHttpRequest();
myrequest.open("GET","./ass.json");
myrequest.send();
console.log(myrequest);
myrequest.onreadystatechange=function(){
if(this.readystate==4&&this.status==200){
    let jsdata=JASON.parse(this.responseText)
    console.log(jsdata);
    console.log("Data Loaded");

let mainData=JASON.parse(myrequest);
console.log(myrequest);
mainData.forEach((article) => {
    article["section"] = "all";
    });
    let updatesData=JSON.stringify(mainData);
    console.log(updatesData);
}
};