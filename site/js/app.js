!function i(t,s,o){function n(c,p){if(!s[c]){if(!t[c]){var h="function"==typeof require&&require;if(!p&&h)return h(c,!0);if(e)return e(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var l=s[c]={exports:{}};t[c][0].call(l.exports,function(i){var s=t[c][1][i];return n(s?s:i)},l,l.exports,i,t,s,o)}return s[c].exports}for(var e="function"==typeof require&&require,c=0;c<o.length;c++)n(o[c]);return n}({1:[function(i,t,s){var o=function(i,t){this.entity=i,this.radius=t,this.type="circle"};o.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},o.prototype.collideCircle=function(i){var t=this.entity.components.physics.position,s=i.components.physics.position,o={x:t.x-s.x,y:t.y-s.y},n=this.radius,e=i.components.collision.radius,c=n+e,p=o.x*o.x+o.y*o.y;return c*c>p},o.prototype.collideRect=function(i){var t=this.entity.components.physics.position,s=i.components.physics.position,o=i.components.collision.size,n=this.radius,e={x:s.x+o.x/2,y:s.y+o.y/2},c=function(i,t,s){return t>i?t:i>s?s:i},p={x:c(t.x,e.x-o.x/2,e.x+o.x/2),y:c(t.y,e.y-o.y/2,e.y+o.y/2)},h={x:t.x-p.x,y:t.y-p.y},r=h.x*h.x+h.y*h.y;return n*n>r},s.CircleCollisionComponent=o},{}],2:[function(i,t,s){var o=function(i,t){this.entity=i,this.size=t,this.type="rect"};o.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},o.prototype.collideCircle=function(i){return i.components.collision.collideRect(this.entity)},o.prototype.collideRect=function(i){var t=this.entity.components.physics.position,s=i.components.physics.position,o=this.size,n=i.components.collision.size,e={x:t.x+n.x/2,y:t.y+o.y/2},c={x:s.x+n.x/2,y:s.y+n.y/2},p=e.x-o.x/2,h=e.x+o.x/2,r=e.y+o.y/2,l=e.y-o.y/2,y=c.x-n.x/2,a=c.x+n.x/2,m=c.y+n.y/2,u=c.y-n.y/2;return!(p>a||y>h||l>m||u>r)},s.RectCollisionComponent=o},{}],3:[function(i,t,s){var o=function(i){this.entity=i};o.prototype.draw=function(i){var t=this.entity.components.physics.position,s=this.entity.radius,o=this.entity.color;i.save(),i.beginPath(),i.fillStyle=o,i.arc(t.x,t.y,s,0,2*Math.PI),i.fill(),i.restore()},s.BirdGraphicsComponent=o},{}],4:[function(i,t,s){var o=function(i){this.entity=i};o.prototype.draw=function(i){var t=this.entity.components.physics.position,s=this.entity.size,o=this.entity.color;i.save(),i.fillStyle=o,i.fillRect(t.x,t.y,s.x,s.y),i.restore()},s.RectGraphicsComponent=o},{}],5:[function(i,t,s){var o=function(i){this.entity=i,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};o.prototype.update=function(i){this.velocity.x+=this.acceleration.x*i,this.velocity.y+=this.acceleration.y*i,this.position.x+=this.velocity.x*i,this.position.y+=this.velocity.y*i},s.PhysicsComponent=o},{}],6:[function(i,t,s){var o=i("../components/physics/physics"),n=i("../components/graphics/bird"),e=i("../components/collision/circle"),c=function(){this.name="bird",this.color="yellow",this.radius=.02;var i=new o.PhysicsComponent(this);i.position.x=0,i.position.y=.5,i.acceleration.y=-1.5;var t=new n.BirdGraphicsComponent(this),s=new e.CircleCollisionComponent(this,this.radius);s.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:s}};c.prototype.onCollision=function(i){console.log("Bird collided with entity:",i),this.components.physics.position.y=.5,this.components.physics.position.x=0,this.components.physics.velocity.y=0},s.Bird=c},{"../components/collision/circle":1,"../components/graphics/bird":3,"../components/physics/physics":5}],7:[function(i,t,s){var o=i("../components/graphics/rect"),n=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.name="Ceiling",this.color="brown",this.size={x:1,y:.02};var i=new n.PhysicsComponent(this);i.position.x=0,i.position.y=1;var t=new o.RectGraphicsComponent(this),s=new e.RectCollisionComponent(this,this.size);this.components={physics:i,graphics:t,collision:s}};c.prototype.onCollision=function(i){},s.Ceiling=c},{"../components/collision/rect":2,"../components/graphics/rect":4,"../components/physics/physics":5}],8:[function(i,t,s){var o=i("../components/graphics/rect"),n=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.name="floor",this.color="rgb(99,71,48)",this.size={x:document.getElementById("main-canvas").width,y:.02};var i=new n.PhysicsComponent(this);i.position.x=-document.getElementById("main-canvas").width/2,i.position.y=0;var t=new o.RectGraphicsComponent(this),s=new e.RectCollisionComponent(this,this.size);this.components={physics:i,graphics:t,collision:s}};c.prototype.onCollision=function(i){console.log("Floor collided with entity:",i)},s.Floor=c},{"../components/collision/rect":2,"../components/graphics/rect":4,"../components/physics/physics":5}],9:[function(i,t,s){var o=i("../components/graphics/rect"),n=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.name="Pipe Bottom",this.color="green",this.size={x:.2,y:.4};var i=new n.PhysicsComponent(this);i.position.x=1.5,i.position.y=0,i.velocity.x=-.5;var t=new o.RectGraphicsComponent(this),s=new e.RectCollisionComponent(this,this.size);this.components={physics:i,graphics:t,collision:s}};c.prototype.onCollision=function(i){console.log("PipeBottom collided with entity:",i)},s.PipeBottom=c},{"../components/collision/rect":2,"../components/graphics/rect":4,"../components/physics/physics":5}],10:[function(i,t,s){var o=i("../components/graphics/rect"),n=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.name="PipeDestroyer",this.color="rgb(99,71,48)",this.size={x:.001,y:1};var i=new n.PhysicsComponent(this);i.position.x=-document.getElementById("main-canvas").width/200,i.position.y=.1;var t=new o.RectGraphicsComponent(this),s=new e.RectCollisionComponent(this,this.size);s.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:s}};c.prototype.onCollision=function(i){},s.PipeDestroyer=c},{"../components/collision/rect":2,"../components/graphics/rect":4,"../components/physics/physics":5}],11:[function(i,t,s){var o=i("../components/graphics/rect"),n=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.name="Pipe Top",this.color="green",this.size={x:.2,y:.4};var i=new n.PhysicsComponent(this);i.position.x=1.5,i.position.y=.6,i.velocity.x=-.5;var t=new o.RectGraphicsComponent(this),s=new e.RectCollisionComponent(this,this.size);this.components={physics:i,graphics:t,collision:s}};c.prototype.onCollision=function(i){console.log("PipeTop collided with entity:",i)},s.PipeTop=c},{"../components/collision/rect":2,"../components/graphics/rect":4,"../components/physics/physics":5}],12:[function(i,t,s){var o=i("../components/graphics/rect"),n=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.name="Score!",this.color="rgba(0,0,0,0)",this.size={x:.001,y:.8};var i=new n.PhysicsComponent(this);i.position.x=-.4,i.position.y=0;var t=new o.RectGraphicsComponent(this),s=new e.RectCollisionComponent(this,this.size);s.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:s}};c.prototype.onCollision=function(i){},s.Scorer=c},{"../components/collision/rect":2,"../components/graphics/rect":4,"../components/physics/physics":5}],13:[function(i,t,s){var o=i("./systems/graphics"),n=i("./systems/physics"),e=i("./systems/input"),c=i("./systems/spawn"),p=i("./systems/collision"),h=i("./systems/score"),r=i("./entities/bird"),l=(i("./entities/pipeTop"),i("./entities/pipeBottom"),i("./entities/floor")),y=i("./entities/ceiling"),a=i("./entities/pipeDestroyer"),m=i("./entities/scorer"),u=function(){this.entities=[new l.Floor,new y.Ceiling,new r.Bird,new a.PipeDestroyer,new m.Scorer],this.graphics=new o.GraphicsSystem(this.entities),this.physics=new n.PhysicsSystem(this.entities),this.clicks=new e.InputSystem(this.entities),this.pipes=new c.SpawnPipeSystem(this.entities),this.collision=new p.CollisionSystem(this.entities),this.score=new h.ScoreSystem};u.prototype.run=function(){this.graphics.run(),this.physics.run(),this.clicks.run(),this.pipes.run()},s.FlappyBird=u},{"./entities/bird":6,"./entities/ceiling":7,"./entities/floor":8,"./entities/pipeBottom":9,"./entities/pipeDestroyer":10,"./entities/pipeTop":11,"./entities/scorer":12,"./systems/collision":15,"./systems/graphics":16,"./systems/input":17,"./systems/physics":18,"./systems/score":19,"./systems/spawn":20}],14:[function(i,t,s){var o=i("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var i=new o.FlappyBird;i.run()})},{"./flappy_bird":13}],15:[function(i,t,s){var o=i("./score"),n=i("../entities/bird"),e=i("../entities/pipeTop"),c=i("../entities/pipeDestroyer"),p=i("../entities/scorer"),h=function(i){this.entities=i,this.scoreSystem=new o.ScoreSystem};h.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},h.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];if("collision"in t.components)for(var s=i+1;s<this.entities.length;s++){var o=this.entities[s];"collision"in o.components&&t.components.collision.collidesWith(o)&&(t.components.collision.onCollision&&(t.components.collision.onCollision(o),t instanceof n.Bird&&(this.entities.splice(5,this.entities.length-5),this.scoreSystem.reset()),t instanceof c.PipeDestroyer&&this.entities.splice(5,2),t instanceof p.Scorer&&o instanceof e.PipeTop&&this.scoreSystem.addOne()),o.components.collision.onCollision&&o.components.collision.onCollision(t))}}},s.CollisionSystem=h},{"../entities/bird":6,"../entities/pipeDestroyer":10,"../entities/pipeTop":11,"../entities/scorer":12,"./score":19}],16:[function(i,t,s){var o=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};o.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},o.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var i=0;i<this.entities.length;i++){var t=this.entities[i];"graphics"in t.components&&t.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},o.prototype.drawGrid=function(i,t){this.gap=i||.1,this.times=t||10,this.context.lineWidth=.001,this.context.beginPath();for(var s=0;s<this.gap*this.times;s+=this.gap)this.context.moveTo(-this.gap*this.times,s),this.context.lineTo(this.gap*this.times,s),this.context.moveTo(-this.gap*this.times,-s),this.context.lineTo(this.gap*this.times,-s),this.context.moveTo(s,-this.gap*this.times),this.context.lineTo(s,this.gap*this.times),this.context.moveTo(-s,-this.gap*this.times),this.context.lineTo(-s,this.gap*this.times);this.context.strokeStyle="#AAA",this.context.stroke()},s.GraphicsSystem=o},{}],17:[function(i,t,s){var o=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas")};o.prototype.run=function(){this.canvas.addEventListener("click",this.onClick.bind(this)),this.canvas.addEventListener("touchstart",this.onClick.bind(this),!1)},o.prototype.onClick=function(){var i=this.entities[2];i.components.physics.velocity.y=.6},s.InputSystem=o},{}],18:[function(i,t,s){var o=i("./collision"),n=function(i){this.entities=i,this.collisionSystem=new o.CollisionSystem(i)};n.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},n.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];"physics"in t.components&&t.components.physics.update(1/60)}this.collisionSystem.tick()},s.PhysicsSystem=n},{"./collision":15}],19:[function(i,t,s){var o=(i("../entities/pipeTop"),function(){this.scoreSpan=document.getElementById("score"),this.highSpan=document.getElementById("high-score"),this.userScore=0,this.highScore=0});o.prototype.addOne=function(){this.userScore+=1,this.scoreSpan.innerHTML=this.userScore},o.prototype.reset=function(){this.userScore>this.highScore&&(this.highScore=this.userScore,this.highSpan.innerHTML=this.highScore),this.userScore=0,this.scoreSpan.innerHTML=this.userScore},s.ScoreSystem=o},{"../entities/pipeTop":11}],20:[function(i,t,s){var o=i("../entities/pipeTop"),n=i("../entities/pipeBottom"),e=function(i){this.entities=i};e.prototype.run=function(){window.setInterval(this.tick.bind(this),2e3)},e.prototype.tick=function(){var i=this.entities;i.push(new o.PipeTop),i.push(new n.PipeBottom)},s.SpawnPipeSystem=e},{"../entities/pipeBottom":9,"../entities/pipeTop":11}]},{},[14]);