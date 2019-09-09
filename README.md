# url-attrs
> Safely extract url query params into an object

## Install

```
$ yarn add url-attrs
```

## Usage

```typescript
import urlAttrs from 'url-attrs'

const someUrl = 'http://www.';

urlAttrs(someUrl, {
  include: ['id', 'name']
})
```

## API

**options**
```
{
  include?: string[],
  delimiter?: string, // & or #
}
```

## TODO

* Use URL class?