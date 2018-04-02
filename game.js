var role1;
var role2;
document.addEventListener("DOMContentLoaded", function (event) {
    role1 = document.getElementById("player_1_role").textContent;
    role2 = document.getElementById("player_2_role").textContent;
});

function changePlayer(id) {
    var name1 = document.getElementById("player_1_name").textContent;
    var name2 = document.getElementById("player_2_name").textContent;
    var player_name = prompt("Введите ваше имя", "");
    while (!((id == 1 && player_name != name2) || (id == 2 && player_name != name1))) {
        player_name = prompt("Введите другое имя , это  имя уже занято ", "");
    }
    var player_role = prompt("Введите вашу букву", "");
    while (player_role.length > 1) {
        player_role = prompt("Пожалуйста введите одну букву", "");
    }
    while (!((id == 1 && player_role != role2) || (id == 2 && player_role != role1))) {
        player_role = prompt("Введите другую букву , эта уже занята ", "");
    }

    document.getElementById("player_" + id + "_name").innerHTML = player_name;
    document.getElementById("player_" + id + "_role").innerHTML = player_role;
    role1 = document.getElementById("player_1_role").textContent;
    role2 = document.getElementById("player_2_role").textContent;
}
var last_step = document.getElementById("player_2_role").textContent;
function setX(button) {
    console.log(role1);
    console.log(role2);
    if (document.getElementById(button).innerHTML == "") {
        var new_step;
        if (last_step == role2) {
            new_step = role1;
            last_step = role1;
        }
        else {
            new_step = role2;
            last_step = role2;
        }
        document.getElementById(button).innerHTML = last_step;
    }
}