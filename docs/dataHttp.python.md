# `dataHttp` Submodule <a name="`dataHttp` Submodule" id="@cdktn/provider-http.dataHttp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktn/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http http}.

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer"></a>

```python
from cdktn_provider_http import data_http

dataHttp.DataHttp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  url: str,
  ca_cert_pem: str = None,
  client_cert_pem: str = None,
  client_key_pem: str = None,
  insecure: bool | IResolvable = None,
  method: str = None,
  request_body: str = None,
  request_headers: typing.Mapping[str] = None,
  request_timeout_ms: typing.Union[int, float] = None,
  retry: DataHttpRetry = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.url">url</a></code> | <code>str</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.caCertPem">ca_cert_pem</a></code> | <code>str</code> | Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.clientCertPem">client_cert_pem</a></code> | <code>str</code> | Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.clientKeyPem">client_key_pem</a></code> | <code>str</code> | Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.method">method</a></code> | <code>str</code> | The HTTP Method for the request. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestBody">request_body</a></code> | <code>str</code> | The request body as a string. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | A map of request header field names and values. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestTimeoutMs">request_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | The request timeout in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.retry">retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | retry block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.url"></a>

- *Type:* str

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#url DataHttp#url}

---

##### `ca_cert_pem`<sup>Optional</sup> <a name="ca_cert_pem" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.caCertPem"></a>

- *Type:* str

Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `client_cert_pem`<sup>Optional</sup> <a name="client_cert_pem" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.clientCertPem"></a>

- *Type:* str

Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_cert_pem DataHttp#client_cert_pem}

---

##### `client_key_pem`<sup>Optional</sup> <a name="client_key_pem" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.clientKeyPem"></a>

- *Type:* str

Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_key_pem DataHttp#client_key_pem}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.insecure"></a>

- *Type:* bool | cdktn.IResolvable

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#insecure DataHttp#insecure}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.method"></a>

- *Type:* str

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#method DataHttp#method}

---

##### `request_body`<sup>Optional</sup> <a name="request_body" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestBody"></a>

- *Type:* str

The request body as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_body DataHttp#request_body}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestHeaders"></a>

- *Type:* typing.Mapping[str]

A map of request header field names and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_headers DataHttp#request_headers}

---

##### `request_timeout_ms`<sup>Optional</sup> <a name="request_timeout_ms" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.requestTimeoutMs"></a>

- *Type:* typing.Union[int, float]

The request timeout in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_timeout_ms DataHttp#request_timeout_ms}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-http.dataHttp.DataHttp.Initializer.parameter.retry"></a>

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#retry DataHttp#retry}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.putRetry">put_retry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetCaCertPem">reset_ca_cert_pem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetClientCertPem">reset_client_cert_pem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetClientKeyPem">reset_client_key_pem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestBody">reset_request_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRequestTimeoutMs">reset_request_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.resetRetry">reset_retry</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-http.dataHttp.DataHttp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-http.dataHttp.DataHttp.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-http.dataHttp.DataHttp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-http.dataHttp.DataHttp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-http.dataHttp.DataHttp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-http.dataHttp.DataHttp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_retry` <a name="put_retry" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry"></a>

```python
def put_retry(
  attempts: typing.Union[int, float] = None,
  max_delay_ms: typing.Union[int, float] = None,
  min_delay_ms: typing.Union[int, float] = None
) -> None
```

###### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry.parameter.attempts"></a>

- *Type:* typing.Union[int, float]

The number of times the request is to be retried.

For example, if 2 is specified, the request will be tried a maximum of 3 times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#attempts DataHttp#attempts}

---

###### `max_delay_ms`<sup>Optional</sup> <a name="max_delay_ms" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry.parameter.maxDelayMs"></a>

- *Type:* typing.Union[int, float]

The maximum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#max_delay_ms DataHttp#max_delay_ms}

---

###### `min_delay_ms`<sup>Optional</sup> <a name="min_delay_ms" id="@cdktn/provider-http.dataHttp.DataHttp.putRetry.parameter.minDelayMs"></a>

- *Type:* typing.Union[int, float]

The minimum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#min_delay_ms DataHttp#min_delay_ms}

---

##### `reset_ca_cert_pem` <a name="reset_ca_cert_pem" id="@cdktn/provider-http.dataHttp.DataHttp.resetCaCertPem"></a>

```python
def reset_ca_cert_pem() -> None
```

##### `reset_client_cert_pem` <a name="reset_client_cert_pem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientCertPem"></a>

```python
def reset_client_cert_pem() -> None
```

##### `reset_client_key_pem` <a name="reset_client_key_pem" id="@cdktn/provider-http.dataHttp.DataHttp.resetClientKeyPem"></a>

```python
def reset_client_key_pem() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktn/provider-http.dataHttp.DataHttp.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktn/provider-http.dataHttp.DataHttp.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_request_body` <a name="reset_request_body" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```python
def reset_request_body() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_request_timeout_ms` <a name="reset_request_timeout_ms" id="@cdktn/provider-http.dataHttp.DataHttp.resetRequestTimeoutMs"></a>

```python
def reset_request_timeout_ms() -> None
```

##### `reset_retry` <a name="reset_retry" id="@cdktn/provider-http.dataHttp.DataHttp.resetRetry"></a>

```python
def reset_retry() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataHttp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-http.dataHttp.DataHttp.isConstruct"></a>

```python
from cdktn_provider_http import data_http

dataHttp.DataHttp.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement"></a>

```python
from cdktn_provider_http import data_http

dataHttp.DataHttp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource"></a>

```python
from cdktn_provider_http import data_http

dataHttp.DataHttp.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-http.dataHttp.DataHttp.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport"></a>

```python
from cdktn_provider_http import data_http

dataHttp.DataHttp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataHttp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHttp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-http.dataHttp.DataHttp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

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
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBody">response_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64">response_body_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders">response_headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput">ca_cert_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput">client_cert_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput">client_key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput">insecure_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput">request_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput">request_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput">request_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.retryInput">retry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem">ca_cert_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem">client_cert_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem">client_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestBody">request_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs">request_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-http.dataHttp.DataHttp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-http.dataHttp.DataHttp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-http.dataHttp.DataHttp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-http.dataHttp.DataHttp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-http.dataHttp.DataHttp.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-http.dataHttp.DataHttp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `response_body`<sup>Required</sup> <a name="response_body" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```python
response_body: str
```

- *Type:* str

---

##### `response_body_base64`<sup>Required</sup> <a name="response_body_base64" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseBodyBase64"></a>

```python
response_body_base64: str
```

- *Type:* str

---

##### `response_headers`<sup>Required</sup> <a name="response_headers" id="@cdktn/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```python
response_headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-http.dataHttp.DataHttp.property.retry"></a>

```python
retry: DataHttpRetryOutputReference
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference">DataHttpRetryOutputReference</a>

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ca_cert_pem_input`<sup>Optional</sup> <a name="ca_cert_pem_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPemInput"></a>

```python
ca_cert_pem_input: str
```

- *Type:* str

---

##### `client_cert_pem_input`<sup>Optional</sup> <a name="client_cert_pem_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPemInput"></a>

```python
client_cert_pem_input: str
```

- *Type:* str

---

##### `client_key_pem_input`<sup>Optional</sup> <a name="client_key_pem_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPemInput"></a>

```python
client_key_pem_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecureInput"></a>

```python
insecure_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `request_body_input`<sup>Optional</sup> <a name="request_body_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```python
request_body_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```python
request_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_timeout_ms_input`<sup>Optional</sup> <a name="request_timeout_ms_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMsInput"></a>

```python
request_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.retryInput"></a>

```python
retry_input: IResolvable | DataHttpRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `ca_cert_pem`<sup>Required</sup> <a name="ca_cert_pem" id="@cdktn/provider-http.dataHttp.DataHttp.property.caCertPem"></a>

```python
ca_cert_pem: str
```

- *Type:* str

---

##### `client_cert_pem`<sup>Required</sup> <a name="client_cert_pem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientCertPem"></a>

```python
client_cert_pem: str
```

- *Type:* str

---

##### `client_key_pem`<sup>Required</sup> <a name="client_key_pem" id="@cdktn/provider-http.dataHttp.DataHttp.property.clientKeyPem"></a>

```python
client_key_pem: str
```

- *Type:* str

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktn/provider-http.dataHttp.DataHttp.property.insecure"></a>

```python
insecure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-http.dataHttp.DataHttp.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `request_body`<sup>Required</sup> <a name="request_body" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```python
request_body: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_timeout_ms`<sup>Required</sup> <a name="request_timeout_ms" id="@cdktn/provider-http.dataHttp.DataHttp.property.requestTimeoutMs"></a>

```python
request_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-http.dataHttp.DataHttp.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktn/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```python
from cdktn_provider_http import data_http

dataHttp.DataHttpConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  url: str,
  ca_cert_pem: str = None,
  client_cert_pem: str = None,
  client_key_pem: str = None,
  insecure: bool | IResolvable = None,
  method: str = None,
  request_body: str = None,
  request_headers: typing.Mapping[str] = None,
  request_timeout_ms: typing.Union[int, float] = None,
  retry: DataHttpRetry = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.url">url</a></code> | <code>str</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem">ca_cert_pem</a></code> | <code>str</code> | Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem">client_cert_pem</a></code> | <code>str</code> | Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem">client_key_pem</a></code> | <code>str</code> | Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.method">method</a></code> | <code>str</code> | The HTTP Method for the request. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody">request_body</a></code> | <code>str</code> | The request body as a string. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | A map of request header field names and values. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs">request_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | The request timeout in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | retry block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#url DataHttp#url}

---

##### `ca_cert_pem`<sup>Optional</sup> <a name="ca_cert_pem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.caCertPem"></a>

```python
ca_cert_pem: str
```

- *Type:* str

Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `client_cert_pem`<sup>Optional</sup> <a name="client_cert_pem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientCertPem"></a>

```python
client_cert_pem: str
```

- *Type:* str

Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_cert_pem DataHttp#client_cert_pem}

---

##### `client_key_pem`<sup>Optional</sup> <a name="client_key_pem" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.clientKeyPem"></a>

```python
client_key_pem: str
```

- *Type:* str

Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_key_pem DataHttp#client_key_pem}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.insecure"></a>

```python
insecure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#insecure DataHttp#insecure}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```python
method: str
```

- *Type:* str

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#method DataHttp#method}

---

##### `request_body`<sup>Optional</sup> <a name="request_body" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```python
request_body: str
```

- *Type:* str

The request body as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_body DataHttp#request_body}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of request header field names and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_headers DataHttp#request_headers}

---

##### `request_timeout_ms`<sup>Optional</sup> <a name="request_timeout_ms" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.requestTimeoutMs"></a>

```python
request_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The request timeout in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_timeout_ms DataHttp#request_timeout_ms}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktn/provider-http.dataHttp.DataHttpConfig.property.retry"></a>

```python
retry: DataHttpRetry
```

- *Type:* <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#retry DataHttp#retry}

---

### DataHttpRetry <a name="DataHttpRetry" id="@cdktn/provider-http.dataHttp.DataHttpRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-http.dataHttp.DataHttpRetry.Initializer"></a>

```python
from cdktn_provider_http import data_http

dataHttp.DataHttpRetry(
  attempts: typing.Union[int, float] = None,
  max_delay_ms: typing.Union[int, float] = None,
  min_delay_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts">attempts</a></code> | <code>typing.Union[int, float]</code> | The number of times the request is to be retried. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs">max_delay_ms</a></code> | <code>typing.Union[int, float]</code> | The maximum delay between retry requests in milliseconds. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs">min_delay_ms</a></code> | <code>typing.Union[int, float]</code> | The minimum delay between retry requests in milliseconds. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.attempts"></a>

```python
attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of times the request is to be retried.

For example, if 2 is specified, the request will be tried a maximum of 3 times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#attempts DataHttp#attempts}

---

##### `max_delay_ms`<sup>Optional</sup> <a name="max_delay_ms" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.maxDelayMs"></a>

```python
max_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#max_delay_ms DataHttp#max_delay_ms}

---

##### `min_delay_ms`<sup>Optional</sup> <a name="min_delay_ms" id="@cdktn/provider-http.dataHttp.DataHttpRetry.property.minDelayMs"></a>

```python
min_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum delay between retry requests in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#min_delay_ms DataHttp#min_delay_ms}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHttpRetryOutputReference <a name="DataHttpRetryOutputReference" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_http import data_http

dataHttp.DataHttpRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetAttempts">reset_attempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMaxDelayMs">reset_max_delay_ms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMinDelayMs">reset_min_delay_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attempts` <a name="reset_attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetAttempts"></a>

```python
def reset_attempts() -> None
```

##### `reset_max_delay_ms` <a name="reset_max_delay_ms" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMaxDelayMs"></a>

```python
def reset_max_delay_ms() -> None
```

##### `reset_min_delay_ms` <a name="reset_min_delay_ms" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.resetMinDelayMs"></a>

```python
def reset_min_delay_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput">attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput">max_delay_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput">min_delay_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts">attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs">max_delay_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs">min_delay_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attempts_input`<sup>Optional</sup> <a name="attempts_input" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attemptsInput"></a>

```python
attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_delay_ms_input`<sup>Optional</sup> <a name="max_delay_ms_input" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMsInput"></a>

```python
max_delay_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_delay_ms_input`<sup>Optional</sup> <a name="min_delay_ms_input" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMsInput"></a>

```python
min_delay_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.attempts"></a>

```python
attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_delay_ms`<sup>Required</sup> <a name="max_delay_ms" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.maxDelayMs"></a>

```python
max_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_delay_ms`<sup>Required</sup> <a name="min_delay_ms" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.minDelayMs"></a>

```python
min_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-http.dataHttp.DataHttpRetryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataHttpRetry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-http.dataHttp.DataHttpRetry">DataHttpRetry</a>

---



