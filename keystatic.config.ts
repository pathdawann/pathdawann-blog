import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: import.meta.env.DEV 
    ? { kind: 'local' } 
    : { kind: 'github', repo: 'pathdawann/pathdawann-blog' },
  collections: {
    posts: collection({
      label: 'Artículos de Pathdawann',
      slugField: 'title',
      path: 'src/content/blog/*', // Guarda los .md directo en tu carpeta de blog
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título del Artículo' } }),
        description: fields.text({ label: 'Breve Descripción (SEO)' }),
        pubDate: fields.date({ label: 'Fecha de Publicación', validation: { isRequired: true } }),
        
        // ¡Magia para las imágenes! Keystatic las guardará en src/assets
        // y escribirá la ruta relativa ../../assets/ automáticamente en tu Markdown
        heroImage: fields.image({
          label: 'Imagen Principal',
          directory: 'src/assets',
          publicPath: '../../assets/', 
        }),
        
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Desarrollo Web', value: 'desarrollo' },
            { label: 'Inteligencia Artificial', value: 'ia' },
            { label: 'Automatización', value: 'automatizacion' }
          ],
          defaultValue: 'desarrollo'
        }),
        
        content: fields.document({
          label: 'Contenido del Artículo',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});