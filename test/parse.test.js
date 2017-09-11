import loader from '../index';
import fs from 'fs';
import path from 'path';

describe('the parse of smarty-ast-loader', function() {
  it('smarty-ast-loader', function() {
    var template = fs.readFileSync(path.join(__dirname, './comp.tpl'), 'utf8');
    var ast = loader(template);
    console.log(ast);
  })
})