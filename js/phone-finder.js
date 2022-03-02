document.getElementById('noResult').style.display = 'none';
//Search Phone
const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
   
    // Clear Data
    searchField.value = '';

    // Load Data
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.data) )  
}

//Display Result
const displaySearchResult = items => {

    //Display first 20 items
    const phones = items.slice(0,20);

    //Clear Data
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const phoneDetail = document.getElementById('phone-details');
    phoneDetail.textContent = '';


    // Message if No Result Found
    if(phones.length == 0){
        const noResult = document.getElementById('noResult');
        noResult.style.display = 'block'
    }
    
    //Display Search Result
    for(const phone of phones){
        noResult.style.display = 'none'
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =  `
         <div class="card">
            <img src="${phone.image}" class="card-img-top p-3" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <h4>${phone.brand}</h4>
            <button onclick="showDetail('${phone.slug}')" class="buttonColor p-2 ">Show Details</button>

         <p class="card-text d-none">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        searchResult.appendChild(div);        
    }

}

// get details when click to show more button
const showDetail = phoneId =>{
    
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(response => response.json())
    .then(data=>displayPhoneDetail(data.data))
    
}

//Display details
const displayPhoneDetail = phone =>{

    const phoneDetail = document.getElementById('phone-details');
    phoneDetail.textContent = '';

    const div = document.createElement('div')
    div.classList.add('card');

    div.innerHTML= `
    <div class="p-3 ">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4>${phone.name}</h4>
      <p class="card-text">Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found' }</p>
    </div>
  </div>

  <div class="p-3">
    <h4 >Main Features</h4>
    <p><ul>
    <li>Storage: ${phone.mainFeatures.storage}</li>
    <li>Display Size: ${phone.mainFeatures.displaySet}</li>
    <li>Chip Set: ${phone.mainFeatures.chipSet}</li>
    <li>Memory: ${phone.mainFeatures.memory} </li>
    </ul></p>
  </div>

  <div class="p-3">
  <h4>Sensors:</h4>
  <p>${phone.mainFeatures.sensors}</p>
  </div>
    
  <div class="p-3">
  <h4>Others</h4>
  <p><ul>
  <li>WLAN: ${phone.others.WLAN}</li>
  <li>Bluetooth: ${phone.others.Bluetooth}</li>
  <li>GPS: ${phone.others.GPS}</li>
  <li>NFC: ${phone.others.NFC} </li>
  <li>Radio: ${phone.others.Radio} </li>
  <li>USB: ${phone.others.USB} </li>
  </ul></p>
  </div>
    `
    phoneDetail.appendChild(div);
}

