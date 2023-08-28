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
// display show all button if there are more than 12 phone...

const showAllContainer = document.getElementById('Show-all-container');
if(phones.length > 12){
  showAllContainer.classList.remove('hidden')

}else{
  showAllContainer.classList.add('hidden')
}

// display only first 12
phones = phones.slice(0,12);


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
});
toggleLoadingSpinner(false);

}


const handelSearch = () =>{
  toggleLoadingSpinner(true);
  const searchFiled = document.getElementById('search-field');
  const searchTExt = searchFiled.value;
  // console.log(searchTExt);
  searchFiled.value = '';
  loadPhone(searchTExt);

}


const handelSearch2 = () =>{
  toggleLoadingSpinner(true);
  const searchFiled2 =document.getElementById('search-field2');
  const searchText = searchFiled2.value;
  // console.log(searchText);
  searchFiled2.value = '';
  loadPhone(searchText);
}



const toggleLoadingSpinner = (isLoading)=>{
 const  loadingSpinner = document.getElementById('loading-spinner');
   if(isLoading){
    loadingSpinner.classList.remove('hidden')
   }else{
    loadingSpinner.classList.add('hidden');
   }
}
// loadPhone();