# Broken QA Scenarios

The `qa-scenarios.html` page is intentionally wrong in four ways.

## Scenario 1: Typo event name

- Actual event: `request_demo_clik`
- Expected event: `request_demo_click`
- Expected finding: typo prevents the clean trigger from firing.

## Scenario 2: Missing download parameter

- Actual event: `file_download`
- Missing parameter: `resource_name`
- Expected finding: event fires but is not report-ready.

## Scenario 3: Duplicate event push

- Actual event: `duplicate_cta_click`
- Expected finding: one click produces two events and could double count.

## Scenario 4: Wrong event casing

- Actual event: `generateLead`
- Expected event: `generate_lead`
- Expected finding: inconsistent naming breaks standardized reporting and key event logic.
