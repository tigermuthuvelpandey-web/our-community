
const members = [
  {
    name: "Member 01",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 02",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 03",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 04",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 05",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 06",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 07",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 08",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 09",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 10",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 11",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 12",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 13",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 14",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 15",
    channel: "https://youtube.com/",
    photo: ""
  },
  {
    name: "Member 16",
    channel: "https://youtube.com/",
    photo: ""
  }
];

const list = document.getElementById("member-list");
const search = document.getElementById("search");

function showMembers(data) {
  list.innerHTML = "";

  data.forEach(member => {
    const card = document.createElement("div");
    card.style.cssText = `
      background:#111b2c;
      border:1px solid #263b58;
      border-radius:18px;
      padding:25px 15px;
      text-align:center;
    `;

    const avatar = document.createElement("div");
    avatar.textContent = member.name.charAt(0).toUpperCase();
    avatar.style.cssText = `
      width:65px;height:65px;
      border-radius:50%;
      background:#174477;
      display:grid;
      place-items:center;
      margin:0 auto 15px;
      font-size:26px;
      color:white;
    `;

    if (member.photo) {
      const img = document.createElement("img");
      img.src = member.photo;
      img.alt = member.name;
      img.style.cssText =
        "width:65px;height:65px;border-radius:50%;object-fit:cover;margin-bottom:15px;";
      img.onerror = () => img.replaceWith(avatar);
      card.appendChild(img);
    } else {
      card.appendChild(avatar);
    }

    const title = document.createElement("h3");
    title.textContent = member.name;
    title.style.marginBottom = "18px";

    const link = document.createElement("a");
    link.href = member.channel;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "▶ Visit YouTube";
    link.style.cssText = `
      display:inline-block;
      background:#0879df;
      color:white;
      padding:11px 18px;
      border-radius:9px;
      text-decoration:none;
      font-size:13px;
    `;

    card.append(avatar.cloneNode(true), title, link);
    list.appendChild(card);
  });
}

showMembers(members);

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  showMembers(
    members.filter(member =>
      member.name.toLowerCase().includes(value)
    )
  );
});
