// FoxLearn Main Application
// A calm little school for learning to code and speak

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initProgress();
  initUI();
  initNavigation();
  initCourseBrowser();
  initSearch();
  renderAbout();
});

// UI Initialization
function initUI() {
  renderHeader();
  renderTrails();
  renderMascot();
  renderStats();
  renderBase44Links();
  
  setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
  // Export progress
  document.getElementById('export-progress')?.addEventListener('click', () => {
    exportProgress();
    showNotification('Progress exported!', 'success');
  });
  
  // Import progress
  document.getElementById('import-progress')?.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.foxlearn,application/json';
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        importProgress(file)
          .then(() => {
            showNotification('Progress imported!', 'success');
            refreshUI();
          })
          .catch(err => {
            showNotification(err.message, 'error');
          });
      }
    });
    input.click();
  });
  
  // Clear progress
  document.getElementById('clear-progress')?.addEventListener('click', () => {
    if (clearProgress()) {
      showNotification('Progress cleared', 'success');
      refreshUI();
    }
  });
  
  // Close notifications when clicked
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('notification')) {
      e.target.classList.remove('show');
      setTimeout(() => e.target.remove(), 300);
    }
  });
}

// Refresh all UI elements
function refreshUI() {
  renderStats();
  renderTrails();
  renderCourseBrowser();
}

// Navigation
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item:not(.base44-link)');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const target = e.target.closest('.nav-item');
      const section = target.dataset.section;
      
      // Remove active class from all nav items
      document.querySelectorAll('.nav-item:not(.base44-link)').forEach(nav => nav.classList.remove('active'));
      target.classList.add('active');
      
      // Show the selected section
      showSection(section);
      
      // Close mobile menu if open
      closeMobileMenu();
    });
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && 
        mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
}

function showSection(section) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => s.classList.add('hidden'));
  
  // Show the selected section
  const targetSection = document.getElementById(`section-${section}`);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }
  
  // Scroll to top of content
  const content = document.querySelector('.content');
  if (content) {
    content.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Render Header
function renderHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  header.innerHTML = `
    <div class="header-content">
      <div class="logo">
        <span class="mascot-icon">🦊</span>
        <span class="logo-text">FoxLearn</span>
      </div>
      <nav class="desktop-nav">
        <a href="#" class="nav-item active" data-section="learn">
          <span class="icon">📚</span>
          <span class="label">Learn</span>
        </a>
        <a href="#" class="nav-item" data-section="courses">
          <span class="icon">📖</span>
          <span class="label">Courses</span>
        </a>
        <a href="#" class="nav-item" data-section="progress">
          <span class="icon">📊</span>
          <span class="label">Progress</span>
        </a>
        <a href="#" class="nav-item" data-section="about">
          <span class="icon">ℹ️</span>
          <span class="label">About</span>
        </a>
        <a href="https://foxlearn.base44.app" class="nav-item base44-link" target="_blank" rel="noopener">
          <span class="icon">🔗</span>
          <span class="label">Switch to Base44</span>
        </a>
      </nav>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
        <span class="hamburger">☰</span>
      </button>
    </div>
    
    <div class="mobile-nav" id="mobile-menu">
      <a href="#" class="nav-item mobile" data-section="learn">
        <span class="icon">📚</span>
        <span class="label">Learn</span>
      </a>
      <a href="#" class="nav-item mobile" data-section="courses">
        <span class="icon">📖</span>
        <span class="label">Courses</span>
      </a>
      <a href="#" class="nav-item mobile" data-section="progress">
        <span class="icon">📊</span>
        <span class="label">Progress</span>
      </a>
      <a href="#" class="nav-item mobile" data-section="about">
        <span class="icon">ℹ️</span>
        <span class="label">About</span>
      </a>
      <a href="https://foxlearn.base44.app" class="nav-item mobile base44-link" target="_blank" rel="noopener">
        <span class="icon">🔗</span>
        <span class="label">Switch to Base44</span>
      </a>
    </div>
  `;
}

// Render Trails Section
function renderTrails() {
  const container = document.getElementById('section-learn');
  if (!container) return;
  
  let html = `
    <div class="section-header">
      <h1>Pick whatever you are curious about.</h1>
      <p class="subtitle">${getTotalCourses()} courses, ${getTotalLessons()} lessons, and one fox.</p>
    </div>
    
    <div class="trails-grid">
  `;
  
  for (const [trailId, trail] of Object.entries(COURSES.trails)) {
    const courses = getCoursesByTrail(trailId);
    const progress = getTrailProgress(trailId);
    
    html += `
      <div class="trail-card" data-trail="${trailId}">
        <div class="trail-header">
          <span class="trail-icon" style="color: ${trail.color}">${trail.icon}</span>
          <h2>${trail.name}</h2>
        </div>
        <p class="trail-description">${trail.description}</p>
        <div class="trail-stats">
          <span class="course-count">${courses.length} courses</span>
          <span class="progress-indicator">
            <span class="progress-dots">${generateProgressDots(courses.length * 2, progress.completed)}</span>
          </span>
        </div>
        <button class="btn btn-outline" onclick="showTrailCourses('${trailId}')">
          Explore ${trail.name}
        </button>
      </div>
    `;
  }
  
  html += `
    </div>
    
    <div class="mascot-section">
      <div class="mascot-character">🦊</div>
      <p class="mascot-text">Hi, I'm Rogue. I'll keep you company while you learn.</p>
    </div>
  `;
  
  container.innerHTML = html;
}

function generateProgressDots(totalLessons, completedLessons) {
  const filled = Math.min(Math.floor((completedLessons / totalLessons) * 5), 5);
  const empty = 5 - filled;
  return '●'.repeat(filled) + '○'.repeat(empty);
}

// Render Course Browser
function initCourseBrowser() {
  renderCourseBrowser();
}

function renderCourseBrowser() {
  const container = document.getElementById('section-courses');
  if (!container) return;
  
  let html = `
    <div class="section-header">
      <h1>All Courses</h1>
      <p class="subtitle">${getTotalCourses()} courses across ${Object.keys(COURSES.trails).length} trails</p>
    </div>
    
    <div class="search-bar">
      <input type="text" id="course-search" placeholder="Search courses..." aria-label="Search courses">
      <button onclick="clearSearch()" class="clear-search" id="clear-search">×</button>
    </div>
    
    <div class="course-filters">
      <button class="filter-btn active" data-filter="all" onclick="filterCourses('all')">All Trails</button>
  `;
  
  for (const [trailId, trail] of Object.entries(COURSES.trails)) {
    html += `
      <button class="filter-btn" data-filter="${trailId}" onclick="filterCourses('${trailId}')">
        ${trail.icon} ${trail.name}
      </button>
    `;
  }
  
  html += `
    </div>
    
    <div class="courses-grid" id="courses-grid">
  `;
  
  // Render all courses
  for (const course of COURSES.list) {
    const progress = getCourseProgress(course.id);
    const trail = getTrailById(course.trail);
    
    html += `
      <div class="course-card" data-trail="${course.trail}" data-course="${course.id}">
        <div class="course-header">
          <span class="course-trail-icon" style="color: ${trail.color}">${trail.icon}</span>
          <div class="course-info">
            <h3>${course.name}</h3>
            <p class="course-tagline">${course.tagline}</p>
          </div>
        </div>
        <p class="course-description">${course.description}</p>
        <div class="course-meta">
          <span class="difficulty ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
          <span class="lesson-count">${course.lessons.length} lessons</span>
        </div>
        <div class="course-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress.percentage}%"></div>
          </div>
          <span class="progress-text">${progress.completed}/${course.lessons.length}</span>
        </div>
        <button class="btn btn-primary" onclick="startCourse('${course.id}')">
          ${progress.completed === course.lessons.length ? 'Replay' : 'Start'}
        </button>
      </div>
    `;
  }
  
  html += `
    </div>
  `;
  
  container.innerHTML = html;
}

function filterCourses(trailId) {
  const grid = document.getElementById('courses-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Update active filter button
  filterBtns.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-filter="${trailId}"]`).classList.add('active');
  
  // Filter courses
  const courses = grid.querySelectorAll('.course-card');
  courses.forEach(course => {
    if (trailId === 'all' || course.dataset.trail === trailId) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('course-search');
  const clearBtn = document.getElementById('clear-search');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      performSearch(query);
      
      if (query.length > 0 && clearBtn) {
        clearBtn.style.display = 'block';
      } else if (clearBtn) {
        clearBtn.style.display = 'none';
      }
    });
  }
}

function performSearch(query) {
  const courses = document.querySelectorAll('.course-card');
  
  courses.forEach(course => {
    const courseName = course.querySelector('h3').textContent.toLowerCase();
    const courseDesc = course.querySelector('.course-description').textContent.toLowerCase();
    const courseTags = course.querySelector('.course-tagline').textContent.toLowerCase();
    
    if (courseName.includes(query) || courseDesc.includes(query) || courseTags.includes(query)) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
}

function clearSearch() {
  const searchInput = document.getElementById('course-search');
  const clearBtn = document.getElementById('clear-search');
  
  if (searchInput) {
    searchInput.value = '';
    performSearch('');
  }
  
  if (clearBtn) {
    clearBtn.style.display = 'none';
  }
}

// Show courses for a specific trail
function showTrailCourses(trailId) {
  showSection('courses');
  filterCourses(trailId);
  
  // Scroll to courses section
  const coursesSection = document.getElementById('section-courses');
  if (coursesSection) {
    coursesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Start a course (navigate to first incomplete lesson or first lesson)
function startCourse(courseId) {
  const course = getCourseById(courseId);
  if (!course) return;
  
  // Find first incomplete lesson
  let firstLesson = course.lessons[0];
  for (const lesson of course.lessons) {
    if (!isLessonCompleted(lesson.id)) {
      firstLesson = lesson;
      break;
    }
  }
  
  startLesson(courseId, firstLesson.id);
}

// Start a specific lesson
function startLesson(courseId, lessonId) {
  const course = getCourseById(courseId);
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  
  // Store current lesson in session
  sessionStorage.setItem('current-course', courseId);
  sessionStorage.setItem('current-lesson', lessonId);
  
  // Navigate to lesson view
  showSection('lesson');
  renderLesson(courseId, lessonId);
}

// Render Lesson View
function renderLesson(courseId, lessonId) {
  const container = document.getElementById('section-lesson');
  if (!container) return;
  
  const course = getCourseById(courseId);
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  
  const trail = getTrailById(course.trail);
  const progress = getCourseProgress(courseId);
  const isCompleted = isLessonCompleted(lessonId);
  
  // Generate lesson content
  const lessonContent = generateLessonContent(courseId, lessonId);
  
  container.innerHTML = `
    <div class="lesson-header">
      <button class="back-btn" onclick="showSection('courses')">← Back to Courses</button>
      <div class="lesson-info">
        <span class="trail-badge" style="background-color: ${trail.color}">${trail.icon} ${trail.name}</span>
        <h1>${course.name}</h1>
        <h2>${lesson.name}</h2>
        <p class="lesson-description">${lesson.content}</p>
      </div>
      <div class="lesson-meta">
        <span class="difficulty ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
        <span class="lesson-number">Lesson ${course.lessons.findIndex(l => l.id === lessonId) + 1} of ${course.lessons.length}</span>
      </div>
    </div>
    
    <div class="lesson-content">
      ${lessonContent}
    </div>
    
    <div class="lesson-footer">
      <div class="course-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress.percentage}%"></div>
        </div>
        <span class="progress-text">${progress.completed}/${course.lessons.length} lessons completed</span>
      </div>
      <button class="btn btn-green" onclick="completeCurrentLesson()" ${isCompleted ? 'disabled' : ''}>
        ${isCompleted ? '✓ Completed' : 'Mark as Complete'}
      </button>
    </div>
    
    <div class="lesson-navigation">
      <button class="nav-btn prev" onclick="navigateLesson('${courseId}', '${lessonId}', 'prev')" 
              ${course.lessons[0].id === lessonId ? 'disabled' : ''}>
        ← Previous
      </button>
      <button class="nav-btn next" onclick="navigateLesson('${courseId}', '${lessonId}', 'next')"
              ${course.lessons[course.lessons.length - 1].id === lessonId ? 'disabled' : ''}>
        Next →
      </button>
    </div>
  `;
}

// Generate lesson content based on course and lesson
function generateLessonContent(courseId, lessonId) {
  const course = getCourseById(courseId);
  const lesson = course.lessons.find(l => l.id === lessonId);
  
  // Different content types for different course categories
  if (course.trail === 'coding') {
    return window.generateCodingLesson(courseId, lessonId);
  } else if (course.trail === 'living' || course.trail === 'everyday' || course.trail === 'ancient') {
    return window.generateLanguageLesson(courseId, lessonId);
  } else if (course.trail === 'invented') {
    return window.generateInventedLesson(courseId, lessonId);
  }
  
  return `<div class="lesson-block"><p>Lesson content coming soon!</p></div>`;
}

// Navigation between lessons
function navigateLesson(courseId, currentLessonId, direction) {
  const course = getCourseById(courseId);
  const currentIndex = course.lessons.findIndex(l => l.id === currentLessonId);
  
  let nextIndex;
  if (direction === 'prev') {
    nextIndex = currentIndex - 1;
  } else {
    nextIndex = currentIndex + 1;
  }
  
  if (nextIndex >= 0 && nextIndex < course.lessons.length) {
    startLesson(courseId, course.lessons[nextIndex].id);
  }
}

// Mark current lesson as complete
function completeCurrentLesson() {
  const courseId = sessionStorage.getItem('current-course');
  const lessonId = sessionStorage.getItem('current-lesson');
  
  if (courseId && lessonId) {
    completeLesson(lessonId);
    showNotification('Lesson marked as complete!', 'success');
    renderLesson(courseId, lessonId);
    renderStats();
    renderTrails();
    renderCourseBrowser();
  }
}

// Show notification
function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  const container = document.querySelector('.notifications');
  if (container) {
    container.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Render Stats Section
function renderStats() {
  const container = document.getElementById('section-progress');
  if (!container) return;
  
  const totalLessons = getTotalLessonsCount();
  const completed = getCompletedCount();
  const percentage = getProgressPercentage();
  
  container.innerHTML = `
    <div class="section-header">
      <h1>Your Progress</h1>
      <p class="subtitle">Track your learning journey</p>
    </div>
    
    <div class="stats-overview">
      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-value">${getTotalCourses()}</div>
        <div class="stat-label">Courses Available</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📖</div>
        <div class="stat-value">${totalLessons}</div>
        <div class="stat-label">Total Lessons</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-value">${completed}</div>
        <div class="stat-label">Completed</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-value">${percentage}%</div>
        <div class="stat-label">Overall Progress</div>
      </div>
    </div>
    
    <div class="progress-chart">
      <h2>Overall Progress</h2>
      <div class="progress-bar large">
        <div class="progress-fill" style="width: ${percentage}%"></div>
      </div>
      <span class="progress-text">${completed} of ${totalLessons} lessons completed</span>
    </div>
    
    <div class="trail-progress">
      <h2>Progress by Trail</h2>
      <div class="trail-progress-grid">
        ${Object.entries(COURSES.trails).map(([trailId, trail]) => {
          const progress = getTrailProgress(trailId);
          const courses = getCoursesByTrail(trailId);
          return `
            <div class="trail-progress-card">
              <div class="trail-progress-header">
                <span class="trail-icon" style="color: ${trail.color}">${trail.icon}</span>
                <span class="trail-name">${trail.name}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress.percentage}%; background-color: ${trail.color}"></div>
              </div>
              <div class="trail-progress-stats">
                <span>${progress.completed}/${progress.total} lessons</span>
                <span>${courses.length} courses</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    
    <div class="progress-actions">
      <h2>Manage Progress</h2>
      <div class="action-buttons">
        <button class="btn btn-outline" id="export-progress">
          📤 Export Progress (.foxlearn)
        </button>
        <button class="btn btn-outline" id="import-progress">
          📥 Import Progress
        </button>
        <button class="btn btn-danger" id="clear-progress">
          🗑️ Clear All Progress
        </button>
      </div>
      <p class="action-note">Your progress is saved locally in your browser. Export it to keep a backup or transfer to another device.</p>
    </div>
  `;
}

// Render Base44 Links
function renderBase44Links() {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-left">
        <span class="mascot-icon">🦊</span>
        <span class="footer-text">Two implementations. One FoxLearn.</span>
      </div>
      <div class="footer-right">
        <a href="https://foxlearn.base44.app" class="base44-link" target="_blank" rel="noopener">
          🔗 Switch to Base44
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 FoxLearn. All rights reserved. MIT License.</p>
      <p>Free to use. Free of ads. Free of telemetry. Free of guilt.</p>
    </div>
  `;
}

// Render About Section
function renderAbout() {
  const container = document.getElementById('section-about');
  if (!container) return;
  
  container.innerHTML = `
    <div class="section-header">
      <h1>About FoxLearn</h1>
      <p class="subtitle">A calm little school for everyone</p>
    </div>
    
    <div class="about-content">
      <div class="about-section">
        <h2>📚 What is FoxLearn?</h2>
        <p>FoxLearn is a free, open-source learning platform for coding and languages. We believe learning should be accessible, enjoyable, and free from pressure.</p>
        <p>Here you'll find:</p>
        <ul>
          <li>21 courses across 5 learning trails</li>
          <li>43 interactive lessons</li>
          <li>One friendly fox mascot named Rogue</li>
          <li>No ads, no telemetry, no guilt</li>
        </ul>
      </div>
      
      <div class="about-section">
        <h2>🦊 The FoxLearn Philosophy</h2>
        <div class="philosophy-grid">
          <div class="philosophy-card">
            <span class="icon">💖</span>
            <h3>No Hearts, No Lives</h3>
            <p>Get it wrong as often as you need. Every lesson can be replayed from the first question, and nothing is taken away for failing.</p>
          </div>
          <div class="philosophy-card">
            <span class="icon">📁</span>
            <h3>Your Progress is a File</h3>
            <p>Export everything as one .foxlearn file whenever you like. Move it to another device, keep it in a drawer, import it after a year away.</p>
          </div>
          <div class="philosophy-card">
            <span class="icon">🚫</span>
            <h3>Nothing Phones Home</h3>
            <p>No telemetry, no analytics, no advertising pixel. The only thing FoxLearn stores is the list of lessons you finished.</p>
          </div>
        </div>
      </div>
      
      <div class="about-section">
        <h2>🎯 Learning Trails</h2>
        <p>FoxLearn is organized into five trails, each focusing on a different area of learning:</p>
        <div class="trails-list">
          ${Object.entries(COURSES.trails).map(([trailId, trail]) => {
            const courses = getCoursesByTrail(trailId);
            return `
              <div class="trail-item">
                <span class="trail-icon" style="color: ${trail.color}">${trail.icon}</span>
                <strong>${trail.name}</strong>
                <span>${courses.length} courses</span>
                <p>${trail.description}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      
      <div class="about-section">
        <h2>🔗 Two Implementations</h2>
        <p>FoxLearn exists as two independent implementations:</p>
        <ul>
          <li><strong>GitHub Edition:</strong> The open-source version you're using now. Free to host anywhere, completely self-contained.</li>
          <li><strong>Base44 Edition:</strong> A hosted version with additional features. <a href="https://foxlearn.base44.app" target="_blank" rel="noopener">Visit Base44 →</a></li>
        </ul>
        <p>Both implementations share the same philosophy and content. Choose whichever works best for you!</p>
      </div>
      
      <div class="about-section">
        <h2>📜 License</h2>
        <p>FoxLearn is open-source software licensed under the MIT License. You are free to:</p>
        <ul>
          <li>Use it for any purpose</li>
          <li>Modify the source code</li>
          <li>Distribute your modifications</li>
          <li>Use it in commercial projects</li>
        </ul>
        <p>See the <a href="LICENSE" target="_blank">LICENSE file</a> for details.</p>
      </div>
    </div>
  `;
}

// Make functions available globally
window.getCourseById = getCourseById;
window.getLessonById = getLessonById;
window.getCoursesByTrail = getCoursesByTrail;
window.getTrailById = getTrailById;
window.getTotalCourses = getTotalCourses;
window.getTotalLessons = getTotalLessons;
window.showTrailCourses = showTrailCourses;
window.startCourse = startCourse;
window.startLesson = startLesson;
window.completeCurrentLesson = completeCurrentLesson;
window.navigateLesson = navigateLesson;
window.copyCode = copyCode;
window.clearSearch = clearSearch;
window.filterCourses = filterCourses;
window.showNotification = showNotification;

// Initialize lesson section
const lessonSection = document.getElementById('section-lesson');
if (lessonSection) {
  lessonSection.innerHTML = `
    <div class="section-header">
      <h1>Lesson</h1>
      <p class="subtitle">Select a course and lesson to begin</p>
    </div>
  `;
}

// Show initial section
document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
const initialSection = document.getElementById('section-learn');
if (initialSection) {
  initialSection.classList.remove('hidden');
}

// Add notifications container
const body = document.querySelector('body');
const notifications = document.createElement('div');
notifications.className = 'notifications';
body.appendChild(notifications);

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Global error handler
window.addEventListener('error', (e) => {
  console.error('FoxLearn error:', e.error);
  showNotification('An error occurred. Please refresh the page.', 'error');
});

// Make app available globally
window.FoxLearn = {
  version: '1.0.0',
  courses: COURSES
};

// End of app.js
