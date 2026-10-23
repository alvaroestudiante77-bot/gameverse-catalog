export const games = [
  {
    id: 1,
    title: 'Horizon: Nuevos Horizontes',
    genre: 'Aventura',
    year: 2025,
    cover: '/covers/horizon.svg',
    accent: '#ff7a59',
    description:
      'Explora una Tierra recuperada por la naturaleza, resuelve misterios de antiguas máquinas y recorre paisajes abiertos llenos de desafíos.',
    platforms: ['PC', 'PlayStation 5'],
  },
  {
    id: 2,
    title: 'Velocity League',
    genre: 'Deportes',
    year: 2024,
    cover: '/covers/velocity.svg',
    accent: '#56d9ff',
    description:
      'Compite en una liga de carreras futurista donde las curvas imposibles y las decisiones de equipo separan a los novatos de los campeones.',
    platforms: ['PC', 'Xbox Series'],
  },
  {
    id: 3,
    title: 'Kingdoms of Ash',
    genre: 'Estrategia',
    year: 2023,
    cover: '/covers/kingdoms.svg',
    accent: '#e8b45b',
    description:
      'Construye un reino entre cenizas, administra recursos escasos y lidera tropas tácticas en campañas que cambian según tus alianzas.',
    platforms: ['PC', 'Nintendo Switch'],
  },
  {
    id: 4,
    title: 'Neon Drift',
    genre: 'Acción',
    year: 2025,
    cover: '/covers/neon.svg',
    accent: '#d86cff',
    description:
      'Domina una ciudad vertical iluminada por neón. Combina movimientos acrobáticos, precisión y reflejos para recuperar sus distritos.',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series'],
  },
  {
    id: 5,
    title: 'The Last Signal',
    genre: 'Aventura',
    year: 2022,
    cover: '/covers/signal.svg',
    accent: '#88d39d',
    description:
      'Sigue una señal perdida desde una estación aislada y toma decisiones que revelan historias distintas para cada miembro de la expedición.',
    platforms: ['PC', 'Nintendo Switch'],
  },
  {
    id: 6,
    title: 'Stadium Legends',
    genre: 'Deportes',
    year: 2024,
    cover: '/covers/stadium.svg',
    accent: '#86b8ff',
    description:
      'Forma tu once ideal, perfecciona jugadas y vive temporadas con rivalidades, fichajes y torneos que celebran el deporte rey.',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series'],
  },
  {
    id: 7,
    title: 'Emberfall Tactics',
    genre: 'Estrategia',
    year: 2025,
    cover: '/covers/emberfall.svg',
    accent: '#ff8e69',
    description:
      'Dirige un escuadrón en mapas dinámicos, aprovecha el terreno y crea estrategias de turnos que evolucionan con cada misión.',
    platforms: ['PC'],
  },
  {
    id: 8,
    title: 'Pulse Runner',
    genre: 'Acción',
    year: 2023,
    cover: '/covers/pulse.svg',
    accent: '#2de2a6',
    description:
      'Cruza circuitos a máxima velocidad en un arcade de acción que recompensa las rutas arriesgadas y los tiempos perfectos.',
    platforms: ['PC', 'Nintendo Switch'],
  },
  {
    id: 9,
    title: 'Orbits Beyond',
    genre: 'Aventura',
    year: 2024,
    cover: '/covers/orbits.svg',
    accent: '#8fa7ff',
    description:
      'Navega entre sistemas estelares, registra descubrimientos y reconstruye la historia de una civilización que desapareció sin dejar rastro.',
    platforms: ['PC', 'PlayStation 5'],
  },
  {
    id: 10,
    title: 'Court Vision',
    genre: 'Deportes',
    year: 2025,
    cover: '/covers/court.svg',
    accent: '#ffb45d',
    description:
      'Lee la cancha, coordina a tu equipo y convierte cada posesión en una jugada memorable dentro y fuera del marcador.',
    platforms: ['PC', 'Xbox Series'],
  },
];

export const genres = ['Todos', ...new Set(games.map((game) => game.genre))];
