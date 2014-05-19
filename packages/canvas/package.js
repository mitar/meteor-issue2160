Package.describe({
  summary: "Node canvas"
});

Npm.depends({
  canvas: "1.1.3"
});

Package.on_use(function (api) {
  api.export('canvas');

  api.add_files('exports.js', 'server');
});
