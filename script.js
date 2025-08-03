document.addEventListener('DOMContentLoaded', () => {
    const specList = document.getElementById('spec-list');
    const specItems = document.querySelectorAll('.spec-item');
    const captureInfoDisplay = document.getElementById('capture-info-display');
    const diagramContainer = document.querySelector('.diagram-column-final');
    const nodePc = document.getElementById('node-pc');
    const nodeCard = document.getElementById('node-card');
    const nodeStream = document.getElementById('node-stream');
    const nodeMonitor = document.getElementById('node-monitor');
    const pathPcToCardBase = document.getElementById('path-pc-to-card-base');
    const pathCardToSplitBase = document.getElementById('path-card-to-split-base');
    const pathSplitToStreamBase = document.getElementById('path-split-to-stream-base');
    const pathSplitToMonitorBase = document.getElementById('path-split-to-monitor-base');
    const pathPcToCardFlow = document.getElementById('path-pc-to-card-flow');
    const pathCardToSplitFlow = document.getElementById('path-card-to-split-flow');
    const pathSplitToStreamFlow = document.getElementById('path-split-to-stream-flow');
    const pathSplitToMonitorFlow = document.getElementById('path-split-to-monitor-flow');

    function drawConnections() {
        if (!diagramContainer) return;
        const svgRect = diagramContainer.getBoundingClientRect();
        const getCoords = (node, side) => {
            const rect = node.getBoundingClientRect();
            const x = (side === 'left' ? rect.left : rect.right) - svgRect.left;
            const y = rect.top + rect.height / 2 - svgRect.top;
            return { x, y };
        };
        const pc = getCoords(nodePc, 'right');
        const cardIn = getCoords(nodeCard, 'left');
        const cardOut = getCoords(nodeCard, 'right');
        const stream = getCoords(nodeStream, 'left');
        const monitor = getCoords(nodeMonitor, 'left');
        const splitPointX = cardOut.x + 30;
        const d_pc_card = `M ${pc.x} ${pc.y} C ${pc.x + 30} ${pc.y}, ${cardIn.x - 30} ${cardIn.y}, ${cardIn.x} ${cardIn.y}`;
        const d_card_split = `M ${cardOut.x} ${cardOut.y} L ${splitPointX} ${cardOut.y}`;
        const d_split_stream = `M ${splitPointX} ${cardOut.y} C ${splitPointX + 30} ${cardOut.y}, ${stream.x - 30} ${stream.y}, ${stream.x} ${stream.y}`;
        const d_split_monitor = `M ${splitPointX} ${cardOut.y} C ${splitPointX + 30} ${cardOut.y}, ${monitor.x - 30} ${monitor.y}, ${monitor.x} ${monitor.y}`;
        
        [pathPcToCardBase, pathPcToCardFlow].forEach(p => p.setAttribute('d', d_pc_card));
        [pathCardToSplitBase, pathCardToSplitFlow].forEach(p => p.setAttribute('d', d_card_split));
        [pathSplitToStreamBase, pathSplitToStreamFlow].forEach(p => p.setAttribute('d', d_split_stream));
        [pathSplitToMonitorBase, pathSplitToMonitorFlow].forEach(p => p.setAttribute('d', d_split_monitor));
    }

    function updateSelection(selectedItem) {
        specItems.forEach(item => item.classList.remove('highlighted'));
        selectedItem.classList.add('highlighted');
        const spec = selectedItem.dataset.spec;
        const fps = selectedItem.dataset.fps;
        captureInfoDisplay.textContent = `${spec}@${fps}`;
        let newDuration;
        switch (spec) {
            case '1080p': newDuration = 0.2; break;
            case '1440p': newDuration = 0.5; break;
            case '2160p': newDuration = 1.0; break;
            default: newDuration = 0.2;
        }
        const streamPaths = [pathPcToCardFlow, pathCardToSplitFlow, pathSplitToStreamFlow];
        streamPaths.forEach(path => path.style.setProperty('--anim-duration', `${newDuration}s`));
    }

    function initializeHero() {
        if (!diagramContainer) return;
        drawConnections();
        if (specItems.length > 0) {
            updateSelection(specItems[0]);
        }
        pathSplitToMonitorFlow.style.setProperty('--anim-duration', '0.2s');
        if (specList) {
            specList.addEventListener('click', (event) => {
                const clickedItem = event.target.closest('.spec-item');
                if (clickedItem) {
                    updateSelection(clickedItem);
                }
            });
        }
        window.addEventListener('resize', drawConnections);
    }

    initializeHero();

    const scrollElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => {
        observer.observe(el);
    });
});