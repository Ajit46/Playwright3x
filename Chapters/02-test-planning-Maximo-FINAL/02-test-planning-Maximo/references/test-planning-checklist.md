# Test Planning Checklist

## 1. Source control
- [ ] ADO parent work item is available.
- [ ] Requirement/Functional Document is available.
- [ ] Relevant linked child/related ADO items have been checked.
- [ ] Other approved project documents have been considered.
- [ ] Optional Skill 01 analysis report is clearly identified if supplied.
- [ ] No source content has been invented.

## 2. Functional baseline
- [ ] Scope is clear.
- [ ] In-scope behavior is identified.
- [ ] Out-of-scope behavior is identified when explicitly stated.
- [ ] Functional flows are understood.
- [ ] Business rules are captured.
- [ ] Validations and expected outcomes are captured.
- [ ] Acceptance criteria are identified where available.

## 3. Source reconciliation
- [ ] Functional Document is treated as the primary detailed functional source.
- [ ] ADO is treated as tracking/context evidence.
- [ ] Child/related tasks are checked for supporting details.
- [ ] Document detail absent from ADO is not marked as a conflict.
- [ ] ADO-only information is classified appropriately.
- [ ] Conflicts are recorded only for explicit incompatible statements.

## 4. Coverage assessment
- [ ] Happy path
- [ ] Alternate paths
- [ ] Negative/error paths
- [ ] Boundary/limit cases
- [ ] Empty/null states
- [ ] Validation behavior
- [ ] Roles/permissions
- [ ] Test data
- [ ] Environment/configuration/flags
- [ ] Integration/dependencies
- [ ] Regression surface
- [ ] Performance/non-functional, when applicable
- [ ] Security, when applicable
- [ ] Accessibility/i18n, when applicable

## 5. Scenario quality
- [ ] Every scenario has a unique ID.
- [ ] Every scenario has P0/P1/P2 priority.
- [ ] Every scenario has source traceability.
- [ ] Every scenario maps to an AC, documented behavior, business rule, GAP, or QUESTION.
- [ ] Expected outcomes are high-level and evidence-based.
- [ ] No detailed test steps are included.

## 6. Test data and environment
- [ ] Known data needs are captured.
- [ ] Unknown data needs are marked as gaps/questions.
- [ ] Required roles are identified.
- [ ] Required environment/configuration is identified.
- [ ] Required flags are identified.
- [ ] External dependencies are identified.

## 7. Risks and readiness
- [ ] Risks are documented.
- [ ] Dependencies are documented.
- [ ] Assumptions are explicitly labeled.
- [ ] Entry criteria are evidence-based.
- [ ] Exit criteria are evidence-based.
- [ ] No unsupported project-specific thresholds are invented.

## 8. Human review
- [ ] Plan is marked DRAFT.
- [ ] Open questions are visible.
- [ ] Assumptions are visible.
- [ ] Human reviewer approval is requested.
- [ ] Detailed test cases and automation are not generated before approval.
