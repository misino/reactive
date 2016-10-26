import { observable, action, runInAction } from 'mobx';
import { List } from 'immutable';

import { INIT, LOADING, SUCCESS, ERROR } from '../../consts/phaseEnums';

import * as api from '../../apis/chatApi';

export default class ChatStore {
@observable name = null;
  @observable messages = List();
  @observable phase = INIT;
  @observable error = null;
  @observable messageToAdd = "";

  @action async fetchChat(name) {
    try {
      this.name = null;
      this.messages = List();
      this.phase = LOADING;
      this.error = null;

      const messages = await api.fetchMessages(name);

      runInAction('#fetchChat success', () => {
        this.name = name;
      this.phase = SUCCESS;
      this.messages = List(messages);
    });
    } catch (error) {
      runInAction('#fetchChat error', () => {
        this.phase = ERROR;
      this.error = String(error);
    });
    }
  }

  @action resetChat() {
    this.phase = INIT;
    this.messages = List();
  }

  @action changeMessageToAdd(message) {
    console.log(message);
    this.messageToAdd = message;
  }

  @action addMessage() {
    api.addMessage(this.name, this.messageToAdd);
    this.fetchChat(this.name);
  }

  @action removeMessage(index) {
    api.removeMessage(this.name, index);
    this.fetchChat(this.name);
  }
}
