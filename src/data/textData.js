import Skillset from "./../components/organisms/Skillset"
import Awards from "./../components/organisms/Awards"
import Career from "./../components/organisms/Career"
import Links from "./../components/organisms/Links"

export const textData = {
  header: {
    btn: "contact me!",
    title: `Matt McDonald`,
    text: "Designer / Developer",
  },
  about: {
    title: "About me",
    text:
      "Use this area to say something about yourself or describe your goals.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
  },
  experience: {
    title: "Experience",
    text: [
      {
        name: "Front-End Developer — Dropbox",
        time: "Mar. 2020 - Present",
        text:
          "Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
      },
      {
        name: "Visual Designer — OutboundEngine",
        time: "Sept. 2017 - Mar. 2020",
        text:
          "Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
      },
      {
        name: "Lead Designer — Scrypt, Inc.",
        time: "Jun. 2014 - Sept. 2017",
        text:
          "Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
      },
      {
        name: "UI Designer — Pinger Inc.",
        time: "Jun. 2014 - Sept. 2017",
        text:
          "Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
      },
    ],
  },
  education: {
    title: "Education",
    first: "BFA in Graphic Design — James Madison University",
    second: "Graduated 2014",
  },
  left: [
    {
      title: "Skillset",
      text: [
        "Visual Design",
        "Illustration",
        "UX/Prototyping",
        "Cideo/Motion Graphics",
        "Marketing",
        "Front-End Development",
      ],
      run: <Skillset/>
    },
    {
      title: "awards",
      text: ["Award1 - Mar2019", "Award2 - september2020"],
      run: <Awards/>
    },
    {
      title: "Career traits",
      text: [
        {
          title: "Holistic Designer",
          text:
            "Design should be treated as a living organism, guided by the environment it lives in as a whole.",
        },
        {
          title: "User Focused",
          text:
            "Design should be treated as a living organism, guided by the environment it lives in as a whole.",
        },
        {
          title: "Proactive Evolution",
          text:
            "Design should be treated as a living organism, guided by the environment it lives in as a whole.",
        },
        {
          title: "Bold, yet practical",
          text:
            "Design should be treated as a living organism, guided by the environment it lives in as a whole.",
        },
        
      ],run: <Career/>
    },
    {
      title: "recent works",
      text: [
        {
          name: "facebook",
          link: "https://www.facebook.com",
        },
        { name: "google", link: "https://www.google.com" },
      ],
      run: <Links/>
    },
  ],
  footer: {
    title: "Get in touch!",
    mail: "youremail@email.com",
    phone: "512.273.1838"
  }
};
