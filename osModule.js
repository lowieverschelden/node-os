const os = require('os');

// Functie om de systeeminformatie op te halen
function getSystemInfo() {
  const systemInfo = {
    "Nombre": os.type(),
    "Tipo": os.platform(),
    "Versión": os.release(),
    "Arquitectura": os.arch(),
    "CPUs": os.cpus().length,
    "Memoria Total": (os.totalmem() / (1024 * 1024)).toFixed(2), // In MB
    "Memoria Libre": (os.freemem() / (1024 * 1024)).toFixed(2), // In MB
  };

  return systemInfo;
}

module.exports = { getSystemInfo };
