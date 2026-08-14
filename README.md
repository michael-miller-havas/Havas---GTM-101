# Acme Biologics GTM Training Lab

Repo-ready static website for GitHub Pages. This is a fictional pharma-style tagging lab for GTM and GA4 onboarding.

## Pages included

- `index.html` Home with CTA clicks and newsletter form
- `products.html` Product CTAs, mock video, ISI expand, PDF downloads
- `hcp-resources.html` HCP downloads, outbound link, access form
- `savings.html` Multi-step savings funnel and lead form
- `locator.html` Provider locator search and error handling
- `contact.html` Lead form with error and success flows
- `thank-you.html` Conversion confirmation page
- `training-tasks.html` Trainee exercises
- `qa-scenarios.html` Intentionally broken QA scenarios

## Quick start

1. Upload this repository to GitHub.
2. Enable GitHub Pages from the `main` branch and `/root`.
3. Replace `GTM-XXXXXXX` in `assets/js/config.js` with your GTM training container ID.
4. Create your GA4 property and Web stream using the GitHub Pages URL.
5. Build the GTM variables, triggers, and tags listed in `docs/GTM_GA4_CONTAINER_BUILD_GUIDE.md`.

## Reset model

The website is static and stores no trainee progress. Keep this repository as the baseline. Reset trainee work by deleting the trainee GTM workspace or restoring the GTM baseline version. Use `?trainee_id=first_last` in the URL if you want trainee-specific parameter values.
