# `dataHttp` Submodule <a name="`dataHttp` Submodule" id="@cdktn/provider-http.dataHttp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktn/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http http}.

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer"></a>

```java
import io.cdktn.providers.http.data_http.DataHttp;

DataHttp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .url(java.lang.String)
//  .caCertPem(java.lang.String)
//  .clientCertPem(java.lang.String)
//  .clientKeyPem(java.lang.String)
//  .insecure(java.lang.Boolean|IResolvable)
//  .method(java.lang.String)
//  .requestBody(java.lang.String)
//  .requestHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTimeoutMs(java.lang.Number)
//  .retry(DataHttpRetry)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.clientCertPem">clientCertPem</a></code> | <code>java.lang.String</code> | Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.clientKeyPem">clientKeyPem</a></code> | <code>java.lang.String</code> | Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | The HTTP Method for the request. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestBody">requestBody</a></code> | <code>java.lang.String</code> | The request body as a string. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of request header field names and values. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestTimeoutMs">requestTimeoutMs</a></code> | <code>java.lang.Number</code> | The request timeout in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | retry block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#url DataHttp#url}

---

##### `caCertPem`<sup>Optional</sup> <a name="caCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.caCertPem"></a>

- *Type:* java.lang.String

Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `clientCertPem`<sup>Optional</sup> <a name="clientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.clientCertPem"></a>

- *Type:* java.lang.String

Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#client_cert_pem DataHttp#client_cert_pem}

---

##### `clientKeyPem`<sup>Optional</sup> <a name="clientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.clientKeyPem"></a>

- *Type:* java.lang.String

Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#client_key_pem DataHttp#client_key_pem}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#insecure DataHttp#insecure}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.method"></a>

- *Type:* java.lang.String

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#method DataHttp#method}

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestBody"></a>

- *Type:* java.lang.String

The request body as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#request_body DataHttp#request_body}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of request header field names and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#request_headers DataHttp#request_headers}

---

##### `requestTimeoutMs`<sup>Optional</sup> <a name="requestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestTimeoutMs"></a>

- *Type:* java.lang.Number

The request timeout in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#request_timeout_ms DataHttp#request_timeout_ms}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#retry DataHttp#retry}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.with">with</a></code> | Applies one or more mixins to this construct. |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-http.dataHttp.DataHttp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-http.dataHttp.DataHttp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-http.dataHttp.DataHttp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-http.dataHttp.DataHttp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-http.dataHttp.DataHttp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRetry` <a name="putRetry" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry"></a>

```java
public void putRetry(DataHttpRetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---

##### `resetCaCertPem` <a name="resetCaCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetCaCertPem"></a>

```java
public void resetCaCertPem()
```

##### `resetClientCertPem` <a name="resetClientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientCertPem"></a>

```java
public void resetClientCertPem()
```

##### `resetClientKeyPem` <a name="resetClientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientKeyPem"></a>

```java
public void resetClientKeyPem()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktn/provider-http.dataHttp.DataHttp.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-http.dataHttp.DataHttp.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetRequestBody` <a name="resetRequestBody" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```java
public void resetRequestBody()
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```java
public void resetRequestHeaders()
```

##### `resetRequestTimeoutMs` <a name="resetRequestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestTimeoutMs"></a>

```java
public void resetRequestTimeoutMs()
```

##### `resetRetry` <a name="resetRetry" id="@cdktn/provider-http.dataHttp.DataHttp.resetRetry"></a>

```java
public void resetRetry()
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

```java
import io.cdktn.providers.http.data_http.DataHttp;

DataHttp.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement"></a>

```java
import io.cdktn.providers.http.data_http.DataHttp;

DataHttp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource"></a>

```java
import io.cdktn.providers.http.data_http.DataHttp;

DataHttp.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport"></a>

```java
import io.cdktn.providers.http.data_http.DataHttp;

DataHttp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHttp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataHttp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHttp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHttp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataHttp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBody">responseBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64">responseBodyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders">responseHeaders</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput">caCertPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput">clientCertPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput">clientKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput">requestBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput">requestHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput">requestTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retryInput">retryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem">clientCertPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem">clientKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBody">requestBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs">requestTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-http.dataHttp.DataHttp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-http.dataHttp.DataHttp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-http.dataHttp.DataHttp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-http.dataHttp.DataHttp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-http.dataHttp.DataHttp.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-http.dataHttp.DataHttp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `responseBody`<sup>Required</sup> <a name="responseBody" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```java
public java.lang.String getResponseBody();
```

- *Type:* java.lang.String

---

##### `responseBodyBase64`<sup>Required</sup> <a name="responseBodyBase64" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64"></a>

```java
public java.lang.String getResponseBodyBase64();
```

- *Type:* java.lang.String

---

##### `responseHeaders`<sup>Required</sup> <a name="responseHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```java
public StringMap getResponseHeaders();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-http.dataHttp.DataHttp.property.retry"></a>

```java
public DataHttpRetryOutputReference getRetry();
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a>

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `caCertPemInput`<sup>Optional</sup> <a name="caCertPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput"></a>

```java
public java.lang.String getCaCertPemInput();
```

- *Type:* java.lang.String

---

##### `clientCertPemInput`<sup>Optional</sup> <a name="clientCertPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput"></a>

```java
public java.lang.String getClientCertPemInput();
```

- *Type:* java.lang.String

---

##### `clientKeyPemInput`<sup>Optional</sup> <a name="clientKeyPemInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput"></a>

```java
public java.lang.String getClientKeyPemInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `requestBodyInput`<sup>Optional</sup> <a name="requestBodyInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```java
public java.lang.String getRequestBodyInput();
```

- *Type:* java.lang.String

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTimeoutMsInput`<sup>Optional</sup> <a name="requestTimeoutMsInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput"></a>

```java
public java.lang.Number getRequestTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.retryInput"></a>

```java
public IResolvable|DataHttpRetry getRetryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem"></a>

```java
public java.lang.String getCaCertPem();
```

- *Type:* java.lang.String

---

##### `clientCertPem`<sup>Required</sup> <a name="clientCertPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem"></a>

```java
public java.lang.String getClientCertPem();
```

- *Type:* java.lang.String

---

##### `clientKeyPem`<sup>Required</sup> <a name="clientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem"></a>

```java
public java.lang.String getClientKeyPem();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecure"></a>

```java
public java.lang.Boolean|IResolvable getInsecure();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-http.dataHttp.DataHttp.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `requestBody`<sup>Required</sup> <a name="requestBody" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```java
public java.lang.String getRequestBody();
```

- *Type:* java.lang.String

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTimeoutMs`<sup>Required</sup> <a name="requestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs"></a>

```java
public java.lang.Number getRequestTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-http.dataHttp.DataHttp.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktn/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```java
import io.cdktn.providers.http.data_http.DataHttpConfig;

DataHttpConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .url(java.lang.String)
//  .caCertPem(java.lang.String)
//  .clientCertPem(java.lang.String)
//  .clientKeyPem(java.lang.String)
//  .insecure(java.lang.Boolean|IResolvable)
//  .method(java.lang.String)
//  .requestBody(java.lang.String)
//  .requestHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTimeoutMs(java.lang.Number)
//  .retry(DataHttpRetry)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.url">url</a></code> | <code>java.lang.String</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem">clientCertPem</a></code> | <code>java.lang.String</code> | Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem">clientKeyPem</a></code> | <code>java.lang.String</code> | Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.method">method</a></code> | <code>java.lang.String</code> | The HTTP Method for the request. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody">requestBody</a></code> | <code>java.lang.String</code> | The request body as a string. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of request header field names and values. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs">requestTimeoutMs</a></code> | <code>java.lang.Number</code> | The request timeout in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | retry block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#url DataHttp#url}

---

##### `caCertPem`<sup>Optional</sup> <a name="caCertPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem"></a>

```java
public java.lang.String getCaCertPem();
```

- *Type:* java.lang.String

Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `clientCertPem`<sup>Optional</sup> <a name="clientCertPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem"></a>

```java
public java.lang.String getClientCertPem();
```

- *Type:* java.lang.String

Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#client_cert_pem DataHttp#client_cert_pem}

---

##### `clientKeyPem`<sup>Optional</sup> <a name="clientKeyPem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem"></a>

```java
public java.lang.String getClientKeyPem();
```

- *Type:* java.lang.String

Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#client_key_pem DataHttp#client_key_pem}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure"></a>

```java
public java.lang.Boolean|IResolvable getInsecure();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#insecure DataHttp#insecure}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#method DataHttp#method}

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```java
public java.lang.String getRequestBody();
```

- *Type:* java.lang.String

The request body as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#request_body DataHttp#request_body}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of request header field names and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#request_headers DataHttp#request_headers}

---

##### `requestTimeoutMs`<sup>Optional</sup> <a name="requestTimeoutMs" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs"></a>

```java
public java.lang.Number getRequestTimeoutMs();
```

- *Type:* java.lang.Number

The request timeout in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#request_timeout_ms DataHttp#request_timeout_ms}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry"></a>

```java
public DataHttpRetry getRetry();
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#retry DataHttp#retry}

---

### DataHttpRetry <a name="DataHttpRetry" id="@cdktn/provider-http.dataHttp.DataHttpRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpRetry.Initializer"></a>

```java
import io.cdktn.providers.http.data_http.DataHttpRetry;

DataHttpRetry.builder()
//  .attempts(java.lang.Number)
//  .maxDelayMs(java.lang.Number)
//  .minDelayMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts">attempts</a></code> | <code>java.lang.Number</code> | The number of times the request is to be retried. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs">maxDelayMs</a></code> | <code>java.lang.Number</code> | The maximum delay between retry requests in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs">minDelayMs</a></code> | <code>java.lang.Number</code> | The minimum delay between retry requests in milliseconds. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts"></a>

```java
public java.lang.Number getAttempts();
```

- *Type:* java.lang.Number

The number of times the request is to be retried.

For example, if 2 is specified, the request will be tried a maximum of 3 times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#attempts DataHttp#attempts}

---

##### `maxDelayMs`<sup>Optional</sup> <a name="maxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs"></a>

```java
public java.lang.Number getMaxDelayMs();
```

- *Type:* java.lang.Number

The maximum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#max_delay_ms DataHttp#max_delay_ms}

---

##### `minDelayMs`<sup>Optional</sup> <a name="minDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs"></a>

```java
public java.lang.Number getMinDelayMs();
```

- *Type:* java.lang.Number

The minimum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.6.0/docs/data-sources/http#min_delay_ms DataHttp#min_delay_ms}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHttpRetryOutputReference <a name="DataHttpRetryOutputReference" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.http.data_http.DataHttpRetryOutputReference;

new DataHttpRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttempts` <a name="resetAttempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetAttempts"></a>

```java
public void resetAttempts()
```

##### `resetMaxDelayMs` <a name="resetMaxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMaxDelayMs"></a>

```java
public void resetMaxDelayMs()
```

##### `resetMinDelayMs` <a name="resetMinDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMinDelayMs"></a>

```java
public void resetMinDelayMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput">attemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput">maxDelayMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput">minDelayMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts">attempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs">maxDelayMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs">minDelayMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attemptsInput`<sup>Optional</sup> <a name="attemptsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput"></a>

```java
public java.lang.Number getAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `maxDelayMsInput`<sup>Optional</sup> <a name="maxDelayMsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput"></a>

```java
public java.lang.Number getMaxDelayMsInput();
```

- *Type:* java.lang.Number

---

##### `minDelayMsInput`<sup>Optional</sup> <a name="minDelayMsInput" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput"></a>

```java
public java.lang.Number getMinDelayMsInput();
```

- *Type:* java.lang.Number

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts"></a>

```java
public java.lang.Number getAttempts();
```

- *Type:* java.lang.Number

---

##### `maxDelayMs`<sup>Required</sup> <a name="maxDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs"></a>

```java
public java.lang.Number getMaxDelayMs();
```

- *Type:* java.lang.Number

---

##### `minDelayMs`<sup>Required</sup> <a name="minDelayMs" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs"></a>

```java
public java.lang.Number getMinDelayMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHttpRetry getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---



