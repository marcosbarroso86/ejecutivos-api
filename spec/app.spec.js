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

    const executivebody ={

      lastName: "Per",
      firstName : "Maxi",
      password: "1",
      cuil: "203353",
      email : "m.pe",
      network: "h",
      gender : "m",
      filialZone: "zon",
      active: "1",
      locked: "0"
    }

     it("GET /ejecutivos todosLosejecutivos", async () => {
      const resourse = '/ejecutivos';
       const options = {
         method: 'GET',
         uri: base_url+endpoint+resourse
        
       };
       const response  = await asyncRequest(options);
       assert.equal(response.response.statusCode, 200);
     
     });

    it("POST /ejecutivos createExecutive", async () => {
      const resourse = '/ejecutivos';
      const options = {
        method: 'POST',
        uri: base_url+endpoint+resourse,
        body: executivebody,
        json: true
        };
      const response  = await asyncRequest(options);
      assert.equal(response.response.statusCode, 201);
     
    });
  

    });

 });

const asyncRequest = async (value) => {
  return new Promise((resolve, reject) => {
       request(value, (error, response, data) => {
          if(error) reject(error)
          else resolve({response, data: (data)? data : undefined })
          })
         })
}