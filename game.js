class StoryGame {
    constructor() {
        this.storyText = document.getElementById('story-text');
        this.choicesContainer = document.getElementById('choices-container');
        this.currentScene = 'start';
        this.typingTimeout = null;
        this.isTyping = false;
        this.pendingText = '';
        this.pendingCallback = null;
    }

    init() {
        this.showScene(this.currentScene);
    }

    showScene(sceneId) {
        const scene = storyData[sceneId];
        if (!scene) return;

        // Cancel any ongoing typing effect
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
            this.typingTimeout = null;
        }
        this.isTyping = false;
        this.pendingText = '';
        this.pendingCallback = null;

        // Clear previous choices
        this.choicesContainer.innerHTML = '';

        // Handle single next scene (no choices or empty choices array)
        if (scene.next && (!scene.choices || scene.choices.length === 0)) {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = 'Continuer...';
            button.addEventListener('click', () => {
                this.cancelTyping();
                this.currentScene = scene.next;
                this.showScene(scene.next);
            });
            this.choicesContainer.appendChild(button);
        }

        // Add choices if they exist and are not empty
        if (scene.choices && scene.choices.length > 0) {
            scene.choices.forEach(choice => {
                const button = document.createElement('button');
                button.className = 'choice-btn';
                button.textContent = choice.text;
                button.addEventListener('click', () => {
                    this.cancelTyping();
                    this.currentScene = choice.next;
                    this.showScene(choice.next);
                });
                this.choicesContainer.appendChild(button);
            });
        }

        // Start typing effect (after buttons are already present)
        this.typeText(scene.text);
    }

    typeText(text, callback) {
        this.storyText.innerHTML = '';
        let i = 0;
        const speed = 30; // typing speed in milliseconds
        this.isTyping = true;
        this.pendingText = text;
        this.pendingCallback = callback;

        const typeWriter = () => {
            if (!this.isTyping) return;
            if (i < text.length) {
                this.storyText.innerHTML += text.charAt(i);
                i++;
                this.typingTimeout = setTimeout(typeWriter, speed);
            } else {
                this.isTyping = false;
                if (callback) callback();
            }
        };

        typeWriter();
    }

    cancelTyping() {
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
            this.typingTimeout = null;
        }
        if (this.isTyping) {
            this.isTyping = false;
            this.storyText.innerHTML = this.pendingText;
            if (this.pendingCallback) {
                this.pendingCallback();
            }
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new StoryGame();
    game.init();
}); 