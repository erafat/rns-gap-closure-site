(function () {
  const cases = {
    A: {
      note: 'Patient reports persistent focal aware seizures despite programming changes. No changes documented over the last two visits.\nSeizure frequency remains high.\nConcern for optimization inertia.',
      pmds: {
        daily: '1,850 stims/day',
        implant: '2021-07-14',
        status: 'Active',
        battery: '78%'
      },
      report: {
        title: 'Optimization Inertia Detected',
        patient: 'Ongoing focal aware seizures',
        device: 'No parameter changes in 2 visits',
        summary: 'Clinical documentation shows persistent seizures without evidence-aligned optimization attempts over two visits.',
        priority: 'High Priority',
        action: 'Review programming strategy and escalation pathway',
        actionNote: 'Seizure burden persists with no parameter adjustments recorded; consider a structured optimization plan and earlier follow-up.',
        evidence: 'O\'Kula et al., 2021 (placeholder): Standardized programming improves outcomes.',
        variant: 'warning'
      }
    },
    B: {
      note: 'Patient reports being seizure free. No complaints noted.\nContinue current plan.',
      pmds: {
        daily: '2,400 stims/day',
        implant: '2020-11-02',
        status: 'Active',
        battery: '64%'
      },
      report: {
        title: 'Interpretation Mismatch Detected',
        patient: 'Note states seizure free',
        device: 'Long episodes ongoing (daily)',
        summary: 'The note suggests seizure freedom, but PMDS indicates ongoing activity. A review is needed to reconcile documentation with device data.',
        priority: 'High Priority',
        action: 'Reconcile clinical note with device trend',
        actionNote: 'Consider clarifying seizure status and documenting any mismatch between subjective report and PMDS activity.',
        evidence: 'Beniczky et al., 2016 (placeholder): Align clinical assessment with device data.',
        variant: 'warning'
      }
    },
    C: {
      note: 'Seizure frequency improved. Programming adjusted at last visit.\nFollow-up scheduled in 3 months.',
      pmds: {
        daily: '900 stims/day',
        implant: '2019-08-23',
        status: 'Active',
        battery: '72%'
      },
      report: {
        title: 'No Gap Detected',
        patient: 'Improved seizure control',
        device: 'Parameters adjusted recently',
        summary: 'Documentation shows optimization attempts and improvement, consistent with evidence-aligned practice.',
        priority: 'No Action Needed',
        action: 'Continue current monitoring plan',
        actionNote: 'Follow-up cadence appears appropriate given recent optimization.',
        evidence: 'Evidence anchors optional for no-gap cases.',
        variant: 'success'
      }
    },
    D: {
      note: 'Patient reports no benefit from RNS since implantation 2 years ago.\nSeizure frequency unchanged.\nConsidering VNS.',
      pmds: {
        daily: '< 500 stims/day',
        implant: '2022-03-10',
        status: 'Active',
        battery: '85%'
      },
      report: {
        title: 'Interpretation Mismatch Detected',
        patient: 'No benefit since 2y ago',
        device: 'Daily stims < 500 (Low)',
        summary: 'The clinical note assumes non-response, but device data suggests the system has not yet been optimally titrated.',
        priority: 'High Priority',
        action: 'Review Detection/Stimulation Settings',
        actionNote: 'Patient receiving <500 stimulations per day after 2 years. Sub-therapeutic stimulation may contribute to perceived lack of benefit.',
        evidence: 'Fisher et al., 2021 (placeholder): Optimization of therapy dose correlates with clinical outcome.',
        variant: 'warning'
      }
    }
  };

  const patientButtons = document.querySelectorAll('.patient');
  const noteText = document.getElementById('noteText');
  const pmdsDaily = document.getElementById('pmdsDaily');
  const pmdsImplant = document.getElementById('pmdsImplant');
  const pmdsStatus = document.getElementById('pmdsStatus');
  const pmdsBattery = document.getElementById('pmdsBattery');
  const reportBox = document.getElementById('reportBox');
  const reportTitle = document.getElementById('reportTitle');
  const reportPatient = document.getElementById('reportPatient');
  const reportDevice = document.getElementById('reportDevice');
  const reportSummary = document.getElementById('reportSummary');
  const reportPriority = document.getElementById('reportPriority');
  const reportActionTitle = document.getElementById('reportActionTitle');
  const reportActionNote = document.getElementById('reportActionNote');
  const reportEvidence = document.getElementById('reportEvidence');

  function setReport(caseId) {
    const data = cases[caseId];
    if (!data) return;

    if (noteText) noteText.textContent = data.note;
    if (pmdsDaily) pmdsDaily.textContent = data.pmds.daily;
    if (pmdsImplant) pmdsImplant.textContent = data.pmds.implant;
    if (pmdsStatus) pmdsStatus.textContent = data.pmds.status;
    if (pmdsBattery) pmdsBattery.textContent = data.pmds.battery;

    if (reportTitle) reportTitle.textContent = data.report.title;
    if (reportPatient) reportPatient.textContent = data.report.patient;
    if (reportDevice) reportDevice.textContent = data.report.device;
    if (reportSummary) reportSummary.textContent = data.report.summary;
    if (reportPriority) reportPriority.textContent = data.report.priority;
    if (reportActionTitle) reportActionTitle.textContent = data.report.action;
    if (reportActionNote) reportActionNote.textContent = data.report.actionNote;
    if (reportEvidence) reportEvidence.textContent = data.report.evidence;

    if (reportBox) {
      reportBox.classList.toggle('report--success', data.report.variant === 'success');
      reportBox.classList.toggle('report--warning', data.report.variant !== 'success');
    }
  }

  patientButtons.forEach((button) => {
    button.addEventListener('click', () => {
      patientButtons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      setReport(button.getAttribute('data-case'));
    });
  });
})();
