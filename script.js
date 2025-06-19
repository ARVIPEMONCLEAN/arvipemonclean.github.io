// Datos completos de productos según el catálogo
const productos = [
    {
        id: 1,
        nombre: "DESENGRASANTE INDUSTRIAL PH ACIDO",
        descripcion: "Desengrasante multipropósito para uso doméstico, industrial y automotriz. Producto muy fuerte, utilice guantes de caucho y tapabocas.",
        categoria: ["domestico", "industrial", "automotriz"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 25000, codigo: "4L" },
            { tamaño: "Garrafa de 20 litros", precio: 95700, codigo: "20L" }
        ],
        tieneFragancia: false,
        modoUso: "Aplíquese en pequeñas porciones. En áreas con grasa excesiva, dejar actuar 5 minutos.",
        contraindicaciones: "Usar guantes y tapabocas. No ingerir."
    },
    {
        id: 2,
        nombre: "JABÓN LÍQUIDO MANOS",
        descripcion: "PH NEUTRO. Elimina de manera efectiva los gérmenes protegiendo las manos de la contaminación.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 28000, codigo: "4L" },
            { tamaño: "Garrafa de 20 litros", precio: 92000, codigo: "20L" }
        ],
        tieneFragancia: true,
        modoUso: "Humedecer manos, aplicar producto, frotar por 15 segundos y enjuagar.",
        contraindicaciones: "No ingerir. Evitar contacto con ojos."
    },
    {
        id: 3,
        nombre: "JABÓN PREMIUM",
        descripcion: "PH 8.5, amigable con la piel. Apto para ropa, pisos, madera, metales, plásticos, vidrio.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 27000, codigo: "4L" },
            { tamaño: "Garrafa de 20 litros", precio: 92000, codigo: "20L" }
        ],
        tieneFragancia: true,
        modoUso: "Aplíquese según necesidad. Rinde hasta 3 veces más que jabones corrientes.",
        contraindicaciones: "No aplicar en rostro. Evitar contacto con ojos."
    },
    {
        id: 4,
        nombre: "JABÓN LAVA LOZAS LÍQUIDO",
        descripcion: "Especial para lavado de utensilios de cocina. Elimina fácilmente todo tipo de grasas y suciedad.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 30000, codigo: "4L" },
            { tamaño: "Garrafa de 20 litros", precio: 100000, codigo: "20L" }
        ],
        tieneFragancia: true,
        modoUso: "Aplicar pequeña cantidad en esponja, frotar superficie y enjuagar.",
        contraindicaciones: "Provoca irritación ocular. No mezclar con alimentos."
    },
    {
        id: 5,
        nombre: "LIMPIADOR AROMATIZANTE PARA PISOS",
        descripcion: "PH Ácido. Fragancia concentrada que inspira limpieza. Apto para cerámica, baldosas, cemento.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 23000, codigo: "4L" },
            { tamaño: "Garrafa de 20 litros", precio: 65000, codigo: "20L" }
        ],
        tieneFragancia: true,
        modoUso: "Humedecer trapeador con producto y trapear pisos ya limpios.",
        contraindicaciones: "No devolver producto al frasco. No mezclar con otros productos."
    },
    {
        id: 6,
        nombre: "JABÓN PODER DEL REY",
        descripcion: "PH 8. Contiene bicarbonato y desengrasante concentrados. Apto para ropa muy sucia, baños.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 22500, codigo: "4L" },
            { tamaño: "Garrafa de 20 litros", precio: 85000, codigo: "20L" }
        ],
        tieneFragancia: true,
        modoUso: "Aplicar según necesidad. Rinde hasta 3 veces más que jabones corrientes.",
        contraindicaciones: "No aplicar en rostro. Usar protección en caso de alergias."
    },
    {
        id: 7,
        nombre: "JABÓN MULTIPROPÓSITO",
        descripcion: "PH 7, amigable con la piel. Apto para manos, loza, ropa, pisos, paredes.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 22500, codigo: "4L" },
            { tamaño: "Garrafa de 20 litros", precio: 85000, codigo: "20L" }
        ],
        tieneFragancia: true,
        modoUso: "Aplicar según necesidad. Sistema de recarga disponible.",
        contraindicaciones: "Evitar contacto con ojos. No dejar al sol."
    },
    {
        id: 8,
        nombre: "BLANQUEADOR 5.7%",
        descripcion: "Cloro blanqueador y desinfectante de alto rendimiento. Para ropa blanca, pisos, paredes.",
        categoria: ["domestico", "industrial"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 15500, codigo: "4L" },
            { tamaño: "Garrafa de 20 litros", precio: 38000, codigo: "20L" }
        ],
        tieneFragancia: false,
        modoUso: "Mezclar con agua según necesidad. No genera olor fuerte.",
        contraindicaciones: "Corrosivo para metales. Usar protección."
    },
    {
        id: 9,
        nombre: "SUAVIZANTE SIN PARABENOS",
        descripcion: "Para ropa y telas. Disponible en aromas floral y talco.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros (Floral)", precio: 25000, codigo: "4LF" },
            { tamaño: "Galón 4 litros (Talco)", precio: 25000, codigo: "4LT" },
            { tamaño: "Garrafa 20 litros (Floral)", precio: 80000, codigo: "20LF" },
            { tamaño: "Garrafa 20 litros (Talco)", precio: 80000, codigo: "20LT" }
        ],
        tieneFragancia: true,
        modoUso: "Agitar antes de usar. Disolver en agua antes de aplicar a la ropa.",
        contraindicaciones: "No aplicar directamente en la ropa."
    },
    {
        id: 10,
        nombre: "SILICONA MULTIPROPÓSITO",
        descripcion: "Producto puro sin glicerina ni tensoactivos. No corrosivo. Para dar brillo y protección.",
        categoria: ["domestico", "automotriz"],
        presentaciones: [
            { tamaño: "500 ml", precio: 15600, codigo: "500ML" },
            { tamaño: "1 litro", precio: 20000, codigo: "1L" },
            { tamaño: "Galón 4 litros", precio: 63000, codigo: "4L" },
            { tamaño: "Garrafa 20 litros", precio: 270000, codigo: "20L" }
        ],
        tieneFragancia: false,
        modoUso: "Aplicar pequeñas proporciones sobre superficie a relucir.",
        contraindicaciones: "Evitar contacto con ojos. No ingerir."
    },
    {
        id: 11,
        nombre: "AMBIENTADOR MULTIPROPÓSITO",
        descripcion: "Alta concentración de fragancia. No nocivo para la salud.",
        categoria: ["domestico", "automotriz"],
        presentaciones: [
            { tamaño: "500 ml", precio: 17000, codigo: "500ML" },
            { tamaño: "1 litro", precio: 24000, codigo: "1L" },
            { tamaño: "Galón 4 litros", precio: 65000, codigo: "4L" }
        ],
        tieneFragancia: true,
        modoUso: "Usar según gusto personal.",
        contraindicaciones: "No ingerir. Evitar contacto con ojos."
    },
    {
        id: 12,
        nombre: "SHAMPOO ESPUMA JACUZZI",
        descripcion: "PH neutro, amigable con la piel. No contiene glicerina ni formol.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 37000, codigo: "4L" },
            { tamaño: "Garrafa 20 litros", precio: 155000, codigo: "20L" }
        ],
        tieneFragancia: true,
        modoUso: "Aplicar 5 ml por uso en bañera personal.",
        contraindicaciones: "No mezclar con aceites. No aplicar en rostro."
    },
    {
        id: 13,
        nombre: "CERA MULTIPROPÓSITO",
        descripcion: "Para encerado y ultra brillado. Mezclar con silicona para protección UV.",
        categoria: ["domestico", "automotriz"],
        presentaciones: [
            { tamaño: "500 ml", precio: 8000, codigo: "500ML" },
            { tamaño: "1 litro", precio: 14000, codigo: "1L" },
            { tamaño: "Galón 4 litros", precio: 28200, codigo: "4L" },
            { tamaño: "Garrafa 20 litros", precio: 98500, codigo: "20L" }
        ],
        tieneFragancia: false,
        modoUso: "Aplicar en pocas proporciones, dejar actuar 3 segundos y pulir.",
        contraindicaciones: "No ingerir. Evitar contacto con ojos."
    },
    {
        id: 14,
        nombre: "JABÓN ESPUMA ACTIVA LAVA AUTOS",
        descripcion: "PH 4, especial para lavado de automotores. Crea capa protectora con filtro UV.",
        categoria: ["automotriz"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 25000, codigo: "4L" },
            { tamaño: "Garrafa 20 litros", precio: 74000, codigo: "20L" }
        ],
        tieneFragancia: false,
        modoUso: "Mezclar en agua y administrar a presión.",
        contraindicaciones: "No aplicar en rostro. Usar protección."
    },
    {
        id: 15,
        nombre: "DESENGRASANTE INDUSTRIAL SEMIESPESO PH ALCALINO",
        descripcion: "Especial para lavado de automotores en establecimientos especializados.",
        categoria: ["industrial", "automotriz"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 25000, codigo: "4L" },
            { tamaño: "Garrafa 20 litros", precio: 95700, codigo: "20L" }
        ],
        tieneFragancia: false,
        modoUso: "Mezclar en agua y administrar a presión. Dejar actuar 1 minuto.",
        contraindicaciones: "Usar protección. No mezclar con otros productos."
    },
    {
        id: 16,
        nombre: "ABRILLANTADOR FORMULA ULTRA",
        descripcion: "Especial para recubrimiento y protección de llantas y plásticos. Protege por 3 meses.",
        categoria: ["automotriz"],
        presentaciones: [
            { tamaño: "1 kilo", precio: 19000, codigo: "1KG" },
            { tamaño: "Galón 4 kilos", precio: 60000, codigo: "4KG" },
            { tamaño: "Garrafa 20 kilos", precio: 232000, codigo: "20KG" }
        ],
        tieneFragancia: false,
        modoUso: "Mezclar en agua y aplicar con franela limpia.",
        contraindicaciones: "Evitar contacto con ojos. No ingerir."
    },
    {
        id: 17,
        nombre: "LAVADO EN SECO",
        descripcion: "Para limpieza sin agua. Con efecto ceroso para brillo.",
        categoria: ["automotriz"],
        presentaciones: [
            { tamaño: "1 litro", precio: 24000, codigo: "1L" },
            { tamaño: "Galón 4 litros", precio: 62000, codigo: "4L" },
            { tamaño: "Garrafa 20 litros", precio: 258000, codigo: "20L" }
        ],
        tieneFragancia: false,
        modoUso: "Agitar antes de usar. Aplicar con atomizador.",
        contraindicaciones: "No aplicar en rostro. Usar en área ventilada."
    },
    {
        id: 18,
        nombre: "OXÍGENO ACTIVO",
        descripcion: "Altamente alcalino. Anti-bacterial, alguicida, repele bichos rastreros.",
        categoria: ["domestico"],
        presentaciones: [
            { tamaño: "Galón 4 litros", precio: 25000, codigo: "4L" },
            { tamaño: "Garrafa 20 litros", precio: 95500, codigo: "20L" }
        ],
        tieneFragancia: true,
        modoUso: "100 ml en lavadora para desmanchar. 1:1 en agua para pisos.",
        contraindicaciones: "Usar guantes. No mezclar con otros productos."
    },
    {
        id: 19,
        nombre: "DESMANCHADOR",
        descripcion: "Altamente alcalino. Para tela, tapizados, plásticos, madera, metal, vidrio.",
        categoria: ["domestico", "automotriz"],
        presentaciones: [
            { tamaño: "1 litro", precio: 18000, codigo: "1L" },
            { tamaño: "Galón 4 litros", precio: 37500, codigo: "4L" },
            { tamaño: "Garrafa 20 litros", precio: 140000, codigo: "20L" }
        ],
        tieneFragancia: false,
        modoUso: "Aplicar con atomizador y cepillo de cerdas suaves.",
        contraindicaciones: "Usar guantes y tapabocas. No ingerir."
    }
];

// Lista de fragancias disponibles
const fragancias = [
    "Neutro", "Lavanda", "Floral", "Talco", "Bebé", 
    "Maracuyá", "Frutos Rojos", "Citronela", "Pino", 
    "Chicle", "Canela", "Coco Limón", "Carro Nuevo"
];

// Variables del DOM
const productsContainer = document.getElementById('products-container');
const cartFloat = document.getElementById('cart-float');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckout = document.getElementById('close-checkout');
const customerForm = document.getElementById('customer-form');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search');

// Carrito de compras
let carrito = [];

// Función para calcular el descuento (10% si 3 productos o más)
function calculateDiscount() {
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    return totalItems >= 3 ? 0.1 : 0; // >= para aplicar desde 3 productos
}

function renderProducts(products) {
    productsContainer.innerHTML = '';
    
    if (products.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No se encontraron productos</p>';
        return;
    }
    
    products.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Generar nombre de imagen compatible
        const imageName = producto.nombre.toLowerCase()
            .replace(/[^a-z0-9áéíóúüñ]/g, '-')  // Reemplazar caracteres especiales
            .replace(/-+/g, '-')                // Eliminar guiones múltiples
            .replace(/^-|-$/g, '');             // Eliminar guiones al inicio/final
        
        // Imagen del producto con manejo de errores
        const imageHTML = `
            <div class="product-image">
                <img src="images/${imageName}.jpg" alt="${producto.nombre}" 
                     onerror="this.onerror=null;this.src='images/default-product.jpg';this.alt='Imagen no disponible'">
            </div>
        `;
        
        // Opciones de presentación
        const optionsHTML = producto.presentaciones.map(pres => `
            <option value="${pres.codigo}" data-precio="${pres.precio}">
                ${pres.tamaño} - $${pres.precio.toLocaleString()}
            </option>
        `).join('');
        
        // Opciones de fragancia (si aplica)
        const fragranceHTML = producto.tieneFragancia ? `
            <div class="option-group">
                <label><i class="fas fa-spray-can"></i> Fragancia:</label>
                <select class="product-fragrance">
                    ${fragancias.map(frag => `<option>${frag}</option>`).join('')}
                </select>
            </div>
        ` : '';
        
        productCard.innerHTML = `
            ${imageHTML}
            <div class="product-info">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                
                <div class="product-details">
                    <p><strong>Modo de uso:</strong> ${producto.modoUso}</p>
                    <p><strong>Precauciones:</strong> ${producto.contraindicaciones}</p>
                </div>
                
                <div class="product-options">
                    <div class="option-group">
                        <label><i class="fas fa-box-open"></i> Presentación:</label>
                        <select class="product-presentation">
                            ${optionsHTML}
                        </select>
                    </div>
                    
                    ${fragranceHTML}
                    
                    <div class="option-group">
                        <label><i class="fas fa-calculator"></i> Cantidad:</label>
                        <input type="number" class="product-quantity" min="1" value="1">
                    </div>
                </div>
                
                <button class="add-to-cart" data-id="${producto.id}">
                    <i class="fas fa-cart-plus"></i> Agregar al carrito
                </button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Agregar event listeners a los botones de agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(e) {
    const button = e.target.closest('.add-to-cart');
    const productId = parseInt(button.dataset.id);
    const productCard = button.closest('.product-card');
    
    const producto = productos.find(p => p.id === productId);
    const presentacionSelect = productCard.querySelector('.product-presentation');
    const selectedOption = presentacionSelect.options[presentacionSelect.selectedIndex];
    const precio = parseFloat(selectedOption.dataset.precio);
    const presentacion = selectedOption.text;
    const cantidad = parseInt(productCard.querySelector('.product-quantity').value);
    
    let fragancia = '';
    if (producto.tieneFragancia) {
        fragancia = productCard.querySelector('.product-fragrance').value;
    }
    
    // Verificar si el producto ya está en el carrito
    const existingItem = carrito.find(item => 
        item.id === productId && 
        item.presentacion === presentacion &&
        item.fragancia === fragancia
    );
    
    if (existingItem) {
        existingItem.cantidad += cantidad;
    } else {
        carrito.push({
            id: productId,
            nombre: producto.nombre,
            presentacion,
            precio,
            cantidad,
            fragancia,
            image: `images/${producto.nombre.toLowerCase().replace(/[^a-z0-9áéíóúüñ]/g, '-')}.jpg`
        });
    }
    
    updateCart();
    showCartNotification();
}

function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i> Producto agregado al carrito
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function updateCart() {
    // Actualizar contador
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartCount.textContent = totalItems;
    
    // Mostrar/ocultar botón de checkout
    checkoutBtn.disabled = carrito.length === 0;
    
    // Si el carrito está abierto, actualizar los items
    if (cartModal.style.display === 'flex') {
        renderCartItems();
    }
}

function renderCartItems() {
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        return;
    }
    
    cartItems.innerHTML = '';
    let subtotal = 0;
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    
    // Mostrar banner de promoción si aplica (3 o más productos)
    if (totalItems >= 3) {
        const discountBanner = document.createElement('div');
        discountBanner.className = 'promotion-banner';
        discountBanner.innerHTML = `
            🎉 ¡Descuento del 10% aplicado! Por comprar 3 productos o más
            <span class="discount-badge">-10%</span>
        `;
        cartItems.appendChild(discountBanner);
    }
    
    // Mostrar items del carrito
    carrito.forEach((item, index) => {
        const itemTotal = item.precio * item.cantidad;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.nombre}" 
                     onerror="this.onerror=null;this.src='images/default-product.jpg';this.alt='Imagen no disponible'">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.nombre}</h4>
                <p class="cart-item-details">${item.presentacion}</p>
                ${item.fragancia ? `<p class="cart-item-details">Fragancia: ${item.fragancia}</p>` : ''}
                <p class="cart-item-price">$${(item.precio * item.cantidad).toLocaleString()}</p>
                
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity" data-index="${index}">-</button>
                        <input type="number" value="${item.cantidad}" min="1" class="item-quantity" data-index="${index}">
                        <button class="increase-quantity" data-index="${index}">+</button>
                    </div>
                    <span class="remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i> Eliminar
                    </span>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Calcular descuento y total
    const discount = calculateDiscount();
    const discountAmount = discount * subtotal;
    const total = subtotal - discountAmount;
    
    // Mostrar resumen con descuento
    const summaryHTML = `
        <div class="cart-summary">
            <div class="cart-total-line">
                <span>Subtotal:</span>
                <span>$${subtotal.toLocaleString()}</span>
            </div>
            
            ${discount > 0 ? `
            <div class="cart-total-line">
                <span>Descuento (10%):</span>
                <span class="cart-discount">-$${discountAmount.toLocaleString()}</span>
            </div>
            ` : ''}
            
            <div class="cart-total-line total">
                <span>Total:</span>
                <span>$${total.toLocaleString()}</span>
            </div>
            
            <button class="checkout-btn" id="checkout-btn">
                <i class="fas fa-check-circle"></i> Finalizar Pedido
            </button>
        </div>
    `;
    
    cartItems.insertAdjacentHTML('beforeend', summaryHTML);
    
    // Agregar event listeners para los controles del carrito
    document.getElementById('checkout-btn').addEventListener('click', () => {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'flex';
    });
    
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            if (carrito[index].cantidad > 1) {
                carrito[index].cantidad--;
                renderCartItems();
                updateCart();
            }
        });
    });
    
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            carrito[index].cantidad++;
            renderCartItems();
            updateCart();
        });
    });
    
    document.querySelectorAll('.item-quantity').forEach(input => {
        input.addEventListener('change', (e) => {
            const index = parseInt(e.target.dataset.index);
            const newQuantity = parseInt(e.target.value);
            if (newQuantity > 0) {
                carrito[index].cantidad = newQuantity;
                renderCartItems();
                updateCart();
            } else {
                e.target.value = carrito[index].cantidad;
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            carrito.splice(index, 1);
            renderCartItems();
            updateCart();
        });
    });
}

function filterProducts() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredProducts = productos;
    
    // Filtrar por categoría
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(producto => 
            producto.categoria.includes(category)
        );
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(producto => 
            producto.nombre.toLowerCase().includes(searchTerm) ||
            producto.descripcion.toLowerCase().includes(searchTerm)
        );
    }
    
    renderProducts(filteredProducts);
}

function generateWhatsAppMessage() {
    const nombre = document.getElementById('customer-name').value;
    const direccion = document.getElementById('customer-address').value;
    const telefono = document.getElementById('customer-phone').value;
    const fecha = document.getElementById('delivery-date').value;
    const notas = document.getElementById('customer-notes').value;
    
    // Formatear fecha
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    // Generar código de factura
    const codigoFactura = 'ARV-' + Math.floor(100000 + Math.random() * 900000);
    
    // Crear resumen del pedido
    let resumenPedido = '';
    let subtotal = 0;
    
    carrito.forEach(item => {
        const itemTotal = item.precio * item.cantidad;
        subtotal += itemTotal;
        
        resumenPedido += `\n- ${item.nombre} (${item.presentacion})`;
        if (item.fragancia) {
            resumenPedido += ` - Fragancia: ${item.fragancia}`;
        }
        resumenPedido += `\n  Cantidad: ${item.cantidad} x $${item.precio.toLocaleString()} = $${itemTotal.toLocaleString()}`;
    });
    
    // Calcular descuento y total
    const discount = calculateDiscount();
    const discountAmount = discount * subtotal;
    const total = subtotal - discountAmount;
    
    // Crear mensaje
    let mensaje = `*NUEVO PEDIDO ARVIPEMON CLEAN*%0A%0A`;
    mensaje += `*Código de Factura:* ${codigoFactura}%0A`;
    
    // Añadir información de descuento si aplica
    if (discount > 0) {
        mensaje += `*¡Descuento aplicado!* (${discount*100}% por comprar 3 productos o más)%0A`;
    }
    
    mensaje += `*Fecha de Entrega:* ${fechaFormateada}%0A%0A`;
    mensaje += `*Datos del Cliente:*%0A`;
    mensaje += `Nombre: ${nombre}%0A`;
    mensaje += `Dirección: ${direccion}%0A`;
    mensaje += `Teléfono: ${telefono}%0A`;
    mensaje += `%0A*Detalles del Pedido:*%0A`;
    mensaje += resumenPedido.replace(/\n/g, '%0A');
    
    // Añadir resumen financiero
    mensaje += `%0A%0A*RESUMEN DE PAGO*%0A`;
    mensaje += `Subtotal: $${subtotal.toLocaleString()}%0A`;
    
    if (discount > 0) {
        mensaje += `Descuento (${discount*100}%): -$${discountAmount.toLocaleString()}%0A`;
    }
    
    mensaje += `*TOTAL A PAGAR: $${total.toLocaleString()}*%0A`;
    
    if (notas) {
        mensaje += `%0A*Notas adicionales:*%0A${notas.replace(/\n/g, '%0A')}`;
    }
    
    return mensaje;
}

function generateInvoicePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const nombre = document.getElementById('customer-name').value;
    const fecha = new Date().toLocaleDateString('es-ES');
    const codigoFactura = 'ARV-' + Math.floor(100000 + Math.random() * 900000);
    
    // Calcular totales
    const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    const discount = calculateDiscount();
    const discountAmount = discount * subtotal;
    const total = subtotal - discountAmount;
    
    // Encabezado
    doc.setFontSize(18);
    doc.setTextColor(40, 167, 69); // Verde ARVIPEMON
    doc.text('ARVIPEMON CLEAN', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Factura de Venta', 105, 30, { align: 'center' });
    
    // Información de la factura
    doc.setFontSize(10);
    doc.text(`Número de Factura: ${codigoFactura}`, 14, 40);
    doc.text(`Fecha: ${fecha}`, 14, 45);
    doc.text(`Cliente: ${nombre}`, 14, 50);
    
    // Tabla de productos
    const headers = [['Producto', 'Presentación', 'Cantidad', 'Precio', 'Total']];
    const data = carrito.map(item => [
        item.nombre,
        item.presentacion.split(' - ')[0],
        item.cantidad,
        `$${item.precio.toLocaleString()}`,
        `$${(item.precio * item.cantidad).toLocaleString()}`
    ]);
    
    doc.autoTable({
        startY: 60,
        head: headers,
        body: data,
        theme: 'grid',
        headStyles: {
            fillColor: [40, 167, 69], // Verde ARVIPEMON
            textColor: 255
        },
        styles: {
            fontSize: 8
        },
        columnStyles: {
            0: { cellWidth: 'auto' },
            1: { cellWidth: 'auto' },
            2: { cellWidth: 'auto' },
            3: { cellWidth: 'auto' },
            4: { cellWidth: 'auto' }
        }
    });
    
    // Totales
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.text(`Subtotal: $${subtotal.toLocaleString()}`, 140, finalY);
    
    if (discount > 0) {
        doc.text(`Descuento (10%): -$${discountAmount.toLocaleString()}`, 140, finalY + 5);
    }
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(`TOTAL: $${total.toLocaleString()}`, 140, finalY + (discount > 0 ? 10 : 5));
    
    // Guardar el PDF
    doc.save(`factura-arvipernon-${codigoFactura}.pdf`);
    
    return codigoFactura;
}

// Event Listeners
cartFloat.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    renderCartItems();
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

closeCheckout.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

customerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const mensajeWhatsApp = generateWhatsAppMessage();
    const urlWhatsApp = `https://wa.me/573012100676?text=${mensajeWhatsApp}`;
    
    const codigoFactura = generateInvoicePDF();
    
    window.open(urlWhatsApp, '_blank');
    
    carrito = [];
    updateCart();
    checkoutModal.style.display = 'none';
    
    alert(`¡Pedido enviado con éxito! Se ha abierto WhatsApp para que completes el proceso.\nCódigo de factura: ${codigoFactura}`);
});

categoryFilter.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (e.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
});

// Inicializar la aplicación
renderProducts(productos);
updateCart();