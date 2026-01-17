const HBInit = require("haxball-headless");

const room = HBInit({
  roomName: "🇹🇷 KONSEY",
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
