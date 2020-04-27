const ipt = document.querySelector(".ipt");
const btn = document.querySelector(".btn");
const desc = document.querySelector(".desc");
const con = document.querySelector(".con");

btn.addEventListener("click", async (e) => {
  try {
    desc.innerHTML = "";
    con.style.opacity = "60%";

    let d = await fetch(`/music/search/${ipt.value}`);
    let db = await d.json();

    let arr = db.data.items;
    arr.forEach((e) => {
      let path = e.link.split("=")[1];

      desc.innerHTML += `
    <div class='ad'>
    ${e.title}
    <audio controls>
      <source src="/music/audio/${path}" type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
    </div>`;
    });
  } catch (err) {
    desc.innerHTML = `<h3>Search failed</h3>`;
  }
});
