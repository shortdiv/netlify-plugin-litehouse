# netlify-plugin-lighthouse

A Netlify plugin to generate a lighthouse report for every deploy

> NOTICE: This is neither maintained nor an official netlify package. For the official _*netlify*_ package go to -> https://www.npmjs.com/package/@netlify/plugin-lighthouse

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