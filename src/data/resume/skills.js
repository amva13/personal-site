// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Web Development', 'Data Science', 'Machine Learning'],
  },
  // {
  //   title: 'C++',
  //   competency: 5,
  //   category: ['Machine Learning'],
  // },
  // {
  //   title: 'Python for Data Science: scipy, numpy, tensorflow',
  //   competency: 5,
  //   category: ['Machine Learning', 'Data Science'],
  // },
  {
    title: 'Java',
    competency: 4,
    category: ['Infra'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Web3'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Machine Learning', 'Infra'],
  },
  // {
  //   title: 'Heroku',
  //   competency: 2,
  //   category: ['Web Development', 'Tools'],
  // },
  // {
  //   title: 'MongoDB',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Web Development', 'Infra'],
  },
  {
    title: 'MySQL/SQL',
    competency: 3,
    category: ['Product Management', 'Web Development'],
  },
  {
    title: 'HBase',
    competency: 5,
    category: ['Web Development', 'Infra'],
  },
  // {
  //   title: 'Data Mining',
  //   competency: 2,
  //   category: ['Data Science'],
  // },
  // {
  //   title: 'Express.JS',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'D3',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  {
    title: 'Flask / GUnicorn',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Web Development'],
  },
  // {
  //   title: 'Kubernetes',
  //   competency: 2,
  //   category: ['Tools', 'Data Engineering'],
  // },
  // {
  //   title: 'Google Cloud Compute',
  //   competency: 2,
  //   category: ['Tools', 'Web Development'],
  // },
  // {
  //   title: 'Numpy',
  //   competency: 3,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  {
    title: 'Tensorflow',
    competency: 3,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Product Management'],
  },
  // {
  //   title: 'Typescript',
  //   competency: 2,
  //   category: ['Web Development', 'Languages', 'Javascript'],
  // },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development'],
  },
  // {
  //   title: 'Python',
  //   competency: 5,
  //   category: ['Languages', 'Python'],
  // },
  // {
  //   title: 'C++',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  {
    title: 'Julia',
    competency: 1,
    category: ['Data Science'],
  },
  // {
  //   title: 'MATLAB',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  {
    title: 'R',
    competency: 3,
    category: ['Data Science'],
  },
  // {
  //   title: 'Data Visualization',
  //   competency: 3,
  //   category: ['Data Science', 'Javascript'],
  // },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development'],
  },
  // {
  //   title: 'Pandas',
  //   competency: 5,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  // {
  //   title: 'Matplotlib',
  //   competency: 3,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  // {
  //   title: 'Scikit-Learn',
  //   competency: 4,
  //   category: ['Data Engineering', 'Data Science', 'Python'],
  // },
  {
    title: 'Hadoop',
    competency: 3,
    category: ['Data Science', 'Cloud'],
  },
  {
    title: 'Spark',
    competency: 4,
    category: ['Data Science', 'Cloud'],
  },
  {
    title: 'Airflow',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Hive',
    competency: 4,
    category: ['Data Science', 'Cloud'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Cloud'],
  },
  {
    title: 'TensorRT',
    competency: 4,
    category: ['Machine Learning'],
  },
  {
    title: 'Golang',
    competency: 3,
    category: ['Web Development'],
  },
  // {
  //   title: 'folly',
  //   competency: 3,
  //   category: ['C++', 'Machine Learning'],
  // },
  // {
  //   title: 'Elasticsearch',
  //   competency: 4,
  //   category: ['Databases', 'Data Engineering'],
  // },
  {
    title: 'Flink',
    competency: 2,
    category: ['Data Science', 'Infra'],
  },
  {
    title: 'Kafka',
    competency: 2,
    category: ['Data Science', 'Infra'],
  },
  {
    title: 'Druid',
    competency: 2,
    category: ['Data Science', 'Infra'],
  },
  {
    title: 'Scala',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Protobuf',
    competency: 2,
    category: ['Infra'],
  },
  {
    title: 'Thrift',
    competency: 4,
    category: ['Web Development', 'Infra'],
  },
  {
    title: 'AthenaDB',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bazel',
    competency: 3,
    category: ['Infra'],
  },
  {
    title: 'Boto3',
    competency: 3,
    category: ['Infra', 'Web Development'],
  },
  {
    title: 'S3',
    competency: 4,
    category: ['Infra'],
  },
  {
    title: 'EC2',
    competency: 3,
    category: ['Infra'],
  },
  {
    title: 'Route53',
    competency: 2,
    category: ['Infra'],
  },
  {
    title: 'IAM',
    competency: 2,
    category: ['Infra'],
  },
  {
    title: 'Google Cloud CLI',
    competency: 2,
    category: ['Infra'],
  },
  {
    title: 'Google Domains',
    competency: 2,
    category: ['Infra'],
  },
  {
    title: 'JIRA',
    competency: 5,
    category: ['Product Management', 'Project Management'],
  },
  {
    title: 'Public Speaking',
    competency: 5,
    category: ['Product Management', 'Cross-Functional Communication', 'Leadership'],
  },
  {
    title: 'Presentation Skills',
    competency: 5,
    category: ['Product Management', 'Cross-Functional Communication', 'Project Management', 'Entrepreneurship'],
  },
  {
    title: 'Storyboarding',
    competency: 5,
    category: ['Product Management', 'Data Science', 'Cross-Functional Communication', 'Project Management'],
  },
  {
    title: 'Product Lifecycle',
    competency: 5,
    category: ['Product Management'],
  },
  {
    title: 'Data Analysis',
    competency: 5,
    category: ['Product Management', 'Data Science'],
  },
  {
    title: 'Rapid Prototyping',
    competency: 5,
    category: ['Product Management', 'Project Management', 'MVPs', 'Entrepreneurship'],
  },
  {
    title: 'Balsamiq',
    competency: 5,
    category: ['Product Management', 'Web Development', 'UI/UX Design', 'MVPs'],
  },
  {
    title: 'MS Excel',
    competency: 5,
    category: ['Product Management', 'Project Management', 'UI/UX Design', 'Financial Analysis', 'Prioritizing'],
  },
  {
    title: 'MS Powerpoint',
    competency: 5,
    category: ['Product Management', 'Project Management', 'UI/UX Design'],
  },
  {
    title: 'MS Word',
    competency: 5,
    category: ['Product Management', 'Project Management'],
  },
  {
    title: 'Google Docs',
    competency: 5,
    category: ['Product Management', 'Project Management'],
  },
  {
    title: 'Google Slides',
    competency: 5,
    category: ['Product Management', 'Project Management', 'UI/UX Design'],
  },
  {
    title: 'Google Sheets',
    competency: 5,
    category: ['Product Management', 'Project Management', 'UI/UX Design', 'Financial Analysis', 'Prioritizing'],
  },
  {
    title: 'Bubble.io',
    competency: 5,
    category: ['Product Management', 'UI/UX Design', 'MVPs'],
  },
  {
    title: 'Product Requirements Document',
    competency: 5,
    category: ['Product Management', 'UI/UX Design', 'MVPs', 'Cross-Functional Communication', 'Leadership', 'Prioritizing'],
  },
  {
    title: 'Product Roadmapping',
    competency: 5,
    category: ['Product Management', 'Project Management', 'MVPs', 'Leadership'],
  },
  {
    title: 'Group Brainstorming',
    competency: 5,
    category: ['Product Management', 'Project Management', 'Leadership', 'Prioritizing'],
  },
  {
    title: 'Wireframing',
    competency: 5,
    category: ['Product Management', 'UI/UX Design', 'MVPs'],
  },
  {
    title: 'Google Ads',
    competency: 5,
    category: ['Product Management', 'MVPs', 'Entrepreneurship', 'GTM'],
  },
  {
    title: 'Defining Metrics',
    competency: 5,
    category: ['Product Management', 'MVPs', 'Entrepreneurship', 'Prioritizing', 'Business Models'],
  },
  {
    title: 'Market Sizing',
    competency: 5,
    category: ['Product Management', 'Entrepreneurship', 'Financial Analysis', 'Prioritizing'],
  },
  {
    title: 'Feature Analysis/Prioritization',
    competency: 5,
    category: ['Product Management', 'Prioritizing'],
  },
  {
    title: 'Competitive Analysis',
    competency: 5,
    category: ['Product Management', 'Financial Analysis', 'Prioritizing', 'Business Models'],
  },
  {
    title: 'MoSCoW',
    competency: 5,
    category: ['Product Management', 'Prioritizing'],
  },
  {
    title: 'KANO',
    competency: 5,
    category: ['Product Management', 'Prioritizing'],
  },
  {
    title: 'RICE Scoring',
    competency: 5,
    category: ['Product Management', 'Prioritizing'],
  },
  {
    title: 'Feasibility, Desirability, Viability Analysis',
    competency: 5,
    category: ['Product Management', 'Prioritizing'],
  },
  {
    title: 'Value/Effort Scaling',
    competency: 5,
    category: ['Product Management', 'Prioritizing'],
  },
  {
    title: 'Customer Journey Mapping',
    competency: 5,
    category: ['Product Management', 'User Research'],
  },
  {
    title: 'User Scenarios and Diagramming',
    competency: 5,
    category: ['Product Management', 'User Research'],
  },
  {
    title: 'Affinity Diagrams',
    competency: 5,
    category: ['Product Management', 'User Research', 'UI/UX Design'],
  },
  {
    title: 'Customer Development',
    competency: 5,
    category: ['Product Management', 'User Research', 'Entrepreneurship'],
  },
  {
    title: 'Discovery Research',
    competency: 5,
    category: ['Product Management', 'User Research', 'Entrepreneurship'],
  },
  {
    title: 'User Testing',
    competency: 5,
    category: ['Product Management', 'User Research', 'UI/UX Design', 'MVPs'],
  },
  {
    title: 'Business Model Canvas Analysis',
    competency: 5,
    category: ['Product Management', 'Business Models'],
  },
  {
    title: 'Value Chain Analysis',
    competency: 5,
    category: ['Product Management', 'Business Models'],
  },
  {
    title: 'Competitor Differentiation',
    competency: 5,
    category: ['Product Management', 'Business Models', 'Prioritizing'],
  },
  {
    title: 'ROI Analysis',
    competency: 5,
    category: ['Product Management', 'Prioritizing', 'Business Models', 'Financial Analysis'],
  },
  {
    title: 'Diff-Diff Analysis',
    competency: 5,
    category: ['Product Management', 'Data Science', 'MVPs'],
  },
  {
    title: 'A/B Experiments',
    competency: 5,
    category: ['Product Management', 'Data Science', 'MVPs', 'User Research'],
  },
  {
    title: 'Figma',
    competency: 5,
    category: ['Product Management', 'MVPs', 'UI/UX Design'],
  },
  {
    title: 'Writing',
    competency: 5,
    category: ['Product Management', 'Leadership', 'Project Management'],
  },
  {
    title: 'Business Statistics',
    competency: 5,
    category: ['Product Management', 'Data Science'],
  },
  {
    title: 'SEO',
    competency: 5,
    category: ['Product Management', 'MVPs', 'GTM'],
  },
  {
    title: 'Customer Segmentation',
    competency: 5,
    category: ['Product Management', 'User Research', 'Business Models'],
  },
  {
    title: 'User Personas',
    competency: 5,
    category: ['Product Management', 'User Research'],
  },
  {
    title: 'Pitching',
    competency: 5,
    category: ['Product Management', 'Entrepreneurship', 'Leadership'],
  },
  {
    title: 'Agile',
    competency: 5,
    category: ['Product Management', 'Project Management'],
  },
  {
    title: 'Solidity',
    competency: 2,
    category: ['Web3'],
  },
  {
    title: 'dApps',
    competency: 2,
    category: ['Web3'],
  },
  {
    title: 'Ethereum Development',
    competency: 2,
    category: ['Web3'],
  },
  {
    title: 'Economic Development',
    competency: 2,
    category: ['Web3'],
  },
  {
    title: 'Vision and Mission Statements, Core Values',
    competency: 5,
    category: ['Product Management', 'Prioritizing', 'Leadership', 'Entrepreneurship'],
  },
  {
    title: 'Jobs-To-Be-Done Analysis (JTBD)',
    competency: 5,
    category: ['Product Management', 'Prioritizing', 'User Research'],
  },
  {
    title: 'Target, soon-to-be, refusing, unexplored user definitions and analysis',
    competency: 5,
    category: ['Product Management', 'Prioritizing', 'User Research'],
  },
  {
    title: 'Evaluating Business Viability',
    competency: 5,
    category: ['Product Management', 'Financial Analysis', 'Business Models'],
  },
  {
    title: 'Edge Computing / ML',
    competency: 5,
    category: ['Machine Learning', 'Web3'],
  },
  {
    title: 'Success Metrics',
    competency: 5,
    category: ['Product Management', 'MVPs', 'Prioritizing'],
  },
  {
    title: 'SWOT Analysis and Internal Validation',
    competency: 5,
    category: ['Product Management', 'MVPs', 'Prioritizing'],
  },
  {
    title: 'Pre-Order',
    competency: 5,
    category: ['Product Management', 'MVPs'],
  },
  {
    title: 'Concierge',
    competency: 5,
    category: ['Product Management', 'MVPs'],
  },
  {
    title: 'Wizard of Oz',
    competency: 5,
    category: ['Product Management', 'MVPs'],
  },
  {
    title: 'Fake Room',
    competency: 5,
    category: ['Product Management', 'MVPs'],
  },
  {
    title: 'Ads Model Analysis (profit at scale, CPC, CPA, CTR)',
    competency: 5,
    category: ['Product Management', 'Business Models', 'Financial Analysis'],
  },
  {
    title: 'Subscriptions Model Analysis (immediate profit and gross margins, Look-To-Buy, Ticket Size)',
    competency: 5,
    category: ['Product Management', 'Business Models', 'Financial Analysis'],
  },
  {
    title: 'Freemium Model Analysis (% paying users, ARPU, ARPP)',
    competency: 5,
    category: ['Product Management', 'Business Models', 'Financial Analysis'],
  },
  {
    title: 'Marketplace Model Analysis (network effects/size, transaction volume, transaction value)',
    competency: 5,
    category: ['Product Management', 'Business Models', 'Financial Analysis'],
  },
  {
    title: 'TAM, SAM, SOM Analysis',
    competency: 5,
    category: ['Product Management', 'Financial Analysis'],
  },
  {
    title: 'Unit Economics',
    competency: 5,
    category: ['Product Management', 'Financial Analysis'],
  },
  {
    title: 'Customer Lead Pipeline',
    competency: 5,
    category: ['Product Management', 'Financial Analysis'],
  },
  {
    title: 'Launch Strategy',
    competency: 5,
    category: ['Product Management', 'GTM', 'Entrepreneurship'],
  },
  {
    title: 'Post-Launch Strategy',
    competency: 5,
    category: ['Product Management', 'GTM', 'Entrepreneurship'],
  },
  {
    title: 'Content Marketing, Paid Media, Earned Media',
    competency: 3,
    category: ['Product Management', 'GTM'],
  },
  {
    title: '4Ps Analysis',
    competency: 3,
    category: ['Product Management', 'GTM'],
  },
  {
    title: 'KPIs',
    competency: 5,
    category: ['Product Management', 'Prioritizing', 'MVPs'],
  },
  {
    title: 'Cryptoeconomics',
    competency: 2,
    category: ['Web3'],
  },
  {
    title: 'Kanban',
    competency: 5,
    category: ['Product Management', 'Project Management'],
  },
  {
    title: 'Scrum',
    competency: 5,
    category: ['Product Management', 'Project Management'],
  },
  {
    title: 'Extreme Programming (XP)',
    competency: 5,
    category: ['Product Management', 'Project Management'],
  },
  {
    title: 'SAFe',
    competency: 5,
    category: ['Product Management', 'Project Management'],
  },
  {
    title: 'Fleek',
    competency: 5,
    category: ['Web3', 'Infra'],
  },
  {
    title: 'IPFS',
    competency: 3,
    category: ['Web3', 'Infra', 'Web Development'],
  },
  {
    title: 'Ethereum Name Service',
    competency: 4,
    category: ['Web3', 'Infra', 'Web Development'],
  },
  // {
  //   title: 'Mypy',
  //   competency: 3,
  //   category: ['Python'],
  // },
  // {
  //   title: 'Pylint',
  //   competency: 4,
  //   category: ['Data Engineering', 'Python'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#FF5733',
  '#DE13DE',
  '#09EEE7',
  '#09EE83',
  '#E7EE09',
  '#59ee09',
  '#edf756',
  '#ffa8B6',
  '#9df9ef',
  '#51e2f5',
  '#ff1d58',
  '#00DDFF',
  '#fff685',
  '#fbe3e8',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
