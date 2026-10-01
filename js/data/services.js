document.addEventListener('alpine:init', () => {
  Alpine.data('servicesList', () => ({
    services: [],

    async init() {
      try {
        const response = await fetch('data/services.json');
        if (!response.ok) throw new Error("Failed to load services data");
        this.services = await response.json();
      } catch (error) {
        console.error('Error loading services.json:', error);
      }
    }
  }));
});