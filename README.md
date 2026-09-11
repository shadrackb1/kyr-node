# kyr-node

Express backend for the Know Your Rights platform.

## What it does

- Server-rendered views (EJS)
- Hardened defaults: Helmet security headers, CORS, rate limiting
- Content API for rights Q&A consumed by the React clients

## Stack

- Node.js + Express 5
- EJS
- Helmet, cors, express-rate-limit
- dotenv

## Run

```bash
npm install
cp .env.example .env
npm run dev
```

## Related clients

- [know-your-rights](https://github.com/shadrackb1/know-your-rights)
- [knowyourrightske](https://github.com/shadrackb1/knowyourrightske)

## License

ISC
