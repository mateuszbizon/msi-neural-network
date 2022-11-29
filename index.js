const net = new brain.NeuralNetwork();

//dane w tablicy = [speed, shoot, condition, physic]

const data = [
	{ input: [0, 0, 0, 0], output: { bad: 1 } },
	{ input: [10 / 100, 10 / 100, 10 / 100, 10 / 100], output: { bad: 1 } },
	{ input: [20 / 100, 20 / 100, 20 / 100, 20 / 100], output: { bad: 1 } },
	{ input: [30 / 100, 30 / 100, 30 / 100, 30 / 100], output: { bad: 1 } },
	{ input: [40 / 100, 40 / 100, 40 / 100, 40 / 100], output: { bad: 1 } },
	{ input: [50 / 100, 50 / 100, 50 / 100, 50 / 100], output: { bad: 1 } },
	{ input: [60 / 100, 60 / 100, 60 / 100, 60 / 100], output: { good: 1 } },
	{ input: [70 / 100, 70 / 100, 70 / 100, 70 / 100], output: { good: 1 } },
	{ input: [80 / 100, 80 / 100, 80 / 100, 80 / 100], output: { good: 1 } },
	{ input: [90 / 100, 90 / 100, 90 / 100, 90 / 100], output: { good: 1 } },
	{ input: [100 / 100, 100 / 100, 100 / 100, 100 / 100], output: { good: 1 } },
];

net.train(data);

const speed = document.getElementById("speed");
const shoot = document.getElementById("shoot");
const condition = document.getElementById("condition");
const physic = document.getElementById("physic");
const showBtn = document.querySelector(".show");
const answer = document.querySelector(".answer");

function handleInputsError() {
	if (speed.value === "" || speed.value < 0 || speed.value > 100) return false;
	if (shoot.value === "" || shoot.value < 0 || shoot.value > 100) return false;
	if (condition.value === "" || condition.value < 0 || condition.value > 100)
		return false;
	if (physic.value === "" || physic.value < 0 || physic.value > 100)
		return false;

	return true;
}

showBtn.addEventListener("click", () => {
	if (!handleInputsError()) {
		answer.textContent = "Niepoprawne wartosci";
		return false;
	}

	//newStatistics = [speed.value/100, shoot.value/100, condition.value/100, physic.value/100];
	let guess = net.run([
		speed.value / 100,
		shoot.value / 100,
		condition.value / 100,
		physic.value / 100,
	]);
	console.log(guess);

	if (guess["good"] < 0.5) {
		answer.textContent = "Piłkarz jest słaby";
		// data.push({ input: newStatistics, output: [0] });
	} else {
		answer.textContent = "Piłkarz jest dobry";
		// data.push({ input: newStatistics, output: [1] });
	}
});
