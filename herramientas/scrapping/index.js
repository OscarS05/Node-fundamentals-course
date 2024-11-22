const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos navegador!');
    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        
        return h1.innerHTML;
    });

    console.log(titulo1);

    console.log('Cerramos navegador...');
    // browser.close();
    console.log('Cerrado');
})();