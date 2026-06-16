class MainHeader extends HTMLElement {
    connectedCallback() {
        // Determine the current path to set active states
        const currentPath = window.location.pathname;

        // Helper to check if link is active
        const isActive = (path) => currentPath === path ? 'text-on-surface' : 'text-on-surface-variant';

        this.innerHTML = `
        <header class="bg-background dark:bg-background top-0 sticky z-50 border-b border-outline-variant/15 h-20 transition-all duration-200 ease-in-out">
            <div class="flex justify-between items-center w-full px-5 md:px-gutter max-w-container-max mx-auto h-full">
                
                <!-- Brand Title with Blinking Console Cursor -->
                <div class="flex items-center gap-4">
                    <a href="/" class="font-headline-md text-headline-md font-bold tracking-tighter text-on-background hover:text-primary transition-colors select-none">
                        THEPROPSTACK /<span class="animate-[pulse_1s_infinite] inline-block text-primary">_</span>
                    </a>
                </div>

                <!-- Desktop Navigation Menu (Streamlined Core Pillars) -->
                <nav class="hidden md:flex gap-8 items-center">
                    <a class="font-label-mono text-label-mono uppercase ${isActive('/blueprints')} hover:text-on-surface transition-colors" href="/blueprints">Blueprints</a>
                    <a class="font-label-mono text-label-mono uppercase ${isActive('/the-lab')} hover:text-on-surface transition-colors" href="/the-lab">The Lab</a>
                </nav>

                <!-- Right Side Actions -->
                <div class="flex items-center gap-4">
                    <button class="hidden md:block font-label-mono text-label-mono uppercase bg-primary text-on-primary px-4 py-2 hover:bg-on-background transition-colors">
                        [SYSTEM_LOGIN]
                    </button>
                    <button id="menu-toggle" class="material-symbols-outlined text-primary cursor-pointer focus:outline-none md:hidden text-2xl p-2 -mr-2 select-none" aria-label="Toggle Navigation Menu">
                        menu
                    </button>
                </div>
            </div>

            <!-- MOBILE OVERLAY PANEL -->
            <div id="mobile-overlay" class="hidden fixed inset-0 z-50 md:hidden">
                <div id="menu-backdrop" class="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity opacity-0 duration-300"></div>
                <div id="menu-drawer" class="absolute top-0 right-0 h-full w-72 bg-surface-container border-l border-outline-variant/20 p-6 flex flex-col justify-between transform translate-x-full transition-transform duration-300 ease-out shadow-xl">
                    <div class="flex flex-col gap-8">
                        <div class="flex justify-between items-center border-b border-outline-variant/15 pb-4">
                            <span class="font-label-mono text-label-mono uppercase text-tertiary tracking-wider">[NAV_SYSTEM]</span>
                            <button id="menu-close" class="material-symbols-outlined text-outline hover:text-on-surface cursor-pointer select-none">close</button>
                        </div>
                        
                        <!-- Mobile Link Stack (Mirrored Layout) -->
                        <nav class="flex flex-col gap-4">
                            <a class="group flex items-center justify-between font-label-mono text-base uppercase ${isActive('/blueprints')} hover:text-on-surface py-2 border-b border-outline-variant/5 transition-colors" href="/blueprints">
                                Blueprints <span class="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                            </a>
                            <a class="group flex items-center justify-between font-label-mono text-base uppercase ${isActive('/the-lab')} hover:text-on-surface py-2 border-b border-outline-variant/5 transition-colors" href="/the-lab">
                                The Lab <span class="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                            </a>
                        </nav>
                    </div>

                    <!-- Drawer Bottom Actions -->
                    <div class="flex flex-col gap-4 pt-6 border-t border-outline-variant/15">
                        <button class="w-full font-label-mono text-label-mono uppercase bg-primary text-on-primary py-3 hover:bg-on-background transition-colors text-center">
                            [SYSTEM_LOGIN]
                        </button>
                    </div>
                </div>
            </div>
        </header>
        `;

        // Interactive Drawer State Hooks
        const toggleBtn = this.querySelector('#menu-toggle');
        const closeBtn = this.querySelector('#menu-close');
        const overlay = this.querySelector('#mobile-overlay');
        const backdrop = this.querySelector('#menu-backdrop');
        const drawer = this.querySelector('#menu-drawer');

        function openMenu() {
            overlay.classList.remove('hidden');
            setTimeout(() => {
                backdrop.classList.add('opacity-100');
                drawer.classList.remove('translate-x-full');
            }, 10);
            document.body.classList.add('overflow-hidden');
        }

        function closeMenu() {
            backdrop.classList.remove('opacity-100');
            drawer.classList.add('translate-x-full');
            setTimeout(() => { overlay.classList.add('hidden'); }, 300);
            document.body.classList.remove('overflow-hidden');
        }

        if (toggleBtn && closeBtn && backdrop && drawer) {
            toggleBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
            backdrop.addEventListener('click', closeMenu);
        }
    }
}
customElements.define('main-header', MainHeader);
