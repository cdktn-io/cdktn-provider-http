# `dataHttp` Submodule <a name="`dataHttp` Submodule" id="@cdktn/provider-http.dataHttp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktn/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http http}.

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Http;

new DataHttp(Construct Scope, string Id, DataHttpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetCaCertPem">ResetCaCertPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetClientCertPem">ResetClientCertPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetClientKeyPem">ResetClientKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestTimeoutMs">ResetRequestTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRetry">ResetRetry</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-http.dataHttp.DataHttp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-http.dataHttp.DataHttp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-http.dataHttp.DataHttp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-http.dataHttp.DataHttp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-http.dataHttp.DataHttp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-http.dataHttp.DataHttp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry"></a>

```csharp
private void PutRetry(DataHttpRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---

##### `ResetCaCertPem` <a name="ResetCaCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetCaCertPem"></a>

```csharp
private void ResetCaCertPem()
```

##### `ResetClientCertPem` <a name="ResetClientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientCertPem"></a>

```csharp
private void ResetClientCertPem()
```

##### `ResetClientKeyPem` <a name="ResetClientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientKeyPem"></a>

```csharp
private void ResetClientKeyPem()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktn/provider-http.dataHttp.DataHttp.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-http.dataHttp.DataHttp.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```csharp
private void ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

##### `ResetRequestTimeoutMs` <a name="ResetRequestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestTimeoutMs"></a>

```csharp
private void ResetRequestTimeoutMs()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-http.dataHttp.DataHttp.resetRetry"></a>

```csharp
private void ResetRetry()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataHttp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-http.dataHttp.DataHttp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Http;

DataHttp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-http.dataHttp.DataHttp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Http;

DataHttp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Http;

DataHttp.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Http;

DataHttp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataHttp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHttp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHttp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataHttp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBody">ResponseBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64">ResponseBodyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders">ResponseHeaders</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput">CaCertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput">ClientCertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput">ClientKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput">InsecureInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput">RequestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput">RequestTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retryInput">RetryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem">CaCertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem">ClientCertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem">ClientKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecure">Insecure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBody">RequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs">RequestTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-http.dataHttp.DataHttp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-http.dataHttp.DataHttp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-http.dataHttp.DataHttp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-http.dataHttp.DataHttp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-http.dataHttp.DataHttp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-http.dataHttp.DataHttp.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-http.dataHttp.DataHttp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResponseBody`<sup>Required</sup> <a name="ResponseBody" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```csharp
public string ResponseBody { get; }
```

- *Type:* string

---

##### `ResponseBodyBase64`<sup>Required</sup> <a name="ResponseBodyBase64" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64"></a>

```csharp
public string ResponseBodyBase64 { get; }
```

- *Type:* string

---

##### `ResponseHeaders`<sup>Required</sup> <a name="ResponseHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```csharp
public StringMap ResponseHeaders { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-http.dataHttp.DataHttp.property.retry"></a>

```csharp
public DataHttpRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a>

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `CaCertPemInput`<sup>Optional</sup> <a name="CaCertPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput"></a>

```csharp
public string CaCertPemInput { get; }
```

- *Type:* string

---

##### `ClientCertPemInput`<sup>Optional</sup> <a name="ClientCertPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput"></a>

```csharp
public string ClientCertPemInput { get; }
```

- *Type:* string

---

##### `ClientKeyPemInput`<sup>Optional</sup> <a name="ClientKeyPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput"></a>

```csharp
public string ClientKeyPemInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput"></a>

```csharp
public bool|IResolvable InsecureInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```csharp
public string RequestBodyInput { get; }
```

- *Type:* string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestTimeoutMsInput`<sup>Optional</sup> <a name="RequestTimeoutMsInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput"></a>

```csharp
public double RequestTimeoutMsInput { get; }
```

- *Type:* double

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.retryInput"></a>

```csharp
public IResolvable|DataHttpRetry RetryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem"></a>

```csharp
public string CaCertPem { get; }
```

- *Type:* string

---

##### `ClientCertPem`<sup>Required</sup> <a name="ClientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem"></a>

```csharp
public string ClientCertPem { get; }
```

- *Type:* string

---

##### `ClientKeyPem`<sup>Required</sup> <a name="ClientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem"></a>

```csharp
public string ClientKeyPem { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Required</sup> <a name="Insecure" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecure"></a>

```csharp
public bool|IResolvable Insecure { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-http.dataHttp.DataHttp.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```csharp
public string RequestBody { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestTimeoutMs`<sup>Required</sup> <a name="RequestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs"></a>

```csharp
public double RequestTimeoutMs { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-http.dataHttp.DataHttp.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktn/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Http;

new DataHttpConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Url,
    string CaCertPem = null,
    string ClientCertPem = null,
    string ClientKeyPem = null,
    bool|IResolvable Insecure = null,
    string Method = null,
    string RequestBody = null,
    System.Collections.Generic.IDictionary<string, string> RequestHeaders = null,
    double RequestTimeoutMs = null,
    DataHttpRetry Retry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.url">Url</a></code> | <code>string</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem">CaCertPem</a></code> | <code>string</code> | Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem">ClientCertPem</a></code> | <code>string</code> | Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem">ClientKeyPem</a></code> | <code>string</code> | Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure">Insecure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.method">Method</a></code> | <code>string</code> | The HTTP Method for the request. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody">RequestBody</a></code> | <code>string</code> | The request body as a string. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of request header field names and values. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs">RequestTimeoutMs</a></code> | <code>double</code> | The request timeout in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | retry block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#url DataHttp#url}

---

##### `CaCertPem`<sup>Optional</sup> <a name="CaCertPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem"></a>

```csharp
public string CaCertPem { get; set; }
```

- *Type:* string

Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `ClientCertPem`<sup>Optional</sup> <a name="ClientCertPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem"></a>

```csharp
public string ClientCertPem { get; set; }
```

- *Type:* string

Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_cert_pem DataHttp#client_cert_pem}

---

##### `ClientKeyPem`<sup>Optional</sup> <a name="ClientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem"></a>

```csharp
public string ClientKeyPem { get; set; }
```

- *Type:* string

Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_key_pem DataHttp#client_key_pem}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure"></a>

```csharp
public bool|IResolvable Insecure { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#insecure DataHttp#insecure}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#method DataHttp#method}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```csharp
public string RequestBody { get; set; }
```

- *Type:* string

The request body as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_body DataHttp#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of request header field names and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_headers DataHttp#request_headers}

---

##### `RequestTimeoutMs`<sup>Optional</sup> <a name="RequestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs"></a>

```csharp
public double RequestTimeoutMs { get; set; }
```

- *Type:* double

The request timeout in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_timeout_ms DataHttp#request_timeout_ms}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry"></a>

```csharp
public DataHttpRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#retry DataHttp#retry}

---

### DataHttpRetry <a name="DataHttpRetry" id="@cdktn/provider-http.dataHttp.DataHttpRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Http;

new DataHttpRetry {
    double Attempts = null,
    double MaxDelayMs = null,
    double MinDelayMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts">Attempts</a></code> | <code>double</code> | The number of times the request is to be retried. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs">MaxDelayMs</a></code> | <code>double</code> | The maximum delay between retry requests in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs">MinDelayMs</a></code> | <code>double</code> | The minimum delay between retry requests in milliseconds. |

---

##### `Attempts`<sup>Optional</sup> <a name="Attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts"></a>

```csharp
public double Attempts { get; set; }
```

- *Type:* double

The number of times the request is to be retried.

For example, if 2 is specified, the request will be tried a maximum of 3 times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#attempts DataHttp#attempts}

---

##### `MaxDelayMs`<sup>Optional</sup> <a name="MaxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs"></a>

```csharp
public double MaxDelayMs { get; set; }
```

- *Type:* double

The maximum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#max_delay_ms DataHttp#max_delay_ms}

---

##### `MinDelayMs`<sup>Optional</sup> <a name="MinDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs"></a>

```csharp
public double MinDelayMs { get; set; }
```

- *Type:* double

The minimum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#min_delay_ms DataHttp#min_delay_ms}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHttpRetryOutputReference <a name="DataHttpRetryOutputReference" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Http;

new DataHttpRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetAttempts">ResetAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMaxDelayMs">ResetMaxDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMinDelayMs">ResetMinDelayMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttempts` <a name="ResetAttempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetAttempts"></a>

```csharp
private void ResetAttempts()
```

##### `ResetMaxDelayMs` <a name="ResetMaxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMaxDelayMs"></a>

```csharp
private void ResetMaxDelayMs()
```

##### `ResetMinDelayMs` <a name="ResetMinDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMinDelayMs"></a>

```csharp
private void ResetMinDelayMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput">AttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput">MaxDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput">MinDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts">Attempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs">MaxDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs">MinDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttemptsInput`<sup>Optional</sup> <a name="AttemptsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput"></a>

```csharp
public double AttemptsInput { get; }
```

- *Type:* double

---

##### `MaxDelayMsInput`<sup>Optional</sup> <a name="MaxDelayMsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput"></a>

```csharp
public double MaxDelayMsInput { get; }
```

- *Type:* double

---

##### `MinDelayMsInput`<sup>Optional</sup> <a name="MinDelayMsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput"></a>

```csharp
public double MinDelayMsInput { get; }
```

- *Type:* double

---

##### `Attempts`<sup>Required</sup> <a name="Attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts"></a>

```csharp
public double Attempts { get; }
```

- *Type:* double

---

##### `MaxDelayMs`<sup>Required</sup> <a name="MaxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs"></a>

```csharp
public double MaxDelayMs { get; }
```

- *Type:* double

---

##### `MinDelayMs`<sup>Required</sup> <a name="MinDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs"></a>

```csharp
public double MinDelayMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataHttpRetry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---



