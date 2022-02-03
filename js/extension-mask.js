class MaskExtensions {

    #maskExtensionElement = document.querySelector(".extension-mask")
    #width = 0

    /**
     * @param {string} svgName
     * @param {number} width
     */
    constructor({svgName: svgName, width}) {

        this.#width = width

        if (!(this.#maskExtensionElement instanceof HTMLElement)) return

        this.#maskExtensionElement.style.maskImage        = `url(../img/${svgName})`
        this.#maskExtensionElement.style.webkitMaskImage  = `url(../img/${svgName})`

        this.#maskExtensionElement.style.maskSize         = `${width}px auto`
        this.#maskExtensionElement.style.webkitMaskSize   = `${width}px auto`
        // this.#setMaskPosition({x: width*.3, y:window.innerHeight - width * .5})
        window.addEventListener("mousemove", e => this.#setMaskPosition({
            x: e.clientX, // ou width * .25 
            y: e.clientY,
        }))
    }

    /**
     * @param {number} x
     * @param {number} y
     */
    #setMaskPosition({x, y}) {
        this.#maskExtensionElement.style.maskPosition       = `${x - this.#width/2}px ${y}px`
        this.#maskExtensionElement.style.webkitMaskPosition = `${x - this.#width/2}px ${y}px`
    }
}


