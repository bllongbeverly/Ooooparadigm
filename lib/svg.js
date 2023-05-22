class SVG {
    
    constructor() {
          this.elements = []; // Array to store SVG elements
        }
    
        addElement(element) {
          // Add an SVG element to the array
        this.elements.push(element);
        }
    
        renderToFile(filename) {
          // Render the SVG elements to a file
        const svgContent = this.generateSVGContent();
          // Use the writeFile function from the fs/promises module to write the content to a file
        writeFile(filename, svgContent)
            .then(() => {
            console.log(`SVG successfully rendered to ${filename}`);
            })
            .catch((error) => {
            console.error(`Error rendering SVG to ${filename}:`, error);
            });
        }
    
        generateSVGContent() {
          // Generate the SVG content by combining all the SVG elements
        const svgHeader = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">\n';
        const svgFooter = '</svg>\n';
        const elementsContent = this.elements.map((element) => element.render()).join('\n');
        return svgHeader + elementsContent + svgFooter;
        }
    }
module.exports = SVG;
 

