# PokeApp - Consumo de la PokeAPI con Angular

Este proyecto es una aplicación en Angular que consume la [PokeAPI](https://pokeapi.co/) para mostrar información sobre los Pokémon. 


## 🚀 Instalación

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
   Accede a la aplicación en `http://localhost:4200/`.

## 🏗️ Estructura del Proyecto
```
/src/app
│── components/  # Componentes de la UI con las cards
│── services/    # Servicios para consumo de la API
│── models/      # Interfaces de datos
│── app.module.ts
│── app.component.ts
```

## 🔥 Consumo de la API (PokeAPI)
La aplicación obtiene datos de la PokeAPI a través de `PokemonService`. A continuación, se explica cómo funciona.

### 📌 Servicio `PokemonService`

Ubicación: `src/app/services/pokemon.service.ts`

- Se hace una petición a `https://pokeapi.co/api/v2/pokemon`.
- Se mapea la respuesta para extraer `id`, `name` e `image`.

### 2️⃣ **Obtener detalles de un Pokémon**

- Se consulta `https://pokeapi.co/api/v2/pokemon/{id}`.
- Se extrae la información relevante como nombre, imagen, tipos y estadísticas.

## 🎨 UI y Funcionalidades

### 📌 Listado de Pokémon
- Muestra 20 Pokémon por página.
- Paginación con `MatPaginator`.


## 🛠️ Tecnologías Utilizadas
- **Angular** (Framework Frontend)
- **RxJS** (Manejo de peticiones y observables)
- **Angular Material** (UI Components)
- **Chart.js** (Gráficos de estadísticas)


