

const onFetchLegoFigsClick = async () => {
    const data = await fetchLegoFigs()
    renderLegoFigs(data)
}

async function fetchLegoFigs() {
    const response = await fetch("https://rebrickable.com/api/v3/lego/minifigs/?page_size=10&key=" + API_KEY)
    const data = await response.json()
    console.log(data);
    return data.results
    
}

const legoContainer = document.getElementById("lego-container")
function renderLegoFigs(data) {
    legoContainer.innerHTML = data.map(figurines => `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${figurines.set_img_url}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${figurines.name}</h5>
    <p>Number of parts: ${figurines.num_parts}</p>
    <form>
  <div class="form-group">
  <a href="#" class="btn btn-primary">👍</a> <a href="#" class="btn btn-primary">👎</a><br>
    <label for="exampleFormControlSelect1">How many stars</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Comments:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</div>
        `
    ).join("")
};


{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${figurines.set_img_url}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${figurines.name}</h5>
    <p>Number of parts: ${figurines.num_parts}</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<img class="img-thumbnail" style="max-width: 200px" src="${figurines.set_img_url}"/>
        <h3>${figurines.name}</h3>
        <p>Number of parts: ${figurines.num_parts}</p>
        </div> */}

