class MaskExtensions {

    #maskExtensionElement = document.querySelector(".extension-mask")
    #width = 0
    #height = 0

    /**
     * @param {string} svgName
     * @param {number} width
     */
    constructor({
        svgName: svgName,
        width,
        height
    }) {

        this.#width = width
        this.#height = height

        if (!(this.#maskExtensionElement instanceof HTMLElement)) return

        this.#maskExtensionElement.style.maskImage = `url(../img/${svgName})`
        this.#maskExtensionElement.style.webkitMaskImage = `url(../img/${svgName})`

        this.#maskExtensionElement.style.maskSize = `${width}px auto`
        this.#maskExtensionElement.style.webkitMaskSize = `${width}px auto`
 
        this.#setMaskPosition({
            x: window.innerWidth - width ,
            y: window.innerHeight - height
        })
        window.addEventListener("click", e => this.#detectClick({
            x: e.clientX,
            y: e.clientY,
            vwidth: window.innerWidth,
            vheight: window.innerHeight
        }))
        /** window.addEventListener("mousemove", e => this.#setMaskPosition({
             x: e.clientX,
         // this.#setMaskPosition({x: width*.3, y:window.innerHeight - width * .5})
         window.addEventListener("mousemove", e => this.#setMaskPosition({
             x: e.clientX, // ou width * .25 
             y: e.clientY,
         })) */


    }

    /**
     * @param {number} x
     * @param {number} y
     */
    #setMaskPosition({
        x,
        y
    }) {
        this.#maskExtensionElement.style.maskPosition = `${x - this.#width/2}px ${y - this.#height/8}px`
        this.#maskExtensionElement.style.webkitMaskPosition = `${x - this.#width/2}px ${y - this.#height/8}px`
    }

    #detectClick({
        x,
        y,
        vwidth,
        vheight
    }) {
        if ( x < vwidth - this.#width && x > vwidth - this.#width * 2 && y > vheight - this.#height && y < vheight ) {
            window.location.href="/"
        }
    }
}