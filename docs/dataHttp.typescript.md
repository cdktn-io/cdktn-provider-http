# `dataHttp` Submodule <a name="`dataHttp` Submodule" id="@cdktn/provider-http.dataHttp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktn/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http http}.

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer"></a>

```typescript
import { dataHttp } from '@cdktn/provider-http'

new dataHttp.DataHttp(scope: Construct, id: string, config: DataHttpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetCaCertPem">resetCaCertPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetClientCertPem">resetClientCertPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetClientKeyPem">resetClientKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestBody">resetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestTimeoutMs">resetRequestTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRetry">resetRetry</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-http.dataHttp.DataHttp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-http.dataHttp.DataHttp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-http.dataHttp.DataHttp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-http.dataHttp.DataHttp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry"></a>

```typescript
public putRetry(value: DataHttpRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---

##### `resetCaCertPem` <a name="resetCaCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetCaCertPem"></a>

```typescript
public resetCaCertPem(): void
```

##### `resetClientCertPem` <a name="resetClientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientCertPem"></a>

```typescript
public resetClientCertPem(): void
```

##### `resetClientKeyPem` <a name="resetClientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientKeyPem"></a>

```typescript
public resetClientKeyPem(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktn/provider-http.dataHttp.DataHttp.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-http.dataHttp.DataHttp.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetRequestBody` <a name="resetRequestBody" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```typescript
public resetRequestBody(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

##### `resetRequestTimeoutMs` <a name="resetRequestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestTimeoutMs"></a>

```typescript
public resetRequestTimeoutMs(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-http.dataHttp.DataHttp.resetRetry"></a>

```typescript
public resetRetry(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataHttp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-http.dataHttp.DataHttp.isConstruct"></a>

```typescript
import { dataHttp } from '@cdktn/provider-http'

dataHttp.DataHttp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement"></a>

```typescript
import { dataHttp } from '@cdktn/provider-http'

dataHttp.DataHttp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource"></a>

```typescript
import { dataHttp } from '@cdktn/provider-http'

dataHttp.DataHttp.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport"></a>

```typescript
import { dataHttp } from '@cdktn/provider-http'

dataHttp.DataHttp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataHttp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHttp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHttp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataHttp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBody">responseBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64">responseBodyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders">responseHeaders</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput">caCertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput">clientCertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput">clientKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput">requestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput">requestHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput">requestTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retryInput">retryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem">caCertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem">clientCertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem">clientKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecure">insecure</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBody">requestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs">requestTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-http.dataHttp.DataHttp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-http.dataHttp.DataHttp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-http.dataHttp.DataHttp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-http.dataHttp.DataHttp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-http.dataHttp.DataHttp.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-http.dataHttp.DataHttp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `responseBody`<sup>Required</sup> <a name="responseBody" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```typescript
public readonly responseBody: string;
```

- *Type:* string

---

##### `responseBodyBase64`<sup>Required</sup> <a name="responseBodyBase64" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64"></a>

```typescript
public readonly responseBodyBase64: string;
```

- *Type:* string

---

##### `responseHeaders`<sup>Required</sup> <a name="responseHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```typescript
public readonly responseHeaders: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-http.dataHttp.DataHttp.property.retry"></a>

```typescript
public readonly retry: DataHttpRetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a>

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `caCertPemInput`<sup>Optional</sup> <a name="caCertPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput"></a>

```typescript
public readonly caCertPemInput: string;
```

- *Type:* string

---

##### `clientCertPemInput`<sup>Optional</sup> <a name="clientCertPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput"></a>

```typescript
public readonly clientCertPemInput: string;
```

- *Type:* string

---

##### `clientKeyPemInput`<sup>Optional</sup> <a name="clientKeyPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput"></a>

```typescript
public readonly clientKeyPemInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `requestBodyInput`<sup>Optional</sup> <a name="requestBodyInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```typescript
public readonly requestBodyInput: string;
```

- *Type:* string

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTimeoutMsInput`<sup>Optional</sup> <a name="requestTimeoutMsInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput"></a>

```typescript
public readonly requestTimeoutMsInput: number;
```

- *Type:* number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.retryInput"></a>

```typescript
public readonly retryInput: IResolvable | DataHttpRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem"></a>

```typescript
public readonly caCertPem: string;
```

- *Type:* string

---

##### `clientCertPem`<sup>Required</sup> <a name="clientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem"></a>

```typescript
public readonly clientCertPem: string;
```

- *Type:* string

---

##### `clientKeyPem`<sup>Required</sup> <a name="clientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem"></a>

```typescript
public readonly clientKeyPem: string;
```

- *Type:* string

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-http.dataHttp.DataHttp.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `requestBody`<sup>Required</sup> <a name="requestBody" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```typescript
public readonly requestBody: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTimeoutMs`<sup>Required</sup> <a name="requestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs"></a>

```typescript
public readonly requestTimeoutMs: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-http.dataHttp.DataHttp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktn/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```typescript
import { dataHttp } from '@cdktn/provider-http'

const dataHttpConfig: dataHttp.DataHttpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.url">url</a></code> | <code>string</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem">caCertPem</a></code> | <code>string</code> | Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem">clientCertPem</a></code> | <code>string</code> | Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem">clientKeyPem</a></code> | <code>string</code> | Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.method">method</a></code> | <code>string</code> | The HTTP Method for the request. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody">requestBody</a></code> | <code>string</code> | The request body as a string. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | A map of request header field names and values. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs">requestTimeoutMs</a></code> | <code>number</code> | The request timeout in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | retry block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#url DataHttp#url}

---

##### `caCertPem`<sup>Optional</sup> <a name="caCertPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem"></a>

```typescript
public readonly caCertPem: string;
```

- *Type:* string

Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `clientCertPem`<sup>Optional</sup> <a name="clientCertPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem"></a>

```typescript
public readonly clientCertPem: string;
```

- *Type:* string

Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_cert_pem DataHttp#client_cert_pem}

---

##### `clientKeyPem`<sup>Optional</sup> <a name="clientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem"></a>

```typescript
public readonly clientKeyPem: string;
```

- *Type:* string

Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_key_pem DataHttp#client_key_pem}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#insecure DataHttp#insecure}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#method DataHttp#method}

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```typescript
public readonly requestBody: string;
```

- *Type:* string

The request body as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_body DataHttp#request_body}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of request header field names and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_headers DataHttp#request_headers}

---

##### `requestTimeoutMs`<sup>Optional</sup> <a name="requestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs"></a>

```typescript
public readonly requestTimeoutMs: number;
```

- *Type:* number

The request timeout in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_timeout_ms DataHttp#request_timeout_ms}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry"></a>

```typescript
public readonly retry: DataHttpRetry;
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#retry DataHttp#retry}

---

### DataHttpRetry <a name="DataHttpRetry" id="@cdktn/provider-http.dataHttp.DataHttpRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpRetry.Initializer"></a>

```typescript
import { dataHttp } from '@cdktn/provider-http'

const dataHttpRetry: dataHttp.DataHttpRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts">attempts</a></code> | <code>number</code> | The number of times the request is to be retried. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs">maxDelayMs</a></code> | <code>number</code> | The maximum delay between retry requests in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs">minDelayMs</a></code> | <code>number</code> | The minimum delay between retry requests in milliseconds. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

The number of times the request is to be retried.

For example, if 2 is specified, the request will be tried a maximum of 3 times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#attempts DataHttp#attempts}

---

##### `maxDelayMs`<sup>Optional</sup> <a name="maxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs"></a>

```typescript
public readonly maxDelayMs: number;
```

- *Type:* number

The maximum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#max_delay_ms DataHttp#max_delay_ms}

---

##### `minDelayMs`<sup>Optional</sup> <a name="minDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs"></a>

```typescript
public readonly minDelayMs: number;
```

- *Type:* number

The minimum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#min_delay_ms DataHttp#min_delay_ms}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHttpRetryOutputReference <a name="DataHttpRetryOutputReference" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer"></a>

```typescript
import { dataHttp } from '@cdktn/provider-http'

new dataHttp.DataHttpRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetAttempts">resetAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMaxDelayMs">resetMaxDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMinDelayMs">resetMinDelayMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttempts` <a name="resetAttempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetAttempts"></a>

```typescript
public resetAttempts(): void
```

##### `resetMaxDelayMs` <a name="resetMaxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMaxDelayMs"></a>

```typescript
public resetMaxDelayMs(): void
```

##### `resetMinDelayMs` <a name="resetMinDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMinDelayMs"></a>

```typescript
public resetMinDelayMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput">attemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput">maxDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput">minDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts">attempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs">maxDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs">minDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attemptsInput`<sup>Optional</sup> <a name="attemptsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput"></a>

```typescript
public readonly attemptsInput: number;
```

- *Type:* number

---

##### `maxDelayMsInput`<sup>Optional</sup> <a name="maxDelayMsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput"></a>

```typescript
public readonly maxDelayMsInput: number;
```

- *Type:* number

---

##### `minDelayMsInput`<sup>Optional</sup> <a name="minDelayMsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput"></a>

```typescript
public readonly minDelayMsInput: number;
```

- *Type:* number

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

---

##### `maxDelayMs`<sup>Required</sup> <a name="maxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs"></a>

```typescript
public readonly maxDelayMs: number;
```

- *Type:* number

---

##### `minDelayMs`<sup>Required</sup> <a name="minDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs"></a>

```typescript
public readonly minDelayMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHttpRetry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---



