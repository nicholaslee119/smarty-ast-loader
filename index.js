import Jsmart from 'jsmart';

module.exports = function (source) {
  const jSmart = new Jsmart(source);
  const ast = jSmart.tree;
  return ast;
}
