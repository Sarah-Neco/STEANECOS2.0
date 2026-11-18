const games = [
  {
    id: 1,
    name: "Horizon: Beyond",
    genre: "Aventura",
    price: 79.90,
    oldPrice: 99.90,
    tag: "DESTAQUE",
    rating: "Muito positiva",
    score: 94,
    dev: "Aurora Interactive",
    mode: "Um jogador",
    short: "Uma jornada épica por paisagens desconhecidas e ruínas ancestrais.",
    description: "Atravesse biomas vibrantes, desvende segredos de civilizações perdidas e domine habilidades elementais em uma aventura de mundo aberto cheia de mistérios.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel Core i3-6100 / AMD Ryzen 3 1200<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 960 (2GB)<br><b>Armazenamento:</b> 25 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel Core i5-8400 / AMD Ryzen 5 2600<br><b>Memória:</b> 16 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA RTX 2060 (6GB)<br><b>Armazenamento:</b> 25 GB SSD",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 2,
    name: "Emberfall",
    genre: "Ação",
    price: 49.90,
    oldPrice: 69.90,
    tag: "OFERTA",
    rating: "Muito positiva",
    score: 91,
    dev: "Pyre Forge",
    mode: "Um jogador / Co-op",
    short: "Combate frenético e magia sombria em um reino em chamas.",
    description: "Enfrente colossos de cinzas e forje armas lendárias em um RPG de ação intenso com batalhas rápidas e chefes memoráveis.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel Core i5-4460<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 1050 Ti<br><b>Armazenamento:</b> 15 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel Core i7-7700<br><b>Memória:</b> 16 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 1660 Super<br><b>Armazenamento:</b> 15 GB SSD",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 3,
    name: "Green Valley",
    genre: "Simulação",
    price: 29.90,
    oldPrice: 39.90,
    tag: "POPULAR",
    rating: "Extremamente positiva",
    score: 97,
    dev: "Meadow Works",
    mode: "Um jogador / Multijogador",
    short: "Crie, cultive e transforme seu próprio refúgio no campo.",
    description: "Construa sua fazenda, faça amizade com moradores locais e personalize cada detalhe de um vale acolhedor ao longo das quatro estações.",
    reqMin: "<b>SO:</b> Windows 7 / 10<br><b>Processador:</b> 2 GHz Dual Core<br><b>Memória:</b> 4 GB de RAM<br><b>Placa de vídeo:</b> 256MB de vídeo<br><b>Armazenamento:</b> 5 GB",
    reqRec: "<b>SO:</b> Windows 10 / 11<br><b>Processador:</b> 3 GHz Quad Core<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> 1GB de vídeo dedicada<br><b>Armazenamento:</b> 5 GB",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 4,
    name: "Astral Tactics",
    genre: "Estratégia",
    price: 59.90,
    oldPrice: null,
    tag: "NOVO",
    rating: "Muito positiva",
    score: 89,
    dev: "Nebula Core",
    mode: "PvP Online / Campanha",
    short: "Comande frotas estelares em batalhas táticas por turnos.",
    description: "Planeje cada salto hiperespacial, gerencie recursos planetários e supere adversários em combates espaciais altamente estratégicos.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel Core i3<br><b>Memória:</b> 6 GB de RAM<br><b>Placa de vídeo:</b> Intel HD Graphics 630<br><b>Armazenamento:</b> 10 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel Core i5<br><b>Memória:</b> 12 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 1060<br><b>Armazenamento:</b> 10 GB SSD",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 5,
    name: "Neon District 2099",
    genre: "Ação",
    price: 39.90,
    oldPrice: 79.90,
    tag: "OFERTA",
    rating: "Muito positiva",
    score: 92,
    dev: "CyberPulse",
    mode: "Um jogador",
    short: "Infiltre-se em megacorporações em uma metrópole cyberpunk.",
    description: "Use implantes cibernéticos, hackeie sistemas de segurança e explore becos iluminados por neon em uma história cheia de reviravoltas.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> AMD FX-8350 / Intel i5-3570<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> Radeon R9 380 / GTX 960<br><b>Armazenamento:</b> 30 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Ryzen 5 3600 / i7-4790<br><b>Memória:</b> 16 GB de RAM<br><b>Placa de vídeo:</b> RTX 2060 / RX 5700 XT<br><b>Armazenamento:</b> 30 GB SSD",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1519607748493-7f7ca9c4e3a8?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 6,
    name: "Wild Trails",
    genre: "Aventura",
    price: 24.90,
    oldPrice: null,
    tag: "INDIE",
    rating: "Muito positiva",
    score: 90,
    dev: "Pinecone Studio",
    mode: "Um jogador",
    short: "Uma viagem contemplativa por trilhas e montanhas selvagens.",
    description: "Fotografe animais raros, monte acampamentos sob as estrelas e descubra histórias escondidas nas trilhas mais remotas.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel Core i3<br><b>Memória:</b> 6 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 750<br><b>Armazenamento:</b> 8 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel Core i5<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 1060<br><b>Armazenamento:</b> 8 GB SSD",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 7,
    name: "Chronicles of Eldoria",
    genre: "RPG",
    price: 119.90,
    oldPrice: 149.90,
    tag: "DESTAQUE",
    rating: "Extremamente positiva",
    score: 96,
    dev: "Mythic Realm",
    mode: "Um jogador",
    short: "Um RPG clássico de fantasia com escolhas que moldam o mundo.",
    description: "Monte seu grupo de heróis, personalize classes e feitiços e decida o destino de reinos inteiros em mais de 80 horas de campanha.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel i5-6600K / AMD Ryzen 5 1600<br><b>Memória:</b> 12 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 1060 6GB<br><b>Armazenamento:</b> 50 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel i7-8700K / AMD Ryzen 5 3600X<br><b>Memória:</b> 16 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA RTX 2070 8GB<br><b>Armazenamento:</b> 50 GB SSD",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 8,
    name: "Whispering Manor",
    genre: "Terror",
    price: 34.90,
    oldPrice: 49.90,
    tag: "OFERTA",
    rating: "Muito positiva",
    score: 88,
    dev: "Nightshade Games",
    mode: "Um jogador",
    short: "Sobreviva à noite em uma mansão vitoriana amaldiçoada.",
    description: "Com apenas uma lanterna e pistas fragmentadas, resolva enigmas sombrios enquanto algo observa cada passo seu nos corredores.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel Core i5<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 970<br><b>Armazenamento:</b> 12 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel Core i7<br><b>Memória:</b> 16 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA RTX 2060<br><b>Armazenamento:</b> 12 GB SSD",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 9,
    name: "Apex Drift Online",
    genre: "Corrida",
    price: 0,
    oldPrice: null,
    tag: "GRÁTIS",
    rating: "Muito positiva",
    score: 87,
    dev: "TurboLine",
    mode: "Multijogador Online",
    short: "Corridas arcade em alta velocidade com tuning completo.",
    description: "Desafie jogadores do mundo todo em circuitos noturnos, personalize seu carro e suba no ranking competitivo gratuitamente.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel Core i3<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 960<br><b>Armazenamento:</b> 18 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel Core i5<br><b>Memória:</b> 16 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA RTX 2060<br><b>Armazenamento:</b> 18 GB SSD",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 10,
    name: "Starlight Odyssey",
    genre: "RPG",
    price: 89.90,
    oldPrice: null,
    tag: "NOVO",
    rating: "Extremamente positiva",
    score: 95,
    dev: "CosmoWorks",
    mode: "Um jogador",
    short: "Um RPG sci-fi vibrante sobre tripulações e planetas alienígenas.",
    description: "Recrute especialistas, melhore sua nave e explore sistemas solares coloridos cheios de facções e missões secundárias.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel i5<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> GTX 1060<br><b>Armazenamento:</b> 35 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel i7<br><b>Memória:</b> 16 GB de RAM<br><b>Placa de vídeo:</b> RTX 3060<br><b>Armazenamento:</b> 35 GB SSD",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 11,
    name: "Pixel Dungeon Heroes",
    genre: "RPG",
    price: 0,
    oldPrice: null,
    tag: "GRÁTIS",
    rating: "Muito positiva",
    score: 91,
    dev: "8Bit Guild",
    mode: "Co-op Online",
    short: "Aventure-se em masmorras geradas proceduralmente com amigos.",
    description: "Escolha entre 6 classes pixeladas, colete relíquias raras e enfrente chefes em partidas rápidas e divertidas.",
    reqMin: "<b>SO:</b> Windows 7 / 10<br><b>Processador:</b> Qualquer 2 GHz<br><b>Memória:</b> 2 GB de RAM<br><b>Placa de vídeo:</b> Integrada<br><b>Armazenamento:</b> 2 GB",
    reqRec: "<b>SO:</b> Windows 10 / 11<br><b>Processador:</b> Qualquer 3 GHz<br><b>Memória:</b> 4 GB de RAM<br><b>Placa de vídeo:</b> Dedicada básica<br><b>Armazenamento:</b> 2 GB",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 12,
    name: "Metro Architect",
    genre: "Simulação",
    price: 44.90,
    oldPrice: 59.90,
    tag: "INDIE",
    rating: "Muito positiva",
    score: 93,
    dev: "Gridline Labs",
    mode: "Um jogador",
    short: "Projete e gerencie a rede de metrô de metrópoles gigantes.",
    description: "Equilibre orçamento, fluxo de passageiros e expansão urbana neste simulador viciante de transporte público.",
    reqMin: "<b>SO:</b> Windows 10<br><b>Processador:</b> Intel Core i3<br><b>Memória:</b> 6 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 750<br><b>Armazenamento:</b> 4 GB",
    reqRec: "<b>SO:</b> Windows 11<br><b>Processador:</b> Intel Core i5<br><b>Memória:</b> 8 GB de RAM<br><b>Placa de vídeo:</b> NVIDIA GTX 1060<br><b>Armazenamento:</b> 4 GB",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=500&q=80",
    screens: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80"
    ]
  }
];

// ESTADO DA APLICAÇÃO
let library = [3];
let wishlist = [2, 7];
let cart = [1];
let currentGame = 1;
let libraryFilter = "all";
let selectedTagFilter = "";
let heroIndex = 0;
const heroGames = [1, 7, 5];

// PILHA DE HISTÓRICO INTERNO
let navHistory = [{ page: "home", gameId: null }];
let currentState = { page: "home", gameId: null };

const $ = id => document.getElementById(id);
const money = n => n === 0
  ? "Gratuito ✨"
  : n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function updateCounters() {
  $("sideLibCount").textContent = library.length;
  $("sideWishCount").textContent = wishlist.length;
  $("sideCartCount").textContent = cart.length;
  $("topWishBadge").textContent = wishlist.length;
  $("topCartBadge").textContent = cart.length;
  $("globalBackBtn").disabled = navHistory.length <= 1;
}

function navigate(page, options = {}) {
  const { pushHistory = true, gameId = null } = options;

  if (pushHistory) {
    const isSame = currentState.page === page && currentState.gameId === gameId;
    if (!isSame) {
      navHistory.push({ page, gameId });
    }
  }

  currentState = { page, gameId };

  document.querySelectorAll(".page").forEach(p =>
    p.classList.toggle("active", p.id === page)
  );

  document.querySelectorAll(".nav-item").forEach(b =>
    b.classList.toggle("active", b.dataset.page === page)
  );

  document.querySelectorAll(".top-link").forEach(b =>
    b.classList.toggle("active", b.dataset.page === page)
  );

  if (page === "explore") renderExplore();
  if (page === "library") renderLibrary();
  if (page === "wishlist") renderWishlist();
  if (page === "cart") renderCart();

  updateCounters();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBackOnePage() {
  if (navHistory.length <= 1) return;
  navHistory.pop();
  const previous = navHistory[navHistory.length - 1];

  if (previous.page === "details" && previous.gameId) {
    openDetails(previous.gameId, false);
  } else {
    navigate(previous.page, { pushHistory: false });
  }
}

function renderHero() {
  const g = games.find(item => item.id === heroGames[heroIndex]);
  if (!g) return;

  $("heroFeature").style.backgroundImage = `url('${g.image}')`;
  $("heroTag").textContent = g.tag;
  $("heroGenre").textContent = g.genre;
  $("heroTitle").textContent = g.name;
  $("heroDesc").textContent = g.short;
  $("heroRating").textContent = `★ ${g.score}% ${g.rating}`;
  $("heroPrice").textContent = money(g.price);

  $("heroOpenBtn").onclick = () => openDetails(g.id);

  const heroCartBtn = $("heroCartBtn");
  if (library.includes(g.id)) {
    heroCartBtn.textContent = "✓ Na Biblioteca";
    heroCartBtn.onclick = () => navigate("library");
  } else if (cart.includes(g.id)) {
    heroCartBtn.textContent = "🛒 No Carrinho";
    heroCartBtn.onclick = () => navigate("cart");
  } else {
    heroCartBtn.textContent = g.price === 0 ? "🎁 Resgatar Grátis" : "+ Carrinho";
    heroCartBtn.onclick = () => handleAcquireAction(g.id);
  }

  $("heroDots").innerHTML = heroGames.map((_, idx) =>
    `<span class="${idx === heroIndex ? "current" : ""}" data-hero-dot="${idx}"></span>`
  ).join("");

  document.querySelectorAll("[data-hero-dot]").forEach(dot => {
    dot.addEventListener("click", () => {
      heroIndex = Number(dot.dataset.heroDot);
      renderHero();
    });
  });
}

function getTagClass(tag) {
  if (tag === "OFERTA") return "tag-oferta";
  if (tag === "GRÁTIS") return "tag-gratis";
  if (tag === "NOVO") return "tag-novo";
  return "";
}

function gameCard(g) {
  const isOwned = library.includes(g.id);
  const inCart = cart.includes(g.id);
  const isWished = wishlist.includes(g.id);

  let btnLabel = g.price === 0 ? "Resgatar" : "+ Carrinho";
  let btnClass = "card-cart-btn";

  if (isOwned) {
    btnLabel = "✓ Na Biblioteca";
    btnClass += " owned";
  } else if (inCart) {
    btnLabel = "No Carrinho";
    btnClass += " in-cart";
  }

  return `
    <article class="game-card" data-card="${g.id}">
      <div class="game-image" style="background-image:url('${g.image}')">
        <span class="game-badge ${getTagClass(g.tag)}">${g.tag}</span>
        ${isOwned ? `<span class="owned-pill">✓ ADQUIRIDO</span>` : ""}
      </div>
      <div class="game-card-body">
        <div class="game-card-title">
          <b>${g.name}</b>
          <button class="heart ${isWished ? "active" : ""}" data-heart="${g.id}" title="Lista de desejos">
            ${isWished ? "♥" : "♡"}
          </button>
        </div>
        <div class="game-meta">
          <span>${g.genre}</span>
          <span class="game-rating">★ ${g.score}%</span>
        </div>
        <div class="card-footer-row">
          <div class="price-line">
            ${g.oldPrice ? `
              <div class="price-discount-row">
                <span class="discount">-${Math.round((1 - g.price / g.oldPrice) * 100)}%</span>
                <small>${money(g.oldPrice)}</small>
              </div>` : ""}
            <strong>${money(g.price)}</strong>
          </div>
          <button class="${btnClass}" data-quick-buy="${g.id}">${btnLabel}</button>
        </div>
      </div>
    </article>`;
}

function bindCards(container) {
  container.querySelectorAll("[data-card]").forEach(el => {
    el.addEventListener("click", e => {
      if (e.target.closest("[data-heart]") || e.target.closest("[data-quick-buy]")) return;
      openDetails(Number(el.dataset.card));
    });
  });

  container.querySelectorAll("[data-heart]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleWishlist(Number(btn.dataset.heart));
    });
  });

  container.querySelectorAll("[data-quick-buy]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      handleAcquireAction(Number(btn.dataset.quickBuy));
    });
  });
}

function handleAcquireAction(id) {
  const g = games.find(x => x.id === id);
  if (!g) return;

  if (library.includes(id)) {
    navigate("library");
    return;
  }

  if (g.price === 0) {
    library.push(id);
    showToast(`"${g.name}" resgatado na sua Biblioteca! 🌸`, "Abrir Biblioteca", () => navigate("library"));
    refreshAllViews();
    return;
  }

  if (cart.includes(id)) {
    navigate("cart");
    return;
  }

  cart.push(id);
  showToast(`"${g.name}" foi para o seu carrinho! 🛒`, "Ver Carrinho →", () => navigate("cart"));
  refreshAllViews();
}

function removeFromCart(id) {
  cart = cart.filter(item => item !== id);
  showToast("Item removido da sacola.");
  refreshAllViews();
}

function checkoutCart() {
  if (!cart.length) return;
  const count = cart.length;
  cart.forEach(id => {
    if (!library.includes(id)) library.push(id);
  });
  cart = [];
  refreshAllViews();
  showToast(`Eba! Compra finalizada. ${count} jogo(s) liberados na Biblioteca! 💖`, "Ver Biblioteca →", () => navigate("library"));
  navigate("library");
}

function renderHome() {
  renderHero();
  $("featuredGrid").innerHTML = games.slice(0, 4).map(gameCard).join("");
  $("offersGrid").innerHTML = games.filter(g => g.oldPrice).slice(0, 4).map(gameCard).join("");

  $("recommendedList").innerHTML = games.slice(6, 10).map(g => `
    <div class="recommend-item" data-recommend="${g.id}">
      <div class="recommend-thumb" style="background-image:url('${g.thumb}')"></div>
      <div>
        <b>${g.name}</b>
        <small>${g.genre} · ${money(g.price)}</small>
        <em>★ ${g.score}% aprovação</em>
      </div>
    </div>`).join("");

  document.querySelectorAll("[data-recommend]").forEach(el =>
    el.addEventListener("click", () => openDetails(Number(el.dataset.recommend)))
  );

  bindCards($("featuredGrid"));
  bindCards($("offersGrid"));
}

function renderExplore() {
  const q = $("searchInput").value.trim().toLowerCase();
  const genre = $("genreFilter").value;
  const priceRule = $("priceFilter").value;
  const sort = $("sortFilter").value;

  let arr = games.filter(g => {
    const matchesText = (g.name + " " + g.genre + " " + g.short + " " + g.tag).toLowerCase().includes(q);
    const matchesGenre = !genre || g.genre === genre;
    const matchesTag = !selectedTagFilter || g.tag === selectedTagFilter;

    let matchesPrice = true;
    if (priceRule === "free") matchesPrice = g.price === 0;
    if (priceRule === "under30") matchesPrice = g.price > 0 && g.price <= 30;
    if (priceRule === "under60") matchesPrice = g.price > 0 && g.price <= 60;
    if (priceRule === "offers") matchesPrice = Boolean(g.oldPrice);

    return matchesText && matchesGenre && matchesTag && matchesPrice;
  });

  if (sort === "name") arr.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "price-low") arr.sort((a, b) => a.price - b.price);
  if (sort === "price-high") arr.sort((a, b) => b.price - a.price);
  if (sort === "rating") arr.sort((a, b) => b.score - a.score);

  $("exploreGrid").innerHTML = arr.length
    ? arr.map(gameCard).join("")
    : '<div class="empty-inline">Nenhum joguinho encontrado com esses filtros. Tenta limpar alguma opção! ✨</div>';

  $("resultCount").textContent = `${arr.length} jogo(s) encontrado(s)`;

  const chips = [
    q ? `Busca: "${q}"` : "",
    genre ? `Gênero: ${genre}` : "",
    priceRule !== "all" ? `Preço: ${$("priceFilter").selectedOptions[0].text}` : "",
    selectedTagFilter ? `Filtro: ${selectedTagFilter}` : ""
  ].filter(Boolean);

  $("activeFilters").innerHTML = chips.map(c => `<span class="active-chip">${c}</span>`).join("");
  bindCards($("exploreGrid"));
}

function renderCart() {
  const items = games.filter(g => cart.includes(g.id));
  $("cartHeaderCount").textContent = `${items.length} ${items.length === 1 ? "item" : "itens"}`;

  $("cartLayout").classList.toggle("hidden", items.length === 0);
  $("cartEmpty").classList.toggle("hidden", items.length > 0);

  if (!items.length) return;

  let subtotal = 0;
  let total = 0;

  $("cartItemsList").innerHTML = items.map(g => {
    const original = g.oldPrice || g.price;
    subtotal += original;
    total += g.price;

    return `
      <article class="cart-item-card">
        <div class="cart-item-thumb" style="background-image:url('${g.thumb}')" data-open-from-cart="${g.id}"></div>
        <div class="cart-item-info">
          <b data-open-from-cart="${g.id}">${g.name}</b>
          <small>${g.genre} • Plataforma: Windows / SteamOS</small>
        </div>
        <div class="cart-item-price">
          ${g.oldPrice ? `<s>${money(g.oldPrice)}</s>` : ""}
          <strong>${money(g.price)}</strong>
        </div>
        <button class="remove-cart-btn" data-remove-cart="${g.id}">Remover</button>
      </article>`;
  }).join("");

  const discount = subtotal - total;
  $("cartSubtotal").textContent = money(subtotal);
  $("cartDiscount").textContent = `- ${money(discount)}`;
  $("cartTotal").textContent = money(total);

  document.querySelectorAll("[data-remove-cart]").forEach(btn =>
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.removeCart)))
  );

  document.querySelectorAll("[data-open-from-cart]").forEach(el =>
    el.addEventListener("click", () => openDetails(Number(el.dataset.openFromCart)))
  );
}

function renderLibrary() {
  const q = $("librarySearch").value.trim().toLowerCase();
  let arr = games.filter(g => library.includes(g.id));

  if (libraryFilter === "recent") arr = arr.slice().reverse().slice(0, 3);
  if (libraryFilter === "favorites") arr = arr.filter(g => wishlist.includes(g.id));

  arr = arr.filter(g => g.name.toLowerCase().includes(q));
  $("libraryCount").textContent = `${library.length} jogo(s) na conta`;

  $("libraryContent").innerHTML = arr.length
    ? arr.map(g => `
        <article class="library-row" data-library-game="${g.id}">
          <div class="library-thumb" style="background-image:url('${g.thumb}')"></div>
          <div>
            <b>${g.name}</b>
            <small>${g.genre} · Pronto para jogar</small>
          </div>
          <span class="library-status">● Na conta</span>
        </article>`).join("")
    : '<div class="empty-inline">Nenhum jogo encontrado por aqui.</div>';

  document.querySelectorAll("[data-library-game]").forEach(el =>
    el.addEventListener("click", () => openDetails(Number(el.dataset.libraryGame)))
  );
}

function renderWishlist() {
  const arr = games.filter(g => wishlist.includes(g.id));
  $("wishlistCount").textContent = `${arr.length} jogo(s)`;
  $("wishlistGrid").innerHTML = arr.map(gameCard).join("");
  $("wishlistEmpty").classList.toggle("hidden", arr.length > 0);
  bindCards($("wishlistGrid"));
}

function openDetails(id, pushHistory = true) {
  const g = games.find(x => x.id === id);
  if (!g) return;

  currentGame = id;
  $("detailTitle").textContent = g.name;
  $("breadcrumbTitle").textContent = g.name;
  $("detailTags").innerHTML = `<span>${g.genre}</span><span>${g.tag}</span><span>${g.mode}</span>`;
  $("detailCover").style.backgroundImage = `url('${g.image}')`;
  $("detailCoverTitle").textContent = g.name;
  $("purchaseArt").style.backgroundImage = `url('${g.thumb}')`;
  $("detailDescription").textContent = g.description;
  $("detailShort").textContent = g.short;
  $("detailRating").textContent = `★ ${g.score}% ${g.rating}`;
  $("detailGenre").textContent = g.genre;
  $("detailDev").textContent = g.dev;
  $("detailMode").textContent = g.mode;

  // Requisitos
  $("reqMin").innerHTML = g.reqMin;
  $("reqRec").innerHTML = g.reqRec;

  $("detailPriceBox").innerHTML = g.oldPrice
    ? `<span class="discount">-${Math.round((1 - g.price / g.oldPrice) * 100)}%</span>
       <small style="text-decoration:line-through;color:#bdaecc">${money(g.oldPrice)}</small>
       <strong>${money(g.price)}</strong>`
    : `<strong>${money(g.price)}</strong>`;

  $("screenshotsRow").innerHTML = g.screens.map(src =>
    `<div class="screenshot" style="background-image:url('${src}')"></div>`
  ).join("");

  updateDetailButtons();
  navigate("details", { pushHistory, gameId: id });
}

function updateDetailButtons() {
  const g = games.find(x => x.id === currentGame);
  const btn = $("primaryActionBtn");

  if (library.includes(currentGame)) {
    btn.textContent = "✓ Já está na sua Biblioteca (Jogar)";
  } else if (cart.includes(currentGame)) {
    btn.textContent = "🛒 Ver no Carrinho";
  } else if (g && g.price === 0) {
    btn.textContent = "🎁 Resgatar Gratuitamente";
  } else {
    btn.textContent = "🛒 Adicionar ao Carrinho";
  }

  $("favoriteButton").textContent = wishlist.includes(currentGame)
    ? "💖 Remover da lista de desejos"
    : "💖 Adicionar à lista de desejos";
}

function toggleWishlist(id) {
  const added = !wishlist.includes(id);
  wishlist = added
    ? [...wishlist, id]
    : wishlist.filter(x => x !== id);

  refreshAllViews();

  if (added) {
    showToast(
      "Adicionado à lista de desejos! 💖",
      "Ver lista →",
      () => navigate("wishlist")
    );
  } else {
    showToast("Removido da lista de desejos.");
  }
}

let currentToastCallback = null;

function showToast(msg, actionLabel = "", onAction = null) {
  const t = $("toast");
  const actionBtn = $("toastActionBtn");
  $("toastMessage").textContent = msg;

  currentToastCallback = onAction;

  if (actionLabel && onAction) {
    actionBtn.textContent = actionLabel;
    actionBtn.classList.remove("hidden");
    t.classList.add("clickable");
  } else {
    actionBtn.classList.add("hidden");
    t.classList.remove("clickable");
  }

  t.classList.add("show");
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => t.classList.remove("show"), 3600);
}

$("toast").addEventListener("click", () => {
  if (currentToastCallback) {
    $("toast").classList.remove("show");
    currentToastCallback();
  }
});

function refreshAllViews() {
  renderHome();
  renderExplore();
  renderLibrary();
  renderWishlist();
  renderCart();
  updateDetailButtons();
  updateCounters();
}

$("globalBackBtn").addEventListener("click", goBackOnePage);
$("detailBackBtn").addEventListener("click", goBackOnePage);
$("checkoutBtn").addEventListener("click", checkoutCart);

document.querySelectorAll("[data-page]").forEach(btn =>
  btn.addEventListener("click", () => navigate(btn.dataset.page))
);

document.querySelectorAll("[data-category], [data-quick-cat]").forEach(btn =>
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category || btn.dataset.quickCat;
    $("genreFilter").value = cat;
    navigate("explore");
  })
);

$("heroPrev").addEventListener("click", () => {
  heroIndex = (heroIndex - 1 + heroGames.length) % heroGames.length;
  renderHero();
});

$("heroNext").addEventListener("click", () => {
  heroIndex = (heroIndex + 1) % heroGames.length;
  renderHero();
});

$("searchInput").addEventListener("input", renderExplore);
$("genreFilter").addEventListener("change", renderExplore);
$("priceFilter").addEventListener("change", renderExplore);
$("sortFilter").addEventListener("change", renderExplore);

document.querySelectorAll("[data-tag-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedTagFilter = btn.dataset.tagFilter;
    document.querySelectorAll("[data-tag-filter]").forEach(b =>
      b.classList.toggle("active", b === btn)
    );
    renderExplore();
  });
});

$("clearFiltersBtn").addEventListener("click", () => {
  $("searchInput").value = "";
  $("genreFilter").value = "";
  $("priceFilter").value = "all";
  $("sortFilter").value = "featured";
  selectedTagFilter = "";
  document.querySelectorAll("[data-tag-filter]").forEach(b =>
    b.classList.toggle("active", b.dataset.tagFilter === "")
  );
  renderExplore();
});

$("globalSearch").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    $("searchInput").value = e.target.value;
    navigate("explore");
  }
});

$("librarySearch").addEventListener("input", renderLibrary);

document.querySelectorAll("[data-library-filter]").forEach(btn =>
  btn.addEventListener("click", () => {
    libraryFilter = btn.dataset.libraryFilter;
    document.querySelectorAll("[data-library-filter]").forEach(b =>
      b.classList.toggle("active", b === btn)
    );
    renderLibrary();
  })
);

$("primaryActionBtn").addEventListener("click", () => handleAcquireAction(currentGame));
$("favoriteButton").addEventListener("click", () => toggleWishlist(currentGame));

document.querySelectorAll("[data-setting]").forEach(input =>
  input.addEventListener("change", () => {
    const setting = input.dataset.setting;
    if (setting === "compact") document.body.classList.toggle("compact", input.checked);
    if (setting === "motion") document.body.classList.toggle("reduce-motion", input.checked);
    if (setting === "recommendations") $("recommendedList").parentElement.style.display = input.checked ? "flex" : "none";
    if (setting === "ratings") document.body.classList.toggle("hide-ratings", !input.checked);
    showToast("Preferências atualizadas! ✨");
  })
);

refreshAllViews();