// Q4 - Multi-API Dashboard (Fetch + Promise.all). Run JSON Server on port 3004.
const BASE_URL = "http://localhost:3004";

// Each request catches its own error and returns null.
// This way, one failed API does not stop the other two.
function getCount(endpoint) {
  return fetch(BASE_URL + endpoint)
    .then(function (res) {
      if (!res.ok) { throw new Error("HTTP " + res.status); }
      return res.json();
    })
    .then(function (data) { return data.length; })
    .catch(function () { return null; });
}

function showValue(boxId, value) {
  const box = document.getElementById(boxId);
  box.classList.remove("skeleton");
  box.querySelector(".num").textContent = value === null ? "N/A" : value;
}

Promise.all([getCount("/users"), getCount("/orders"), getCount("/products")])
  .then(function (counts) {
    showValue("usersBox", counts[0]);
    showValue("ordersBox", counts[1]);
    showValue("productsBox", counts[2]);
    if (counts.includes(null)) {
      document.getElementById("warning").style.display = "block";
    }
  });
