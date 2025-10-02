import type { APIRoute } from 'astro';
import { getCurrentLanguage } from '../utils/i18n-astro';

export const GET: APIRoute = async ({ url }) => {
  const baseUrl = url.origin;
  const currentDate = new Date().toISOString();
  
  // Definir todas las páginas disponibles
  const pages = [
    {
      path: '',
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: currentDate
    },
    {
      path: '/mission',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      path: '/services',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      path: '/clients',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      path: '/contact',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: currentDate
    }
  ];

  // Idiomas soportados
  const languages = ['en', 'es'];
  
  // Generar URLs para cada idioma
  const urls: string[] = [];
  
  for (const page of pages) {
    for (const lang of languages) {
      const url = `${baseUrl}/${lang}${page.path}`;
      urls.push(`
    <url>
      <loc>${url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en${page.path}" />
    </url>`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600' // Cache por 1 hora
    }
  });
};
