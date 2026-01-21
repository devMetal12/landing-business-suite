
ScrollTrigger.create({
  animation: gsap.from(".logo", {
      y: "50vh",
      scale: 3,
      yPercent: -50,
  }),
  scrub: true,
  trigger: ".content",
  start: "top bottom",
  endTrigger: ".content",
  end: "top center",
  });

  // desaparecer nav con scroll
ScrollTrigger.create({
  animation: gsap.to(".nav", {
    opacity: 0,
  }),
  scrub: true,
  trigger: ".content",
  start: "top bottom",
  end: "center center",
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
  ScrollReveal().reveal('.image-container');
  ScrollReveal().reveal('.erp-tabs');
  ScrollReveal().reveal('.info-modules-container');

  /* changes between tabs */
  const moduleData = {
  integraciones: {
    text: "Integra APIs, automatiza flujos y personaliza tu ERP sin límites.",
    video: "./assets/production.png"
  },
  finanzas: {
    text: "Gestiona contabilidad, bancos, impuestos y reportes financieros.",
    video: "./assets/purchases.png"
  },
  rrhh: {
    text: "Administra nómina, vacaciones y procesos de RRHH desde un solo lugar.",
    video: "./assets/sales.png"
  },
  bi: {
    text: "Analiza datos en tiempo real con dashboards interactivos.",
    video: "./assets/finance.png"
  },
  ventas: {
    text: "Controla ventas, facturación y cobranza de manera inteligente.",
    video: "./assets/finance.png"
  },
  inventario: {
    text: "Optimiza inventario, movimientos, costos y almacenes.",
    video: "./assets/finance.png"
  },
  proyectos: {
    text: "Planifica, ejecuta y analiza proyectos con métricas y costos.",
    video: "./assets/finance.png"
  }
}

// ⚡ Esperar a que exista el DOM
document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.querySelector('.text-box-modules p');
  const imageEl = document.querySelector('.modules-phone');
  const tabs = document.querySelectorAll('.erp-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const moduleKey = tab.dataset.module;
      const data = moduleData[moduleKey];

      // Evitar re-animar si ya está activa
      if (tab.classList.contains('active')) return;

      // Marcar tab activa
      document.querySelectorAll('.erp-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Animación: salir
      gsap.to([textEl, imageEl], {
        opacity: 0,
        y: 20,
        duration: 0.2,
        onComplete: () => {
          // Cambiar contenido cuando ya se ocultó
          textEl.textContent = data.text;
          imageEl.src = data.video;

          // Animación: entrar
          gsap.fromTo(
            [textEl, imageEl],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
          );
        }
      });
    });
  });
});


  
  /* contact */
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("info-form");
    const successMessage = document.createElement("p");
    successMessage.textContent = "¡Mensaje enviado con éxito!";
    successMessage.style.color = "green";
    successMessage.style.fontWeight = "bold";
    successMessage.style.display = "none";
    form.appendChild(successMessage);
  
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            params.append(key, value);
        });
        
        fetch("https://formsubmit.co/el/jagoji", {
            method: "POST",
            body: params,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                successMessage.style.display = "block";
                form.reset();
            } else {
                alert("Hubo un error al enviar el mensaje.");
            }
        })
        .catch(error => {
            alert("Error de conexión. Inténtalo nuevamente.");
            console.error("Error:", error);
        });
    });
  });
  
  /* full screen */
  document.addEventListener("DOMContentLoaded", function () {
      const video = document.querySelector(".demo-phone");
    
      video.addEventListener("click", function () {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari y Opera
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // Edge
          video.msRequestFullscreen();
        }
      });
    });
    