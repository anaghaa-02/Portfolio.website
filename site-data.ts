export const profile = {
  name: 'Anagha M S',
  title: 'Software Engineer',
  location: 'Thrissur, Kerala, India',
  phone: '+91 9656913678',
  email: 'msanagha4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anaghhaa',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 'B.Tech', label: 'CSE' },
  { value: '2', label: 'Internships' },
  { value: 'Java + Python', label: 'Core Languages' },
  { value: 'MySQL + JDBC', label: 'Data Layer' },
]

export const education = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
  institution: 'Universal Engineering College, Thrissur, India',
  duration: 'August 2024 – Present',
  affiliation: 'APJ Abdul Kalam Technological University (KTU)',
}

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['Java', 'Python'],
  },
  {
    title: 'Database Technologies',
    icon: 'Database',
    skills: ['SQL', 'MySQL', 'JDBC', 'CRUD Operations', 'Database Design'],
  },
  {
    title: 'Core Concepts',
    icon: 'Boxes',
    skills: [
      'Object-Oriented Programming',
      'Exception Handling',
      'File Handling',
      'Basic Data Structures',
    ],
  },
  {
    title: 'Software Engineering',
    icon: 'Bug',
    skills: ['Problem Solving', 'Debugging', 'Logical Thinking', 'Algorithm Design'],
  },
] as const

export const experiences = [
  {
    role: 'Python Programming Intern',
    company: 'Cloudnex Infotech',
    location: 'Kochi, Kerala',
    date: 'June 2026',
    points: [
      'Completed hands-on training in Advanced Python Programming.',
      'Strengthened Python programming and analytical problem-solving skills through practical coding exercises.',
      'Implemented multiple coding assignments and projects.',
      'Applied Python concepts to develop and debug simple applications.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'GP3 Cloud Innovations (OPC) Pvt. Ltd.',
    location: 'Ernakulam, Kerala',
    date: 'June 2025',
    points: [
      'Developed a Simple Personal Finance Advisor application as part of internship training.',
      'Applied software development principles to design and implement functional application features.',
      'Collaborated in a team environment while gaining practical exposure to the software development lifecycle.',
      'Tested and debugged the application to improve functionality and performance.',
    ],
  },
]

export const certifications = [
  {
    title: 'Advanced Programming in Python',
    type: 'Internship',
  },
  {
    title: 'Simple Personal Finance Advisor',
    type: 'Internship',
  },
  {
    title: 'Artificial Intelligence Certification Course',
    type: 'Certification',
  },
]
