#!/usr/bin/env node

const TelegramBot = require('node-telegram-bot-api');
const token = '565571553:AAFNNPQpMjmAhnEl5QYruyVOL_HNsClbJTI';
const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/ajuda/, (msg) => {
  const chatId = msg.chat.id;
  const fromID = msg.from.id;
  const opts = {
    "disable_notification": true,
    "reply_to_message_id": msg.message_id,
    "parse_mode": "HTML",
  };
  bot.sendMessage(chatId, "<b>VaporGram Bot - Informações básicas para novos usuários.</b> \n<i>Comandos:</i> \n/coils - Descriçao dos tipos de Coils mais utilizadas. \n/baterias - Descrição e indicação de baterias. \n/extras - Dicas, firmwares e extras de alguns mods. \n/juices - Recipes, fornecedores e reviews.", opts)
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const fromID = msg.from.id;
  const opts = {
    "disable_notification": true,
    "reply_to_message_id": msg.message_id,
    "disable_web_page_preview": true,
    "parse_mode": "HTML",
  };

  const ajudaInfo = "/ajuda";
  if (msg.text.toString().indexOf(ajudaInfo) === 0) {
    bot.sendMessage(fromID, "Também ofereço suporte via chat privado ;)", {
      "reply_markup": {
        "keyboard": [
          ["/coils", "/baterias"],
          ["/extras", "/juices"]
        ]
      }
    });
  }

  const coilsInfo = "/coils";
  if (msg.text.toString().indexOf(coilsInfo) === 0) {
    bot.sendMessage(chatId, "Nesses links abaixo você aprenderá todo básico para iniciar suas builds: \n<a href='http://www.vaporaqui.com.br/faca-sua-propria-resistencia-vale-a-pena/'>- Sobre Coils - O Começo</a> \n<a href='http://www.e-cigclube.com.br/tipos-de-coils-resistencia-para-vape/'>- Diferentes tipos de Coils - Qual Escolher?</a> \n<a href='https://www.ecigguide.com/common-type-wires-vaping'>- Fios, quais existem e em que modo utilizar? (Inglês)</a> \n<a href='https://www.youtube.com/watch?v=uhcq39euhOU'>- Guia para iniciantes - Ferramentas - Diâmetros - Fios e Resistências (Inglês)</a> \n", opts);
  }

  const bateriaInfo = "/baterias";
  if (msg.text.toString().indexOf(bateriaInfo) === 0) {
    bot.sendMessage(chatId, "Nesses links abaixo você aprenderá todo básico para escolher suas baterias: \n<a href='http://www.vapeon.com.br/viewtopic.php?t=50'>- Top 5 Baterias 18650</a> \n<a href='https://www.youtube.com/watch?v=2Wii3pLQPLY'>- Trocando o wrap das pilhas 18650</a> \n<a href='https://www.e-cigarette-forum.com/blog-entry/list-of-battery-tests.7436/'>- Mooch - Lista completa de teste de baterias (Inglês)</a> \n<a href='https://www.djlsbvapes.com/chose-batteries/'>- Como escolher sua bateria (Inglês)</a> \n", opts);
  }

  const extrasInfo = "/extras";
  if (msg.text.toString().indexOf(extrasInfo) === 0) {
    bot.sendMessage(chatId, "Extras - Dicas, firmwares, themes e profiles: \n<a href='https://drive.google.com/drive/folders/1L5nxzpcRgCFgQNlW8W3qCW6ISk589JH1'>- VaporGram - Files - Suporte atual para VooPoo Drag, vBoy e DNA 75/200/250 (AC Azevedo)</a> \n<a href='https://docs.google.com/spreadsheets/d/1KiWme42uyaFHC5YTTpbxv7gZzUxuaikXrtWzZKpl2XY/edit#gid=0'>- Sugestões de preços de Kits Iniciais - Não caia em preços abusivos!</a> \n", opts)
  }

  const juicesInfo = "/juices";
  if (msg.text.toString().indexOf(juicesInfo) === 0) {
    bot.sendMessage(chatId, "Fornecedores de essências, reviews e algumas receitas: \n<a href='http://forum.e-liquid-recipes.com/t/a-beginners-guide-to-making-the-most-highly-rated-recipes/83612?source_topic_id=86686'>- Guia para iniciantes. Receitas com poucos igredientes e dicas (Inglês)</a> \n<a href='http://mundovaper.com/'>- Mundo Vaper - Fornecedor de Essências</a> \n<a href='http://www.ciavapes.com/'>- CiaVapes - Fornecedor de Essências</a> \n<a href='https://www.vladvape.com/'>- Vlad Vape - Fornecedor de Essências e Acessórios</a> \n<a href='https://e-liquid-concentrates.co.za/diy-e-liquid-recipes/'>- Receitas 1 (Inglês)</a> \n<a href='https://www.lediypourlesnuls.com/recettes/les-clones/'>- Receitas 2 (Inglês)</a> \n<a href='https://www.reddit.com/r/DIY_eJuice/wiki/index/flavor_reviews'>- Reviews de Essências (Inglês)</a> \n<a href='http://e-liquid-recipes.com/'>- E-Liquid Recipes - Base de dados de Receitas (inglês)</a> \n<a href='https://alltheflavors.com/'>- All The Flavors - Base de dados de Receitas (inglês)</a> \n<a href='http://receitadiy.com/'>- ReceitasDIY - Base de dados Nacional de Receitas</a> \n", opts)
  }
});