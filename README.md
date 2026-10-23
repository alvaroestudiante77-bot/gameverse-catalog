# GameVerse - Catálogo de videojuegos con React

Una aplicación de React para explorar un catálogo de videojuegos, buscar títulos, filtrar por género, marcar favoritos y consultar detalles en un modal.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Ejecución local

```bash
npm install
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

Para generar una versión de producción:

```bash
npm run build
npm run preview
```

## Funcionalidades

- Catálogo local de 10 videojuegos, cada uno con nombre, portada, género y año.
- Búsqueda en tiempo real por nombre.
- Filtro por género que funciona a la vez que la búsqueda.
- Botón de favorito por tarjeta, contador y vista de "Solo favoritos".
- Detalle de cada juego dentro de un modal accesible, con descripción, plataformas y acceso a favoritos.
- Diseño adaptable para escritorio y móvil.

## Cómo se aplican React, componentes, props, estado y eventos

| Elemento | Implementación |
| --- | --- |
| Componentes | `App` coordina la aplicación; `CatalogToolbar`, `GameCard` y `GameDetailModal` separan la interfaz en piezas reutilizables. |
| Props | `App` entrega a los componentes hijos los datos del juego, si es favorito y las funciones necesarias para cambiar la interfaz. |
| Estado | `useState` controla el texto de búsqueda, género seleccionado, favoritos, la vista de favoritos y el juego elegido. `useMemo` deriva el catálogo visible. |
| Eventos | `onChange` actualiza búsqueda, filtro y casilla de favoritos. `onClick` marca favoritos, abre/cierra el detalle y limpia filtros. |
| Renderizado | `map()` crea una tarjeta por juego. `filter()` combina búsqueda, género y favoritos antes de mostrar las tarjetas. |

## Estructura

```text
src/
  data/games.js       Datos locales del catálogo
  App.jsx             Lógica, estado y componentes
  main.jsx            Punto de entrada de React
  styles.css          Diseño adaptable
public/covers/        Ilustraciones SVG de las portadas
docs/demo-guide.md    Guion de la demostración funcional
```

No requiere backend ni conexión a una API: toda la información se guarda en un arreglo de objetos dentro de `src/data/games.js`.

## Publicación en GitHub

El proyecto está listo para publicarse como repositorio público. Después de crear el repositorio remoto, se puede asociar y subir con:

```bash
git remote add origin https://github.com/TU_USUARIO/gameverse-catalog.git
git branch -M main
git push -u origin main
```

Reemplaza `TU_USUARIO` por tu usuario de GitHub.
