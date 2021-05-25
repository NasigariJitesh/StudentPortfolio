const openSource = {
  githubConvertedToken: "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",
  githubUserName: "NasigariJitesh",
};

const fetch = require("node-fetch");
var fs = require("fs");

const query_pinned_projects = {
  query: `
	query { 
	  user(login: "${openSource.githubUserName}") { 
	    pinnedItems(first: 6, types: REPOSITORY) {
	      totalCount
	      nodes{
	        ... on Repository{
	          id
		          name
		          createdAt,
		          url,
		          description,
		          isFork,
		          languages(first:10){
		            nodes{
		              name
		            }
		          }
	        }
	      }
		  }
	  }
	}
	`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
};

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_pinned_projects),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    // console.log(txt);
    const projects = data["data"]["user"]["pinnedItems"]["nodes"];
    var newProjects = { data: [] };
    for (var i = 0; i < projects.length; i++) {
      var obj = projects[i];
      var langobjs = obj["languages"]["nodes"];
      var newLangobjs = [];
      for (var j = 0; j < langobjs.length; j++) {
        if (langobjs[j]["name"] in languages_icons) {
          newLangobjs.push({
            name: langobjs[j]["name"],
            iconifyClass: languages_icons[langobjs[j]["name"]],
          });
        }
      }
      obj["languages"] = newLangobjs;
      newProjects["data"].push(obj);
    }

    console.log("Fetching the Pinned Projects Data.\n");
    fs.writeFile(
      "./src/shared/opensource/projects.json",
      JSON.stringify(newProjects),
      function (err) {
        if (err) {
          console.log(
            "Error occured in pinned projects 1",
            JSON.stringify(err)
          );
        }
      }
    );
  })
  .catch((error) =>
    console.log("Error occured in pinned projects 2", JSON.stringify(error))
  );
