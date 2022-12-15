import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('Voce tem uma nova solicitacao'),
      category: 'social',
      recipientId: 'recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
