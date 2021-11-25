var xhr= new XMLHttpRequest();
xhr.onload = function () {
  //process the request and server will return the data
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    console.log(t);
    for (let i = 0; i < t.length; i++) {
      console.log(`
        Country: ${t[i].name}
        population:${t[i].population}
        region:${t[i].region}
        subregion:${t[i].subregion}
        `);
    }
  } else {
    //it should not give you data
    console.log("Data is not available");
  }
};
xhr.open("GET","https://restcountries.com/v2/all");
xhr.send();