export function scrollToTop() {
    window.scrollTo(0, 0);
}

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};