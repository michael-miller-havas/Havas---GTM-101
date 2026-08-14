# Reset Guide

## Site reset

The GitHub site is static and does not store trainee progress. Keep the repository baseline unchanged.

Recommended baseline command after first publish:

```bash
git tag baseline-v1
git push origin baseline-v1
```

## GTM reset

1. Keep `Baseline - Clean Training Lab v1` published.
2. Create one workspace per trainee.
3. Review the trainee workspace in Preview.
4. Delete the trainee workspace when training is complete.
5. If a trainee publishes, restore the baseline GTM version and publish it again.

## GA4 reset

GA4 historical data is not reset by the site. Use `?trainee_id=first_last`, date ranges, or separate GA4 test properties if you need clean trainee-level review.
