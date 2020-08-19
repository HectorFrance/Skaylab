/*var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/hectorfrance");
xhr.send(null);

xhr.onreadystatechange = function(){
	if (xhr.readyState === 4) {
		console.log(JSON.parse(xhr.responseText));
	}
}

var minhaPromise = function(){
	return new Promise(function(resolve, reject){
		xhr2 = new XMLHttpRequest();
		xhr2.open("GET", "https://api.gith51ub.com/users/hectorfrance");
		xhr2.send(null);

		xhr2.onreadystatechange = function(){
			if (xhr2.readyState === 4) {
				if (xhr2.status ===200) {
					resolve(JSON.parse(xhr2.responseText));
				}else{
					reject("Erro na requisição")
				}
			}
		}
	});
}

//var resultado = minhaPromise();
//console.log(resultado);

minhaPromise()
.then(function(response){
	console.log(response);
})
.catch(function(error){
	console.warn(error);
})
*/

axios.get("http://api.github.com/users/hectorfrance")
.then(function(response){
	console.log(response.data.avatar_url);
	console.log(response);
})
.catch(function(error){
console.warn(error);
});