// FoxLearn Progress Management System
// Local-first storage with .foxlearn file export/import

const PROGRESS_STORAGE_KEY = 'foxlearn-progress';
const PROGRESS_VERSION = 1;

// Initialize progress system
function initProgress() {
  const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
  if (!saved) {
    saveProgress({ version: PROGRESS_VERSION, completed: [] });
    return { version: PROGRESS_VERSION, completed: [] };
  }
  
  try {
    const progress = JSON.parse(saved);
    // Migrate if needed
    if (!progress.version) {
      progress.version = PROGRESS_VERSION;
      saveProgress(progress);
    }
    return progress;
  } catch (e) {
    console.error('Failed to parse progress:', e);
    return { version: PROGRESS_VERSION, completed: [] };
  }
}

// Get current progress
function getProgress() {
  const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
  if (!saved) {
    return { version: PROGRESS_VERSION, completed: [] };
  }
  
  try {
    return JSON.parse(saved);
  } catch (e) {
    return { version: PROGRESS_VERSION, completed: [] };
  }
}

// Save progress to localStorage
function saveProgress(progress) {
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
}

// Mark a lesson as completed
function completeLesson(lessonId) {
  const progress = getProgress();
  if (!progress.completed.includes(lessonId)) {
    progress.completed.push(lessonId);
    saveProgress(progress);
    return true;
  }
  return false;
}

// Mark a lesson as incomplete (for replay)
function resetLesson(lessonId) {
  const progress = getProgress();
  const index = progress.completed.indexOf(lessonId);
  if (index > -1) {
    progress.completed.splice(index, 1);
    saveProgress(progress);
    return true;
  }
  return false;
}

// Check if a lesson is completed
function isLessonCompleted(lessonId) {
  const progress = getProgress();
  return progress.completed.includes(lessonId);
}

// Check if a course is completed (all lessons done)
function isCourseCompleted(courseId) {
  const course = getCourseById(courseId);
  if (!course) return false;
  
  const progress = getProgress();
  return course.lessons.every(lesson => progress.completed.includes(lesson.id));
}

// Get completed lessons count
function getCompletedCount() {
  return getProgress().completed.length;
}

// Get total lessons count
function getTotalLessonsCount() {
  return getTotalLessons();
}

// Calculate progress percentage
function getProgressPercentage() {
  const completed = getCompletedCount();
  const total = getTotalLessonsCount();
  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

// Export progress as .foxlearn file
function exportProgress() {
  const progress = getProgress();
  const data = JSON.stringify(progress, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `foxlearn-progress-${new Date().toISOString().split('T')[0]}.foxlearn`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  return true;
}

// Import progress from .foxlearn file
function importProgress(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const content = e.target.result;
        const progress = JSON.parse(content);
        
        // Validate the imported data
        if (!validateProgress(progress)) {
          reject(new Error('Invalid .foxlearn file format'));
          return;
        }
        
        // Merge with existing progress
        const current = getProgress();
        const merged = mergeProgress(current, progress);
        
        saveProgress(merged);
        resolve({ success: true, merged: merged });
      } catch (e) {
        reject(new Error('Failed to parse .foxlearn file'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsText(file);
  });
}

// Validate progress data structure
function validateProgress(progress) {
  // Must be an object
  if (typeof progress !== 'object' || progress === null) return false;
  
  // Must have version
  if (typeof progress.version !== 'number') return false;
  
  // Must have completed array
  if (!Array.isArray(progress.completed)) return false;
  
  // All completed items must be strings
  if (!progress.completed.every(item => typeof item === 'string')) return false;
  
  return true;
}

// Merge two progress objects
function mergeProgress(current, imported) {
  const mergedCompleted = [...new Set([...current.completed, ...imported.completed])];
  return {
    version: Math.max(current.version, imported.version),
    completed: mergedCompleted
  };
}

// Get progress for a specific trail
function getTrailProgress(trailId) {
  const trailCourses = getCoursesByTrail(trailId);
  const progress = getProgress();
  
  let total = 0;
  let completed = 0;
  
  for (const course of trailCourses) {
    total += course.lessons.length;
    for (const lesson of course.lessons) {
      if (progress.completed.includes(lesson.id)) {
        completed++;
      }
    }
  }
  
  return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
}

// Get progress for a specific course
function getCourseProgress(courseId) {
  const course = getCourseById(courseId);
  if (!course) return { total: 0, completed: 0, percentage: 0 };
  
  const progress = getProgress();
  const completed = course.lessons.filter(lesson => progress.completed.includes(lesson.id)).length;
  
  return {
    total: course.lessons.length,
    completed,
    percentage: course.lessons.length > 0 ? Math.round((completed / course.lessons.length) * 100) : 0
  };
}

// Clear all progress (with confirmation)
function clearProgress() {
  if (confirm('Are you sure you want to clear all your progress? This cannot be undone.')) {
    saveProgress({ version: PROGRESS_VERSION, completed: [] });
    return true;
  }
  return false;
}
