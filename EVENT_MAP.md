# Event Map

| Event | Page(s) | Good or broken | Key parameters |
|---|---|---|---|
| training_page_view | All | Good | page_name, page_path, page_title, trainee_id |
| request_demo_click | Home | Good | cta_text, cta_id, page_section, content_group |
| learn_more_click | Home | Good | cta_text, page_section |
| newsletter_prompt_click | Home | Good | cta_text, page_section |
| form_start | Forms | Good | form_name, form_id |
| form_error | Forms, Locator | Good | form_name, form_id, error_type |
| generate_lead | Home, HCP, Savings, Contact | Good | form_name, form_id, lead_type, reason |
| add_to_kit | Products | Good | cta_text, content_group |
| talk_to_rep_click | Products | Good | cta_text, destination_url |
| video_start | Products | Good | video_title, video_provider |
| isi_expand_click | Products | Good | cta_text, page_section |
| file_download | Products, HCP, QA Scenarios | Good and broken | resource_name, resource_type, content_group |
| outbound_click | HCP | Good | destination_url, resource_name, resource_type |
| start_application | Savings | Good | funnel_step |
| eligibility_check_click | Savings | Good | funnel_step |
| savings_card_download_click | Savings | Good | funnel_step |
| search | Locator | Good | search_type, search_term, results_count |
| search_error | Locator | Good | search_type, error_type |
| provider_result_click | Locator | Good | content_group, cta_text |
| thank_you_view | Thank You | Good | conversion_type, page_path |
| request_demo_clik | QA Scenarios | Broken | typo event name |
| duplicate_cta_click | QA Scenarios | Broken | duplicate_reason |
| generateLead | QA Scenarios | Broken | wrong casing |
