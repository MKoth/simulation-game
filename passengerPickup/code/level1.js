var level1 = function(world, findPathCallback) {
	//continue calculating path if flag calculating is set to true
    var player = world.player;
	var closestPassenger = false;
	if(player.path.length == 0&&!world.player.passenger){
		closestPassenger = world.collectives[0];
		if(closestPassenger){
			//finding path to the closest passenger
			findPathCallback(closestPassenger, 'passengerLocation');
		}
	}
	else if(player.path.length == 0&&world.player.passenger){
		//finding path to passenger takeof destination if passenger is picked up
		findPathCallback(world.player.passenger, 'takeofLocation');
	}
	else if(player.path.length>0){
		//going to the next cell of current path (once bot reaches this point it will be deleted automaticly)
		
		var point = player.path[player.path.length-1];
		if (point.x*30 - player.x > 0) {
			var direction = { left: false, right: true, up: false, down: false };
		} else if (point.x*30 - player.x < 0) {
			var direction = { left: true, right: false, up: false, down: false };
		} else if (point.y*30 - player.y > 0) {
			var direction = { left: false, right: false, up: false, down: true };
		} else if (point.y*30 - player.y < 0) {
			var direction = { left: false, right: false, up: true, down: false };
		}
		return direction;
	}
}
//module.exports = level1;
