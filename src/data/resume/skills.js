// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Web Development', 'Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Machine Learning', 'Languages', 'C++'],
  },
  {
    title: 'Python for Data Science: scipy, numpy, tensorflow',
    competency: 5,
    category: ['Machine Learning', 'Languages', 'Python', 'Data Science'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Backend', 'Languages', 'Java'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools', 'Machine Learning', 'AWS'],
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
  // {
  //   title: 'ElasticSearch',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'MySQL/SQL',
    competency: 3,
    category: ['Product Management', 'Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'HBase',
    competency: 5,
    category: ['Web Development', 'Databases'],
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
    category: ['Web Development', 'Python', 'Backend'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
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
    title: 'Tensorflow / Tensorflow Serving',
    competency: 3,
    category: ['Data Science', 'Python', 'Machine Learning', 'C++'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  // {
  //   title: 'Typescript',
  //   competency: 2,
  //   category: ['Web Development', 'Languages', 'Javascript'],
  // },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
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
    category: ['Languages'],
  },
  // {
  //   title: 'MATLAB',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  {
    title: 'R',
    competency: 3,
    category: ['Languages'],
  },
  // {
  //   title: 'Data Visualization',
  //   competency: 3,
  //   category: ['Data Science', 'Javascript'],
  // },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases', 'Backend'],
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
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Spark',
    competency: 4,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Airflow',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Hive',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Data Engineering', 'Machine Learning'],
  },
  {
    title: 'TensorRT',
    competency: 4,
    category: ['Machine Learning', 'C++'],
  },
  {
    title: 'Golang',
    competency: 3,
    category: ['Web Development', 'Backend', 'Languages', 'Google Cloud'],
  },
  {
    title: 'folly',
    competency: 3,
    category: ['C++', 'Machine Learning'],
  },
  {
    title: 'Elasticsearch',
    competency: 4,
    category: ['Databases', 'Data Engineering'],
  },
  {
    title: 'Flink',
    competency: 2,
    category: ['Data Engineering', 'Java'],
  },
  {
    title: 'Kafka',
    competency: 2,
    category: ['Data Engineering', 'Java'],
  },
  {
    title: 'Druid',
    competency: 2,
    category: ['Data Engineering', 'Databases'],
  },
  {
    title: 'Scala',
    competency: 3,
    category: ['Data Engineering', 'Languages'],
  },
  {
    title: 'Protobuf',
    competency: 2,
    category: ['Data Engineering', 'Java', 'Machine Learning'],
  },
  {
    title: 'Thrift',
    competency: 4,
    category: ['Data Engineering', 'Machine Learning'],
  },
  {
    title: 'AthenaDB',
    competency: 3,
    category: ['Data Engineering', 'Databases', 'AWS'],
  },
  {
    title: 'Bazel',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Boto3',
    competency: 3,
    category: ['Tools', 'Python', 'AWS'],
  },
  {
    title: 'S3',
    competency: 4,
    category: ['Tools', 'AWS'],
  },
  {
    title: 'EC2',
    competency: 3,
    category: ['Tools', 'AWS'],
  },
  {
    title: 'Route53',
    competency: 2,
    category: ['Tools', 'AWS'],
  },
  {
    title: 'IAM',
    competency: 2,
    category: ['Tools', 'AWS'],
  },
  {
    title: 'Google Cloud CLI',
    competency: 2,
    category: ['Google Cloud'],
  },
  {
    title: 'Google Domains',
    competency: 2,
    category: ['Google Cloud'],
  },
  {
    title: 'JIRA',
    competency: 5,
    category: ['Product Management'],
  },
  {
    title: 'Public Speaking',
    competency: 5,
    category: ['Product Management'],
  },
  {
    title: 'Presentation Skills',
    competency: 5,
    category: ['Product Management'],
  },
  {
    title: 'Storyboarding',
    competency: 5,
    category: ['Product Management', 'Data Science'],
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
    category: ['Product Management'],
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
