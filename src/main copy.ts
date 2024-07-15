import 'dotenv/config';

const VkBot = require('node-vk-bot-api');
const bot = new VkBot(process.env.VK_API_KEY);

// bot.use(async (ctx: any, next: any) => {
//   try {
//     console.log(new Date().getTime(), ctx.message.type, ctx.message.text);

//     if (ctx.message.type === 'group_join') {
//       console.log('JOINED GROUP', ctx.from_id);
//     }

//     if (ctx.message.type === 'message_new') {
//       console.log('NEW MESSAGE');
//     }

//     //   ctx.bot.sendMessage(ctx.from_id, 'ОТПРАВИЛ!');

//     //   return next();
//   } catch (e) {
//     console.error(e);
//   }
// });
// bot.use(async (ctx: any) => {
//   console.log(ctx);
//   if (ctx.message.payload === '{"command":"start"}') {
//     await ctx.reply('НОВЫЙ ПОЛЬЗОВАТЕЛЬ НАЖАЛ СТАРТ');
//   }
// });

bot.on('message_new', async (ctx: any) => {
  if (ctx.message.from_id === ctx.message.peer_id) {
    // Пользователь вступил в группу
    await ctx.reply('Welcome to the group!');
  }
});

bot.command('bbb', async (ctx: any) => {
  //   console.log(ctx);
  await ctx.reply('Привет кек');
});

bot.startPolling(() => {
  console.log('ЗАПУСТИЛ БОТА!');
});

// bot.on('message_new', async (ctx: any) => {
//   await ctx.reply(ctx.from_id + ' ' + ctx.message.text);
// });
