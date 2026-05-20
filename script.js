const sections = [
  {
    id: "intro",
    label: "00 / enter",
    text: `a small structure for arya

a tiny little website
for a very big moment!

just a small space
to say:

you did it :P`
  },
  {
    id: "site-note",
    label: "01 / site note",
    text: `arya,

congratulations bestie!

this felt too important
for just a message,
so i made you a small space instead.

something to hold this moment
before everything keeps moving.`
  },
  {
    id: "foundations",
    label: "02 / foundations",
    text: `for the person you are becoming,

and for all the work
you have put in to get here.

it has been really special
watching you grow into
such an intelligent,
thoughtful, and creative person.

i know we have both changed a lot,
but i still feel lucky
that i got to know you
across so many versions of life.

from high school,
to uni,
to now.`
  },
  {
    id: "details",
    label: "03 / still here",
    text: `i do not have one perfect way
to summarise us.

there are old photos,
small memories,
high school versions of ourselves,
uni versions,
random little moments
that probably would not make sense
to anyone else.

and even though life has moved
in different directions sometimes,

i still think it means something
to have known you
across so much change.

i hope in 2026
we get to make more memories
as the people we are now!`
  },
  {
    id: "checklist",
    label: "04 / checklist",
    text: `site checklist:`
  },
  {
    id: "next-draft",
    label: "05 / next draft",
    text: `for masters,
and whatever comes next:

i hope this next chapter
is kind to you.

i hope you get to make work
that feels like you.

i hope you meet people
who understand your ideas,

and i hope you keep trusting
the way you see things.

you do not need to have
everything figured out yet.

you are already doing
so much better
than you probably think.`
  },
  {
    id: "closing",
    label: "06 / closing",
    text: `congratulations, baddie!

i am so proud of you.

for graduating,
for continuing into masters,
and for becoming someone
i feel really lucky to know.

i hope we see each other
more in 2026.

built with love,
vivian`
  }
];

const typedText = document.getElementById("typed-text");
const sectionLabel = document.getElementById("section-label");

/* This now selects BOTH the normal nav buttons and the floor plan rooms */
const navButtons = document.querySelectorAll(".room");

const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const siteChecklist = document.getElementById("site-checklist");

let currentSection = 0;
let typingTimer;
let charIndex = 0;

const typingSpeed = 32;

function typeSection(index) {
  clearTimeout(typingTimer);

  currentSection = index;
  charIndex = 0;

  const section = sections[currentSection];

  typedText.textContent = "";
  sectionLabel.textContent = section.label;

  siteChecklist.classList.toggle("hidden", section.id !== "checklist");

  updateActiveButton();
  updateControlButtons();

  function typeCharacter() {
    if (charIndex < section.text.length) {
      typedText.textContent += section.text.charAt(charIndex);
      charIndex++;
      typingTimer = setTimeout(typeCharacter, typingSpeed);
    }
  }

  typeCharacter();
}

function updateActiveButton() {
  navButtons.forEach((button) => {
    const sectionId = sections[currentSection].id;
    button.classList.toggle("active", button.dataset.section === sectionId);
  });
}

function updateControlButtons() {
  prevButton.style.visibility = currentSection === 0 ? "hidden" : "visible";
  nextButton.textContent = currentSection === sections.length - 1 ? "restart" : "next";
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = sections.findIndex((section) => section.id === button.dataset.section);
    typeSection(index);
  });
});

nextButton.addEventListener("click", () => {
  if (currentSection === sections.length - 1) {
    typeSection(0);
  } else {
    typeSection(currentSection + 1);
  }
});

prevButton.addEventListener("click", () => {
  if (currentSection > 0) {
    typeSection(currentSection - 1);
  }
});

document.querySelectorAll("#site-checklist li").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("done");
  });
});

typeSection(0);