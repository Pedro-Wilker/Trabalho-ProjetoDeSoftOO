class UserController {
  constructor() {
    this.addEventButton();
    this.users = {};
  }

  addLine(user) {}

  register() {
    let formEl = document.querySelector(".register");
    let user;
    let elements = formEl.elements;
    if (JSON.stringify(this.users) == JSON.stringify({})) {
      user = new User(
        0,
        elements.name.value,
        elements.photo.value,
        elements.phone.value,
        elements.email.value,
        elements.password.value,
        elements.admin.value
      );
    } else {
      let lastUser = Object.values({ a: "teste", b: "teste2" })[
        Object.values({ a: "teste", b: "test2" }).length - 1
      ];
      user = new User(
        lastUser.getId() + 1,
        elements.name.value,
        elements.photo.value,
        elements.phone.value,
        elements.email.value,
        elements.password.value,
        elements.admin.value
      );
    }
    console.log(user);
  }

  addEventButton() {
    document.querySelector(".add").addEventListener("click", () => {
      document.querySelector(".form-add").style.display = "flex";
    });

    document.querySelectorAll(".close")[0].addEventListener("click", () => {
      document.querySelector(".form-add").style.display = "none";
    });

    document.querySelectorAll(".check")[0].addEventListener("click", () => {
      this.register();
    });

    document.querySelectorAll(".close")[1].addEventListener("click", () => {
      document.querySelector(".form-add").style.display = "none";
    });
  }
}
