const sender1 = "Matt";

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender1, "Sarah"); // * // Matt, Sarah
sendTo(null); // ** //null, undefined

const sender2 = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** // from CC to Max
sendTo("Ben", "Jay"); // **** // from Jay to Ben