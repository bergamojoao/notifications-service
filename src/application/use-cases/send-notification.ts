import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNoticationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNoticationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNoticationRequest,
  ): Promise<SendNoticationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      content: new Content(content),
      recipientId,
      category,
    });

    this.notificationsRepository.create(notification);

    return { notification };
  }
}
