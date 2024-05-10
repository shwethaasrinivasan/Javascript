const jsonRetData = {
    "1": {
      "tel1": null,
      "status": "1",
      "fax": "",
      "tel2": null,
      "name": "sh_sup1",
      "country": "Anguilla",
      "creation_time": "2010-06-02 14:09:40",
      "created_by": "0",
      "Id": "85",
      "fk_location_id": "3893",
      "address": "Noida",
      "email": "sh_sup1@shell.com",
      "website_url": "http://www.noida.in",
      "srk_main_id": "0"
    },
    "0": {
      "tel1": "Ahmedabad",
      "status": "1",
      "fax": "",
      "tel2": "Gujarat",
      "name": "Bharat Petro",
      "country": "India",
      "creation_time": "2010-05-31 15:36:53",
      "created_by": "0",
      "Id": "82",
      "fk_location_id": "3874",
      "address": "THIS is test address",
      "email": "bp@india.com",
      "website_url": "http://www.bp.com",
      "srk_main_id": "0"
    },
    "count": 2
  };  
  
  const nameOfElement0 = jsonRetData["0"].name;
  console.log("Name of element 0:", nameOfElement0);
  
  for (const key in jsonRetData) {
    if (key !== "count") {
      const element = jsonRetData[key];
      console.log(`Name of element ${key}:`, element.name);
    }
  }
  