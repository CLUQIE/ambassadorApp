import $ from "jquery";
let id = 5
let urlExport = 'https://exporter.azurewebsites.net/api/export/ExportFromJSON/' + id;

function findExtension(id) {
    switch (id) {
        case 5:
            return "xlsx";
        case 4:
            return "docx";
        case 3:
            return "pdf";
        default:
            return "notKnown" + id;
    }
}

export function excelReport(data) {
    let ext = findExtension(id);
    let sortData = data.map((element) => {
        delete element._id;
        delete element.__v;
        delete element.uploadsLinks;
        console.log(element)
        return element
    });
    sortData = JSON.stringify(sortData)

    $.ajax({
        type: "POST",
        url: urlExport,
        data: JSON.stringify({ 'data': sortData }),
        datatype: "JSON",
        contentType: "application/json; charset=utf-8"
    })
        .done(function (result) {
            let urlDownload = 'http://exporter.azurewebsites.net/api/export/GetFile/' + result;
            urlDownload += "?fileName=ReportOfAmbassador&extension=" + ext;
            window.location.href=urlDownload
        })
        .fail(function (f) {
            alert("error:" + f.responseText);
        });
}