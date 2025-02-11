let score = 0;
let timeLeft = 10;
let timer;

document.getElementById("clickButton").addEventListener("click", () => {
    if (timeLeft > 0) {
        score++;
        document.getElementById("score").textContent = score;
    }
});

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
    } else {
        clearInterval(timer);
        document.getElementById("clickButton").disabled = true;
        alert(`ゲーム終了！スコア: ${score}`);
    }
}

// 1秒ごとにカウントダウンを実行
timer = setInterval(countdown, 1000);
