const request =  require('request');

module.exports = {
  name: "current",
  current(message, userLocation) {
    if (!userLocation) return message.channel.send("Please provide a location");

    request(
      `http://api.weatherapi.com/v1/search.json?key=439e86839c264d0ca5d70022202712&q=${userLocation}`,
      { json: true },
      (err, res, body) => {
        if (err)
          return console.log(err);

        if (body.length === 0) {
          return message.channel.send("```Error 404!\nLocation Not Found!```");
        }


        message.channel.send(`\`\`\`Location Found!\nLocation: ${body[0].name}\`\`\``);

      }
    )
    return;

    request(
      `http://api.weatherapi.com/v1/current.json?key=439e86839c264d0ca5d70022202712&q=${userLocation}`,
      { json: true },
      (err, res, body) => {
        if (err) return console.log(err);

        message.channel.send(`${body}`);
        console.log(body);
      }
    );
    
  },
}