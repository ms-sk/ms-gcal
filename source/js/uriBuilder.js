
class UriBuilder{
	constructor(){
		this.root = "";
		this.paths = [];
		this.queries = {};
	}

	setRoot(rootUri){
		this.root = rootUri;
	}

	addPath(path){
		this.paths.push(path);
	}

	addQuery(queryKey, queryValue){
		this.queries[queryKey] = queryValue;
	}

	buildPath(buildPaths){
		var value = "";
	    for(let i = 0; i < buildPaths.length; i++){
	    	value += "/" + buildPaths[i];
	    }

	    return value;
	}

	buildQuery(buildQueries){
		var value = "?";
		var cnt = 0;
		for(var key in buildQueries){
			if(cnt != 0){
				value += "&";
			}

			value += key + "=" + this.queries[key];
			cnt= cnt+1;
		}

		return value;
	}

	build(){
		var uri = this.root;
		uri += this.buildPath(this.paths);
		uri += this.buildQuery(this.queries);

		return uri;
	}

}