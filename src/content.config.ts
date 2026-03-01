import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// 1. Aquí añadimos ({ image }) para poder usar la herramienta de imágenes
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// 2. Aquí cambiamos z.string() por image()
		heroImage: image().optional(),
		category: z.string().optional() 
	}),
});

export const collections = { blog };