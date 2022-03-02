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
    // console.log(phones)
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
            <button onclick="showDetail('${phone.slug}')" class="buttonColor p-2 ">Explore More Details</button>

         <p class="card-text d-none">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        searchResult.appendChild(div);
    }

}

const showDetail = phoneId =>{
    console.log(phoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(response => response.json())
    .then(data=>displayPhoneDetail(data.data))
    
}

const displayPhoneDetail = phone =>{
    console.log(phone.mainFeatures.sensors)
    // const items = phone.mainFeatures.sensors;
  
    const phoneDetail = document.getElementById('phone-details');
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML= `
    <div class="p-2 ">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4>${phone.name}</h4>
      <p class="card-text">Release Date: ${phone.releaseDate}</p>
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

