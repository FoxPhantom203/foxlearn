// FoxLearn Course Data
// 21 courses, 43 lessons across 5 trails

const COURSES = {
  trails: {
    coding: {
      name: "Coding",
      description: "Read code, then write it — thirteen languages, no jargon wall.",
      icon: "💻",
      color: "#58cc02"
    },
    living: {
      name: "Living & endangered",
      description: "Languages with speakers who would like a few more of them.",
      icon: "🌱",
      color: "#1cb0f6"
    },
    ancient: {
      name: "Ancient",
      description: "Scripts that outlived the empires that wrote them.",
      icon: "🏛️",
      color: "#ce82ff"
    },
    invented: {
      name: "Invented",
      description: "Languages built on purpose — for dragons, and for enchantments.",
      icon: "🧙",
      color: "#ff9600"
    },
    everyday: {
      name: "Everyday",
      description: "The ones already sitting on your phone keyboard.",
      icon: "📱",
      color: "#ff4b4b"
    }
  },

  list: [
    // Coding Trail
    {
      id: "python",
      trail: "coding",
      name: "Python, gently",
      description: "Print, name things, decide.",
      difficulty: "Beginner",
      lessons: [
        { id: "python-1", name: "Hello, Python", content: "Write your first line of Python code." },
        { id: "python-2", name: "Variables", content: "Store and reuse values with variables." },
        { id: "python-3", name: "Conditionals", content: "Make decisions in your code with if statements." }
      ],
      tagline: "Start here"
    },
    {
      id: "javascript",
      trail: "coding",
      name: "JavaScript, from the browser up",
      description: "The language of every tab you open.",
      difficulty: "Beginner",
      lessons: [
        { id: "js-1", name: "Hello, JavaScript", content: "Write your first line of JavaScript." },
        { id: "js-2", name: "DOM Basics", content: "Manipulate web page elements." }
      ],
      tagline: "Beginner"
    },
    {
      id: "html-css",
      trail: "coding",
      name: "The shape of a page",
      description: "Structure first, then style.",
      difficulty: "Beginner",
      lessons: [
        { id: "html-1", name: "HTML Basics", content: "Create the structure of a web page." },
        { id: "css-1", name: "CSS Basics", content: "Add styles to your HTML elements." }
      ],
      tagline: "Beginner"
    },
    {
      id: "typescript",
      trail: "coding",
      name: "TypeScript, typed on purpose",
      description: "JavaScript with the guessing removed.",
      difficulty: "Beginner",
      lessons: [
        { id: "ts-1", name: "Type Basics", content: "Add types to your JavaScript variables." },
        { id: "ts-2", name: "Interfaces", content: "Define custom type shapes." }
      ],
      tagline: "Beginner"
    },
    {
      id: "sql",
      trail: "coding",
      name: "SQL, one question at a time",
      description: "Ask a table a question, get rows back.",
      difficulty: "Beginner",
      lessons: [
        { id: "sql-1", name: "SELECT Queries", content: "Retrieve data from a database." },
        { id: "sql-2", name: "Filtering", content: "Use WHERE to filter results." }
      ],
      tagline: "Beginner"
    },
    {
      id: "go",
      trail: "coding",
      name: "Go, without ceremony",
      description: "A small language that ships real programs.",
      difficulty: "Beginner",
      lessons: [
        { id: "go-1", name: "Hello, Go", content: "Write your first Go program." },
        { id: "go-2", name: "Packages", content: "Organize your Go code into packages." }
      ],
      tagline: "Beginner"
    },
    {
      id: "rust",
      trail: "coding",
      name: "Rust, borrowing carefully",
      description: "Fast code with the memory mistakes caught early.",
      difficulty: "Curious",
      lessons: [
        { id: "rust-1", name: "Hello, Rust", content: "Write your first Rust program." },
        { id: "rust-2", name: "Ownership", content: "Understand Rust's unique ownership model." }
      ],
      tagline: "Curious"
    },
    {
      id: "ruby",
      trail: "coding",
      name: "Ruby, read out loud",
      description: "Code that reads like a sentence.",
      difficulty: "Beginner",
      lessons: [
        { id: "ruby-1", name: "Hello, Ruby", content: "Write your first Ruby program." },
        { id: "ruby-2", name: "Blocks", content: "Use Ruby's block syntax." }
      ],
      tagline: "Beginner"
    },
    {
      id: "java",
      trail: "coding",
      name: "Java, the long-lived one",
      description: "Verbose, dependable, everywhere.",
      difficulty: "Beginner",
      lessons: [
        { id: "java-1", name: "Hello, Java", content: "Write your first Java program." },
        { id: "java-2", name: "Classes", content: "Create your first Java class." }
      ],
      tagline: "Beginner"
    },
    {
      id: "c",
      trail: "coding",
      name: "C, close to the metal",
      description: "Everything else is built on top of it.",
      difficulty: "Curious",
      lessons: [
        { id: "c-1", name: "Hello, C", content: "Write your first C program." },
        { id: "c-2", name: "Pointers", content: "Understand C's pointer system." }
      ],
      tagline: "Curious"
    },
    {
      id: "php",
      trail: "coding",
      name: "PHP, still running the web",
      description: "The language hiding behind a lot of pages.",
      difficulty: "Beginner",
      lessons: [
        { id: "php-1", name: "Hello, PHP", content: "Write your first PHP script." },
        { id: "php-2", name: "Forms", content: "Handle form submissions." }
      ],
      tagline: "Beginner"
    },
    {
      id: "shell",
      trail: "coding",
      name: "The shell, quietly powerful",
      description: "The language behind every terminal window.",
      difficulty: "Beginner",
      lessons: [
        { id: "shell-1", name: "Basic Commands", content: "Learn essential shell commands." },
        { id: "shell-2", name: "Scripts", content: "Write reusable shell scripts." }
      ],
      tagline: "Beginner"
    },
    {
      id: "swift",
      trail: "coding",
      name: "Swift, in small pieces",
      description: "The language of apps that fit in a pocket.",
      difficulty: "Beginner",
      lessons: [
        { id: "swift-1", name: "Hello, Swift", content: "Write your first Swift program." },
        { id: "swift-2", name: "Optionals", content: "Handle optional values in Swift." }
      ],
      tagline: "Beginner"
    },

    // Living & Endangered Trail
    {
      id: "hawaiian",
      trail: "living",
      name: "Hawaiian · ʻŌlelo Hawaiʻi",
      description: "A language that came back from the edge.",
      difficulty: "Beginner",
      lessons: [
        { id: "hawaiian-1", name: "Greetings", content: "Learn basic Hawaiian greetings." },
        { id: "hawaiian-2", name: "Common Phrases", content: "Essential everyday phrases." }
      ],
      tagline: "Beginner"
    },
    {
      id: "welsh",
      trail: "living",
      name: "Welsh · Cymraeg",
      description: "Older than English, still at the shop.",
      difficulty: "Beginner",
      lessons: [
        { id: "welsh-1", name: "Greetings", content: "Learn basic Welsh greetings." },
        { id: "welsh-2", name: "Common Phrases", content: "Essential everyday phrases." }
      ],
      tagline: "Beginner"
    },

    // Ancient Trail
    {
      id: "latin",
      trail: "ancient",
      name: "Latin, the long-lasting one",
      description: "Nobody's first language for 1,400 years.",
      difficulty: "Beginner",
      lessons: [
        { id: "latin-1", name: "Basic Phrases", content: "Learn common Latin phrases." },
        { id: "latin-2", name: "Nouns and Verbs", content: "Understand basic Latin grammar." }
      ],
      tagline: "Beginner"
    },
    {
      id: "church-slavonic",
      trail: "ancient",
      name: "Church Slavonic",
      description: "The language of the oldest Slavic books.",
      difficulty: "Curious",
      lessons: [
        { id: "church-slavonic-1", name: "Alphabet", content: "Learn the Cyrillic alphabet." },
        { id: "church-slavonic-2", name: "Common Words", content: "Basic vocabulary." }
      ],
      tagline: "Curious"
    },

    // Invented Trail
    {
      id: "enchanting-table",
      trail: "invented",
      name: "The Enchanting Table",
      description: "The runes floating around a bookshelf.",
      difficulty: "Puzzle",
      lessons: [
        { id: "enchanting-1", name: "Basic Runes", content: "Decode the first runes." },
        { id: "enchanting-2", name: "Advanced Runes", content: "Master the enchanting table." }
      ],
      tagline: "Puzzle"
    },
    {
      id: "dovahzul",
      trail: "invented",
      name: "Dovahzul, the dragon tongue",
      description: "Shouted, not spoken.",
      difficulty: "Puzzle",
      lessons: [
        { id: "dovahzul-1", name: "Dragon Alphabet", content: "Learn the Dovahzul script." },
        { id: "dovahzul-2", name: "Shouts", content: "Master dragon shouts." }
      ],
      tagline: "Puzzle"
    },

    // Everyday Trail
    {
      id: "spanish",
      trail: "everyday",
      name: "Spanish, on your keyboard",
      description: "The one already in your phone's keyboard list.",
      difficulty: "Beginner",
      lessons: [
        { id: "spanish-1", name: "Greetings", content: "Learn basic Spanish greetings." },
        { id: "spanish-2", name: "Common Phrases", content: "Essential everyday phrases." }
      ],
      tagline: "Beginner"
    },
    {
      id: "hiragana",
      trail: "everyday",
      name: "Hiragana, five at a time",
      description: "The kana your phone keyboard starts with.",
      difficulty: "Beginner",
      lessons: [
        { id: "hiragana-1", name: "First Five", content: "Learn the first five hiragana characters." },
        { id: "hiragana-2", name: "Next Five", content: "Learn the next five hiragana characters." }
      ],
      tagline: "Beginner"
    }
  ]
};

// Helper functions
function getCourseById(courseId) {
  return COURSES.list.find(c => c.id === courseId);
}

function getLessonById(lessonId) {
  for (const course of COURSES.list) {
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (lesson) return { course, lesson };
  }
  return null;
}

function getCoursesByTrail(trailId) {
  return COURSES.list.filter(c => c.trail === trailId);
}

function getTrailById(trailId) {
  return COURSES.trails[trailId];
}

// Stats
function getTotalCourses() {
  return COURSES.list.length;
}

function getTotalLessons() {
  return COURSES.list.reduce((sum, course) => sum + course.lessons.length, 0);
}
