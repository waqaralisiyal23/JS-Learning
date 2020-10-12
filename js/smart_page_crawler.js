// You have to create a varibale which is a string containing the text which is a link you 
// are interested in .You have to fetch all links from a given page which contains this text
let str = 'python';
let links = document.links;
console.log(links);

let href;
Array.from(links).forEach(function(element){
    href = element.href;
    if(href.includes(str)){
        console.log(href);
    }
});