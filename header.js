class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="bg-background dark:bg-background top-0 sticky z-50 border-b border-outline-variant/15 h-20 transition-all duration-200 ease-in-out">
            <div class="flex justify-between items-center w-full px-5 md:px-gutter max-w-container-max mx-auto h-full">
                
                <!-- Brand Title -->
                <div class="flex items-center gap-4">
                    <span class="font-headline-md text-headline-md font-bold tracking-tighter text-on-background">THEPROPSTACK /_</span>
                </div>

                <!-- Desktop Navigation Menu (hidden on mobile) -->
                <nav class="hidden md:flex gap-8 items-center">
                    <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/blueprints">Blueprints</a>
                    <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/lab">The Lab</a>
                    <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/scorecard">Software Scorecard</a>
                    <a class="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/ethos">Ethos</a>
                </nav>

                <!-- Right Side Actions: Desktop Login & Mobile Hamburger -->
                <div class="flex items-center gap-4">
                    <button class="hidden md:block font-label-mono text-label-mono uppercase bg-primary text-on-primary px-4 py-2 hover:bg-on-background transition-colors">
                        [SYSTEM_LOGIN]
                    </button>
                    
                    <!-- Hamburger Toggle Button -->
                    <button id="menu-toggle" class="material-symbols-outlined text-primary cursor-pointer focus:outline-none md:hidden text-2xl p-2 -mr-2 select-none" aria-label="Toggle Navigation Menu">
                        menu
                    </button>
                </div>
            </div>

            <!-- MOBILE OVERLAY PANEL (Full-screen overlay + Right-hand slideout panel) -->
            <div id="mobile-overlay" class="hidden fixed inset-0 z-50 md:hidden">
                <!-- Dimmed backdrop backdrop click targets -->
                <div id="menu-backdrop" class="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity opacity-0 duration-300"></div>
                
                <!-- Dynamic Right Drawer Panel -->
                <div id="menu-drawer" class="absolute top-0 right-0 h-full w-72 bg-surface-container border-l border-outline-variant/20 p-6 flex flex-col justify-between transform translate-x-full transition-transform duration-300 ease-out shadow-xl">
                    <div class="flex flex-col gap-8">
                        <!-- Top Bar inside Drawer -->
                        <div class="flex justify-between items-center border-b border-outline-variant/15 pb-4">
                            <span class="font-label-mono text-label-mono uppercase text-tertiary tracking-wider">[NAV_SYSTEM]</span>
                            <button id="menu-close" class="material-symbols-outlined text-outline hover:text-on-surface cursor-pointer select-none">
                                close
                            </button>
                        </div>

                        <!-- Mobile Link Stack -->
                        <nav class="flex flex-col gap-4">
                            <a class="group flex items-center justify-between font-label-mono text-base uppercase text-on-surface-variant hover:text-on-surface py-2 border-b border-outline-variant/5 transition-colors" href="/blueprints">
                                Blueprints <span class="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                            </a>
                            <a class="group flex items-center justify-between font-label-mono text-base uppercase text-on-surface-variant hover:text-on-surface py-2 border-b border-outline-variant/5 transition-colors" href="/lab">
                                The Lab <span class="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                            </a>
                            <a class="group flex items-center justify-between font-label-mono text-base uppercase text-on-surface-variant hover:text-on-surface py-2 border-b border-outline-variant/5 transition-colors" href="/scorecard">
                                Software Scorecard <span class="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                            </a>
                            <a class="group flex items-center justify-between font-label-mono text-base uppercase text-on-surface-variant hover:text-on-surface py-2 border-b border-outline-variant/5 transition-colors" href="/ethos">
                                Ethos <span class="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
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
            // Allow DOM layer processing before activating structural transition classes
            setTimeout(() => {
                backdrop.classList.add('opacity-100');
                drawer.classList.remove('translate-x-full');
            }, 10);
            document.body.classList.add('overflow-hidden'); // Block baseline background page scroll
        }

        function closeMenu() {
            backdrop.classList.remove('opacity-100');
            drawer.classList.add('translate-x-full');
            
            // Clean dynamic visibility states upon completion of CSS timing transitions
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
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
