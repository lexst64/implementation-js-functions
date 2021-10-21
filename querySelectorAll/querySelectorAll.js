/**
 * @param {HTMLElement} element HTMLElement
 * @param {String} selector selector
 * @return {Array} array of matching HTMLelements
 */
function myQuerySelectorAll(element, selector) {
    const matchesFn =
            Element.prototype.matches ||
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector
    return getMatches(element, selector, matchesFn)
}

function getMatches(element, selector, matchesFn) {
    const result = []
    Array.from(element.children).forEach((child) => {
        if (matchesFn.call(child, selector)) {
            result.push(child)
        }
        if (child.children) {
            result.push(...getMatches(child, selector, matchesFn))
        }
    })
    return result
}