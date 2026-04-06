<div align="center">

<img src="./assets/logo.png" alt="Forge & Pixel Logo" width="120" />

# Forge & Pixel

**Arte digital & Diseño de personajes**

[![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-A78BFA?style=for-the-badge)](LICENSE)

Aplicación móvil de e-commerce para productos de diseño digital, construida con React Native y Expo. Disponible para **Android**, **iOS** y **Web**.

</div>

---

## Capturas de pantalla

> _Screenshots próximamente..._

---

## Características

- **Catálogo de productos** — Explora todos los productos con imágenes, nombre y precio
- **Vista de detalle** — Descripción completa de cada producto con galería de imagen
- **Carrito de compras** — Agrega, elimina y visualiza el total de tu pedido en tiempo real
- **Lista de favoritos** — Guarda tus productos preferidos para después
- **Navegación fluida** — Bottom tabs + Stack navigator para una experiencia nativa
- **Tema oscuro** — Diseño moderno con paleta oscura y acentos en cyan, naranja y púrpura
- **Multiplataforma** — Compatible con Android, iOS y Web desde el mismo código

---

## Tecnologías

| Tecnología | Versión | Descripción |
|---|---|---|
| React Native | 0.81.5 | Framework principal para UI móvil |
| Expo | 54 | Toolchain y servicios de build |
| React Navigation | 7.x | Navegación entre pantallas |
| Expo Vector Icons | — | Iconografía (Ionicons) |
| React Native Web | 0.21 | Soporte para navegador web |
| EAS Build | — | Generación de APK/IPA en la nube |

---

## Estructura del proyecto

```
Forge_y_Pixel/
├── assets/                  # Imágenes, logo e iconos
├── src/
│   ├── components/
│   │   └── ProductCard.js   # Tarjeta reutilizable de producto
│   ├── navigation/
│   │   └── AppNavigator.js  # Configuración de navegación
│   ├── screens/
│   │   ├── HomeScreen.js        # Inicio con productos destacados
│   │   ├── ProductListScreen.js # Catálogo completo
│   │   ├── ProductDetailScreen.js # Detalle del producto
│   │   ├── CartScreen.js        # Carrito de compras
│   │   ├── FavoritesScreen.js   # Favoritos / wishlist
│   │   └── ProfileScreen.js     # Perfil de usuario
│   ├── services/            # Llamadas a API (próximamente)
│   └── storage/             # Persistencia local (próximamente)
├── App.js                   # Punto de entrada principal
├── app.json                 # Configuración de Expo
└── eas.json                 # Configuración de EAS Build
```

---

## Instalación y uso

### Requisitos previos

- [Node.js](https://nodejs.org/) >= 18
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente
- [Android Studio](https://developer.android.com/studio) o [Expo Go](https://expo.dev/client) en tu dispositivo

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/davidgarcia57/Forge_y_Pixel.git
cd Forge_y_Pixel

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npx expo start
```

Luego escanea el código QR con **Expo Go** (Android/iOS) o presiona `a` para abrir en el emulador Android.

### Compilar APK (Android)

```bash
# Build de producción con EAS
eas build --platform android --profile production
```

---

## Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Fondo principal | `#12121E` | Background general |
| Superficie | `#1C1C30` | Cards y modales |
| Acento cyan | `#4FC3F7` | Precios y elementos activos |
| Acento naranja | `#FF8C42` | Botones de acción |
| Acento rosa | `#FF4D6D` | Favoritos y acciones de eliminar |
| Acento púrpura | `#A78BFA` | Tab activo |

---

## Roadmap

- [ ] Integración con backend / API REST
- [ ] Autenticación de usuarios
- [ ] Persistencia de datos con AsyncStorage
- [ ] Sistema de búsqueda y filtros
- [ ] Pasarela de pagos
- [ ] Sistema de reseñas y calificaciones
- [ ] Notificaciones push

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más información.

---

<div align="center">

Hecho con React Native & Expo

**[davidgarcia57](https://github.com/davidgarcia57)**

</div>
