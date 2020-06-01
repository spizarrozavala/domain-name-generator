let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function domGenerator() {
    let domain = "";
    let ul = document.createElement("ul")
        document.body.appendChild(ul)
    for (let i = 0; i < pronoun.length; i++) {
        //console.log(pronoun[i])
        for (let j = 0; j < adj.length; j++) {
            //console.log(adj[j])       
            for (let k = 0; k < noun.length; k++) {
                //console.log(noun[k])
                //console.log(pronoun[i] + adj[j] + noun[k] + ".com")
                domain = document.createTextNode(pronoun[i] + adj[j] + noun[k] + ".com");
                //console.log(domain)
                let li = document.createElement("li")
                li.appendChild(domain)
                ul.appendChild(li)
            }
        }
    }
    
}







