module.exports = {
  command: 'alive',
  run: async (sock, m, text) => {
    await sock.sendMessage(m.key.remoteJid, {
      text: '🤖 I am alive!\n\n✅ Bot is running successfully.'
    });
  }
};
