import 'dotenv/config';
import VkBot from 'node-vk-bot-api';

const bot = new VkBot({ token: process.env.VK_API_KEY!, group_id: parseInt(process.env.VK_GROUP_ID!) });

bot.command('Начать', (ctx, next) => {
  if (ctx.message.payload === '{"command": "start"}') {
    console.log(`START - ${ctx.message.text}`);
    ctx.reply('Я вас категорически приветствую!');
  }
});

bot.command('Прайс', (ctx, next) => {
  console.log(`PRICE - ${ctx.message.text}`);
  ctx.reply('Цены такие-то...');
});

bot.command('Услуги', (ctx, next) => {
  console.log(`SERVICES - ${ctx.message.text}`);
  ctx.reply('Услуги такие-то...');
});

bot.startPolling((err) => {
  if (err) {
    console.error(err);
  }
  return {};
});

bot.use(async (ctx) => {
  // @ts-ignore
  if (ctx.message.type === 'message_new') {
    console.log(ctx);
  }

  // if (ctx.message.type === 'group_join') {
  //   console.log('НОВЫЙ ЧЛЕН');
  //   console.log(ctx);

  //   await ctx.('Приветствуем в группе!');
  //   return console.log(ctx.message.text);
  // }
});
