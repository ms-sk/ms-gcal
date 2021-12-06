class DivBuilder{

	constructor(){
		this.items = [];
	}

	addItem(item){
		this.items.push(item);
	}
	
	build(){
		var parent = document.createElement("div");
		parent.classList.add("ms-cal-container")

		if(this.items.length == 0){
			var noEvents = document.createElement("div");
			noEvents.innerHTML = "No events available.";
			noEvents.classList.add("ms-cal-no-events");
			parent.appendChild(noEvents);
			return parent;
		}

		for(let i = 0; i < this.items.length; i++){
		var header = document.createElement("div");
		header.classList.add("ms-cal-date");
	
		var date = new Date(this.items[i].start.dateTime.toString());
		header.innerHTML = date.toLocaleString();
		parent.appendChild(header);
	
		var div = document.createElement("div");
		div.classList.add("ms-cal-item");
		div.innerHTML = this.items[i].summary;
		parent.appendChild(div);
	}
	
	return parent;
	}
}
