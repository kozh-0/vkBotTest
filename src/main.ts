import 'dotenv/config';

const VkBot = require('node-vk-bot-api');
const bot = new VkBot(process.env.VK_API_KEY);

// bot.use((ctx: any, next: any) => {
//   console.log(ctx.message.text);
// });

bot.on((ctx: any) => {
  console.log(ctx);
  if (ctx.message.type === 'message_new') {
    ctx.reply(ctx.message.text);
    return console.log(ctx.message.text);
  }
  if (ctx.message.type === 'group_join') {
    ctx.reply('Приветствуем в группе!');
    return console.log(ctx.message.text);
  }
  //   if (ctx.message.type === 'join')

  //   ctx.reply(ctx);
});

bot.startPolling();
