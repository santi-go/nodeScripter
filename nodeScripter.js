fs = require('fs');

let entry = {
    iterableItems: [
        "'Bull & Anchor, Ash Green'",
        "'Flyer, Chelmsford'",
        "'Harrier, Peterborough'",
        "'Jolly Scotchman (Sleaford)'",
        "'Romans Rest (Worksop)'",
        "'Boundary House (Abingdon)'",
        "'Hayride, Beverley'",
        "'Hop House, Tunbridge Wells'",
        "'Mill House (Broughton)'",
        "'Punch & Judy, Grafton Way Ipswich'",
        "'Sailmakers, Hull'",
        "'Air Balloon (Filton)'",
        "'Albion, Rainham'",
        "'Amington, Tamworth'",
        "'Angel Inn (Rothwell)'",
        "'Bay Horse (Ashton-In-Makerfield)'",
        "'Belfry (Beighton)'",
        "'Birch Tree, Birkenhead'",
        "'Blue Bell (Attenborough)'",
        "'Bowman (Hucknall)'",
        "'Brentwood Hotel, Rotherham'",
        "'Bridge Inn, Port Sunlight'",
        "'Bridgewater Arms, Leeds'",
        "'Brinkburn (Darlington)'",
        "'Bull (Horns Cross)'",
        "'Bullock Smithy (Hazel Grove)'",
        "'Butchers Arms, Great Sankey'",
        "'Cardiff Bay Tavern (Cardiff)'",
        "'Carousel (Reddish)'",
        "'Carr Mill, St. Helens'",
        "'Castle, Bristol'",
        "'Castle Hotel, Droitwich'",
        "'Cat & Lion (Stretton)'",
        "'Chambers'",
        "'Chase Hotel'",
        "'Coach & Horses, Portsmouth'",
        "'Cock Hotel, Worsley'",
        "'Cocked Hat, Gosport'",
        "'Corn Exchange, Brierley Hill'",
        "'Corner House (Branston)'",
        "'Corner House Hotel (Newcastle-Upon-Tyne)'",
        "'Coventry Oak (Wyken)'",
        "'Cross, Kingswinford'",
        "'Donkey Derby, Chesterfield'",
        "'Downham Arms (Wickford)'",
        "'Drawbridge Inn (Shirley)'",
        "'Duke of Wellington, Kenton'",
        "'Fair Maid, Cottingham'",
        "'Five Bells, Finchley'",
        "'Fountain, South Shields'",
        "'Fox & Crown, Sutton-in-Ashfield'",
        "'Fox & Hounds, Newcastle upon Tyne'",
        "'Fox Hunters, North Shields'",
        "'Friar Tuck'",
        "'Glasshouse, Wath-upon-Dearne'",
        "'Golden Eagle, Thornton Cleveleys'",
        "'Good Intent, Hornchurch'",
        "'Gosling Bridge Inn, Carlisle'",
        "'Grace Arms'",
        "'Hare & Hounds (Tarbock)'",
        "'Hill Top, Stanley'",
        "'Hinckley Knight, Hinckley'",
        "'Jolly Miller (West Derby)'",
        "'Lamb Inn (Rustington)'",
        "'Local Hero, Leicester'",
        "'Lodge, Alvaston'",
        "'Lord Derby, Lytham St. Annes'",
        "'Lumbertubs, Boothville'",
        "'Lupset Hotel, Wakefield'",
        "'Lutley Oak, Halesowen'",
        "'Man of Gwent, Newport'",
        "'Mulberry (Goring-By-Sea)'",
        "'Nags Head (Mickleover)'",
        "'Narborough Arms (Narborough)'",
        "'Nelson Hotel, Wallasey'",
        "'Norman Conquest, Middlesbrough'",
        "'Nosey Parker, Lincoln'",
        "'Number 3, Blackpool'",
        "'Old Ash Tree, Chatham'",
        "'Old Grey Mare, Hull'",
        "'Old Leyland Gates, Leyland'",
        "'Old Walnut Tree, Southend-on-Sea'",
        "'Pack Horse (Burnopfield)'",
        "'Parc-Y-Prior Inn (Malpas)'",
        "'Peacock Hotel (Chester)'",
        "'Pelican (West Timperley)'",
        "'Plough (Houghton Green)'",
        "'Polite Vicar (Basford)'",
        "'Prince of Wales, Fleet'",
        "'Prince of Wales, Jarrow'",
        "'Priorslee (Priorslee)'",
        "'Quakerwood, Acomb'",
        "'Queen B, Chelmsford'",
        "'Railway Hotel, Greenford'",
        "'Ridgeway Arms (Mosborough)'",
        "'Robin Hood (Clifton)'",
        "'Rodmill, Eastbourne'",
        "'Rope Walk, Huddersfield'",
        "'Rose & Crown (Lenton)'",
        "'Roundel (Thornaby)'",
        "'Rovers Tye, Colchester'",
        "'Royal George , Ipswich'",
        "'Seven Stars Inn (Eccleston)'",
        "'Sherwin Arms (Bramcote)'",
        "'Shovels (Marton Moss)'",
        "'Singing Chocker (Glasshoughton)'",
        "'Sir John Brunner, Northwich'",
        "'Southern Cross, Middlesbrough'",
        "'Southern Cross, Watford'",
        "'Summit Inn (Royton)'",
        "'Surrey (St Johns)'",
        "'Sussex Barn, Horsham'",
        "'Swift Hound, Blackpool'",
        "'Tamar, Crownhill'",
        "'Tiger Moth, Chatham'",
        "'Torch, Wembley'",
        "'Travellers Rest, Hartlepool'",
        "'Venture (Highfield)'",
        "'Village Green (Stockland Green)'",
        "'Waggon Team, Gateshead'",
        "'Walter Tull (Sixfields)'",
        "'Warren Lodge, Scunthorpe'",
        "'Water Tower (Tilehurst)'",
        "'Waterside Inn (Goodrington)'",
        "'Wheatsheaf (Great Wyrley)'",
        "'Whistling Goose (Sutton Fields)'",
        "'White Horse, Sutton Coldfield'",
        "'Whitehills, Northampton'",
        "'Yacht, Bexleyheath'",
        "'Yardley Arms (Stechford)'",
        "'Yarrowbridge, Chorley'",
        "'Starting Gate, Nottingham'",
        "'Royal Sovereign (Salford)'",
        "'Shuttle & Loom, Darlington'",
        "'Wellington (Bury)'",
        "'Feathers, Maidstone'"
    ],
    parts: [
        "(@SiteID, @Lang, @Device, 'group_100', ",
        ", ",
        ", NULL, 'belhaven', NULL),\n"
    ],
    reference: [
        "(@SiteID, @Lang, @Device, 'group_100', 244, 'Old Schoolhouse (Glasgow)', 'Old Schoolhouse (Glasgow)', 'Old Schoolhouse (Glasgow)', NULL, 'belhaven', NULL),"
    ],
    code : "parts[0]+sortNumber+parts[1]+el+parts[1]+el+parts[1]+el+parts[2]"
}


function printer(e) {
    let data = packer(e);
    
    fs.writeFile('proccesed/script.sql', data, (err) => {
        if(err) return console.log(err);
        console.log('script.sql - Created Successfully!');
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

        lines.push(e.parts[0]+sortNumber+e.parts[1]+el+e.parts[1]+el+e.parts[1]+el+e.parts[2]);
    });
    
    return lines;
}

printer(entry);

