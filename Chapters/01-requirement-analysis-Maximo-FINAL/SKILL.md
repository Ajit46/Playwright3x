---
name: maximo-requirement-analysis
description: Analyze an IBM Maximo requirement using the ADO work item, requirement or functional document, and relevant linked ADO tasks/documents. Use ADO MCP when available. Identify gaps, ambiguities, explicit conflicts, risks, dependencies, and test readiness without inventing requirements.
---

# Maximo Requirement Analysis

## Purpose

Assess whether a Maximo change is sufficiently defined for QA test planning.

This skill performs requirement analysis only. It does not generate detailed test cases or automation.

## Evidence and source hierarchy

Use the following evidence hierarchy:

1. **Requirement / Functional Document** — primary source for detailed functional behavior, business rules, expected outcomes, validations, workflows, data, and functional scope.
2. **ADO Parent Work Item** — work-tracking and context source; use its description, acceptance criteria, comments, status, links, and other available fields.
3. **Linked ADO Child Tasks / Related Work Items** — important supporting project evidence that may contain implementation, configuration, data, integration, or testing details.
4. **Other approved project documents** — supporting evidence.
5. `references/requirement-checklist.md` — analysis checklist.
6. General QA knowledge — only for identifying questions, risks, or testability concerns.

### Critical rule: absence is not conflict

If a detail exists in the Requirement/Functional Document but is not repeated in the ADO parent work item, this is **not a conflict**.

Classify it as:
- `DOCUMENT-SUPPORTED / ADO NOT STATED`

Check linked child tasks and related work items before declaring information missing.

A **CONFLICT** exists only when two available sources explicitly state materially different or incompatible behavior, scope, rules, or expected outcomes.

## Workflow

### 1. Collect evidence

If an ADO work-item ID is provided and ADO MCP is available:
- retrieve the work item;
- inspect relevant fields, description, acceptance criteria, comments, links, child tasks, related work items, and referenced documents.

Read the supplied or linked Requirement/Functional Document.

If a required source cannot be accessed, state the limitation. Never fabricate its content.

Create a source inventory.

### 2. Establish the requirement baseline

Capture separately:

**Functional/Requirement Document**
- business objective
- functional behavior
- business rules
- validations
- expected outcomes
- workflows/status transitions
- data
- roles/security
- integrations
- configuration
- error handling
- non-functional expectations

**ADO**
- work-item context
- scope tracking
- acceptance criteria when present
- status/ownership
- comments/decisions
- links and dependencies

**Linked tasks**
- additional approved details relevant to the requirement.

### 3. Reconcile evidence

For each material requirement classify:

- `CONFIRMED` — supported by the functional document, with optional ADO corroboration.
- `DOCUMENT-SUPPORTED / ADO NOT STATED` — present in the document but not repeated in ADO.
- `ADO-SUPPORTED / DOCUMENT NOT STATED` — present in ADO; determine whether it is tracking/context or a functional clarification needing confirmation.
- `CHILD-TASK-SUPPORTED` — supported by a relevant linked child task.
- `CONFLICT` — sources explicitly disagree.
- `UNCLEAR` — available wording is insufficient.

Do not turn silence into a conflict.

### 4. Assess testability

Check:
- business goal and user
- scope
- functional behavior
- acceptance criteria
- positive path
- negative/error path
- boundary/empty/null behavior
- business rules and validations
- workflow/state transitions
- test data
- environment/configuration
- integrations/dependencies
- roles/permissions
- regression impact
- migration/data conversion where applicable
- audit/logging
- performance/security/accessibility/localization where applicable

Use the checklist in `references/requirement-checklist.md`.

### 5. Record findings

Separate:
- Gaps
- Ambiguities
- Explicit source conflicts
- Risks
- Dependencies
- Questions for the author
- Assumptions/unconfirmed items

Every material finding must have evidence or clearly state that the information is absent.

Questions must be precise and actionable.

### 6. Determine readiness

Use:
- `READY`
- `READY WITH QUESTIONS`
- `NOT READY`

A material unresolved conflict or missing information that prevents reliable test planning should result in `NOT READY`.

### 7. Human review gate

End with a mandatory review gate.

The analysis remains a draft until reviewed.

Do not generate detailed test cases or automation from this skill.

## Output

Use `references/requirement-analysis-template.md`.

Start with:

`Status: DRAFT — requirement analysis pending human review`

Required sections:
1. Source Inventory
2. Requirement Summary
3. Evidence Reconciliation
4. Test Readiness
5. Requirement Findings
6. Gaps
7. Ambiguities
8. Source Conflicts
9. Risks
10. Dependencies
11. Questions for the Author
12. Assumptions / Unconfirmed Items
13. Human Review Gate

## Guardrails

- Never invent requirements, acceptance criteria, Maximo behavior, ADO content, document content, environments, roles, data, integrations, or approvals.
- Never silently resolve explicit source conflicts.
- Never label an ADO omission as a conflict.
- Check linked child/related tasks before reporting a gap.
- Keep source facts separate from analyst interpretation.
- Preserve traceability to source evidence.
- Do not proceed to detailed test design or automation.
