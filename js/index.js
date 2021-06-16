let startBtn = document.querySelector(".startBtn");
let prizeCell = document.querySelectorAll(".drawBox div:not(.startBtn)")
let pic = document.querySelector('ul')
let li = document.querySelectorAll('li img')
let prizeName = document.querySelector('.prizeName')
let index = 0;
let targetIndex = 79;
let timer;
let second = 200;
let isRun = true;


/**
 * 开始抽奖 
 */
startBtn.addEventListener("click", function () {
	if (isRun) {
		isRun = false;
		run();
	}
})

function run() {
	setTimeout(function () {
		if (index) {
			prizeCell[(index - 1) % 8].classList.remove("active");
		}

		prizeCell[index % 8].classList.add("active");
		pic.style.transform = `translateY(-${(index % 8) * 2}00px)`
		prizeName.innerHTML = li[index % 8].id

		if (index < targetIndex) {
			run();

		} else {
			isRun = true;
		}

		index++;

		if (second > 30 && index < 20) {
			// 加速
			second -= 20;
		} else if (index > 60) {
			// 减速
			second += 20;
		}
		if (index == 79) return
	}, second)
}
