export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Course {
  code: string;
  title: string;
  description: string;
  questions: Question[];
}

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Get 40 random questions from a course
export const getRandomQuestions = (courseCode: string, count: number = 40): Question[] => {
  const course = courses.find((c) => c.code === courseCode);
  if (!course) return [];
  const shuffled = shuffleArray(course.questions);
  return shuffled.slice(0, count);
};

export const courses: Course[] = [
  {
    code: "GST 111",
    title: "Use of English",
    description: "Communication in English for academic purposes",
    questions: [
      { id: 1, question: "Which of the following is NOT a type of sentence?", options: ["Declarative", "Interrogative", "Exclamatory", "Narrative"], correctAnswer: 3 },
      { id: 2, question: "A word that modifies a verb is called a/an ___", options: ["Adjective", "Adverb", "Pronoun", "Preposition"], correctAnswer: 1 },
      { id: 3, question: "The study of meaning in language is known as ___", options: ["Syntax", "Phonology", "Semantics", "Morphology"], correctAnswer: 2 },
      { id: 4, question: "Which punctuation mark is used to show possession?", options: ["Comma", "Apostrophe", "Semicolon", "Colon"], correctAnswer: 1 },
      { id: 5, question: "A clause that can stand alone as a sentence is called ___", options: ["Subordinate clause", "Independent clause", "Relative clause", "Adverbial clause"], correctAnswer: 1 },
      { id: 6, question: "The word 'beautiful' is an example of ___", options: ["Noun", "Verb", "Adjective", "Adverb"], correctAnswer: 2 },
      { id: 7, question: "Which of these is a conjunction?", options: ["However", "Beautiful", "Quickly", "Running"], correctAnswer: 0 },
      { id: 8, question: "A group of words without a finite verb is called ___", options: ["Clause", "Phrase", "Sentence", "Paragraph"], correctAnswer: 1 },
      { id: 9, question: "The passive voice of 'She writes letters' is ___", options: ["Letters are written by her", "Letters were written by her", "Letters is written by her", "Letters has been written by her"], correctAnswer: 0 },
      { id: 10, question: "Which tense expresses an action happening now?", options: ["Past tense", "Future tense", "Present continuous", "Past perfect"], correctAnswer: 2 },
    ],
  },
  {
    code: "BUS 101",
    title: "Introduction to Business",
    description: "Comprehensive set covering ownership forms, management, and marketing.",
    questions: [
      { id: 1, question: "A business owned and operated by one person is a:", options: ["Partnership", "Corporation", "Sole Proprietorship", "Cooperative"], correctAnswer: 2 },
      { id: 2, question: "In a partnership, the liability of the partners is generally:", options: ["Limited", "Unlimited", "Fixed", "Zero"], correctAnswer: 1 },
      { id: 3, question: "The document that governs the internal operations of a company is the:", options: ["Memorandum of Association", "Articles of Association", "Partnership Deed", "Certificate"], correctAnswer: 1 },
      { id: 4, question: "The acronym SWOT stands for:", options: ["Strengths, Weaknesses, Operations, Threats", "Strengths, Weaknesses, Opportunities, Threats", "Sales, Wages, Operations, Taxes", "Sales, Wages, Opportunities, Threats"], correctAnswer: 1 },
      { id: 5, question: "Which of the following is NOT a function of management?", options: ["Planning", "Organizing", "Controlling", "Accounting"], correctAnswer: 3 },
      { id: 6, question: "The 4 Ps of marketing are Product, Price, Place, and:", options: ["People", "Promotion", "Process", "Production"], correctAnswer: 1 },
      { id: 7, question: "Which form of business is a separate legal entity from its owners?", options: ["Sole Proprietorship", "Partnership", "Limited Liability Company", "Social Club"], correctAnswer: 2 },
      { id: 8, question: "The 'Father of Scientific Management' is:", options: ["Henry Fayol", "Frederick Taylor", "Max Weber", "Abraham Maslow"], correctAnswer: 1 },
      { id: 9, question: "A formal summary of the aims and values of a company is called a:", options: ["Business plan", "Mission statement", "Balance sheet", "Audit report"], correctAnswer: 1 },
      { id: 10, question: "The reward for a business owner for taking risks is:", options: ["Salary", "Commission", "Profit", "Interest"], correctAnswer: 2 },
    ],
  },
  {
    code: "SOC 101",
    title: "Introduction to Sociology",
    description: "Foundational concepts of human society, culture, and social interaction.",
    questions: [
      { id: 1, question: "Who is widely considered the father of Sociology?", options: ["Karl Marx", "Auguste Comte", "Herbert Spencer", "Max Weber"], correctAnswer: 1 },
      { id: 2, question: "Sociology is defined as the systematic study of:", options: ["Individual behavior", "Human society and social interaction", "Physical evolution", "The human mind"], correctAnswer: 1 },
      { id: 3, question: "The term 'Sociology' was coined in the year:", options: ["1776", "1838", "1901", "1895"], correctAnswer: 1 },
      { id: 4, question: "A 'Sociological Imagination' is a concept developed by:", options: ["Emile Durkheim", "C. Wright Mills", "Talcott Parsons", "Robert Merton"], correctAnswer: 1 },
      { id: 5, question: "Which perspective views society as a system of interrelated parts working together?", options: ["Conflict Theory", "Structural Functionalism", "Symbolic Interactionism", "Feminism"], correctAnswer: 1 },
      { id: 6, question: "Karl Marx is most associated with which sociological perspective?", options: ["Functionalism", "Conflict Theory", "Interactionism", "Positivism"], correctAnswer: 1 },
      { id: 7, question: "The study of small-scale patterns of society is known as:", options: ["Macrosociology", "Microsociology", "Global sociology", "Mesosociology"], correctAnswer: 1 },
      { id: 8, question: "Culture includes a society's:", options: ["Beliefs and values", "Tools and technology", "Language and norms", "All of the above"], correctAnswer: 3 },
      { id: 9, question: "Social norms that are strictly enforced and have moral significance are:", options: ["Folkways", "Mores", "Taboos", "Laws"], correctAnswer: 1 },
      { id: 10, question: "Socialization is the process by which people:", options: ["Learn the culture of their society", "Avoid social contact", "Forget their heritage", "Ignore social rules"], correctAnswer: 0 },
    ],
  },
  {
    code: "ECO 101",
    title: "Principles of Economics",
    description: "Fundamental concepts of Micro and Macro Economics, including supply, demand, and national income.",
    questions: [
      { id: 1, question: "Economics is primarily a social science that deals with:", options: ["Money management", "Scarcity and choice", "Stock market trading", "Government taxation"], correctAnswer: 1 },
      { id: 2, question: "Who is regarded as the father of modern Economics?", options: ["David Ricardo", "John Maynard Keynes", "Adam Smith", "Alfred Marshall"], correctAnswer: 2 },
      { id: 3, question: "The 'Wealth of Nations' was published in:", options: ["1776", "1838", "1901", "1895"], correctAnswer: 0 },
      { id: 4, question: "The basic economic problem facing all societies is:", options: ["Inflation", "Unemployment", "Scarcity", "Poverty"], correctAnswer: 2 },
      { id: 5, question: "The cost of the next best alternative forgone is:", options: ["Variable cost", "Marginal cost", "Opportunity cost", "Sunk cost"], correctAnswer: 2 },
      { id: 6, question: "A point inside the Production Possibility Curve (PPC) indicates:", options: ["Full employment", "Under-utilization of resources", "Growth", "Unattainable output"], correctAnswer: 1 },
      { id: 7, question: "Microeconomics focuses on:", options: ["National income", "Individual consumers and firms", "The global economy", "Aggregate demand"], correctAnswer: 1 },
      { id: 8, question: "Macroeconomics is the study of:", options: ["Single firms", "Specific industries", "The economy as a whole", "Household budgets"], correctAnswer: 2 },
      { id: 9, question: "The law of demand states that as price increases, quantity demanded:", options: ["Increases", "Decreases", "Remains constant", "Becomes zero"], correctAnswer: 1 },
      { id: 10, question: "The law of supply states that as price increases, quantity supplied:", options: ["Increases", "Decreases", "Remains constant", "Fluctuates"], correctAnswer: 0 },
    ],
  },
  {
    code: "ACC 101",
    title: "Introduction to Accounting",
    description: "Foundational principles of bookkeeping, final accounts, and financial recording.",
    questions: [
      { id: 1, question: "Accounting is often referred to as the ___ of business.", options: ["Heart", "Language", "Engine", "Record"], correctAnswer: 1 },
      { id: 2, question: "The process of recording, classifying, and summarizing financial transactions is:", options: ["Auditing", "Bookkeeping", "Accounting", "Management"], correctAnswer: 2 },
      { id: 3, question: "The 'Double Entry' system of bookkeeping was popularized by:", options: ["Adam Smith", "Luca Pacioli", "John Maynard Keynes", "Karl Marx"], correctAnswer: 1 },
      { id: 4, question: "The accounting equation is expressed as:", options: ["Assets = Liabilities - Capital", "Assets = Liabilities + Capital", "Capital = Assets + Liabilities", "Liabilities = Assets + Capital"], correctAnswer: 1 },
      { id: 5, question: "A 'Debit' entry represents an increase in:", options: ["Liabilities", "Income", "Assets", "Capital"], correctAnswer: 2 },
      { id: 6, question: "A 'Credit' entry represents an increase in:", options: ["Assets", "Expenses", "Liabilities", "Drawings"], correctAnswer: 2 },
      { id: 7, question: "The book of original entry where transactions are first recorded is the:", options: ["Ledger", "Journal", "Trial Balance", "Balance Sheet"], correctAnswer: 1 },
      { id: 8, question: "A cash book serves as both a journal and a:", options: ["Statement", "Ledger", "Voucher", "Invoice"], correctAnswer: 1 },
      { id: 9, question: "Which of these is a personal account?", options: ["Cash Account", "Machinery Account", "Adebayo's Account", "Rent Account"], correctAnswer: 2 },
      { id: 10, question: "Which of these is a nominal account?", options: ["Bank Account", "Salaries Account", "Furniture Account", "Debtors Account"], correctAnswer: 1 },
    ],
  },
  {
    code: "AMS 102",
    title: "Basic Mathematics",
    description: "Surds, Indices, Polynomial, Differentiation & Integration, Number System, Permutation and Combination, Differentiation of Trigonometry and many more.",
    questions: [
      { id: 1, question: "What is the sum of the first n natural numbers?", options: ["n(n+1)/2", "n(n-1)/2", "n²", "2n"], correctAnswer: 0 },
      { id: 2, question: "What is the common ratio in a geometric sequence?", options: ["Difference between terms", "Sum of terms", "Ratio of consecutive terms", "Product of terms"], correctAnswer: 2 },
      { id: 3, question: "What is the discriminant of a quadratic equation?", options: ["b² - 4ac", "a² + b²", "2ab", "b² + 4ac"], correctAnswer: 0 },
      { id: 4, question: "What does a zero discriminant indicate?", options: ["Two real roots", "One real root", "No real root", "Infinite roots"], correctAnswer: 1 },
      { id: 5, question: "What is the formula for the nth term of an arithmetic sequence?", options: ["a + (n-1)d", "a(n-1)d", "a + nd", "a(n+d)"], correctAnswer: 0 },
      { id: 6, question: "What is the sum of a geometric series formula?", options: ["a(1-rⁿ)/(1-r)", "a(n+r)", "a+rⁿ", "n(a+r)"], correctAnswer: 0 },
      { id: 7, question: "What is a root of a polynomial?", options: ["Value making polynomial zero", "Value making polynomial infinite", "Coefficient", "Degree"], correctAnswer: 0 },
      { id: 8, question: "What is the degree of a polynomial?", options: ["Highest power", "Lowest power", "Coefficient", "Constant"], correctAnswer: 0 },
      { id: 9, question: "What is a quadratic equation?", options: ["Degree 1", "Degree 2", "Degree 3", "Degree 4"], correctAnswer: 1 },
      { id: 10, question: "What is the vertex form of a quadratic?", options: ["a(x-h)² + k", "ax²+bx+c", "a(x+h)²-k", "x²+h+k"], correctAnswer: 0 },
      { id: 11, question: "Evaluate 2³ × 2²", options: ["2⁵", "2⁶", "4⁵", "8²"], correctAnswer: 0 },
      { id: 12, question: "Simplify (3²)³", options: ["3⁵", "3⁶", "9³", "27²"], correctAnswer: 1 },
      { id: 13, question: "What is √50 in simplest surd form?", options: ["5√2", "2√5", "25√2", "10√5"], correctAnswer: 0 },
      { id: 14, question: "Rationalize 1/√2", options: ["√2/2", "1/2√2", "√2", "2√2"], correctAnswer: 0 },
      { id: 15, question: "What is the value of 4⁰?", options: ["0", "1", "4", "Undefined"], correctAnswer: 1 },
      { id: 16, question: "How many ways can 3 books be arranged?", options: ["3", "6", "9", "27"], correctAnswer: 1 },
      { id: 17, question: "Evaluate 5!", options: ["120", "60", "20", "24"], correctAnswer: 0 },
      { id: 18, question: "How many permutations of 4 objects taken 2 at a time?", options: ["12", "8", "6", "16"], correctAnswer: 0 },
      { id: 19, question: "How many combinations of 4 objects taken 2 at a time?", options: ["6", "12", "8", "4"], correctAnswer: 0 },
      { id: 20, question: "Simplify √18 + √8", options: ["5√2", "3√2", "4√2", "6√2"], correctAnswer: 0 },
      { id: 21, question: "What is 10 in binary?", options: ["1010", "1001", "1110", "1100"], correctAnswer: 0 },
      { id: 22, question: "Which set includes negative numbers?", options: ["Natural numbers", "Whole numbers", "Integers", "Counting numbers"], correctAnswer: 2 },
      { id: 23, question: "What is the derivative of x²?", options: ["2x", "x", "x²", "2"], correctAnswer: 0 },
      { id: 24, question: "Differentiate 3x³", options: ["9x²", "3x²", "6x", "x³"], correctAnswer: 0 },
      { id: 25, question: "What is ∫x dx?", options: ["x²/2 + C", "x + C", "2x + C", "x² + C"], correctAnswer: 0 },
      { id: 26, question: "Evaluate ∫2x dx", options: ["x² + C", "2x² + C", "x + C", "2 + C"], correctAnswer: 0 },
      { id: 27, question: "What is derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correctAnswer: 0 },
      { id: 28, question: "What is derivative of cos(x)?", options: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"], correctAnswer: 0 },
      { id: 29, question: "Expand (x + 2)(x + 3)", options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 3x + 2", "x² + 2x + 3"], correctAnswer: 0 },
      { id: 30, question: "Factorize x² - 9", options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-1)(x+9)", "(x-3)²"], correctAnswer: 0 },
    ],
  },
];
