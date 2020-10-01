/*______________________________________________________
------------ CLASS FOR MAKING AN IRON BALL -------------
== Created by Sameer Karna (Student of WhiteHat Jr.) ==
______________CREATED ON 1st OCTOBER 2020_______________

- - - - - - - - - Copyright (c) 2020 - - - - - - - - - -

 The permission to view and handle this game is hereby 
               granted to all viewers. 

 The above Copyright also disallows the viewers to copy
   this code. If any copied version is published then 
            the viewer will be charged.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

~~~~~ The below CLASS file is a part of 'sketch.js' file ~~~~~
~~~~ 'sketch.js' file comes under NEWTON's CRADLE project ~~~~
~~~    The viewer is restricted from copying any content   ~~~

*/  
    
    
    
    //To create a Iron ball.
        class Iron_ball {

            //This is used to construct an object.
                constructor(x, y, radius, color) {

                    //This is used to specify an object's properties.
                        var ball_options = {
                            restitution: 1.25,
                            friction: 5,
                            isStatic: false,
                        }

                        this.body = Bodies.circle(x, y, radius, ball_options);
                        this.radius = radius;   
                        this.color = color;
                        
                    //This adds the constructed object.
                        World.add(world, this.body);  
                }

            //This is used to display the constructed object.
                display() {

                    //Variable for the constructed object's position.
                        var position = this.body.position;

                    //Variable for constructed object's angle.
                        var angle = this.body.angle;

                    //This is used for displaying an object.
                        push();
                        translate(position.x, position.y);
                        rotate(angle);      
                        fill(this.color);
                        strokeWeight(0);
                        ellipse(0, 0, 50)            
                        pop();
                }
        }

        
 
/*===================================
---------- CLASS FILE END -----------
====================================*/
