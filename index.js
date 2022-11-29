const net = new brain.NeuralNetwork();

//dane w tablicy = [speed, shoot, condition, physic]

const data = [
	{ input: [0, 0, 0, 0], output: [0] },
	{ input: [10, 10, 10, 10], output: [0] },
	{ input: [20, 20, 20, 20], output: [0] },
	{ input: [30, 30, 30, 30], output: [0] },
	{ input: [40, 40, 40, 40], output: [0] },
	{ input: [50, 50, 50, 50], output: [0] },
	{ input: [60, 60, 60, 60], output: [1] },
	{ input: [70, 70, 70, 70], output: [1] },
	{ input: [80, 80, 80, 80], output: [1] },
	{ input: [90, 90, 90, 90], output: [1] },
	{ input: [100, 100, 100, 100], output: [1] },
];

net.train(data);

const speed = document.getElementById("speed");
const shoot = document.getElementById("shoot");
const condition = document.getElementById("condition");
const physic = document.getElementById("physic");
const showBtn = document.querySelector(".show");
const answer = document.querySelector(".answer");

let newStatistics;

function handleInputsError() {
	if (speed.value === "" || speed.value < 0 || speed.value > 100) return false;
	if (shoot.value === "") return false;
	if (condition.value === "") return false;
	if (physic.value === "") return false;

	return true;
}

showBtn.addEventListener("click", () => {
	if (!handleInputsError()) {
		answer.textContent = "Niepoprawne wartosci";
		return false;
	}

	newStatistics = [speed.value, shoot.value, condition.value, physic.value];
	const guess = net.run(newStatistics)[0];
	console.log(guess);

	if (guess < 0.5) {
		answer.textContent = "Piłkarz jest słaby";
		// data.push({ input: newStatistics, output: [0] });
	} else {
		answer.textContent = "Piłkarz jest dobry";
		// data.push({ input: newStatistics, output: [1] });
	}
});
