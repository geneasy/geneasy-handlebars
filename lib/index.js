import Handlebars from 'handlebars';

import helpers from 'handlebars-helpers';

helpers({
  handlebars: Handlebars
});

/*
 * Custom Handlebars Helpers
 */
Handlebars.registerHelper('toLowerCase', (value) => {
  if (!value) {
    return;
  }

  return value.toLowerCase();
});

Handlebars.registerHelper('toUpperCase', (value) => {
  if (!value) {
    return;
  }

  return value.toUpperCase();
});

Handlebars.registerHelper('toTitleCase', (value) => {
  if (!value) {
    return;
  }

  return value.replace(/\b\w/g, (txt) => txt.toUpperCase());
});

Handlebars.registerHelper('toCamelCase', (value) => {
  if (!value) {
    return;
  }

  return value.replace(/^.|-./g, (letter, index) =>
    index === 0 ? letter.toLowerCase() : letter.slice(1).toUpperCase()
  );
});

export default async function render(template, data) {
  if (!template) {
    throw new TypeError('Invalid template.');
  }

  // Compile the template
  template = Handlebars.compile(template);
  // Execute the compiled template and return the result
  return template(data);
}

export function register(geneasy) {
  geneasy.register({
    templateEngine: { type: 'handlebars', engine: render }
  });
  geneasy.register({
    templateEngine: { type: 'hbs', engine: render }
  });
}
