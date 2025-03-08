const name = document.getElementById("name_input");
const btn = document.querySelector(".form_btn").querySelector("button");
const titel = document.querySelector(".form_hero_title");
const heroDesc = document.querySelector(".form_hero_Desc");
const inputChild = document.querySelector(".form_input").children;
const warning = document.querySelector(".dragdrop label:nth-child(2)");
const fileShow = document.querySelector(".dragdrop").firstElementChild;
const avatarInp = document.querySelector("#files");
const showTicket = document.querySelector(".form_ticket_hidden");

let profilePic = "";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(btn);
  showTicket.style.display = "block";
  document.querySelector(".form_input").style.display = "none";
  let name = document.forms["ticket_form"]["name_input"].value;
  let email = document.forms["ticket_form"]["email_input"].value;
  let userName = document.forms["ticket_form"]["userName_input"].value;

  titel.innerHTML = `Congrats,<span>${name}</span>! Your ticket is ready`;

  const nameColor = titel.querySelector("span");
  nameColor.style.backgroundImage =
    "linear-gradient(to right ,hsl(7, 86%, 67%), hsl(0, 0%, 100%))";
  nameColor.style.color = "transparent";
  nameColor.style.backgroundClip = "text";

  heroDesc.innerHTML = `We've emailed your ticket to <span>${email}</span> and will send updates in the run up to the event.`;

  const emailColor = heroDesc.querySelector("span");
  console.log(emailColor);

  emailColor.style.color = "hsl(7, 88%, 67%)";

  const ticketName = document
    .querySelector(".form_ticket_user")
    .querySelector(".userName");
  const gitUserName = document
    .querySelector(".form_ticket_user")
    .querySelector(".githubUser")
    .querySelector("span:last-child");

  ticketName.innerText = name;
  gitUserName.innerText = userName;

  const DP = document.querySelector(".avatar").querySelector("img");

  DP.setAttribute("src", profilePic);
});

function fileValidation(input) {
  const fileSize = Math.round((input.files[0].size / 1024) * 100) / 100;

  const file = input.value;

  let allowedExtension = /(\.jpg|\.png)$/i;

  if (!allowedExtension.exec(file)) {
    alert(`Invalid formate of ${file.split(".").pop().toLowerCase()}`);
  } else {
    if (input.files.length > 0 && fileSize > 500) {
      // alert(`File size is too large`);
      warning.innerHTML = `Files size exceeds 500KB `;
    } else {
      let reader = new FileReader();
      reader.onload = (e) => {
        fileShow.firstElementChild.setAttribute("src", e.target.result);
        profilePic = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);

      fileShow.firstElementChild.style.objectFit = "scale-down";
      fileShow.style.padding = "0";

      warning.querySelector(".inst").style.display = "none";
      warning.querySelector(".changeremoveimg").style.display = "block";
      warning.querySelector(".changeremoveimg").style.left = "-30%";
      avatarInp.style.visibility = "hidden";
    }
  }
}

const changeFile = document.querySelector(".change");
const removeFile = document.querySelector(".remove");

removeFile.addEventListener("click", () => {
  fileShow.firstElementChild.setAttribute(
    "src",
    "app/scss/assets/images/icon-upload.svg"
  );
});

changeFile.addEventListener("click", () => {
  avatarInp.click();
});
