var
remoteJSON = {name:"person1",  age: 5},
    localJSON = {age: 5, name: "person1"};
    
console.log(JSON.stringify(remoteJSON, localJSON) );

    