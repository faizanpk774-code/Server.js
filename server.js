const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express()
const port = 4000

app.use(express.static(path.join(__dirname)));

// Image proxy route
app.get('/proxy-image/:imageName', async (req, res) => {
  try {
    const imageName = req.params.imageName;
    const imageUrl = `https://www.fgz.worldupdates.us/assets/${imageName}`;
    
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    res.set('Content-Type', response.headers['content-type']);
    res.set('Cache-Control', 'public, max-age=3600');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching image:', error.message);
    res.status(404).send('Image not found');
  }
});

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>FGZ Gaming - Home</title>
<link rel="stylesheet" href="style.css?v=2">
</head>
<body>
<div id="particles-js"></div>
<nav class="navbar">
    <div class="logo">FGZ Gaming</div>
    <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="games.html">Games</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>


<section class="hero">
    <div class="hero-slider">
        <div class="slide active" style="background-image: url('/proxy-image/cool-hd-purple-aesthetic-gaming-cover-hosd76z8joix4xs6.jpg');"></div>
        <div class="slide" style="background-image: url('/proxy-image/wallpapersden.com_assassins-s-creed-shadows-4k-gaming_3840x2199.jpg');"></div>
        <div class="slide" style="background-image: url('/proxy-image/10c396ccbafbe2a5f498d87e9eacfffe.jpeg');"></div>
    </div>
    <div class="hero-content">
    <h1>Welcome to Faizan Gaming Zone</h1>
    <p>The Ultimate Gaming Experience</p>

    <a href="https://wa.link/kz8u90" target="_blank">
        <button class="btn">Contact Us</button>
    </a>

</div>
    </div>
</section>

<div class="alert-box" id="alertBox">
    <br>
    <h2>Important Notice</h2>
    <br>
    <p>Before installing any games, please install <b>uTorrent</b> first.</p>
    <br>

    <a href="https://www.utorrent.com/downloads/win/" target="_blank" class="download-btn" onclick="stopGlow()">
        Download uTorrent
    </a>
    <br>

</div>


<section class="section">
    <h2>Popular Games</h2>
    <div class="games-container">
        <a href="magnet:?xt=urn:btih:9B6604CC80F7701721C0C23BF416748D78CCA06E&dn=Marvel%26%23039%3Bs+Spider-Man+2%3A+Digital+Deluxe+Edition+%28v1.130.1.0%2Fv1.131.0.0+%2B+2+DLCs+%2B+Unlocker+%2B+Bonus+Soundtrack%2C+MULTi26%29+%5BFitGirl+Repack%2C+Selective+Download+-+from+64.5+GB%5D&tr=udp%3A%2F%2Fopentor.net%3A6969&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce&tr=udp%3A%2F%2Fbt2.archive.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filemail.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce" class="card-link">
            <div class="card">
                <img src="/proxy-image/marvelsspiderman2_lob_crd_02.jpg" alt="Marvelâ€™s Spider-Man Remastered">
                <h3>Marvelâ€™s Spider-Man Remastered</h3>
                <h3>File password: 123</h3>
            </div>
        </a>

        <a href="gta%20game%20index.html" class="card-link">
    <div class="card">
        <img src="/proxy-image/Grand_Theft_Auto_V.png" alt="GTA V">
        <h3>GTA V</h3>
        <h3>File password: 123</h3>
    </div>
</a>


        <a href="magnet:?xt=urn:btih:25E2F1AA84D8E4AFBA8105656BDB4DDF3DB95FA4&dn=Ghost+of+Tsushima+DIRECTOR%26%23039%3BS+CUT+%28v1053.0.0515.2048+%2B+DLC+%2B+Bonus+Content+%2B+Multiplayer%2C+MULTi26%29+%5BFitGirl+Repack%2C+Selective+Download+-+from+31.2+GB%5D&tr=udp%3A%2F%2Fopentor.net%3A6969&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&tr=http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce&tr=http%3A%2F%2Fopen.acgtracker.com%3A1096%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce" class="card-link">
            <div class="card">
                <img src="/proxy-image/EGS_GhostofTsushima_SuckerPunchProductions_S2_1200x1600-e23e02c1d70be7b528dba50860f87d39.jpg" alt="Ghost of Tsushima">
                <h3>Ghost of Tsushima</h3>
                <h3>File password: 123</h3>
            </div>
        </a>
    </div>
</section>
<section class="section">
    
    <div class="games-container">

    <a href="magnet:?xt=urn:btih:20416EFFA471E26237751CB73799E5C90165EC8E&dn=Tom.Clancys.Ghost.Recon.Wildlands.Complete.Edition.REPACK-KaOs&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fodd-hd.fr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.srv00.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fd40969.acod.regrucolo.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Fz.mercax.com%3A53%2Fannounce&tr=udp%3A%2F%2Fttk2.nbaonlineservice.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce" class="card-link">
        <div class="card">
            <img src="/proxy-image/B12tLxHvCFS.jpg" alt="GTA V">
            <h3>Tom Clancy's Ghost Recon Wildlands</h3>
            <h3>File password: 123</h3>
        </div>
    </a>

    <a href="magnet:?xt=urn:btih:BA826B9BA602A8F7E4DF002B18C70F3C7CF5889B&dn=The+Casting+of+Frank+Stone%3A+Deluxe+Edition+%28%2B+2+DLCs%2C+MULTi15%29+%5BFitGirl+Repack%5D&tr=udp%3A%2F%2Fopentor.net%3A6969&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce&tr=udp%3A%2F%2Fbt2.archive.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filemail.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce" class="card-link">
        <div class="card">
            <img src="/proxy-image/The_Casting_of_Frank_Stone_cover_art.jpg" alt="Spider-Man">
            <h3>The Casting of Frank Stone</h3>
            <h3>File password: 123</h3>
        </div>
    </a>

    <a href="magnet:?xt=urn:btih:7F2A38ED99AEE6A2F3037E5A744670655FB5100F&dn=Mafia.III.Definitive.Edition.v1.0.1-GOG&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2790%2Fannounce&tr=udp%3A%2F%2Ftracker.thinelephant.org%3A12790%2Fannounce&tr=udp%3A%2F%2Ftracker.fatkhoala.org%3A13710%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce" class="card-link">
        <div class="card">
            <img src="/proxy-image/Mafia_III_cover_art.jpg" alt="Ghost of Tsushima">
            <h3>Mafia III</h3>
            <h3>File password: 123</h3>
        </div>
    </a>

</div>

    </div>
    </section>
    <section class="section">
    <div class="games-container">

    <a href="magnet:?xt=urn:btih:51C86B31924DC3B1FCBC7F0E2491ADF8DE6B1ACE&dn=Rise+of+the+Tomb+Raider%3A+20+Year+Celebration+%28v1.0.1.2+GOG+%2B+All+DLCs%2C+MULTi15%29+%5BFitGirl+Repack%2C+Selective+Download+-+from+12.9+GB%5D&tr=udp%3A%2F%2Fopentor.net%3A6969&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ccp.ovh%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=https%3A%2F%2Ftracker.tamersunion.org%3A443%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce&tr=udp%3A%2F%2Fbt2.archive.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt1.archive.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filemail.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce" class="card-link">
        <div class="card">
            <img src="/proxy-image/images%20(1).jpg" alt="GTA V">
            <h3>Rise of the Tomb Raider</h3>
            <h3>File password: 123</h3>
        </div>
    </a>

    <a href="magnet:?xt=urn:btih:C993FB5775FE7E4E33E6BDE266DB4B578006B307&dn=NINJA+GAIDEN+2+Black-RUNE+%5Bv1.0.7.0%5D+%5BALL+DLCs%5D+%5BMulti8%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce" class="card-link">
        <div class="card">
            <img src="/proxy-image/images%20(2).jpg" alt="Spider-Man">
            <h3>NINJA GAIDEN 2 Black</h3>
            <h3>File password: 123</h3>
        </div>
    </a>

    <a href="magnet:?xt=urn:btih:52B137A10453D3E294446584C07E8413C2A56C4F&dn=Hell+is+Us+%28v1.5.40.44840%29&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce&tr=http%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.filemail.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.renfei.net%3A8080%2Fannounce&tr=udp%3A%2F%2Fbittorrent-tracker.e-n-c-r-y-p-t.net%3A1337%2Fannounce&tr=http%3A%2F%2Fbittorrent-tracker.e-n-c-r-y-p-t.net%3A1337%2Fannounce&tr=udp%3A%2F%2Fopentracker.io%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.qu.ax%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.ipv6tracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce" class="card-link">
        <div class="card">
            <img src="/proxy-image/hell-is-us-q3hh6.jpg" alt="Ghost of Tsushima">
            <h3>Hell is Us - Deluxe Edition</h3>
            <h3>File password: 123</h3>
        </div>
    </a>

</div>

    <!-- </div>
</section>
  <section class="section">
    <h2>Popular Games</h2>

    <div class="games-container">

        <div class="card">
            <img src="/proxy-image/Grand_Theft_Auto_V.png" alt="GTA V">
            <h3>GTA V</h3>
        </div>

        <div class="card">
            <img src="/proxy-image/marvelsspiderman2_lob_crd_02.jpg" alt="Spider-Man">
            <h3>Spider-Man</h3>
        </div>

        <div class="card">
            <img src="/proxy-image/ghost.jpg" alt="Ghost of Tsushima">
            <h3>Ghost of Tsushima</h3>
        </div> -->

    </div>      
    

</section>
</section>
</section>
<footer>
    Â© 2026 FGZ Faizan Gaming Zone | All Rights Reserved
</footer>
<script src="https://cdn.jsdelivr.net/npm/particles.js"></script>

<script>
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#00ffff","#ff00ff","#ffffff"]
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.6
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 130,
      "color": "#00ffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "out_mode": "out"
    }
  },

  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
</script>

</body>
</html>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})