/*
	Home controller
*/

app.controller('HomeController', HomeController);

HomeController.$inject = ['$timeout'];

function HomeController($timeout) {
	var homeVm = this;
	homeVm.data = {};
	homeVm.data.searchText = "";
	homeVm.data.finalName = "Krishna kumar VS";
	var count = 0;
	var searchSpeed = 100;
	var startSearchAfter = 1000;

	activate();

	function activate() {
		console.log("Started...");
		$timeout(searchMyName, startSearchAfter);
	}

	function searchMyName() {
		if (count <= homeVm.data.finalName.length) {
			homeVm.data.searchText = homeVm.data.searchText + homeVm.data.finalName.charAt(count);
			count++;
			$timeout(searchMyName, searchSpeed);
		} else {
			$timeout(function() {
				console.log("clicking on google search");
				homeVm.data.autoClick = true;
			});
		}
	}
}