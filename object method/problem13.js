let object= {
  data:[
    {name: "iphone", price:80000, color:"red"},
    {name: "oneplus", price:60000, color:"blue"},
    {name: "mi", price:50000, color:"green"},
  ],
  high_price: function (){
    let max= -Infinity;
    let product= null;
    for(let i=0;i<this.data.length;i++){
      if(max<this.data[i].price){
        max= this.data[i].price;
        product= this.data[i].name
      }
    }
    console.log(product,max);
  }
  
}

object.high_price();