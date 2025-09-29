export const site = {
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    id: "home",
    name: "Jocelyn Lawrence",
    tagline: "Computer Science — Software Engineering Student, 5th Semester",
    cta: { label: "View My Work", href: "#projects" },
    cv: { label: "Download CV", href: "/Jocelyn Lawrence_CV.pdf" },
  },
  about: {
    id: "about",
    title: "About Me",
    body: "Hi! I’m Celyn, a 5th semester Computer Science student specializing in Software Engineering. I enjoy designing and building web interfaces, and I’m currently learning backend development to expand my skills.",
    photoAlt: "/Me.jpg",
  },
  projects: {
    id: "projects",
    title: "Projects",
    items: [
      {
        title: "Portfolio Website",
        description: "A personal showcase of my projects, skills, and creative work in web development and design, built with a focus on simplicity and user-friendly experience.",
        href: "#",
        image: "/Me.jpg",
        github: "https://github.com/yourname/bubbly-ui-kit",
      },
      {
        title: "SecondServe",
        description: "A platform that promotes sustainable fashion by giving sports gear and apparel a second life through resale and reuse. (Group project)",
        href: "#",
        image: "/SecondServe.png",
        figma: "https://www.figma.com/design/iC9iEyKdIURjpKuW3RCT8t/Techfest?node-id=261-1646&t=vRrYrwfXvSHmCjAK-1",
      },
      {
        title: "Gotong",
        description: "A community-driven app that connects people to collaborate, share resources, and support local initiatives. (Group project)",
        href: "#",
        image: "/Gotong.png",
        figma: "https://www.figma.com/design/4AbO0QOOwmnbzJ1xBca2eb/Gotong?node-id=1066-3582&t=RBZKMEYePh2yJsKU-1",
      },
      {
        title: "Gotong Website",
        description: "The web-based version of Gotong, designed for seamless access and engagement across devices. (Group project)",
        href: "#",
        image: "/GotongWeb.png",
        figma: "https://www.figma.com/design/73r4K2jnrHGMbQD0T4LpxG/Gotong-Web?node-id=0-1&t=dW5XMoFD6FR4wbJX-",
        github: "https://github.com/jzyka/aol-hci-kel4-lb83.git",
      },
      {
        title: "GrocerEase",
        description: "A smart grocery shopping platform that helps households shop efficiently, reduce food waste, and discover sustainable meal options. (Group project)",
        href: "#",
        image: "/GrocerEase.png",
        figma: "https://www.figma.com/design/fWcPcNaDbcxYbkqoeAATly/GrocerEase?node-id=0-1&t=sKyxyGne91c8gIww-1",
        github: "https://github.com/AoL-GrocerEase/GrocerEase.git",
      },
      {
        title: "ASL Sign Language Recognition",
        description: "An interactive tool that recognizes hand and finger motions to identify and display the corresponding alphabet in American Sign Language. (Group project)",
        href: "#",
        image: "/ASL.png",
        github: "https://github.com/IntanWp/Hand-Sign-Language-Detection.git",
      },
    ],
  },
  skills: {
    id: "skills",
    title: "Skills & Tools",
    groups: [
      {
        title: "Languages & Frameworks",
        items: ["Python", "HTML", "CSS", "JavaScript", "Java", "C", "SQL"],
      },
      {
        title: "Tools",
        items: ["Figma", "Canva", "VS Code", "Eclipse", "GitHub", "Dev-C++", "XAMPP", "MS Office"],
      },
    ],
  },
  contact: {
    id: "contact",
    title: "Contact",
    methods: [
      { label: "Email", href: "mailto:celyn1celyn@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jocelyn-lawrence-88a3a12b8/" },
      { label: "GitHub", href: "https://github.com/cinnamone" },
      { label: "Phone", href: "tel:+6287778555995" },
    ],
  },
}
