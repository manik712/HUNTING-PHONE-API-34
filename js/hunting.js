const loadPhone = async (searchTExt ,isShowAll) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTExt}`);
  const data = await res.json();
  const phones =data.data
  // console.log(phones);
  displayPlay(phones ,isShowAll);
}



const displayPlay = (phones, isShowAll) =>{
// console.log(phones);

// 1...
const phoneContainer =document.getElementById('phone-container');
// clear phone container cards before adding new cards
phoneContainer.textContent = '';
// display show all button if there are more than 12 phone...

const showAllContainer = document.getElementById('Show-all-container');
if(phones.length > 12  &&  !isShowAll){
  showAllContainer.classList.remove('hidden')

}else{
  showAllContainer.classList.add('hidden')
}

// display only first 12 phones if not show all

if(!isShowAll){
  phones = phones.slice(0,12);
}


phones.forEach(phone=>{
  console.log(phone);
  // 2 create a div 
  const phoneCard = document.createElement('div');
  phoneCard.classList = `card  p-4 bg-gray-100 shadow-xl`;
  // 3.set inner html...
  phoneCard.innerHTML = `
  
  <figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title justify-center">${phone.phone_name}</h2>
    <p class="justify-center" >This is manik . If you buy this phone then call me below this number.Don't forget all phones are very nice.+8801303484964</p>
    <div class="card-actions justify-center">
      <button onclick="ShowDetails('${phone.slug
      }')"  class="btn btn-primary">Show Details</button>
    </div>
  </div>
  
  
  
  
  `;

  phoneContainer.appendChild(phoneCard);
});
toggleLoadingSpinner(false);

}


const handelSearch = (isShowAll) =>{
  toggleLoadingSpinner(true);
  const searchFiled = document.getElementById('search-field');
  const searchTExt = searchFiled.value;
  // console.log(searchTExt);
  // searchFiled.value = '';
  loadPhone(searchTExt ,isShowAll);

}


// const handelSearch2 = () =>{
//   toggleLoadingSpinner(true);
//   const searchFiled2 =document.getElementById('search-field2');
//   const searchText = searchFiled2.value;
//   // console.log(searchText);
//   searchFiled2.value = '';
//   loadPhone(searchText);
// }



const toggleLoadingSpinner = (isLoading)=>{
 const  loadingSpinner = document.getElementById('loading-spinner');
   if(isLoading){
    loadingSpinner.classList.remove('hidden')
   }else{
    loadingSpinner.classList.add('hidden');
   }
}


const handelShowAll =()=>{
  handelSearch(true);
  
}

const ShowDetails =async(id)=>{
// console.log('gfdgd',id);
const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data = await res.json();
// console.log(data);
const phone = data.data;

showPhoneDetails(phone);
}



const showPhoneDetails = (phone)=>{
  console.log(phone);
  const phoneName = document.getElementById('show-details-phone-name');
 phoneName.innerText = phone.name;
  
  const showDetailContainer = document.getElementById('show-detail-container');

  showDetailContainer.innerHTML = `
  <img src="${phone.image}" alt=""  />
  <h5 class="text-xs font-normal  text-blue-500 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h5>
  <p><span class="text-xl font-semibold">Storage:</span>${phone?.mainFeatures?.storage}</p>
  <h4><span>Display Size:</span>${phone?.mainFeatures?.displaySize}</h4>

  <h3><span>ChipSet:</span>${phone?.mainFeatures?.chipSet}</h3>

  <h2><span>Memory:</span>${phone?.mainFeatures?.memory}</h2>
  <h1><span>Slug:</span>${phone?.others?.slug || 'No Slug'}</h1>
  <p><span>GPS:<span>${phone?.others?.GPS || 'NO GPS'}</p>

  
  
  `

  show_details_modal.showModal();

} 

// load single data...


loadPhone();