import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faMonero } from '@fortawesome/free-brands-svg-icons/faMonero';
import { faEthereum } from '@fortawesome/free-brands-svg-icons/faEthereum';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons/faBitcoin';
import { faHackerNews } from '@fortawesome/free-brands-svg-icons/faHackerNews';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/amva13',
    label: 'Github',
    icon: faGithub,
  },
  // {
  //   link: 'https://www.linkedin.com/in/alexv24/',
  //   label: 'LinkedIn',
  //   icon: faLinkedinIn,
  // },
  // {
  //   link: 'https://angel.co/u/alejandro-velez-6/',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  // {
  //   link: 'https://twitter.com/pikachubots',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  // {
  //   link: 'https://www.pinterest.com/avelezarce/',
  //   label: 'Pinterest',
  //   icon: faPinterest,
  // },
  {
    link: 'mailto:alex@alexv24.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://algonameservice.com/search/alexv',
    label: 'Algorand',
    icon: faMonero,
  },
  {
    link: 'https://app.ens.domains/name/alexv24.eth/details',
    label: 'Ethereum',
    icon: faEthereum,
  },
  {
    link: 'https://naming.bonfida.org/#/domain/alexv',
    label: 'Solana',
    icon: faBitcoin,
  },
  {
    link: 'https://www.crunchbase.com/person/alejandro-velez-891c',
    label: 'Crunchbase',
    icon: faHackerNews,
  },
];

export default data;
