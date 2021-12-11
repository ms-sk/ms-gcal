function load(apikey, calendarId, divid, theme){
	var calendar = new Calendar();
		calendar.get(apikey, calendarId, function(dto) {
		var divBuilder = new DivBuilder();
		var parent = document.getElementById(divid);

			if(dto.error != undefined){
				divBuilder.addError(dto.error);
				var error = divBuilder.build();
				parent.appendChild(error);
				return;
			}

		for(let i = 0; i < dto.items.length; i++){
			var item = dto.items[i]
			divBuilder.addItem(item);
		}
		var div = divBuilder.build();

		if(theme != undefined){
			parent.setAttribute("data-theme", theme);
		}

		parent.appendChild(div);
	})
}
