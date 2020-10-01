/*______________________________________________________
-------------- CLASS FOR MAKING A CHAIN ---------------
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


    //To create a Chain.
        class Chain {

            //This is used to construct an object.
                constructor(bodyA, bodyB) {

                    //This is used to specify an object's properties.
                        var options = {
                            bodyA: bodyA,
                            bodyB: bodyB,
                            length: 140,
                            stiffness: 2,
                            damping: 0,
                        }

                        this.chain = Matter.Constraint.create(options);

                    //This adds the constructed object.
                        World.add(world, this.chain);
                }

            //This is used to display the constructed object.
                display() {

                    //This is used to create a chain type line which connects any two bodies.
                        strokeWeight(2);
                        stroke("white");
                        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
                }
        }



/*===================================
---------- CLASS FILE END -----------
====================================*/