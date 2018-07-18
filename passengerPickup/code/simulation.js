function Simulation(config, bot1clb, bot2clb){
    this.config = config;
    this.bot1clb = bot1clb;
    this.bot2clb = bot2clb;
    if(!this.config.width||typeof this.config.width!="number"){
        this.config.width = 2000;
    }
    if(!this.config.height||typeof this.config.height!="number"){
        this.config.height = 800;
    }
    if(!this.config.minPassengers||typeof this.config.minPassengers!="number"){
        this.config.minPassengers = 10;
    }
    if(!this.config.maxPassengers||typeof this.config.maxPassengers!="number"){
        this.config.maxPassengers = 20;
    }
    if(!this.config.time||typeof this.config.time!="number"){
        this.config.time = 90;
    }
    if(!this.config.speed||typeof this.config.speed!="number"){
        this.config.speed = 0.1;
    }
    if(!this.config.playerSize||typeof this.config.playerSize!="number"){
        this.config.playerSize = 30;
    }
    if(!this.config.collectiveSize||typeof this.config.collectiveSize!="number"){
        this.config.collectiveSize = 30;
    }
    if(!this.config.player1StartingPoint||typeof this.config.player1StartingPoint!="object"){
        this.config.player1StartingPoint = {x:10, y:10};
    }
    if(!this.config.player2StartingPoint||typeof this.config.player2StartingPoint!="object"){
        this.config.player2StartingPoint = {x:200, y:10};
    }
    if(!this.config.player2StartingDirection||typeof this.config.player2StartingDirection!="string"){
        this.config.player2StartingDirection = "right";
    }
    if(!this.config.player2StartingDirection||typeof this.config.player2StartingDirection!="string"){
        this.config.player2StartingDirection = "down";
    }
}