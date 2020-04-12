let Btn = document.getElementById("mp4");
let URLinput = document.querySelector(".URL-input");
let select = document.querySelector(".opt");

Btn.addEventListener("click", () => {
  if (!URLinput.value) {
    alert("Enter YouTube URL");
  } else {
    if (select.value == "mp3") {
      redirectMp3(URLinput.value);
    } else if (select.value == "mp4") {
      redirectMp4(URLinput.value);
    }
  }
});

function redirectMp3(query) {
  window.location.href = `/downloadYoump3?url=${query}`;
}

function redirectMp4(query) {
  window.location.href = `/downloadYoump4?url=${query}`;
}
