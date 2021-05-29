


function readMatchesFromXML(){
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            showMatchData(this);

        }
    };
    xhttp.open("GET","XMLs/matches.xml",true);
    xhttp.send();
}

function showMatchData(xml){
    let i;
    let xmlDoc=xml.responseXML;
    let matchArr=xmlDoc.getElementsByTagName("matches");
    let matches="<div id='elements'>";
    for(i=0;i<matchArr.length;i++){
        let min=matchArr[i].getElementsByTagName("min")[0].childNodes[0].nodeValue;
        if(min=="0") min+="0";
        matches+="<div class='match' id='first'><p class='par'>"+
        matchArr[i].getElementsByTagName("matchType")[0].childNodes[0].nodeValue+" Match<br>"+
        matchArr[i].getElementsByTagName("day")[0].childNodes[0].nodeValue+"/"+
        matchArr[i].getElementsByTagName("month")[0].childNodes[0].nodeValue+"/"+
        matchArr[i].getElementsByTagName("year")[0].childNodes[0].nodeValue+
        "  "+matchArr[i].getElementsByTagName("hour")[0].childNodes[0].nodeValue+":"+ min+"</p><h3></h3>"+
        "<p class='par'>VIA Club</p><p class='par'>vs.</p><p class='par'>"+matchArr[i].getElementsByTagName("opponentTeam")[0].childNodes[0].nodeValue+
        "</p><h3></h3><p class='par'>"+matchArr[i].getElementsByTagName("place")[0].childNodes[0].nodeValue+"</p></div>";
    }
    matches+="</div>";
    document.getElementById("elements").innerHTML=matches;
}
readMatchesFromXML();