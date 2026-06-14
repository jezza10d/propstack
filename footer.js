class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-background dark:bg-background border-t border-outline-variant/15 py-section-gap">
                <div class="max-w-container-max mx-auto px-5 md:px-gutter flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-gap">
                    <div class="flex flex-col gap-4">
                        <div class="font-headline-md text-headline-md text-on-surface opacity-50 font-bold tracking-tighter">PROPSTACK /_</div>
                        <p class="font-label-mono text-label-mono uppercase text-outline">© 2026 THEPROPSTACK /_ TECHNOLOGY JOURNAL. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div class="flex flex-wrap gap-8">
                        <a class="font-label-mono text-label-mono uppercase text-outline hover:text-on-surface transition-colors" href="#">Privacy</a>
                        <a class="font-label-mono text-label-mono uppercase text-outline hover:text-on-surface transition-colors" href="#">Terms</a>
                        <a class="font-label-mono text-label-mono uppercase text-primary flex items-center gap-2" href="#">
                            <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span> System Status: Optimal
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Register the custom element
customElements.define('main-footer', MainFooter);
