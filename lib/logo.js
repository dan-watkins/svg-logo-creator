class Logo {
    constructor(children = []) {
        this.children = children;
    }
    render() {
        throw new Error('Child class must implement a render() method');
    }
    renderLogo() {
    return this.children
    .map((child) => {
        if (typeof child === 'string') {
            return child;
        } else {
            console.log('Error, child is not a string');
        }
        return child.render();
    })
    .join('');
    }
}

module.exports = Logo;