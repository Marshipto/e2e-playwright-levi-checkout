# Levi’s Checkout – End-to-End Automation with Playwright

**From 38+ hours of manual regression → fully automated in under 11 minutes**

### What this covers (real business scenarios)
- Guest checkout flow (no login)
- Size/color out-of-stock handling
- Coupon code validation (valid, invalid, expired)
- Shipping address validation errors
- Payment method failures (card declined simulation)
- Cart persistence across sessions

### Proof (90-second video)
[Watch full execution on real levi.com.mx →](https://www.loom.com/share/[TU_LINK_AQUI])

### Tech stack
- Playwright Test (latest)
- TypeScript
- GitHub Actions CI/CD
- Playwright HTML + Allure reporting
- Trace viewer on failure

### How to run locally
```bash
npm install
npx playwright install-deps
npx playwright test --headed          # watch it live
npx playwright test --reporter=html   # generate report
