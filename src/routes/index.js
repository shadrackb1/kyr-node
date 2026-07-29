const express = require('express');
const router = express.Router();
const { articles, FAQs, getArticles, getArticleById, getArticlesByTag, searchArticles } = require('../data/articles');

// ── Home ──
router.get('/', (req, res) => {
  const featured = getArticles().slice(0, 4);
  res.render('pages/home', {
    title: 'Know Your Rights KE',
    currentPage: 'home',
    articles: featured,
    faqs: FAQs.slice(0, 4),
  });
});

// ── Library ──
router.get('/library', (req, res) => {
  const { topic, q } = req.query;
  let results = getArticles();

  if (topic && topic !== 'all') {
    results = getArticlesByTag(topic);
  }
  if (q) {
    results = searchArticles(q);
  }

  res.render('pages/library', {
    title: 'Rights Library',
    currentPage: 'library',
    articles: results,
    activeTopic: (topic || 'all').toUpperCase(),
    query: q || '',
    total: getArticles().length,
  });
});

// ── Article ──
router.get('/article/:id', (req, res) => {
  const article = getArticleById(req.params.id);
  if (!article) {
    return res.status(404).render('pages/404', {
      title: 'Article Not Found',
      currentPage: 'library',
    });
  }

  const related = getArticles()
    .filter(a => a.id !== article.id && a.tag === article.tag)
    .slice(0, 3);

  res.render('pages/article', {
    title: article.title,
    currentPage: 'library',
    article,
    related,
  });
});

// ── Ask ──
router.get('/ask', (req, res) => {
  res.render('pages/ask', {
    title: 'Ask a Question',
    currentPage: 'ask',
    faqs: FAQs,
    submitted: false,
  });
});

router.post('/ask', (req, res) => {
  const { question, topic, email } = req.body;
  // In production, save to database / send to Firebase
  console.log('Question submitted:', { question, topic, email, date: new Date() });

  res.render('pages/ask', {
    title: 'Ask a Question',
    currentPage: 'ask',
    faqs: FAQs,
    submitted: true,
  });
});

// ── API: Search (for live search) ──
router.get('/api/search', (req, res) => {
  const { q } = req.query;
  if (!q || q.length < 2) return res.json([]);
  const results = searchArticles(q).slice(0, 5).map(a => ({
    id: a.id,
    title: a.title,
    tag: a.tag,
    summary: a.summary,
  }));
  res.json(results);
});

module.exports = router;
