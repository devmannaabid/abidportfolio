document.addEventListener('alpine:init', () => {
  Alpine.data('educationList', () => ({
    education: [],

    async init() {
      try {
        const response = await fetch('data/education.json');
        if (!response.ok) throw new Error("Failed to load education data");
        this.education = await response.json();
      } catch (error) {
        console.error('Error loading education.json:', error);
      }
    }
  }));
});