/* ==========================================================================
   MATEMÁTICA DIVERTIDA - LÓGICA DE APLICACIÓN (ES6 Nativo)
   ========================================================================== */

const activitiesData = {
    1: {
        id: 1,
        title: "Números Naturales y Operaciones",
        category: "Números y Operaciones",
        imageUrl: "assets/gallery_numbers.jpg",
        explanation: `<p>En las <strong>operaciones combinadas</strong> (donde hay sumas, restas, multiplicaciones y divisiones juntas), no podemos resolver en cualquier orden. ¡Existe una jerarquía que debemos respetar!</p>
                      <p><strong>La Regla de Oro:</strong></p>
                      <ol style="margin-left: 20px; margin-bottom: 12px;">
                        <li>Primero resuelve lo que está dentro de los <strong>paréntesis ( )</strong>.</li>
                        <li>Luego, haz las <strong>multiplicaciones y divisiones</strong> de izquierda a derecha.</li>
                        <li>Por último, haz las <strong>sumas y restas</strong> de izquierda a derecha.</li>
                      </ol>
                      <p>Si no sigues este orden, ¡el resultado será completamente diferente!</p>`,
        curiosity: "Los antiguos matemáticos tardaron siglos en ponerse de acuerdo sobre qué operación resolver primero. Gracias a la jerarquía de operaciones, hoy todas las computadoras del mundo pueden hacer cálculos sin equivocarse de la misma forma.",

        example: `<p>Resuelve: <strong>12 + 5 × (8 - 4) ÷ 2</strong></p>
                  <p>1. Paréntesis: 8 - 4 = 4. Nos queda: 12 + 5 × 4 ÷ 2</p>
                  <p>2. Multiplicación: 5 × 4 = 20. Nos queda: 12 + 20 ÷ 2</p>
                  <p>3. División: 20 ÷ 2 = 10. Nos queda: 12 + 10</p>
                  <p>4. Suma: 12 + 10 = <strong>22</strong>.</p>`
    },
    2: {
        id: 2,
        title: "Multiplicación y División",
        category: "Cálculo Mental",
        imageUrl: "assets/gallery_numbers.jpg",
        explanation: `<p>La <strong>multiplicación</strong> y la <strong>división</strong> son operaciones inversas. Multiplicar es agrupar cantidades iguales, y dividir es repartir en partes iguales.</p>
                      <p>Para resolver divisiones de dos cifras, un gran truco es la <strong>estimación</strong>. Por ejemplo, si divides 120 entre 22, piensa en cuántas veces cabe 20 en 100.</p>
                      <p>¡El cálculo mental rápido entrena tu cerebro y te ayuda a resolver problemas del día a día sin necesidad de papel o calculadora!</p>`,
        curiosity: "La palabra 'multiplicar' viene del latín y significa 'hacer muchos pliegues'. La división es tan antigua que los egipcios ya la usaban para repartir tierras de cultivo del Río Nilo.",

        example: `<p>Cálculo rápido de: <strong>240 ÷ 12</strong></p>
                  <p>Truco: Piensa en 24 ÷ 12, que es igual a 2. Luego, añade el cero al final.</p>
                  <p>Resultado: <strong>20</strong>.</p>`
    },
    3: {
        id: 3,
        title: "Fracciones",
        category: "Números y Fracciones",
        imageUrl: "assets/gallery_fractions.jpg",
        explanation: `<p>Una <strong>fracción</strong> representa una parte de un entero que ha sido dividido en partes iguales. Se compone de un numerador (arriba, partes que tomamos) y un denominador (abajo, partes en que dividimos el todo).</p>
                      <p>Tipos de fracciones:</p>
                      <ul style="margin-left: 20px; margin-bottom: 12px;">
                        <li><strong>Propias:</strong> El numerador es menor que el denominador (ej. 3/4). Son menores que 1 entero.</li>
                        <li><strong>Impropias:</strong> El numerador es mayor o igual al denominador (ej. 5/3). Son mayores que 1 entero.</li>
                        <li><strong>Mixtas:</strong> Combinan un número entero y una fracción propia (ej. 1 2/3).</li>
                      </ul>`,
        curiosity: "La palabra 'fracción' proviene del latín 'frangere', que significa romper. Los números fraccionarios eran conocidos por los babilonios como 'números rotos'.",

        example: `<p>Convierte la fracción mixta <strong>2 1/3</strong> a impropia:</p>
                  <p>1. Multiplica el entero por el denominador: 2 × 3 = 6.</p>
                  <p>2. Suma el numerador: 6 + 1 = 7.</p>
                  <p>3. Mantén el denominador: <strong>7/3</strong>.</p>`
    },
    4: {
        id: 4,
        title: "Geometría",
        category: "Formas Espaciales",
        imageUrl: "assets/gallery_geometry.jpg",
        explanation: `<p>La geometría estudia las formas, tamaños y las relaciones del espacio. En quinto grado, nos enfocamos en:</p>
                      <ul style="margin-left: 20px; margin-bottom: 12px;">
                        <li><strong>Ángulos:</strong> Se miden en grados. El ángulo <strong>Agudo</strong> mide menos de 90°, el <strong>Recto</strong> mide exactamente 90° y el <strong>Obtuso</strong> mide más de 90° pero menos de 180°.</li>
                        <li><strong>Triángulos:</strong> Se clasifican según sus lados en Equilátero (3 lados iguales), Isósceles (2 lados iguales) y Escaleno (lados diferentes).</li>
                      </ul>`,
        curiosity: "La palabra 'Geometría' significa literalmente 'medida de la tierra'. Los antiguos griegos la usaban para delimitar terrenos agrícolas.",

        example: `<p>¿Cómo clasificarías un triángulo cuyos lados miden <strong>5 cm, 5 cm y 8 cm</strong>?</p>
                  <p>Como tiene exactamente dos lados con la misma medida, es un <strong>Triángulo Isósceles</strong>.</p>`
    },
    5: {
        id: 5,
        title: "Medidas",
        category: "Medidas e Instrumentos",
        imageUrl: "assets/gallery_measures.jpg",
        explanation: `<p>Medir es comparar una magnitud con una unidad patrón. El Sistema Internacional de Unidades (SI) establece:</p>
                      <ul style="margin-left: 20px; margin-bottom: 12px;">
                        <li><strong>Longitud:</strong> Unidad base es el Metro (m).</li>
                        <li><strong>Masa:</strong> Unidad base es el Gramo (g) o Kilogramo (kg).</li>
                        <li><strong>Capacidad:</strong> Unidad base es el Litro (L).</li>
                      </ul>
                      <p>Para hacer conversiones, nos apoyamos en múltiplos (kilómeto, kilogramo) y submúltiplos (centímetro, mililitro), multiplicando o dividiendo de 10 en 10.</p>`,
        curiosity: "Hace mucho tiempo, la gente medía usando el largo de su pie, su codo o su pulgar. Como los cuerpos son distintos, ¡las medidas nunca coincidían! Por eso se inventó el metro universal.",
        videoUrl: "https://www.youtube.com/embed/Q0P57UqE4nI",
        example: `<p>Convierte <strong>3.5 Kilómetros (km) a Metros (m)</strong>:</p>
                  <p>Como de km a m bajamos 3 escalones en la escalera de conversión, multiplicamos por 1000 (10 × 10 × 10).</p>
                  <p>3.5 × 1000 = <strong>3500 metros</strong>.</p>`
    },
    6: {
        id: 6,
        title: "Resolución de Problemas",
        category: "Resolución Lógica",
        imageUrl: "assets/hero_math_illustration.jpg",
        explanation: `<p>Resolver problemas matemáticos es como ser un detective. Requiere seguir estos pasos ordenados:</p>
                      <ol style="margin-left: 20px; margin-bottom: 12px;">
                        <li><strong>Comprender:</strong> Lee el enunciado despacio, identifica la pregunta y subraya los datos importantes.</li>
                        <li><strong>Planificar:</strong> Elige qué operaciones necesitas (¿suma, resta, multiplicación o división?).</li>
                        <li><strong>Resolver:</strong> Haz los cálculos con cuidado y paso a paso.</li>
                        <li><strong>Revisar:</strong> Piensa si tu respuesta tiene sentido y responde la pregunta original.</li>
                      </ol>`,
        curiosity: "Albert Einstein, uno de los científicos más grandes de la historia, decía: 'Si tuviera una hora para resolver un problema, pasaría 55 minutos pensando en el problema y 5 minutos pensando en soluciones'.",

        example: `<p><strong>Problema:</strong> Tomás compra 4 cuadernos de ¢800 cada uno y paga con un billete de ¢5000. ¿Cuánto vuelto recibe?</p>
                  <p>1. Costo total: 4 × 800 = ¢3200.</p>
                  <p>2. Vuelto: 5000 - 3200 = <strong>¢1800</strong>.</p>`
    },
    7: {
        id: 7,
        title: "Patrones y Relaciones",
        category: "Patrones Numéricos",
        imageUrl: "assets/gallery_numbers.jpg",
        explanation: `<p>Un <strong>patrón</strong> es una sucesión de números, figuras o elementos que siguen una regla fija.</p>
                      <p>Tipos comunes de secuencias:</p>
                      <ul style="margin-left: 20px; margin-bottom: 12px;">
                        <li><strong>Aritméticas:</strong> Se obtiene sumando o restando una cantidad constante (ej. 3, 6, 9, 12... sumamos 3).</li>
                        <li><strong>Geométricas:</strong> Se obtiene multiplicando o dividiendo por una constante (ej. 2, 4, 8, 16... multiplicamos por 2).</li>
                      </ul>
                      <p>Descubrir la regla te permite predecir cualquier número en el futuro.</p>`,
        curiosity: "La naturaleza está llena de patrones. Los pétalos de las flores, las escamas de una piña de pino y la espiral de un caracol siguen un patrón matemático llamado la Sucesión de Fibonacci.",

        example: `<p>Encuentra el término faltante: <strong>5, 11, 17, 23, [ ? ], 35</strong></p>
                  <p>1. Restamos dos términos seguidos: 11 - 5 = 6, 17 - 11 = 6. La regla es sumar 6.</p>
                  <p>2. Aplicamos la regla: 23 + 6 = <strong>29</strong>.</p>`
    },
    8: {
        id: 8,
        title: "Estadística Básica",
        category: "Análisis de Datos",
        imageUrl: "assets/gallery_geometry.jpg",
        explanation: `<p>La estadística organiza información de encuestas para entenderla mejor. Conceptos clave:</p>
                      <ul style="margin-left: 20px; margin-bottom: 12px;">
                        <li><strong>Moda:</strong> Es el dato que más veces se repite (el más popular).</li>
                        <li><strong>Media Aritmética (Promedio):</strong> Se obtiene sumando todos los valores y dividiendo el resultado entre la cantidad total de datos.</li>
                        <li><strong>Gráfico de Barras:</strong> Representación visual donde la altura de cada barra muestra la frecuencia de un dato.</li>
                      </ul>`,
        curiosity: "La palabra 'Estadística' proviene del latín 'status', que significa estado o situación. Los antiguos reyes la usaban para contar cuánta gente vivía en sus reinos y cuánta comida tenían.",

        example: `<p>Notas de examen de Luis: <strong>8, 9, 7, 8, 8</strong>.</p>
                  <p>- <strong>Moda:</strong> El número 8 (aparece 3 veces).</p>
                  <p>- <strong>Promedio:</strong> Sumamos: 8+9+7+8+8 = 40. Dividimos entre 5 materias: 40 ÷ 5 = <strong>8</strong>.</p>`
    }
};

// Configuración de la aplicación
const AppState = {
    points: 0,
    completed: [], // IDs de actividades completadas
    maxActivities: 8,
    pointsPerActivity: 20
};

// ==========================================================================
// INICIALIZACIÓN DEL SISTEMA
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    loadProgress();
    initNavbarScroll();
    initMobileNav();
    initProgressToggle();
    initTimelineAccordion();
    initScrollReveal();
    initStatsCounters();
    initActivityCards();
    initModalTabs();
});

// ==========================================================================
// PERSISTENCIA & MANEJO DE PROGRESO (localStorage)
// ==========================================================================
function saveProgress() {
    localStorage.setItem("matematica_prog_points", AppState.points);
    localStorage.setItem("matematica_prog_completed", JSON.stringify(AppState.completed));
    updateProgressUI();
}

function loadProgress() {
    const savedPoints = localStorage.getItem("matematica_prog_points");
    const savedCompleted = localStorage.getItem("matematica_prog_completed");

    if (savedPoints !== null) {
        AppState.points = parseInt(savedPoints, 10);
    }
    if (savedCompleted !== null) {
        AppState.completed = JSON.parse(savedCompleted);
    }

    updateProgressUI();
}

function updateProgressUI() {
    // Actualizar Puntos
    document.getElementById("prog-points").innerText = `${AppState.points} pts`;

    // Actualizar Conteo
    const countText = `${AppState.completed.length} / ${AppState.maxActivities}`;
    document.getElementById("prog-completed").innerText = countText;
    document.getElementById("mobile-progress-badge").innerText = AppState.completed.length;

    // Actualizar Porcentaje y Barra
    const percentage = Math.round((AppState.completed.length / AppState.maxActivities) * 100);
    document.getElementById("prog-percent").innerText = `${percentage}%`;
    document.getElementById("prog-fill").style.width = `${percentage}%`;

    // Actualizar Insignias (Desbloquear las ganadas)
    document.querySelectorAll(".badge-item").forEach(badge => {
        const id = parseInt(badge.getAttribute("data-badge"), 10);
        if (AppState.completed.includes(id)) {
            badge.classList.remove("locked");
        } else {
            badge.classList.add("locked");
        }
    });

    // Actualizar Tarjetas de Actividad (Añadir clase completado)
    document.querySelectorAll(".activity-card").forEach(card => {
        const id = parseInt(card.getAttribute("data-activity-id"), 10);
        if (AppState.completed.includes(id)) {
            card.classList.add("completed");
        } else {
            card.classList.remove("completed");
        }
    });
}

// Botón de reiniciar progreso
document.getElementById("reset-progress").addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres borrar tu progreso? Se perderán todos tus puntos e insignias.")) {
        AppState.points = 0;
        AppState.completed = [];
        saveProgress();
    }
});

// ==========================================================================
// CONTROLES DE NAVEGACIÓN Y MENÚS
// ==========================================================================

// Cambiar estilo de la Navbar al hacer Scroll
function initNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Resaltar sección activa en menú
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
}

// Menú Móvil Hamburger
function initMobileNav() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("open");
        menuToggle.querySelector("i").classList.toggle("fa-bars");
        menuToggle.querySelector("i").classList.toggle("fa-xmark");
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.querySelector("i").classList.add("fa-bars");
            menuToggle.querySelector("i").classList.remove("fa-xmark");
        });
    });

    // Cerrar si hace clic fuera
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove("open");
            menuToggle.querySelector("i").classList.add("fa-bars");
            menuToggle.querySelector("i").classList.remove("fa-xmark");
        }
    });
}

// Drawer del Panel de Progreso (Móvil)
function initProgressToggle() {
    const progToggle = document.getElementById("progress-toggle");
    const closeProg = document.getElementById("close-progress");
    const progPanel = document.getElementById("progress-panel");

    progToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        progPanel.classList.toggle("open");
        progPanel.classList.remove("hidden");
    });

    closeProg.addEventListener("click", () => {
        progPanel.classList.remove("open");
        // En escritorio sólo se oculta si queremos, pero en móvil lo quitamos de la pantalla
        if (window.innerWidth > 1024) {
            progPanel.classList.add("hidden");
        }
    });

    // Evitar que clics dentro del panel lo cierren
    progPanel.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Cerrar si hace clic fuera del panel
    document.addEventListener("click", () => {
        if (window.innerWidth <= 1024) {
            progPanel.classList.remove("open");
        }
    });
}

// ==========================================================================
// SCROLL REVEAL (Intersection Observer)
// ==========================================================================
function initScrollReveal() {
    const options = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll(".scroll-reveal").forEach(el => {
        observer.observe(el);
    });
}

// ==========================================================================
// CONTADORES ANIMADOS (Hero Stats)
// ==========================================================================
function initStatsCounters() {
    const statsContainer = document.querySelector(".hero-stats-container");
    const statCards = document.querySelectorAll(".stat-card");

    const options = {
        threshold: 0.5,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statCards.forEach(card => {
                    const target = parseInt(card.getAttribute("data-stat-target"), 10);
                    const numberEl = card.querySelector(".stat-number");
                    animateCounter(numberEl, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    if (statsContainer) {
        observer.observe(statsContainer);
    }
}

function animateCounter(element, target) {
    let start = 0;
    const duration = 2000; // ms
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
        start += 1;
        element.innerText = start;
        if (start >= target) {
            element.innerText = target;
            clearInterval(timer);
        }
    }, Math.max(stepTime, 10));
}

// ==========================================================================
// BITÁCORA DEL DESARROLLO (Timeline Acordeón)
// ==========================================================================
function initTimelineAccordion() {
    const toggles = document.querySelectorAll(".btn-timeline-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const card = toggle.closest(".timeline-card");
            const isExpanded = card.classList.contains("expanded");

            // Colapsar otras abiertas si se desea (opcional, en este caso dejamos expandir varias libremente)
            card.classList.toggle("expanded");

            if (isExpanded) {
                toggle.innerHTML = 'Expandir información <i class="fa-solid fa-chevron-down"></i>';
            } else {
                toggle.innerHTML = 'Colapsar información <i class="fa-solid fa-chevron-up"></i>';
            }
        });
    });
}



// ==========================================================================
// CONTROLES DE LA MODAL E INTERCAMBIO DE PESTAÑAS
// ==========================================================================
let currentActivityId = null;

function initActivityCards() {
    const modal = document.getElementById("activity-modal");
    const closeBtn = document.getElementById("modal-close");

    document.querySelectorAll(".start-activity-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".activity-card");
            const id = parseInt(card.getAttribute("data-activity-id"), 10);
            openActivityModal(id);
        });
    });

    closeBtn.addEventListener("click", () => {
        closeActivityModal();
    });

    // Cerrar al hacer clic fuera del recuadro de la modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeActivityModal();
        }
    });
}

function initModalTabs() {
    const tabs = document.querySelectorAll(".modal-tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetTab = tab.getAttribute("data-tab");

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            document.querySelectorAll(".modal-tab-content").forEach(content => {
                content.classList.remove("active");
            });
            document.getElementById(`tab-${targetTab}`).classList.add("active");

            // Si entra a la pestaña juego, inicializar o recargar el juego
            if (targetTab === "juego") {
                startSelectedGame(currentActivityId);
            }
        });
    });
}

function openActivityModal(id) {
    currentActivityId = id;
    const data = activitiesData[id];
    if (!data) return;

    // Poblar textos
    document.getElementById("modal-theme-category").innerText = data.category;
    document.getElementById("modal-theme-title").innerText = data.title;
    document.getElementById("modal-explanation-text").innerHTML = data.explanation;
    document.getElementById("modal-curiosity-text").innerText = data.curiosity;
    document.getElementById("modal-example-text").innerHTML = data.example;

    // Poblar imagen ilustrativa
    const themeImg = document.getElementById("modal-theme-image");
    if (data.imageUrl) {
        themeImg.src = data.imageUrl;
        themeImg.style.display = "block";
    } else {
        themeImg.src = "";
        themeImg.style.display = "none";
    }

    // Poblar video
    const videoIframe = document.getElementById("modal-video-iframe");
    if (data.videoUrl) {
        videoIframe.src = data.videoUrl;
        document.getElementById("modal-video-container").style.display = "block";
    } else {
        videoIframe.src = "";
        document.getElementById("modal-video-container").style.display = "none";
    }

    // Resetear Pestañas
    document.querySelectorAll(".modal-tab").forEach(t => t.classList.remove("active"));
    document.querySelector('.modal-tab[data-tab="explicacion"]').classList.add("active");
    document.querySelectorAll(".modal-tab-content").forEach(c => c.classList.remove("active"));
    document.getElementById("tab-explicacion").classList.add("active");

    // Limpiar zona de juego y feedback
    document.getElementById("game-canvas-area").innerHTML = "";
    document.getElementById("game-feedback-container").classList.add("hidden");

    // Abrir Modal
    document.getElementById("activity-modal").classList.add("open");
}

function closeActivityModal() {
    document.getElementById("activity-modal").classList.remove("open");
    // Detener reproducción del video
    document.getElementById("modal-video-iframe").src = "";
}

// ==========================================================================
// DESARROLLO DE LOS JUEGOS INTERACTIVOS (LOGICA ESPECIFICA)
// ==========================================================================

function startSelectedGame(id) {
    const gameArea = document.getElementById("game-canvas-area");
    const feedback = document.getElementById("game-feedback-container");

    // Ocultar feedback por defecto
    feedback.classList.add("hidden");
    gameArea.innerHTML = ""; // Limpiar juego anterior

    // Si ya completó esta actividad, podemos mostrar el juego pero ya con feedback
    // Para una mejor experiencia didáctica, dejaremos que vuelva a jugar y si gana muestra la felicitación.

    switch (id) {
        case 1:
            buildTemploOrdenGame(gameArea);
            break;
        case 2:
            buildCarreraMentalGame(gameArea);
            break;
        case 3:
            buildPizzeriaFraccionesGame(gameArea);
            break;
        case 4:
            buildRadarGeometriaGame(gameArea);
            break;
        case 5:
            buildConvertidorGalacticoGame(gameArea);
            break;
        case 6:
            buildAventuraMatematicaGame(gameArea);
            break;
        case 7:
            buildCodigoSecretoGame(gameArea);
            break;
        case 8:
            buildAnalistaDatosGame(gameArea);
            break;
        default:
            gameArea.innerHTML = "<p>¡El juego para esta sección se cargará muy pronto!</p>";
    }
}

// --- JUEGO 1: Templo del Orden (Operaciones Combinadas) ---
function buildTemploOrdenGame(container) {
    // Ecuación a armar: 8 [?] 2 [?] 3 = 14  --> Solución: 8 + 2 * 3 = 14 (Jerarquía: 2*3=6, 8+6=14)
    container.innerHTML = `
        <div class="templo-game-container">
            <p style="text-align:center; font-size:0.95rem; margin-bottom:10px;">
                Arrastra o haz tap en los operadores para completar la igualdad:<br>
                <strong>8 [?] 2 [?] 3 = 14</strong>
            </p>
            <div class="templo-equation-box">
                <span>8</span>
                <div class="equation-drop" id="drop-1" data-correct="+">?</div>
                <span>2</span>
                <div class="equation-drop" id="drop-2" data-correct="×">?</div>
                <span>3</span>
                <span>=</span>
                <span>14</span>
            </div>
            
            <div class="templo-operators-rack">
                <div class="operator-draggable" draggable="true" data-op="+">+</div>
                <div class="operator-draggable" draggable="true" data-op="-">-</div>
                <div class="operator-draggable" draggable="true" data-op="×">×</div>
                <div class="operator-draggable" draggable="true" data-op="÷">÷</div>
            </div>
            
            <button class="submit-game-btn" id="verify-templo" style="margin-top:10px;">Verificar Solución</button>
        </div>
    `;

    const draggables = container.querySelectorAll(".operator-draggable");
    const drops = container.querySelectorAll(".equation-drop");
    let activeSelectedOp = null; // Para soporte táctil en dispositivos móviles

    // Implementar Click-Click/Tap-Tap alternativo para móviles (iOS / Android)
    draggables.forEach(drag => {
        drag.addEventListener("click", () => {
            draggables.forEach(d => d.style.borderColor = "#cbd5e1");
            drag.style.borderColor = "var(--color-primary)";
            activeSelectedOp = drag.getAttribute("data-op");
        });

        // Eventos Drag estándares (PC)
        drag.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", drag.getAttribute("data-op"));
        });
    });

    drops.forEach(drop => {
        drop.addEventListener("click", () => {
            if (activeSelectedOp) {
                drop.innerText = activeSelectedOp;
                drop.classList.add("filled");
                drop.setAttribute("data-placed", activeSelectedOp);
                // Resetear selección
                draggables.forEach(d => d.style.borderColor = "#cbd5e1");
                activeSelectedOp = null;
            } else if (drop.classList.contains("filled")) {
                // Quitar operador al hacer clic de nuevo
                drop.innerText = "?";
                drop.classList.remove("filled");
                drop.removeAttribute("data-placed");
            }
        });

        // Eventos Drag estándares (PC)
        drop.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        drop.addEventListener("drop", (e) => {
            e.preventDefault();
            const op = e.dataTransfer.getData("text/plain");
            drop.innerText = op;
            drop.classList.add("filled");
            drop.setAttribute("data-placed", op);
        });
    });

    // Verificar
    document.getElementById("verify-templo").addEventListener("click", () => {
        const op1 = document.getElementById("drop-1").getAttribute("data-placed");
        const op2 = document.getElementById("drop-2").getAttribute("data-placed");

        if (op1 === "+" && op2 === "×") {
            winActiveGame(1);
        } else {
            alert("Esa combinación no da 14. ¡Recuerda que la multiplicación se calcula antes que la suma! Inténtalo de nuevo.");
            // Resetear
            drops.forEach(d => {
                d.innerText = "?";
                d.classList.remove("filled");
                d.removeAttribute("data-placed");
            });
        }
    });
}

// --- JUEGO 2: Carrera Mental (Cálculo Mental) ---
function buildCarreraMentalGame(container) {
    const questions = [
        { q: "120 ÷ 4", a: [20, 30, 40, 50], c: 30 },
        { q: "15 × 6", a: [80, 90, 75, 100], c: 90 },
        { q: "400 ÷ 8", a: [50, 40, 60, 80], c: 50 }
    ];
    let currentQIdx = 0;
    let score = 0;

    function renderQuestion() {
        if (currentQIdx >= questions.length) {
            if (score === questions.length) {
                winActiveGame(2);
            } else {
                alert("¡Respuestas incorrectas! Debes responder todas bien. Inténtalo de nuevo.");
                buildCarreraMentalGame(container);
            }
            return;
        }

        const data = questions[currentQIdx];
        container.innerHTML = `
            <div class="carrera-game-container">
                <p style="text-align:center; font-weight:600; margin-bottom: 12px;">Pregunta ${currentQIdx + 1} de 3</p>
                <div class="carrera-question-box">${data.q}</div>
                <div class="carrera-answers-grid" style="margin-top: 16px;">
                    ${data.a.map(opt => `<button class="carrera-answer-btn" data-val="${opt}">${opt}</button>`).join('')}
                </div>
            </div>
        `;

        // Eventos de botones
        container.querySelectorAll(".carrera-answer-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const selected = parseInt(btn.getAttribute("data-val"), 10);
                if (selected === data.c) {
                    score++;
                    currentQIdx++;
                    renderQuestion();
                } else {
                    alert("Respuesta incorrecta. ¡Vuelve a empezar!");
                    buildCarreraMentalGame(container);
                }
            });
        });
    }

    renderQuestion();
}

// --- JUEGO 3: La Pizzería Fraccionaria (Fracciones) ---
function buildPizzeriaFraccionesGame(container) {
    // Fracción objetivo: 5/8
    container.innerHTML = `
        <div class="pizza-game-container">
            <p style="text-align:center; font-size:0.95rem;">
                Observa la pizza. ¿Qué fracción representa la porción de pizza <strong>coloreada</strong>?
            </p>
            <div class="pizza-display">
                <div class="pizza-svg-wrapper">
                    <!-- SVG Círculo dividido en 8 partes, 5 coloreadas (en morado/azul) -->
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                        <!-- Fondo círculo base -->
                        <circle cx="50" cy="50" r="45" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
                        <!-- Partes coloreadas (5 porciones de 45 grados cada una, total 225 grados) -->
                        <path d="M50,50 L95,50 A45,45 0 1,1 18.18,18.18 Z" fill="var(--color-secondary)" opacity="0.8"/>
                        <!-- Líneas divisorias -->
                        <line x1="50" y1="5" x2="50" y2="95" stroke="#fff" stroke-width="2"/>
                        <line x1="5" y1="50" x2="95" y2="50" stroke="#fff" stroke-width="2"/>
                        <line x1="18.18" y1="18.18" x2="81.82" y2="81.82" stroke="#fff" stroke-width="2"/>
                        <line x1="18.18" y1="81.82" x2="81.82" y2="18.18" stroke="#fff" stroke-width="2"/>
                    </svg>
                </div>
                <div class="pizza-fraction-input">
                    <input type="number" id="num-input" placeholder="?" aria-label="Numerador">
                    <div class="pizza-fraction-line"></div>
                    <input type="number" id="den-input" placeholder="?" aria-label="Denominador">
                </div>
            </div>
            <button class="submit-game-btn" id="verify-pizza">Verificar Fracción</button>
        </div>
    `;

    document.getElementById("verify-pizza").addEventListener("click", () => {
        const num = parseInt(document.getElementById("num-input").value, 10);
        const den = parseInt(document.getElementById("den-input").value, 10);

        if (num === 5 && den === 8) {
            winActiveGame(3);
        } else {
            alert("Incorrecto. Cuenta cuántas rebanadas hay en total (Denominador) y cuántas de ellas están pintadas de morado (Numerador).");
        }
    });
}

// --- JUEGO 4: Radar de Ángulos (Geometría) ---
function buildRadarGeometriaGame(container) {
    const figures = [
        { type: "Ángulo Obtuso", svg: `<svg viewBox="0 0 100 100" width="100" height="100"><line x1="50" y1="80" x2="90" y2="80" stroke="var(--color-text-dark)" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="80" x2="15" y2="40" stroke="var(--color-text-dark)" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="12" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-dasharray="2,2"/></svg>` },
        { type: "Triángulo Equilátero", svg: `<svg viewBox="0 0 100 100" width="100" height="100"><polygon points="50,15 15,80 85,80" fill="none" stroke="var(--color-text-dark)" stroke-width="4"/></svg>` },
        { type: "Ángulo Agudo", svg: `<svg viewBox="0 0 100 100" width="100" height="100"><line x1="50" y1="80" x2="90" y2="80" stroke="var(--color-text-dark)" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="80" x2="80" y2="35" stroke="var(--color-text-dark)" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="15" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-dasharray="2,2"/></svg>` }
    ];
    let curFigIdx = 0;

    function renderFigure() {
        if (curFigIdx >= figures.length) {
            winActiveGame(4);
            return;
        }

        const data = figures[curFigIdx];
        container.innerHTML = `
            <div class="radar-game-container">
                <p style="text-align:center; font-weight:600;">Identifica la siguiente figura o ángulo (${curFigIdx + 1} de 3):</p>
                <div class="radar-shape-box">
                    ${data.svg}
                </div>
                <div class="radar-options">
                    <button class="radar-option-btn" data-opt="Ángulo Agudo">Ángulo Agudo</button>
                    <button class="radar-option-btn" data-opt="Ángulo Obtuso">Ángulo Obtuso</button>
                    <button class="radar-option-btn" data-opt="Ángulo Recto">Ángulo Recto</button>
                    <button class="radar-option-btn" data-opt="Triángulo Equilátero">T. Equilátero</button>
                    <button class="radar-option-btn" data-opt="Triángulo Isósceles">T. Isósceles</button>
                    <button class="radar-option-btn" data-opt="Triángulo Escaleno">T. Escaleno</button>
                </div>
            </div>
        `;

        container.querySelectorAll(".radar-option-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const choice = btn.getAttribute("data-opt");
                if (choice === data.type) {
                    curFigIdx++;
                    renderFigure();
                } else {
                    alert(`¡Oh no! No es un ${choice}. Intenta de nuevo.`);
                    curFigIdx = 0;
                    renderFigure();
                }
            });
        });
    }

    renderFigure();
}

// --- JUEGO 5: Convertidor Galáctico (Medidas) ---
function buildConvertidorGalacticoGame(container) {
    const pairs = [
        { left: "1.5 km", right: "1500 m" },
        { left: "2000 g", right: "2 kg" },
        { left: "3 Litros", right: "3000 ml" },
        { left: "120 min", right: "2 horas" }
    ];

    // Desordenar arreglos
    const leftItems = pairs.map(p => p.left).sort(() => Math.random() - 0.5);
    const rightItems = pairs.map(p => p.right).sort(() => Math.random() - 0.5);

    container.innerHTML = `
        <div class="convertidor-game-container">
            <div class="convertidor-col" id="col-left">
                ${leftItems.map(item => `<div class="convertidor-item" data-val="${item}">${item}</div>`).join('')}
            </div>
            <div class="convertidor-col" id="col-right">
                ${rightItems.map(item => `<div class="convertidor-item" data-val="${item}">${item}</div>`).join('')}
            </div>
        </div>
    `;

    let selectedLeft = null;
    let selectedRight = null;
    let solvedCount = 0;

    const leftEls = container.querySelectorAll("#col-left .convertidor-item");
    const rightEls = container.querySelectorAll("#col-right .convertidor-item");

    leftEls.forEach(el => {
        el.addEventListener("click", () => {
            if (el.classList.contains("matched")) return;
            leftEls.forEach(item => item.classList.remove("selected"));
            el.classList.add("selected");
            selectedLeft = el;
            checkMatch();
        });
    });

    rightEls.forEach(el => {
        el.addEventListener("click", () => {
            if (el.classList.contains("matched")) return;
            rightEls.forEach(item => item.classList.remove("selected"));
            el.classList.add("selected");
            selectedRight = el;
            checkMatch();
        });
    });

    function checkMatch() {
        if (selectedLeft && selectedRight) {
            const leftVal = selectedLeft.getAttribute("data-val");
            const rightVal = selectedRight.getAttribute("data-val");

            // Buscar si es un par correcto
            const match = pairs.find(p => p.left === leftVal && p.right === rightVal);

            if (match) {
                selectedLeft.classList.remove("selected");
                selectedRight.classList.remove("selected");
                selectedLeft.classList.add("matched");
                selectedRight.classList.add("matched");
                solvedCount++;

                if (solvedCount === pairs.length) {
                    setTimeout(() => winActiveGame(5), 600);
                }
            } else {
                // No hay coincidencia
                setTimeout(() => {
                    selectedLeft.classList.remove("selected");
                    selectedRight.classList.remove("selected");
                }, 400);
            }
            selectedLeft = null;
            selectedRight = null;
        }
    }
}

// --- JUEGO 6: Aventura Matemática (Resolución de Problemas) ---
function buildAventuraMatematicaGame(container) {
    const problems = [
        {
            story: "Camila va a la feria del agricultor en Cartago y compra 3 kilos de papas a ¢600 el kilo y 2 kilos de tomates a ¢800 el kilo. Si paga con un billete de ¢5000, ¿cuánto recibe de vuelto?",
            q: "Elige la respuesta correcta:",
            opts: ["¢1800", "¢1600", "¢2200", "¢1400"],
            c: "¢1600"
        },
        {
            story: "Un autobús sale de San José hacia Limón con 42 pasajeros. En la parada de Guápiles se bajan 15 pasajeros y suben 8 pasajeros más. ¿Con cuántos pasajeros continúa el viaje?",
            q: "Elige la respuesta correcta:",
            opts: ["35 pasajeros", "27 pasajeros", "30 pasajeros", "38 pasajeros"],
            c: "35 pasajeros"
        }
    ];
    let curProbIdx = 0;

    function renderProblem() {
        if (curProbIdx >= problems.length) {
            winActiveGame(6);
            return;
        }

        const data = problems[curProbIdx];
        container.innerHTML = `
            <div class="adventure-game-container">
                <p style="text-align:center; font-weight:600;">Resuelve el problema (${curProbIdx + 1} de 2):</p>
                <div class="adventure-story-box">
                    <p>${data.story}</p>
                </div>
                <div class="adventure-options-list">
                    <p class="adventure-question-text">${data.q}</p>
                    ${data.opts.map(opt => `<button class="adventure-option-btn" data-opt="${opt}">${opt}</button>`).join('')}
                </div>
            </div>
        `;

        container.querySelectorAll(".adventure-option-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const choice = btn.getAttribute("data-opt");
                if (choice === data.c) {
                    curProbIdx++;
                    renderProblem();
                } else {
                    alert("Respuesta incorrecta. Lee con atención los datos y vuelve a calcular.");
                }
            });
        });
    }

    renderProblem();
}

// --- JUEGO 7: El Código Secreto (Patrones y Relaciones) ---
function buildCodigoSecretoGame(container) {
    const sequences = [
        { seq: [4, 8, 16, 32, "❓", 128], val: 64, desc: "Sucesión Geométrica: Cada número se multiplica por 2." },
        { seq: [3, 9, 15, 21, "❓", 33], val: 27, desc: "Sucesión Aritmética: A cada número se le suma 6." },
        { seq: [1, 3, 9, 27, "❓", 243], val: 81, desc: "Sucesión Geométrica: Multiplicamos por 3." }
    ];
    let curSeqIdx = 0;

    function renderSequence() {
        if (curSeqIdx >= sequences.length) {
            winActiveGame(7);
            return;
        }

        const data = sequences[curSeqIdx];
        container.innerHTML = `
            <div class="patron-game-container">
                <p style="text-align:center; font-weight:600;">Encuentra el patrón y escribe el número que falta (${curSeqIdx + 1} de 3):</p>
                <div class="patron-sequence-box">
                    ${data.seq.map(num => `
                        <div class="patron-number-bubble ${num === '❓' ? 'missing' : ''}">${num}</div>
                    `).join('')}
                </div>
                <div class="patron-input-box">
                    <input type="number" id="seq-input" placeholder="?" aria-label="Número faltante">
                    <button class="submit-game-btn" id="verify-patron">Verificar</button>
                </div>
            </div>
        `;

        document.getElementById("verify-patron").addEventListener("click", () => {
            const userVal = parseInt(document.getElementById("seq-input").value, 10);
            if (userVal === data.val) {
                curSeqIdx++;
                renderSequence();
            } else {
                alert("Ese número no es correcto. Observa la diferencia entre los primeros números.");
            }
        });
    }

    renderSequence();
}

// --- JUEGO 8: El Analista de Datos (Estadística Básica) ---
function buildAnalistaDatosGame(container) {
    // Encuesta: Deportes favoritos de 5.° Grado
    // Fútbol: 12, Baloncesto: 8, Voleibol: 4
    // Pregunta: ¿Cuál es la Moda del Deporte favorito?

    container.innerHTML = `
        <div class="stats-game-container">
            <p style="text-align:center; font-size:0.95rem;">
                Analiza el gráfico de barras que muestra las respuestas de una encuesta sobre el deporte favorito en 5.° Grado:
            </p>
            <div class="stats-chart-wrapper">
                <div class="stats-bar-item">
                    <div class="stats-bar-value">12</div>
                    <div class="stats-bar-graphic" style="height: 120px;"></div>
                    <div class="stats-bar-label">Fútbol</div>
                </div>
                <div class="stats-bar-item">
                    <div class="stats-bar-value">8</div>
                    <div class="stats-bar-graphic" style="height: 80px; background:var(--gradient-accent)"></div>
                    <div class="stats-bar-label">Basquet</div>
                </div>
                <div class="stats-bar-item">
                    <div class="stats-bar-value">4</div>
                    <div class="stats-bar-graphic" style="height: 40px; background:var(--gradient-orange)"></div>
                    <div class="stats-bar-label">Voley</div>
                </div>
            </div>
            
            <div class="stats-question-box" style="margin-top: 25px;">
                <p style="font-weight:700;">¿Cuál es la MODA de este conjunto de datos?</p>
                <div class="stats-options-grid">
                    <button class="stats-option-btn" data-val="Fútbol">Fútbol (12)</button>
                    <button class="stats-option-btn" data-val="Basquet">Basquet (8)</button>
                    <button class="stats-option-btn" data-val="Voley">Voley (4)</button>
                </div>
            </div>
        </div>
    `;

    container.querySelectorAll(".stats-option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const val = btn.getAttribute("data-val");
            if (val === "Fútbol") {
                winActiveGame(8);
            } else {
                alert("Incorrecto. Recuerda que la Moda es el dato que tiene la frecuencia más alta (el que más se repite).");
            }
        });
    });
}

// ==========================================================================
// CONTROL DE VICTORIAS Y ANIMACIÓN DE CONFETI
// ==========================================================================

function winActiveGame(id) {
    // Si la actividad no estaba completada, sumamos puntos y guardamos
    if (!AppState.completed.includes(id)) {
        AppState.completed.push(id);
        AppState.points += AppState.pointsPerActivity;
        saveProgress();
    }

    // Mostrar el contenedor de feedback
    const feedback = document.getElementById("game-feedback-container");
    feedback.classList.remove("hidden");

    // Lanzar confeti
    triggerConfetti();
}

// Motor de Confeti Canvas Ligero
let confettiActive = false;
function triggerConfetti() {
    if (confettiActive) return;
    confettiActive = true;

    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");

    // Ajustar canvas al tamaño de la pantalla
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ec4899", "#2dd4bf"];
    const particles = [];

    // Crear partículas
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - index / 3) * 15;

            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();
        });

        update();
    }

    let animationId = null;

    function update() {
        let remaining = 0;
        particles.forEach(p => {
            if (p.y < canvas.height) {
                remaining++;
            }
        });

        if (remaining > 0) {
            animationId = requestAnimationFrame(draw);
        } else {
            // Detener confeti
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            confettiActive = false;
            cancelAnimationFrame(animationId);
        }
    }

    animationId = requestAnimationFrame(draw);

    // Detener forzosamente después de 5 segundos
    setTimeout(() => {
        if (animationId) {
            cancelAnimationFrame(animationId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            confettiActive = false;
        }
    }, 5000);
}

// Redimensionar canvas al cambiar tamaño
window.addEventListener("resize", () => {
    const canvas = document.getElementById("confetti-canvas");
    if (canvas && confettiActive) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
