export function load_config () {
    // load config
    fetch('config.grape')
        .then(res => res.text())
        .then(text => JSON.parse(text))
        .then(config => {
            document.title = config.title;

            const leftLink = document.querySelector('#header-left a');
            const rightLink = document.querySelector('#header-right a');

            leftLink.href = config.header.left.url;
            leftLink.innerText = config.header.left.text;
            leftLink.title = config.header.left.title;

            rightLink.href = config.header.right.url;
            rightLink.innerText = config.header.right.text;
            rightLink.title = config.header.right.title;

            const content = document.getElementById('content');
            content.classList.add(config.layout); 

            const madeByUrl = document.querySelector('#made-by-url');
            madeByUrl.href = config.footer.right.madeByUrl;
            madeByUrl.innerText = config.footer.right.madeByLinkText;

            const footerLeftImage = document.querySelector('#footer-left img');
            footerLeftImage.src = config.footer.left.icon;
   

        })
        .catch(err => console.error("Failed to load config:", err));
}