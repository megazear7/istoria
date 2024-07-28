$.evalFile(activeDocument.path.fullName + "/photofoundry.js");
$.evalFile(activeDocument.path.fullName + "/cards/cards.js");

photofoundry(data(), {
    columns: 1,
    rows: 1,
    clean: data()[0],
    mapping: mapping
});

function mapping(item) {
    var newItem = {
        toggles: [],
        text: {
            title: item.title ? item.title : ""
        },
        elements: {
        },
        print: !! item.print
    };

    return newItem;
}
