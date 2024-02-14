let score_number = parseInt(document.getElementById("home-score").innerText)

function add_1_home() {
    document.getElementById("home-score").innerText++
    return score_number
}

function add_2_home(){
    score_number += 2
    document.getElementById("home-score").innerText = score_number
}

function add_3_home(){
    score_number+=3
    document.getElementById("home-score").innerText = score_number
}

let guest_score = parseInt(document.getElementById("guest-score").innerText)

function add_1_guest() {
    document.getElementById("guest-score").innerText++
    return guest_score
}

function add_2_guest(){
    guest_score += 2
    document.getElementById("guest-score").innerText = guest_score
}

function add_3_guest(){
   guest_score +=3
    document.getElementById("guest-score").innerText = guest_score
}


