class Sprite {
 
  constructor(config){
  
    
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.IsLoaded = true;
    }
    
    this.animations = config.animations || {
      idleDown: [
        [0,0]
      ]
    }
    
    
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;
   
   
   this.gameObject = config.gameObject;
   
  }
 
 draw(ctx){
  const x = this.gameObject.x * 16 - 8;
  const y = this.gameObject.y * 16 - 18;
  
  this.IsLoaded  && ctx.drawImage(
   0,0,
   32,32,
   x,y,
   32,32
  )
 }
  
  
}
