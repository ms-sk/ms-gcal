class Calendar{

	buildUrl(apikey, calendarId){
		var uriBuilder = new UriBuilder();
		var uri = uriBuilder;
		uriBuilder.setRoot("https://www.googleapis.com/calendar/v3/calendars");
		uriBuilder.addPath(calendarId);
		uriBuilder.addPath("events");
		uriBuilder.addQuery("key",apikey);
		uriBuilder.addQuery("timeMin", new Date().toJSON());
		var url = uriBuilder.build();

		return url;
	}

	/**
	 * loads calendar data of a google calender.
	 * @param {string} apikey - The google API key.
	 * @param {string} calendarId - The google calendar identifier.
	 * @param {function} callback - The callback invoked when data is loaded.
	*/
	async get(apikey, calendarId, callback){

		var url = this.buildUrl(apikey, calendarId);

	    const request = new XMLHttpRequest();
	    request.onload = function(){
	    	var response = JSON.parse(request.response);
	    	callback(response);
	    }
	    request.open("GET", url);
	    request.send();
	}
}