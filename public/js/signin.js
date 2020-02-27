const email = document.querySelector(".email");
const password = document.querySelector(".password");

const login = document
  .querySelector(".login")
  .addEventListener("submit", async e => {
    e.preventDefault();

    await axios({
      method: "post",
      url: "/api/v1/users/signin",
      data: {
        email: email.value,
        password: password.value
      }
    })
      .then(dt => {
        window.location.href = "/admin";
      })
      .catch(err => {
        alert("try again");
        console.log(err);
      });
  });
