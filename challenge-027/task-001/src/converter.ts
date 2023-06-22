export function runConverter(element: HTMLDivElement) {
  const result = [
    "B$u$i$ld",
    "$t$$h$e",
    "N$e$x$t",
    "E$$ra",
    "$$o$f$",
    "S$$of$t$wa$r$e",
    "De$$ve$l$op$me$n$t",
  ]
    .join(" ")
    .replace(/\$/g, "")
    .toUpperCase();

  element.innerHTML = `Result is ${result}`;
}
