// Play the backup pipeline animation only while it is on screen.
for (const pipeline of document.querySelectorAll(".pipeline")) {
  if (!("IntersectionObserver" in window)) break;
  pipeline.classList.add("paused");
  new IntersectionObserver(
    ([entry]) => pipeline.classList.toggle("paused", !entry.isIntersecting),
    { threshold: 0.3 },
  ).observe(pipeline);
}
