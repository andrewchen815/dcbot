const Discord = require('discord.js')
//常數Discord設置需求導入discord.js套件

const client = new Discord.Client();
//不變更使用者下新增dc使用者

var MyToken = 1234567890 ; //前面替換Bot Token 
client.login(MyToken)

client.on('Status: Ready!',() => {
    console.log(`Logged in as ${client.user.tag}!`);
});
//如果有登入成功顯示此訊息

//輸入特定訊息來回覆（可自由增加）
client.on('message', msg => {
    switch (msg.content)
    {
    case '你好': //這邊是你輸入內容
    msg.channel.send('Hola'); //這邊是bot回應
    break;
    case 'Hi':
    msg.channel.send('Hello');
    break;
    }
    });

//進出語音頻道
client.on('message', msg => {
    switch (msg.content)
    {
    case '~Verniy': {
    if(msg.member.voiceChannel) {
    if( !msg.guild.voiceConnection ) {
    msg.member.voiceChannel.join().then(
    connection => {
    }
    ).catch(console.error);
    msg.channel.send('已進入頻道');
    }
    } else {
    msg.reply('請先進入一個語音頻道後再試一次');
    }
    break;
    }
    case '~Verniy休息': {
    if( msg.guild.voiceConnection ) {
    msg.guild.voiceConnection.disconnect();
    msg.channel.send('已離開');
    } else {
    msg.channel.send('未進入頻道！');
    }
    break;
    }
    }
    });