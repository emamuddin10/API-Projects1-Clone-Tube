// 1. fetct , load & show categories on html

// create loadCategories
//   fetch the data
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const loadCategoriesId = (id)=>{
  
  // fetch the id data 
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) =>displayVideos(data.category))
    .catch((error) => console.log(error));

}
// Display displayCategories
const displayCategories = (categories) => {
  const sectionContainer = document.getElementById("button-container");

  categories.forEach((item) => {
    // console.log(item.category);
    // Crate a Button
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick="loadCategoriesId(${item.category_id})" class="btn">${item.category} </button>
    `
    sectionContainer.appendChild(div);
  });
};

// LOAD VIDEOS
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

const demoVideo ={
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}
// DISPLAY VIDEOS
const displayVideos = (videos) => {
    
  const videoContainer= document.getElementById('videos-container')
  videoContainer.innerHTML =""
  if(videos.length==0){
    videoContainer.classList.remove('grid')
    videoContainer.innerHTML=`
    <div class="flex flex-col justify-center items-center">
      <img class="h-96 w-96" src="assets/Icon.png"/>
      <h2> No Video Conten Here </h2>
    </div>
    `
    return
  }
  else{
    videoContainer.classList.add('grid')
  }
  videos.forEach((video) => {
    console.log(video)
    const card = document.createElement("div");
    card.innerHTML = `
    <figure class="h-[200px] relative">
       <img class="h-full w-full rounded-lg object-cover"
         src=${video.thumbnail}
        alt="Shoes" />
       ${video.others.posted_date.length == 0 ? " " : `        <span class="absolute right-2 bottom-2 bg-slate-400 px-4 py-2 rounded-lg ">${timeCount(video.others.posted_date)}</span>`}
     </figure>
     <div class=" py-5 flex gap-5">
       <div> <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/> </div>
       <div>
         <h2 class="text-base font-bold">${video.title} </h2>
         <div class="flex  gap-5">
           <p>${video.authors[0].profile_name} </p>
           ${video.authors[0].verified == true ? '<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>' : " "}
         </div>
         <p>${video.others.views} </p>
       </div>
         
     </div>
    `;
    videoContainer.appendChild(card)
  });
};

// TIME COUNTER
function timeCount(time){
  const hour = parseInt(time/3600)
  let remainingSecond = time% 3600  
  const minit = parseInt(remainingSecond/60)
  remainingSecond =remainingSecond % 60
  return `${hour} hour ${minit} minit ${remainingSecond} second ago`
}

loadVideos();
loadCategories();
