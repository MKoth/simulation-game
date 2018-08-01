var current = 1;
var direction = false;
var control = function(world){
    document.addEventListener('keydown', (e) => {
        if(e.key=="w"&&current==world.index){
            direction = {up:true};
        }
        else if(e.key=="s"&&current==world.index){
            direction = {down:true};
        }
        else if(e.key=="a"&&current==world.index){
            direction = {left:true};
        }
        else if(e.key=="d"&&current==world.index){
            direction = {right:true};
        }
        else if(e.key=="e"&&current==0){
            current = 1;
        }
        else if(e.key=="e"&&current==1){
            current = 0;
        }
        
    });
    if(direction){
        return direction;
    }
    return world.direction;
    //return {right:true};
}
module.exports = control;
