const DEFAULT_OPTIONS = {
  filename: 'report.json',
};

function WebpackOutputReportPlugin(options) {
  this.filename = options && options.filename || DEFAULT_OPTIONS.filename;
}

WebpackOutputReportPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function(stats) {
    const statsJson = stats.toJson();
    const assets = statsJson.assets;
    let output = '';

    for (let i = 0; i < assets.length; i++) {
      output = output + 'Output file: ' + assets[i].name + '\n';
      output = output + 'Size: ' + assets[i].size + ' bytes\n';
    }
  });
}

module.exports = WebpackOutputReportPlugin;
