var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("Ready event. Repl instance auto-initialized!");

  var led4 = new five.Led(4);
  var led5 = new five.Led(5);
  var led6 = new five.Led(6);
  var led7 = new five.Led(7);

  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on: function() {
      led4.on();
      led5.on();
      led6.on();
      led7.on();
    },
    off: function() {
      led4.off();
      led5.off();
      led6.off();
      led7.off();
    }
  });
  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on4: function() {
      led4.on();
    },
    off4: function() {
      led4.off();
    }
  });
  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on5: function() {
      led5.on();
    },
    off5: function() {
      led5.off();
    }
  });
  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on6: function() {
      led6.on();
    },
    off6: function() {
      led6.off();
    }
  });
  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on7: function() {
      led7.on();
    },
    off7: function() {
      led7.off();
    }
  });
});
