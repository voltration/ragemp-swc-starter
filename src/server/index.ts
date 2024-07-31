mp.events.add("playerReady", (p: PlayerMp) => {
    p.notify(`Hi from the server, ${p.socialClub}!`);
});