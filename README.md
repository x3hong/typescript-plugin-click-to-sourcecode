a typescript plugin,
It helps you jump to the source code by clicking on elements in the page while developing the page
#### install
```
npm i 
```
#### run 

```
npm run webpack
```

If you are a MAC user, hold option down，then click on the text inside the page.

If you are a Windows user, hold Alt down，then click on the text inside the page.

then You'll see the jump to source code in the vscode.

#### how to embed into your ts-loader？
first:
```
{
    test: /\.tsx?$/,
    use: [
        {
        loader: 'ts-loader',
        options: {
            getCustomTransformers: path.join(__dirname, './scripts/ts.js'),
        },
        }

    ]
    },
``
then restart the webpack.

