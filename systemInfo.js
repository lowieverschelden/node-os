const osModule = require('./osModule');  // Importeer osModule
const networkModule = require('./networkModule');  // Importeer networkModule

// Functie om de systeem- en netwerkinformatie af te drukken
function printSystemInfo() {
  console.log("Información del Sistema:");
  
  // Verkrijg en print de systeeminformatie
  const systemInfo = osModule.getSystemInfo();
  for (const key in systemInfo) {
    console.log(`${key}: ${systemInfo[key]}`);
  }

  console.log("\nInformación de las Interfaces de Red:");

  // Verkrijg en print de netwerkinterfaces
  const networkInfo = networkModule.getNetworkInterfaces();
  networkInfo.forEach(info => {
    console.log(`Interfaz ${info.Interfaz}:`);
    console.log(`  Familia: ${info.Familia}`);
    console.log(`  Dirección: ${info.Dirección}`);
    console.log(`  Interno: ${info.Interno}`);
    console.log('');
  });
}

// Roep de functie aan om alles af te drukken
printSystemInfo();
