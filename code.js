var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c8b1f4a9-cbee-40c7-8c3f-34561bf52fa4","a012eb5a-75a4-410d-a24d-cdd3190a43f2","99063aaa-cc52-4c3d-b76b-593ca6a97039","a5779bc6-c16d-45d1-833a-acb11b1e0973","38a7c369-fa19-48e6-b18d-f69c286d73b2","62b8134e-eaa3-449b-a3f0-4eec6fc30e42","e03bc996-9115-40a0-a6c2-e7b2d8eae8f1","46355c0c-c9e1-4e59-9eb6-9b6989746b0c","ac2531ed-a27e-471a-9a21-aefd7ad8a956","7647e6f0-3d3a-4463-9136-e2762fe5c3e4","59a79f0f-99ac-4a27-93e8-77da96eb7d8b","562532cd-993e-43a9-9d95-50d0008e8a17","e340f5ff-a6f2-4f28-8d35-888137ee5341"],"propsByKey":{"c8b1f4a9-cbee-40c7-8c3f-34561bf52fa4":{"name":"hero1","sourceUrl":null,"frameSize":{"x":30,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"W3U6rRYww4BIr50EJ9Cif9X8hwDwUThl","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":35},"rootRelativePath":"assets/c8b1f4a9-cbee-40c7-8c3f-34561bf52fa4.png"},"a012eb5a-75a4-410d-a24d-cdd3190a43f2":{"name":"3","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"Igxpqd42ZGapad0yaeZkgU9RdR2_4hNQ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/a012eb5a-75a4-410d-a24d-cdd3190a43f2.png"},"99063aaa-cc52-4c3d-b76b-593ca6a97039":{"name":"2","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"z0.841RFnBlMm5DkzW62xh37UyA3jkZ_","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/99063aaa-cc52-4c3d-b76b-593ca6a97039.png"},"a5779bc6-c16d-45d1-833a-acb11b1e0973":{"name":"1","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":".NXfj.AuCKFftcJnSEIj0tWxbou1w6Un","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/a5779bc6-c16d-45d1-833a-acb11b1e0973.png"},"38a7c369-fa19-48e6-b18d-f69c286d73b2":{"name":"b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"o5yw7viH7foQoHWApFA9xB7.rggGkKLw","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/38a7c369-fa19-48e6-b18d-f69c286d73b2.png"},"62b8134e-eaa3-449b-a3f0-4eec6fc30e42":{"name":"p","sourceUrl":null,"frameSize":{"x":200,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"El0RmTdhR9picE2jlYwaT1dKJ623Eq_F","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":10},"rootRelativePath":"assets/62b8134e-eaa3-449b-a3f0-4eec6fc30e42.png"},"e03bc996-9115-40a0-a6c2-e7b2d8eae8f1":{"name":"win","sourceUrl":null,"frameSize":{"x":350,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"uYlUviTjnB339ztKYWRMCvZMmWoBfraW","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":350},"rootRelativePath":"assets/e03bc996-9115-40a0-a6c2-e7b2d8eae8f1.png"},"46355c0c-c9e1-4e59-9eb6-9b6989746b0c":{"name":"lose","sourceUrl":null,"frameSize":{"x":432,"y":447},"frameCount":1,"looping":true,"frameDelay":12,"version":"N9bcGI2Q.TJ369Y33R9uk3zhyL0RZcQH","loadedFromSource":true,"saved":true,"sourceSize":{"x":432,"y":447},"rootRelativePath":"assets/46355c0c-c9e1-4e59-9eb6-9b6989746b0c.png"},"ac2531ed-a27e-471a-9a21-aefd7ad8a956":{"name":"b1","sourceUrl":null,"frameSize":{"x":20,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"fpeDM2.7LrCbwohpJHlHrmAXnZBFZLEw","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":30},"rootRelativePath":"assets/ac2531ed-a27e-471a-9a21-aefd7ad8a956.png"},"7647e6f0-3d3a-4463-9136-e2762fe5c3e4":{"name":"space","sourceUrl":null,"frameSize":{"x":200,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"GcXQBf.H8qZ644RFAfTm1hq1oAjepIQh","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":80},"rootRelativePath":"assets/7647e6f0-3d3a-4463-9136-e2762fe5c3e4.png"},"59a79f0f-99ac-4a27-93e8-77da96eb7d8b":{"name":"h","sourceUrl":null,"frameSize":{"x":20,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bqp4WBNsUzTPmahP4Yqgxk2W0KmYEQbU","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":30},"rootRelativePath":"assets/59a79f0f-99ac-4a27-93e8-77da96eb7d8b.png"},"562532cd-993e-43a9-9d95-50d0008e8a17":{"name":"e1","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"R.1jTNFUUCtyjiiFnrxfkNfg11MQQpQS","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/562532cd-993e-43a9-9d95-50d0008e8a17.png"},"e340f5ff-a6f2-4f28-8d35-888137ee5341":{"name":"121","sourceUrl":"assets/v3/animations/2bB2FLnoeGWZm5EIkoT1ZIu1GhTugrfq7mUO4IjpVEY/e340f5ff-a6f2-4f28-8d35-888137ee5341.png","frameSize":{"x":350,"y":349},"frameCount":1,"looping":true,"frameDelay":4,"version":"tKkSJmMAGAjrd9kMBjAnqI3fAvWCYPYG","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":349},"rootRelativePath":"assets/v3/animations/2bB2FLnoeGWZm5EIkoT1ZIu1GhTugrfq7mUO4IjpVEY/e340f5ff-a6f2-4f28-8d35-888137ee5341.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b");
var hero = createSprite(200,345,30,35);
hero.shapeColor="red";

var enemy1 = createSprite(200,270,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";
var enemy4=createSprite(200,195,10,10);
enemy4.shapeColor="white";
var spaceship=createSprite(200,500,100,60);
spaceship.shapeColor="white";
var net = createSprite(200,5,200,20);
net.shapeColor="red";
var heart=createSprite(35,33,20,30);
heart.shapeColor="white";
var heart1=createSprite(65,33,20,30);
heart1.shapeColor="white";
var heart2=createSprite(95,33,20,30);
var goal =0;
var death = 0;
var bord = createSprite(200,800,200,200);
bord.shapeColor="black";
var bord1 = createSprite(200,200,300,300);
bord1.shapeColor="black";
var b1=createSprite(200,400,10,20);
b1.shapeColor="black";
var b2=createSprite(200,400,10,20);
b2.shapeColor="black";
var b3=createSprite(200,400,10,20);
b3.shapeColor="black";
var b4=createSprite(200,400,10,20);
b4.shapeColor="black";
var b5=createSprite(200,400,10,20);
b5.shapeColor="black";



hero.setAnimation("hero1");
hero.scale=2;
enemy1.setAnimation("1");
enemy1.scale=1;
enemy2.setAnimation("2");
enemy2.scale=1;
enemy3.setAnimation("3");
enemy3.scale=1;
net.setAnimation("p");
bord1.setAnimation("121");
b1.setAnimation("b1");
b2.setAnimation("b1");
b3.setAnimation("b1");
b4.setAnimation("b1");
b5.setAnimation("b1");
spaceship.setAnimation("space");
heart.setAnimation("h");
heart1.setAnimation("h");
enemy4.setAnimation("e1");
heart2.setAnimation("h");



function draw() {
  
//background(b);
background("white");

createEdgeSprites();



b1.bounce(edges);
b2.bounce(edges);
b3.bounce(edges);
b4.bounce(edges);
b5.bounce(edges);
enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);
enemy4.bounceOff(edges);
hero.bounceOff(edges);
if (keyDown(ENTER)) {
enemy1.setVelocity(-50,0);
enemy2.setVelocity(50,0);
enemy3.setVelocity(-50,0);
enemy4.setVelocity(50,0);
bord1.y=bord1.y=800; 
}
if (keyDown("K")) {
 spaceship.y=spaceship.y=395; 
 enemy1.setVelocity(0);
 heart2.destroy();
}



if(keyDown(UP_ARROW)){
  hero.y=hero.y-3;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3;
}


if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_cartoon_positive_achievement_1.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
  bord.y=bord.y=200;
  bord.setAnimation("win"); 
}
if (hero.isTouching(enemy1) || hero.isTouching(enemy2)||hero.isTouching(enemy3) || hero.isTouching(enemy4)) {
 playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1 ;
}
if (hero.isTouching(enemy1||enemy2||enemy3)|| hero.isTouching(enemy4)) {
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1 ;
}
if (keyDown("A")) {
 spaceship.y=spaceship.y=395; 
 enemy4.setVelocity(0);
 heart.destroy();
}
if (keyDown("L")) {
 spaceship.y=spaceship.y=395;
 enemy2.setVelocity(0);
 heart1.destroy();
}


if (death==10) {
 bord.y=bord.y=200; 
 bord.setAnimation("lose");
 playSound("assets/category_explosion/melodic_loss_6.mp3", false);
 
}

textSize(15);
  fill("blue");
  text("Goals:"+goal,330,380);
  

textSize(15);
  fill("blue");
  text("death:"+death,20,380);

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
