const resultContainer = document.getElementById('result')
let currentSeason = 2020
let currentRoud = 1

async function getRacer() {
    try {
        const tableHead = table.querySelector("thead");
        const tableBody = table.querySelector("tbody");
        const response = await fetch(`http://ergast.com/api/f1/2020/1/driverstandings.json`);
        const data = await response.json();

        tableHead.innerHTML = "<tr></tr>";
        tableBody.innerHTML = "";

        for (const headerText of headers) {
            const headerElement = document.createElement("th");

            headerElement.textContent = headerText
            tableHead.querySelector("tr").appendChild(headerElement);

        }

        resultContainer.innerHTML = `
            <div class="driver">
                <h2>${data.driverId}</h2>
            </div>
        `
    }
    catch(error) {
        currentId = 1
        getRacer()
    }
}


const raceSearchForm = document.getElementById('season')

raceSearchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const seasonInput = raceSearchForm.querySelector('#seasonId')
    const roundInput = raceSearchForm.querySelector('#roundId')
    currentSeason = seasonInput.value
    currentRound = roundInput.value
    getRacer(currentSeason, currentRound)
    seasonInput.value = ''
    roundInput.value = ''
})

getRacer(1)