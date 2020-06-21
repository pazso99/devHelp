const searchBar = document.querySelector(".search input");
const codeParts = document.querySelectorAll(".code-part");
const copyBtn = document.querySelectorAll(".copy");


searchBar.addEventListener("keyup", (e) => {
    const input = e.target.value.toLowerCase();
    codeParts.forEach(part => {
        const name = part.firstElementChild.textContent.toLowerCase();
        if (name.indexOf(input) != -1) {
            part.style.display = "block";
            scroll(0,100);
        } else {
            part.style.display = "none";
        }
    });
});

copyBtn.forEach(btn => {
    let copied = false;
    btn.addEventListener('click', () => {
        const code = btn.nextElementSibling.textContent;
        const textArea = document.createElement('textarea');
        textArea.textContent = code;
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
        btn.firstElementChild.textContent = 'Copied to clipboard';
        btn.style.backgroundColor = 'rgba(255, 238, 0, 0.5)';
        btn.style.borderColor = '#3b3b3b';
        textArea.remove();
        
        if (copied) {
            return;
        } else {
            copied = true;
            setTimeout(() => {
                btn.firstElementChild.textContent = 'Copy to clipboard';
                btn.style.backgroundColor = 'rgba(255, 238, 0, 0.25)';
                btn.style.borderColor = '#797979';
                copied = false;
            }, 3000);
            
        }
    });
});

