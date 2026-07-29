require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Security ──
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(cors());

// ── Rate limiting ──
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// ── Body parsing ──
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Static files ──
app.use(express.static(path.join(__dirname, 'src/public')));

// ── View engine ──
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ── Routes ──
const routes = require('./src/routes/index');
app.use('/', routes);

// ── 404 ──
app.use((req, res) => {
  res.status(404).render('pages/404', {
    title: 'Page Not Found',
    currentPage: '',
  });
});

// ── Error handler ──
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('pages/500', {
    title: 'Server Error',
    currentPage: '',
  });
});

// ── Start ──
app.listen(PORT, () => {
  console.log(`\n  🛡️  Know Your Rights KE`);
  console.log(`  ➜  http://localhost:${PORT}`);
  console.log(`  ➜  ${new Date().toLocaleString()}\n`);
});
