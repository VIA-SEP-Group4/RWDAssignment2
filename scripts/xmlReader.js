
function readPlayersFromXML(){
    var xhttp = new XMLHttpRequest;

    xhttp.open("GET", "XMLs/players.xml")
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){

            var xmlDoc = this.responseXML;
            console.log(xmlDoc)
            // let arrPlayers = xmlDoc.getElementsByTagName("player");
            let arrPlayers = xmlDoc.querySelectorAll("player");

            // console.log(arrPlayers[0].getElementsByTagName("number")[0].childNodes[0].nodeValue)
            // console.log(arrPlayers[0].querySelector("firstName").childNodes[0].nodeValue)   
        }
    }
}
readPlayersFromXML();