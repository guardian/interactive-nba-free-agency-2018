import templateHTML from "./src/templates/main.html!text"
import Mustache from 'mustache'
import rp from 'request-promise'

export function render() {
    return rp({
        uri: 'https://interactive.guim.co.uk/docsdata-test/1fGilmdeJAip_dcnxxytygYUoOqgldPpW4s1a4pAyFjk.json',
        json: true
    }).then((data) => {
        var sheets = data.sheets;
        console.log(sheets)
        var html = Mustache.render(templateHTML, sheets, {});
        return html;
    });

  }