const fs = require("fs");
const vm = require("vm");
const https = require("https");

const code = `
${require("fs").readFileSync(__dirname + "/headless-host.js", "utf8")}
`;

vm.runInThisContext(code);

const room = HBInit({
  roomName: "🇹🇷 TÜRK LİGİ | 7/24",
  maxPlayers: 16,
  public: true,
  noPlayer: true
});

room.setDefaultStadium("Classic");
room.setScoreLimit(3);
room.setTimeLimit(0);

room.onPlayerJoin = function(player) {
  room.sendAnnouncement(
    "🇹🇷 Türk Ligi Odasına Hoş Geldin",
    player.id,
    0x00FF00,
    "bold"
  );
};
