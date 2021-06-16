import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio Piotr Humin', // e.g: 'Name | Developer'
  lang: 'pl', // e.g: en, es, fr, jp
  description: 'Witam na mojej stronie! Nazywam się Piotr Humin i jestem Web Developerem', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Cześć, mam na imię ',
  name: 'Piotrek',
  subtitle: 'Chcę być Web Developerem',
  cta: 'Więcej o mnie',
};

// ABOUT DATA
export const aboutData = {
  img: 'piotrhumin.jpg',
  paragraphOne: 'Mam 24 lata i całe życie lubię coś tworzyć. Programowaniem zacząłem interesować się w technikum informatycznym czyli jakieś 6 lat temu. Uważam, że umiejętność programowania daje olbrzymie możliwości twórcze i pragnę się w tym rozwijać.',
  paragraphTwo: 'Przez ten czas otarłem się o wiele języków programowania i technologii. Jestem samoukiem, wiedzę czerpię głównie z kursów online. Dzisiaj skupiam się na technologiach frontendowych, tj. HTML, CSS, JavaScript, React.js, Gatsby. Obecnie uczę się frameworka Next.js i planuję poznanie języka TypeScript.',
  paragraphThree: 'Umiem również obsługiwać programy graficzne Adobe Photoshop i Figma. Być może przydam się w Twoim zespole?',
  resume: '/cv.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gabinetPsychologiczny.jpg',
    title: 'Strona gabinetu psychologicznego',
    info: 'Prosta strona "wizytówka" dla prywatnego gabinetu psychologizcnego. Zawiera blog i formularz kontaktowy.',
    info2: 'Została stworzona na podstawie startera gatsby i wydeployowana na netlify.',
    url: 'https://www.psycholog-biala-podlaska.pl/',
    repo: 'https://github.com/HuminPiotr/gabinetPsychologiczny2', // if no repo, the button will not show up

  },
  {
    id: nanoid(),
    img: 'amCleaningServices.jpg',
    title: 'Strona firmy sprzątającej',
    info: `Strona wykonana dla firmy sprzątającej działającej na terenie Holandii. Obsługuje dwa języki, posiada formularz kontaktowy oraz moduł mesengera od facebooka. Wykorzystuje datoCMS (headless cms) do zmiany treści i dodawnia ogłoszeń.`,
    info2: 'W całości została zaprojektowana przeze mnie w programie Figma. Napisana w gatsby. Deploy wykorzystujący netlify.',
    url: 'https://www.am-cleaningservices.com/pl/',
    repo: 'https://github.com/HuminPiotr/AM-Cleaning-Service', // if no repo, the button will not show up

  },

  {
    id: nanoid(),
    img: 'cgt.jpg',
    title: 'Strona Centrum gabinetów terapeutycznych',
    info: 'Wykonana dla grupy terapeutów. Strona umożliwia proste dodawanie postów na bloga przy pomocy datoCMS (headless cms).',
    info2: 'Zaprojektowana wspólnie z klientkami przy pomocy programu Figma. Napisana w gatsby.',
    url: 'https://centrum-gabinetow-terapeutycznych.pl/',
    repo: 'https://github.com/HuminPiotr/Centrum-Gabinetow-Terapeutycznych-2', // if no repo, the button will not show up

  },
];

// CONTACT DATA
export const contactData = {
  cta: ' ',
  btn: '',
  email: 'humin.piotr@gmail.com',
  phone: '577841745',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/HuminPiotr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
