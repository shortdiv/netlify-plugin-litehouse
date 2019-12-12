# netlify-plugin-lighthouse

A Netlify plugin to generate a lighthouse report for every deploy

> NOTICE: This is an experimental feature. Subject to lots of change.

## Usage
This plugin can be included via npm. Install it as a dependency with the following command:

```
npm install --save netlify-plugin-lighthouse
```

To use a build plugin, create a `plugins` in your `netlify.yml` like so: 

```yaml
plugins:
  - type: netlify-plugin-lighthouse
    config:
      url: "YOUR_CUSTOM_URL"
    
```

Run `netlify build` locally to check that the plugin works