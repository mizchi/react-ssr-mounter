# React Server Side Rendering Mounter

```
npm install @mizchi/react-ssr-mounter --save
```

## Usage

Server Side HTML

```html
<div class='wrapper'>
  <div data-react-class='T.Hello' data-react-props='{}'></div>
</div>
```

JavaScript

```js
window.T = {}
T.Hello = React.createClass({
  render(){return <div><h1>hello</h1></div>;}
});

let {initComponents} = require('@mizchi/react-ssr-mounter');
window.addEventListener("load", () => {
  var components = initComponents();
});
```

## LICENSE

MIT
