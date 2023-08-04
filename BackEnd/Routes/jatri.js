const puppeteer = require('puppeteer');


function searchInJatri(request, response, next) {

    console.log('First');



    const { from, to, date } = request.body;


    console.log(from);
    console.log(to);
    console.log(date);


    const url = `https://ticket.jatri.co/trip?from=${from}&to=${to}&type=all&date=${date}`;

    puppeteer.launch({
        headless: false,
        defaultViewport: false,
    }).then(async function (browser) {
        const page = await browser.newPage();


        await page.goto(url, {
            waitUntil: 'load',
            timeout: 0,
        });

        await page.waitForSelector('.gap-x-6', {
            visible: true,
        });

        const ticketItems = await page.evaluate(() => {

            const rows = document.querySelectorAll('.gap-x-6');

            const arr = [];
            rows.forEach(row => {
                const name = row.querySelector('.text-blackPrimary').innerText;
                const seat = row.querySelector('.text-right').innerText;
                const price = row.querySelector('.text-blackPrimary.font-semibold').innerText;
                const route = row.querySelector('.text-blackPrimary.text-right').innerText;
                const startTime = row.querySelectorAll('.text-blackPrimary.text-sm.font-medium');
                const type = row.querySelector('.font-normal').innerText;
                const typeNames = type.split(" ");
                const n = typeNames.length;

                const obj = {
                    name: name,
                    seat: seat,
                    type: typeNames[n - 1],
                    route: route,
                    departureTime: startTime[1].innerText,
                    price: price.replace(/TK/g, " ").trim(" "),
                    photo: "jatri",

                }

                arr.push(obj);

            });

            return arr;
        });


        // console.log(ticketItems);

        await browser.close();


        response.send(ticketItems);
    });

    next();
}
module.exports = searchInJatri;