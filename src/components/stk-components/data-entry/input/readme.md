# stk-input-email



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                | Default     |
| -------------- | --------------- | ----------- | --------------------------------------------------- | ----------- |
| `allowClear`   | `allow-clear`   |             | `boolean`                                           | `false`     |
| `defaultValue` | `default-value` |             | `string`                                            | `"default"` |
| `disabled`     | `disabled`      |             | `boolean`                                           | `false`     |
| `maxLength`    | `max-length`    |             | `number`                                            | `128`       |
| `placeholder`  | `placeholder`   |             | `string`                                            | `""`        |
| `rows`         | `rows`          |             | `number`                                            | `4`         |
| `step`         | `step`          |             | `number`                                            | `1`         |
| `validator`    | --              |             | `(string \| ValidatorEntry \| Validator<string>)[]` | `undefined` |
| `value`        | `value`         |             | `string`                                            | `undefined` |


## Events

| Event     | Description | Type                  |
| --------- | ----------- | --------------------- |
| `changed` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [stk-input]()

### Graph
```mermaid
graph TD;
  stk-input --> stk-input-email
  style stk-input-email fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
