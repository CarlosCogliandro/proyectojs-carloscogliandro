const stockProductos = [
    {
        id: 1,
        nombre: "Set Dark Crystal Robe",
        cantidad: 1,
        detalle: "Set Robe",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/Set/darkcrystal.png"
    },
    {
        id: 2,
        nombre: "Set Majestic Robe",
        cantidad: 1,
        detalle: "Set Robe",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/Set/majesticrobe.png",
    },
    {
        id: 3,
        nombre: "Set Majestic Light",
        cantidad: 1,
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/Set/majesticlight.png",
    },
    {
        id: 4,
        nombre: "Set Majestic Heavy",
        cantidad: 1,
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/Set/majesticheavy.png",
    },
    {
        id: 5,
        nombre: "Set Nightmare Light",
        cantidad: 1,
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/Set/nightmarishlight.png",
    },
    {
        id: 6,
        nombre: "Set Nightmare Heavy",
        cantidad: 1,
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/Set/nightmareheavy.png",
    },
    {
        id: 7,
        nombre: "Set Tallum Heavy",
        cantidad: 1,
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "A",
        precio: 1500,
        stock: 1000,
        img: "../img/Set/tallumheavy.png",
    },
    {
        id: 8,
        nombre: "Set Draconic",
        cantidad: 1,
        detalle: "Set Light",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        img: "../img/Set/draconic.png",
    },
    {
        id: 9,
        nombre: "Set Imperial Crusader",
        cantidad: 1,
        detalle: "Set Heavy",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        img: "../img/Set/imperialcrusader.png",
    },
    {
        id: 10,
        nombre: "Set Major Arcana",
        cantidad: 1,
        detalle: "Set Robe",
        categoria: "set",
        subcategoria: "S",
        precio: 4000,
        stock: 1000,
        img: "../img/Set/majorarcana.png",
    },
    {
        id: 11,
        nombre: "Arcana Mace",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/arcanamace.png",
    },
    {
        id: 12,
        nombre: "Draconic Bow",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/draconicbow.png",
    },
    {
        id: 13,
        nombre: "Heavens Divider",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/heavendivider.png",
    },
    {
        id: 14,
        nombre: "Basalt Battlehammer",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/basaltbattlehammer.png",
    },
    {
        id: 15,
        nombre: "Angel Slayer",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/angelslayer.png",
    },
    {
        id: 16,
        nombre: "Tallum Blade*Dark Legion",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/tallumblade-darklegionedge.png",
    },
    {
        id: 17,
        nombre: "Demon Splinter",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/demonsplinter.png",
    },
    {
        id: 18,
        nombre: "Saint Spear",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/saintspear.png",
    },
    {
        id: 19,
        nombre: "Forgotten Blade",
        cantidad: 1,
        detalle: "Weapon S",
        categoria: "Weapons",
        subcategoria: "S",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/forgottenblade.png",
    },
    {
        id: 20,
        nombre: "Dragon Slayer",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 3500,
        stock: 1000,
        img: "../img/Weapon/dragonslayer.png",
    },
    {
        id: 21,
        nombre: "Elysian",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/Weapon/elysian.png",
    },
    {
        id: 22,
        nombre: "Soul Bow",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/Weapon/soulbow.png",
    },
    {
        id: 23,
        nombre: "Soul Separator",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/Weapon/soulseparator.png",
    },
    {
        id: 24,
        nombre: " Tallum Blade*Damascus",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/Weapon/tallumblade-damascus.png",
    },
    {
        id: 25,
        nombre: "Dragon Grinder",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/Weapon/dragongrinder.png",
    },
    {
        id: 26,
        nombre: "Tallum Glaive",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/Weapon/tallumglaive.png",
    },
    {
        id: 27,
        nombre: "Sword Of Miracles",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/Weapon/swordsofmiracles.png",
    },
    {
        id: 28,
        nombre: "Dark Legion's Edge",
        cantidad: 1,
        detalle: "Weapon A",
        categoria: "Weapons",
        subcategoria: "A",
        precio: 2500,
        stock: 1000,
        img: "../img/Weapon/darklegionedge.png",
    },
    {
        id: 29,
        nombre: "Tateossian Ring",
        cantidad: 1,
        detalle: "Jewell S",
        categoria: "Jewell",
        subcategoria: "S",
        precio: 1500,
        stock: 1000,
        img: "../img/jewell/tateearring.png",
    },
    {
        id: 30,
        nombre: "Tateossian Earring",
        cantidad: 1,
        detalle: "Jewell S",
        categoria: "Jewell",
        subcategoria: "S",
        precio: 1500,
        stock: 1000,
        img: "../img/jewell/tatering.png",
    },
    {
        id: 31,
        nombre: "Tateossian Necklace",
        cantidad: 1,
        detalle: "Jewell S",
        categoria: "Jewell",
        subcategoria: "S",
        precio: 1500,
        stock: 1000,
        img: "../img/jewell/tateneck.png",
    },
    {
        id: 33,
        nombre: "Queen Ant Ring",
        cantidad: 1,
        detalle: "Jewell A",
        categoria: "Epic",
        subcategoria: "A",
        precio: 5000,
        stock: 1000,
        img: "../img/jewell/qa.png",
    },
    {
        id: 32,
        nombre: "Baium Ring",
        cantidad: 1,
        detalle: "Jewell S",
        categoria: "Epic",
        subcategoria: "S",
        precio: 5000,
        stock: 1000,
        img: "../img/jewell/baium.png",
    },
    
    {
        id: 34,
        nombre: "Zaken Earring",
        cantidad: 1,
        detalle: "Jewell S",
        categoria: "Epic",
        subcategoria: "S",
        precio: 5000,
        stock: 1000,
        img: "../img/jewell/zaken.png",
    },
    {
        id: 35,
        nombre: "Antharas Earring",
        cantidad: 1,
        detalle: "Jewell S",
        categoria: "Epic",
        subcategoria: "S",
        precio: 5000,
        stock: 1000,
        img: "../img/jewell/antharas.png",
    },
    {
        id: 36,
        nombre: "Valakas Necklace",
        cantidad: 1,
        detalle: "Jewell S",
        categoria: "Epic",
        subcategoria: "S",
        precio: 5000,
        stock: 1000,
        img: "../img/jewell/valakas.png",
    },
    {
        id: 37,
        nombre: "Frintezza's Necklace",
        cantidad: 1,
        detalle: "Jewell S",
        categoria: "Epic",
        subcategoria: "S",
        precio: 5000,
        stock: 1000,
        img: "../img/jewell/frintezza.png",
    },
]