function load(apikey, calendarId, divid){
	var calendar = new Calendar();
		calendar.get(apikey, calendarId, function(dto) {
		var divBuilder = new DivBuilder();
		for(let i = 0; i < dto.items.length; i++){
			var item = dto.items[i]
			divBuilder.addItem(item);
		}
		var div = divBuilder.build();
		document.getElementById(divid).appendChild(div);
	})
}
