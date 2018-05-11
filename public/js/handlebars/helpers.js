
Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
  if (arguments.length < 3)
      throw new Error("Handlebars Helper equal needs 2 parameters");
  if( lvalue!=rvalue ) {
      return options.inverse(this);
  } else {
      return options.fn(this);
  }

});

Handlebars.registerHelper('trim', function(text) {
  text = text.replace(/ /g, '');
  return new Handlebars.SafeString(text);
});
