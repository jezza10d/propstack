class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="bg-background dark:bg-background docked full-width top-0 sticky z-50 border-b border-outline-variant/15 h-20 transition-all duration-200 ease-in-out">
            <div class="flex justify-between items-center w-full px-5 md:px-gutter max-w-container-max mx-auto h-full">
                
                <!-- Brand & Mobile Toggle -->
                <div class="flex items-center gap-4">
                    <button id="menu-toggle" class="material-symbols-outlined text-primary cursor-pointer focus:outline-none md:hidden" aria-label="Toggle Navigation Menu">
                        menu
                    </button>
                    <span class="font-headline-md text-headline-md font-bold tracking-tighter text-on-background">PROPSTACK /_</span>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex gap-8 items-center">
                    <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/blueprints">Blueprints</a>
                    <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/lab">The Lab</a>
                    <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/scorecard">Software Scorecard</a>
                    <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/ethos">Ethos</a>
                </nav>

                <!-- Action Button -->
                <button class="font-label-mono text-label-mono uppercase bg-primary text-on-primary px-4 py-2 hover:bg-on-background transition-colors">
                    [SYSTEM_LOGIN]
                </button>
            </div>

            <!-- Mobile Dropdown Navigation Menu -->
            <div id="mobile-menu" class="hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur border-b border-outline-variant/15 flex flex-col gap-4 p-6 transition-all ease-in-out md:hidden z-40">
                <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors py-2" href="/blueprints">Blueprints</a>
                <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors py-2" href="/lab">The Lab</a>
                <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors py-2" href="/scorecard">Software Scorecard</a>
                <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors py-2" href="/ethos">Ethos</a>
            </div>
        </header>
        `;

        // Interactive Menu Logic
        const toggleBtn = this.querySelector('#menu-toggle');
        const mobileMenu = this.querySelector('#mobile-menu');

        if (toggleBtn && mobileMenu) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.toggle('hidden');
                
                // Toggle the hamburger icon between menu and close
                if (mobileMenu.classList.contains('hidden')) {
                    toggleBtn.textContent = 'menu';
                } else {
                    toggleBtn.textContent = 'close';
                }
            });

            // Close the menu automatically when clicking outside of it
            document.addEventListener('click', (e) => {
                if (!mobileMenu.classList.contains('hidden') && !this.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    toggleBtn.textContent = 'menu';
                }
            });
        }
    }
}

customElements.define('main-header', MainHeader);
