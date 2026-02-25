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
- 📄 **Paginación Matemática:** Distribución automática de artículos (8 por página) para mantener la fluidez.
- 🧠 **Motor de Recomendaciones:** Lógica integrada para sugerir artículos relacionados basados en la categoría.
- 🚀 **View Transitions:** Navegación entre páginas fluida tipo SPA (Single Page Application).
- 📈 **SEO de Grado Corporativo:** Inyección automática de JSON-LD y etiquetas Open Graph para redes sociales.
- ⏱️ **UX de Lectura:** Cálculo dinámico del tiempo de lectura basado en la longitud de cada artículo.
- 💬 **Debates de la Comunidad:** Sistema de comentarios integrado directamente con GitHub Discussions (Giscus).
- 📡 **Motor de Distribución:** Feed RSS (`/rss.xml`) optimizado con etiquetas de categoría para automatizaciones.

## 🏗️ Arquitectura del Proyecto

El repositorio sigue una estructura estricta de separación de responsabilidades:

```
/
├── public/                 # Recursos estáticos (favicon, fuentes)
├── src/
│   ├── assets/             # Imágenes optimizadas
│   ├── components/         # Componentes de UI reutilizables (Header, Footer, Tarjetas)
│   ├── content/blog/       # Base de datos basada en archivos Markdown por categoría
│   ├── layouts/            # Plantillas maestras de las páginas
│   ├── pages/              # Enrutamiento de Astro (Paginación, Búsqueda, RSS, 404)
│   └── consts.ts           # Variables globales de configuración
└── astro.config.mjs        # Configuración central del framework
```

## 🚀 Despliegue Local (Getting Started)
Si deseas clonar este proyecto y correrlo en tu entorno local, sigue estos pasos:

### 1. Clona el repositorio:
```
git clone [https://github.com/pathdawann/pathdawann-blog.git](https://github.com/pathdawann/pathdawann-blog.git)
```

### 2.Navega al directorio e instala las dependencias:
```
cd pathdawann-blog
npm install
```

### 3.Inicia el servidor de desarrollo:
```
npm run dev
```

El portal estará disponible localmente en http://localhost:4321.

## ✍️ Flujo de Creación de Contenido
Pathdawann utiliza <strong>Astro Content Collections</strong>. Para publicar una nueva noticia:

1. Dirígete a src/content/blog/ y elige la carpeta de la categoría correspondiente (ej. desarrollo/ o software-ia/).

2. Crea un nuevo archivo Markdown (.md).

3. Agrega el siguiente Frontmatter obligatorio al inicio del archivo:
    ```
    title: 'Título de la Noticia'
    description: 'Breve resumen para la tarjeta y el SEO.'
    pubDate: 'YYYY-MM-DD'
    heroImage: '../../../assets/nombre-imagen.jpg'
    ```

4. Redacta el cuerpo de la noticia utilizando la sintaxis estándar de Markdown. El diseño tipográfico y el modo oscuro se aplicarán automáticamente gracias a @tailwindcss/typography.

## 🗺️ Roadmap y Evolución del Proyecto

**Fase 1: Core y Experiencia de Usuario (Completado ✅)**
- [x] SEO avanzado y cálculo de tiempo de lectura.
- [x] Paginación, buscador interno y sistema de comentarios.
- [x] RSS optimizado para lectura de bots.

**Fase 2: Distribución y Backend (Próximos Pasos 🚀)**
- [ ] Despliegue a producción (Vercel/Netlify) y configuración de dominio personalizado.
- [ ] Construcción de flujos en n8n para leer el RSS y publicar automáticamente en canales de Telegram.
- [ ] Integración de backend con Supabase para la gestión de suscriptores a un newsletter.
- [ ] Creación de un Chatbot interactivo para interactuar con los lectores del portal.

<hr></hr>
Construido con rigor técnico para la comunidad.