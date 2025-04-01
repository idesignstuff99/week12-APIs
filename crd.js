const onFetchLegoClick = async () => {
    const data = await fetchLegoColors()
    renderLegoColors(data)
}

async function fetchLegoColors() {
    const response = await fetch("https://rebrickable.com/api/v3/lego/minifigs/?page_size=10&key=" + API_KEY)

    const data = await response.json()
    console.log(data);
    return data.results
}

// Renders the lego colors in spans with the color as the background color
const legoContainer = document.getElementById("lego-container")
function renderLegoColors(data) {
    legoContainer.innerHTML = data.map(minifigs => `
            <div>
            <img class="img-thumbnail" style="max-width: 200px" src="${minifigs.set_img_url}"/>
            <h3>${minifigs.name}</h3>
            <p>Number of parts: ${minifigs.num_parts}</p>
        </div>
    `
    ).join("") 
}
