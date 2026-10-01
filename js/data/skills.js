document.addEventListener('alpine:init', () => {
  Alpine.data('skillsList', () => ({
    skills: [],

    async init() {
      try {
        const response = await fetch('data/skills.json');
        if (!response.ok) throw new Error("Failed to load skills data");
        this.skills = await response.json();
      } catch (error) {
        console.error('Error loading skills.json:', error);
      }
    }
  }));
});