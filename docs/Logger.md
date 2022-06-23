# Interface: Logger

Represents a type used to perform logging

## Implemented by

- [`ConsoleLogger`](../wiki/ConsoleLogger)

## Table of contents

### Methods

- [debug](../wiki/Logger#debug)
- [error](../wiki/Logger#error)
- [info](../wiki/Logger#info)
- [trace](../wiki/Logger#trace)
- [warn](../wiki/Logger#warn)

## Methods

### debug

▸ **debug**(`message`, ...`optionalParams`): `void`

Write a debug level log

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | An object or string to log |
| `...optionalParams` | `any`[] | Additional parameters to be logged |

#### Returns

`void`

#### Defined in

Logger.ts:28

___

### error

▸ **error**(`message`, ...`optionalParams`): `void`

Write an error level log

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | An object or string to log |
| `...optionalParams` | `any`[] | Additional parameters to be logged |

#### Returns

`void`

#### Defined in

Logger.ts:10

___

### info

▸ **info**(`message`, ...`optionalParams`): `void`

Write an information level log

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | An object or string to log |
| `...optionalParams` | `any`[] | Additional parameters to be logged |

#### Returns

`void`

#### Defined in

Logger.ts:22

___

### trace

▸ **trace**(`message`, ...`optionalParams`): `void`

Write a trace level log

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | An object or string to log |
| `...optionalParams` | `any`[] | Additional parameters to be logged |

#### Returns

`void`

#### Defined in

Logger.ts:34

___

### warn

▸ **warn**(`message`, ...`optionalParams`): `void`

Write a warning level log

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | An object or string to log |
| `...optionalParams` | `any`[] | Additional parameters to be logged |

#### Returns

`void`

#### Defined in

Logger.ts:16
