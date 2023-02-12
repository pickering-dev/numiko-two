// update progress bar width
function updateProgressBar(event) {
	const links = Array.from(document.querySelectorAll("nav a"));
	const index = links.indexOf(event.target);
	const progressBar = document.querySelector(".bar-progress");
	const width = index * 20 - 1;

	progressBar.style.width = `${width}%`;
}
// do the same thing but with a scroll event listener
window.addEventListener("scroll", updateProgressBarOnScroll);
function updateProgressBarOnScroll() {
	const progressBar = document.querySelector(".bar-progress");
	const scrollPosition = window.scrollY;
	const totalHeight =
		document.documentElement.scrollHeight - window.innerHeight;
	const width = (scrollPosition / totalHeight) * 100;
	progressBar.style.width = `${width}%`;
}
