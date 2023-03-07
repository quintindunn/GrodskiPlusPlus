let interval = setInterval(() => {
    const fade = document.querySelector("#loftloader-wrapper");
    if (fade !== null)
    {
        console.log("Removing loading screen.");
        fade.remove();
        clearInterval(interval);
    }
}, 10);
