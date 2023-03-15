function addUser(){
    player1=document.getElementById("textbox1").value
    player2=document.getElementById("textbox2").value

    localStorage.setItem("player1",player1)
    localStorage.setItem("player2",player2)

    window.location="quiz_game.html"
}