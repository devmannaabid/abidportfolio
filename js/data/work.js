document.addEventListener('alpine:init', () => {
  Alpine.data('workList', () => ({
    experiences: [],

    async init() {
      try {
        const response = await fetch('data/work.json');
        if (!response.ok) throw new Error("Failed to load work experience data");
        this.experiences = await response.json();
      } catch (error) {
        console.error('Error loading work.json:', error);
      }
    }
  }));
});