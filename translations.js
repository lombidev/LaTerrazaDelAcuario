// Translation data
const translations = {
    es: {
        nav: {
            home: 'Inicio',
            menu: 'Menú',
            location: 'Ubicación',
            contact: 'Contacto'
        },
        hero: {
            title: 'Sabores del Mediterráneo',
            subtitle: 'Descubre la frescura del mar en cada plato, en el corazón de Almuñécar',
            feature1: 'Pescado Fresco',
            feature2: 'Plaza Kuwait',
            feature3: 'Calidad Premium'
        },
        about: {
            title: 'Experiencia Gastronómica Única',
            text1: 'En La Terraza del Acuario, nos especializamos en traer lo mejor del mar a tu mesa. Ubicados en la hermosa Plaza Kuwait de Almuñécar, Granada, ofrecemos una experiencia culinaria inolvidable con vistas espectaculares y los mariscos más frescos de la costa.',
            text2: 'Cada plato es una celebración de la tradición mediterránea, preparado con ingredientes de la más alta calidad y el cariño de nuestra cocina familiar.'
        },
        menu: {
            title: 'Nuestro Menú',
            subtitle: 'Haz clic en cada categoría para ver el menú completo',
            starters: {
                title: 'Entrantes',
                desc: 'Gambas al ajillo, boquerones, croquetas y más'
            },
            fish: {
                title: 'Pescados',
                desc: 'Dorada, lubina, merluza y más variedades frescas'
            },
            meats: {
                title: 'Carnes',
                desc: 'Solomillo, entrecot, secreto ibérico y más'
            },
            drinks: {
                title: 'Vinos y Bebidas',
                desc: 'Selección de vinos blancos, tintos y bebidas'
            },
            viewMenu: 'Ver Menú →',
            note: '* Precios orientativos. Consulta disponibilidad según temporada'
        },
        location: {
            title: 'Encuéntranos',
            contact: 'Información de Contacto',
            address: 'Dirección',
            hours: 'Horario',
            schedule: 'Lunes - Domingo<br>12:00 - 16:00 / 19:00 - 23:00',
            phone: 'Teléfono',
            reservations: 'Reservas:',
            directions: 'Cómo Llegar'
        },
        footer: {
            tagline: 'Tu restaurante de confianza en Almuñécar',
            followUs: 'Síguenos',
            reservations: 'Reservas',
            callUs: 'Llámanos para reservar tu mesa',
            copyright: '© 2025 La Terraza del Acuario. Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            menu: 'Menu',
            location: 'Location',
            contact: 'Contact'
        },
        hero: {
            title: 'Mediterranean Flavors',
            subtitle: 'Discover the freshness of the sea in every dish, in the heart of Almuñécar',
            feature1: 'Fresh Fish',
            feature2: 'Plaza Kuwait',
            feature3: 'Premium Quality'
        },
        about: {
            title: 'Unique Gastronomic Experience',
            text1: 'At La Terraza del Acuario, we specialize in bringing the best of the sea to your table. Located in the beautiful Plaza Kuwait in Almuñécar, Granada, we offer an unforgettable culinary experience with spectacular views and the freshest seafood from the coast.',
            text2: 'Each dish is a celebration of Mediterranean tradition, prepared with the highest quality ingredients and the love of our family kitchen.'
        },
        menu: {
            title: 'Our Menu',
            subtitle: 'Click on each category to see the full menu',
            starters: {
                title: 'Starters',
                desc: 'Garlic shrimp, anchovies, croquettes and more'
            },
            fish: {
                title: 'Fish',
                desc: 'Sea bream, sea bass, hake and more fresh varieties'
            },
            meats: {
                title: 'Meats',
                desc: 'Sirloin, ribeye, Iberian secret and more'
            },
            drinks: {
                title: 'Wines & Drinks',
                desc: 'Selection of white and red wines and beverages'
            },
            viewMenu: 'View Menu →',
            note: '* Indicative prices. Check availability by season'
        },
        location: {
            title: 'Find Us',
            contact: 'Contact Information',
            address: 'Address',
            hours: 'Hours',
            schedule: 'Monday - Sunday<br>12:00 PM - 4:00 PM / 7:00 PM - 11:00 PM',
            phone: 'Phone',
            reservations: 'Reservations:',
            directions: 'Get Directions'
        },
        footer: {
            tagline: 'Your trusted restaurant in Almuñécar',
            followUs: 'Follow Us',
            reservations: 'Reservations',
            callUs: 'Call us to book your table',
            copyright: '© 2025 La Terraza del Acuario. All rights reserved.'
        }
    }
};

// Current language
let currentLang = 'es';

// Function to update text based on language
function updateLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];

        keys.forEach(key => {
            translation = translation[key];
        });

        element.innerHTML = translation;
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language switcher event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});

