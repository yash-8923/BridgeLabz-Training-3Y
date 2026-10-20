// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Secure only when ALL conditions are true
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    print("Secure");
  } else {
    // ! and || help us find what is wrong
    if (!isDoorLocked || !isWindowClosed) {
      print("Unsafe (door or window is open)");
    } else {
      print("Unsafe (alarm is off or owner is not inside)");
    }
  }
}

// Test different cases: door, window, alarm, owner
checkSecurity(true, true, true, true);     // all good
checkSecurity(false, true, true, true);    // door not locked
checkSecurity(true, false, true, true);    // window open
checkSecurity(true, true, false, true);    // alarm off
checkSecurity(true, true, true, false);    // owner not inside
