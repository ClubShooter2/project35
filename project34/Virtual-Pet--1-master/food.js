class Food{
constructor() {
    this.food = 0;
  
    this.lastFed = 0;
}

getfood() {
  var foodRef = database.ref("food");
  foodRef.on("value",(data)=>{
      milk = data.val();
  })
}
   update(milk) {
    database.ref('/').update({food:milk});
   }
  deductFood() {
   milk = milk-1;
    food.update(milk);
   dog.changeImage("dog2", happydogImg);
   milk = createSprite(100,200,50,50);
   milk.addImage("milk1", milkImg);
   milkImg.scale = 0.4;

   }
    // display() {
    //   imageMode(CENTER);
     //  image(this.image,250,250,50,50);
   //  }
//lastFed() {
//  feedtimeRef = database.ref("feedtime");
//  feedtime.on("value", (data=>{
  //  feedtime.data.val();
 // }))
 // }
}










