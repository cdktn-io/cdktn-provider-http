/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}
  */
  readonly caCertPem?: string;
  /**
  * Client certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_cert_pem DataHttp#client_cert_pem}
  */
  readonly clientCertPem?: string;
  /**
  * Client key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#client_key_pem DataHttp#client_key_pem}
  */
  readonly clientKeyPem?: string;
  /**
  * Disables verification of the server's certificate chain and hostname. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#insecure DataHttp#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The HTTP Method for the request. Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#method DataHttp#method}
  */
  readonly method?: string;
  /**
  * The request body as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_body DataHttp#request_body}
  */
  readonly requestBody?: string;
  /**
  * A map of request header field names and values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_headers DataHttp#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * The request timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#request_timeout_ms DataHttp#request_timeout_ms}
  */
  readonly requestTimeoutMs?: number;
  /**
  * The URL for the request. Supported schemes are `http` and `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#url DataHttp#url}
  */
  readonly url: string;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#retry DataHttp#retry}
  */
  readonly retry?: DataHttpRetry;
}
export interface DataHttpRetry {
  /**
  * The number of times the request is to be retried. For example, if 2 is specified, the request will be tried a maximum of 3 times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#attempts DataHttp#attempts}
  */
  readonly attempts?: number;
  /**
  * The maximum delay between retry requests in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#max_delay_ms DataHttp#max_delay_ms}
  */
  readonly maxDelayMs?: number;
  /**
  * The minimum delay between retry requests in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#min_delay_ms DataHttp#min_delay_ms}
  */
  readonly minDelayMs?: number;
}

export function dataHttpRetryToTerraform(struct?: DataHttpRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    max_delay_ms: cdktf.numberToTerraform(struct!.maxDelayMs),
    min_delay_ms: cdktf.numberToTerraform(struct!.minDelayMs),
  }
}


export function dataHttpRetryToHclTerraform(struct?: DataHttpRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_delay_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_delay_ms: {
      value: cdktf.numberToHclTerraform(struct!.minDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHttpRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHttpRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._maxDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDelayMs = this._maxDelayMs;
    }
    if (this._minDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDelayMs = this._minDelayMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHttpRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._maxDelayMs = undefined;
      this._minDelayMs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._maxDelayMs = value.maxDelayMs;
      this._minDelayMs = value.minDelayMs;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // max_delay_ms - computed: false, optional: true, required: false
  private _maxDelayMs?: number; 
  public get maxDelayMs() {
    return this.getNumberAttribute('max_delay_ms');
  }
  public set maxDelayMs(value: number) {
    this._maxDelayMs = value;
  }
  public resetMaxDelayMs() {
    this._maxDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayMsInput() {
    return this._maxDelayMs;
  }

  // min_delay_ms - computed: false, optional: true, required: false
  private _minDelayMs?: number; 
  public get minDelayMs() {
    return this.getNumberAttribute('min_delay_ms');
  }
  public set minDelayMs(value: number) {
    this._minDelayMs = value;
  }
  public resetMinDelayMs() {
    this._minDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayMsInput() {
    return this._minDelayMs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http http}
*/
export class DataHttp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHttp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHttp to import
  * @param importFromId The id of the existing DataHttp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHttp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/http/3.5.0/docs/data-sources/http http} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHttpConfig
  */
  public constructor(scope: Construct, id: string, config: DataHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'http',
      terraformGeneratorMetadata: {
        providerName: 'http',
        providerVersion: '3.5.0',
        providerVersionConstraint: '~> 3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertPem = config.caCertPem;
    this._clientCertPem = config.clientCertPem;
    this._clientKeyPem = config.clientKeyPem;
    this._insecure = config.insecure;
    this._method = config.method;
    this._requestBody = config.requestBody;
    this._requestHeaders = config.requestHeaders;
    this._requestTimeoutMs = config.requestTimeoutMs;
    this._url = config.url;
    this._retry.internalValue = config.retry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // ca_cert_pem - computed: false, optional: true, required: false
  private _caCertPem?: string; 
  public get caCertPem() {
    return this.getStringAttribute('ca_cert_pem');
  }
  public set caCertPem(value: string) {
    this._caCertPem = value;
  }
  public resetCaCertPem() {
    this._caCertPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPemInput() {
    return this._caCertPem;
  }

  // client_cert_pem - computed: false, optional: true, required: false
  private _clientCertPem?: string; 
  public get clientCertPem() {
    return this.getStringAttribute('client_cert_pem');
  }
  public set clientCertPem(value: string) {
    this._clientCertPem = value;
  }
  public resetClientCertPem() {
    this._clientCertPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertPemInput() {
    return this._clientCertPem;
  }

  // client_key_pem - computed: false, optional: true, required: false
  private _clientKeyPem?: string; 
  public get clientKeyPem() {
    return this.getStringAttribute('client_key_pem');
  }
  public set clientKeyPem(value: string) {
    this._clientKeyPem = value;
  }
  public resetClientKeyPem() {
    this._clientKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPemInput() {
    return this._clientKeyPem;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // request_timeout_ms - computed: false, optional: true, required: false
  private _requestTimeoutMs?: number; 
  public get requestTimeoutMs() {
    return this.getNumberAttribute('request_timeout_ms');
  }
  public set requestTimeoutMs(value: number) {
    this._requestTimeoutMs = value;
  }
  public resetRequestTimeoutMs() {
    this._requestTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutMsInput() {
    return this._requestTimeoutMs;
  }

  // response_body - computed: true, optional: false, required: false
  public get responseBody() {
    return this.getStringAttribute('response_body');
  }

  // response_body_base64 - computed: true, optional: false, required: false
  public get responseBodyBase64() {
    return this.getStringAttribute('response_body_base64');
  }

  // response_headers - computed: true, optional: false, required: false
  private _responseHeaders = new cdktf.StringMap(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new DataHttpRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataHttpRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert_pem: cdktf.stringToTerraform(this._caCertPem),
      client_cert_pem: cdktf.stringToTerraform(this._clientCertPem),
      client_key_pem: cdktf.stringToTerraform(this._clientKeyPem),
      insecure: cdktf.booleanToTerraform(this._insecure),
      method: cdktf.stringToTerraform(this._method),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestHeaders),
      request_timeout_ms: cdktf.numberToTerraform(this._requestTimeoutMs),
      url: cdktf.stringToTerraform(this._url),
      retry: dataHttpRetryToTerraform(this._retry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert_pem: {
        value: cdktf.stringToHclTerraform(this._caCertPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_pem: {
        value: cdktf.stringToHclTerraform(this._clientCertPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key_pem: {
        value: cdktf.stringToHclTerraform(this._clientKeyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_body: {
        value: cdktf.stringToHclTerraform(this._requestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      request_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._requestTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: dataHttpRetryToHclTerraform(this._retry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataHttpRetry",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
