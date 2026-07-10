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
    code: "ACC 102",
    title: "Accounting",
    description: "Accounting Outline",
    questions: [
{ "id": 1, "question": "What is accounting primarily considered as?", "options": ["A financial burden", "An information system", "A legal system", "A taxation tool"], "correctAnswer": 1 },
{ "id": 2, "question": "Accounting provides information mainly to:", "options": ["Managers only", "Owners only", "Users for decision making", "Auditors only"], "correctAnswer": 2 },
{ "id": 3, "question": "Which is a limitation of financial accounting?", "options": ["Future prediction", "Historical data focus", "Unlimited scope", "No rules"], "correctAnswer": 1 },
{ "id": 4, "question": "Financial accounting reports are mainly:", "options": ["Subjective", "Future-based", "Historical", "Informal"], "correctAnswer": 2 },
{ "id": 5, "question": "Conceptual framework helps in:", "options": ["Tax calculation", "Standardizing reporting", "Budgeting", "Auditing"], "correctAnswer": 1 },
{ "id": 6, "question": "The objective of financial reporting is to:", "options": ["Reduce costs", "Provide useful information", "Increase profit", "Avoid taxes"], "correctAnswer": 1 },
{ "id": 7, "question": "Users of accounting information include:", "options": ["Investors", "Creditors", "Managers", "All of the above"], "correctAnswer": 3 },
{ "id": 8, "question": "Which is a qualitative characteristic?", "options": ["Profitability", "Relevance", "Cash flow", "Sales"], "correctAnswer": 1 },
{ "id": 9, "question": "Faithful representation means:", "options": ["Accurate and complete", "Profitable", "Fast reporting", "Cheap reporting"], "correctAnswer": 0 },
{ "id": 10, "question": "Comparability allows users to:", "options": ["Compare results", "Calculate profit", "Reduce tax", "Ignore reports"], "correctAnswer": 0 },

{ "id": 11, "question": "Consistency refers to:", "options": ["Same accounting methods", "Same profits", "Same expenses", "Same revenue"], "correctAnswer": 0 },
{ "id": 12, "question": "Accounting concepts include:", "options": ["Going concern", "Matching", "Accrual", "All of the above"], "correctAnswer": 3 },
{ "id": 13, "question": "Going concern assumes business will:", "options": ["Close soon", "Continue operating", "Merge", "Sell assets"], "correctAnswer": 1 },
{ "id": 14, "question": "Matching concept deals with:", "options": ["Assets and liabilities", "Revenue and expenses", "Cash only", "Taxes"], "correctAnswer": 1 },
{ "id": 15, "question": "Accrual concept recognizes:", "options": ["Cash only", "Transactions when they occur", "Future income", "Expenses only"], "correctAnswer": 1 },
{ "id": 16, "question": "Prudence concept means:", "options": ["Overstating profit", "Understating losses", "Caution in reporting", "Ignoring expenses"], "correctAnswer": 2 },
{ "id": 17, "question": "Correction of errors ensures:", "options": ["Accurate records", "Higher profit", "Lower taxes", "Faster reporting"], "correctAnswer": 0 },
{ "id": 18, "question": "A suspense account is used when:", "options": ["Accounts balance", "Difference exists", "Profit increases", "Cash increases"], "correctAnswer": 1 },
{ "id": 19, "question": "Memorandum accounts are:", "options": ["Official records", "Informal records", "Financial statements", "Audited reports"], "correctAnswer": 1 },
{ "id": 20, "question": "Control accounts summarize:", "options": ["All transactions", "Individual accounts", "Ledger totals", "Cash flow"], "correctAnswer": 2 },

{ "id": 21, "question": "Non-profit organizations aim to:", "options": ["Maximize profit", "Provide services", "Pay dividends", "Avoid tax"], "correctAnswer": 1 },
{ "id": 22, "question": "Examples of non-profit organizations include:", "options": ["Banks", "Clubs", "Retail stores", "Factories"], "correctAnswer": 1 },
{ "id": 23, "question": "Single entry system records:", "options": ["Both aspects", "One aspect only", "No transactions", "All accounts"], "correctAnswer": 1 },
{ "id": 24, "question": "Incomplete records are common in:", "options": ["Large firms", "Small businesses", "Banks", "Governments"], "correctAnswer": 1 },
{ "id": 25, "question": "Trading account determines:", "options": ["Net profit", "Gross profit", "Expenses", "Assets"], "correctAnswer": 1 },
{ "id": 26, "question": "Profit and loss account shows:", "options": ["Assets", "Liabilities", "Net profit", "Capital"], "correctAnswer": 2 },
{ "id": 27, "question": "Statement of financial position shows:", "options": ["Income", "Expenses", "Assets and liabilities", "Profit"], "correctAnswer": 2 },
{ "id": 28, "question": "A sole trader is:", "options": ["Company", "Partnership", "Single owner business", "Government"], "correctAnswer": 2 },
{ "id": 29, "question": "Adjustments include:", "options": ["Prepayments", "Accruals", "Depreciation", "All of the above"], "correctAnswer": 3 },
{ "id": 30, "question": "Depreciation represents:", "options": ["Increase in value", "Decrease in value", "Profit", "Cash flow"], "correctAnswer": 1 },

{ "id": 31, "question": "NASB stands for:", "options": ["National Accounting Standards Board", "National Audit Board", "Nigerian Accounting Standards Board", "None"], "correctAnswer": 2 },
{ "id": 32, "question": "FRCN stands for:", "options": ["Financial Reporting Council of Nigeria", "Federal Revenue Council", "Finance Regulation Committee", "None"], "correctAnswer": 0 },
{ "id": 33, "question": "IASB develops:", "options": ["Tax laws", "Accounting standards", "Auditing rules", "Budgets"], "correctAnswer": 1 },
{ "id": 34, "question": "IFRS means:", "options": ["International Financial Reporting Standards", "Internal Finance Rules", "Income Finance System", "None"], "correctAnswer": 0 },
{ "id": 35, "question": "IAS stands for:", "options": ["International Accounting Standards", "Internal Accounting System", "Income Audit Standards", "None"], "correctAnswer": 0 },

{ "id": 36, "question": "IASC is:", "options": ["Old standard-setting body", "Tax authority", "Audit firm", "Bank"], "correctAnswer": 0 },
{ "id": 37, "question": "SAS refers to:", "options": ["Statement of Accounting Standards", "System Audit Service", "Sales Analysis System", "None"], "correctAnswer": 0 },

{ "id": 38, "question": "Financial accounting mainly serves:", "options": ["Internal users", "External users", "Government only", "Auditors"], "correctAnswer": 1 },
{ "id": 39, "question": "Timeliness is:", "options": ["Late reporting", "Quick reporting", "Accurate reporting", "Costly reporting"], "correctAnswer": 1 },
{ "id": 40, "question": "Verifiability ensures:", "options": ["Profit", "Truthfulness", "Cash flow", "Assets"], "correctAnswer": 1 },

{ "id": 41, "question": "Understandability means:", "options": ["Complex reports", "Clear reports", "Detailed reports", "Audited reports"], "correctAnswer": 1 },
{ "id": 42, "question": "Relevance means:", "options": ["Useful information", "Old data", "Irrelevant data", "Costly data"], "correctAnswer": 0 },
{ "id": 43, "question": "Materiality relates to:", "options": ["Importance of information", "Cash", "Profit", "Assets"], "correctAnswer": 0 },
{ "id": 44, "question": "Neutrality means:", "options": ["Bias-free", "Profit-based", "Tax-based", "Cash-based"], "correctAnswer": 0 },
{ "id": 45, "question": "Error of omission means:", "options": ["Transaction not recorded", "Wrong amount", "Wrong account", "Duplication"], "correctAnswer": 0 },

{ "id": 46, "question": "Error of commission involves:", "options": ["Wrong entry", "No entry", "Double entry", "Adjustment"], "correctAnswer": 0 },
{ "id": 47, "question": "Trial balance helps to:", "options": ["Detect errors", "Calculate profit", "Prepare budget", "Audit"], "correctAnswer": 0 },
{ "id": 48, "question": "Suspense account is cleared when:", "options": ["Errors corrected", "Profit rises", "Cash increases", "Assets increase"], "correctAnswer": 0 },
{ "id": 49, "question": "Control account is part of:", "options": ["Ledger", "Trial balance", "Journal", "Cash book"], "correctAnswer": 0 },
{ "id": 50, "question": "Incomplete records require:", "options": ["Estimation", "Guesswork", "Calculation", "Analysis"], "correctAnswer": 3 },

{ "id": 51, "question": "Gross profit =:", "options": ["Sales - Cost of goods sold", "Income - Expenses", "Assets - Liabilities", "Capital - Drawings"], "correctAnswer": 0 },
{ "id": 52, "question": "Net profit =:", "options": ["Gross profit - expenses", "Sales only", "Assets only", "Liabilities"], "correctAnswer": 0 },
{ "id": 53, "question": "Assets are:", "options": ["Resources owned", "Debts owed", "Expenses", "Revenue"], "correctAnswer": 0 },
{ "id": 54, "question": "Liabilities are:", "options": ["Resources", "Obligations", "Income", "Assets"], "correctAnswer": 1 },
{ "id": 55, "question": "Capital is:", "options": ["Owner’s interest", "Debt", "Expense", "Revenue"], "correctAnswer": 0 },

{ "id": 56, "question": "Drawings reduce:", "options": ["Capital", "Assets", "Revenue", "Expenses"], "correctAnswer": 0 },
{ "id": 57, "question": "Accruals are:", "options": ["Prepaid expenses", "Expenses incurred not paid", "Cash received", "Assets"], "correctAnswer": 1 },
{ "id": 58, "question": "Prepayments are:", "options": ["Future expenses paid", "Past expenses", "Income", "Liabilities"], "correctAnswer": 0 },
{ "id": 59, "question": "Revenue is:", "options": ["Income earned", "Expense", "Liability", "Asset"], "correctAnswer": 0 },
{ "id": 60, "question": "Expense is:", "options": ["Cost incurred", "Income", "Asset", "Capital"], "correctAnswer": 0 },

{ "id": 61, "question": "IASB replaced:", "options": ["IASC", "NASB", "FRCN", "SAS"], "correctAnswer": 0 },
{ "id": 62, "question": "IFRS improves:", "options": ["Uniformity", "Confusion", "Taxes", "Errors"], "correctAnswer": 0 },
{ "id": 63, "question": "Financial reporting aims at:", "options": ["Decision making", "Profit only", "Tax avoidance", "Auditing"], "correctAnswer": 0 },
{ "id": 64, "question": "Accounting information should be:", "options": ["Reliable", "Relevant", "Timely", "All"], "correctAnswer": 3 },
{ "id": 65, "question": "Users include:", "options": ["Employees", "Investors", "Government", "All"], "correctAnswer": 3 },

{ "id": 66, "question": "Non-profit accounts include:", "options": ["Receipts and payments", "Trading", "Balance sheet", "All"], "correctAnswer": 3 },
{ "id": 67, "question": "Control accounts help in:", "options": ["Error detection", "Profit calculation", "Tax filing", "Budgeting"], "correctAnswer": 0 },
{ "id": 68, "question": "Accounting standards ensure:", "options": ["Uniform reporting", "Profit", "Cash flow", "Assets"], "correctAnswer": 0 },
{ "id": 69, "question": "Conceptual framework is useful for:", "options": ["Standard setters", "Users", "Preparers", "All"], "correctAnswer": 3 },
{ "id": 70, "question": "Financial accounting is governed by:", "options": ["Standards", "Opinions", "Guesses", "Managers"], "correctAnswer": 0 },

{ "id": 71, "question": "Errors affecting trial balance include:", "options": ["One-sided errors", "Omissions", "Principle errors", "None"], "correctAnswer": 0 },
{ "id": 72, "question": "Errors not affecting trial balance:", "options": ["Omission", "Commission", "Both", "None"], "correctAnswer": 2 },
{ "id": 73, "question": "Memorandum accounts are used for:", "options": ["Reference", "Profit", "Tax", "Audit"], "correctAnswer": 0 },
{ "id": 74, "question": "Statement of financial position is also called:", "options": ["Balance sheet", "Trial balance", "Cash book", "Ledger"], "correctAnswer": 0 },
{ "id": 75, "question": "Trading account shows:", "options": ["Gross profit", "Net profit", "Assets", "Capital"], "correctAnswer": 0 },

{ "id": 76, "question": "Profit and loss account is prepared after:", "options": ["Trading account", "Balance sheet", "Cash book", "Journal"], "correctAnswer": 0 },
{ "id": 77, "question": "Sole trader bears:", "options": ["Unlimited liability", "Limited liability", "No liability", "Shared liability"], "correctAnswer": 0 },
{ "id": 78, "question": "Accounting cycle ends with:", "options": ["Financial statements", "Journal", "Ledger", "Cash book"], "correctAnswer": 0 },
{ "id": 79, "question": "IAS are replaced by:", "options": ["IFRS", "SAS", "NASB", "FRCN"], "correctAnswer": 0 },
{ "id": 80, "question": "Financial accounting focuses on:", "options": ["External reporting", "Internal control", "Management", "Production"], "correctAnswer": 0 }
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

{ id: 11, question: "What is factorial of n?", options: ["n!", "n²", "n+n", "n-1"], correctAnswer: 0 },
{ id: 12, question: "What is permutation?", options: ["Arrangement", "Selection", "Addition", "Division"], correctAnswer: 0 },
{ id: 13, question: "What is combination?", options: ["Selection", "Arrangement", "Multiplication", "Division"], correctAnswer: 0 },
{ id: 14, question: "What is probability range?", options: ["0 to 1", "-1 to 1", "0 to 10", "1 to 100"], correctAnswer: 0 },
{ id: 15, question: "What is P(A∩B)?", options: ["Intersection", "Union", "Difference", "Complement"], correctAnswer: 0 },
{ id: 16, question: "What is P(A∪B)?", options: ["Union", "Intersection", "Difference", "Product"], correctAnswer: 0 },
{ id: 17, question: "What is independent event?", options: ["No effect on each other", "Dependent", "Same outcome", "Impossible"], correctAnswer: 0 },
{ id: 18, question: "What is dependent event?", options: ["Events affect each other", "Independent", "Equal probability", "Impossible"], correctAnswer: 0 },
{ id: 19, question: "What is sample space?", options: ["All outcomes", "One outcome", "Event", "Trial"], correctAnswer: 0 },
{ id: 20, question: "What is an event?", options: ["Subset of sample space", "Whole space", "Number", "Equation"], correctAnswer: 0 },

{ id: 21, question: "What is mean?", options: ["Average", "Median", "Mode", "Range"], correctAnswer: 0 },
{ id: 22, question: "What is median?", options: ["Middle value", "Average", "Sum", "Difference"], correctAnswer: 0 },
{ id: 23, question: "What is mode?", options: ["Most frequent", "Least frequent", "Middle", "Average"], correctAnswer: 0 },
{ id: 24, question: "What is variance?", options: ["Spread measure", "Central value", "Middle value", "Frequency"], correctAnswer: 0 },
{ id: 25, question: "What is standard deviation?", options: ["Square root of variance", "Variance", "Mean", "Median"], correctAnswer: 0 },
{ "id": 26, "question": "Evaluate 2³ × 2²", "options": ["2⁵", "2⁶", "4⁵", "8²"], "correctAnswer": 0 },

{ "id": 27, "question": "Simplify (3²)³", "options": ["3⁵", "3⁶", "9³", "27²"], "correctAnswer": 1 },

{ "id": 28, "question": "What is √50 in simplest surd form?", "options": ["5√2", "2√5", "25√2", "10√5"], "correctAnswer": 0 },

{ "id": 29, "question": "Rationalize 1/√2", "options": ["√2/2", "1/2√2", "√2", "2√2"], "correctAnswer": 0 },

{ "id": 30, "question": "What is the value of 4⁰?", "options": ["0", "1", "4", "Undefined"], "correctAnswer": 1 },

{ "id": 31, "question": "How many ways can 3 books be arranged?", "options": ["3", "6", "9", "27"], "correctAnswer": 1 },

{ "id": 32, "question": "Evaluate 5!", "options": ["120", "60", "20", "24"], "correctAnswer": 0 },

{ "id": 33, "question": "How many permutations of 4 objects taken 2 at a time?", "options": ["12", "8", "6", "16"], "correctAnswer": 0 },

{ "id": 34, "question": "How many combinations of 4 objects taken 2 at a time?", "options": ["6", "12", "8", "4"], "correctAnswer": 0 },

{ "id": 35, "question": "If a matric number has 6 distinct digits, how many permutations are possible?", "options": ["720", "120", "360", "600"], "correctAnswer": 0 },

{ "id": 36, "question": "Simplify √18 + √8", "options": ["5√2", "3√2", "4√2", "6√2"], "correctAnswer": 0 },

{ "id": 37, "question": "What is 10 in binary?", "options": ["1010", "1001", "1110", "1100"], "correctAnswer": 0 },

{ "id": 38, "question": "Which set includes negative numbers?", "options": ["Natural numbers", "Whole numbers", "Integers", "Counting numbers"], "correctAnswer": 2 },

{ "id": 39, "question": "What is the derivative of x²?", "options": ["2x", "x", "x²", "2"], "correctAnswer": 0 },

{ "id": 40, "question": "Differentiate 3x³", "options": ["9x²", "3x²", "6x", "x³"], "correctAnswer": 0 },

{ "id": 41, "question": "What is ∫x dx?", "options": ["x²/2 + C", "x + C", "2x + C", "x² + C"], "correctAnswer": 0 },

{ "id": 42, "question": "Evaluate ∫2x dx", "options": ["x² + C", "2x² + C", "x + C", "2 + C"], "correctAnswer": 0 },

{ "id": 43, "question": "What is derivative of sin(x)?", "options": ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], "correctAnswer": 0 },

{ "id": 44, "question": "What is derivative of cos(x)?", "options": ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"], "correctAnswer": 0 },

{ "id": 45, "question": "Expand (x + 2)(x + 3)", "options": ["x² + 5x + 6", "x² + 6x + 5", "x² + 3x + 2", "x² + 2x + 3"], "correctAnswer": 0 },

{ "id": 46, "question": "Factorize x² - 9", "options": ["(x-3)(x+3)", "(x-9)(x+1)", "(x-1)(x+9)", "(x-3)²"], "correctAnswer": 0 },

{ "id": 47, "question": "What is a rational number?", "options": ["p/q form", "Integer only", "Decimal only", "Whole number"], "correctAnswer": 0 },

{ "id": 48, "question": "Simplify 2⁻²", "options": ["1/4", "4", "1/2", "2"], "correctAnswer": 0 },

{ "id": 49, "question": "Evaluate (√3)²", "options": ["3", "6", "9", "√3"], "correctAnswer": 0 },

{ "id": 50, "question": "How many ways can 5 students sit in a row?", "options": ["120", "60", "20", "25"], "correctAnswer": 0 },

{ "id": 51, "question": "Evaluate 6C2", "options": ["15", "12", "30", "20"], "correctAnswer": 0 },

{ "id": 52, "question": "Evaluate 6P2", "options": ["30", "12", "15", "20"], "correctAnswer": 0 },

{ "id": 53, "question": "If digits repeat in a matric number, arrangements reduce due to:", "options": ["Repetition", "Division", "Addition", "Power"], "correctAnswer": 0 },

{ "id": 54, "question": "Simplify √72", "options": ["6√2", "8√2", "4√3", "9√2"], "correctAnswer": 0 },

{ "id": 55, "question": "What is the base of logarithm in log₁₀?", "options": ["10", "1", "0", "e"], "correctAnswer": 0 },

{ "id": 56, "question": "Differentiate x⁴", "options": ["4x³", "x³", "3x⁴", "4x"], "correctAnswer": 0 },

{ "id": 57, "question": "Integrate 3x² dx", "options": ["x³ + C", "3x³ + C", "x² + C", "6x + C"], "correctAnswer": 0 },

{ "id": 58, "question": "Derivative of tan(x)", "options": ["sec²(x)", "cos(x)", "sin(x)", "-sec²(x)"], "correctAnswer": 0 },

{ "id": 59, "question": "What is √(a²)?", "options": ["|a|", "a²", "2a", "√a"], "correctAnswer": 0 },

{ "id": 60, "question": "Simplify (2³ × 2⁻¹)", "options": ["2²", "2³", "2⁴", "2¹"], "correctAnswer": 0 }
]
},
];
