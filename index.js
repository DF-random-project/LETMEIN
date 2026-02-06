import { App } from '@slack/bolt';

const app = new App({
  token: process.env.TOKEN,
  socketMode: true,
  appToken: process.env.WS
});

// Listens to incoming messages that contain "hello"
app.message('pls reply', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({thread_ts:message.ts,
	"blocks": [
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Click Me",
						"emoji": true
					},
					"value": "click_me_123",
					"action_id": "reply"
				}
			]
		}
	]
});
});

app.action('reply', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say({text:"you have been replyed!",thread_ts:body.message.ts});
  // console.log("body",body);
  // console.log(say);
  // console.log(ack);
  // await 
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  app.logger.info('⚡️ Bolt app is running!');
})();

const player = require('play-sound');
player.play('error1.mp3', (err) => {
  if (err) console.error(err);
});
