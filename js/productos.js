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
        img: "../img/set/darkcrystal.png"
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
        img: "../img/set/majesticrobe.png",
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
        img: "../img/set/majesticlight.png",
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
        img: "../img/set/majesticheavy.png",
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
        img: "../img/set/nightmarishlight.png",
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
        img: "../img/set/nightmareheavy.png",
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
        img: "../img/set/tallumheavy.png",
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
        img: "../img/set/draconic.png",
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
        img: "../img/set/imperialcrusader.png",
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
        img: "../img/set/majorarcana.png",
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
        img: "../img/weapon/arcanamace.png",
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
        img: "../img/weapon/draconicbow.png",
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
        img: "../img/weapon/heavendivider.png",
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
        img: "../img/weapon/basaltbattlehammer.png",
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
        img: "../img/weapon/angelslayer.png",
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
        img: "../img/weapon/tallumblade-darklegionedge.png",
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
        img: "../img/weapon/demonsplinter.png",
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
        img: "../img/weapon/saintspear.png",
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
        img: "../img/weapon/forgottenblade.png",
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
        img: "../img/weapon/dragonslayer.png",
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
        img: "../img/weapon/elysian.png",
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
        img: "../img/weapon/soulbow.png",
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
        img: "../img/weapon/soulseparator.png",
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
        img: "../img/weapon/tallumblade-damascus.png",
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
        img: "../img/weapon/dragongrinder.png",
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
        img: "../img/weapon/tallumglaive.png",
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
        img: "../img/weapon/swordsofmiracles.png",
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
        img: "../img/weapon/darklegionedge.png",
    },
]