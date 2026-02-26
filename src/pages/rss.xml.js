import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
    const posts = await getCollection('blog');
    
    // 1. Ordenamos de más reciente a más antiguo para que n8n lea siempre lo último
    const sortedPosts = posts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        
        // 2. Mapeamos los artículos ordenados
        items: sortedPosts.map((post) => {
            // Extraemos la categoría (el nombre de la carpeta: 'software-ia' o 'desarrollo')
            const category = post.id.split('/')[0];

            return {
                ...post.data, // Trae automáticamente el title, description y pubDate
                link: `/blog/${post.slug}/`,
                
                // 3. LA MAGIA PARA N8N: Inyectamos la categoría en formato XML
                customData: `<category>${category}</category>`,
            };
        }),
        
        // Declaramos el idioma para los agregadores de noticias
        customData: `<language>es</language>`,
    });
}