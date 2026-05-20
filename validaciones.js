// validaciones.js

// Validaciones para Sección A — Datos del Cliente
function validarNombreCompleto(nombre) {
    const regex = /^[a-zA-Z\s]{5,80}$/;
    return regex.test(nombre);
}

function validarDNI(dni) {
    const regex = /^\d{7,8}$/;
    return regex.test(dni);
}

function validarCorreoElectronico(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function validarConfirmarCorreo(correo, confirmarCorreo) {
    return correo === confirmarCorreo;
}

function validarTelefono(telefono) {
    const regex = /^[\d\s\-\+]{8,}$/;
    return regex.test(telefono);
}

function validarTipoCliente(tipoCliente, nombreEmpresa, cuit) {
    if (tipoCliente === "Empresa") {
        const cuitRegex = /^(\d{2}-\d{8}-\d|\d{11})$/;
        return nombreEmpresa.trim() !== "" && cuitRegex.test(cuit);
    }
    return tipoCliente !== "";
}

function validarProvinciaLocalidad(provincia, localidad) {
    return provincia !== "" && localidad.trim().length >= 2;
}

// Validaciones para Sección B — Datos del Equipo
function validarTipoDispositivo(tipoDispositivo, otroDispositivo) {
    if (tipoDispositivo === "Otro") {
        return otroDispositivo.trim() !== "";
    }
    return tipoDispositivo !== "";
}

function validarMarca(marca, otraMarca) {
    if (marca === "Otra") {
        return otraMarca.trim() !== "";
    }
    return marca !== "";
}

function validarModelo(modelo) {
    return modelo.trim().length >= 2;
}

function validarSistemaOperativo(sistemaOperativo) {
    return sistemaOperativo !== "";
}

function validarNumeroOrden(garantia, numeroOrden) {
    if (garantia) {
        return numeroOrden.trim() !== "";
    }
    return true;
}

// Validaciones para Sección C — Descripción del Problema
function validarTipoProblema(tipoProblema) {
    return tipoProblema !== "";
}

function validarDesdeCuando(desdeCuando) {
    return desdeCuando !== "";
}

function validarPermanenteIntermitente(opcion) {
    return opcion !== "";
}

function validarDescripcionDetallada(descripcion) {
    return descripcion.trim().length >= 20 && descripcion.trim().length <= 500;
}

function validarReparacionPrevia(checkbox, reparacion) {
    if (checkbox) {
        return reparacion.trim().length <= 300;
    }
    return true;
}

// Validaciones para Sección D — Entrega y Confirmación
function validarModalidadEntrega(modalidad, direccion) {
    if (modalidad === "Retiro a domicilio") {
        return direccion.trim().length >= 10;
    }
    return modalidad !== "";
}

function validarPresupuestoAutorizado(presupuesto) {
    return presupuesto !== "";
}

function validarPreferenciaContacto(preferencias) {
    return preferencias.some(preferencia => preferencia.checked);
}

function validarHorarioContacto(horario) {
    return horario !== "";
}

function validarCheckboxDiagnosticoTerminos(diagnostico, terminos) {
    if (!diagnostico) {
        alert("Debe aceptar el checkbox de diagnóstico.");
    }
    if (!terminos) {
        alert("Debe aceptar los términos y condiciones.");
    }
    return diagnostico && terminos;
}

// Exportar funciones para uso en otros archivos
export {
    validarNombreCompleto,
    validarDNI,
    validarCorreoElectronico,
    validarConfirmarCorreo,
    validarTelefono,
    validarTipoCliente,
    validarProvinciaLocalidad,
    validarTipoDispositivo,
    validarMarca,
    validarModelo,
    validarSistemaOperativo,
    validarNumeroOrden,
    validarTipoProblema,
    validarDesdeCuando,
    validarPermanenteIntermitente,
    validarDescripcionDetallada,
    validarReparacionPrevia,
    validarModalidadEntrega,
    validarPresupuestoAutorizado,
    validarPreferenciaContacto,
    validarHorarioContacto,
    validarCheckboxDiagnosticoTerminos
};

// Función para manejar campos condicionales
function manejarCamposCondicionales() {
    const tipoCliente = document.getElementById("tipoCliente");
    const nombreEmpresa = document.getElementById("nombreEmpresa");
    const cuit = document.getElementById("cuit");
    const tipoDispositivo = document.getElementById("tipoDispositivo");
    const otroDispositivo = document.getElementById("otroDispositivo");
    const marca = document.getElementById("marca");
    const otraMarca = document.getElementById("otraMarca");
    const garantia = document.getElementById("garantia");
    const numeroOrden = document.getElementById("numeroOrden");
    const reparacionCheckbox = document.getElementById("reparacionCheckbox");
    const reparacionTextarea = document.getElementById("reparacionTextarea");
    const modalidadEntrega = document.getElementById("modalidadEntrega");
    const direccion = document.getElementById("direccion");

    tipoCliente.addEventListener("change", () => {
        if (tipoCliente.value === "Empresa") {
            nombreEmpresa.style.display = "block";
            cuit.style.display = "block";
        } else {
            nombreEmpresa.style.display = "none";
            cuit.style.display = "none";
            nombreEmpresa.value = "";
            cuit.value = "";
        }
    });

    tipoDispositivo.addEventListener("change", () => {
        if (tipoDispositivo.value === "Otro") {
            otroDispositivo.style.display = "block";
        } else {
            otroDispositivo.style.display = "none";
            otroDispositivo.value = "";
        }
    });

    marca.addEventListener("change", () => {
        if (marca.value === "Otra") {
            otraMarca.style.display = "block";
        } else {
            otraMarca.style.display = "none";
            otraMarca.value = "";
        }
    });

    garantia.addEventListener("change", () => {
        if (garantia.checked) {
            numeroOrden.style.display = "block";
        } else {
            numeroOrden.style.display = "none";
            numeroOrden.value = "";
        }
    });

    reparacionCheckbox.addEventListener("change", () => {
        if (reparacionCheckbox.checked) {
            reparacionTextarea.style.display = "block";
        } else {
            reparacionTextarea.style.display = "none";
            reparacionTextarea.value = "";
        }
    });

    modalidadEntrega.addEventListener("change", () => {
        if (modalidadEntrega.value === "Retiro a domicilio") {
            direccion.style.display = "block";
        } else {
            direccion.style.display = "none";
            direccion.value = "";
        }
    });
}

// Función para manejar retroalimentación visual
function manejarRetroalimentacionVisual(campo, esValido, mensajeError = "") {
    const mensaje = campo.nextElementSibling;
    if (esValido) {
        campo.classList.remove("campo-error");
        campo.classList.add("campo-ok");
        if (mensaje) mensaje.style.display = "none";
    } else {
        campo.classList.remove("campo-ok");
        campo.classList.add("campo-error");
        if (mensaje) {
            mensaje.style.display = "block";
            mensaje.textContent = mensajeError;
        }
    }
}

// Función para manejar contador de caracteres
function manejarContadorCaracteres(textarea, contador, limite) {
    textarea.addEventListener("input", () => {
        const longitud = textarea.value.length;
        contador.textContent = `${longitud}/${limite}`;
        if (longitud > limite) {
            contador.style.color = "red";
        } else if (longitud > limite * 0.8) {
            contador.style.color = "orange";
        } else {
            contador.style.color = "black";
        }
    });
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const camposVisibles = formulario.querySelectorAll("input, select, textarea");
        let errores = 0;

        camposVisibles.forEach((campo) => {
            if (campo.offsetParent !== null) {
                const esValido = validarCampo(campo);
                manejarRetroalimentacionVisual(campo, esValido, "Campo inválido");
                if (!esValido) errores++;
            }
        });

        if (errores > 0) {
            const primerError = formulario.querySelector(".campo-error");
            if (primerError) primerError.scrollIntoView({ behavior: "smooth" });
            alert(`Se encontraron ${errores} errores en el formulario.`);
        } else {
            mostrarPantallaConfirmacion(formulario);
        }
    });
}

// Función para mostrar pantalla de confirmación
function mostrarPantallaConfirmacion(formulario) {
    const seccionConfirmacion = document.getElementById("seccionConfirmacion");
    const nombreCliente = document.getElementById("nombre").value;
    const tipoDispositivo = document.getElementById("tipoDispositivo").value;
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const modalidadEntrega = document.getElementById("modalidadEntrega").value;
    const numeroOrden = Math.floor(Math.random() * 1000000);

    formulario.style.display = "none";
    seccionConfirmacion.style.display = "block";
    seccionConfirmacion.innerHTML = `
        <h2>Confirmación</h2>
        <p>Nombre del cliente: ${nombreCliente}</p>
        <p>Tipo de dispositivo: ${tipoDispositivo}</p>
        <p>Marca: ${marca}</p>
        <p>Modelo: ${modelo}</p>
        <p>Modalidad de entrega: ${modalidadEntrega}</p>
        <p>Número de orden: ${numeroOrden}</p>
        <p>En hasta 48 horas hábiles el equipo será diagnosticado.</p>
        <button onclick="location.reload()">Volver al inicio</button>
        <button onclick="location.reload()">Ingresar otro equipo</button>
    `;
}

// Inicializar comportamientos
document.addEventListener("DOMContentLoaded", () => {
    manejarCamposCondicionales();

    // Manejo de contador de caracteres para descripción
    const descripcionTextarea = document.getElementById("descripcion");
    const descripcionContador = document.getElementById("contadorDescripcion");
    manejarContadorCaracteres(descripcionTextarea, descripcionContador, 500);

    // Manejo de contador de caracteres para reparación previa
    const reparacionTextarea = document.getElementById("reparacionTextarea");
    const reparacionContador = document.getElementById("contadorReparacion");
    manejarContadorCaracteres(reparacionTextarea, reparacionContador, 300);

    // Manejo del envío del formulario
    const formulario = document.getElementById("formulario");
    manejarEnvioFormulario(formulario);

    // Validaciones adicionales al interactuar con campos
    formulario.querySelectorAll("input, select, textarea").forEach((campo) => {
        campo.addEventListener("blur", () => {
            if (campo.offsetParent !== null) {
                const esValido = validarCampo(campo);
                manejarRetroalimentacionVisual(campo, esValido, "Campo inválido");
            }
        });
    });
});