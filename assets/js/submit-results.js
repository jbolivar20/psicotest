// submit-results.js
// Conexión con Google Sheets - Repositorio psicotest

async function guardarEnSheets(resultados) {
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxCxSM1esiUceAiwYasosp9kp584ghZaU-BVVbGZ9jNfCVbaRTOshPnoQ44FBrfcubWmQ/exec";

    try {
        const response = await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(resultados),
            headers: {
                "Content-Type": "application/json"
            },
            mode: "no-cors"
        });

        console.log("✅ Resultados enviados a Google Sheets");
        alert("¡Test completado con éxito! Los resultados se han guardado automáticamente en Google Sheets.");

        return true;

    } catch (error) {
        console.error("❌ Error:", error);
        alert("Hubo un problema al guardar los resultados. Inténtalo nuevamente.");
        return false;
    }
}
