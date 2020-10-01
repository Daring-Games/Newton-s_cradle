/*______________________________________________________
------------ PROJECT C27 (Newton's Cradle) -------------
== Created by Sameer Karna (Student of WhiteHat Jr.) ==
____________CREATED ON 30th SEPTEMBER 2020______________

- - - - - - - - - Copyright (c) 2020 - - - - - - - - - -

 The permission to view and handle this game is hereby 
               granted to all viewers. 

 The above Copyright also disallows the viewers to copy
   this code. If any copied version is published then 
            the viewer will be charged.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/

//To recall Matter Elements.
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

//Variables for Matter Elements and for the Animation.
  //Variables for Matter Elements.
    var world, engine;

  //Variables for iron balls.
    var ball1, ball2, ball3, ball4, ball5;  

  //Variables for creating the points from which the balls will hang.
    var point_1, point_2, point_3, point_4, point_5;

  //Variable for creating a chain.
    var chain1, chain2, chain3, chain4, chain5;

    
//This function creates Canvas as well as Matter Elements.
  function setup() {

    //Canvas
      var canvas = createCanvas(1200,600);

    //Engine on which the Elements of Matter run
      engine = Engine.create();

    //World in which bodies of Matter are placed.
      world = engine.world;

    //To create balls which will complete the newton's cradle.
      ball1 = new Iron_ball(600, 400, 25, "green");
      ball2 = new Iron_ball(550, 400, 25, "yellow");
      ball3 = new Iron_ball(650, 400, 25, "pink");
      ball4 = new Iron_ball(500, 400, 25, "red");
      ball5 = new Iron_ball(700, 400, 25, "blue");

    //To create points from which the balls will hang.
      point_1 = new Point(600, 200, 10, "grey");
      point_2 = new Point(550, 200, 10, "grey");
      point_3 = new Point(650, 200, 10, "grey");
      point_4 = new Point(500, 200, 10, "grey");
      point_5 = new Point(700, 200, 10, "grey");

    //To create a chain which connects any two objects.
      chain1 = new Chain(ball1.body, point_1.body);
      chain2 = new Chain(ball2.body, point_2.body);
      chain3 = new Chain(ball3.body, point_3.body);
      chain4 = new Chain(ball4.body, point_4.body);
      chain5 = new Chain(ball5.body, point_5.body);

    //Renderer that helps to see the Matter Bodies.
      var render = Matter.Render.create({ 
        element: document.body,
        engine: engine,
        options: { 
            width: 1200, 
            height: 600, 
            showAngleIndicator: true,
            showVelocity: true,
            wireframes: true,
        } 
      }); 
        
      Matter.Render.run(render); 
  }


//This functions displays the Matter elements.
  function draw(){

    //Background color.
      background(0);

    //This updates the Matter Engine.
      Engine.update(engine);

    //To display newton's cradle's balls
      ball1.display();
      ball2.display();
      ball3.display();
      ball4.display();
      ball5.display();

    //To display points from which the balls will hang. 
      point_1.display();
      point_2.display();
      point_3.display();
      point_4.display();
      point_5.display();

    //To display chains
      chain1.display();
      chain2.display();
      chain3.display();
      chain4.display();
      chain5.display();

  }

//To apply force on the Ball body.
  function keyPressed() {

    //Key function.
      if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball5.body, ball5.body.position, {x: 0.1, y: 0});
      }
  }
 


/*===================================
------------- MAIN END --------------
====================================*/
