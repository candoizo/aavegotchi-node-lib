You can find the source code to a starter app preconfigured to use Node Express. It includes an example interface to build off, or follow along from scratch to see how you may add it to your own favorite framework!
codesandbox link @todo
Starting From A Fresh Project:
Initializing a new Node.js application requires a machine with yarn or npm installed, in this document we will use yarn consistently for the purpose of demonstration.
mkdir my-awesome-site
cd my-awesome-site
yarn init -y
Now we can install the @aavegotchi/sdk to our package.json along with a framework for building the website in.
yarn add @aavegotchi/sdk@1.0.0 express
I'm planning to use a popular server called Express in this example but you can follow similar steps to add this on any existing package and query from your @aavegotchi/sdk. The last thing I need is a new command in my package.json file to start the web server, once it's added the whole thing now looks ready to go.
​{
    "name": "my-awesome-site",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "dependencies": {
        "@aavegotchi/sdk": "1.0.0",
        "express": "^4.17.1"
    },
    "scripts": {
        "server": "node index.js"
    }
}
I think I would enjoy if I could visit a website to search for the Aavegotchi by number. Each Aavegotchi is assigned a unique tokenId incrementing from zero up to the current world gotchi population! I'll use on popular server called Express,  Lets setup the basic scaffolding needed, starting with a basic setup in index.js!
import { defaultSdk } from "@aavegotchi/sdk"; // import the Sdk!
import * as express from "express";

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello World! The Aavegotchis are coming!`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
I'll start my server with yarn server and then go over to http://127.0.0.1:3000 in my browser! A happy "Hello World!" greets me back, which means we're ready to go on. For this short example I will focus on line 7, the line which responds to visits to the default page of our local website (http://127.0.0.1:3000).
import { defaultSdk } from "@aavegotchi/sdk";
import * as express from "express";

const port = 3000;
const app = express();

app.get('/', async (request, response) => {
  response.send(`Hello World! The Aavegotchis are coming!`);

  response.send(
    await defaultSdk().items() // asynchronous await for return value
  );

});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
A new addition to our app.get('/', ...ffunction uses the defaultSdk().items()call to request a list of the current wearable information from the Aavegotchi game. Since we're using the defaultSdk this is a very fast and easy way to check things are working. As we can see in the documentation for items() it will return an array of JSON objects. Since we've decided to return them as part of our response, the next time we start our server and visit the browser it should display some new information from Aavegotchi!
@todo add image of output in browser
This looks perfect, and it works well when we want to show some text. One special quality to our contract is the svgFacet, which our dutiful smart contract developers and pixel art designed meticulosuly produce whimsical images for all the Aavegotchi's to admire. The Sdk makes it easier to query these images @todo
