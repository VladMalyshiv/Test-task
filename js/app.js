const form = document.querySelector('#form')
form.addEventListener('submit', async function(e) {
	e.preventDefault()
	const searchTitle = e.target.value
	const res = await axios.get(`http://api.tvmaze.com/search/shws?q=${searchTitle}`)
	if(res){
		alert("Заказ принят")
	}else{
		alert("Произошла ошибка!")
	}
})