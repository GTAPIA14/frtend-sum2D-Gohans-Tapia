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