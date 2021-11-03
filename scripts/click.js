if (typeof document !== 'undefined') {
    document.addEventListener('click', event => {
        if (!event.target.dataset.line) return;
        if (!event.altKey) return;

        event.preventDefault();
        event.cancelBubble = true;
        event.stopPropagation();
        const { filename, start } = JSON.parse(event.target.dataset.line);
        window.open('vscode://file' + filename + ':' + start, '_blank');
    });
}
