var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: './src/main.js'
  },
  dist: './dist',
  template: './src/index.html',

  devServer: {
    port: 8080,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: [
    {
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) === 0
        );
      }
    },
    {
      // extract webpack runtime and module manifest to its own file in order to
      // prevent vendor hash from being updated whenever app bundle is updated
      name: 'manifest',
      chunks: ['vendor']
    }
  ],
  
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

cooking.add('loader.md', {
  test: /\.md$/,
  loader: 'vue-markdown-loader'
});

cooking.add('vueMarkdown', {
  use: [
    [require('markdown-it-toc-and-anchor').default, {
      anchorLinkSymbol: '',
      anchorClassName: 'anchor'
    }]
  ],
  preprocess: function (MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
  }
});

var wrap = function (render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  };
};

module.exports = cooking.resolve();
