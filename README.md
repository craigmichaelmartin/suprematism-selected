# Suprematism Selected

[![Build Status][travis-badge]][travis-badge-url]

An Angular presentational component using uni-directional data flow for displaying
a selected pane of values.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-selected
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-selected/)
- Run the example locally with `npm run example`


## Components
- [`supre-selected`](#supre-selected)

#### <a id="supre-selected"></a> `supre-selected`

##### Directives
- `selected: Array<string>` - An array of the selected options as strings (must be unique).

##### Events
- `selectedRemoved: string` - The option from the selected pane that was removed.


## Example
```html
<supre-selected
  [selected]="arrayOfSelectedOptions"
  (selectedRemoved)="updateArrayOfSelectedOptionsToFilterOutOption($event)"
></supre-selected>
```

[travis-badge]: https://travis-ci.org/CINBCUniversal/suprematism-selected.svg?branch=master
[travis-badge-url]: https://travis-ci.org/CINBCUniversal/suprematism-selected
