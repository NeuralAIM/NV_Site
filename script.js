document.addEventListener('DOMContentLoaded', () => {

    // --- СЛОВАРЬ ДЛЯ ПЕРЕВОДА ---
    const translations = {
        en: {
            pageTitle: "NVision 1.0 - Capture Card for AI",
            navAdvantage: "Advantage",
            navSpoofer: "Spoofer",
            navSpecs: "Specifications",
            navPorts: "In the Box",
            heroTag: "Capture Card for AI",
            heroSubtitle: "A new capture card designed specifically for AI assistants and video recording.",
            feature1: "Minimal Latency",
            feature2: "HDCP & EDID Support",
            feature3: "UVC - No Drivers Required",
            priceLabel: "Price from:",
            diagYourPC: "Your PC",
            diagNeuralPC: "NeuralPC (AI)",
            diagMonitor: "Monitor",
            captureModes: "Capture Modes",
            specFooter: "The monitor can receive up to 8K@60fps (HDMI 2.1), regardless of the capture resolution and frequency.",
            advantageTitle: "Invisible <span class='highlight'>Advantage</span> Powered by AI",
            advantageSubtitle: "NVision 1.0 sends a 'clean' image from your gaming PC to a second computer, where AI analyzes each frame. This allows the neural network to operate undetected by anti-cheat systems.",
            advPoint1Title: "Absolute Stealth.",
            advPoint1Text: "The capture card operates at the hardware level, duplicating the video signal before it comes under the control of the operating system and anti-cheats. To the gaming PC, it looks like a single monitor is connected.",
            advPoint2Title: "Zero Latency for You.",
            advPoint2Text: "Thanks to HDMI 2.1 Pass-through technology, you play on your monitor without the slightest delay, while a real-time copy of the image is sent for neural network analysis.",
            advPoint3Title: "Maximum Performance.",
            advPoint3Text: "All the load from video processing and AI work falls on the second PC. Your gaming computer is free and delivers maximum FPS without being distracted by other tasks.",
            spooferTitle: "Built-in <span class='highlight'>EDID Spoofer</span>",
            spooferSubtitle: "The capture card remains completely invisible to the system, masking itself as your primary monitor.",
            spooferCard1Title: "Regular Capture Card",
            spooferCard1Text: "Detected by the system as 'Capture Card', 'USB Video Device', etc. Advanced anti-cheats can easily detect such a device and block it. You expose yourself and your account to unnecessary risk.",
            spooferCard2Text: "Automatically copies the EDID, etc., of your monitor. To the gaming PC, the capture card and your monitor are <strong>the same device.</strong>",
            specsTitle: "Technical <span class='highlight'>Specifications</span>",
            specNameInterface: "Interface",
            specNamePassthrough: "Pass-Through",
            specNameVideoIO: "Video In/Out",
            specNameVRR: "VRR Support",
            specNameAudio: "Audio Ports",
            specNameMaxCapture: "Max Capture",
            specNameHDCP: "HDCP Support",
            specValueHDCP: "Disabled (2.3 / 1.4)",
            specNameFormat: "Video Format",
            specNameEDID: "EDID Spoofer",
            specValueEDID: "Built-in, automatic",
            specNameWeight: "Weight",
            portsTitle: "Packaging and <span class='highlight'>Contents</span>",
            portsSubtitle: "Everything a streamer and cheater needs is already here.",
            boxTitle: "What's in the box:",
            boxItem1: "NVision 1.0 Capture Card",
            boxItem2: "Connection Guide",
            boxItem3: "HDMI 2.1 Cable (1.5m)",
            boxItem4: "USB Type-C to Type-A Cable (1.5m)",
            specNameVRR: "VRR Support",
            specValueVRR: "Yes (48-120 Hz)",
            spooferTitle: "Built-in <span class='highlight'>EDID Spoofer</span>",
            spooferSubtitle: "The capture card remains completely invisible to the system, masking itself as your primary monitor.",
            spooferCard1Title: "Regular Capture Card",
            spooferCard1Text: "Detected by the system as 'Capture Card', 'USB Video Device', etc. Advanced anti-cheats can easily detect such a device and block it. You expose yourself and your account to unnecessary risk.",
            spooferCard2Text: "Automatically copies the EDID, etc., of your monitor. To the gaming PC, the capture card and your monitor are <strong>the same device.</strong>",
            animGamingPC: "Gaming PC",
            animYourMonitor: "Your Monitor",
            animStatus1: "Waiting...",
            animStatus2: "1. Copying data from monitor...",
            animStatus3: "2. EDID copied! Masking...",
            animStatus4: "3. Sending spoofed data to PC...",
            animStatus5: "Done! System sees only the monitor.",
        },
        ru: {
            pageTitle: "NVision 1.0 - Карта захвата для AI",
            navAdvantage: "Преимущество",
            navSpoofer: "Spoofer",
            navSpecs: "Характеристики",
            navPorts: "Комплектация",
            heroTag: "Карта захвата для AI",
            heroSubtitle: "Новая карта захвата, созданная специально для работы с AI-ассистентами и записи видео.",
            feature1: "Минимальная задержка",
            feature2: "Поддержка - HDCP & EDID",
            feature3: "UVC - Не требует драйверов",
            priceLabel: "Цена от:",
            diagYourPC: "Ваш ПК",
            diagNeuralPC: "NeuralPC (AI)",
            diagMonitor: "Монитор",
            captureModes: "Режимы захвата",
            specFooter: "Монитор может получать до 8K@60fps (HDMI 2.1), вне зависимости от разрешения и частоты захвата.",
            advantageTitle: "Невидимое <span class='highlight'>преимущество</span> на базе AI",
            advantageSubtitle: "NVision 1.0 передает 'чистое' изображение с вашего игрового ПК на второй компьютер, где AI анализирует каждый кадр. Это позволяет нейросети работать незаметно для античит-систем.",
            advPoint1Title: "Абсолютная незаметность.",
            advPoint1Text: "Карта захвата работает на аппаратном уровне, дублируя видеосигнал до того, как он попадет под контроль операционной системы и античитов. Для игрового ПК это выглядит так, будто к нему просто подключен один монитор.",
            advPoint2Title: "Нулевая задержка для вас.",
            advPoint2Text: "Благодаря технологии HDMI 2.1 Pass-through, вы играете на своем мониторе без малейших задержек, в то время как копия изображения в реальном времени отправляется на анализ нейросети.",
            advPoint3Title: "Максимальная производительность.",
            advPoint3Text: "Вся нагрузка по обработке видео и работе AI ложится на второй ПК. Ваш игровой компьютер свободен и выдает максимальный FPS, не отвлекаясь на посторонние задачи.",
            spooferTitle: "Встроенный <span class='highlight'>EDID Spoofer</span>",
            spooferSubtitle: "Карта захвата остаётся полностью невидимой для системы, маскируя себя под ваш основной монитор.",
            spooferCard1Title: "Обычная карта захвата",
            spooferCard1Text: "Определяется системой как 'Карта захвата', 'USB Video Device' и т.д. Продвинутые античиты могут легко обнаружить такое устройство и заблокировать его. Вы подвергаете себя и свой аккаунт неоправданному риску.",
            spooferCard2Text: "Автоматически копирует EDID и т.д. вашего монитора. Для игрового ПК карта захвата и ваш монитор — это <strong>одно и то же устройство.</strong>",
            specsTitle: "Технические <span class='highlight'>характеристики</span>",
            specNameInterface: "Интерфейс",
            specNamePassthrough: "Pass-Through",
            specNameVideoIO: "Видео вход/выход",
            specNameVRR: "Поддержка VRR",
            specNameAudio: "Аудио порты",
            specNameMaxCapture: "Max захват",
            specNameHDCP: "Поддержка HDCP",
            specValueHDCP: "Отключен (2.3 / 1.4)",
            specNameFormat: "Формат видео",
            specNameEDID: "EDID Spoofer",
            specValueEDID: "Встроенный, автоматический",
            specNameWeight: "Вес",
            portsTitle: "Упаковка и <span class='highlight'>комплектация</span>",
            portsSubtitle: "Всё что необходимо стримеру и читеру уже здесь.",
            boxTitle: "Что в коробке:",
            boxItem1: "Карта захвата NVision 1.0",
            boxItem2: "Инструкция по подключению",
            boxItem3: "Кабель HDMI 2.1 (1.5м)",
            boxItem4: "Кабель USB Type-C to Type-A (1.5м)",
            specNameVRR: "Поддержка VRR",
            specValueVRR: "Да (48-120 Hz)",
            spooferTitle: "Встроенный <span class='highlight'>EDID Spoofer</span>",
            spooferSubtitle: "Карта захвата остаётся полностью невидимой для системы, маскируя себя под ваш основной монитор.",
            spooferCard1Title: "Обычная карта захвата",
            spooferCard1Text: "Определяется системой как \"Карта захвата\", \"USB Video Device\" и т.д. Продвинутые античиты могут легко обнаружить такое устройство и заблокировать его. Вы подвергаете себя и свой аккаунт неоправданному риску.",
            spooferCard2Text: "Автоматически копирует EDID и т.д. вашего монитора. Для игрового ПК карта захвата и ваш монитор — это <strong>одно и то же устройство.</strong>",
            animGamingPC: "Игровой ПК",
            animYourMonitor: "Ваш Монитор",
            // Ключи для анимации
            animStatus1: "Ожидание...",
            animStatus2: "1. Копирование данных с монитора...",
            animStatus3: "2. EDID скопирован! Маскировка...",
            animStatus4: "3. Отправка поддельных данных на ПК...",
            animStatus5: "Готово! Система видит только монитор.",
        }
    };


    // --- ИНИЦИАЛИЗАЦИЯ И НАСТРОЙКА TSPARTICLES ---
    const particlesConfig = {
        fpsLimit: 30, // Ограничение FPS для экономии ресурсов
        particles: {
            number: {
                value: 80, // Количество частиц
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#EAEAEA", "#E54545"] // Цвета частиц: основной и акцентный
            },
            shape: {
                type: "circle" // Форма частиц
            },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: { min: 3, max: 5 }, // Случайный размер от 1 до 3 пикселей
                random: true,
            },
            links: {
                enable: true, // Включить линии между частицами
                distance: 150,
                color: "#888888", // Цвет линий (второстепенный текст)
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1, // Скорость движения
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out", // Частицы уходят за пределы экрана
                bounce: false,
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "repulse" // При наведении мыши частицы отталкиваются
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        detectRetina: true
    };

    tsParticles.load('particles-js', particlesConfig);


    const animationSteps = [
        { key: 'animStatus1', duration: 2000 },
        { key: 'animStatus2', duration: 2000 },
        { key: 'animStatus3', duration: 1000 },
        { key: 'animStatus4', duration: 2000 },
        { key: 'animStatus5', duration: 3000 },
    ];

    function startStatusAnimation(lang) {
        clearTimeout(statusAnimationTimeout);
        let currentStep = 0;

        function nextStep() {
            if (!animStatusTextEl) return;
            
            const stepData = animationSteps[currentStep];
            animStatusTextEl.textContent = translations[lang][stepData.key];
            
            currentStep = (currentStep + 1) % animationSteps.length;
            
            statusAnimationTimeout = setTimeout(nextStep, stepData.duration);
        }
        
        nextStep();
    }

    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА ---
    const langSwitcher = document.querySelector('.lang-switcher');
    const langButtons = langSwitcher.querySelectorAll('button');
    const translatableElements = document.querySelectorAll('[data-key]');

    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        const mainPriceEl = document.getElementById('main-price');
        const altPriceEl = document.getElementById('alt-price');
        
        if (mainPriceEl && altPriceEl) {
            const priceRub = "11 499₽";
            const priceUsd = "149$";

            if (lang === 'ru') {
                mainPriceEl.textContent = priceRub;
                altPriceEl.textContent = `/ ${priceUsd}`;
            } else { // en
                mainPriceEl.textContent = priceUsd;
                altPriceEl.textContent = `/ ${priceRub}`;
            }
        }

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    langSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
        }
    });

    const savedLang = localStorage.getItem('language');
    const userLang = navigator.language || navigator.userLanguage;
    const initialLang = savedLang || (userLang.startsWith('ru') ? 'ru' : 'en');
    setLanguage(initialLang);


    // --- ЛОГИКА МОБИЛЬНОЙ НАВИГАЦИИ ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileNavToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    mainNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            document.body.classList.remove('nav-open');
        }
    });


    const specList = document.getElementById('spec-list');
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
        const allSpecItems = document.querySelectorAll('.spec-item');
        allSpecItems.forEach(item => item.classList.remove('highlighted'));
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
        const specItems = document.querySelectorAll('.spec-item');
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