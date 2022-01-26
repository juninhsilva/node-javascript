const os = require('os');
const { arch, platform, release, totalmem, freemem } = os;

setInterval(() => {
    console.log(arch.toString);
    console.log(platform);
    console.log(totalmem);
    console.log(freemem);

    const tram = totalmem() / 1024 / 1024;
    const fram = freemem() / 1024 / 1024;
    const usage = 100 - ((fram / tram) * 100);

    const stats = {
        OS: platform(),
        OS_Release: release(),
        Arch: arch(),
        TotalRAM: `${parseInt(tram)}MB`,
        FreeRAM: `${parseInt(fram)}MB`,
        Usage: `${parseInt(usage).toFixed(1)}%`,
    }

    console.clear();
    console.log(':: Top Servidor ::');
    console.table(stats);
}, 2000);

