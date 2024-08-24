import { MessageRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessageRepository;
  constructor() {
    // Service is creating its own dependencies.
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessageRepository();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
