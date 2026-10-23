import { useEffect, useMemo, useState } from 'react';
import { games, genres } from './data/games.js';

function CatalogToolbar({ searchTerm, selectedGenre, showFavorites, favoriteCount, onSearchChange, onGenreChange, onFavoritesChange }) {
  return (
    <section className="toolbar" aria-label="Herramientas del catálogo">
      <label className="search-field" htmlFor="game-search">
        <span className="field-label">Buscar videojuegos</span>
        <span className="input-wrap">
          <span aria-hidden="true">⌕</span>
          <input
            id="game-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Escribe un título..."
          />
        </span>
      </label>

      <label className="select-field" htmlFor="genre-filter">
        <span className="field-label">Género</span>
        <select id="genre-filter" value={selectedGenre} onChange={(event) => onGenreChange(event.target.value)}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>

      <label className="favorites-toggle">
        <input type="checkbox" checked={showFavorites} onChange={(event) => onFavoritesChange(event.target.checked)} />
        <span className="toggle-box" aria-hidden="true">♥</span>
        <span>Solo favoritos</span>
        <strong>{favoriteCount}</strong>
      </label>
    </section>
  );
}

function GameCard({ game, isFavorite, onToggleFavorite, onSelect }) {
  const openCard = () => onSelect(game);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCard();
    }
  };

  return (
    <article className="game-card" tabIndex="0" role="button" onClick={openCard} onKeyDown={handleKeyDown} aria-label={`Ver detalle de ${game.title}`}>
      <div className="cover-wrap">
        <img src={game.cover} alt={`Portada ilustrada de ${game.title}`} />
        <button
          type="button"
          className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
          aria-label={isFavorite ? `Quitar ${game.title} de favoritos` : `Añadir ${game.title} a favoritos`}
          aria-pressed={isFavorite}
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(game.id);
          }}
        >
          ♥
        </button>
        <span className="genre-pill" style={{ '--genre-color': game.accent }}>{game.genre}</span>
      </div>
      <div className="card-body">
        <div className="card-meta"><span>{game.year}</span><span aria-hidden="true">•</span><span>{game.platforms[0]}</span></div>
        <h2>{game.title}</h2>
        <button
          type="button"
          className="details-link"
          onClick={(event) => {
            event.stopPropagation();
            openCard();
          }}
        >
          Ver detalle <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

function GameDetailModal({ game, isFavorite, onToggleFavorite, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  if (!game) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="close-button" onClick={onClose} aria-label="Cerrar detalle">×</button>
        <img className="modal-cover" src={game.cover} alt="" />
        <div className="modal-content">
          <span className="genre-label" style={{ '--genre-color': game.accent }}>{game.genre}</span>
          <h2 id="modal-title">{game.title}</h2>
          <p className="modal-subtitle">Lanzamiento {game.year}</p>
          <p>{game.description}</p>
          <div className="platforms" aria-label="Plataformas disponibles">
            {game.platforms.map((platform) => <span key={platform}>{platform}</span>)}
          </div>
          <button type="button" className={`modal-favorite ${isFavorite ? 'is-favorite' : ''}`} onClick={() => onToggleFavorite(game.id)}>
            {isFavorite ? '♥ En favoritos' : '♡ Añadir a favoritos'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const visibleGames = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase('es');
    return games.filter((game) => {
      const matchesSearch = game.title.toLocaleLowerCase('es').includes(normalizedSearch);
      const matchesGenre = selectedGenre === 'Todos' || game.genre === selectedGenre;
      const matchesFavorites = !showFavorites || favoriteIds.includes(game.id);
      return matchesSearch && matchesGenre && matchesFavorites;
    });
  }, [searchTerm, selectedGenre, showFavorites, favoriteIds]);

  const toggleFavorite = (gameId) => {
    setFavoriteIds((currentIds) => (
      currentIds.includes(gameId)
        ? currentIds.filter((id) => id !== gameId)
        : [...currentIds, gameId]
    ));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedGenre('Todos');
    setShowFavorites(false);
  };

  return (
    <main>
      <header className="hero">
        <div className="brand" aria-label="GameVerse"><span aria-hidden="true">◈</span> GAMEVERSE</div>
        <p className="eyebrow">Tu próxima aventura empieza aquí</p>
        <h1>Encuentra tu juego.<br /><em>Hazlo favorito.</em></h1>
        <p className="hero-copy">Explora una colección seleccionada de videojuegos y guarda los que no quieres perder de vista.</p>
      </header>

      <section className="catalog-shell" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">Colección</p>
            <h2 id="catalog-title">Explora el catálogo</h2>
          </div>
          <p className="results-count" aria-live="polite">{visibleGames.length} {visibleGames.length === 1 ? 'resultado' : 'resultados'}</p>
        </div>

        <CatalogToolbar
          searchTerm={searchTerm}
          selectedGenre={selectedGenre}
          showFavorites={showFavorites}
          favoriteCount={favoriteIds.length}
          onSearchChange={setSearchTerm}
          onGenreChange={setSelectedGenre}
          onFavoritesChange={setShowFavorites}
        />

        {visibleGames.length > 0 ? (
          <div className="games-grid">
            {visibleGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isFavorite={favoriteIds.includes(game.id)}
                onToggleFavorite={toggleFavorite}
                onSelect={setSelectedGame}
              />
            ))}
          </div>
        ) : (
          <section className="empty-state">
            <span aria-hidden="true">⌕</span>
            <h2>No encontramos videojuegos</h2>
            <p>Prueba con otro título, género o vuelve a mostrar toda la colección.</p>
            <button type="button" onClick={clearFilters}>Limpiar filtros</button>
          </section>
        )}
      </section>

      <GameDetailModal
        game={selectedGame}
        isFavorite={selectedGame ? favoriteIds.includes(selectedGame.id) : false}
        onToggleFavorite={toggleFavorite}
        onClose={() => setSelectedGame(null)}
      />
    </main>
  );
}
