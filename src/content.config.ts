import { defineCollection, z } from 'astro:content';
const titleFont = z.enum(['default','oswald','cormorant','ebgaramond','space','archivo']).optional().default('default');
const events=defineCollection({type:'content',schema:z.object({title:z.string(),artist:z.string().optional(),start:z.coerce.date(),end:z.coerce.date().optional(),location:z.string(),city:z.string().default('Roma'),cover:z.string().optional(),featured:z.boolean().default(false),excerpt:z.string().optional(),titleFont,gallery:z.array(z.string()).default([])})});
const articles=defineCollection({type:'content',schema:z.object({title:z.string(),author:z.string().optional(),date:z.coerce.date(),cover:z.string().optional(),excerpt:z.string().optional()})});
export const collections={events,articles};
