# MongoDB Service

MongoDB is a NOSQL Database

# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  
  - [Tasks](#Tasks)
    - [delete](#delete)
    - [read](#read)
    - [update](#update)
    - [write](#write)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

Download the source code of this service, and then in the service's folder, run the following command:
```bash
mesg-core service deploy https://github.com/emrekeksinmac/mongodb-service
```

# Definitions


# Tasks

## delete

Task key: `delete`

Delete data to collection

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **collectionName** | `collectionName` | `String` | Collection Name |
| **findObject** | `findObject` | `Object` | Data to be deleted |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | An error occurs |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **result** | `result` | `Boolean` | When the data is successfully delete |


## read

Task key: `read`

Read data to collection

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **collectionName** | `collectionName` | `String` | Collection name |
| **filterObject** | `filterObject` | `Object` | **`optional`** Filter object |
| **findObject** | `findObject` | `Object` | Data to be read |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | An error occurs |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `Any` | When the data is successfully read |


## update

Task key: `update`

Update data to collection

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **collectionName** | `collectionName` | `String` | Collection Name |
| **findObject** | `findObject` | `Object` | Data to be update |
| **updateObject** | `updateObject` | `Object` | New Data |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | An error occurs |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **result** | `result` | `Boolean` | When the data is successfully update |


## write

Task key: `write`

Write data to collection

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **collectionName** | `collectionName` | `String` | Collection name |
| **saveObject** | `saveObject` | `Object` | Data to be saved |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | An error occurs |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **id** | `id` | `String` | When the data is successfully write |


