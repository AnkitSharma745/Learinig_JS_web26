function lightroom(image){
  return "edited" + image
  
  
}

// console.log(lightroom("bike"));

let store= lightroom("bike");




function Instagram(image){
  console.log("post", image)
}

Instagram(store)


function whatsapp(image){
  console.log("send to my parents", image);
}

whatsapp(store);