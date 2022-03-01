fetch('https://openapi.programming-hero.com/api/phones?search=${searchText}')
.then(response => response.json())
.then(data => displayData(data.data) )

function displayData(items){
    // console.log(items);
    for (const item of items) {
        // console.log(item);
        console.log(item.brand);
        // console.log(item.phone_name);
        // console.log(item.slug);
        // console.log(item.image);

        
    }

}