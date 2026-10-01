document.addEventListener('alpine:init', () => {
  Alpine.data('userProfile', () => ({
    user: {
      name: '',
      designation: '',
      image: '',
      experience: '',
      details: '',
      address: null,
      email: null,
      website: null
    },

    async init() {
      try {
        const response = await fetch('data/user.json');
        if (!response.ok) throw new Error("File not found");
        this.user = await response.json();
      } catch (error) {
        console.error('Error loading user.json:', error);
      }
    },

    handleImageError(event) {
      const fallbackName = encodeURIComponent(this.user.name || 'User');
      event.target.src = `https://ui-avatars.com/api/?name=${fallbackName}&background=0d6efd&color=fff&size=512`;
    }
  }));
});