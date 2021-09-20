import { expect } from 'chai';
import render, { register } from '../lib/index.js';

describe('geneasy-handlebars', () => {
  it('render should to be a function', async () => {
    expect(render).to.be.a('function');
  });

  it('should throw an error if template not provided', async () => {
    try {
      await render();
      expect.fail('was not supposed to succeed');
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });

  it('should render template without data', async () => {
    const result = await render('hello, {{what}}!');
    expect(result).equals('hello, !');
  });

  it('should render template with data', async () => {
    const result = await render('hello, {{what}}!', { what: 'world' });
    expect(result).equals('hello, world!');
  });

  it('should render template with toLowerCase helper', async () => {
    const result = await render('hello, {{toLowerCase what}}!', {
      what: 'WORLD'
    });
    expect(result).equals('hello, world!');
  });

  it('should render template with toUpperCase helper', async () => {
    const result = await render('hello, {{toUpperCase what}}!', {
      what: 'world'
    });
    expect(result).equals('hello, WORLD!');
  });

  it('should render template with toTitleCase helper', async () => {
    const result = await render('hello, {{toTitleCase what}}!', {
      what: 'wonderful world'
    });
    expect(result).equals('hello, Wonderful World!');
  });

  it('should render template with toCamelCase helper', async () => {
    const result = await render('hello, {{toCamelCase what}}!', {
      what: 'wonderful-world'
    });
    expect(result).equals('hello, wonderfulWorld!');
  });

  it('register should to be a function', async () => {
    expect(register).to.be.a('function');
  });
});
