# 🌐 Pathdawann - Tech Blog & AI Ecosystem

![Astro](https://img.shields.io/badge/Astro-0C1127?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white)
![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)

**Pathdawann** es un ecosistema de noticias y artículos enfocado en tecnología, desarrollo web, inteligencia artificial y automatización de flujos de trabajo. Está construido bajo una arquitectura de frontend estático (SSG) para un rendimiento extremo, respaldado por un backend automatizado y un Agente Conversacional de IA nativo.

## ✨ Características Principales

**Frontend y Experiencia de Usuario:**
- ⚡ **Rendimiento Extremo:** Arquitectura de Islas de Astro que envía cero JavaScript innecesario al cliente.
- 📱 **Diseño Responsivo y Utilitario:** Interfaz construida íntegramente con Tailwind CSS v4.
- 🌓 **Modo Oscuro Nativo:** Transiciones de color automáticas y sin parpadeos visuales.
- 🔍 **Buscador en Tiempo Real:** Motor de búsqueda del lado del cliente sin dependencias externas pesadas.
- 🚀 **View Transitions:** Navegación entre páginas fluida tipo SPA (Single Page Application).
- 💬 **Debates de la Comunidad:** Sistema de comentarios integrado directamente con GitHub Discussions (Giscus).

**Backend, Automatización e Inteligencia Artificial:**
- 🤖 **Agente RAG Conversacional:** Bot en Telegram impulsado por Gemini 2.5 Flash capaz de leer el blog y responder dudas técnicas de forma autónoma.
- 🧲 **Captación de Leads Inteligente:** Registro conversacional de correos electrónicos inyectados directamente a la base de datos desde Telegram.
- ⚙️ **Orquestación de Microservicios:** Flujos automatizados en n8n para publicar noticias (Pregonero RSS), enviar el newsletter semanal (vía Gmail) y notificar nuevas suscripciones en tiempo real.
- 🔒 **Base de Datos Segura:** Gestión de suscriptores centralizada en PostgreSQL (Supabase) con políticas RLS (Row Level Security).

## 🏗️ Arquitectura del Proyecto

El proyecto se divide en un repositorio frontend estricto y una arquitectura backend orquestada en la nube:

### 1. Estructura Frontend (Astro)
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

### 2. Microservicios Backend (n8n + AWS)
NewSubsPDNBlog: Captura webhooks de Supabase y emite alertas de nuevos suscriptores al administrador.

SendPostPDNChannelTme: Lee /rss.xml y difunde automáticamente los artículos en el canal público.

SendMailNewsletterPDN: Consolida los artículos semanales y orquesta el envío masivo por correo.

AIAgentPDNTelegram: Gestiona el razonamiento del LLM, la memoria por usuario y el uso de herramientas (Tools) para consultas y registros.

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

### 3.Configura las Variables de Entorno:
Crea un archivo .env en la raíz del proyecto y añade tus credenciales de Supabase:
```
PUBLIC_SUPABASE_URL="[https://tu-proyecto.supabase.co](https://tu-proyecto.supabase.co)"
PUBLIC_SUPABASE_ANON_KEY="tu_clave_anon_publica"
```

### 4.Inicia el servidor de desarrollo:
```
npm run dev
```

El portal estará disponible localmente en http://localhost:4321.

## ✍️ Flujo de Creación de Contenido
Pathdawann utiliza <strong>Astro Content Collections</strong>. Para publicar una nueva noticia:

1. Dirígete a src/content/blog/ y elige la carpeta de la categoría correspondiente.

2. Crea un nuevo archivo Markdown (.md).

3. Agrega el Frontmatter obligatorio y redacta el cuerpo de la noticia (el diseño tipográfico se aplicará automáticamente vía @tailwindcss/typography).
```
title: 'Título de la Noticia'
description: 'Breve resumen para la tarjeta y el SEO.'
pubDate: 'YYYY-MM-DD'
heroImage: '../../../assets/nombre-imagen.jpg'
```

## 🗺️ Roadmap y Evolución del Proyecto

**Fase 1: Core y Experiencia de Usuario (Completado ✅)**
- [x] SEO avanzado y cálculo de tiempo de lectura.
- [x] Paginación, buscador interno y sistema de comentarios.
- [x] RSS optimizado para lectura de bots.

**Fase 2: Distribución y Backend (Completado ✅)**
- [x] Despliegue a producción (Vercel/Netlify) y configuración de dominio personalizado.
- [x] Construcción de flujos en n8n para leer el RSS y publicar automáticamente en canales de Telegram.
- [x] Integración de backend con Supabase para la gestión de suscriptores a un newsletter.
- [x] Creación de un Chatbot IA interactivo para interactuar con los lectores y captar leads.

<hr></hr>
Construido con rigor técnico para la comunidad.