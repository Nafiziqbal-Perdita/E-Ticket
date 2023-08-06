const puppeteer = require("puppeteer");

function searchInSohoz(request, response, next) {
  console.log("First");

  const url = `https://www.shohoz.com/booking/bus/search?fromcity=${request.body.from}&tocity=${request.body.to}&doj=${request.body.date}&dor=`;

  puppeteer
    .launch({
      headless: false,
      defaultViewport: false,
    })
    .then(async function (browser) {
      const page = await browser.newPage();

      await page.goto(url, {
        waitUntil: "load",
        timeout: 0,
      });

      
      await page.waitForSelector(".trip-row", {
        visible: true,
      });

      const ticketItems = await page.evaluate(() => {
        const rows = document.querySelectorAll(".trip-row");
        let items = [];
        rows.forEach((row) => {
          const operator = row.querySelector(".tbl_col1");
          const depTime = row.querySelector(".tbl_col3");
          const arrTime = row.querySelector(".tbl_col4");
          const seatAval = row.querySelector(".tbl_col5");
          const view = row.querySelector(".tbl_col6");
          const price = row.querySelector('.fare-list').innerText;

          const lists = operator.querySelectorAll("ul > li");
          const name = lists[0];
          const types = lists[1].innerText;
          const route = lists[2];
          const startPoint = lists[3];
          const endPoint = lists[4];

          let type = "";
          if (types.includes("Non")) {
            type = "Non-Ac";
          } else {
            type = "Ac";
          }

          const obj = {
            name: name.innerText,
            type: type,
            route: route.innerText,
            departureTime: depTime.innerText,
            seat: seatAval.innerText,
            price: price.replace(/৳ /g, " ").trim(" "),
            photo: "sohoj",
          };

          items.push(obj);
        });
        return items;
      });

      // console.log(ticketItems);
      // Closing the Puppeteer controlled headless browser
      await browser.close();

      // Sending the Digimon names to Postman
      response.send(ticketItems);
    });

  next();
}
module.exports = searchInSohoz;
