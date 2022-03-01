const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
   
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.data) )  
}

const displaySearchResult = phones => {
    console.log(phones)
    const searchResult = document.getElementById('search-result');
    for(const phone of phones){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =  `
         <div class="card">
            <img src="${phone.image}" class="card-img-top p-3" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <h4>${phone.brand}</h4>

         <p class="card-text d-none">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        searchResult.appendChild(div);
    }

}


function displayData(items){
    // console.log(items);
    for (const item of items) {
        // console.log(item);
        // console.log(item.brand);
        // console.log(item.phone_name);
        // console.log(item.slug);
        // console.log(item.image);

        
    }

}

