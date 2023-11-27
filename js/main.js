const OBJECTS_COUNT = 25;

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

function generateRandomSentence() {
  const subjects = ['I', 'You', 'He', 'She', 'We', 'They'];
  const verbs = ['eat', 'drink', 'play', 'sleep', 'run'];
  const objects = ['an apple', 'a book', 'soccer', 'music', 'a marathon'];

  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];

  return `${randomSubject} ${randomVerb} ${randomObject}.`;
}

function generateUniqueNumber(min, max) {
  const generatedNumbers = [];

  return function () {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    while (generatedNumbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generatedNumbers.push(randomNumber);

    return randomNumber;
  };
}

function generateRandomSentencesFromText() {
  const text = 'Всё отлично! В целом всё неплохо. Но не всё.вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

  const sentences = text.split(' ');

  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  };

  const sentence1 = getRandomSentence();
  let sentence2 = '';

  // Генерируем второе предложение, пока оно не станет отличным от первого
  do {
    sentence2 = getRandomSentence();
  } while (sentence2 === sentence1);

  return [sentence1, sentence2];
}

// Пример использования
const randomSentencesText = generateRandomSentencesFromText();

const getRandomArrayElement = (elements) => elements[generateUniqueNumber(0, elements.length - 1)];

const generateObjId = generateUniqueNumber(1, 25);
const generateUrlId = generateUniqueNumber(1, 25);
const generateLikes = generateUniqueNumber(15, 200);
const generateCommentsNumber = generateUniqueNumber(0, 30);
const generateCommentId = generateUniqueNumber(1000, 5000);
const getRandomAvatarNum = generateUniqueNumber(1, 6);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomAvatarNum()}.svg`,
  message: randomSentencesText(),
  name: `${getRandomArrayElement(NAMES)}`
});

const createObject = () => ({
  id: generateObjId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: generateRandomSentence(),
  likes: generateLikes(),
  comments: Array.from({ length: generateCommentsNumber() }, createComment)
});

const objArray = Array.from({ length: OBJECTS_COUNT }, createObject);

// eslint-disable-next-line no-console
console.log(objArray);
