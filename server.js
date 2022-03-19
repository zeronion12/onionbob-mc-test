// Now make both Main chat function and events chat function the same
// Now test with maximum 1 hour idle for heroku to reduce usage
var express = require('express');
var app = express();
var mineflayer = require('mineflayer');
var pass = "12345"; // "Authme" plugin password (No plugin No delete)

// Configurations, Could all be "process.env.XXX" and set in Heroku
var ayar = {
  host: "ult12.falix.gg", // Server IP
  port: process.env.port || 39132, // Need change to target port
  username: "ONIONBOT", // Bot Name in Minecraft
  version: "1.18.1" // Need change to target version
};

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log("hi");
    var bot = mineflayer.createBot(ayar);
    console.log(bot);
});

app.listen(ayar.port, function () {
    /*
    setInterval(function setIntervalCallback(){
        //do something every 10 sec
        console.log("hi");
    }, 10000);
    */
});


// ---Main Program--- //
//var bot = mineflayer.createBot(ayar);
//bindEvents(bot);
// ------------------ //
/*
// Events to bind
function bindEvents(bot) {
  
  // Continuous function to pretend Bot running (60 min interval to set control state)
  bot.on('chat', function(username, message) {
    if (username === bot.username) return;
    function intervalFunc() {
      bot.setControlState('forward', true)
    }
    setInterval(intervalFunc,60000);
    console.log('Interval Message!');
    bot.chat('/login '+ pass);
  });

  // Error function
  bot.on('error', function(err) {
    console.log("Error!");
  });
  
  // Exception function: if End => Relogin
  bot.on('end', function() {
    console.log("End!");
    setTimeout(relog, 60000);
  });
  
  // Relogin function: do the same like Main Program
  function relog() {
    console.log("Relogin!");
    bot = mineflayer.createBot(ayar);
    bindEvents(bot);
  }
}
*/
  
  