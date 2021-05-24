


function readMatchesFromXML(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            showMatchData(this);

        }
    };
    xhttp.open("GET","XMLs/matches.xml",true);
    xhttp.send();
}

function showMatchData(xml){
    var i;
    var xmlDoc=xml.responseXML;
    var matchArr=xmlDoc.getElementsByTagName("match");
    var matches="<div id='elements'>";
    for(i=0;i<matchArr.length;i++){
        matches+="<div class='match' id='first'><p class='par'>"+
        matchArr[i].getElementsByTagName("type")[0].childNodes[0].nodeValue+"<br>"+
        matchArr[i].getElementsByTagName("time")[0].childNodes[0].nodeValue+"</p><h3></h3>"+
        "<p class='par'>VIA Club</p><p class='par'>vs.</p><p class='par'>"+matchArr[i].getElementsByTagName("opponent")[0].childNodes[0].nodeValue+
        "</p><h3></h3><p class='par'>"+matchArr[i].getElementsByTagName("place")[0].childNodes[0].nodeValue+"</p></div>";
    }
    matches+="</div>";
    document.getElementById("elements").innerHTML=matches;
}
readMatchesFromXML();