# netlify-plugin-lighthouse

A Netlify plugin to generate a lighthouse report for every deploy

> NOTICE: This is an experimental feature. Subject to lots of change.

## Usage

This plugin can be included via npm. Install it as a dependency with the following command:

```bash
npm install --save netlify-plugin-lighthouse
```

To use a build plugin, create a `plugins` in your `netlify.toml` like so:

```toml
[[plugins]]
package = "netlify-plugin-lighthouse"
  [plugins.inputs]
  # optional, defaults to scanning the current built version of the site
  audit_url = 'https://www.my-custom-site.com'
```

Run `netlify build` locally to check that the plugin works
