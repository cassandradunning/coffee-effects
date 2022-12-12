const coffees = [
    "light colombian roast", "hawaiian dark roast", "guatemalan blend medium roast",
    "dark madagascar blend", "jamaican dark blue", "jamaican medium roast",
    "salvador robusto light"
]

let output = ""

for (const coffee of coffees) {
    if (coffee.includes("light")) {
        output += `I'll have the ${"light colombian roast" || "salvador robuston light"} and drink it black`
    }
    else if (coffee.includes("medium")) {
        output += `I'll have the ${"guatemalan blend medium roast"|| "jamaican medium roast"} and add cream only`
    }
    else if (coffee.includes("dark")) {
        output += `I'll have the ${"hawaiian dark roast" || "dark madagascar blend" || "jamaican dark blue"} and add cream and sugar`
    }
    output += "\n"
}

console.log(output)
