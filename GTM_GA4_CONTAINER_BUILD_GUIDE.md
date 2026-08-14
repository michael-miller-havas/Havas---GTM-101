# GTM and GA4 Container Build Guide

## GA4 setup

Create a GA4 training property and Web data stream for the GitHub Pages URL. Use a dedicated training property, not a client property.

Suggested names:

- GA4 property: `Acme Biologics GTM Training Lab`
- Web stream: your GitHub Pages URL

## GTM setup

Create a dedicated Web container and replace `GTM-XXXXXXX` in `assets/js/config.js`.

Suggested names:

- GTM account: `Training - Data Analytics & Ad Ops`
- Container: `Acme Biologics Training Site - Web`

## Data Layer Variables to create

- `DLV - page_name` = `page_name`
- `DLV - page_path` = `page_path`
- `DLV - page_title` = `page_title`
- `DLV - trainee_id` = `trainee_id`
- `DLV - cta_text` = `cta_text`
- `DLV - cta_id` = `cta_id`
- `DLV - page_section` = `page_section`
- `DLV - destination_url` = `destination_url`
- `DLV - form_name` = `form_name`
- `DLV - form_id` = `form_id`
- `DLV - lead_type` = `lead_type`
- `DLV - reason` = `reason`
- `DLV - error_type` = `error_type`
- `DLV - resource_name` = `resource_name`
- `DLV - resource_type` = `resource_type`
- `DLV - content_group` = `content_group`
- `DLV - funnel_step` = `funnel_step`
- `DLV - search_type` = `search_type`
- `DLV - search_term` = `search_term`
- `DLV - results_count` = `results_count`
- `DLV - video_title` = `video_title`
- `DLV - video_provider` = `video_provider`
- `DLV - conversion_type` = `conversion_type`
- `DLV - duplicate_reason` = `duplicate_reason`

## Core tags to create

### 1. Google tag

- Tag type: Google tag
- Tag ID: GA4 Measurement ID
- Trigger: Initialization or All Pages, based on your team standard

### 2. GA4 Event - Training Custom Event

- Tag type: GA4 Event
- Event name: `{{Event}}`
- Trigger: custom event regex for clean events, or separate custom event triggers per exercise
- Parameters to map: all DLVs above that are relevant to that event

## Clean triggers to create

Create Custom Event triggers for:

- `training_page_view`
- `request_demo_click`
- `learn_more_click`
- `newsletter_prompt_click`
- `form_start`
- `form_error`
- `generate_lead`
- `add_to_kit`
- `talk_to_rep_click`
- `video_start`
- `isi_expand_click`
- `file_download`
- `outbound_click`
- `start_application`
- `eligibility_check_click`
- `savings_card_download_click`
- `search`
- `search_error`
- `provider_result_click`
- `thank_you_view`

## Broken QA triggers for trainer scenarios

Do not include these as clean baseline events. Use them in a trainer scenario workspace or as QA traps:

- `request_demo_clik`
- `duplicate_cta_click`
- `generateLead`

## Recommended GA4 key events

- `generate_lead`
- `thank_you_view`
- `file_download`
- `search`

## Mock vendor pixel QA tags

Use Custom HTML tags that only log to console. Do not send data to real vendors.

```html
<script>
console.log('Mock vendor pixel fired', {{DLV - resource_name}} || {{DLV - lead_type}} || 'no detail');
</script>
```

Suggested mock tags:

- `Mock Meta Pixel - Lead` fires on `generate_lead`
- `Mock TikTok Pixel - Engagement` fires on `video_start`
- `Mock Pharma Vendor Pixel - HCP Download` fires on `file_download` where `content_group` equals `hcp_resource`

## Scenario versions/workspaces

- `Baseline - Clean Training Lab v1`
- `Scenario - Beginner QA`
- `Scenario - Broken QA`
- `Scenario - Vendor Pixel QA`
