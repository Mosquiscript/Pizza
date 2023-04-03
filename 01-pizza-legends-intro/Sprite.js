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
   
  }
  
  
}
