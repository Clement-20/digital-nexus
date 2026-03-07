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
      { id: 11, question: "The study of word formation is called ___", options: ["Phonetics", "Morphology", "Syntax", "Semantics"], correctAnswer: 1 },
      { id: 12, question: "Which is a correct example of a simile?", options: ["The sun is hot", "He runs fast", "She is as brave as a lion", "The wind blows"], correctAnswer: 2 },
      { id: 13, question: "A noun that refers to a group is called ___", options: ["Proper noun", "Common noun", "Collective noun", "Abstract noun"], correctAnswer: 2 },
      { id: 14, question: "The antonym of 'ancient' is ___", options: ["Old", "Modern", "Historic", "Traditional"], correctAnswer: 1 },
      { id: 15, question: "Which word class does 'running' belong to in 'Running is good exercise'?", options: ["Verb", "Adjective", "Gerund", "Adverb"], correctAnswer: 2 },
      { id: 16, question: "A figure of speech that compares unlike things using 'like' or 'as' is ___", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], correctAnswer: 1 },
      { id: 17, question: "The word 'happiness' is derived from which root?", options: ["Happy", "Hap", "Happily", "Happen"], correctAnswer: 0 },
      { id: 18, question: "Which sentence is in the future perfect tense?", options: ["I will go", "I have gone", "I will have gone", "I had gone"], correctAnswer: 2 },
      { id: 19, question: "A word with the same spelling but different meanings is called ___", options: ["Homophone", "Homonym", "Synonym", "Antonym"], correctAnswer: 1 },
      { id: 20, question: "The subject in 'The cat sat on the mat' is ___", options: ["sat", "mat", "cat", "on"], correctAnswer: 2 },
      { id: 21, question: "Which of these is an example of onomatopoeia?", options: ["Happy", "Buzz", "Beautiful", "Running"], correctAnswer: 1 },
      { id: 22, question: "A pronoun that shows ownership is called ___", options: ["Personal pronoun", "Possessive pronoun", "Relative pronoun", "Demonstrative pronoun"], correctAnswer: 1 },
      { id: 23, question: "The prefix 'un-' in 'unhappy' means ___", options: ["Very", "Not", "Again", "Before"], correctAnswer: 1 },
      { id: 24, question: "Which is the correct plural of 'criterion'?", options: ["Criterions", "Criteria", "Criterias", "Criterian"], correctAnswer: 1 },
      { id: 25, question: "A sentence that gives a command is called ___", options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], correctAnswer: 2 },
      { id: 26, question: "The word 'quickly' modifies what part of speech?", options: ["Noun", "Verb", "Adjective", "Pronoun"], correctAnswer: 1 },
      { id: 27, question: "Which is an example of an abstract noun?", options: ["Table", "Book", "Love", "Car"], correctAnswer: 2 },
      { id: 28, question: "The comparative form of 'good' is ___", options: ["Gooder", "Better", "Best", "More good"], correctAnswer: 1 },
      { id: 29, question: "A word that joins words or sentences is called ___", options: ["Preposition", "Conjunction", "Interjection", "Article"], correctAnswer: 1 },
      { id: 30, question: "The process of forming words by combining two words is called ___", options: ["Derivation", "Inflection", "Compounding", "Conversion"], correctAnswer: 2 },
      { id: 31, question: "Which sentence contains a dangling modifier?", options: ["Walking to school, the rain started", "I walked to school", "She reads books", "The dog barks loudly"], correctAnswer: 0 },
      { id: 32, question: "The study of speech sounds is called ___", options: ["Phonology", "Morphology", "Syntax", "Semantics"], correctAnswer: 0 },
      { id: 33, question: "Which is NOT a determiner?", options: ["The", "A", "This", "Beautiful"], correctAnswer: 3 },
      { id: 34, question: "A word that expresses strong emotion is called ___", options: ["Conjunction", "Preposition", "Interjection", "Article"], correctAnswer: 2 },
      { id: 35, question: "The suffix '-ment' in 'development' indicates ___", options: ["Action or result", "Full of", "Without", "One who"], correctAnswer: 0 },
      { id: 36, question: "Which is a complex sentence?", options: ["I eat and sleep", "I go to school", "Although it rained, we went out", "She sings well"], correctAnswer: 2 },
      { id: 37, question: "The word 'their' is what type of pronoun?", options: ["Personal", "Possessive", "Reflexive", "Relative"], correctAnswer: 1 },
      { id: 38, question: "An idiom is ___", options: ["A literal expression", "A figurative expression", "A technical term", "A formal word"], correctAnswer: 1 },
      { id: 39, question: "The infinitive form of a verb begins with ___", options: ["ing", "ed", "to", "s"], correctAnswer: 2 },
      { id: 40, question: "Which is the correct sentence?", options: ["He don't know", "He doesn't knows", "He doesn't know", "He not know"], correctAnswer: 2 },
      { id: 41, question: "A metaphor is ___", options: ["A direct comparison", "An indirect comparison", "An exaggeration", "A contrast"], correctAnswer: 1 },
      { id: 42, question: "The word 'children' is the plural of ___", options: ["Childs", "Child", "Childrens", "Childern"], correctAnswer: 1 },
      { id: 43, question: "Which word is a preposition?", options: ["And", "But", "Under", "Or"], correctAnswer: 2 },
      { id: 44, question: "A sentence with two independent clauses joined by a conjunction is ___", options: ["Simple sentence", "Complex sentence", "Compound sentence", "Compound-complex sentence"], correctAnswer: 2 },
      { id: 45, question: "The object in 'John kicked the ball' is ___", options: ["John", "kicked", "ball", "the"], correctAnswer: 2 },
      { id: 46, question: "Which is NOT a type of essay?", options: ["Narrative", "Descriptive", "Argumentative", "Phonetic"], correctAnswer: 3 },
      { id: 47, question: "The word 'international' has how many syllables?", options: ["3", "4", "5", "6"], correctAnswer: 2 },
      { id: 48, question: "A rhetorical question expects ___", options: ["An answer", "No answer", "A written response", "A nod"], correctAnswer: 1 },
      { id: 49, question: "The active voice of 'The cake was eaten by me' is ___", options: ["I ate the cake", "The cake I ate", "Me ate the cake", "I was eating the cake"], correctAnswer: 0 },
      { id: 50, question: "Which is an example of alliteration?", options: ["The cat sat", "Peter Piper picked peppers", "I am happy", "She runs fast"], correctAnswer: 1 },
      { id: 51, question: "The word 'create' and 'creative' have what relationship?", options: ["Synonyms", "Antonyms", "Derivation", "Homonyms"], correctAnswer: 2 },
      { id: 52, question: "A stanza in poetry is equivalent to a ___ in prose.", options: ["Word", "Sentence", "Paragraph", "Chapter"], correctAnswer: 2 },
      { id: 53, question: "Which word is a transitive verb?", options: ["Sleep", "Run", "Eat", "Walk"], correctAnswer: 2 },
      { id: 54, question: "The study of how sentences are structured is called ___", options: ["Phonology", "Syntax", "Semantics", "Morphology"], correctAnswer: 1 },
      { id: 55, question: "An appositive is ___", options: ["A verb form", "A noun phrase renaming another noun", "An adjective", "A preposition"], correctAnswer: 1 },
      { id: 56, question: "Which punctuation mark indicates a pause longer than a comma?", options: ["Apostrophe", "Semicolon", "Hyphen", "Colon"], correctAnswer: 1 },
      { id: 57, question: "The word 'their' and 'there' are ___", options: ["Synonyms", "Homophones", "Antonyms", "Homonyms"], correctAnswer: 1 },
      { id: 58, question: "A clausal modifier that adds essential information is ___", options: ["Non-restrictive", "Restrictive", "Participial", "Gerundial"], correctAnswer: 1 },
      { id: 59, question: "Which sentence demonstrates parallel structure?", options: ["I like running and to swim", "She reads books and writes letters", "He speaks English and studying French", "They dance and singing"], correctAnswer: 1 },
      { id: 60, question: "The word 'antidisestablishmentarianism' is notable for being ___", options: ["A common word", "Very long", "Recently coined", "Onomatopoetic"], correctAnswer: 1 },
      { id: 61, question: "A dependent clause beginning with 'although' is ___", options: ["Adjectival", "Adverbial", "Nominal", "Participial"], correctAnswer: 1 },
      { id: 62, question: "Which word is an example of a dysphemism?", options: ["Passed away", "Kicked the bucket", "Expired", "Deceased"], correctAnswer: 1 },
      { id: 63, question: "The process of adding suffixes and prefixes to words is called ___", options: ["Inflection", "Derivation", "Compounding", "Conversion"], correctAnswer: 1 },
      { id: 64, question: "Which is the correct use of 'who' vs 'whom'?", options: ["Whom did you see?", "To who was the letter sent?", "Who did you give it to?", "Whom is coming to dinner?"], correctAnswer: 2 },
      { id: 65, question: "A sentence fragment is ___", options: ["An incomplete sentence", "A complete sentence", "A compound sentence", "A complex sentence"], correctAnswer: 0 },
      { id: 66, question: "The word 'read' (present) and 'read' (past) are ___", options: ["Homophones", "Homographs", "Homonyms", "Heteronyms"], correctAnswer: 3 },
      { id: 67, question: "A malapropism involves ___", options: ["Wrong spelling", "Wrong word choice", "Wrong pronunciation", "Wrong tense"], correctAnswer: 1 },
      { id: 68, question: "Which is an example of understatement or meiosis?", options: ["That was absolutely amazing!", "That was somewhat difficult", "That was extremely bad", "That was incredibly good"], correctAnswer: 1 },
      { id: 69, question: "The literary device of repeating initial consonant sounds is ___", options: ["Assonance", "Alliteration", "Consonance", "Personification"], correctAnswer: 1 },
      { id: 70, question: "A word that has opposite meaning is called ___", options: ["Synonym", "Antonym", "Homonym", "Homophone"], correctAnswer: 1 },
      { id: 71, question: "Which word is a participle?", options: ["Run", "Running", "Runs", "Ran"], correctAnswer: 1 },
      { id: 72, question: "The word 'because' introduces a ___ clause.", options: ["Relative", "Noun", "Adverbial", "Adjectival"], correctAnswer: 2 },
      { id: 73, question: "An exclamation mark should be used ___", options: ["At the end of every sentence", "For strong emotions or emphasis", "Never in formal writing", "Only in dialogue"], correctAnswer: 1 },
      { id: 74, question: "A gerund is a verb form that functions as ___", options: ["An adjective", "A noun", "An adverb", "A preposition"], correctAnswer: 1 },
      { id: 75, question: "Which word correctly completes: 'Either the cats ___ the mice'?", options: ["Chase", "Chases", "Are chasing", "Is chasing"], correctAnswer: 2 },
      { id: 76, question: "A cacophony in literature refers to ___", options: ["Pleasant sounds", "Harsh, discordant sounds", "Silent moments", "Rhythmic sounds"], correctAnswer: 1 },
      { id: 77, question: "The term 'diction' refers to ___", options: ["Speaking ability", "Word choice", "Sentence structure", "Punctuation"], correctAnswer: 1 },
      { id: 78, question: "Which is an example of litotes?", options: ["She is very kind", "He is not unkind", "They are extremely happy", "You are very intelligent"], correctAnswer: 1 },
      { id: 79, question: "A possessive pronoun does NOT need ___", options: ["To agree with antecedent", "An apostrophe", "To show ownership", "To be clear"], correctAnswer: 1 },
      { id: 80, question: "Which word functions as both a noun and a verb?", options: ["Beautiful", "Quickly", "Run", "The"], correctAnswer: 2 },
      { id: 81, question: "The use of words that sound similar is called ___", options: ["Alliteration", "Assonance", "Consonance", "Rhyme"], correctAnswer: 1 },
      { id: 82, question: "A compound-complex sentence contains ___", options: ["One independent clause", "Two independent clauses", "At least two independent clauses and one dependent clause", "Only dependent clauses"], correctAnswer: 2 },
      { id: 83, question: "Which is the correct use of apostrophe for plurals?", options: ["The cat's are playing", "The cats are playing", "The cat's fur is soft", "The cats' toys"], correctAnswer: 3 },
      { id: 84, question: "The word 'peruse' means ___", options: ["To ignore", "To skim quickly", "To read carefully", "To reject"], correctAnswer: 2 },
      { id: 85, question: "A climax in a narrative is ___", options: ["The beginning", "The turning point", "The ending", "The introduction"], correctAnswer: 1 },
      { id: 86, question: "Which word has the same meaning as 'ubiquitous'?", options: ["Rare", "Everywhere", "Hidden", "Unique"], correctAnswer: 1 },
      { id: 87, question: "An oxymoron combines ___", options: ["Similar ideas", "Related concepts", "Contradictory terms", "Parallel structures"], correctAnswer: 2 },
      { id: 88, question: "The phrase 'like a fish out of water' is a/an ___", options: ["Metaphor", "Simile", "Idiom", "Alliteration"], correctAnswer: 1 },
      { id: 89, question: "A word that sounds the same but has different meaning is a ___", options: ["Homograph", "Homophone", "Synonym", "Antonym"], correctAnswer: 1 },
      { id: 90, question: "Which is NOT a figure of speech?", options: ["Metaphor", "Simile", "Alliteration", "Description"], correctAnswer: 3 },
      { id: 91, question: "The word 'ameliorate' means ___", options: ["To worsen", "To improve", "To simplify", "To complicate"], correctAnswer: 1 },
      { id: 92, question: "A flashback is used to ___", options: ["Show the future", "Reveal past events", "Confuse readers", "Speed up the narrative"], correctAnswer: 1 },
      { id: 93, question: "Which sentence is in passive voice?", options: ["She writes a letter", "A letter is written by her", "She has written a letter", "She wrote a letter"], correctAnswer: 1 },
      { id: 94, question: "The term 'irony' refers to ___", options: ["A comparison", "Contradictory expectations", "A type of poem", "A figure of speech"], correctAnswer: 1 },
      { id: 95, question: "Which word is a proper noun?", options: ["City", "Country", "Paris", "Planet"], correctAnswer: 2 },
      { id: 96, question: "A pun relies on ___", options: ["Unusual word order", "Multiple meanings of a word", "Rhythmic patterns", "Repeated sounds"], correctAnswer: 1 },
      { id: 97, question: "The word 'serendipity' means ___", options: ["Bad luck", "Misfortune", "Happy accident", "Planning"], correctAnswer: 2 },
      { id: 98, question: "Which is an example of assonance?", options: ["Sound and round", "The cat sat", "Peter picked peppers", "Buzzing bees"], correctAnswer: 0 },
      { id: 99, question: "A foil in literature is ___", options: ["A type of metal", "A character contrasting with protagonist", "A plot device", "A setting element"], correctAnswer: 1 },
      { id: 100, question: "Which word is a collective noun?", options: ["Happy", "Running", "School", "Quickly"], correctAnswer: 2 },
    ],
  },
  {
    code: "BUS 101",
    title: "Introduction to Business",
    description: "Fundamentals of business operations and management",
    questions: [
      { id: 1, question: "Business can be defined as ___", options: ["Any legal economic activity", "Government activity", "Charitable work", "Leisure activity"], correctAnswer: 0 },
      { id: 2, question: "The primary goal of a business is to ___", options: ["Help the poor", "Make profit", "Provide employment", "Pay taxes"], correctAnswer: 1 },
      { id: 3, question: "Which of these is NOT a factor of production?", options: ["Land", "Labour", "Money", "Capital"], correctAnswer: 2 },
      { id: 4, question: "A sole proprietorship is owned by ___", options: ["Two people", "One person", "The government", "Many shareholders"], correctAnswer: 1 },
      { id: 5, question: "Which business type has unlimited liability?", options: ["Corporation", "Limited company", "Sole proprietorship", "Public company"], correctAnswer: 2 },
      { id: 6, question: "The process of planning, organizing, leading, and controlling is called ___", options: ["Marketing", "Management", "Accounting", "Production"], correctAnswer: 1 },
      { id: 7, question: "A partnership typically requires at least ___ partners", options: ["1", "2", "5", "10"], correctAnswer: 1 },
      { id: 8, question: "Which is NOT a function of management?", options: ["Planning", "Organizing", "Sleeping", "Controlling"], correctAnswer: 2 },
      { id: 9, question: "The study of how individuals make choices is called ___", options: ["Sociology", "Economics", "Psychology", "Philosophy"], correctAnswer: 1 },
      { id: 10, question: "A company that sells shares to the public is called ___", options: ["Private company", "Public company", "Sole proprietorship", "Partnership"], correctAnswer: 1 },
      { id: 11, question: "The break-even point is when ___", options: ["Revenue equals cost", "Revenue exceeds cost", "Cost exceeds revenue", "There is maximum profit"], correctAnswer: 0 },
      { id: 12, question: "Marketing involves ___", options: ["Only selling", "Only advertising", "Meeting customer needs", "Only production"], correctAnswer: 2 },
      { id: 13, question: "SWOT analysis includes all EXCEPT ___", options: ["Strengths", "Weaknesses", "Operations", "Threats"], correctAnswer: 2 },
      { id: 14, question: "The 4 Ps of marketing include all EXCEPT ___", option
