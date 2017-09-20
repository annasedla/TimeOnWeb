//test
document.getElementById("main").innerHTML = "How much time do you spent on these sites:";

/*
  Fields
*/

/*
  Objects
 */

//for checking current time
  var TimeCapture = function (){
    var now = 0;
    var start = 0;

    this.start = function(){
      start = new Date().getTime();
    }

    this.check = function (){
      now = new Date().getTime();
      console.log('start:', now - start);
      start = now;
    }
  }

  /*
    Debug
  */

  var time = new TimeCapture();
  //begin tracking time
  time.start();
  //...do stuff
  time.check('say something here')//look at your console for output
  //..do more stuff
  time.check('say something else')//look at your console for output
  //..do more stuff
  time.check('say something else one more time')//look at your console for output
