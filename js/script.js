async function fetchUserData() {
  let userApi;

  for (let i = 0; i < 8; i++) {
    try {
      const res = await fetch("https://randomuser.me/api/", {
        method: "GET",
      });
      const data = await res.json();
      userApi = data.results[0];

      let userimg = document.createElement("img");
      let userfirstname = document.createElement("h3");
      let username = document.createElement("h4");
      let innerContainer = document.createElement("div");
      let innerpara = document.createElement("p");
      let ratingContainer = document.createElement("div");

      let star = document.createElement("span");
      let star1 = document.createElement("span");
      let star2 = document.createElement("span");
      let star3 = document.createElement("span");
      let star4 = document.createElement("span");


      userimg.classList.add("box_surati");
      userfirstname.classList.add("box_saxeli");
      username.classList.add("box_username");
      innerContainer.classList.add("box");
      innerContainer.classList.add("user1");
      innerpara.classList.add("box_para");
      ratingContainer.classList.add("stars");

      star.classList.add("material-symbols-outlined");
      star.classList.add("star");
      star1.classList.add("material-symbols-outlined");
      star1.classList.add("star");
      star2.classList.add("material-symbols-outlined");
      star2.classList.add("star");
      star3.classList.add("material-symbols-outlined");
      star3.classList.add("star");
      star4.classList.add("material-symbols-outlined");
      star4.classList.add("star");
      


      userimg.src = userApi.picture.large;
      userfirstname.innerText = userApi.name.first;
      username.innerText = userApi.login.username;
      innerpara.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia quos, nobis, saepe delectus necessitatibus provident tempora sequi exercitationem nihil nemo hic. Nihil nam verofugit totam, fuga minus et.";
      star.innerText = "star";
      star1.innerText = "star";
      star2.innerText = "star";
      star3.innerText = "star";
      star4.innerText = "star";

      innerContainer.appendChild(userimg);
      innerContainer.appendChild(userfirstname);
      innerContainer.appendChild(username);

      ratingContainer.appendChild(star);
      ratingContainer.appendChild(star1);
      ratingContainer.appendChild(star2);
      ratingContainer.appendChild(star3);
      ratingContainer.appendChild(star4);


      innerContainer.appendChild(innerpara);
      innerContainer.appendChild(ratingContainer);

      let container = document.querySelector(".box_container");
      container.appendChild(innerContainer);

    } catch (err) {
      console.error(err);
    }
  }
}

// isrebma rom imushavos

function setupUserSlider() {
  const track = document.querySelector(".box_container");
  const leftBtn = document.querySelector(".arrow_left_kursebis");
  const rightBtn = document.querySelector(".arrow_right_kursebis");

  const visibleCards = 4;
  const gap = 24;
  let currentIndex = 0;

  function getCardWidth() {
    const card = track.querySelector(".user1");
    if (!card) return 0;
    return card.offsetWidth + gap;
  }

  function slide() {
    const cardWidth = getCardWidth();
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  rightBtn.addEventListener("click", () => {
    const totalCards = track.children.length;
    const maxIndex = totalCards - visibleCards;

    if (currentIndex >= maxIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    slide();
  });

  leftBtn.addEventListener("click", () => {
    const totalCards = track.children.length;
    const maxIndex = totalCards - visibleCards;

    if (currentIndex <= 0) {
      currentIndex = maxIndex;
    } else {
      currentIndex--;
    }

    slide();
  });

  window.addEventListener("resize", slide);
}


fetchUserData().then(() => {
  setupUserSlider();
});


