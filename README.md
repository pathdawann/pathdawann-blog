# 🌐 Pathdawann

![Astro](https://img.shields.io/badge/Astro-0C1127?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

**Pathdawann** es un portal de noticias y artículos enfocado en tecnología, desarrollo web, inteligencia artificial y automatización de flujos de trabajo. Está construido bajo una arquitectura de generación estática (SSG) para maximizar el rendimiento, el SEO y la velocidad de entrega de contenido.

## ✨ Características Principales

- ⚡ **Rendimiento Extremo:** Arquitectura de Islas de Astro que envía cero JavaScript innecesario al cliente.
- 📱 **Diseño Responsivo y Utilitario:** Interfaz construida íntegramente con Tailwind CSS v4.
- 🌓 **Modo Oscuro Nativo:** Transiciones de color automáticas y sin parpadeos visuales.
- 🔍 **Buscador en Tiempo Real:** Motor de búsqueda del lado del cliente sin dependencias externas pesadas.
- 📄 **Paginación Matemática:** Distribución automática de artículos (8 por página) para mantener la fluidez de navegación.
- 🧠 **Motor de Recomendaciones:** Lógica integrada para sugerir artículos relacionados basados en la categoría de lectura actual.
- 🚀 **View Transitions:** Navegación entre páginas fluida tipo SPA (Single Page Application).

## 🏗️ Arquitectura del Proyecto

El repositorio sigue una estructura estricta de separación de responsabilidades:

```text
/
├── public/                 # Recursos estáticos (favicon, fuentes)
├── src/
│   ├── assets/             # Imágenes optimizadas
│   ├── components/         # Componentes de UI reutilizables (Header, Footer, Tarjetas)
│   ├── content/blog/       # Base de datos basada en archivos Markdown por categoría
│   ├── layouts/            # Plantillas maestras de las páginas
│   ├── pages/              # Enrutamiento de Astro (Paginación, Búsqueda, 404)
│   └── consts.ts           # Variables globales de configuración
└── astro.config.mjs        # Configuración central del framework
```

🚀 Despliegue Local (Getting Started)
Si deseas clonar este proyecto y correrlo en tu entorno local, sigue estos pasos:

Clona el repositorio:

Bash
git clone [https://github.com/pathdawann/pathdawann.git](https://github.com/pathdawann/pathdawann.git)
Navega al directorio e instala las dependencias:

Bash
cd pathdawann
npm install
Inicia el servidor de desarrollo:

Bash
npm run dev
El portal estará disponible localmente en http://localhost:4321.

✍️ Flujo de Creación de Contenido
Pathdawann utiliza Astro Content Collections. Para publicar una nueva noticia:

Dirígete a src/content/blog/ y elige la carpeta de la categoría correspondiente (ej. desarrollo/ o software-ia/).

Crea un nuevo archivo Markdown (.md).

Agrega el siguiente Frontmatter obligatorio al inicio del archivo:

Markdown
---
title: 'Título de la Noticia'
description: 'Breve resumen para la tarjeta y el SEO.'
pubDate: 'YYYY-MM-DD'
heroImage: '../../../assets/nombre-imagen.jpg'
---
Redacta el cuerpo de la noticia utilizando la sintaxis estándar de Markdown. El diseño tipográfico y el modo oscuro se aplicarán automáticamente gracias a @tailwindcss/typography.

🗺️ Roadmap (Próximos Pasos)
[ ] Implementación de SEO avanzado (JSON-LD y Open Graph tags).

[ ] Cálculo dinámico del "Tiempo de lectura" en cada artículo.

[ ] Integración de sistema de comentarios o debates de la comunidad.

[ ] Automatización de la distribución de contenido (RSS a Telegram/Redes).

Construido con rigor técnico para la comunidad.