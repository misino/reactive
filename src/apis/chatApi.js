const chats = {
  crush: [
    'Hello there, sexy',
    'wanna hang out?',
  ],
  bob: [
    'kek',
    'do you even lift?',
    'teach me C pls',
  ],
  doge: [
    'wow',
    'so chat',
    'much oneway',
    'very irl',
  ],
};

export function fetchMessages(name) {  // eslint-disable-line import/prefer-default-export
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (chats[name]) {
      resolve(chats[name]);
    } else {
      reject('Oops, chat not found.');
    }
  }, 1000);
});
}

export function addMessage(chatName, message) {
  chats[chatName].push(message);
}

export function removeMessage(chatName, index) {
  chats[chatName] = removeItem(chats[chatName], index);
}

function removeItem(array, index) {
  if (index >= 0) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
  }
}