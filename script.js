$(document).ready(function() {
    $("#not-allowed").hide()
    $("#check-name").click(function(){
        console.log("clicked");
        var nameinput = $("#name-input").val()
        if (nameinput === 'Tawana' || nameinput === 'Ashley' || nameinput === 'Christine') {
            console.log("matched")
            $("#not-allowed").hide()
            if(nameinput === 'Tawana') {
                var goToTawana = function() {
                    location.replace('./Tgame1.html');
                };
                goToTawana()
            }
            else if(nameinput === 'Ashley') {
                var goToAshley = function() {
                    location.replace('./Agame1.html');
                };
                goToAshley()
            }
            else if(nameinput === 'Christine') {
                var goToChristine = function() {
                    location.replace('./Cgame1.html');
                };
                goToChristine()
            }
        } else {
            $("#not-allowed").show()
            console.log("nope")
        } 
        
    
    });
})