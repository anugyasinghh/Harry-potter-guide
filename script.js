const films = [
  {
    n: 1,
    title: "Harry Potter and the Philosopher's Stone",
    year: 2001,
    group: "early",
    tone: "The Beginning",
    summary:
      "Harry discovers that he is a wizard and enters Hogwarts, where friendship, flying, magic and an old mystery change his life.",
    hook:
      "A mysterious object, a forbidden corridor and a school that seems to be hiding something."
  },

  {
    n: 2,
    title: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    group: "early",
    tone: "The Mystery",
    summary:
      "Strange attacks spread fear through Hogwarts while Harry discovers a hidden part of the school's history.",
    hook:
      "Something ancient has awakened beneath Hogwarts."
  },

  {
    n: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    group: "early",
    tone: "The Turning Point",
    summary:
      "A dangerous prisoner escapes Azkaban, forcing Harry to confront secrets surrounding his parents and their past.",
    hook:
      "The past is much closer than Harry thinks."
  },

  {
    n: 4,
    title: "Harry Potter and the Goblet of Fire",
    year: 2005,
    group: "dark",
    tone: "The Tournament",
    summary:
      "Harry is unexpectedly entered into a dangerous magical tournament while a darker force begins returning to the world.",
    hook:
      "Three tasks. One champion. And something much more dangerous underneath it all."
  },

  {
    n: 5,
    title: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    group: "dark",
    tone: "The Resistance",
    summary:
      "Harry faces disbelief from the wizarding government and begins preparing fellow students for a threat few adults will acknowledge.",
    hook:
      "When authority refuses to listen, students decide to learn how to defend themselves."
  },

  {
    n: 6,
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    group: "dark",
    tone: "The Hidden Past",
    summary:
      "Harry and Dumbledore investigate the history of the Dark Lord while Hogwarts becomes increasingly dangerous.",
    hook:
      "The answer may be hidden in a memory from decades ago."
  },

  {
    n: 7,
    title: "Harry Potter and the Deathly Hallows – Part 1",
    year: 2010,
    group: "final",
    tone: "The Hunt",
    summary:
      "Harry, Ron and Hermione leave Hogwarts behind and begin a dangerous mission that forces them to depend on one another.",
    hook:
      "The safety of Hogwarts is gone. The search begins."
  },

  {
    n: 8,
    title: "Harry Potter and the Deathly Hallows – Part 2",
    year: 2011,
    group: "final",
    tone: "The Final Battle",
    summary:
      "The final chapter brings the long conflict to Hogwarts as old mysteries, friendships and sacrifices converge.",
    hook:
      "The story that began with a letter finally reaches its last chapter."
  }
];


const characters = [
  {
    name: "Harry Potter",
    group: "trio",
    role: "Gryffindor · The Chosen One",
    initial: "HP",

    summary:
      "An orphan who discovers on his eleventh birthday that he is a wizard — and that the magical world already knows his name.",

    more:
      "Harry grows from an isolated child into one of the central figures in the wizarding world's struggle against Voldemort.",

    facts: [
      "Gryffindor",
      "Seeker",
      "Auror",
      "Parseltongue"
    ]
  },

  {
    name: "Hermione Granger",
    group: "trio",
    role: "Gryffindor · Witch",
    initial: "HG",

    summary:
      "Brilliant, fiercely curious and prepared for almost anything, Hermione often turns knowledge into the solution when everyone else is stuck.",

    more:
      "Hermione begins as the top student in her year and becomes one of Harry's most dependable friends.",

    facts: [
      "Gryffindor",
      "Muggle-born",
      "Top student",
      "Books"
    ]
  },

  {
    name: "Ron Weasley",
    group: "trio",
    role: "Gryffindor · Wizard",
    initial: "RW",

    summary:
      "Harry's first best friend at Hogwarts, Ron brings loyalty, humour and a huge wizarding family into Harry's life.",

    more:
      "Ron has insecurities of his own, but his loyalty and willingness to stand beside his friends become some of his greatest strengths.",

    facts: [
      "Gryffindor",
      "Weasley family",
      "Chess",
      "Quidditch"
    ]
  },

  {
    name: "Albus Dumbledore",
    group: "hogwarts",
    role: "Headmaster · Hogwarts",
    initial: "AD",

    summary:
      "Hogwarts' legendary headmaster — calm, formidable and often several steps ahead of everyone around him.",

    more:
      "Dumbledore's knowledge of Voldemort's history becomes increasingly important as Harry grows older.",

    facts: [
      "Headmaster",
      "Gryffindor",
      "Order of the Phoenix",
      "Elder Wand"
    ]
  },

  {
    name: "Minerva McGonagall",
    group: "hogwarts",
    role: "Professor · Transfiguration",
    initial: "MM",

    summary:
      "A strict but deeply caring professor whose dry wit and courage make her one of Hogwarts' strongest defenders.",

    more:
      "McGonagall represents the disciplined, protective side of Hogwarts and becomes increasingly important during the later years.",

    facts: [
      "Gryffindor",
      "Transfiguration",
      "Head of House",
      "Animagus"
    ]
  },

  {
    name: "Severus Snape",
    group: "hogwarts",
    role: "Professor · Slytherin Head",
    initial: "SS",

    summary:
      "A severe teacher whose hostility toward Harry makes him one of the most difficult people in the story to read.",

    more:
      "Snape's personal history, loyalties and motivations are deliberately layered across the series. He is best experienced without spoilers.",

    facts: [
      "Slytherin",
      "Potions",
      "Occlumency",
      "Double agent"
    ]
  },

  {
    name: "Draco Malfoy",
    group: "dark",
    role: "Slytherin · Rival",
    initial: "DM",

    summary:
      "A wealthy Slytherin student raised to believe blood status defines worth. His rivalry with Harry becomes more complicated as the series darkens.",

    more:
      "Draco is not the main villain; he is a teenager shaped by family expectations, fear and a world becoming increasingly dangerous around him.",

    facts: [
      "Slytherin",
      "Pure-blood",
      "Malfoy family",
      "Seeker"
    ]
  },

  {
    name: "Lord Voldemort",
    group: "dark",
    role: "Dark Lord · Main antagonist",
    initial: "LV",

    summary:
      "A powerful dark wizard obsessed with immortality, control and escaping the limits of ordinary human life.",

    more:
      "His history stretches back to Hogwarts and explains why old places, names and objects matter so much to the main story.",

    facts: [
      "Slytherin",
      "Tom Riddle",
      "Dark wizard",
      "Horcruxes"
    ]
  },

  {
    name: "Sirius Black",
    group: "ally",
    role: "Harry's godfather",
    initial: "SB",

    summary:
      "A charismatic, rebellious wizard whose connection to Harry opens a new chapter in the story of James and Lily Potter.",

    more:
      "Sirius carries the emotional weight of a generation that fought the previous war against Voldemort and lost much more than people realise.",

    facts: [
      "Gryffindor",
      "Marauder",
      "Animagus",
      "Order of the Phoenix"
    ]
  },

  {
    name: "Remus Lupin",
    group: "ally",
    role: "Professor · Marauder",
    initial: "RL",

    summary:
      "A kind, thoughtful Defence Against the Dark Arts professor who becomes one of Harry's most trusted adult allies.",

    more:
      "Lupin represents the quieter tragedies of the Wizarding War and teaches Harry several lessons that reach well beyond magic.",

    facts: [
      "Gryffindor",
      "Werewolf",
      "Marauder",
      "DADA professor"
    ]
  },

  {
    name: "Rubeus Hagrid",
    group: "ally",
    role: "Keeper of Keys & Grounds",
    initial: "RH",

    summary:
      "The giant-hearted Hogwarts gamekeeper who introduces Harry to the wizarding world with equal parts chaos, kindness and questionable creatures.",

    more:
      "Hagrid is the first adult wizard to make Harry feel that he belongs somewhere. His love for magical creatures often gets him into spectacular trouble.",

    facts: [
      "Half-giant",
      "Hogwarts",
      "Care of creatures",
      "Harry's ally"
    ]
  },

  {
    name: "Ginny Weasley",
    group: "ally",
    role: "Gryffindor · Weasley family",
    initial: "GW",

    summary:
      "The youngest Weasley sibling grows from a shy first-year into an accomplished witch and fierce member of the Hogwarts resistance.",

    more:
      "Ginny's development is easy to miss in the films but becomes much richer in the books, especially her confidence and independence.",

    facts: [
      "Gryffindor",
      "Quidditch",
      "Weasley family",
      "DA member"
    ]
  }
];


const magic = [
  [
    "✦",
    "Wand",
    "A wizard's wand focuses magical ability. Different woods and cores have different properties, and the relationship between wand and wizard becomes important throughout the story."
  ],

  [
    "⌂",
    "Hogwarts Houses",
    "Gryffindor, Slytherin, Ravenclaw and Hufflepuff divide students by values and character — not simple 'good vs evil' labels."
  ],

  [
    "☾",
    "The Sorting Hat",
    "An enchanted hat decides which Hogwarts house fits a first-year best. The choice is more complicated than a personality quiz."
  ],

  [
    "◈",
    "Muggle",
    "A non-magical person. The word helps explain the cultural gap between wizarding society and the ordinary world."
  ],

  [
    "⚯",
    "Patronus",
    "A highly advanced protective charm that takes the form of a magical animal. Its form can reveal something about a person's character or bonds."
  ],

  [
    "⌁",
    "Quidditch",
    "The wizarding world's famous flying sport, played on broomsticks with four balls and goals suspended in the air."
  ],

  [
    "✶",
    "Horcrux",
    "A piece of dark magic connected to splitting a soul so a person can anchor themselves to life. This is a major late-series concept."
  ],

  [
    "♢",
    "Deathly Hallows",
    "Three legendary magical objects: the Elder Wand, the Resurrection Stone and the Cloak of Invisibility."
  ],

  [
    "⚗",
    "Potions",
    "Magical mixtures brewed from ingredients. They range from useful remedies to dangerous transformations and become central to several mysteries."
  ],

  [
    "🕯",
    "The Ministry of Magic",
    "The central governing institution of British wizarding society. It regulates magic, law, education and many of the conflicts around Harry."
  ],

  [
    "⌁",
    "Pensieve",
    "A magical object used to store and revisit memories. It becomes one of the most important storytelling devices for understanding the past."
  ],

  [
    "⚔",
    "Duelling",
    "Formal magical combat using spells, charms, counters and defensive techniques. The gap between school practice and real combat grows as the story darkens."
  ]
];


const filmGrid =
  document.getElementById("filmGrid");

const charGrid =
  document.getElementById("charGrid");

const magicGrid =
  document.getElementById("magicGrid");


let currentFilmFilter = "all";
let currentCharFilter = "all";


/* FILMS */

function renderFilms() {

  const q =
    document
      .getElementById("filmSearch")
      .value
      .toLowerCase();

  filmGrid.innerHTML = films
    .filter(
      f =>
        (
          currentFilmFilter === "all" ||
          f.group === currentFilmFilter
        ) &&
        (
          !q ||
          `${f.title} ${f.year} ${f.tone}`
            .toLowerCase()
            .includes(q)
        )
    )
    .map(
      f => `

        <article
          class="film-card reveal show"
          data-film="${f.n}"
        >

          <div class="film-poster">

            <span class="film-number">
              FILM ${String(f.n).padStart(2, "0")}
            </span>

          </div>


          <div class="film-card-body">

            <div class="film-year">
              ${f.year} · ${f.tone}
            </div>

            <h3>
              ${f.title}
            </h3>

            <p>
              ${f.summary}
            </p>

            <div class="film-meta">

              <span>
                Click for spoiler-light hook
              </span>

              <span>
                ↗
              </span>

            </div>

          </div>

        </article>
      `
    )
    .join("")
    ||
    `
      <p class="empty">
        No film found. Try another spell.
      </p>
    `;
}


/* CHARACTERS */

function renderCharacters() {

  const q =
    document
      .getElementById("charSearch")
      .value
      .toLowerCase();

  charGrid.innerHTML = characters

    .filter(
      c =>
        (
          currentCharFilter === "all" ||
          c.group === currentCharFilter
        ) &&
        (
          !q ||
          `${c.name} ${c.role} ${c.summary}`
            .toLowerCase()
            .includes(q)
        )
    )

    .map(
      c => `

        <article
          class="char-card reveal show"
          data-name="${c.name}"
        >

          <div class="char-orb">
            ${c.initial}
          </div>

          <h3>
            ${c.name}
          </h3>

          <div class="char-role">
            ${c.role}
          </div>

          <p>
            ${c.summary}
          </p>

        </article>
      `
    )
    .join("")
    ||
    `
      <p class="empty">
        No character found.
        Try another incantation.
      </p>
    `;
}


/* MAGIC */

function renderMagic() {

  magicGrid.innerHTML =
    magic

      .map(
        ([icon, title, desc]) => `

          <article class="magic-card reveal show">

            <div class="magic-icon">
              ${icon}
            </div>

            <h3>
              ${title}
            </h3>

            <p>
              ${desc}
            </p>

          </article>

        `
      )

      .join("");
}


/* INITIAL RENDER */

renderFilms();

renderCharacters();

renderMagic();


/* FILM FILTERS */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(
            x =>
              x.classList.remove("active")
          );

        button.classList.add("active");

        currentFilmFilter =
          button.dataset.filter;

        renderFilms();
      }
    );
  });


/* CHARACTER FILTERS */

document
  .querySelectorAll(".char-filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".char-filter")
          .forEach(
            x =>
              x.classList.remove("active")
          );

        button.classList.add("active");

        currentCharFilter =
          button.dataset.charFilter;

        renderCharacters();
      }
    );
  });


/* SEARCH */

document
  .getElementById("filmSearch")
  .addEventListener(
    "input",
    renderFilms
  );


document
  .getElementById("charSearch")
  .addEventListener(
    "input",
    renderCharacters
  );


/* MODAL */

const modal =
  document.getElementById("modal");

const modalContent =
  document.getElementById("modalContent");


document.addEventListener(
  "click",
  event => {

    const filmCard =
      event.target.closest(".film-card");


    if (filmCard) {

      const film =
        films.find(
          x =>
            x.n ===
            Number(
              filmCard.dataset.film
            )
        );


      modalContent.innerHTML = `

        <div class="modal-sub">
          Film ${film.n} · ${film.year}
        </div>

        <h2>
          ${film.title}
        </h2>

        <p>
          ${film.summary}
        </p>

        <div class="modal-list">

          <span>
            <b>Hook</b>
            <br>
            ${film.hook}
          </span>

          <span>
            <b>Best approach</b>
            <br>
            Watch the film first;
            use this page afterward for context.
          </span>

        </div>
      `;


      openModal();
    }


    const charCard =
      event.target.closest(".char-card");


    if (charCard) {

      const character =
        characters.find(
          x =>
            x.name ===
            charCard.dataset.name
        );


      modalContent.innerHTML = `

        <div class="modal-sub">
          ${character.role}
        </div>

        <h2>
          ${character.name}
        </h2>

        <p>
          ${character.more}
        </p>

        <div class="modal-list">

          ${character.facts
            .map(
              fact =>
                `<span>${fact}</span>`
            )
            .join("")}

        </div>
      `;


      openModal();
    }

  }
);


function openModal() {

  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}


function closeModal() {

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";
}


/* MODAL CONTROLS */

modal
  .querySelector(".modal-close")
  .addEventListener(
    "click",
    closeModal
  );


modal
  .querySelector(".modal-backdrop")
  .addEventListener(
    "click",
    closeModal
  );


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeModal();
    }

  }
);


/* SCROLL REVEAL */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "show"
            );

          }

        }
      );

    },
    {
      threshold: 0.08
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(
    element =>
      observer.observe(element)
  );


/* TOP BUTTON */

const topBtn =
  document.getElementById("topBtn");


window.addEventListener(
  "scroll",
  () => {

    topBtn.classList.toggle(
      "visible",
      window.scrollY > 700
    );

  },
  {
    passive: true
  }
);


topBtn.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* MOBILE NAV */

const toggle =
  document.querySelector(".nav-toggle");

const nav =
  document.querySelector(".nav");


toggle.addEventListener(
  "click",
  () => {

    const open =
      nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      open
    );

  }
);


nav
  .querySelectorAll("a")
  .forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "open"
          );

        }
      );

    }
  );


/*
  Tiny, lightweight starfield.
  Intentionally restrained for mobile performance.
*/

const starCanvas =
  document.createElement("canvas");


starCanvas.style.cssText = `
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: .28;
`;


document.body.prepend(
  starCanvas
);


const ctx =
  starCanvas.getContext("2d");


let stars = [];


function resizeStars() {

  starCanvas.width =
    window.innerWidth;

  starCanvas.height =
    window.innerHeight;


  stars =
    Array.from(
      {
        length:
          Math.min(
            90,
            Math.floor(
              window.innerWidth / 16
            )
          )
      },
      () => ({
        x:
          Math.random() *
          window.innerWidth,

        y:
          Math.random() *
          window.innerHeight,

        r:
          Math.random() * 1.2 +
          0.2,

        a:
          Math.random() * 0.6 +
          0.2
      })
    );
}


function drawStars() {

  ctx.clearRect(
    0,
    0,
    starCanvas.width,
    starCanvas.height
  );


  stars.forEach(star => {

    ctx.globalAlpha =
      star.a;

    ctx.fillStyle =
      "#d5c38e";

    ctx.fillRect(
      star.x,
      star.y,
      star.r,
      star.r
    );

  });


  requestAnimationFrame(
    drawStars
  );
}


window.addEventListener(
  "resize",
  resizeStars
);


resizeStars();

drawStars();