# `dataHttp` Submodule <a name="`dataHttp` Submodule" id="@cdktn/provider-http.dataHttp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktn/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http http}.

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-http-go/http/v11/datahttp"

datahttp.NewDataHttp(scope Construct, id *string, config DataHttpConfig) DataHttp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toString">ToString</a></code> | Returns a string representation of this construct. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-http.dataHttp.DataHttp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-http.dataHttp.DataHttp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-http.dataHttp.DataHttp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRetry` <a name="PutRetry" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry"></a>

```go
func PutRetry(value DataHttpRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---

##### `ResetCaCertPem` <a name="ResetCaCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetCaCertPem"></a>

```go
func ResetCaCertPem()
```

##### `ResetClientCertPem` <a name="ResetClientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientCertPem"></a>

```go
func ResetClientCertPem()
```

##### `ResetClientKeyPem` <a name="ResetClientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientKeyPem"></a>

```go
func ResetClientKeyPem()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktn/provider-http.dataHttp.DataHttp.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-http.dataHttp.DataHttp.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```go
func ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetRequestTimeoutMs` <a name="ResetRequestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestTimeoutMs"></a>

```go
func ResetRequestTimeoutMs()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktn/provider-http.dataHttp.DataHttp.resetRetry"></a>

```go
func ResetRetry()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHttp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-http.dataHttp.DataHttp.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-http-go/http/v11/datahttp"

datahttp.DataHttp_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-http-go/http/v11/datahttp"

datahttp.DataHttp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-http-go/http/v11/datahttp"

datahttp.DataHttp_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-http-go/http/v11/datahttp"

datahttp.DataHttp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHttp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHttp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHttp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHttp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBody">ResponseBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64">ResponseBodyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders">ResponseHeaders</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput">CaCertPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput">ClientCertPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput">ClientKeyPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput">RequestBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput">RequestTimeoutMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem">CaCertPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem">ClientCertPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem">ClientKeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBody">RequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs">RequestTimeoutMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-http.dataHttp.DataHttp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-http.dataHttp.DataHttp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-http.dataHttp.DataHttp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-http.dataHttp.DataHttp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-http.dataHttp.DataHttp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-http.dataHttp.DataHttp.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-http.dataHttp.DataHttp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResponseBody`<sup>Required</sup> <a name="ResponseBody" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```go
func ResponseBody() *string
```

- *Type:* *string

---

##### `ResponseBodyBase64`<sup>Required</sup> <a name="ResponseBodyBase64" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64"></a>

```go
func ResponseBodyBase64() *string
```

- *Type:* *string

---

##### `ResponseHeaders`<sup>Required</sup> <a name="ResponseHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```go
func ResponseHeaders() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-http.dataHttp.DataHttp.property.retry"></a>

```go
func Retry() DataHttpRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a>

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `CaCertPemInput`<sup>Optional</sup> <a name="CaCertPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput"></a>

```go
func CaCertPemInput() *string
```

- *Type:* *string

---

##### `ClientCertPemInput`<sup>Optional</sup> <a name="ClientCertPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput"></a>

```go
func ClientCertPemInput() *string
```

- *Type:* *string

---

##### `ClientKeyPemInput`<sup>Optional</sup> <a name="ClientKeyPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput"></a>

```go
func ClientKeyPemInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```go
func RequestBodyInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestTimeoutMsInput`<sup>Optional</sup> <a name="RequestTimeoutMsInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput"></a>

```go
func RequestTimeoutMsInput() *f64
```

- *Type:* *f64

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem"></a>

```go
func CaCertPem() *string
```

- *Type:* *string

---

##### `ClientCertPem`<sup>Required</sup> <a name="ClientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem"></a>

```go
func ClientCertPem() *string
```

- *Type:* *string

---

##### `ClientKeyPem`<sup>Required</sup> <a name="ClientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem"></a>

```go
func ClientKeyPem() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Required</sup> <a name="Insecure" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-http.dataHttp.DataHttp.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```go
func RequestBody() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestTimeoutMs`<sup>Required</sup> <a name="RequestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs"></a>

```go
func RequestTimeoutMs() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-http.dataHttp.DataHttp.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktn/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-http-go/http/v11/datahttp"

&datahttp.DataHttpConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Url: *string,
	CaCertPem: *string,
	ClientCertPem: *string,
	ClientKeyPem: *string,
	Insecure: interface{},
	Method: *string,
	RequestBody: *string,
	RequestHeaders: *map[string]*string,
	RequestTimeoutMs: *f64,
	Retry: github.com/cdktn-io/cdktn-provider-http-go/http/v11.dataHttp.DataHttpRetry,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.url">Url</a></code> | <code>*string</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem">CaCertPem</a></code> | <code>*string</code> | Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem">ClientCertPem</a></code> | <code>*string</code> | Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem">ClientKeyPem</a></code> | <code>*string</code> | Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.method">Method</a></code> | <code>*string</code> | The HTTP Method for the request. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody">RequestBody</a></code> | <code>*string</code> | The request body as a string. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | A map of request header field names and values. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs">RequestTimeoutMs</a></code> | <code>*f64</code> | The request timeout in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | retry block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#url DataHttp#url}

---

##### `CaCertPem`<sup>Optional</sup> <a name="CaCertPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem"></a>

```go
CaCertPem *string
```

- *Type:* *string

Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `ClientCertPem`<sup>Optional</sup> <a name="ClientCertPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem"></a>

```go
ClientCertPem *string
```

- *Type:* *string

Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_cert_pem DataHttp#client_cert_pem}

---

##### `ClientKeyPem`<sup>Optional</sup> <a name="ClientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem"></a>

```go
ClientKeyPem *string
```

- *Type:* *string

Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_key_pem DataHttp#client_key_pem}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#insecure DataHttp#insecure}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#method DataHttp#method}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```go
RequestBody *string
```

- *Type:* *string

The request body as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_body DataHttp#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

A map of request header field names and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_headers DataHttp#request_headers}

---

##### `RequestTimeoutMs`<sup>Optional</sup> <a name="RequestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs"></a>

```go
RequestTimeoutMs *f64
```

- *Type:* *f64

The request timeout in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_timeout_ms DataHttp#request_timeout_ms}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry"></a>

```go
Retry DataHttpRetry
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#retry DataHttp#retry}

---

### DataHttpRetry <a name="DataHttpRetry" id="@cdktn/provider-http.dataHttp.DataHttpRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpRetry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-http-go/http/v11/datahttp"

&datahttp.DataHttpRetry {
	Attempts: *f64,
	MaxDelayMs: *f64,
	MinDelayMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts">Attempts</a></code> | <code>*f64</code> | The number of times the request is to be retried. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs">MaxDelayMs</a></code> | <code>*f64</code> | The maximum delay between retry requests in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs">MinDelayMs</a></code> | <code>*f64</code> | The minimum delay between retry requests in milliseconds. |

---

##### `Attempts`<sup>Optional</sup> <a name="Attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts"></a>

```go
Attempts *f64
```

- *Type:* *f64

The number of times the request is to be retried.

For example, if 2 is specified, the request will be tried a maximum of 3 times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#attempts DataHttp#attempts}

---

##### `MaxDelayMs`<sup>Optional</sup> <a name="MaxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs"></a>

```go
MaxDelayMs *f64
```

- *Type:* *f64

The maximum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#max_delay_ms DataHttp#max_delay_ms}

---

##### `MinDelayMs`<sup>Optional</sup> <a name="MinDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs"></a>

```go
MinDelayMs *f64
```

- *Type:* *f64

The minimum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#min_delay_ms DataHttp#min_delay_ms}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHttpRetryOutputReference <a name="DataHttpRetryOutputReference" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-http-go/http/v11/datahttp"

datahttp.NewDataHttpRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHttpRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttempts` <a name="ResetAttempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetAttempts"></a>

```go
func ResetAttempts()
```

##### `ResetMaxDelayMs` <a name="ResetMaxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMaxDelayMs"></a>

```go
func ResetMaxDelayMs()
```

##### `ResetMinDelayMs` <a name="ResetMinDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMinDelayMs"></a>

```go
func ResetMinDelayMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput">AttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput">MaxDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput">MinDelayMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts">Attempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs">MaxDelayMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs">MinDelayMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttemptsInput`<sup>Optional</sup> <a name="AttemptsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput"></a>

```go
func AttemptsInput() *f64
```

- *Type:* *f64

---

##### `MaxDelayMsInput`<sup>Optional</sup> <a name="MaxDelayMsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput"></a>

```go
func MaxDelayMsInput() *f64
```

- *Type:* *f64

---

##### `MinDelayMsInput`<sup>Optional</sup> <a name="MinDelayMsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput"></a>

```go
func MinDelayMsInput() *f64
```

- *Type:* *f64

---

##### `Attempts`<sup>Required</sup> <a name="Attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts"></a>

```go
func Attempts() *f64
```

- *Type:* *f64

---

##### `MaxDelayMs`<sup>Required</sup> <a name="MaxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs"></a>

```go
func MaxDelayMs() *f64
```

- *Type:* *f64

---

##### `MinDelayMs`<sup>Required</sup> <a name="MinDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs"></a>

```go
func MinDelayMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



