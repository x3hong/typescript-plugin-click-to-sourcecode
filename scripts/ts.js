const ts = require('typescript');
const path = require('path');
const str = path.resolve(__dirname, 'click.js');
const tsTranverse = require('./tranverse');

let fileName = '';
const createTransformer = tsTranverse({
    SourceFile: {
        enter(node) {
            fileName = node.fileName;
            if (/\.tsx$/.test(fileName)) {
                console.log(node.getText());
                node.statements.unshift(
                    ts.factory.createImportDeclaration(
                        undefined,
                        undefined,
                        undefined,
                        ts.factory.createStringLiteral(str)
                    )
                );
            }
            return node;
        },
    },
    JsxOpeningElement: {
        enter(node) {
            let tagName = node.tagName.getText();
            let code = tagName.charCodeAt(0);
            const RANGS = 'az';
            //ignore components，because it can't be displayed in page .
            if (code < RANGS.charCodeAt(0) || code > RANGS.charCodeAt(1)) return node;
            const sourceData = JSON.stringify({
                filename: fileName,
                start: node.getStart(),
            });
            let attributes = [...node.attributes.properties];
            attributes.unshift(
                ts.factory.createJsxAttribute(
                    ts.factory.createIdentifier('data-line'),
                    ts.factory.createStringLiteral(sourceData)
                )
            );

            return ts.setOriginalNode(
                ts.factory[
                    //<div></div>
                    ts.isJsxOpeningElement(node)
                        ? 'createJsxOpeningElement'
                        : //self-close tag.eg:<input />
                        'createJsxSelfClosingElement'
                ](
                    ts.factory.createIdentifier(tagName),
                    undefined,
                    ts.factory.createJsxAttributes(attributes)
                ),
                node
            );
        },
    },
});

const getCustomTransformers = () => ({ before: [createTransformer] });
module.exports = getCustomTransformers;
