// Dashboard Data
let dashboardData = {
    gananciaTotal: 2187.97,
    pedidosShopify: 400,
    pedidosWhatsapp: 320,
    pedidosConfirmados: 320,
    pedidosEntregados: 256,
    tasaConfirmacion: 80,
    roas: 2.8,
    gastoTiktok: 127.72,
    gastoMeta: 100.00,
    totalGastado: 227.72,
    cpa: 1.88,
    productos: [
        {
            nombre: 'SHILAJIT',
            confirmados: 24,
            entregados: 15,
            tasaEntrega: 62.5,
            ganancia: 227.72,
            activo: true
        },
        {
            nombre: 'NIÑ@',
            confirmados: 8,
            entregados: 24,
            tasaEntrega: 33.3,
            ganancia: -16.83,
            activo: false
        },
        {
            nombre: 'OLLAR CRUZ Y CORONILLA',
            confirmados: 9,
            entregados: 5,
            tasaEntrega: 55.6,
            ganancia: 33.78,
            activo: true
        }
    ]
};

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    updateDashboard();
    initCharts();
    loadSavedData();
});

// Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });
}

function switchSection(sectionId) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    
    // Update sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Update title
    const titles = {
        overview: 'Overview',
        productos: 'Análisis por Producto',
        conversion: 'Embudo de Conversión',
        ads: 'Performance Publicitaria',
        input: 'Cargar Datos'
    };
    document.getElementById('section-title').textContent = titles[sectionId];
}

// Update Dashboard
function updateDashboard() {
    // KPIs
    document.getElementById('gananciaTotal').textContent = `$${dashboardData.gananciaTotal.toFixed(2)}`;
    document.getElementById('pedidosConfirmados').textContent = dashboardData.pedidosConfirmados;
    document.getElementById('tasaConfirmacion').textContent = `${dashboardData.tasaConfirmacion}%`;
    document.getElementById('roas').textContent = `${dashboardData.roas.toFixed(1)}x`;
    
    // Conversion
    document.getElementById('pedidosShopify').textContent = dashboardData.pedidosShopify;
    document.getElementById('pedidosWhatsapp').textContent = dashboardData.pedidosWhatsapp;
    document.getElementById('pedidosReales').textContent = dashboardData.pedidosConfirmados;
    document.getElementById('pedidosEntregados').textContent = dashboardData.pedidosEntregados;
    
    // Update products table
    updateProductsTable();
    
    // Update current month
    const now = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    document.getElementById('currentMonth').textContent = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
}

function updateProductsTable() {
    const tbody = document.getElementById('topProductos');
    tbody.innerHTML = '';
    
    dashboardData.productos.forEach(producto => {
        const tr = document.createElement('tr');
        const inicial = producto.nombre.charAt(0);
        const badgeClass = producto.tasaEntrega > 60 ? 'success' : producto.tasaEntrega > 40 ? 'warning' : 'danger';
        const statusClass = producto.activo ? 'active' : 'paused';
        const statusText = producto.activo ? 'Activo' : 'En pausa';
        
        tr.innerHTML = `
            <td>
                <div class="product-cell">
                    <div class="product-avatar">${inicial}</div>
                    <span>${producto.nombre}</span>
                </div>
            </td>
            <td>${producto.confirmados}</td>
            <td>${producto.entregados}</td>
            <td><span class="badge ${badgeClass}">${producto.tasaEntrega.toFixed(1)}%</span></td>
            <td class="amount">$${producto.ganancia.toFixed(2)}</td>
            <td><span class="status-dot ${statusClass}"></span> ${statusText}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Charts
function initCharts() {
    initFunnelChart();
    initConfirmacionChart();
    initDevolucionChart();
}

function initFunnelChart() {
    const ctx = document.getElementById('funnelChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Landing', 'WhatsApp', 'Confirmados', 'Entregados'],
            datasets: [{
                label: 'Pedidos',
                data: [
                    dashboardData.pedidosShopify,
                    dashboardData.pedidosWhatsapp,
                    dashboardData.pedidosConfirmados,
                    dashboardData.pedidosEntregados
                ],
                backgroundColor: [
                    'rgba(34, 211, 238, 0.8)',
                    'rgba(34, 211, 238, 0.6)',
                    'rgba(34, 211, 238, 0.4)',
                    'rgba(34, 211, 238, 0.2)'
                ],
                borderColor: 'rgba(34, 211, 238, 1)',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(31, 41, 55, 0.5)'
                    },
                    ticks: {
                        color: '#9ca3af'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9ca3af'
                    }
                }
            }
        }
    });
}

function initConfirmacionChart() {
    const ctx = document.getElementById('confirmacionChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
                label: '% Confirmación',
                data: [75, 80, 78, 85, 82, 80, 83],
                borderColor: 'rgba(34, 211, 238, 1)',
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: 'rgba(34, 211, 238, 1)',
                pointBorderColor: '#0a0e1a',
                pointBorderWidth: 2,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(31, 41, 55, 0.5)'
                    },
                    ticks: {
                        color: '#9ca3af',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9ca3af'
                    }
                }
            }
        }
    });
}

function initDevolucionChart() {
    const ctx = document.getElementById('devolucionChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dashboardData.productos.map(p => p.nombre),
            datasets: [{
                data: dashboardData.productos.map(p => 100 - p.tasaEntrega),
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(34, 211, 238, 0.8)'
                ],
                borderColor: '#0a0e1a',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#9ca3af',
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Form Handlers
function savePedidos(event) {
    event.preventDefault();
    
    dashboardData.pedidosShopify = parseInt(document.getElementById('inputShopify').value) || dashboardData.pedidosShopify;
    dashboardData.pedidosConfirmados = parseInt(document.getElementById('inputConfirmados').value) || dashboardData.pedidosConfirmados;
    dashboardData.pedidosEntregados = parseInt(document.getElementById('inputEntregados').value) || dashboardData.pedidosEntregados;
    
    // Calcular tasa de confirmación
    if (dashboardData.pedidosShopify > 0) {
        dashboardData.tasaConfirmacion = Math.round((dashboardData.pedidosConfirmados / dashboardData.pedidosShopify) * 100);
    }
    
    saveToLocalStorage();
    updateDashboard();
    showToast('✅ Pedidos actualizados correctamente');
    
    // Clear form
    event.target.reset();
}

function saveAds(event) {
    event.preventDefault();
    
    dashboardData.gastoTiktok = parseFloat(document.getElementById('inputTiktok').value) || dashboardData.gastoTiktok;
    dashboardData.gastoMeta = parseFloat(document.getElementById('inputMeta').value) || dashboardData.gastoMeta;
    dashboardData.cpa = parseFloat(document.getElementById('inputCPA').value) || dashboardData.cpa;
    dashboardData.totalGastado = dashboardData.gastoTiktok + dashboardData.gastoMeta;
    
    saveToLocalStorage();
    updateDashboard();
    showToast('✅ Datos de publicidad actualizados');
    
    event.target.reset();
}

function saveCostos(event) {
    event.preventDefault();
    
    const costoProducto = parseFloat(document.getElementById('inputProducto').value) || 0;
    const costoFlete = parseFloat(document.getElementById('inputFlete').value) || 0;
    const gastosAdmin = parseFloat(document.getElementById('inputAdmin').value) || 0;
    
    // Aquí podrías calcular la ganancia con estos datos
    // Por ahora solo guardamos
    
    saveToLocalStorage();
    showToast('✅ Costos actualizados correctamente');
    
    event.target.reset();
}

// Local Storage
function saveToLocalStorage() {
    localStorage.setItem('dashboardData', JSON.stringify(dashboardData));
}

function loadSavedData() {
    const saved = localStorage.getItem('dashboardData');
    if (saved) {
        dashboardData = JSON.parse(saved);
        updateDashboard();
    }
}

// Refresh
function refreshData() {
    const btn = document.getElementById('refreshBtn');
    btn.style.animation = 'spin 1s linear';
    
    setTimeout(() => {
        btn.style.animation = '';
        updateDashboard();
        showToast('🔄 Datos actualizados');
    }, 1000);
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
