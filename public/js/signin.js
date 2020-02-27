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
        console.log("success", dt);
      })
      .catch(err => {
        console.log("error", err);
      });
  });
