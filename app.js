(function(){
	var app = angular.module('blog', []);

	app.controller('BlogController', function() {
		this.entries = entries;
	});

	app.controller('EntryController', function() {
		this.entry = {};

		this.addEntry = function(blog) {
			blog.entries.push(this.entry);
			this.entry = {};
		}
	})

	var entries = [
		{
			title: "Cats are awesome!",
			body: "Cats are similar in anatomy to the other felids, with strong, flexible bodies, quick reflexes, sharp retractable claws, and teeth adapted to killing small prey. Cat senses fit a crepuscular and predatory ecological niche. Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small animals. They can see in near darkness. Like most other mammals, cats have poorer color vision and a better sense of smell than humans. Despite being solitary hunters, cats are a social species, and cat communication includes the use of a variety of vocalizations (mewing, purring, trilling, hissing, growling, and grunting), as well as cat pheromones, and types of cat-specific body language.",
		},
		{
			title: "Dogs are awesome too!",
			body: "Dog is the common use term that refers to members of the subspecies Canis lupus familiaris (canis, \"dog\"; lupus, \"wolf\"; familiaris, \"of a household\" or \"domestic\"). The term can also be used to refer to a wider range of related species, such as the members of the genus Canis, or \"true dogs\", including the wolf, coyote, and jackals, or it can refer to the members of the tribe Canini, which would also include the African wild dog, or it can be used to refer to any member of the family Canidae, which would also include the foxes, bush dog, raccoon dog, and others.[15] Some members of the family have dog in their common names, such as the raccoon dog and the African wild dog. A few animals have dog in their common names but are not canids, such as the prairie dog. \n\nThe English word dog comes from Middle English dogge, from Old English docga, a \"powerful dog breed\".[16] The term may possibly derive from Proto-Germanic *dukkōn, represented in Old English finger-docce (\"finger-muscle\").[17] The word also shows the familiar petname diminutive -ga also seen in frogga \"frog\", picga \"pig\", stagga \"stag\", wicga \"beetle, worm\", among others.[18] The term dog may ultimately derive from the earliest layer of Proto-Indo-European vocabulary, reflecting the role of the dog as the earliest domesticated animal.",
		}
	]
})();