const mybutton = document.querySelector("#mybutton");
const mytext = document.querySelector("#mytext");

//*********************************************Add Function()***************************************


mybutton.addEventListener("click", () => {
  if (mytext.value === "") {
    alert("plz Enter some text");
    return;
  }
  let div1 = document.createElement("div");
  div1.setAttribute("class", "mydiv2");
  div1.innerHTML = `<div id="mydiv" class="mydiv3"><p>My-Notes</p></div><div id="myid" class="mydiv4">${
    mytext.value
  }</div><div class="mydiv5"><button onclick="Remove(this)">Delete Note</button></div> `;
  document.body.append(div1);
  mytext.value = "";
});

//*********************************************Remove function()***************************************

const Remove = (obj) => {
  obj.parentNode.parentNode.remove();
};

//*********************************************Search Function()***************************************

let search = document.getElementById("search");
search.addEventListener("input", function () {
  let s_search = search.value;
  let notes = document.getElementsByClassName("mydiv2");
  Array.from(notes).forEach(function (e) {
    let text = e.getElementsByClassName("mydiv4")[0].innerText;
    if (text.includes(s_search)) {
      e.style.display = "inline-block";
    } else {
      e.style.display = "none";
    }
  });
});
