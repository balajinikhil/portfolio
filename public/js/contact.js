const collect = document.querySelector(".contact-form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const giphy = document.querySelector(".giphy");

collect.addEventListener("submit", async e => {
  e.preventDefault();
  axios({
    method: "post",
    url: "/api/v1/contact",
    data: {
      name: name.value,
      email: email.value,
      message: message.value
    }
  }).then(dt => {
    name.value = "";
    email.value = "";
    message.value = "";
    giphy.innerHTML = `<iframe src="https://giphy.com/embed/CL3XvCSPnAVYA" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mrw-rhighqualitygifs-CL3XvCSPnAVYA">via GIPHY</a></p>`;
  });
});
