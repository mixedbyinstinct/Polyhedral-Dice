//list of numbers to generate roll from
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//variables to store final roll and index in number list
var stop;
var index;
var stopped = false;

document.getElementById('d4').onclick = function side4() {
  //get random index from a range equal to the number of sides on the die
  index = Math.floor(Math.random() * 4);

  //set stop = to the number at the aforementioned index in the list
  stop = numbers[index];

  //stop recursion when user hits stop button
  if(stopped) {
    document.getElementById("rolled")
   .innerHTML = " rolled: " + stop;
    stopped = false;
    return;
  }
  document.getElementById("rolled")
  .innerHTML = stop;
  //recurse
  setTimeout(function(){side4()}, 100);
}

document.getElementById("stop").onclick = function() {
  stopped = true;
}

document.getElementById('d6').onclick = function side6() {
  index = Math.floor(Math.random() * 6);
  stop = numbers[index];
  if(stopped) {
    document.getElementById("rolled")
   .innerHTML = " rolled: " + stop;
    stopped = false;
    return;
  }
  document.getElementById("rolled")
  .innerHTML = stop;
  setTimeout(function(){side6()}, 100);
}

document.getElementById('d8').onclick = function side8() {
  index = Math.floor(Math.random() * 8);
  stop = numbers[index];
  if(stopped) {
    document.getElementById("rolled")
   .innerHTML = " rolled: " + stop;
    stopped = false;
    return;
  }
  document.getElementById("rolled")
  .innerHTML = stop;
  setTimeout(function(){side8()}, 100);
}

document.getElementById('d10').onclick = function side10() {
  index = Math.floor(Math.random() * 10);
  stop = numbers[index];
  if(stopped) {
    document.getElementById("rolled")
   .innerHTML = " rolled: " + stop;
    stopped = false;
    return;
  }
  document.getElementById("rolled")
  .innerHTML = stop;
  setTimeout(function(){side10()}, 100);
}

document.getElementById('d12').onclick = function side12() {
  index = Math.floor(Math.random() * 12);
  stop = numbers[index];
  if(stopped) {
    document.getElementById("rolled")
   .innerHTML = " rolled: " + stop;
    stopped = false;
    return;
  }
  document.getElementById("rolled")
  .innerHTML = stop;
  setTimeout(function(){side12()}, 100);
}

document.getElementById('d20').onclick = function side20() {
  index = Math.floor(Math.random() * 20);
  stop = numbers[index];
  if(stopped) {
    document.getElementById("rolled")
   .innerHTML = " rolled: " + stop;
    stopped = false;
    return;
  }
  document.getElementById("rolled")
  .innerHTML = stop;
  setTimeout(function(){side20()}, 100);
}