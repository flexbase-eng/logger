# Class: ConsoleLogger

Represents a type that implements a console based logger

## Implements

- [`Logger`](../wiki/Logger)

## Table of contents

### Constructors

- [constructor](../wiki/ConsoleLogger#constructor)

### Methods

- [debug](../wiki/ConsoleLogger#debug)
- [error](../wiki/ConsoleLogger#error)
- [info](../wiki/ConsoleLogger#info)
- [trace](../wiki/ConsoleLogger#trace)
- [warn](../wiki/ConsoleLogger#warn)

## Constructors

### constructor

• **new ConsoleLogger**()

## Methods

### debug

▸ **debug**(`message`, ...`optionalParams`): `void`

Write a debug level log

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

[Logger](../wiki/Logger).[debug](../wiki/Logger#debug)

#### Defined in

ConsoleLogger.ts:17

___

### error

▸ **error**(`message`, ...`optionalParams`): `void`

**`inherit`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

[Logger](../wiki/Logger).[error](../wiki/Logger#error)

#### Defined in

ConsoleLogger.ts:8

___

### info

▸ **info**(`message`, ...`optionalParams`): `void`

Write an information level log

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

[Logger](../wiki/Logger).[info](../wiki/Logger#info)

#### Defined in

ConsoleLogger.ts:14

___

### trace

▸ **trace**(`message`, ...`optionalParams`): `void`

Write a trace level log

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

[Logger](../wiki/Logger).[trace](../wiki/Logger#trace)

#### Defined in

ConsoleLogger.ts:20

___

### warn

▸ **warn**(`message`, ...`optionalParams`): `void`

Write a warning level log

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Implementation of

[Logger](../wiki/Logger).[warn](../wiki/Logger#warn)

#### Defined in

ConsoleLogger.ts:11
