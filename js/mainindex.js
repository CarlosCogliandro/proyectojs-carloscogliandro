
// ESTABA IMPLEMENTADO PERO LO SAQUE


let navIndex = document.getElementById('navIndex');
let header = document.getElementById('headerIndex');
let main = document.getElementById('mainIndex');
let footer = document.getElementById('footerIndex');



// NAVBAR INDEX

function mostrarNav(){
    const index1 = document.createElement('index1');
    index1.classList.add('navbar');
    index1.innerHTML =  `<ul class="navbar1">
                            <li><a class="link" href="./index.html">HOME</a></li>
                            <li><a class="link" href="">REWARDS</a></li>
                            <li><a class="link" href="">RULES</a></li>
                            <li><a class="link" href="./pages/donaciones.html">DONATION</a></li>
                            <li><a class="link" href="">SUPPORT</a></li>
                        </ul>
                        </div>

                        <div>
                            <ul class="redessociales">
                                <li><a class="redes1" href="https://www.facebook.com/"><img class="redes" src="./img/redes/facebook.png" alt="facebook"></a></li>
                                <li><a class="redes1" href="https://www.twitter.com/"><img class="redes" src="./img/redes/gorjeo.png" alt="twitter"></a></li>
                                <li><a class="redes1" href="https://www.instagram.com/"><img class="redes" src="./img/redes/instagram.png" alt="instagram"></a></li>
                                <li><a class="redes1" href="https://www.twitch.com/"><img class="redes" src="./img/redes/twitch.png" alt="twitch"></a></li>
                                <li><a class="redes1" href="https://www.youtube.com/"><img class="redes" src="./img/redes/youtube.png" alt="youtube"></a></li>
                            </ul>
                        </div>

                        <div>
                            <a href=""><img class="imgaccount" src="./img/usuario.png" alt="logocuenta"></a>
                        </div>
                        `

    navIndex.appendChild(index1);
}

mostrarNav();


// HEADER

function mostrarHeader() {
    const index2 = document.createElement('index2')
    index2.classList.add('header');
    index2.innerHTML =   `<h1>L2 Twisters</h1>
                        <h4>INTERLUDE X10 100% RETAIL SERVER</h4>
                        <h6 class="header_h6">The server makes you feel like playing back in 2004, much nostalgia, very populated server, 2 years online already. 
                            Also for those who like competitive playing and modern UI you can play with our new Classic Client.</h6>
                        <a href=""><button class="btn1 parpadeo">JOIN US</button></a>

                        <div class="cards">
                            <div class="card1">
                                <h5>Twisters Project</h5>
                                <p>The Twisters project started on 31st October 2019 with one simple goal, to</p>
                                <a href=""><button class="btn">Read More</button></a>
                            </div>
                            <div class="card1 card2">
                                <h5>Licensed Account</h5>
                                <p>2 players with the same IP? If you are sharing IP with your partner, family or</p>
                                <a href=""><button class="btn">Read More</button></a>
                            </div>
                            <div class="card1 card3">
                                <h5>Stream Twisters</h5>
                                <p>We have a referral system in which each player has a link to invite new</p>
                                <a href=""><button class="btn">Read More</button></a>
                            </div>
                            <div class="card1 card4">
                                <h5>Free VIP</h5>
                                <p>You can get the x1.5 bonus by voting for our server and helping us to</p>
                                <a href=""><button class="btn">Read More</button></a>
                            </div>
                        </div>
                        `

    header.appendChild(index2)
}

mostrarHeader();


// MAIN

function mostrarMain() {
    const index3 = document.createElement('index3')
    index3.innerHTML =    `<section class="section1">
                        <div class="cards">
                            <div class="card12">
                                <img src="./img/nofreeitem.png" alt="">
                                <h5>NO FREE EXP/ITEMS</h5>
                                <p>Hardcore experience, you have to earn everything with effort.</p>
                            </div>
                            <div class="card12">
                                <img src="./img/nocheater.png" alt="">
                                <h5>NO CHEATERS</h5>
                                <p>We have no mercy with people that breaks our rules. Fair play!</p>
                            </div>
                            <div class="card12">
                                <img src="./img/nobot.png" alt="">
                                <h5>NO BOTS</h5>
                                <p>We have a powerful anti-cheat system that we continuously improve to keep bots at bay.</p>
                            </div>
                            <div class="card12">
                                <img src="./img/noduelbox.png" alt="">
                                <h5>NO DUALBOX</h5>
                                <p>Unique experience without boxes, back to the roots.</p>
                            </div>
                            <div class="card12">
                                <img src="./img/nop2w.png" alt="">
                                <h5>NO P2W</h5>
                                <p>No boosters for donations, you have to get everything by yourself.</p>
                            </div>
                        </div>
                    </section>

                    <section class="section2">
                    
                        <div class="twitch">
                            <h3>Twitch Stream</h3>
                            <div class="imgtwitch">
                                <iframe class="imgtwitch1" width="560" height="315" src="https://www.youtube.com/embed/MAHNHf-9J5o?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe class="imgtwitch1" width="560" height="315" src="https://www.youtube.com/embed/DzBTROqB2Nc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe class="imgtwitch1" width="560" height="315" src="https://www.youtube.com/embed/b0dG-j8KyCM?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe class="imgtwitch1" width="560" height="315" src="https://www.youtube.com/embed/xTrcYtSymAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe class="imgtwitch1" width="560" height="315" src="https://www.youtube.com/embed/aGoLZMC-QL0?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe class="imgtwitch1" width="560" height="315" src="https://www.youtube.com/embed/E-jsf3oTUBo?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    
                        <div class="vote">
                            <h3>VOTE FOR US</h3>
                            <a href="https://l2.hopzone.net/"><img class="votesize" src="./img/vote.png" alt=""></a>
                            <a href="https://top.l2jbrasil.com/"><img class="votesize" src="./img/l2jbrasil.png" alt=""></a>
                            <a href="https://www.top100zone.com/lineage2/"><img class="votesize" src="./img/top100arena.png" alt=""></a>
                            <a href="https://l2.topgameserver.net/lineage/all-servers"><img class="votesize" src="./img/topgameserver.png" alt=""></a>
                        </div>
                    </section>
                    `

    main.appendChild(index3)
}

mostrarMain();


// FOOTER

function mostrarFooter() {
    const index4 = document.createElement('index4')
    index4.classList.add('footer')
    index4.innerHTML =  `<p>© 2022 - Curso: JavaScript</p> 
                        <p>By Carlos Cogliandro</p> 
                        <p>Copia de la pagina:</p> 
                        <a href="https://l2reborn.org/">L2 Reborn - x1</a>
                        `

footer.appendChild(index4);
}

mostrarFooter();