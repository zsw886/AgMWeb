function showLeftNavi() {
    var content = new Array(
        '"name": "eva_meteo", "desc": "气象条件评价", "path": "eva/meteo"',
        '"name": "eva_crop", "desc": "作物生长评价", "path": "eva/crop"',
        '"name": "eva_soil", "desc": "土壤湿度监测评价", "path": "eva/soil"');

    var ul = $$('leftnavi');
    for (var i = 0; i < content.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = "11";
        li.appendChild(li);
    }
}

function add(path, txt) {
    var ul = $$('leftnavi');
    var li = document.createElement("li");
    var href_a = document.createElement("a");
    href_a.href = "#"; //
    href_a.innerHTML = "ref";
    li.innerHTML = txt;
    li.appendChild(href_a);
    ul.appendChild(li);
}