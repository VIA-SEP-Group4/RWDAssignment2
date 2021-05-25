function readPlayersFromXML(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            showPlayerData(this);
        }
    };
    xhttp.open("GET","XMLs/players.xml",true);
    xhttp.send();
}
function showPlayerData(xml){
    var i;
    var xmlDoc=xml.responseXML;
    var playerArr=xmlDoc.getElementsByTagName("player");
    var players="<div class='container'><div class='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>";
    for(i=0;i<playerArr.length;i++){
        players+="<div class='col-md'><div class='thumbnail playa'><div class='caption'><p><b>Name: </b>"+playerArr[i].getElementsByTagName("firstName")[0].childNodes[0].nodeValue+" "+playerArr[i].getElementsByTagName("lastName")[0].childNodes[0].nodeValue+"</p><p><b>Position: </b>"+
        playerArr[i].getElementsByTagName("position")[0].childNodes[0].nodeValue+"</p><p><b>Number: </b>"+playerArr[i].getElementsByTagName("number")[0].childNodes[0].nodeValue+
        "</p></div></div></div>";
        
    }
    players+="</div></div>";
    document.getElementById("playerlist").innerHTML=players;
}
readPlayersFromXML();