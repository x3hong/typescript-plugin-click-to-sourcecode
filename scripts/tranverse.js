const ts = require('typescript');
function tsTranverse(options) {
    let noop = node => node;
    function getLeaveFn(fnName) {
        return options[fnName] && options[fnName]['leave'] || noop
    }
    function getBeforeFn(fnName) {
        return options[fnName] && options[fnName]['enter'] || options[fnName] || noop
    }
    return function createTransformer(context) {
        //depth-first traversal ast node
        return sourceFile => {
            var visitor = node => {
                let newNode;

                if (1) {
                    if (ts.isNumericLiteral(node)) {
                        node = getBeforeFn('NumericLiteral')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NumericLiteral')(node);
                    };

                    if (ts.isBigIntLiteral(node)) {
                        node = getBeforeFn('BigIntLiteral')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('BigIntLiteral')(node);
                    };

                    if (ts.isStringLiteral(node)) {
                        node = getBeforeFn('StringLiteral')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('StringLiteral')(node);
                    };

                    if (ts.isJsxText(node)) {
                        node = getBeforeFn('JsxText')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxText')(node);
                    };

                    if (ts.isRegularExpressionLiteral(node)) {
                        node = getBeforeFn('RegularExpressionLiteral')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('RegularExpressionLiteral')(node);
                    };

                    if (ts.isNoSubstitutionTemplateLiteral(node)) {
                        node = getBeforeFn('NoSubstitutionTemplateLiteral')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NoSubstitutionTemplateLiteral')(node);
                    };

                    if (ts.isTemplateHead(node)) {
                        node = getBeforeFn('TemplateHead')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TemplateHead')(node);
                    };

                    if (ts.isTemplateMiddle(node)) {
                        node = getBeforeFn('TemplateMiddle')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TemplateMiddle')(node);
                    };

                    if (ts.isTemplateTail(node)) {
                        node = getBeforeFn('TemplateTail')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TemplateTail')(node);
                    };

                    if (ts.isIdentifier(node)) {
                        node = getBeforeFn('Identifier')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('Identifier')(node);
                    };

                    if (ts.isQualifiedName(node)) {
                        node = getBeforeFn('QualifiedName')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('QualifiedName')(node);
                    };

                    if (ts.isComputedPropertyName(node)) {
                        node = getBeforeFn('ComputedPropertyName')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ComputedPropertyName')(node);
                    };

                    if (ts.isPrivateIdentifier(node)) {
                        node = getBeforeFn('PrivateIdentifier')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('PrivateIdentifier')(node);
                    };

                    if (ts.isTypeParameterDeclaration(node)) {
                        node = getBeforeFn('TypeParameterDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypeParameterDeclaration')(node);
                    };

                    if (ts.isParameter(node)) {
                        node = getBeforeFn('Parameter')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('Parameter')(node);
                    };

                    if (ts.isDecorator(node)) {
                        node = getBeforeFn('Decorator')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('Decorator')(node);
                    };

                    if (ts.isPropertySignature(node)) {
                        node = getBeforeFn('PropertySignature')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('PropertySignature')(node);
                    };

                    if (ts.isPropertyDeclaration(node)) {
                        node = getBeforeFn('PropertyDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('PropertyDeclaration')(node);
                    };

                    if (ts.isMethodSignature(node)) {
                        node = getBeforeFn('MethodSignature')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('MethodSignature')(node);
                    };

                    if (ts.isMethodDeclaration(node)) {
                        node = getBeforeFn('MethodDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('MethodDeclaration')(node);
                    };

                    if (ts.isConstructorDeclaration(node)) {
                        node = getBeforeFn('ConstructorDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ConstructorDeclaration')(node);
                    };

                    if (ts.isGetAccessorDeclaration(node)) {
                        node = getBeforeFn('GetAccessorDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('GetAccessorDeclaration')(node);
                    };

                    if (ts.isSetAccessorDeclaration(node)) {
                        node = getBeforeFn('SetAccessorDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('SetAccessorDeclaration')(node);
                    };

                    if (ts.isCallSignatureDeclaration(node)) {
                        node = getBeforeFn('CallSignatureDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('CallSignatureDeclaration')(node);
                    };

                    if (ts.isConstructSignatureDeclaration(node)) {
                        node = getBeforeFn('ConstructSignatureDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ConstructSignatureDeclaration')(node);
                    };

                    if (ts.isIndexSignatureDeclaration(node)) {
                        node = getBeforeFn('IndexSignatureDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('IndexSignatureDeclaration')(node);
                    };

                    if (ts.isTypePredicateNode(node)) {
                        node = getBeforeFn('TypePredicateNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypePredicateNode')(node);
                    };

                    if (ts.isTypeReferenceNode(node)) {
                        node = getBeforeFn('TypeReferenceNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypeReferenceNode')(node);
                    };

                    if (ts.isFunctionTypeNode(node)) {
                        node = getBeforeFn('FunctionTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('FunctionTypeNode')(node);
                    };

                    if (ts.isConstructorTypeNode(node)) {
                        node = getBeforeFn('ConstructorTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ConstructorTypeNode')(node);
                    };

                    if (ts.isTypeQueryNode(node)) {
                        node = getBeforeFn('TypeQueryNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypeQueryNode')(node);
                    };

                    if (ts.isTypeLiteralNode(node)) {
                        node = getBeforeFn('TypeLiteralNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypeLiteralNode')(node);
                    };

                    if (ts.isArrayTypeNode(node)) {
                        node = getBeforeFn('ArrayTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ArrayTypeNode')(node);
                    };

                    if (ts.isTupleTypeNode(node)) {
                        node = getBeforeFn('TupleTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TupleTypeNode')(node);
                    };

                    if (ts.isNamedTupleMember(node)) {
                        node = getBeforeFn('NamedTupleMember')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NamedTupleMember')(node);
                    };

                    if (ts.isOptionalTypeNode(node)) {
                        node = getBeforeFn('OptionalTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('OptionalTypeNode')(node);
                    };

                    if (ts.isRestTypeNode(node)) {
                        node = getBeforeFn('RestTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('RestTypeNode')(node);
                    };

                    if (ts.isUnionTypeNode(node)) {
                        node = getBeforeFn('UnionTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('UnionTypeNode')(node);
                    };

                    if (ts.isIntersectionTypeNode(node)) {
                        node = getBeforeFn('IntersectionTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('IntersectionTypeNode')(node);
                    };

                    if (ts.isConditionalTypeNode(node)) {
                        node = getBeforeFn('ConditionalTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ConditionalTypeNode')(node);
                    };

                    if (ts.isInferTypeNode(node)) {
                        node = getBeforeFn('InferTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('InferTypeNode')(node);
                    };

                    if (ts.isParenthesizedTypeNode(node)) {
                        node = getBeforeFn('ParenthesizedTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ParenthesizedTypeNode')(node);
                    };

                    if (ts.isThisTypeNode(node)) {
                        node = getBeforeFn('ThisTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ThisTypeNode')(node);
                    };

                    if (ts.isTypeOperatorNode(node)) {
                        node = getBeforeFn('TypeOperatorNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypeOperatorNode')(node);
                    };

                    if (ts.isIndexedAccessTypeNode(node)) {
                        node = getBeforeFn('IndexedAccessTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('IndexedAccessTypeNode')(node);
                    };

                    if (ts.isMappedTypeNode(node)) {
                        node = getBeforeFn('MappedTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('MappedTypeNode')(node);
                    };

                    if (ts.isLiteralTypeNode(node)) {
                        node = getBeforeFn('LiteralTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('LiteralTypeNode')(node);
                    };

                    if (ts.isImportTypeNode(node)) {
                        node = getBeforeFn('ImportTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ImportTypeNode')(node);
                    };

                    if (ts.isTemplateLiteralTypeSpan(node)) {
                        node = getBeforeFn('TemplateLiteralTypeSpan')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TemplateLiteralTypeSpan')(node);
                    };

                    if (ts.isTemplateLiteralTypeNode(node)) {
                        node = getBeforeFn('TemplateLiteralTypeNode')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TemplateLiteralTypeNode')(node);
                    };

                    if (ts.isObjectBindingPattern(node)) {
                        node = getBeforeFn('ObjectBindingPattern')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ObjectBindingPattern')(node);
                    };

                    if (ts.isArrayBindingPattern(node)) {
                        node = getBeforeFn('ArrayBindingPattern')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ArrayBindingPattern')(node);
                    };

                    if (ts.isBindingElement(node)) {
                        node = getBeforeFn('BindingElement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('BindingElement')(node);
                    };

                    if (ts.isArrayLiteralExpression(node)) {
                        node = getBeforeFn('ArrayLiteralExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ArrayLiteralExpression')(node);
                    };

                    if (ts.isObjectLiteralExpression(node)) {
                        node = getBeforeFn('ObjectLiteralExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ObjectLiteralExpression')(node);
                    };

                    if (ts.isPropertyAccessExpression(node)) {
                        node = getBeforeFn('PropertyAccessExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('PropertyAccessExpression')(node);
                    };

                    if (ts.isElementAccessExpression(node)) {
                        node = getBeforeFn('ElementAccessExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ElementAccessExpression')(node);
                    };

                    if (ts.isCallExpression(node)) {
                        node = getBeforeFn('CallExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('CallExpression')(node);
                    };

                    if (ts.isNewExpression(node)) {
                        node = getBeforeFn('NewExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NewExpression')(node);
                    };

                    if (ts.isTaggedTemplateExpression(node)) {
                        node = getBeforeFn('TaggedTemplateExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TaggedTemplateExpression')(node);
                    };

                    if (ts.isTypeAssertionExpression(node)) {
                        node = getBeforeFn('TypeAssertionExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypeAssertionExpression')(node);
                    };

                    if (ts.isParenthesizedExpression(node)) {
                        node = getBeforeFn('ParenthesizedExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ParenthesizedExpression')(node);
                    };

                    if (ts.isFunctionExpression(node)) {
                        node = getBeforeFn('FunctionExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('FunctionExpression')(node);
                    };

                    if (ts.isArrowFunction(node)) {
                        node = getBeforeFn('ArrowFunction')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ArrowFunction')(node);
                    };

                    if (ts.isDeleteExpression(node)) {
                        node = getBeforeFn('DeleteExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('DeleteExpression')(node);
                    };

                    if (ts.isTypeOfExpression(node)) {
                        node = getBeforeFn('TypeOfExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypeOfExpression')(node);
                    };

                    if (ts.isVoidExpression(node)) {
                        node = getBeforeFn('VoidExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('VoidExpression')(node);
                    };

                    if (ts.isAwaitExpression(node)) {
                        node = getBeforeFn('AwaitExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('AwaitExpression')(node);
                    };

                    if (ts.isPrefixUnaryExpression(node)) {
                        node = getBeforeFn('PrefixUnaryExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('PrefixUnaryExpression')(node);
                    };

                    if (ts.isPostfixUnaryExpression(node)) {
                        node = getBeforeFn('PostfixUnaryExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('PostfixUnaryExpression')(node);
                    };

                    if (ts.isBinaryExpression(node)) {
                        node = getBeforeFn('BinaryExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('BinaryExpression')(node);
                    };

                    if (ts.isConditionalExpression(node)) {
                        node = getBeforeFn('ConditionalExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ConditionalExpression')(node);
                    };

                    if (ts.isTemplateExpression(node)) {
                        node = getBeforeFn('TemplateExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TemplateExpression')(node);
                    };

                    if (ts.isYieldExpression(node)) {
                        node = getBeforeFn('YieldExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('YieldExpression')(node);
                    };

                    if (ts.isSpreadElement(node)) {
                        node = getBeforeFn('SpreadElement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('SpreadElement')(node);
                    };

                    if (ts.isClassExpression(node)) {
                        node = getBeforeFn('ClassExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ClassExpression')(node);
                    };

                    if (ts.isOmittedExpression(node)) {
                        node = getBeforeFn('OmittedExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('OmittedExpression')(node);
                    };

                    if (ts.isExpressionWithTypeArguments(node)) {
                        node = getBeforeFn('ExpressionWithTypeArguments')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ExpressionWithTypeArguments')(node);
                    };

                    if (ts.isAsExpression(node)) {
                        node = getBeforeFn('AsExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('AsExpression')(node);
                    };

                    if (ts.isNonNullExpression(node)) {
                        node = getBeforeFn('NonNullExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NonNullExpression')(node);
                    };

                    if (ts.isMetaProperty(node)) {
                        node = getBeforeFn('MetaProperty')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('MetaProperty')(node);
                    };

                    if (ts.isSyntheticExpression(node)) {
                        node = getBeforeFn('SyntheticExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('SyntheticExpression')(node);
                    };

                    if (ts.isPartiallyEmittedExpression(node)) {
                        node = getBeforeFn('PartiallyEmittedExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('PartiallyEmittedExpression')(node);
                    };

                    if (ts.isCommaListExpression(node)) {
                        node = getBeforeFn('CommaListExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('CommaListExpression')(node);
                    };

                    if (ts.isTemplateSpan(node)) {
                        node = getBeforeFn('TemplateSpan')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TemplateSpan')(node);
                    };

                    if (ts.isSemicolonClassElement(node)) {
                        node = getBeforeFn('SemicolonClassElement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('SemicolonClassElement')(node);
                    };

                    if (ts.isBlock(node)) {
                        node = getBeforeFn('Block')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('Block')(node);
                    };

                    if (ts.isVariableStatement(node)) {
                        node = getBeforeFn('VariableStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('VariableStatement')(node);
                    };

                    if (ts.isEmptyStatement(node)) {
                        node = getBeforeFn('EmptyStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('EmptyStatement')(node);
                    };

                    if (ts.isExpressionStatement(node)) {
                        node = getBeforeFn('ExpressionStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ExpressionStatement')(node);
                    };

                    if (ts.isIfStatement(node)) {
                        node = getBeforeFn('IfStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('IfStatement')(node);
                    };

                    if (ts.isDoStatement(node)) {
                        node = getBeforeFn('DoStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('DoStatement')(node);
                    };

                    if (ts.isWhileStatement(node)) {
                        node = getBeforeFn('WhileStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('WhileStatement')(node);
                    };

                    if (ts.isForStatement(node)) {
                        node = getBeforeFn('ForStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ForStatement')(node);
                    };

                    if (ts.isForInStatement(node)) {
                        node = getBeforeFn('ForInStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ForInStatement')(node);
                    };

                    if (ts.isForOfStatement(node)) {
                        node = getBeforeFn('ForOfStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ForOfStatement')(node);
                    };

                    if (ts.isContinueStatement(node)) {
                        node = getBeforeFn('ContinueStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ContinueStatement')(node);
                    };

                    if (ts.isBreakStatement(node)) {
                        node = getBeforeFn('BreakStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('BreakStatement')(node);
                    };

                    if (ts.isReturnStatement(node)) {
                        node = getBeforeFn('ReturnStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ReturnStatement')(node);
                    };

                    if (ts.isWithStatement(node)) {
                        node = getBeforeFn('WithStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('WithStatement')(node);
                    };

                    if (ts.isSwitchStatement(node)) {
                        node = getBeforeFn('SwitchStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('SwitchStatement')(node);
                    };

                    if (ts.isLabeledStatement(node)) {
                        node = getBeforeFn('LabeledStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('LabeledStatement')(node);
                    };

                    if (ts.isThrowStatement(node)) {
                        node = getBeforeFn('ThrowStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ThrowStatement')(node);
                    };

                    if (ts.isTryStatement(node)) {
                        node = getBeforeFn('TryStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TryStatement')(node);
                    };

                    if (ts.isDebuggerStatement(node)) {
                        node = getBeforeFn('DebuggerStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('DebuggerStatement')(node);
                    };

                    if (ts.isVariableDeclaration(node)) {
                        node = getBeforeFn('VariableDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('VariableDeclaration')(node);
                    };

                    if (ts.isVariableDeclarationList(node)) {
                        node = getBeforeFn('VariableDeclarationList')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('VariableDeclarationList')(node);
                    };

                    if (ts.isFunctionDeclaration(node)) {
                        node = getBeforeFn('FunctionDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('FunctionDeclaration')(node);
                    };

                    if (ts.isClassDeclaration(node)) {
                        node = getBeforeFn('ClassDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ClassDeclaration')(node);
                    };

                    if (ts.isInterfaceDeclaration(node)) {
                        node = getBeforeFn('InterfaceDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('InterfaceDeclaration')(node);
                    };

                    if (ts.isTypeAliasDeclaration(node)) {
                        node = getBeforeFn('TypeAliasDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('TypeAliasDeclaration')(node);
                    };

                    if (ts.isEnumDeclaration(node)) {
                        node = getBeforeFn('EnumDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('EnumDeclaration')(node);
                    };

                    if (ts.isModuleDeclaration(node)) {
                        node = getBeforeFn('ModuleDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ModuleDeclaration')(node);
                    };

                    if (ts.isModuleBlock(node)) {
                        node = getBeforeFn('ModuleBlock')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ModuleBlock')(node);
                    };

                    if (ts.isCaseBlock(node)) {
                        node = getBeforeFn('CaseBlock')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('CaseBlock')(node);
                    };

                    if (ts.isNamespaceExportDeclaration(node)) {
                        node = getBeforeFn('NamespaceExportDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NamespaceExportDeclaration')(node);
                    };

                    if (ts.isImportEqualsDeclaration(node)) {
                        node = getBeforeFn('ImportEqualsDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ImportEqualsDeclaration')(node);
                    };

                    if (ts.isImportDeclaration(node)) {
                        node = getBeforeFn('ImportDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ImportDeclaration')(node);
                    };

                    if (ts.isImportClause(node)) {
                        node = getBeforeFn('ImportClause')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ImportClause')(node);
                    };

                    if (ts.isNamespaceImport(node)) {
                        node = getBeforeFn('NamespaceImport')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NamespaceImport')(node);
                    };

                    if (ts.isNamespaceExport(node)) {
                        node = getBeforeFn('NamespaceExport')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NamespaceExport')(node);
                    };

                    if (ts.isNamedImports(node)) {
                        node = getBeforeFn('NamedImports')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NamedImports')(node);
                    };

                    if (ts.isImportSpecifier(node)) {
                        node = getBeforeFn('ImportSpecifier')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ImportSpecifier')(node);
                    };

                    if (ts.isExportAssignment(node)) {
                        node = getBeforeFn('ExportAssignment')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ExportAssignment')(node);
                    };

                    if (ts.isExportDeclaration(node)) {
                        node = getBeforeFn('ExportDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ExportDeclaration')(node);
                    };

                    if (ts.isNamedExports(node)) {
                        node = getBeforeFn('NamedExports')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NamedExports')(node);
                    };

                    if (ts.isExportSpecifier(node)) {
                        node = getBeforeFn('ExportSpecifier')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ExportSpecifier')(node);
                    };

                    if (ts.isMissingDeclaration(node)) {
                        node = getBeforeFn('MissingDeclaration')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('MissingDeclaration')(node);
                    };

                    if (ts.isNotEmittedStatement(node)) {
                        node = getBeforeFn('NotEmittedStatement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('NotEmittedStatement')(node);
                    };

                    if (ts.isExternalModuleReference(node)) {
                        node = getBeforeFn('ExternalModuleReference')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ExternalModuleReference')(node);
                    };

                    if (ts.isJsxElement(node)) {
                        node = getBeforeFn('JsxElement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxElement')(node);
                    };

                    if (ts.isJsxSelfClosingElement(node)) {
                        node = getBeforeFn('JsxSelfClosingElement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxSelfClosingElement')(node);
                    };

                    if (ts.isJsxOpeningElement(node)) {
                        node = getBeforeFn('JsxOpeningElement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxOpeningElement')(node);
                    };

                    if (ts.isJsxClosingElement(node)) {
                        node = getBeforeFn('JsxClosingElement')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxClosingElement')(node);
                    };

                    if (ts.isJsxFragment(node)) {
                        node = getBeforeFn('JsxFragment')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxFragment')(node);
                    };

                    if (ts.isJsxOpeningFragment(node)) {
                        node = getBeforeFn('JsxOpeningFragment')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxOpeningFragment')(node);
                    };

                    if (ts.isJsxClosingFragment(node)) {
                        node = getBeforeFn('JsxClosingFragment')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxClosingFragment')(node);
                    };

                    if (ts.isJsxAttribute(node)) {
                        node = getBeforeFn('JsxAttribute')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxAttribute')(node);
                    };

                    if (ts.isJsxAttributes(node)) {
                        node = getBeforeFn('JsxAttributes')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxAttributes')(node);
                    };

                    if (ts.isJsxSpreadAttribute(node)) {
                        node = getBeforeFn('JsxSpreadAttribute')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxSpreadAttribute')(node);
                    };

                    if (ts.isJsxExpression(node)) {
                        node = getBeforeFn('JsxExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JsxExpression')(node);
                    };

                    if (ts.isCaseClause(node)) {
                        node = getBeforeFn('CaseClause')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('CaseClause')(node);
                    };

                    if (ts.isDefaultClause(node)) {
                        node = getBeforeFn('DefaultClause')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('DefaultClause')(node);
                    };

                    if (ts.isHeritageClause(node)) {
                        node = getBeforeFn('HeritageClause')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('HeritageClause')(node);
                    };

                    if (ts.isCatchClause(node)) {
                        node = getBeforeFn('CatchClause')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('CatchClause')(node);
                    };

                    if (ts.isPropertyAssignment(node)) {
                        node = getBeforeFn('PropertyAssignment')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('PropertyAssignment')(node);
                    };

                    if (ts.isShorthandPropertyAssignment(node)) {
                        node = getBeforeFn('ShorthandPropertyAssignment')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('ShorthandPropertyAssignment')(node);
                    };

                    if (ts.isSpreadAssignment(node)) {
                        node = getBeforeFn('SpreadAssignment')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('SpreadAssignment')(node);
                    };

                    if (ts.isEnumMember(node)) {
                        node = getBeforeFn('EnumMember')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('EnumMember')(node);
                    };

                    if (ts.isUnparsedPrepend(node)) {
                        node = getBeforeFn('UnparsedPrepend')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('UnparsedPrepend')(node);
                    };

                    if (ts.isSourceFile(node)) {
                        node = getBeforeFn('SourceFile')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('SourceFile')(node);
                    };

                    if (ts.isBundle(node)) {
                        node = getBeforeFn('Bundle')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('Bundle')(node);
                    };

                    if (ts.isUnparsedSource(node)) {
                        node = getBeforeFn('UnparsedSource')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('UnparsedSource')(node);
                    };

                    if (ts.isJSDocTypeExpression(node)) {
                        node = getBeforeFn('JSDocTypeExpression')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocTypeExpression')(node);
                    };

                    if (ts.isJSDocNameReference(node)) {
                        node = getBeforeFn('JSDocNameReference')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocNameReference')(node);
                    };

                    if (ts.isJSDocAllType(node)) {
                        node = getBeforeFn('JSDocAllType')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocAllType')(node);
                    };

                    if (ts.isJSDocUnknownType(node)) {
                        node = getBeforeFn('JSDocUnknownType')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocUnknownType')(node);
                    };

                    if (ts.isJSDocNullableType(node)) {
                        node = getBeforeFn('JSDocNullableType')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocNullableType')(node);
                    };

                    if (ts.isJSDocNonNullableType(node)) {
                        node = getBeforeFn('JSDocNonNullableType')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocNonNullableType')(node);
                    };

                    if (ts.isJSDocOptionalType(node)) {
                        node = getBeforeFn('JSDocOptionalType')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocOptionalType')(node);
                    };

                    if (ts.isJSDocFunctionType(node)) {
                        node = getBeforeFn('JSDocFunctionType')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocFunctionType')(node);
                    };

                    if (ts.isJSDocVariadicType(node)) {
                        node = getBeforeFn('JSDocVariadicType')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocVariadicType')(node);
                    };

                    if (ts.isJSDocNamepathType(node)) {
                        node = getBeforeFn('JSDocNamepathType')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocNamepathType')(node);
                    };

                    if (ts.isJSDoc(node)) {
                        node = getBeforeFn('JSDoc')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDoc')(node);
                    };

                    if (ts.isJSDocTypeLiteral(node)) {
                        node = getBeforeFn('JSDocTypeLiteral')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocTypeLiteral')(node);
                    };

                    if (ts.isJSDocSignature(node)) {
                        node = getBeforeFn('JSDocSignature')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocSignature')(node);
                    };

                    if (ts.isJSDocAugmentsTag(node)) {
                        node = getBeforeFn('JSDocAugmentsTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocAugmentsTag')(node);
                    };

                    if (ts.isJSDocAuthorTag(node)) {
                        node = getBeforeFn('JSDocAuthorTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocAuthorTag')(node);
                    };

                    if (ts.isJSDocClassTag(node)) {
                        node = getBeforeFn('JSDocClassTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocClassTag')(node);
                    };

                    if (ts.isJSDocCallbackTag(node)) {
                        node = getBeforeFn('JSDocCallbackTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocCallbackTag')(node);
                    };

                    if (ts.isJSDocPublicTag(node)) {
                        node = getBeforeFn('JSDocPublicTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocPublicTag')(node);
                    };

                    if (ts.isJSDocPrivateTag(node)) {
                        node = getBeforeFn('JSDocPrivateTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocPrivateTag')(node);
                    };

                    if (ts.isJSDocProtectedTag(node)) {
                        node = getBeforeFn('JSDocProtectedTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocProtectedTag')(node);
                    };

                    if (ts.isJSDocReadonlyTag(node)) {
                        node = getBeforeFn('JSDocReadonlyTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocReadonlyTag')(node);
                    };

                    if (ts.isJSDocDeprecatedTag(node)) {
                        node = getBeforeFn('JSDocDeprecatedTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocDeprecatedTag')(node);
                    };

                    if (ts.isJSDocEnumTag(node)) {
                        node = getBeforeFn('JSDocEnumTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocEnumTag')(node);
                    };

                    if (ts.isJSDocParameterTag(node)) {
                        node = getBeforeFn('JSDocParameterTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocParameterTag')(node);
                    };

                    if (ts.isJSDocReturnTag(node)) {
                        node = getBeforeFn('JSDocReturnTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocReturnTag')(node);
                    };

                    if (ts.isJSDocThisTag(node)) {
                        node = getBeforeFn('JSDocThisTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocThisTag')(node);
                    };

                    if (ts.isJSDocTypeTag(node)) {
                        node = getBeforeFn('JSDocTypeTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocTypeTag')(node);
                    };

                    if (ts.isJSDocTemplateTag(node)) {
                        node = getBeforeFn('JSDocTemplateTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocTemplateTag')(node);
                    };

                    if (ts.isJSDocTypedefTag(node)) {
                        node = getBeforeFn('JSDocTypedefTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocTypedefTag')(node);
                    };

                    if (ts.isJSDocUnknownTag(node)) {
                        node = getBeforeFn('JSDocUnknownTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocUnknownTag')(node);
                    };

                    if (ts.isJSDocPropertyTag(node)) {
                        node = getBeforeFn('JSDocPropertyTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocPropertyTag')(node);
                    };

                    if (ts.isJSDocImplementsTag(node)) {
                        node = getBeforeFn('JSDocImplementsTag')(node);
                        node = ts.visitEachChild(node, visitor, context);
                        getLeaveFn('JSDocImplementsTag')(node);
                    };


                }

                return node;
            };

            return ts.visitNode(sourceFile, visitor);
        };
    };
}

module.exports = tsTranverse;
