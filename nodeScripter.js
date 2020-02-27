fs = require('fs');

let entry = {
    iterableItems: [
        'uno',
        'dos',
        'tres'
    ],
    parts: [
        '(@SiteID, ',
        ', NULL, NULL, ',
        ', GETDATE(), 0, 1, NULL),\n'
    ]
}

function printer(e) {
    let data = packer(e);
    
    fs.writeFile('proccesed/script.txt', data, (err) => {
        if(err) return console.log(err);
        console.log('script.txt - Created Successfully!');
    })
}

function packer(e) {
    let package = assambler(e);
    
    return package.join("");

}

function assambler(e) {
    let lines = [];

    e.iterableItems.forEach((el, index) => {
        let sortNumber = (index+1);

        lines.push(e.parts[0]+sortNumber+e.parts[1]+el+e.parts[2]);
    });
    
    return lines;
}

printer(entry);

