import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '10mb' }));

  // Security & Production Headers Middleware
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-Powered-By', 'MarketBD.Net Engine');
    next();
  });
  const PORT = 3000;

  let ai: GoogleGenAI | null = null;
  function getAI() {
    if (!ai) {
      const key = process.env.GEMINI_API_KEY;
      if (key) {
        ai = new GoogleGenAI({ apiKey: key });
      }
    }
    return ai;
  }

  // AI Assistant endpoint
  app.post('/api/ai-assistant', async (req, res) => {
    try {
      const { prompt, userQuery } = req.body;
      const genAI = getAI();
      
      if (!genAI) {
        return res.json({
          success: true,
          reply: `[এআই বার্তা (API Key ছাড়াই কাজ করছে)]: মার্কেট বিডি তে আপনাকে স্বাগতম! 
আপনি "${prompt || userQuery}" লিখে সার্চ করেছেন। আমাদের প্ল্যাটফর্মে ঢাকা, চট্টগ্রাম, সিলেট সহ বাংলাদেশের ৬৪টি জেলায় দ্রুত গাড়ি, মোবাইল, ফ্ল্যাট, ল্যাপটপ এবং রকমারি বই ক্রয় ও বিক্রয় করতে পারবেন।`
        });
      }

      const model = 'gemini-2.5-flash';
      const systemInstruction = `You are "Market BD Smart AI Assistant" (মার্কেট বিডি এআই সহকারী), an intelligent marketplace deal advisor & listing writer for Bangladesh's top marketplace Market-BD (a hybrid of Bikroy.com, Rokomari, Daraz, OLX, and Facebook Marketplace).
Respond in friendly, natural Bengali (বাংলা) or English as requested. Provide concise price estimates in Bangladeshi Taka (৳), smart deal tips, or generate high-converting ad descriptions for sellers. Keep formatting bulleted and easy to read.`;

      const response = await genAI.models.generateContent({
        model,
        contents: prompt || userQuery,
        config: {
          systemInstruction
        }
      });

      res.json({
        success: true,
        reply: response.text
      });
    } catch (error: any) {
      console.error('Gemini API error:', error);
      res.json({
        success: false,
        reply: 'ক্ষমা করবেন, এআই সার্ভারে কিছুটা সমস্যা দেখা দিয়েছে। তবে আপনি সাধারণ সার্চ অ্যান্ড ফিল্টার অপশন দিয়ে আপনার প্রয়োজনীয় প্রোডাক্টটি খুঁজে পেতে পারেন।'
      });
    }
  });

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', name: 'MarketBD.Net Enterprise API' });
  });

  // Dynamic Sitemap XML Endpoint
  app.get(['/sitemap.xml', '/api/sitemap'], (_req, res) => {
    const SITE_URL = 'https://marketbd.net';
    const today = new Date().toISOString().split('T')[0];

    // Popular marketplace categories
    const categories = [
      'mobiles', 'computers', 'electronics', 'vehicles', 'property',
      'furniture', 'fashion', 'health', 'pets', 'agriculture',
      'business', 'services', 'jobs', 'others', 'education'
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
    xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n`;

    // 1. Homepage
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>always</changefreq>\n`;
    xml += `    <priority>1.0</priority>\n`;
    xml += `  </url>\n\n`;

    // 2. Categories
    categories.forEach(cat => {
      xml += `  <url>\n`;
      xml += `    <loc>${SITE_URL}/category/${cat}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>daily</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    });
    xml += `\n`;

    // 3. Featured Products
    const sampleProducts = [
      { slug: 'vivo-v40-pro-5g-12gb-512gb-zeiss', title: 'Vivo V40 Pro 5G - ZEISS Optics', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97' },
      { slug: 'macbook-pro-m3-max-16-inch-64gb', title: 'MacBook Pro M3 Max 16-inch', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
      { slug: 'toyota-land-cruiser-prado-tx-l-2022', title: 'Toyota Land Cruiser Prado TX-L', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf' },
      { slug: '3-bhp-luxury-apartment-gulshan-2-dhaka', title: '3 BHK Luxury Apartment Gulshan 2', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00' }
    ];

    sampleProducts.forEach(p => {
      xml += `  <url>\n`;
      xml += `    <loc>${SITE_URL}/ad/${p.slug}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.9</priority>\n`;
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${p.img.replace(/&/g, '&amp;')}</image:loc>\n`;
      xml += `      <image:title>${p.title.replace(/&/g, '&amp;')}</image:title>\n`;
      xml += `    </image:image>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    res.header('Content-Type', 'application/xml; charset=utf-8');
    res.send(xml);
  });

  // Dynamic Robots.txt Endpoint
  app.get('/robots.txt', (_req, res) => {
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: https://marketbd.net/sitemap.xml`;

    res.header('Content-Type', 'text/plain');
    res.send(robotsTxt);
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Market BD server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
