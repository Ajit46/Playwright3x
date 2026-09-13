# Test Plan — DRAFT

## 1. Test Plan Status

**Status:** DRAFT  
**Human approval:** Pending

---

## 2. Source Inventory

| Source | Reference | Role | Status |
|---|---|---|---|
| Functional/Requirement Document | FD | Primary functional source | Available / Missing |
| ADO Parent Work Item | ADO-PARENT | Tracking/context | Available / Missing |
| Linked Child/Related ADO Items | ADO-CHILD | Supporting evidence | Available / Missing / Not applicable |
| Approved project documents | DOC-* | Supporting evidence | Available / Missing / Not applicable |
| Requirement Analysis report | RA-01 | Optional analyzed context | Supplied / Not supplied |

---

## 3. Scope

### In Scope
- [Evidence-based scope item]

### Out of Scope
- [Only explicitly documented exclusions]

### Scope Notes
- [Important source relationship or scope clarification]

---

## 4. Functional Baseline

| Area | Confirmed behavior | Source |
|---|---|---|
| Functional flow | [Behavior] | FD / ADO-PARENT / ADO-CHILD |
| Business rule | [Rule] | FD / ADO-* |
| Validation | [Validation] | FD / ADO-* |
| Expected outcome | [Outcome] | FD / ADO-* |
| Role/permission | [Known rule] | FD / ADO-* |
| Data | [Known requirement] | FD / ADO-* |
| Integration/dependency | [Known dependency] | FD / ADO-* |

### Source Reconciliation Notes

- **Document-supported / ADO not stated:** [Items]
- **ADO-supported / document not stated:** [Items]
- **Child-task-supported:** [Items]
- **Explicit conflicts:** [Items, if any]

> Absence from one source is not a conflict.

---

## 5. Gaps & Questions

| ID | Type | Area | Finding | Source/Evidence | Question / Action | Impact |
|---|---|---|---|---|---|---|
| G-001 | GAP | [Area] | [Missing information] | [Source] | [Question] | P0/P1/P2 |

Types: GAP, AMBIGUITY, CONFLICT, RISK, DEPENDENCY, QUESTION, ASSUMPTION.

---

## 6. Test Scenarios

| ID | Priority | Scenario | Expected Outcome | Traceability |
|---|---|---|---|---|
| TS-001 | P0 | [High-level scenario] | [Expected result] | AC-01 / FD-Section / G-001 |
| TS-002 | P1 | [High-level scenario] | [Expected result] | FD-Section / ADO-AC |

### Scenario Coverage Summary

- Happy path: [Covered / Gap]
- Alternate paths: [Covered / Gap]
- Negative/error paths: [Covered / Gap]
- Boundary/empty states: [Covered / Gap]
- Validation: [Covered / Gap]
- Roles/permissions: [Covered / Gap]
- Integration: [Covered / Gap]
- Regression: [Covered / Gap]
- Non-functional: [Covered / Gap / N/A]

---

## 7. Test Data & Environment

### Test Data
- [Known data requirement]
- [Unknown data requirement — convert to question]

### Environment / Configuration
- Environment: [Known / TBD]
- Feature flags: [Known / TBD / N/A]
- Configuration: [Known / TBD]
- Roles: [Known / TBD]
- Integrations: [Known / TBD]

---

## 8. Risks & Assumptions

### Risks
| ID | Risk | Impact | Mitigation / Question |
|---|---|---|---|
| R-001 | [Risk] | [Impact] | [Mitigation] |

### Assumptions
- [Explicit assumption only]

---

## 9. Dependencies

| ID | Dependency | Required For | Status / Question |
|---|---|---|---|
| D-001 | [Dependency] | [Scenario/area] | [Status] |

---

## 10. Entry Criteria

- [Evidence-based entry condition]
- [Required environment/data/role condition]
- [Required build/deployment condition, if explicitly known]

## 11. Exit Criteria

- [Evidence-based completion condition]
- [Required acceptance coverage]
- [Defect/status condition, only if defined or approved]

---

## 12. Traceability

| Scenario | Requirement / AC / Gap | Source |
|---|---|---|
| TS-001 | [Reference] | FD / ADO-PARENT / ADO-CHILD |
| TS-002 | [Reference] | [Source] |

---

# HUMAN REVIEW GATE

**The test plan is DRAFT and requires human review.**

### Open Questions
- [Question]

### Assumptions Requiring Confirmation
- [Assumption]

### Conflicts Requiring Resolution
- [Conflict, if any]

**Reviewer action:** Approve, edit, or provide clarification.

**Do not generate detailed test cases or automation until this plan is approved.**
