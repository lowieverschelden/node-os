const os = require('os');

// Functie om netwerkinterfaces op te halen
function getNetworkInterfaces() {
  const interfaces = os.networkInterfaces();
  let networkInfo = [];

  for (const interfaceName in interfaces) {
    interfaces[interfaceName].forEach(address => {
      networkInfo.push({
        Interfaz: interfaceName,
        Familia: address.family,
        Dirección: address.address,
        Interno: address.internal
      });
    });
  }

  return networkInfo;
}

module.exports = { getNetworkInterfaces };
