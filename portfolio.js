let containers = document.getElementsByClassName("container");

Array.from(containers).forEach(container => {
    container.onmouseover = () => {
        let headers = container.getElementsByTagName("h3");
        Array.from(headers).forEach(header => {
            header.style.visibility = 'hidden';
        });
    };
});
Array.from(containers).forEach(container => {
           container.onmouseover = () => {
            let headers = container.getElementsByTagName("h3");
            Array.from(headers).forEach(header => {
                header.style.visibility = 'hidden';
            });
        };
        container.onmouseout = () => {
            let headers = container.getElementsByTagName("h3");
            Array.from(headers).forEach(header => {
                header.style.visibility = 'visible';
            });
        };
    });
    