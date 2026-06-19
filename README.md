# 🚀 Dashboard Pro - Dropshipping Analytics

Dashboard profesional para tracking completo de negocios de dropshipping con pago contra entrega (COD).

## ✨ Características

### 📊 **Overview Completo**
- KPIs principales (Ganancia, Pedidos, ROAS, Conversión)
- Embudo de conversión visualizado
- Inversión publicitaria TikTok vs Meta
- Top productos del mes

### 📦 **Análisis por Producto**
- Rentabilidad individual
- Tasa de entrega
- Estado activo/pausado
- Métricas detalladas

### 🎯 **Embudo de Conversión**
- Landing → WhatsApp → Confirmados → Entregados
- Gráficas de confirmación diaria
- % Devolución por producto

### 📱 **Performance Publicitaria**
- TikTok Ads vs Meta Ads
- CPA, ROAS, Conversiones
- Comparativa lado a lado

### ✏️ **Carga de Datos**
- Formularios para ingresar datos de Dropi
- Pedidos, publicidad, costos
- Cálculos automáticos

## 🎨 Diseño

- **Tema:** Negro con acentos celeste neón
- **Estilo:** Moderno, profesional, tipo SaaS
- **Responsive:** 100% adaptable a móvil
- **Animaciones:** Suaves y elegantes
- **Gráficas:** Chart.js integrado

## 🚀 Instalación

### **Subir a Hostinger:**

1. Descarga los archivos del repositorio
2. Entra a tu panel de Hostinger
3. Abre File Manager
4. Ve a `public_html/dashboard/`
5. Sube estos archivos:
   - `index.html`
   - `styles.css`
   - `script.js`

### **Acceso:**
```
https://tu-dominio.hostingersite.com/dashboard/
```

## 📋 Uso

### **1. Overview**
- Vista general de todas las métricas
- Dashboard principal al entrar

### **2. Productos**
- Análisis detallado por producto
- Rentabilidad individual

### **3. Conversión**
- Embudo completo
- Tasa de confirmación
- % Devolución

### **4. Publicidad**
- Comparativa TikTok vs Meta
- Métricas de rendimiento

### **5. Cargar Datos**
- Ingresa datos diarios de Dropi
- Formularios separados por categoría:
  - **Pedidos:** Shopify, Confirmados, Entregados
  - **Publicidad:** TikTok, Meta, CPA
  - **Costos:** Producto, Flete, Admin

## 💾 Persistencia de Datos

Los datos se guardan automáticamente en **localStorage** del navegador:
- No necesitas backend
- Persiste entre sesiones
- Cálculos automáticos

## 🔄 Próximos Pasos (APIs)

### **Fase 2: Automatización**
- Shopify API → Pedidos automáticos
- TikTok Ads API → Gastos en tiempo real
- Meta Ads API → Conversiones automáticas
- Dropi Webhooks → Confirmaciones en vivo

## 🎯 Métricas Calculadas

### **Ganancia Neta**
```
Ingresos (Dropi) - Gastos Ads - Costos Producto - Gastos Admin
```

### **Tasa de Confirmación**
```
(Pedidos Confirmados / Pedidos Shopify) × 100
```

### **ROAS**
```
Ingresos / Gastos Publicidad
```

### **% Entrega**
```
(Entregados / Confirmados) × 100
```

## 🛠️ Tecnologías

- **HTML5** - Estructura
- **CSS3** - Diseño (Grid, Flexbox, Animations)
- **JavaScript (Vanilla)** - Lógica
- **Chart.js** - Gráficas
- **Font Awesome** - Iconos
- **LocalStorage** - Persistencia

## 📱 Responsive

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1366px)
- ✅ Mobile (320px - 768px)

## 🎨 Paleta de Colores

```css
--bg-primary: #0a0e1a       /* Negro principal */
--bg-secondary: #111827      /* Negro secundario */
--bg-tertiary: #1a202e       /* Negro terciario */
--accent-cyan: #22d3ee       /* Celeste neón */
--accent-cyan-dark: #06b6d4  /* Celeste oscuro */
--accent-cyan-light: #67e8f9 /* Celeste claro */
```

## 📊 Estructura de Datos

```javascript
dashboardData = {
    gananciaTotal: 2187.97,
    pedidosShopify: 400,
    pedidosConfirmados: 320,
    pedidosEntregados: 256,
    tasaConfirmacion: 80,
    roas: 2.8,
    gastoTiktok: 127.72,
    gastoMeta: 100.00,
    productos: [...]
}
```

## 🔐 Seguridad

- No requiere autenticación (versión 1.0)
- Datos guardados localmente
- Sin conexión a bases de datos externas

## 📈 Roadmap

- [x] Dashboard Overview
- [x] Análisis por Producto
- [x] Embudo de Conversión
- [x] Performance Ads
- [x] Formularios de Input
- [ ] Integración Shopify API
- [ ] Integración TikTok Ads API
- [ ] Integración Meta Ads API
- [ ] Backend con Node.js
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Autenticación
- [ ] Exportar reportes PDF
- [ ] Notificaciones push
- [ ] Dashboard móvil nativo

## 💬 Soporte

Si necesitas ayuda o personalizaciones:
- Revisa el código fuente (está comentado)
- Modifica los colores en `styles.css`
- Ajusta los datos en `script.js`

## 🚀 Hecho con ❤️ por Kiro

Dashboard creado específicamente para negocios de dropshipping con COD (pago contra entrega).

---

**Versión:** 1.0.0  
**Última actualización:** Junio 2026  
**Licencia:** MIT
