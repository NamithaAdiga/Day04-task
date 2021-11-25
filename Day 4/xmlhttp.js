var xhr= new XMLHttpRequest();
xhr.onload = function () {
  //process the request and server will return the data
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    console.log(t);
    for (let i = 0; i < t.length; i++) {
      console.log(`
        flags: ${t[i].flags.png}
        `);
    }
  } else {
    //it should not give you data
    console.log("Data is not available");
  }
};
xhr.open("GET","https://restcountries.com/v2/all");
xhr.send();