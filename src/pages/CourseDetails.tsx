
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CourseDetail.css';


// Course details object
const courseDetails: Record<string, { title: string; description: string; rating: string; details: string }> = {
  'full-stack-dev': {
    title: 'IBM Full Stack Developer Professional Certificate',
    description: 'Prepare for a career as a full stack developer. Build job-ready skills – and must-have AI skills – for an in-demand career. Earn a credential from IBM.',
    rating: '4.5 (6.6k)',
    details: 'Learn the most up-to-date practical skills...'
  },
  'ai-engineering': {
    title: 'IBM AI Engineering Professional Certificate',
    description: 'Learn how to build AI-powered applications...',
    rating: '4.5 (6.4k)',
    details: 'Master AI technologies with real-world applications...'
  },
  'google-cybersecurity': {
    title: 'Google Cybersecurity Professional Certificate',
    description: 'Master the skills required to excel in cybersecurity...',
    rating: '4.5 (30k)',
    details: 'Learn industry-leading practices in cybersecurity...'
  },
  'google-data-analytics': {
    title: 'Google Data Analytics Professional Certificate',
    description: 'Master the skills required to excel in data analytics...',
    rating: '4.5 (30k)',
    details: 'Learn industry-leading practices in data analysis...'
  },
  'data-science': {
    title: 'IBM Data Science Professional Certificate',
    description: 'Gain the skills needed to become a data scientist...',
    rating: '4.7 (5.2k)',
    details: 'Explore data visualization, analysis, and machine learning...'
  },
  'cloud-computing': {
    title: 'IBM Cloud Computing Professional Certificate',
    description: 'Learn the essentials of cloud computing...',
    rating: '4.6 (2.9k)',
    details: 'Understand cloud architecture, services, and solutions...'
  },
  'digital-marketing': {
    title: 'Google Digital Marketing & E-commerce Certificate',
    description: 'Master digital marketing strategies and e-commerce...',
    rating: '4.8 (1.8k)',
    details: 'Learn SEO, social media marketing, and analytics...'
  },
  'ux-design': {
    title: 'Google UX Design Professional Certificate',
    description: 'Learn the foundations of UX design...',
    rating: '4.9 (2.1k)',
    details: 'Create user-centered designs and prototypes...'
  },
  'python-programming': {
    title: 'Python for Everybody Specialization',
    description: 'Learn programming fundamentals using Python...',
    rating: '4.6 (8.4k)',
    details: 'Understand data structures, web scraping, and databases...'
  },
  'mobile-app-dev': {
    title: 'Android App Development with Kotlin',
    description: 'Build Android apps using Kotlin...',
    rating: '4.7 (3.5k)',
    details: 'Learn mobile app design, development, and publishing...'
  },
  'devops': {
    title: 'DevOps Foundations',
    description: 'Get an introduction to DevOps principles and practices...',
    rating: '4.5 (1.2k)',
    details: 'Learn about continuous integration, deployment, and automation...'
  },
  'test-behavior-development': {
    title: 'Test and Behavior Driven Development',
    description: 'Get an introduction to T principles and practices...',
    rating: '4.5 (1.2k)',
    details: 'Learn about continuous integration, deployment, and automation...'
  },
  'generative-ai-software-dev': {
    title: 'Generative AI for Software Development',
    description: 'Explore the capabilities of generative AI in enhancing software development processes...',
    rating: '4.6 (1.5k)',
    details: 'Learn how to leverage generative AI tools for coding and testing...'
  },
  'ibm-business-intelligence': {
    title: 'IBM Business Intelligence Professional Certificate',
    description: 'Understand the fundamentals of business intelligence and analytics...',
    rating: '4.7 (1.1k)',
    details: 'Learn how to analyze data to support decision-making...'
  },
  'machine-learning': {
    title: 'Machine Learning',
    description: 'Discover the principles of machine learning and its applications...',
    rating: '4.8 (2.0k)',
    details: 'Learn about algorithms, supervised and unsupervised learning...'
  },
  'programming-languages-part-b': {
    title: 'Programming Languages, Part B',
    description: 'Deepen your understanding of programming languages...',
    rating: '4.6 (1.3k)',
    details: 'Explore advanced concepts and language paradigms...'
  },
  'advanced-learning-algorithms': {
    title: 'Advanced Learning Algorithms',
    description: 'Dive into advanced algorithms and their applications...',
    rating: '4.5 (900)',
    details: 'Learn about optimization techniques and complexity analysis...'
  },
  'algorithms-part-ii': {
    title: 'Algorithms, Part II',
    description: 'Build upon your knowledge of algorithms...',
    rating: '4.7 (1.8k)',
    details: 'Focus on graph and string processing algorithms...'
  },
  'programming-languages-part-c': {
    title: 'Programming Languages, Part C',
    description: 'Continue your exploration of programming languages...',
    rating: '4.6 (1.1k)',
    details: 'Study language design and type systems...'
  },
  'foundations-of-data-structures-algorithms': {
    title: 'Foundation of Data Structures and Algorithms',
    description: 'Learn the fundamental concepts of data structures and algorithms...',
    rating: '4.6 (1.4k)',
    details: 'Explore arrays, lists, stacks, queues, and algorithm analysis...'
  },
  'algorithms-to-take-your-programming-to-next-level': {
    title: 'Algorithms to Take Your Programming to The Next Level',
    description: 'Enhance your programming skills with advanced algorithms...',
    rating: '4.7 (1.9k)',
    details: 'Focus on sorting, searching, and dynamic programming techniques...'
  },
  'mathematics-for-machine-learning-data-science': {
    title: 'Mathematics for Machine Learning and Data Science',
    description: 'Understand the mathematical foundations essential for machine learning...',
    rating: '4.5 (1.8k)',
    details: 'Cover linear algebra, calculus, and statistics...'
  },
  'java-programming-software-engineering-fundamentals': {
    title: 'Java Programming and Software Engineering Fundamentals',
    description: 'Gain a solid foundation in Java programming and software engineering...',
    rating: '4.6 (1.7k)',
    details: 'Learn object-oriented programming, software development lifecycle, and best practices...'
  },
  'c-for-everyone-structured-programming': {
    title: 'C for Everyone: Structured Programming',
    description: 'Master the fundamentals of programming in C...',
    rating: '4.5 (1.2k)',
    details: 'Explore control structures, functions, and data management...'
  },
  'cloud-computing-concepts-part-1': {
    title: 'Cloud Computing Concepts, Part 1',
    description: 'Introduction to the fundamentals of cloud computing...',
    rating: '4.6 (1.0k)',
    details: 'Learn about cloud architecture, services, and deployment models...'
  },
  'matrix-algebra-for-engineers': {
    title: 'Matrix Algebra For Engineers',
    description: 'Quickly grasp key concepts in math and logic...',
    rating: '4.4 (800)',
    details: 'Cover essential math skills and logical reasoning techniques...'
  },
  'vectors-calculus-for-engineers': {
    title: 'Vectors Calculus for Engineers',
    description: 'Study vector calculus and its applications in engineering...',
    rating: '4.7 (1.5k)',
    details: 'Explore gradient, divergence, curl, and line integrals...'
  },
  'single-variables-part-1-functions': {
    title: 'Single Variables Part 1 - Functions',
    description: 'Understand the basics of functions in single-variable calculus...',
    rating: '4.5 (1.3k)',
    details: 'Learn about function properties, limits, and continuity...'
  },
  'advanced-statistics-for-data-science': {
    title: 'Advanced Statistics for Data Science',
    description: 'Dive deeper into statistical methods for data analysis...',
    rating: '4.6 (1.2k)',
    details: 'Cover hypothesis testing, regression analysis, and statistical inference...'
  },
  'introduction-to-complex-analysis': {
    title: 'Introduction to Complex Analysis',
    description: 'Explore the fundamentals of complex analysis...',
    rating: '4.5 (900)',
    details: 'Learn about complex functions, integrals, and residues...'
  },
  'bachelor-of-science-computer-science': {
    title: 'Bachelor of Science in Computer Science',
    description: 'A comprehensive program covering core computer science topics...',
    rating: '4.8 (2.2k)',
    details: 'Focus on programming, algorithms, data structures, and theory...'
  },
  'international-foundation-program-computer-science': {
    title: 'International Foundation Program for Computer Science',
    description: 'Prepare for undergraduate studies in computer science...',
    rating: '4.6 (1.4k)',
    details: 'Cover foundational topics in computing, mathematics, and study skills...'
  },
  'msc-data-science-statistics': {
    title: 'MSc Data Science (Statistics)',
    description: 'Advanced study of data science with a focus on statistical methods...',
    rating: '4.7 (1.6k)',
    details: 'Learn about data analysis, statistical modeling, and machine learning...'
  },
  'dynamic-programming-greedy-algorithms': {
    title: 'Dynamic Programming, Greedy Algorithms',
    description: 'Master dynamic programming and greedy algorithm techniques...',
    rating: '4.6 (1.5k)',
    details: 'Solve complex problems efficiently using advanced strategies...'
  },
  'more-algorithms-to-take-your-programming-next-level': {
    title: 'More Algorithms to Take Your Programming to the Next Level',
    description: 'Further enhance your programming capabilities with more algorithms...',
    rating: '4.6 (1.8k)',
    details: 'Focus on advanced topics and problem-solving techniques...'
  },
  'introduction-to-applied-cryptography': {
    title: 'Introduction to Applied Cryptography',
    description: 'Learn the principles of cryptography and its practical applications...',
    rating: '4.5 (1.2k)',
    details: 'Explore encryption methods, hashing, and security protocols...'
  },
  'foundation-for-data-science': {
    title: 'Foundation For Data Science',
    description: 'Gain essential skills for a career in data science...',
    rating: '4.7 (1.4k)',
    details: 'Learn about data manipulation, visualization, and machine learning basics...'
  },
  'computation-thinking-for-problem-solving': {
    title: 'Computation Thinking for Problem Solving',
    description: 'Develop computational thinking skills to solve complex problems...',
    rating: '4.6 (1.0k)',
    details: 'Focus on algorithms, programming concepts, and logical reasoning...'
  },
  'introduction-to-logic': {
    title: 'Introduction to Logic',
    description: 'Learn the fundamentals of logic and reasoning...',
    rating: '4.5 (1.1k)',
    details: 'Explore logical arguments, proofs, and critical thinking skills...'
  },
'script-writing': {
  title: 'Script Writing',
  description: 'Learn the fundamentals of writing scripts for film and television...',
  rating: '4.6 (1.3k)',
  details: 'Explore character development, dialogue, and plot structure...'
},
'design': {
  title: 'Design',
  description: 'Understand the principles of design and its applications...',
  rating: '4.7 (1.5k)',
  details: 'Learn about layout, color theory, typography, and more...'
},
'photography-basics-beyond': {
  title: 'Photography Basics and Beyond',
  description: 'Master the basics of photography and advance your skills...',
  rating: '4.8 (2.1k)',
  details: 'Explore composition, lighting, and digital editing techniques...'
},
'sharpened-visions': {
  title: 'Sharpened Visions: A Poetry Workshop',
  description: 'Improve your poetry writing skills through detailed analysis and critique...',
  rating: '4.7 (1.2k)',
  details: 'Learn how to create vivid imagery and experiment with form...'
},
'film-images-historical-interpretation-20th-century': {
  title: 'Film, Images & Historical Interpretation in the 20th Century',
  description: 'Examine the role of film and photography in interpreting 20th-century history...',
  rating: '4.5 (1.0k)',
  details: 'Explore key historical moments through visual media...'
},
'modern-contemporary-art-design': {
  title: 'Modern and Contemporary Art and Design',
  description: 'Discover modern and contemporary art movements and their cultural impact...',
  rating: '4.6 (1.4k)',
  details: 'Learn about abstract expressionism, minimalism, and postmodernism...'
},
'modern-arts-ideas': {
  title: 'Modern Arts & Ideas',
  description: 'Explore modern art and the ideas that shaped it...',
  rating: '4.7 (1.1k)',
  details: 'Study influential artists and movements from the 19th to the 21st century...'
},
'fashion-as-design': {
  title: 'Fashion as Design',
  description: 'Learn how fashion design shapes and reflects culture...',
  rating: '4.8 (1.6k)',
  details: 'Understand the processes behind garment creation and style evolution...'
},
'in-the-studio-abstract-painting': {
  title: 'In the Studio: Abstract Painting',
  description: 'Explore abstract painting techniques and the creative process...',
  rating: '4.6 (1.2k)',
  details: 'Experiment with color, shape, and composition in your artwork...'
},
'ba-liberal-studies': {
  title: 'Bachelor of Arts in Liberal Studies',
  description: 'A broad-based education in humanities, arts, and social sciences...',
  rating: '4.8 (2.0k)',
  details: 'Study a wide range of subjects, from literature to sociology...'
},
'bachelor-applied-arts-science': {
  title: 'Bachelor of Applied Arts and Science',
  description: 'Develop practical skills and knowledge in applied arts and sciences...',
  rating: '4.7 (1.4k)',
  details: 'Gain experience in creative disciplines alongside technical education...'
},
'ma-education-educational-technology': {
  title: 'Master of Arts in Education - Educational Technology',
  description: 'Focus on the integration of technology in education...',
  rating: '4.6 (1.3k)',
  details: 'Learn about instructional design, e-learning, and digital pedagogy...'
},
'modern-middle-east-part-1': {
  title: 'The Emergence of the Modern Middle East (Part 1)',
  description: 'Examine the historical forces that shaped the modern Middle East...',
  rating: '4.5 (1.1k)',
  details: 'Study political, social, and cultural changes from the 19th century onward...'
},
'cosmopolitan-medieval-arabic-world': {
  title: 'The Cosmopolitan Medieval Arabic World',
  description: 'Explore the rich history and cultural achievements of the medieval Arabic world...',
  rating: '4.7 (1.3k)',
  details: 'Learn about science, art, and philosophy during this era...'
},
'fall-rise-jerusalem': {
  title: 'The Fall and Rise of Jerusalem',
  description: 'Study the history of Jerusalem through its periods of conflict and renewal...',
  rating: '4.6 (1.4k)',
  details: 'Discover key events that shaped the city over millennia...'
},
'history-modern-israel-part-1': {
  title: 'The History of Modern Israel - Part I',
  description: 'Trace the history of Israel from its founding to the present day...',
  rating: '4.5 (1.2k)',
  details: 'Explore political, social, and cultural developments in modern Israel...'
},
'bibles-prehistory-purpose-political-future': {
  title: 'The Bible\'s Prehistory, Purpose, and Political Future',
  description: 'Uncover the origins and long-term impact of the Bible...',
  rating: '4.5 (1.0k)',
  details: 'Examine the Bible\'s role in shaping religious and political thought...'
},
'contemporary-history': {
  title: 'Contemporary History',
  description: 'Analyze key events and trends in recent global history...',
  rating: '4.6 (1.3k)',
  details: 'Focus on major political, economic, and cultural developments...'
},
'feminism-social-justice': {
  title: 'Feminism and Social Justice',
  description: 'Examine the history and impact of feminist movements...',
  rating: '4.7 (1.1k)',
  details: 'Learn about gender equality, activism, and intersectionality...'
},
'film-images': {
  title: 'Film, Images & Historical Interpretation in the 20th Century',
  description: 'Explore the relationship between film, imagery, and historical narratives...',
  rating: '4.7 (1.3k)',
  details: 'Analyze how visual media shape our understanding of history and culture...'
},
'modern-world-part-2': {
  title: 'The Modern World, Part Two',
  description: 'Explore key events that shaped the modern world after World War II...',
  rating: '4.6 (1.0k)',
  details: 'Study decolonization, the Cold War, and globalization...'
},
'russian-history': {
  title: 'Russian History',
  description: 'Study the major historical events that shaped Russia...',
  rating: '4.7 (1.4k)',
  details: 'Learn about Russia\'s political, social, and cultural transformations...'
},
'ancient-greeks': {
  title: 'The Ancient Greeks',
  description: 'Explore the history, culture, and achievements of the ancient Greeks...',
  rating: '4.8 (1.8k)',
  details: 'Study Greek philosophy, art, politics, and society...'
},
'introduction-ancient-egypt-civilization': {
  title: 'Introduction to Ancient Egypt and its Civilization',
  description: 'Learn about the history, culture, and achievements of Ancient Egypt...',
  rating: '4.7 (1.5k)',
  details: 'Explore the pyramids, pharaohs, and religious practices...'
},
'wonders-ancient-egypt': {
  title: 'Wonders of Ancient Egypt',
  description: 'Discover the architectural and artistic wonders of Ancient Egypt...',
  rating: '4.7 (1.4k)',
  details: 'Learn about the construction of the pyramids, temples, and monuments...'
},
'changing-landscape-ancient-rome': {
  title: 'The Changing Landscape of Ancient Rome',
  description: 'Study the architectural and social changes in ancient Rome...',
  rating: '4.6 (1.2k)',
  details: 'Examine the impact of emperors and political change on the Roman landscape...'
},
'greek-roman-mythology': {
  title: 'Greek and Roman Mythology',
  description: 'Explore the myths of Ancient Greece and Rome and their cultural significance...',
  rating: '4.8 (2.0k)',
  details: 'Learn about gods, heroes, and epic tales that shaped ancient cultures...'
},
'roman-art-archaeology': {
  title: 'Roman Art and Archaeology',
  description: 'Examine the art and archaeology of Ancient Rome...',
  rating: '4.6 (1.3k)',
  details: 'Explore Roman architecture, sculpture, and public spaces...'
},
'ui-design': {
  title: 'Introduction to UI Design',
  description: 'Learn the basics of user interface (UI) design...',
  rating: '4.5 (1.6k)',
  details: 'Focus on wireframing, layout, and design principles for digital products...'
},
'interaction-design': {
  title: 'Interaction Design',
  description: 'Discover the principles of interaction design and how to create user-friendly digital experiences...',
  rating: '4.7 (1.3k)',
  details: 'Learn about user research, prototyping, and usability testing...'
},
'photograph-basics-and-beyond': {
    title: 'Photograph Basics and Beyond',
    description: 'Master the essential skills of photography and explore advanced techniques...',
    rating: '4.6 (1.2k)',
    details: 'Learn about camera settings, composition, editing, and more...'
  },
'introducing-to-imagemaking': {
  title: 'Introducing to Imagemaking',
  description: 'Explore the fundamentals of imagemaking and visual storytelling...',
  rating: '4.6 (1.2k)',
  details: 'Learn about composition, lighting, and techniques in imagemaking...'
},
'seeing-through-photographs': {
  title: 'Seeing Through Photographs',
  description: 'Understand the power of photography in conveying narratives...',
  rating: '4.5 (1.0k)',
  details: 'Explore various photography styles and their impact on perception...'
},
'modern-american-poetry': {
  title: 'Modern American Poetry',
  description: 'Dive into the world of modern American poetry and its key figures...',
  rating: '4.7 (1.3k)',
  details: 'Analyze poems and understand their themes and historical contexts...'
},
'modern-contemporary-african-poetry': {
  title: 'Modern & Contemporary African Poetry',
  description: 'Explore the richness of modern and contemporary African poetry...',
  rating: '4.6 (1.1k)',
  details: 'Study poets and their contributions to global literature...'
},
'transmedia-storytelling': {
  title: 'Transmedia Storytelling',
  description: 'Learn how to tell stories across multiple platforms...',
  rating: '4.8 (1.5k)',
  details: 'Explore the principles of transmedia narratives and audience engagement...'
},
'creative-writing': {
  title: 'Creative Writing',
  description: 'Unleash your creativity through various writing techniques...',
  rating: '4.7 (1.8k)',
  details: 'Focus on storytelling, character development, and style...'
},
'music-production': {
  title: 'Music Production',
  description: 'Master the art of producing music in a digital environment...',
  rating: '4.6 (1.4k)',
  details: 'Learn about mixing, mastering, and sound design...'
},
'developing-your-musicianship': {
  title: 'Developing Your Musicianship',
  description: 'Enhance your musical skills and understanding...',
  rating: '4.5 (1.1k)',
  details: 'Explore ear training, improvisation, and performance techniques...'
},
'fundamentals-of-music-theory': {
  title: 'Fundamentals of Music Theory',
  description: 'Gain a solid foundation in music theory...',
  rating: '4.7 (1.6k)',
  details: 'Learn about notes, scales, chords, and rhythmic patterns...'
},
'getting-started-with-music-theory': {
  title: 'Getting Started With Music Theory',
  description: 'Begin your journey in understanding music theory...',
  rating: '4.6 (1.3k)',
  details: 'Cover the basics of music notation, scales, and harmony...'
},
'songwriting-writing-the-lyrics': {
  title: 'Songwriting: Writing the Lyrics',
  description: 'Learn the art of crafting meaningful song lyrics...',
  rating: '4.8 (1.7k)',
  details: 'Explore lyrical themes, rhyme schemes, and storytelling in music...'
},
'the-modern-and-the-postmodern-part-1': {
  title: 'The Modern and the Postmodern (Part 1)',
  description: 'Examine the key concepts and thinkers of modern and postmodern thought...',
  rating: '4.7 (1.4k)',
  details: 'Explore the impact of modernism and postmodernism on contemporary culture...'
},
'intellectual-humility-science': {
  title: 'Intellectual Humility: Science',
  description: 'Learn about the importance of intellectual humility in scientific inquiry...',
  rating: '4.5 (1.1k)',
  details: 'Understand how humility can enhance critical thinking and collaboration...'
},
'know-thyself-value-limits-self-knowledge': {
  title: 'Know Thyself - The Value and Limits of Self-Knowledge: The Examined Life',
  description: 'Delve into the concept of self-knowledge and its implications for personal growth...',
  rating: '4.6 (1.2k)',
  details: 'Explore philosophical perspectives on the examined life and self-reflection...'
},
'intellectual-humanity-practice': {
  title: 'Intellectual Humanity: Practice',
  description: 'Engage in practices that promote intellectual humility and open-mindedness...',
  rating: '4.5 (1.0k)',
  details: 'Learn techniques to foster respectful dialogue and understanding in discussions...'
},
'mind-of-the-universe': {
  title: 'Mind of the Universe',
  description: 'Explore philosophical questions about consciousness and the universe...',
  rating: '4.7 (1.3k)',
  details: 'Investigate theories of mind and their implications for understanding reality...'
},
'philosophy-science-religion': {
  title: 'Philosophy, Science and Religion',
  description: 'Examine the relationships and tensions between philosophy, science, and religion...',
  rating: '4.6 (1.4k)',
  details: 'Discuss key debates and questions surrounding faith and reason...'
},
'philosophy-and-the-science': {
  title: 'Philosophy and the Science',
  description: 'Analyze the philosophical underpinnings of scientific inquiry...',
  rating: '4.6 (1.2k)',
  details: 'Explore issues related to scientific methods, ethics, and implications...'
},
'luther-and-the-west': {
  title: 'Luther and the West',
  description: 'Study the impact of Martin Luther on Western thought and culture...',
  rating: '4.7 (1.5k)',
  details: 'Explore the Reformation’s influence on religion, politics, and philosophy...'
},
'revolutionary-idea': {
  title: 'Revolutionary Idea',
  description: 'Investigate the concept of revolutionary ideas and their historical significance...',
  rating: '4.5 (1.1k)',
  details: 'Examine how ideas have sparked social and political change throughout history...'
},
'love-as-force-for-social-justice': {
  title: 'Love as a Force for Social Justice',
  description: 'Explore the role of love in social justice movements...',
  rating: '4.8 (1.6k)',
  details: 'Discuss how love can inspire action and foster community change...'
},
'google-project-management': {
  title: 'Google Project Management',
  description: 'Gain essential project management skills to lead projects from start to finish...',
  rating: '4.8 (9.3k)',
  details: 'Learn project planning, risk management, and agile methodologies...'
},
'ai-for-business': {
  title: 'AI For Business',
  description: 'Learn how artificial intelligence is transforming industries and businesses...',
  rating: '4.7 (5.4k)',
  details: 'Understand AI applications in business, from automation to decision-making...'
},
'foundation-of-digital-marketing': {
  title: 'Foundation of Digital Marketing',
  description: 'Master the fundamentals of digital marketing, including SEO, social media, and more...',
  rating: '4.6 (4.1k)',
  details: 'Learn digital marketing strategies to grow your business online...'
},
'entrepreneurship': {
  title: 'Entrepreneurship',
  description: 'Learn the key skills and strategies to launch and grow a successful business...',
  rating: '4.7 (3.2k)',
  details: 'Explore innovation, business planning, and risk management...'
},
'business-strategy': {
  title: 'Business Strategy',
  description: 'Develop effective business strategies to stay competitive in today’s market...',
  rating: '4.8 (2.8k)',
  details: 'Learn about competitive advantage, growth strategies, and strategic thinking...'
},
'entrepreneurship-growing-your-business': {
  title: 'Entrepreneurship: Growing Your Business',
  description: 'Understand the principles of scaling a business for long-term success...',
  rating: '4.7 (2.5k)',
  details: 'Learn growth strategies, financial planning, and market expansion techniques...'
},
'leading-modern-day-business': {
  title: 'Leading the Modern Day Business',
  description: 'Master leadership skills for managing modern businesses in a fast-paced environment...',
  rating: '4.6 (3.0k)',
  details: 'Explore decision-making, team management, and leadership principles...'
},
'mba': {
  title: 'Master of Business Administration',
  description: 'Earn your MBA to build advanced business skills and accelerate your career...',
  rating: '4.9 (10.1k)',
  details: 'Learn finance, marketing, operations, and leadership skills...'
},
'msc-management': {
  title: 'MSc Management',
  description: 'Gain expertise in management and leadership for today’s business environment...',
  rating: '4.8 (5.5k)',
  details: 'Focus on management theory, organizational behavior, and leadership skills...'
},
'bachelor-science-marketing': {
  title: 'Bachelor of Science in Marketing',
  description: 'Develop the skills needed for a successful marketing career...',
  rating: '4.7 (4.0k)',
  details: 'Learn about consumer behavior, digital marketing, and brand management...'
},
'msc-accountancy': {
  title: 'Master of Science in Accountancy',
  description: 'Prepare for a career in accounting with advanced knowledge of financial reporting...',
  rating: '4.8 (3.9k)',
  details: 'Study auditing, taxation, and financial analysis...'
},
'business-financial-modeling': {
  title: 'Business and Financial Modeling',
  description: 'Learn how to build financial models for better business decision-making...',
  rating: '4.6 (2.4k)',
  details: 'Understand financial forecasting, budgeting, and valuation...'
},
'ask-questions-make-data-driven-decisions': {
  title: 'Ask Questions to Make Data-Driven Decisions',
  description: 'Master the art of data-driven decision-making for business success...',
  rating: '4.7 (2.1k)',
  details: 'Learn to ask the right questions to interpret data and drive strategic decisions...'
},
'excel-skills-for-business': {
  title: 'Excel Skills for Business',
  description: 'Learn essential Excel skills for business applications, from basics to advanced...',
  rating: '4.8 (6.2k)',
  details: 'Focus on data analysis, visualization, and financial modeling using Excel...'
},
'social-media-management': {
  title: 'Social Media Management',
  description: 'Develop the skills to manage social media platforms and grow online presence...',
  rating: '4.7 (3.3k)',
  details: 'Learn social media strategies, analytics, and content creation...'
},
'introduction-to-finance-accounting': {
  title: 'Introduction to Finance and Accounting',
  description: 'Understand the basics of finance and accounting for business...',
  rating: '4.6 (3.8k)',
  details: 'Learn financial principles, balance sheets, and income statements...'
},
'introduction-to-corporate-finance': {
  title: 'Introduction to Corporate Finance',
  description: 'Learn the fundamentals of corporate finance and financial decision-making...',
  rating: '4.6 (2.7k)',
  details: 'Explore capital budgeting, financial statements, and investment decisions...'
},
'introduction-to-personal-finance': {
  title: 'Introduction to Personal Finance',
  description: 'Master the basics of personal finance, including budgeting and investing...',
  rating: '4.7 (4.4k)',
  details: 'Learn about saving, debt management, and retirement planning...'
},
'introduction-to-finance-basics': {
  title: 'Introduction to Finance: The Basics',
  description: 'Understand the essential principles of finance for individuals and businesses...',
  rating: '4.6 (3.6k)',
  details: 'Learn about financial markets, investment, and risk management...'
},
'financing-for-startup-business': {
  title: 'Financing for Startup Business',
  description: 'Learn how to secure funding and manage finances for your startup...',
  rating: '4.8 (2.9k)',
  details: 'Explore venture capital, crowdfunding, and financial planning...'
},
'bookkeeping': {
  title: 'Bookkeeping',
  description: 'Master the essentials of bookkeeping for accurate financial record-keeping...',
  rating: '4.6 (2.1k)',
  details: 'Learn about accounting principles, financial statements, and ledgers...'
},
'business-foundations': {
  title: 'Business Foundations',
  description: 'Learn the fundamental concepts and skills needed to run a business...',
  rating: '4.8 (5.6k)',
  details: 'Understand key business concepts such as marketing, finance, and management...'
},
'strategic-leadership-management': {
  title: 'Strategic Leadership and Management',
  description: 'Develop strategic leadership skills to manage and grow your organization...',
  rating: '4.7 (3.5k)',
  details: 'Learn about strategy development, leadership, and organizational management...'
},
'product-manager': {
  title: 'Product Manager',
  description: 'Learn the key skills and knowledge required to become a successful product manager...',
  rating: '4.6 (2.9k)',
  details: 'Understand product development, roadmaps, and stakeholder management...'
},
'human-resource': {
  title: 'Human Resource',
  description: 'Master the skills needed to manage human resources effectively...',
  rating: '4.7 (3.1k)',
  details: 'Explore recruitment, talent management, and employee relations...'
},
'marketing-analytics': {
  title: 'Marketing Analytics',
  description: 'Learn how to measure and analyze marketing performance using data...',
  rating: '4.7 (2.8k)',
  details: 'Understand key metrics, tools, and techniques for marketing analysis...'
},
'brand-management': {
  title: 'Brand Management',
  description: 'Develop the skills to manage and grow successful brands...',
  rating: '4.6 (3.2k)',
  details: 'Learn about brand identity, positioning, and consumer perception...'
},
'strategic-management': {
  title: 'Strategic Management',
  description: 'Gain expertise in strategic management for long-term business success...',
  rating: '4.7 (3.6k)',
  details: 'Learn how to formulate and implement effective business strategies...'
},
'construction-management': {
  title: 'Construction Management',
  description: 'Learn how to manage construction projects from start to finish...',
  rating: '4.7 (2.3k)',
  details: 'Explore project management, budgeting, and construction techniques...'
},
'it-project-manager': {
  title: 'IT Project Manager',
  description: 'Develop the skills to manage IT projects and lead technology teams...',
  rating: '4.6 (2.7k)',
  details: 'Learn project management methodologies and IT-specific best practices...'
},
'leading-people-and-teams': {
  title: 'Leading People and Teams',
  description: 'Master leadership skills to effectively manage and motivate teams...',
  rating: '4.8 (4.4k)',
  details: 'Learn communication, conflict resolution, and performance management...'
},
'strategic-leadership': {
  title: 'Strategic Leadership and Management',
  description: 'Develop strategic leadership skills to manage and grow your organization...',
  rating: '4.7 (3.5k)',
  details: 'Learn about strategy development, leadership, and organizational management...'
}

};


function CourseDetails() {
  const { courseId } = useParams<{ courseId: string }>(); 

  if (!courseId || !courseDetails[courseId]) {
    // Check if courseId exists in courseDetails
    return <div>Course not found</div>;
  }

  const course = courseDetails[courseId];

  // Return the JSX directly from the CourseDetails function
  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>⭐ {course.rating}</p>
      <h2>What you'll learn</h2>
      <p>{course.details}</p> 
      <div>
        <Link to="/learn" className="button">Enroll for free</Link>
      </div>
    </div>
  );
}

export default CourseDetails;