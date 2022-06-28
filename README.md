# case-convert

Utility functions to determine and convert the case of strings.

<h2>🚧 Work-in-Progress 🚧</h2>

## Usage

```ts
import { toCamelCase } from 'case-convert'

const result = toCamelCase('a-new-hope')    //  aNewHope
```

## API Reference

### `Case`

```ts
export enum Case {
    Camel = 'CAMEL',    //  camelCase
    Snake = 'SNAKE',    //  snake_case
    Kebab = 'KEBAB',    //  kebab-case
    Title = 'TITLE',    //  TitleCase
}
```

### `convert`

Convert the string to the given case type

```ts
import { Case, convert } from 'case-convert'

const result = convert('a-new-hope', Case.Camel)    //  aNewHope
```

### `check`

Check if the string is of the given case type

```ts
import { check, Case } from 'case-convert'

check('a-new-hope', Case.Camel)  //  false
check('a_new_hope', Case.Snake)  //  true
```

### `determineCase`

Determine the case type of the string

```ts
import { determineCase } from 'case-convert'

const result = determineCase('ANewHope')    //  Case.Title = "TITLE"
```

### `capitalize` and `uncapitalize`

Capitalize or uncapitalize a string

```ts
import { capitalize, uncapitalize } from 'case-convert'

capitalize('a new hope')    //  A new hope
uncapitalize('A New Hope')  //  a New Hope
```

### `toCamelCase`, `toSnakeCase`, `toKebabCase` and `toTitleCase`

Convert the string to the given format

```ts
import { toCamelCase, toSnakeCase, toKebabCase, toTitleCase } from 'case-convert'

toCamelCase("some-string")  //  someString
toSnakeCase("someString")   //  some_string
toKebabCase("SomeString")   //  some-string
toTitleCase("some_string")  //  SomeString
```

---

## 📑 License

[MIT License](./LICENSE)
