function umami() {
  if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    var script = document.createElement("script");
    script.defer = true;
    script.src = "https://umami.ricolxwz.io/script.js";
    script.setAttribute(
      "data-website-id",
      "705c578b-b942-463e-a65e-e821f47a5828"
    );
    document.head.appendChild(script);
  }
}
umami();
