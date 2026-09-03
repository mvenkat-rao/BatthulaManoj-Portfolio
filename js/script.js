/**
 * Batthula Manoj - Portfolio Scripts
 * Handles Navigation, Active State, Modals, Certificate Viewer & Downloads
 */

// Comprehensive Certificate Database (12 Official Credentials)
const CERTIFICATES_DATA = {
  php: {
    title: "Web Development Essentials Using PHP",
    subtitle: "Parul Institute of Engineering & Technology (PIET) · Dept. of AI & DS (Feb 5-6, 2025)",
    imageSrc: "assets/images/cert_php.png",
    downloadPath: "assets/docs/parul_php_workshop.pdf",
    downloadFileName: "Batthula_Manoj_Parul_PHP_Certificate.pdf"
  },
  nptel: {
    title: "Computer Networks and Internet Protocol",
    subtitle: "NPTEL Online Certification · IIT Kharagpur / MoE Govt. of India · Roll: NPTEL25CS15S1146002066 (Score: 53%)",
    imageSrc: "assets/images/cert_nptel.png",
    downloadPath: "assets/docs/nptel_computer_networks.pdf",
    downloadFileName: "Batthula_Manoj_NPTEL_CN_Certificate.pdf"
  },
  infosys: {
    title: "Introduction to AI For Metaverse",
    subtitle: "Infosys Springboard · Executive Education & Training · Issued January 23, 2025",
    imageSrc: "assets/images/cert_infosys.png",
    downloadPath: "assets/docs/infosys_metaverse_ai.pdf",
    downloadFileName: "Batthula_Manoj_Infosys_AI_Metaverse.pdf"
  },
  pepsico_sales_star: {
    title: "Pep Sales Star Workshop – Certificate of Participation",
    subtitle: "PepsiCo India & Internshala · FMCG Sales Operations & Career Workshop (May 17, 2025)",
    imageSrc: "assets/images/cert_pepsico_sales_star.png",
    downloadPath: "assets/docs/pepsico_sales_star.pdf",
    downloadFileName: "Batthula_Manoj_PepsiCo_Sales_Star_Certificate.pdf"
  },
  wadhwani_speaking: {
    title: "Effective Speaking and Listening Skills",
    subtitle: "Wadhwani Foundation & PepsiCo Pep Sales Star · 9.75 Hours Course · Issued June 01, 2025",
    imageSrc: "assets/images/cert_wadhwani_speaking.png",
    downloadPath: "assets/docs/wadhwani_speaking_listening.pdf",
    downloadFileName: "Batthula_Manoj_Wadhwani_Speaking_Listening.pdf"
  },
  wadhwani_problem_solving: {
    title: "Problem Solving & Innovation",
    subtitle: "Wadhwani Foundation & PepsiCo Pep Sales Star · 7 Hours Course · Issued June 01, 2025",
    imageSrc: "assets/images/cert_wadhwani_problem_solving.png",
    downloadPath: "assets/docs/wadhwani_problem_solving.pdf",
    downloadFileName: "Batthula_Manoj_Wadhwani_Problem_Solving.pdf"
  },
  isp_appreciation: {
    title: "Certificate of Appreciation – Internshala Student Partner (ISP 49)",
    subtitle: "Internshala · ISP 49 First Training Contest Winner/Participant · Issued July 3, 2025",
    imageSrc: "assets/images/cert_internshala_isp.png",
    downloadPath: "assets/docs/internshala_isp_appreciation.pdf",
    downloadFileName: "Batthula_Manoj_Internshala_ISP_Appreciation.pdf"
  },
  isp_lor: {
    title: "Letter of Recommendation – Internshala Student Partner (ISP)",
    subtitle: "Internshala · Exceptional Performance Recognition by VP Marketing · Issued July 3, 2025",
    imageSrc: "assets/images/cert_internshala_lor.png",
    downloadPath: "assets/docs/internshala_isp_lor.pdf",
    downloadFileName: "Batthula_Manoj_Internshala_ISP_Recommendation.pdf"
  },
  internshala_webinar: {
    title: "ISP 49 First Registrations Contest Webinar",
    subtitle: "Internshala Student Partner Team · Certificate of Participation · May 02, 2025",
    imageSrc: "assets/images/cert_internshala_webinar.png",
    downloadPath: "assets/docs/internshala_isp_webinar.pdf",
    downloadFileName: "Batthula_Manoj_Internshala_Webinar_Certificate.pdf"
  },
  google_nxt: {
    title: "NXTFrame: From Voice to Vision, From Now to Next",
    subtitle: "Google NXT HUB & GDG Baroda · Parul Institute of Engineering & Technology (June 28, 2025)",
    imageSrc: "assets/images/cert_google_nxtframe.png",
    downloadPath: "assets/docs/google_nxtframe_gdg.pdf",
    downloadFileName: "Batthula_Manoj_Google_NXTFrame_Certificate.pdf"
  },
  wordpress: {
    title: "WordPress for Beginners",
    subtitle: "Infosys Springboard · Web Publishing & CMS · Completed Jan 3, 2024 (Issued June 22, 2024)",
    imageSrc: "assets/images/cert_wordpress.png",
    downloadPath: "assets/docs/infosys_wordpress.pdf",
    downloadFileName: "Batthula_Manoj_Infosys_WordPress_Certificate.pdf"
  },
  python_workshop: {
    title: "Python Workshop – Certificate of Completion",
    subtitle: "AI Academia · Hands-on Python Development & Programming · April 20, 2025",
    imageSrc: "assets/images/cert_ai_academia_python.png",
    downloadPath: "assets/docs/ai_academia_python.pdf",
    downloadFileName: "Batthula_Manoj_AI_Academia_Python_Certificate.pdf"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initActiveSectionObserver();
  initAvatarModal();
  initKeyboardEscape();
});

/* --------------------------------------------------------------------------
   1. NAVIGATION & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. ACTIVE NAV PILL (INTERSECTION OBSERVER)
   -------------------------------------------------------------------------- */
function initActiveSectionObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   3. AVATAR / PROFILE PHOTO MODAL
   -------------------------------------------------------------------------- */
function initAvatarModal() {
  const profileAvatar = document.getElementById('profileAvatar');
  if (profileAvatar) {
    profileAvatar.addEventListener('click', () => {
      openModal('photoModal');
    });
  }
}

/* --------------------------------------------------------------------------
   4. CERTIFICATE MODAL (VIEW & DOWNLOAD)
   -------------------------------------------------------------------------- */
function openCertModal(certKey) {
  const certData = CERTIFICATES_DATA[certKey];
  if (!certData) return;

  const titleEl = document.getElementById('modalCertTitle');
  const subtitleEl = document.getElementById('modalCertSubtitle');
  const imgEl = document.getElementById('modalCertImg');
  const downloadBtn = document.getElementById('modalDownloadBtn');
  const newTabBtn = document.getElementById('modalNewTabBtn');

  if (titleEl) titleEl.textContent = certData.title;
  if (subtitleEl) subtitleEl.textContent = certData.subtitle;
  if (imgEl) {
    imgEl.src = certData.imageSrc;
    imgEl.alt = certData.title;
  }
  if (downloadBtn) {
    downloadBtn.href = certData.downloadPath;
    downloadBtn.download = certData.downloadFileName;
  }
  if (newTabBtn) {
    newTabBtn.href = certData.imageSrc;
  }

  openModal('certModal');
}

/* --------------------------------------------------------------------------
   5. GENERAL MODAL HELPERS
   -------------------------------------------------------------------------- */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleBackdropClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

function initKeyboardEscape() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal-backdrop.open');
      openModals.forEach(m => closeModal(m.id));
    }
  });
}

/* --------------------------------------------------------------------------
   6. CONTACT FORM SIMULATION & FEEDBACK
   -------------------------------------------------------------------------- */
function handleFormSubmit(event) {
  event.preventDefault();
  const submitBtn = document.getElementById('submitBtn');
  const feedbackEl = document.getElementById('formFeedback');
  const originalHtml = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

  // Simulate network dispatch
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHtml;

    const userName = document.getElementById('userName').value;
    
    if (feedbackEl) {
      feedbackEl.className = 'form-feedback success';
      feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, <strong>${userName}</strong>! Your message has been sent. Manoj will reach out to you shortly.`;
      feedbackEl.classList.remove('hidden');
    }

    showToast(`Thank you, ${userName}! Message sent successfully.`);
    document.getElementById('contactForm').reset();

    setTimeout(() => {
      if (feedbackEl) feedbackEl.classList.add('hidden');
    }, 6000);
  }, 900);
}

/* --------------------------------------------------------------------------
   7. TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: #60a5fa;"></i> <span>${message}</span>`;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}
