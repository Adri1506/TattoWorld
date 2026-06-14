/**
 * Contact Form Component
 * TattoWorld - Tatuajes a Domicilio
 * 
 * Formulario de contacto con validación y envío a Formspree.
 */

class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.submitText = document.getElementById('submit-text');
    this.submitLoading = document.getElementById('submit-loading');
    this.formSuccess = document.getElementById('form-success');
    this.formError = document.getElementById('form-error');
    this.captchaContainer = document.getElementById('captcha-container');
    this.captchaAnswer = null;
    this.captchaCorrect = false;
    
    // Rate limiting configuration
    this.RATE_LIMIT_KEY = 'tattoworld_form_rate_limit';
    this.MAX_SUBMISSIONS = 3;
    this.TIME_WINDOW_MS = 60 * 60 * 1000; // 1 hour
    
    this.init();
  }
  
  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    const inputs = this.form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
    
    // Initialize CAPTCHA
    this.generateCaptcha();
  }
  
  // Rate limiting methods
  getRateLimitData() {
    try {
      const data = localStorage.getItem(this.RATE_LIMIT_KEY);
      return data ? JSON.parse(data) : { submissions: [] };
    } catch (e) {
      return { submissions: [] };
    }
  }
  
  canSubmit() {
    const data = this.getRateLimitData();
    const now = Date.now();
    const recentSubmissions = data.submissions.filter(
      timestamp => now - timestamp < this.TIME_WINDOW_MS
    );
    return recentSubmissions.length < this.MAX_SUBMISSIONS;
  }
  
  recordSubmission() {
    const data = this.getRateLimitData();
    data.submissions.push(Date.now());
    // Keep only recent submissions
    const now = Date.now();
    data.submissions = data.submissions.filter(
      timestamp => now - timestamp < this.TIME_WINDOW_MS
    );
    localStorage.setItem(this.RATE_LIMIT_KEY, JSON.stringify(data));
  }
  
  getTimeUntilNextSubmission() {
    const data = this.getRateLimitData();
    const now = Date.now();
    const recentSubmissions = data.submissions.filter(
      timestamp => now - timestamp < this.TIME_WINDOW_MS
    );
    if (recentSubmissions.length >= this.MAX_SUBMISSIONS) {
      const oldest = Math.min(...recentSubmissions);
      const timeLeft = this.TIME_WINDOW_MS - (now - oldest);
      const minutes = Math.ceil(timeLeft / (60 * 1000));
      return minutes;
    }
    return 0;
  }
  
  // CAPTCHA methods
  generateCaptcha() {
    if (!this.captchaContainer) return;
    
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let answer;
    switch (operator) {
      case '+': answer = num1 + num2; break;
      case '-': answer = num1 - num2; break;
      case '×': answer = num1 * num2; break;
    }
    
    this.captchaAnswer = answer;
    this.captchaCorrect = false;
    
    this.captchaContainer.innerHTML = `
      <div class="flex items-center gap-3 p-3 bg-surface border border-border rounded-lg">
        <label class="text-sm font-medium">CAPTCHA:</label>
        <span class="text-accent font-bold">${num1} ${operator} ${num2} =</span>
        <input type="number" id="captcha-input" class="w-20 px-2 py-1 bg-background border border-border rounded focus:border-accent focus:outline-none text-center" placeholder="?" required>
        <button type="button" id="captcha-refresh" class="p-1 text-text-muted hover:text-accent transition-colors" aria-label="Generar nuevo CAPTCHA">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        </button>
      </div>
    `;
    
    const captchaInput = document.getElementById('captcha-input');
    const captchaRefresh = document.getElementById('captcha-refresh');
    
    captchaInput.addEventListener('input', () => {
      this.captchaCorrect = parseInt(captchaInput.value) === this.captchaAnswer;
    });
    
    captchaRefresh.addEventListener('click', () => {
      this.generateCaptcha();
    });
  }
  
  validateCaptcha() {
    if (!this.captchaContainer) return true; // Skip if no CAPTCHA container
    const captchaInput = document.getElementById('captcha-input');
    if (!captchaInput) return true;
    
    const userAnswer = parseInt(captchaInput.value);
    return userAnswer === this.captchaAnswer;
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    if (!this.validateForm()) return;
    
    // Validate CAPTCHA
    if (!this.validateCaptcha()) {
      this.showError('CAPTCHA incorrecto. Por favor, intenta de nuevo.');
      this.generateCaptcha();
      return;
    }
    
    // Check rate limiting
    if (!this.canSubmit()) {
      const minutes = this.getTimeUntilNextSubmission();
      this.showError(`Has alcanzado el límite de envíos. Por favor, espera ${minutes} minutos.`);
      return;
    }
    
    this.setLoading(true);
    this.clearMessages();
    
    try {
      const response = await fetch(this.form.action, {
        method: 'POST',
        body: new FormData(this.form),
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        this.recordSubmission();
        this.showSuccess();
        this.form.reset();
        this.generateCaptcha();
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      this.showError();
    } finally {
      this.setLoading(false);
    }
  }
  
  validateForm() {
    const requiredFields = this.form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';
    
    // Required validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      message = 'Este campo es requerido';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        message = 'Ingresa un email válido';
      }
    }
    
    // Phone validation (optional field)
    if (field.type === 'tel' && value) {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ''))) {
        isValid = false;
        message = 'Ingresa un teléfono válido';
      }
    }
    
    // Show/hide error
    const errorEl = field.parentElement.querySelector('.field-error');
    if (!isValid) {
      field.classList.add('border-error');
      field.classList.remove('border-border');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.remove('hidden');
      }
    } else {
      field.classList.remove('border-error');
      field.classList.add('border-border');
      if (errorEl) {
        errorEl.classList.add('hidden');
      }
    }
    
    return isValid;
  }
  
  clearError(field) {
    field.classList.remove('border-error');
    field.classList.add('border-border');
    const errorEl = field.parentElement.querySelector('.field-error');
    if (errorEl) errorEl.classList.add('hidden');
  }
  
  setLoading(loading) {
    if (this.submitText) this.submitText.classList.toggle('hidden', loading);
    if (this.submitLoading) this.submitLoading.classList.toggle('hidden', !loading);
    
    const submitBtn = this.form.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.disabled = loading;
  }
  
  showSuccess() {
    this.clearMessages();
    this.formSuccess?.classList.remove('hidden');
  }
  
  showError(message = null) {
    this.clearMessages();
    if (message && this.formError) {
      const span = this.formError.querySelector('span');
      if (span) span.textContent = message;
    }
    this.formError?.classList.remove('hidden');
  }
  
  clearMessages() {
    this.formSuccess?.classList.add('hidden');
    this.formError?.classList.add('hidden');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.contactForm = new ContactForm();
});
