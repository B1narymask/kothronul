function checkAnswer(id, correct1, cor2, feedId) {
    console.log("hi")
    let ans = document.getElementById(id).value.trim().toLowerCase();
    correct1 = correct1.toLowerCase();
    cor2 = cor2.toLowerCase();
    let feedback = document.getElementById(feedId);
    if (ans == correct1 || ans == cor2) {
        feedback.innerHTML = "Correct!";
        feedback.style.color = "green";
    } else if (ans == '') {
        feedback.innerHTML = "Hey it would be really cool if you answered yk...";
        feedback.style.color = "yellow";
    } else {
        feedback.innerHTML = `Wrong! :(\nCorrect answer: '${correct1}'`;
        feedback.style.color = "red";
    }
}

function checkRad(name, correct, feedId) {
    console.log("hi")
    let answer = '';
    let rads = document.getElementsByName(name);
    for (let i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            answer = rads[i].value;
            break;
        }
    }
    let feedback = document.getElementById(feedId);
    if (answer == correct) {
        feedback.innerHTML = "Correct!";
        feedback.style.color = "green";
    } else if (answer == '') {
        feedback.innerHTML = "Hey it would be really cool if you answered yk...";
        feedback.style.color = "yellow";
    } 
    else {
        feedback.innerHTML = `Wrong :(\nCorrect answer: '${correct}'`;
        feedback.style.color = "red";
    }
}