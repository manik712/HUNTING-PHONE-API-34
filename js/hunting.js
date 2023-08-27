const loadPhone = async (searchTExt) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTExt}`);
  const data = await res.json();
  const phones =data.data
  // console.log(phones);
  displayPlay(phones);
}



const displayPlay = phones =>{
// console.log(phones);

// 1...
const phoneContainer =document.getElementById('phone-container');
// clear phone container cards before adding new cards
phoneContainer.textContent = '';

phones.forEach(phone=>{
  console.log(phone);
  // 2 create a div 
  const phoneCard = document.createElement('div');
  phoneCard.classList = `card  p-4 bg-gray-100 shadow-xl`;
  // 3.set inner html...
  phoneCard.innerHTML = `
  
  <figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
  
  
  
  `;

  phoneContainer.appendChild(phoneCard);
})

}


const handelSearch = () =>{

  const searchFiled = document.getElementById('search-field');
  const searchTExt = searchFiled.value;
  // console.log(searchTExt);
  searchFiled.value = '';
  loadPhone(searchTExt);

}


// loadPhone();