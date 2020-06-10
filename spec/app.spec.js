var request = require("request");
const assert = require('chai').assert;
const base_url = "http://localhost:8081";

// Para realiar las pruebas en produccion se debe descomentar 
//const Server, before y after

//const Server = require("../src/server.ts");

describe("Reportes de ejecutivos", () => {
  var server;
  
//   before(function () {
//     server = Server

//   });
  
//   after(function () {
//     server.close();
//   });

  describe("ejecutivos", () => {
      
    const endpoint = "/api";

    it("GET /ejecutivos todosLosejecutivos", async () => {
      const resourse = '/ejecutivos';
      const options = {
        method: 'GET',
        uri: base_url+endpoint+resourse
        
      };
      const response  = await asyncRequest(options);
      assert.equal(response.response.statusCode, 200);
     
    });

    // it("GET /ejecutivos ejecutivo", async () => {
    //   const resourse = '/ejecutivos/';
    //   const options = {
    //     method: 'GET',
    //     uri: base_url+endpoint+resourse
    //   };
    //   const response  = await asyncRequest(options);
    //   console.log(response);
    //   assert.equal(response.response.statusCode, 200);

    // });

    });

 });

const asyncRequest = async (value) => {
  return new Promise((resolve, reject) => {
       request(value, (error, response, data) => {
          if(error) reject(error)
          else resolve({response, data: (data)? JSON.parse(data) : undefined })
          })
         })
}