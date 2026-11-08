const photos = JSON.parse(content);

/* put your code after this */
function createSpanElements(photo) {
    let spanArr = [];

    for (let color of photo.colors) {
        const span = document.createElement("span");
        span.style.backgroundColor = color.hex;
        spanArr.push(span);
    }
    
    return spanArr;
}

function createFigcaption(photo) {
    const h2 = document.createElement("h2");
    h2.textContent = photo.title;

    const p = document.createElement("p");
    p.textContent = photo.description;

    const spanArr = createSpanElements(photo);
    const figcaption = document.createElement("figcaption");

    figcaption.appendChild(h2);
    figcaption.appendChild(p);
    for (let span of spanArr) {
        figcaption.appendChild(span);
    }

    return figcaption;
}

function createFigures(photos) {
    const figures = [];

    for (let photo of photos) {
        const img = document.createElement("img");
        img.src = "images/" + photo.filename;
        img.alt = photos.title;
        const figcaption = createFigcaption(photo);

        const figure = document.createElement("figure");
        figure.appendChild(img);
        figure.appendChild(figcaption);
        figures.push(figure);
    }

    return figures;
}

function main() {
    const figures = createFigures(photos);
    const parentSection = document.querySelector("#parent");
    for (let figure of figures) {
        parentSection.appendChild(figure);
    }
}

main();


