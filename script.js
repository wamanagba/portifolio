// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Typed text effect
const phrases = [
  'AI & Climate Data Scientist',
  'ML for Climate Systems',
  'Geospatial Data Engineer',
  'Early Warning Specialist',
  'Research Fellow — NASA & UF',
  'Sahel Food Security Analyst',
];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 55 : 85);
}
type();

// Intersection observer for fade-in and skill bars
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');

    entry.target.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });

    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .project-card, .skill-category, .about-grid, .achievement-card, .timeline-item, .edu-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  const btn = this.querySelector('button[type="submit"]');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    note.textContent = '✓ Message sent! I will reply within 24h.';
    note.style.color = 'var(--green)';
    this.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
    setTimeout(() => { note.textContent = ''; }, 5000);
  }, 1200);
});

// Achievement modal
const achData = [
  {
    icon: '⚡',
    title: 'CRAFT Automation — 100%',
    body: `
      <p>The Climate Risk and Food security Tool (CRAFT) previously relied on manual data downloads and processing steps that were error-prone and time-consuming. I redesigned the entire ingestion layer to run automatically.</p>
      <ul>
        <li>Built scheduled pipelines that pull CHIRPS, ERA5, and NASA POWER data without human intervention.</li>
        <li>Implemented end-to-end reproducibility: from raw API calls to processed indicators ready for analysis.</li>
        <li>Deployed across <strong>8 Sahelian countries</strong>, enabling WFP and partner teams to run consistent weekly updates.</li>
        <li>Reduced risk of human error in data handling by replacing manual steps with validated, version-controlled code.</li>
      </ul>
      <div class="ach-tags">
        <span class="ach-tag">Python</span><span class="ach-tag">R</span><span class="ach-tag">CHIRPS</span>
        <span class="ach-tag">ERA5</span><span class="ach-tag">NASA POWER</span><span class="ach-tag">CRAFT</span>
      </div>`
  },
  {
    icon: '🚀',
    title: '>90% Runtime Reduction',
    body: `
      <p>The original CRAFT pipeline used ArcGIS Pro for all geoprocessing tasks — a proprietary, license-dependent toolchain with slow batch execution times. I replaced it entirely with open-source alternatives.</p>
      <ul>
        <li>Migrated spatial operations from ArcGIS to <strong>terra</strong>, <strong>sf</strong>, and <strong>raster</strong> in R, and <strong>geopandas</strong> / <strong>xarray</strong> in Python.</li>
        <li>Operations that previously took 6–8 hours per country now complete in under 20 minutes.</li>
        <li>Parallelized key bottlenecks (zonal statistics, grid resampling) across CPU cores.</li>
        <li>Eliminated software licensing costs and enabled the tool to run on any machine or cloud environment.</li>
      </ul>
      <div class="ach-tags">
        <span class="ach-tag">terra</span><span class="ach-tag">sf</span><span class="ach-tag">raster</span>
        <span class="ach-tag">xarray</span><span class="ach-tag">geopandas</span><span class="ach-tag">parallel processing</span>
      </div>`
  },
  {
    icon: '🔓',
    title: 'Open-Sourced CRAFT',
    body: `
      <p>CRAFT was originally tightly coupled to ArcGIS licenses and proprietary data formats, making it impossible to share or reproduce outside of licensed environments. I led the effort to make it fully open-source.</p>
      <ul>
        <li>Replaced every proprietary component with open-source equivalents (QGIS, R spatial packages, Python geospatial stack).</li>
        <li>Documented the full workflow with reproducible scripts, configuration files, and README guides.</li>
        <li>Lowered the barrier to entry for partner NGOs and national meteorological services in West Africa.</li>
        <li>Enabled the tool to be deployed on low-cost infrastructure with no per-seat licensing.</li>
      </ul>
      <div class="ach-tags">
        <span class="ach-tag">Open Source</span><span class="ach-tag">QGIS</span><span class="ach-tag">Reproducibility</span>
        <span class="ach-tag">GitHub</span><span class="ach-tag">Documentation</span>
      </div>`
  },
  {
    icon: '🌦️',
    title: 'Multi-Source Climate Pipelines',
    body: `
      <p>Building reliable early-warning systems requires integrating heterogeneous datasets with different spatial resolutions, time ranges, and formats. I engineered unified pipelines to handle this complexity.</p>
      <ul>
        <li>Integrated <strong>30+ years</strong> of CHIRPS rainfall and ERA5 reanalysis data for trend and anomaly detection.</li>
        <li>Combined ACLED conflict event data with climate indicators to build compound-risk indices.</li>
        <li>Incorporated Cadre Harmonisé food security phase data (IPC) for ground-truth validation.</li>
        <li>Standardized all datasets to a common 20×20 km grid to allow district-level aggregation across countries.</li>
      </ul>
      <div class="ach-tags">
        <span class="ach-tag">CHIRPS</span><span class="ach-tag">ERA5</span><span class="ach-tag">ACLED</span>
        <span class="ach-tag">Cadre Harmonisé</span><span class="ach-tag">IPC</span><span class="ach-tag">Python</span><span class="ach-tag">R</span>
      </div>`
  },
  {
    icon: '🗺️',
    title: 'Composite Indices & Vulnerability Mapping',
    body: `
      <p>Rather than treating climate and conflict data separately, I developed composite indices that capture their interaction — a key factor in Sahel food insecurity dynamics.</p>
      <ul>
        <li>Applied <strong>PCA (Principal Component Analysis)</strong> to compress multi-variable climate and conflict signals into interpretable composite risk scores.</li>
        <li>Built a <strong>20×20 km gridded methodology</strong> covering 8 Sahelian countries, enabling sub-national targeting.</li>
        <li>Identified <strong>32 high-risk districts</strong> for anticipatory action — used by WFP to pre-position food aid.</li>
        <li>Produced UNHCR displacement risk maps integrating SPEI-3 drought index and conflict intensity layers.</li>
        <li>Maps were adopted by CIAT's Climate Security Observatory as reference products.</li>
      </ul>
      <div class="ach-tags">
        <span class="ach-tag">PCA</span><span class="ach-tag">SPEI-3</span><span class="ach-tag">WFP</span>
        <span class="ach-tag">UNHCR</span><span class="ach-tag">CIAT</span><span class="ach-tag">QGIS</span>
      </div>`
  },
  {
    icon: '🌾',
    title: 'Crop Yield Prediction with ML',
    body: `
      <p>Accurate crop yield forecasts 1–3 months before harvest allow humanitarian organizations to respond before food crises materialize. I developed and validated ML models for this purpose.</p>
      <ul>
        <li>Built <strong>Random Forest</strong> and <strong>GAM</strong> models using satellite-derived vegetation indices (NDVI, EVI), rainfall, temperature, and soil moisture as features.</li>
        <li>Achieved district-level crop yield estimates for maize, millet, and sorghum across West Africa.</li>
        <li>Validated models against historical yield survey data and agronomic benchmarks.</li>
        <li>Integrated forecasts into anticipatory action triggers for the Red Cross Forecast-based Financing (FbF) programme.</li>
        <li>Prototyped near-real-time workflows during a visiting research stay at <strong>NASA</strong>.</li>
      </ul>
      <div class="ach-tags">
        <span class="ach-tag">Random Forest</span><span class="ach-tag">GAM</span><span class="ach-tag">NDVI</span>
        <span class="ach-tag">EVI</span><span class="ach-tag">Python</span><span class="ach-tag">R</span><span class="ach-tag">NASA</span>
      </div>`
  }
];

const overlay = document.getElementById('achOverlay');
const modalIcon = document.getElementById('achModalIcon');
const modalTitle = document.getElementById('achModalTitle');
const modalBody = document.getElementById('achModalBody');

document.querySelectorAll('.achievement-card').forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.ach);
    const d = achData[idx];
    modalIcon.textContent = d.icon;
    modalTitle.textContent = d.title;
    modalBody.innerHTML = d.body;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

document.getElementById('achClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (!link) return;
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
      link.style.color = 'var(--accent2)';
    }
  });
});
