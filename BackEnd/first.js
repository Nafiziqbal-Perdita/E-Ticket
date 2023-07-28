
const puppeteer = require('puppeteer');



module.exports = {
  middleware1(request, response, next) {
    // Set data
let resultData=[];
    const url = `https://www.shohoz.com/booking/bus/search?fromcity=${request.body.from}&tocity=${request.body.to}&doj=${request.body.date}&dor=`;

    puppeteer.launch({
        headless: false,
        defaultViewport: false,
    }).then(async function (browser) {
        const page = await browser.newPage();



        await page.goto(url, {
            waitUntil: 'load',
            timeout: 0,
        });

        await page.waitForSelector('.trip-row', {
            visible: true,
        });

      const  ticketItems = await page.evaluate(() => {

            const rows = document.querySelectorAll('.trip-row');
            let items = [];
            rows.forEach(row => {

                const operator = row.querySelector('.tbl_col1');
                const depTime = row.querySelector('.tbl_col3');
                const arrTime = row.querySelector('.tbl_col4');
                const seatAval = row.querySelector('.tbl_col5');
                const view = row.querySelector('.tbl_col6');
                const price = view.querySelector('.fare_li');

                const lists = operator.querySelectorAll('ul > li');
                const name = lists[0];
                const type = lists[1];
                const route = lists[2];
                const startPoint = lists[3];
                const endPoint = lists[4];

                const obj = {
                    name: name.innerText,
                    type: type.innerText,
                    route: route.innerText,
                    startPoint: startPoint.innerText,
                    endPoint: endPoint.innerText,
                    DepTime: depTime.innerText,
                    ArrTime: arrTime.innerText,
                    seats: seatAval.innerText,
                    price: price.innerText,
                };

                items.push(obj);
            });
            return items;
        });

        // console.log(ticketItems);
        // Closing the Puppeteer controlled headless browser
        
        
        await browser.close();

        // Sending the Digimon names to Postman
        // response.send(ticketItems);
      
    });
    
    // response.locals.post=ticketItems;



console.log(resultData);




    // response.locals.post = arr;


    console.log("middleware 1")
    next();
  },
};
