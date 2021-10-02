const emails = [
  "nico@no.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
];

const cleaned = emails.map((email, index) => ({
  username: email.split("@")[0],
  index,
}));
console.log(cleaned);
