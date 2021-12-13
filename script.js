$(document).ready(function() {
    //check name
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

    //game 1
    $('#b1').click(function(){
        $(this).css('background-color','white');

        $('#b4').click(function(){
            $(this).css('background-color','white');
            $('#b3').click(function(){
                $(this).css('background-color','white');
                $('#b2').click(function(){
                    $(this).css('background-color','white');
                    $('#b7').click(function(){
                        $(this).css('background-color','white');
                        $('#b6').click(function(){
                            $(this).css('background-color','white');
                            $('#b5').click(function(){
                                $(this).css('background-color','white');
                                $('#rainbow').css('visibility','visible')
                                $('#nextbtn1').css('visibility','visible')
                            })
                        })
                    })
                })
            })
        })
    })    
    $('#nextbtn1').click(function(){
        location.replace('./game2.html');
    })
    
    //game2
    $('#start').show();
    $('#win').hide();
    $('#endScreen').hide();

    $('#start').on("mouseover", function() {
    
        $('#start').hide();
        var randWidth = random = Math.ceil(Math.random() * 350);
        var randHeight = random = Math.ceil(Math.random() * 350);
        
        $('#win').show('fast').css('background-color', 'white').css('border', 'none');
        $('#win').css('top', randHeight);
        $('#win').css('left', randWidth);
    });

    $('#win').on("mouseover", function() {
        $('#win').css('background-color', 'red');
        $('#game2image').css('visibility', 'visible');
        $('#nextbtn2').css('visibility', 'visible')
    });

    $('#nextbtn2').click(function(){
        location.replace('./game3.html');
    })

    //game 3
    $('#santaPhoto').on('mouseover', function() {
        $('#santaClaus').attr('src', './santaslist.png').push($('#santaClaus').attr('id', 'santasList'))  
    }) 
    $('#santaPhoto').on('mouseout', function() {
            $('#santasList').attr('src', './santaclaus.png').push($('#santasList').attr('id', 'santaClaus'))
    })
    
    $("#check-code").click(function(){
        console.log("clicked");
        var codeinput = $("#code-input").val()
        if (codeinput === '1225') {
            console.log("matched")
            $("#game3image").css('visibility','visible')
            $('#nextbtn3').css('visibility','visible')
        };
        $('#nextbtn3').click(function(){
            location.replace('./winner.html');
        })
    })

    //winner
    $('#finalGift').on('click', function() {
        $('#giftPic').attr('src', './giftVoucher.png')  
    }) 
})