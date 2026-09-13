---
name: maximo-test-planning
description: Create a review-ready IBM Maximo test plan from an ADO work item, requirement or functional document, and relevant linked ADO tasks/documents. Use ADO MCP when available. Treat the functional document as the primary source for detailed functional behavior, use ADO for tracking and context, reconcile linked task evidence, identify gaps and risks, and keep every test scenario traceable without inventing requirements.
---

# Maximo Test Planning

## Purpose

Create a review-ready, draft test plan for an IBM Maximo change using the available project evidence.

This skill is **standalone**. It does not require the output of any other skill.

An approved Requirement Analysis report from the `01-requirement-analysis` skill may be supplied and used as **optional additional analyzed context**. It must never be treated as a mandatory prerequisite.

## Source hierarchy

Use sources in this order:

1. **Requirement / Functional Document — primary functional source**
   - Detailed functional behavior
   - Business rules
   - Expected outcomes
   - Validations
   - Workflows
   - Data requirements
   - Functional scope

2. **ADO Parent Work Item — tracking and project context**
   - Work item description
   - Acceptance criteria, when present
   - Status, priority, tags and fields
   - Comments
   - Links and relationships

3. **Linked ADO Child Tasks / Related Work Items — supporting project evidence**
   - Implementation details
   - Supporting scope
   - Additional acceptance details
   - Dependencies or technical constraints

4. **Other approved project documents**

5. **Optional approved Requirement Analysis report from Skill 01**
   - Use only when supplied.
   - Treat it as analyzed context, not as a replacement for the underlying sources.

6. **General QA knowledge**
   - Use only to identify testability concerns, common risk areas, or useful questions.
   - Never use it to invent application behavior or requirements.

 7. ## Reference examples

The files under `references/examples/` are reference examples only.

Use these examples to understand:

- Professional test-plan structure
- Section organization
- Appropriate level of detail
- Test scenario presentation
- P0/P1/P2 prioritization
- Requirement and acceptance-criteria traceability
- Test data and environment presentation
- Risks and assumptions
- Entry and exit criteria
- Overall QA documentation style

Reference examples must NOT be treated as requirements.

Never copy or infer current-project-specific:

- Requirements
- Acceptance criteria
- Business rules
- Test data
- Environment details
- Configuration
- User roles
- Dates
- Integrations
- Expected results
- Maximo behavior

Current project evidence always takes precedence over the examples.

If an example conflicts with the current ADO work item,
Requirement/Functional Document, linked ADO task, or other approved
project document, ignore the example and follow the current project
evidence.

## Source reconciliation rules

- The Functional Document is the baseline for detailed functional behavior.
- ADO is not required to repeat every detail contained in the Functional Document.
- If a behavior is documented in the Functional Document but not stated in the ADO parent, classify it as **DOCUMENT-SUPPORTED / ADO NOT STATED**, not as a conflict.
- If ADO contains information not stated in the Functional Document, classify it as **ADO-SUPPORTED / DOCUMENT NOT STATED** and determine whether it is tracking/context or requires clarification.
- Evidence from a linked child task or related work item should be identified separately as **CHILD-TASK-SUPPORTED**.
- A **CONFLICT** exists only when two sources explicitly state materially different or incompatible behavior, scope, rule, or expected outcome.
- ADO silence is not a conflict.
- Before declaring something missing, inspect relevant linked child/related work items and approved documents when available.
- Never invent acceptance criteria, expected behavior, test data, environments, roles, configuration, integrations, or Maximo behavior.

## Operating workflow

### 1. Collect evidence

Start from the provided ADO work item and requirement/functional document.

When ADO MCP is available:
- Retrieve the parent work item.
- Inspect relevant linked child tasks and related work items.
- Review available acceptance criteria, comments, links and relevant fields.
- Do not fabricate content when MCP data is unavailable.

Read the requirement/functional document completely enough to understand:
- Scope
- Functional flow
- Business rules
- Inputs and outputs
- Validations
- Expected results
- Roles/permissions
- Data
- Configuration/feature flags
- Integrations/dependencies
- Regression implications

If an approved Skill 01 report is supplied, use it to accelerate understanding and surface known gaps, ambiguities, conflicts and risks. Verify important conclusions against the underlying evidence when possible.

### 2. Establish the test-planning baseline

Create a concise baseline containing:
- In-scope functionality
- Explicit out-of-scope items
- Acceptance criteria
- Functional flows
- Business rules
- Required validations
- Known data conditions
- Roles and permissions
- Environment/configuration needs
- Dependencies/integrations
- Regression surface

Clearly distinguish confirmed evidence from questions or assumptions.

### 3. Perform gap analysis

Assess whether the available evidence is sufficient for planning:

- Functional happy path
- Negative/error paths
- Boundaries and limits
- Empty/null states
- Validation rules
- Acceptance criteria
- Test data
- Environment/configuration/feature flags
- Roles and permissions
- Integration/dependency behavior
- Regression impact
- Performance/non-functional expectations when applicable
- Security when applicable
- Accessibility/i18n when applicable
- Ambiguous wording

Classify findings as:
- **GAP** — required information is not available.
- **AMBIGUITY** — information exists but can reasonably be interpreted in multiple ways.
- **CONFLICT** — explicit incompatible statements exist between sources.
- **RISK** — known uncertainty or change area that could affect testing.
- **DEPENDENCY** — external system, configuration, data, role, environment, or team dependency.
- **QUESTION** — clarification needed from the author/product owner/development team.
- **ASSUMPTION** — explicitly labeled assumption; never present it as a requirement.

### 4. Design test scenarios

Create high-level test scenarios only.

Each scenario must:
- Have a unique ID.
- Have a clear objective.
- Be tagged **P0, P1, or P2**.
- Identify its source traceability.
- Map to an explicit acceptance criterion, documented behavior, business rule, or clearly identified GAP/QUESTION.
- State expected outcome at a high level.
- Avoid invented implementation details.

Prioritize:
- P0: critical business flow, core acceptance criteria, blocking functionality.
- P1: important alternate, negative, validation, boundary, role, integration, and regression coverage.
- P2: lower-risk edge cases, secondary paths, or additional coverage.

Do not write detailed step-by-step test cases in this skill.

### 5. Define test data and environment

Document only what is known or required by the evidence:
- Test data categories
- Required records/state
- Roles
- Environment
- Configuration
- Feature flags
- Integrations/dependencies
- Browser/device needs when applicable

Mark unknowns as gaps or questions rather than filling them with guesses.

### 6. Define risks, assumptions, entry and exit criteria

Capture:
- Testing risks
- Dependencies
- Explicit assumptions
- Entry criteria
- Exit criteria

Do not create project-specific thresholds unless they are provided or approved.

### 7. Human review gate

The output is always **DRAFT** until human approval.

Stop after producing the test plan and ask the reviewer to:
- Approve
- Edit
- Resolve open questions
- Confirm assumptions

Do not generate detailed test cases or automation until the human review gate is approved.

## Required output

Use `references/test-plan-template.md`.

The final draft must contain:

1. Test Plan Status
2. Source Inventory
3. Scope
4. Functional Baseline
5. Gaps & Questions
6. Test Scenarios
7. Test Data & Environment
8. Risks & Assumptions
9. Dependencies
10. Entry Criteria
11. Exit Criteria
12. Traceability
13. HUMAN REVIEW GATE

## Traceability

Every scenario must be traceable to its source.

Use source labels such as:
- `FD` — Functional/Requirement Document
- `ADO-PARENT` — ADO parent work item
- `ADO-CHILD` — linked child/related work item
- `RA-01` — optional approved Requirement Analysis report

For a conflict, cite both sources and do not silently choose one.

## Quality rules

- Be evidence-driven.
- Keep the plan concise and reviewable.
- Do not duplicate the detailed guidance already maintained in the reference files.
- Do not treat absence from one source as a contradiction.
- Do not invent missing information.
- Clearly label all assumptions and unresolved questions.
- Keep the plan at scenario level; detailed test cases belong to a later stage.
