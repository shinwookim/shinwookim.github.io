+++
date = '2026-04-25T18:56:25-04:00'
title = 'Résumé'
+++
<!-- # TODO: Figure out a better way for this -->
<div class="text-end">Last updated: <span id="resume-last-updated"></span></div>
<div class="ratio" id="resume-pdf" style="--bs-aspect-ratio: calc(110 / 85 * 100%);"></div>
<script>
	const release_url =
		"https://api.github.com/repos/shinwookim/resume/releases/latest";
	fetch(release_url)
		.then((response) => response.json()) // Parse JSON response data
		.then((data) => {
			fetch(data["assets_url"])
				.then((response) => response.json())
				.then((data) => {
					document.getElementById(
						"resume-pdf"
					).innerHTML = `<embed src="${data[0]["browser_download_url"]}" width="500" height="375">`;
				})
				.catch((error) => {
					console.error(error); // Handle any errors
				});
			const last_modified = new Date(data["published_at"]);
			document.getElementById(
				"resume-last-updated"
			).innerHTML = `<a href='https://github.com/shinwookim/resume/releases/latest'>${last_modified.toDateString()}</a >`;
		})
		.catch((error) => {
			console.error(error); // Handle any errors
		});
</script>