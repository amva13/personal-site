const courses = [
  // {
  //   title: 'Network and Computer Security',
  //   number: '6.857',
  //   link: 'https://courses.csail.mit.edu/6.857/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Natural Language Processing',
  //   number: '6.863',
  //   link: 'http://www.ai.mit.edu/courses/6.863/index.php3',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Computer Systems Engineering',
  //   number: '6.033',
  //   link: 'https://web.mit.edu/6.033/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Elements of Software Construction',
  //   number: '6.031',
  //   link: 'https://web.mit.edu/6.031/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Design and Analysis of Algorithms',
  //   number: '6.046',
  //   link: 'https://courses.csail.mit.edu/6.046/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Machine Learning',
  //   number: '6.036',
  //   link: 'https://courses.csail.mit.edu/6.036/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Artificial Intelligence',
  //   number: '6.034',
  //   link: 'https://courses.csail.mit.edu/6.034/',
  //   university: 'MIT',
  // },
  // // {
  // //   title: 'Computation Structures',
  // //   number: '6.004',
  // //   link: 'https://courses.csail.mit.edu/6.004/',
  // //   university: 'MIT',
  // // },
  // // {
  // //   title: 'Discrete Mathematics',
  // //   number: '6.042',
  // //   link: 'https://courses.csail.mit.edu/6.042/',
  // //   university: 'MIT',
  // // },
  // {
  //   title: 'Oral Communication',
  //   number: '6.UAT',
  //   link: 'https://courses.csail.mit.edu/6.UAT/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Probability and Random Variables',
  //   number: '18.440',
  //   link: 'https://math.mit.edu/~guionnet/course18440.html',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Real Analysis',
  //   number: '18.100',
  //   link: 'https://math.mit.edu/~apm/18100A.html',
  //   university: 'MIT',
  // },
  // // {
  // //   title: 'Linear Algebra',
  // //   number: '18.06',
  // //   link: 'https://mitmath.github.io/1806/',
  // //   university: 'MIT',
  // // },
  // {
  //   title: 'Statistics',
  //   number: '15.075',
  //   link: 'https://dspace.mit.edu/handle/1721.1/72947',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Laboratory in Investments',
  //   number: '15.417',
  //   link: 'http://student.mit.edu/catalog/search.cgi?search=15.417&style=verbatim',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Marketing Management',
  //   number: '15.812',
  //   link: 'https://dspace.mit.edu/bitstream/handle/1721.1/104055/15-812-fall-2002/contents/index.htm',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Managerial Psychology',
  //   number: '15.310',
  //   link: 'http://student.mit.edu/catalog/search.cgi?search=15.279&style=verbatim',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Laboratory in Corporate Finance',
  //   number: '15.418',
  //   link: 'http://student.mit.edu/catalog/search.cgi?search=15.418&style=verbatim',
  //   university: 'MIT',
  // },
  // // {
  // //   title: 'Data Technologies for Quant Finance',
  // //   number: '15.496',
  // //   link: 'https://lfe.mit.edu/education/',
  // //   university: 'MIT',
  // // },
  // {
  //   title: 'Accounting',
  //   number: '15.501',
  //   link: 'https://mitsloan.mit.edu/faculty/academic-groups/accounting/courses-programs',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Game Theory',
  //   number: '14.12',
  //   link: 'https://ocw.mit.edu/courses/economics/14-12-economic-applications-of-game-theory-fall-2012/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Public Finance and Public Policy',
  //   number: '14.41',
  //   link: 'http://web.mit.edu/14.41/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Labor Economics and Public Policy',
  //   number: '14.64',
  //   link: 'http://web.mit.edu/14.64/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Public Policy for Washington Interns',
  //   number: '17.307',
  //   link: 'http://web.mit.edu/14.64/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Philosophy and Time',
  //   number: '24.115',
  //   link: 'http://catalog.mit.edu/subjects/24/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Voice and Speech of the Actor',
  //   number: '21M.605',
  //   link: 'https://www.coursicle.com/mit/courses/21M/605/',
  //   university: 'MIT',
  // },
  // {
  //   title: 'Product Manager Certificate',
  //   number: 'Product School',
  //   link: 'https://www.productschool.com/product-manager-certification',
  //   university: 'Product School',
  // },
  // {
  //   title: 'Intro to Ethereum Developer Course',
  //   number: 'ETH101',
  //   link: 'https://courses.blockgeeks.com/course/eth-101-ethereum-developer-course/',
  //   university: 'Blockgeeks',
  // },
  // {
  //   title: 'Intro to CryptoEconomics',
  //   number: 'CE101',
  //   link: 'https://courses.blockgeeks.com/course/ce101-intro-to-cryptoeconomics/',
  //   university: 'Blockgeeks',
  // },
  // {
  //   title: 'Intro to Building dApps',
  //   number: 'ETH102',
  //   link: 'https://courses.blockgeeks.com/course/eth102-intro-to-building-dapps/',
  //   university: 'Blockgeeks',
  // },
  // {
  //   title: 'Intro to Javascript',
  //   number: 'Workshop',
  //   link: 'https://courses.blockgeeks.com/course/workshop-seriesjavascript-primer/',
  //   university: 'Blockgeeks',
  // },
];

export default courses;
