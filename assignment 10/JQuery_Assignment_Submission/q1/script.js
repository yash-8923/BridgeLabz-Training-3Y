// Q1 - Live Search (jQuery AJAX). Run JSON Server on port 3001.
const API_URL = "http://localhost:3001/products";
let currentRequest = null;

function renderProducts(products) {
  const $results = $("#results").empty();
  if (products.length === 0) {
    $results.append($("<p>").addClass("muted").text("No products found"));
    return;
  }
  products.forEach(function (p) {
    const $card = $("<div>").addClass("card");
    $card.append($("<img>").attr({ src: p.image, alt: p.name, width: 80, height: 80 }));
    const $info = $("<div>");
    $info.append($("<strong>").text(p.name));
    $info.append($("<div>").text("Price: \u20B9" + p.price));
    $card.append($info);
    $results.append($card);
  });
}

function search(query) {
  if (currentRequest) { currentRequest.abort(); } // ignore old responses
  $("#loading").show();
  const req = $.ajax({
    url: API_URL,
    method: "GET",
    data: { q: query },
    dataType: "json"
  });
  currentRequest = req;
  req.done(renderProducts)
     .fail(function (xhr, status) {
       if (status !== "abort") {
         $("#results").empty().append($("<p>").addClass("error").text("Error: could not load products."));
       }
     })
     .always(function () {
       if (req === currentRequest) { $("#loading").hide(); }
     });
}

$(function () {
  $("#searchBox").on("input", function () { search($.trim($(this).val())); });
  search(""); // show all products at start
});
