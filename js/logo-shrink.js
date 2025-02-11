
ScrollTrigger.create({
animation: gsap.from(".logo", {
    y: "50vh",
    scale: 5,
    yPercent: -50,
}),
scrub: true,
trigger: ".content",
start: "top bottom",
endTrigger: ".content",
end: "top center",
});

/* Scroll REveal */
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 500,
    delay: 0
})

ScrollReveal().reveal('.text-box');
ScrollReveal().reveal('.demo-phone');

/* Carousel */
document.addEventListener("DOMContentLoaded", () => {
  const modules = [
    {
      title: "Finanzas y Contabilidad",
      description:
        "Optimiza la gestión financiera con herramientas de contabilidad general, conciliaciones bancarias y reportes detallados. Automatiza la facturación electrónica y cumple con normativas fiscales sin esfuerzo.",
      video: "./assets/finance.mp4",
    },
    {
      title: "Ventas y Facturación",
      description:
        "Desde la cotización hasta la facturación automática, controla pedidos, clientes y precios. Integración con sistemas POS para una experiencia de venta fluida y sin errores.",
      video: "./assets/sales.mp4",
    },
    {
      title: "Compras y Proveedores",
      description:
        "Gestiona órdenes de compra, evalúa proveedores y automatiza pagos. Controla la recepción de productos con herramientas avanzadas de seguimiento y verificación.",
      video: "./assets/purchases.mp4",
    },
    {
      title: "Inventario y Almacenes",
      description:
        "Supervisa tu stock en tiempo real con alertas automáticas. Administra múltiples almacenes y mantén la trazabilidad de productos con control de lotes, series y fechas de vencimiento.",
      video: "./assets/inventory.mp4",
    },
    {
      title: "Producción y Manufactura",
      description:
        "Planifica y controla órdenes de producción con herramientas de MRP. Optimiza costos, gestiona desperdicios y sincroniza tu línea de producción con la demanda del mercado.",
      video: "./assets/production.mp4",
    },
    {
      title: "Recursos Humanos y Nómina",
      description:
        "Gestiona empleados, contratos y turnos con facilidad. Automatiza el cálculo de nómina, beneficios y evaluaciones de desempeño para optimizar la administración del talento.",
      video: "./assets/hr.mp4",
    },
    {
      title: "Gestión de Proyectos",
      description:
        "Planifica, ejecuta y analiza proyectos con herramientas avanzadas de seguimiento. Controla presupuestos, optimiza tiempos y genera reportes detallados de productividad.",
      video: "./assets/projects.mp4",
    },
    {
      title: "CRM (Gestión de Clientes)",
      description:
        "Lleva un control completo del ciclo de vida del cliente. Automatiza marketing, gestiona prospectos y brinda soporte postventa con herramientas avanzadas de análisis de satisfacción.",
      video: "./assets/crm.mp4",
    },
    {
      title: "Inteligencia de Negocios (BI)",
      description:
        "Transforma datos en decisiones estratégicas con dashboards en tiempo real. Analiza tendencias, genera reportes personalizados y predice escenarios de negocio con herramientas de BI.",
      video: "./assets/bi.mp4",
    },
    {
      title: "Integraciones y Personalización",
      description:
        "Conecta tu sistema con APIs externas y personaliza flujos de trabajo. Soporta múltiples monedas e idiomas, garantizando una experiencia adaptable a cualquier empresa.",
      video: "./assets/integrations.mp4",
    },
  ];

  let currentIndex = 0;

  const titleElement = document.getElementById("module-title");
  const descriptionElement = document.getElementById("module-description");
  const videoElement = document.getElementById("module-video");
  const videoSource = document.getElementById("video-source");

  document.getElementById("next-btn").addEventListener("click", () => changeSlide(1));
  document.getElementById("prev-btn").addEventListener("click", () => changeSlide(-1));

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + modules.length) % modules.length;

    gsap.to([titleElement, descriptionElement], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        titleElement.textContent = modules[currentIndex].title;
        descriptionElement.textContent = modules[currentIndex].description;

        gsap.to([titleElement, descriptionElement], {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      }
    });

    // Cambio de video con animación suave
    gsap.to(videoElement, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        videoSource.src = modules[currentIndex].video;
        videoElement.load(); // Recarga el video para aplicar el nuevo src

        gsap.to(videoElement, {
          opacity: 1,
          duration: 0.3,
        });
      }
    });
  }
});



/* contact */
document.getElementById("info-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Capturar los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    // Simulación de envío
    console.log("Formulario enviado:", { name, email, phone, message });
  
    // Animación de confirmación
    gsap.to("#info-form", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".text-box").innerHTML = `
          <h2>¡Gracias por tu interés!</h2>
          <p>Hemos recibido tu solicitud y te contactaremos pronto.</p>
        `;
  
        gsap.to(".text-box", { opacity: 1, y: 0, duration: 0.5 });
      }
    });
  });
  