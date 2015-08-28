// from 'A.B.C' to window.A.B.C reference safely
function _resolveReference(name) {
  const s = name.split('.');
  var i;
  var ref = global;
  while (i = s.shift()) {
    ref = ref[i];
  }
  return ref;
}

function _parseProps(el) {
  var str = el.getAttribute('data-react-props');
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
}

function _getComponentClass(el) {
  var str = el.getAttribute('data-react-class');
  return _resolveReference(str);
}

function initComponents(selector) {
  if (selector == null) selector = '[data-react-class]';

  var components = [];
  var roots = document.querySelectorAll(selector);
  for (var i = 0; i < roots.length; i++) {
    var el = roots[i];
    var name = el.getAttribute('data-react-class');
    var props = _parseProps(el);
    var component = _getComponentClass(el);
    var mounted = React.render(
      React.createElement(component, props),
      el.parentElement
    );
    components.push({name: name, mounted: mounted});
  }
  return components;
}

module.exports = {initComponents: initComponents};

