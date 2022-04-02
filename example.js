const puppeteer = require("puppeteer");

/* async function start() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.screenshot({ path: 'example.png' });
}

start(); */

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    devtools: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.defensordelpueblo.es/");

    //obtener el título de la página
    const titulo = await page.title();
    console.log("titulo: ", titulo);
    //obtener todas las imágenes de la página
    const imagenes = await page.$$("img");
    //console.log("imagenes: ", imagenes);
    //poner un borde rojo a todas las imágenes
    const imagenes2 = await page.$$eval("img", (imagenes) => {
        imagenes.forEach((imagen) => {
            imagen.style.border = "5px solid red";
        });
    });
    //console.log("imagenes2: ", imagenes2);
    //obtener atributo alt de las imágenes y guardarlo en un array
    const alt = await Promise.all(imagenes.map((imagen) => imagen.getProperty("alt")));
  
    //mostrar el contenido del array alt
    alt.forEach(el => {
        console.log(el.jsonValue());
    });
    

  // const data = page.evaluate(() => {
  //     const d = {};
  //     data.title = document.title;
  //     data.url = document.URL;
  //     data.text = document.body.innerText;
  //     console.log(d);
  //     return d;
  // });

  //await browser.close();
})();
