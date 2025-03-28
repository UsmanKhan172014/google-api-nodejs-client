// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace dataplex_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Dataplex API
   *
   * Dataplex API is used to manage the lifecycle of data lakes.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const dataplex = google.dataplex('v1');
   * ```
   */
  export class Dataplex {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Action represents an issue requiring administrator action for resolution.
   */
  export interface Schema$GoogleCloudDataplexV1Action {
    /**
     * Output only. The relative resource name of the asset, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     */
    asset?: string | null;
    /**
     * The category of issue associated with the action.
     */
    category?: string | null;
    /**
     * The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id).
     */
    dataLocations?: string[] | null;
    /**
     * The time that the issue was detected.
     */
    detectTime?: string | null;
    /**
     * Details for issues related to applying security policy.
     */
    failedSecurityPolicyApply?: Schema$GoogleCloudDataplexV1ActionFailedSecurityPolicyApply;
    /**
     * Details for issues related to incompatible schemas detected within data.
     */
    incompatibleDataSchema?: Schema$GoogleCloudDataplexV1ActionIncompatibleDataSchema;
    /**
     * Details for issues related to invalid or unsupported data formats.
     */
    invalidDataFormat?: Schema$GoogleCloudDataplexV1ActionInvalidDataFormat;
    /**
     * Details for issues related to invalid data arrangement.
     */
    invalidDataOrganization?: Schema$GoogleCloudDataplexV1ActionInvalidDataOrganization;
    /**
     * Details for issues related to invalid or unsupported data partition structure.
     */
    invalidDataPartition?: Schema$GoogleCloudDataplexV1ActionInvalidDataPartition;
    /**
     * Detailed description of the issue requiring action.
     */
    issue?: string | null;
    /**
     * Output only. The relative resource name of the lake, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    lake?: string | null;
    /**
     * Details for issues related to absence of data within managed resources.
     */
    missingData?: Schema$GoogleCloudDataplexV1ActionMissingData;
    /**
     * Details for issues related to absence of a managed resource.
     */
    missingResource?: Schema$GoogleCloudDataplexV1ActionMissingResource;
    /**
     * Output only. The relative resource name of the action, of the form: projects/{project\}/locations/{location\}/lakes/{lake\}/actions/{action\} projects/{project\}/locations/{location\}/lakes/{lake\}/zones/{zone\}/actions/{action\} projects/{project\}/locations/{location\}/lakes/{lake\}/zones/{zone\}/assets/{asset\}/actions/{action\}.
     */
    name?: string | null;
    /**
     * Details for issues related to lack of permissions to access data resources.
     */
    unauthorizedResource?: Schema$GoogleCloudDataplexV1ActionUnauthorizedResource;
    /**
     * Output only. The relative resource name of the zone, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    zone?: string | null;
  }
  /**
   * Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.
   */
  export interface Schema$GoogleCloudDataplexV1ActionFailedSecurityPolicyApply {
    /**
     * Resource name of one of the assets with failing security policy application. Populated for a lake or zone resource only.
     */
    asset?: string | null;
  }
  /**
   * Action details for incompatible schemas detected by discovery.
   */
  export interface Schema$GoogleCloudDataplexV1ActionIncompatibleDataSchema {
    /**
     * The existing and expected schema of the table. The schema is provided as a JSON formatted structure listing columns and data types.
     */
    existingSchema?: string | null;
    /**
     * The new and incompatible schema within the table. The schema is provided as a JSON formatted structured listing columns and data types.
     */
    newSchema?: string | null;
    /**
     * The list of data locations sampled and used for format/schema inference.
     */
    sampledDataLocations?: string[] | null;
    /**
     * Whether the action relates to a schema that is incompatible or modified.
     */
    schemaChange?: string | null;
    /**
     * The name of the table containing invalid data.
     */
    table?: string | null;
  }
  /**
   * Action details for invalid or unsupported data files detected by discovery.
   */
  export interface Schema$GoogleCloudDataplexV1ActionInvalidDataFormat {
    /**
     * The expected data format of the entity.
     */
    expectedFormat?: string | null;
    /**
     * The new unexpected data format within the entity.
     */
    newFormat?: string | null;
    /**
     * The list of data locations sampled and used for format/schema inference.
     */
    sampledDataLocations?: string[] | null;
  }
  /**
   * Action details for invalid data arrangement.
   */
  export interface Schema$GoogleCloudDataplexV1ActionInvalidDataOrganization {}
  /**
   * Action details for invalid or unsupported partitions detected by discovery.
   */
  export interface Schema$GoogleCloudDataplexV1ActionInvalidDataPartition {
    /**
     * The issue type of InvalidDataPartition.
     */
    expectedStructure?: string | null;
  }
  /**
   * Action details for absence of data detected by discovery.
   */
  export interface Schema$GoogleCloudDataplexV1ActionMissingData {}
  /**
   * Action details for resource references in assets that cannot be located.
   */
  export interface Schema$GoogleCloudDataplexV1ActionMissingResource {}
  /**
   * Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset.
   */
  export interface Schema$GoogleCloudDataplexV1ActionUnauthorizedResource {}
  /**
   * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
   */
  export interface Schema$GoogleCloudDataplexV1Asset {
    /**
     * Output only. The time when the asset was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the asset.
     */
    description?: string | null;
    /**
     * Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.
     */
    discoverySpec?: Schema$GoogleCloudDataplexV1AssetDiscoverySpec;
    /**
     * Output only. Status of the discovery feature applied to data referenced by this asset.
     */
    discoveryStatus?: Schema$GoogleCloudDataplexV1AssetDiscoveryStatus;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string | null;
    /**
     * Optional. User defined labels for the asset.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The relative resource name of the asset, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     */
    name?: string | null;
    /**
     * Required. Specification of the resource that is referenced by this asset.
     */
    resourceSpec?: Schema$GoogleCloudDataplexV1AssetResourceSpec;
    /**
     * Output only. Status of the resource referenced by this asset.
     */
    resourceStatus?: Schema$GoogleCloudDataplexV1AssetResourceStatus;
    /**
     * Output only. Status of the security policy applied to resource referenced by this asset.
     */
    securityStatus?: Schema$GoogleCloudDataplexV1AssetSecurityStatus;
    /**
     * Output only. Current state of the asset.
     */
    state?: string | null;
    /**
     * Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.
     */
    uid?: string | null;
    /**
     * Output only. The time when the asset was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Settings to manage the metadata discovery and publishing for an asset.
   */
  export interface Schema$GoogleCloudDataplexV1AssetDiscoverySpec {
    /**
     * Optional. Configuration for CSV data.
     */
    csvOptions?: Schema$GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;
    /**
     * Optional. Whether discovery is enabled.
     */
    enabled?: boolean | null;
    /**
     * Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
     */
    excludePatterns?: string[] | null;
    /**
     * Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
     */
    includePatterns?: string[] | null;
    /**
     * Optional. Configuration for Json data.
     */
    jsonOptions?: Schema$GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;
    /**
     * Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE\}" or TZ=${IANA_TIME_ZONE\}". The ${IANA_TIME_ZONE\} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".
     */
    schedule?: string | null;
  }
  /**
   * Describe CSV and similar semi-structured data formats.
   */
  export interface Schema$GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions {
    /**
     * Optional. The delimiter being used to separate values. This defaults to ','.
     */
    delimiter?: string | null;
    /**
     * Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
     */
    disableTypeInference?: boolean | null;
    /**
     * Optional. The character encoding of the data. The default is UTF-8.
     */
    encoding?: string | null;
    /**
     * Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
     */
    headerRows?: number | null;
  }
  /**
   * Describe JSON data format.
   */
  export interface Schema$GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions {
    /**
     * Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
     */
    disableTypeInference?: boolean | null;
    /**
     * Optional. The character encoding of the data. The default is UTF-8.
     */
    encoding?: string | null;
  }
  /**
   * Status of discovery for an asset.
   */
  export interface Schema$GoogleCloudDataplexV1AssetDiscoveryStatus {
    /**
     * The duration of the last discovery run.
     */
    lastRunDuration?: string | null;
    /**
     * The start time of the last discovery run.
     */
    lastRunTime?: string | null;
    /**
     * Additional information about the current state.
     */
    message?: string | null;
    /**
     * The current status of the discovery feature.
     */
    state?: string | null;
    /**
     * Data Stats of the asset reported by discovery.
     */
    stats?: Schema$GoogleCloudDataplexV1AssetDiscoveryStatusStats;
    /**
     * Last update time of the status.
     */
    updateTime?: string | null;
  }
  /**
   * The aggregated data statistics for the asset reported by discovery.
   */
  export interface Schema$GoogleCloudDataplexV1AssetDiscoveryStatusStats {
    /**
     * The count of data items within the referenced resource.
     */
    dataItems?: string | null;
    /**
     * The number of stored data bytes within the referenced resource.
     */
    dataSize?: string | null;
    /**
     * The count of fileset entities within the referenced resource.
     */
    filesets?: string | null;
    /**
     * The count of table entities within the referenced resource.
     */
    tables?: string | null;
  }
  /**
   * Identifies the cloud resource that is referenced by this asset.
   */
  export interface Schema$GoogleCloudDataplexV1AssetResourceSpec {
    /**
     * Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: projects/{project_number\}/buckets/{bucket_id\} projects/{project_number\}/datasets/{dataset_id\}
     */
    name?: string | null;
    /**
     * Required. Immutable. Type of resource.
     */
    type?: string | null;
  }
  /**
   * Status of the resource referenced by an asset.
   */
  export interface Schema$GoogleCloudDataplexV1AssetResourceStatus {
    /**
     * Additional information about the current state.
     */
    message?: string | null;
    /**
     * The current state of the managed resource.
     */
    state?: string | null;
    /**
     * Last update time of the status.
     */
    updateTime?: string | null;
  }
  /**
   * Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.
   */
  export interface Schema$GoogleCloudDataplexV1AssetSecurityStatus {
    /**
     * Additional information about the current state.
     */
    message?: string | null;
    /**
     * The current state of the security policy applied to the attached resource.
     */
    state?: string | null;
    /**
     * Last update time of the status.
     */
    updateTime?: string | null;
  }
  /**
   * Aggregated status of the underlying assets of a lake or zone.
   */
  export interface Schema$GoogleCloudDataplexV1AssetStatus {
    /**
     * Number of active assets.
     */
    activeAssets?: number | null;
    /**
     * Number of assets that are in process of updating the security policy on attached resources.
     */
    securityPolicyApplyingAssets?: number | null;
    /**
     * Last update time of the status.
     */
    updateTime?: string | null;
  }
  /**
   * Cancel task jobs.
   */
  export interface Schema$GoogleCloudDataplexV1CancelJobRequest {}
  /**
   * Content represents a user-visible notebook or a sql script
   */
  export interface Schema$GoogleCloudDataplexV1Content {
    /**
     * Output only. Content creation time.
     */
    createTime?: string | null;
    /**
     * Required. Content data in string format.
     */
    dataText?: string | null;
    /**
     * Optional. Description of the content.
     */
    description?: string | null;
    /**
     * Optional. User defined labels for the content.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The relative resource name of the content, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     */
    name?: string | null;
    /**
     * Notebook related configurations.
     */
    notebook?: Schema$GoogleCloudDataplexV1ContentNotebook;
    /**
     * Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.
     */
    path?: string | null;
    /**
     * Sql Script related configurations.
     */
    sqlScript?: Schema$GoogleCloudDataplexV1ContentSqlScript;
    /**
     * Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name.
     */
    uid?: string | null;
    /**
     * Output only. The time when the content was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configuration for Notebook content.
   */
  export interface Schema$GoogleCloudDataplexV1ContentNotebook {
    /**
     * Required. Kernel Type of the notebook.
     */
    kernelType?: string | null;
  }
  /**
   * Configuration for the Sql Script content.
   */
  export interface Schema$GoogleCloudDataplexV1ContentSqlScript {
    /**
     * Required. Query Engine to be used for the Sql Query.
     */
    engine?: string | null;
  }
  /**
   * The payload associated with Discovery data processing.
   */
  export interface Schema$GoogleCloudDataplexV1DiscoveryEvent {
    /**
     * Details about the action associated with the event.
     */
    action?: Schema$GoogleCloudDataplexV1DiscoveryEventActionDetails;
    /**
     * The id of the associated asset.
     */
    assetId?: string | null;
    /**
     * Details about discovery configuration in effect.
     */
    config?: Schema$GoogleCloudDataplexV1DiscoveryEventConfigDetails;
    /**
     * The data location associated with the event.
     */
    dataLocation?: string | null;
    /**
     * Details about the entity associated with the event.
     */
    entity?: Schema$GoogleCloudDataplexV1DiscoveryEventEntityDetails;
    /**
     * The id of the associated lake.
     */
    lakeId?: string | null;
    /**
     * The log message.
     */
    message?: string | null;
    /**
     * Details about the partition associated with the event.
     */
    partition?: Schema$GoogleCloudDataplexV1DiscoveryEventPartitionDetails;
    /**
     * The type of the event being logged.
     */
    type?: string | null;
    /**
     * The id of the associated zone.
     */
    zoneId?: string | null;
  }
  /**
   * Details about the action.
   */
  export interface Schema$GoogleCloudDataplexV1DiscoveryEventActionDetails {
    /**
     * The type of action. Eg. IncompatibleDataSchema, InvalidDataFormat
     */
    type?: string | null;
  }
  /**
   * Details about configuration events.
   */
  export interface Schema$GoogleCloudDataplexV1DiscoveryEventConfigDetails {
    /**
     * A list of discovery configuration parameters in effect. The keys are the field paths within DiscoverySpec. Eg. includePatterns, excludePatterns, csvOptions.disableTypeInference, etc.
     */
    parameters?: {[key: string]: string} | null;
  }
  /**
   * Details about the entity.
   */
  export interface Schema$GoogleCloudDataplexV1DiscoveryEventEntityDetails {
    /**
     * The name of the entity resource. The name is the fully-qualified resource name.
     */
    entity?: string | null;
    /**
     * The type of the entity resource.
     */
    type?: string | null;
  }
  /**
   * Details about the partition.
   */
  export interface Schema$GoogleCloudDataplexV1DiscoveryEventPartitionDetails {
    /**
     * The name to the containing entity resource. The name is the fully-qualified resource name.
     */
    entity?: string | null;
    /**
     * The name to the partition resource. The name is the fully-qualified resource name.
     */
    partition?: string | null;
    /**
     * The locations of the data items (e.g., a Cloud Storage objects) sampled for metadata inference.
     */
    sampledDataLocations?: string[] | null;
    /**
     * The type of the containing entity resource.
     */
    type?: string | null;
  }
  /**
   * Represents tables and fileset metadata contained within a zone.
   */
  export interface Schema$GoogleCloudDataplexV1Entity {
    /**
     * Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.
     */
    asset?: string | null;
    /**
     * Output only. The name of the associated Data Catalog entry.
     */
    catalogEntry?: string | null;
    /**
     * Output only. Metadata stores that the entity is compatible with.
     */
    compatibility?: Schema$GoogleCloudDataplexV1EntityCompatibilityStatus;
    /**
     * Output only. The time when the entity was created.
     */
    createTime?: string | null;
    /**
     * Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.
     */
    dataPath?: string | null;
    /**
     * Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/xx/x.csv.
     */
    dataPathPattern?: string | null;
    /**
     * Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Display name must be shorter than or equal to 256 characters.
     */
    displayName?: string | null;
    /**
     * Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.
     */
    etag?: string | null;
    /**
     * Required. Identifies the storage format of the entity data. It does not apply to entities with data stored in BigQuery.
     */
    format?: Schema$GoogleCloudDataplexV1StorageFormat;
    /**
     * Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores. Must begin with a letter and consist of 256 or fewer characters.
     */
    id?: string | null;
    /**
     * Output only. The resource name of the entity, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{id\}.
     */
    name?: string | null;
    /**
     * Required. The description of the data structure and layout. The schema is not included in list responses. It is only included in SCHEMA and FULL entity views of a GetEntity response.
     */
    schema?: Schema$GoogleCloudDataplexV1Schema;
    /**
     * Required. Immutable. Identifies the storage system of the entity data.
     */
    system?: string | null;
    /**
     * Required. Immutable. The type of entity.
     */
    type?: string | null;
    /**
     * Output only. The time when the entity was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Provides compatibility information for various metadata stores.
   */
  export interface Schema$GoogleCloudDataplexV1EntityCompatibilityStatus {
    /**
     * Output only. Whether this entity is compatible with BigQuery.
     */
    bigquery?: Schema$GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;
    /**
     * Output only. Whether this entity is compatible with Hive Metastore.
     */
    hiveMetastore?: Schema$GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;
  }
  /**
   * Provides compatibility information for a specific metadata store.
   */
  export interface Schema$GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility {
    /**
     * Output only. Whether the entity is compatible and can be represented in the metadata store.
     */
    compatible?: boolean | null;
    /**
     * Output only. Provides additional detail if the entity is incompatible with the metadata store.
     */
    reason?: string | null;
  }
  /**
   * Environment represents a user-visible compute infrastructure for analytics within a lake.
   */
  export interface Schema$GoogleCloudDataplexV1Environment {
    /**
     * Output only. Environment creation time.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the environment.
     */
    description?: string | null;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string | null;
    /**
     * Output only. URI Endpoints to access sessions associated with the Environment.
     */
    endpoints?: Schema$GoogleCloudDataplexV1EnvironmentEndpoints;
    /**
     * Required. Infrastructure specification for the Environment.
     */
    infrastructureSpec?: Schema$GoogleCloudDataplexV1EnvironmentInfrastructureSpec;
    /**
     * Optional. User defined labels for the environment.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The relative resource name of the environment, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/environment/{environment_id\}
     */
    name?: string | null;
    /**
     * Optional. Configuration for sessions created for this environment.
     */
    sessionSpec?: Schema$GoogleCloudDataplexV1EnvironmentSessionSpec;
    /**
     * Output only. Status of sessions created for this environment.
     */
    sessionStatus?: Schema$GoogleCloudDataplexV1EnvironmentSessionStatus;
    /**
     * Output only. Current state of the environment.
     */
    state?: string | null;
    /**
     * Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name.
     */
    uid?: string | null;
    /**
     * Output only. The time when the environment was last updated.
     */
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudDataplexV1EnvironmentEndpoints {
    /**
     * Output only. URI to serve notebook APIs
     */
    notebooks?: string | null;
    /**
     * Output only. URI to serve SQL APIs
     */
    sql?: string | null;
  }
  /**
   * Configuration for the underlying infrastructure used to run workloads.
   */
  export interface Schema$GoogleCloudDataplexV1EnvironmentInfrastructureSpec {
    /**
     * Optional. Compute resources needed for analyze interactive workloads.
     */
    compute?: Schema$GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources;
    /**
     * Required. Software Runtime Configuration for analyze interactive workloads.
     */
    osImage?: Schema$GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime;
  }
  /**
   * Compute resources associated with the analyze interactive workloads.
   */
  export interface Schema$GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources {
    /**
     * Optional. Size in GB of the disk. Default is 100 GB.
     */
    diskSizeGb?: number | null;
    /**
     * Optional. Max configurable nodes. If max_node_count \> node_count, then auto-scaling is enabled.
     */
    maxNodeCount?: number | null;
    /**
     * Optional. Total number of nodes in the sessions created for this environment.
     */
    nodeCount?: number | null;
  }
  /**
   * Software Runtime Configuration to run Analyze.
   */
  export interface Schema$GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime {
    /**
     * Required. Dataplex Image version.
     */
    imageVersion?: string | null;
    /**
     * Optional. List of Java jars to be included in the runtime environment. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar
     */
    javaLibraries?: string[] | null;
    /**
     * Optional. Spark properties to provide configuration for use in sessions created for this environment. The properties to set on daemon config files. Property keys are specified in prefix:property format. The prefix must be "spark".
     */
    properties?: {[key: string]: string} | null;
    /**
     * Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz
     */
    pythonPackages?: string[] | null;
  }
  export interface Schema$GoogleCloudDataplexV1EnvironmentSessionSpec {
    /**
     * Optional. If True, this causes sessions to be pre-created and available for faster startup to enable interactive exploration use-cases. This defaults to False to avoid additional billed charges. These can only be set to True for the environment with name set to "default", and with default configuration.
     */
    enableFastStartup?: boolean | null;
    /**
     * Optional. The idle time configuration of the session. The session will be auto-terminated at the end of this period.
     */
    maxIdleDuration?: string | null;
  }
  export interface Schema$GoogleCloudDataplexV1EnvironmentSessionStatus {
    /**
     * Output only. Queries over sessions to mark whether the environment is currently active or not
     */
    active?: boolean | null;
  }
  /**
   * A job represents an instance of a task.
   */
  export interface Schema$GoogleCloudDataplexV1Job {
    /**
     * Output only. The time when the job ended.
     */
    endTime?: string | null;
    /**
     * Output only. Additional information about the current state.
     */
    message?: string | null;
    /**
     * Output only. The relative resource name of the job, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/tasks/{task_id\}/jobs/{job_id\}.
     */
    name?: string | null;
    /**
     * Output only. The number of times the job has been retried (excluding the initial attempt).
     */
    retryCount?: number | null;
    /**
     * Output only. The underlying service running a job.
     */
    service?: string | null;
    /**
     * Output only. The full resource name for the job run under a particular service.
     */
    serviceJob?: string | null;
    /**
     * Output only. The time when the job was started.
     */
    startTime?: string | null;
    /**
     * Output only. Execution state for the job.
     */
    state?: string | null;
    /**
     * Output only. System generated globally unique ID for the job.
     */
    uid?: string | null;
  }
  /**
   * The payload associated with Job logs that contains events describing jobs that have run within a Lake.
   */
  export interface Schema$GoogleCloudDataplexV1JobEvent {
    /**
     * The time when the job ended running.
     */
    endTime?: string | null;
    /**
     * The unique id identifying the job.
     */
    jobId?: string | null;
    /**
     * The log message.
     */
    message?: string | null;
    /**
     * The number of retries.
     */
    retries?: number | null;
    /**
     * The service used to execute the job.
     */
    service?: string | null;
    /**
     * The reference to the job within the service.
     */
    serviceJob?: string | null;
    /**
     * The time when the job started running.
     */
    startTime?: string | null;
    /**
     * The job state on completion.
     */
    state?: string | null;
    /**
     * The type of the job.
     */
    type?: string | null;
  }
  /**
   * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
   */
  export interface Schema$GoogleCloudDataplexV1Lake {
    /**
     * Output only. Aggregated status of the underlying assets of the lake.
     */
    assetStatus?: Schema$GoogleCloudDataplexV1AssetStatus;
    /**
     * Output only. The time when the lake was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the lake.
     */
    description?: string | null;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string | null;
    /**
     * Optional. User-defined labels for the lake.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Settings to manage lake and Dataproc Metastore service instance association.
     */
    metastore?: Schema$GoogleCloudDataplexV1LakeMetastore;
    /**
     * Output only. Metastore status of the lake.
     */
    metastoreStatus?: Schema$GoogleCloudDataplexV1LakeMetastoreStatus;
    /**
     * Output only. The relative resource name of the lake, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    name?: string | null;
    /**
     * Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake.
     */
    serviceAccount?: string | null;
    /**
     * Output only. Current state of the lake.
     */
    state?: string | null;
    /**
     * Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name.
     */
    uid?: string | null;
    /**
     * Output only. The time when the lake was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Settings to manage association of Dataproc Metastore with a lake.
   */
  export interface Schema$GoogleCloudDataplexV1LakeMetastore {
    /**
     * Optional. A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service associated with the lake: projects/{project_id\}/locations/{location_id\}/services/{service_id\}
     */
    service?: string | null;
  }
  /**
   * Status of Lake and Dataproc Metastore service instance association.
   */
  export interface Schema$GoogleCloudDataplexV1LakeMetastoreStatus {
    /**
     * The URI of the endpoint used to access the Metastore service.
     */
    endpoint?: string | null;
    /**
     * Additional information about the current status.
     */
    message?: string | null;
    /**
     * Current state of association.
     */
    state?: string | null;
    /**
     * Last update time of the metastore status of the lake.
     */
    updateTime?: string | null;
  }
  /**
   * List actions response.
   */
  export interface Schema$GoogleCloudDataplexV1ListActionsResponse {
    /**
     * Actions under the given parent lake/zone/asset.
     */
    actions?: Schema$GoogleCloudDataplexV1Action[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * List assets response.
   */
  export interface Schema$GoogleCloudDataplexV1ListAssetsResponse {
    /**
     * Asset under the given parent zone.
     */
    assets?: Schema$GoogleCloudDataplexV1Asset[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * List content response.
   */
  export interface Schema$GoogleCloudDataplexV1ListContentResponse {
    /**
     * Content under the given parent lake.
     */
    content?: Schema$GoogleCloudDataplexV1Content[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * List metadata entities response.
   */
  export interface Schema$GoogleCloudDataplexV1ListEntitiesResponse {
    /**
     * Entities in the specified parent zone.
     */
    entities?: Schema$GoogleCloudDataplexV1Entity[];
    /**
     * Token to retrieve the next page of results, or empty if there are no remaining results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * List environments response.
   */
  export interface Schema$GoogleCloudDataplexV1ListEnvironmentsResponse {
    /**
     * Environments under the given parent lake.
     */
    environments?: Schema$GoogleCloudDataplexV1Environment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * List jobs response.
   */
  export interface Schema$GoogleCloudDataplexV1ListJobsResponse {
    /**
     * Jobs under a given task.
     */
    jobs?: Schema$GoogleCloudDataplexV1Job[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * List lakes response.
   */
  export interface Schema$GoogleCloudDataplexV1ListLakesResponse {
    /**
     * Lakes under the given parent location.
     */
    lakes?: Schema$GoogleCloudDataplexV1Lake[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[] | null;
  }
  /**
   * List metadata partitions response.
   */
  export interface Schema$GoogleCloudDataplexV1ListPartitionsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no remaining results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Partitions under the specified parent entity.
     */
    partitions?: Schema$GoogleCloudDataplexV1Partition[];
  }
  /**
   * List sessions response.
   */
  export interface Schema$GoogleCloudDataplexV1ListSessionsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Sessions under a given environment.
     */
    sessions?: Schema$GoogleCloudDataplexV1Session[];
  }
  /**
   * List tasks response.
   */
  export interface Schema$GoogleCloudDataplexV1ListTasksResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Tasks under the given parent lake.
     */
    tasks?: Schema$GoogleCloudDataplexV1Task[];
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[] | null;
  }
  /**
   * List zones response.
   */
  export interface Schema$GoogleCloudDataplexV1ListZonesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Zones under the given parent lake.
     */
    zones?: Schema$GoogleCloudDataplexV1Zone[];
  }
  /**
   * Represents the metadata of a long-running operation.
   */
  export interface Schema$GoogleCloudDataplexV1OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Represents partition metadata contained within entity instances.
   */
  export interface Schema$GoogleCloudDataplexV1Partition {
    /**
     * Optional. The etag for this partition.
     */
    etag?: string | null;
    /**
     * Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/
     */
    location?: string | null;
    /**
     * Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode "US:CA/CA#Sunnyvale so that the request URL ends with "/partitions/US%253ACA/CA%2523Sunnyvale". The name field in the response retains the encoded format.
     */
    name?: string | null;
    /**
     * Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity.
     */
    values?: string[] | null;
  }
  /**
   * Schema information describing the structure and layout of the data.
   */
  export interface Schema$GoogleCloudDataplexV1Schema {
    /**
     * Optional. The sequence of fields describing data in table entities. Note: BigQuery SchemaFields are immutable.
     */
    fields?: Schema$GoogleCloudDataplexV1SchemaSchemaField[];
    /**
     * Optional. The sequence of fields describing the partition structure in entities. If this field is empty, there are no partitions within the data.
     */
    partitionFields?: Schema$GoogleCloudDataplexV1SchemaPartitionField[];
    /**
     * Optional. The structure of paths containing partition data within the entity.
     */
    partitionStyle?: string | null;
    /**
     * Required. Set to true if user-managed or false if managed by Dataplex. The default is false (managed by Dataplex). Set to falseto enable Dataplex discovery to update the schema. including new data discovery, schema inference, and schema evolution. Users retain the ability to input and edit the schema. Dataplex treats schema input by the user as though produced by a previous Dataplex discovery operation, and it will evolve the schema and take action based on that treatment. Set to true to fully manage the entity schema. This setting guarantees that Dataplex will not change schema fields.
     */
    userManaged?: boolean | null;
  }
  /**
   * Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable.
   */
  export interface Schema$GoogleCloudDataplexV1SchemaPartitionField {
    /**
     * Required. Partition field name must consist of letters, numbers, and underscores only, with a maximum of length of 256 characters, and must begin with a letter or underscore..
     */
    name?: string | null;
    /**
     * Required. Immutable. The type of field.
     */
    type?: string | null;
  }
  /**
   * Represents a column field within a table schema.
   */
  export interface Schema$GoogleCloudDataplexV1SchemaSchemaField {
    /**
     * Optional. User friendly field description. Must be less than or equal to 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Any nested field for complex types.
     */
    fields?: Schema$GoogleCloudDataplexV1SchemaSchemaField[];
    /**
     * Required. Additional field semantics.
     */
    mode?: string | null;
    /**
     * Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore.
     */
    name?: string | null;
    /**
     * Required. The type of field.
     */
    type?: string | null;
  }
  /**
   * Represents an active analyze session running for a user.
   */
  export interface Schema$GoogleCloudDataplexV1Session {
    /**
     * Output only. Session start time.
     */
    createTime?: string | null;
    /**
     * Output only. The relative resource name of the content, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/environment/{environment_id\}/sessions/{session_id\}
     */
    name?: string | null;
    state?: string | null;
    /**
     * Output only. Email of user running the session.
     */
    userId?: string | null;
  }
  /**
   * These messages contain information about sessions within an environment. The monitored resource is 'Environment'.
   */
  export interface Schema$GoogleCloudDataplexV1SessionEvent {
    /**
     * The status of the event.
     */
    eventSucceeded?: boolean | null;
    /**
     * The log message.
     */
    message?: string | null;
    /**
     * The execution details of the query.
     */
    query?: Schema$GoogleCloudDataplexV1SessionEventQueryDetail;
    /**
     * Unique identifier for the session.
     */
    sessionId?: string | null;
    /**
     * The type of the event.
     */
    type?: string | null;
    /**
     * The idle duration of a warm pooled session before it is assigned to user.
     */
    unassignedDuration?: string | null;
    /**
     * The information about the user that created the session. It will be the email address of the user.
     */
    userId?: string | null;
    /**
     * If the session is a warm pooled session.
     */
    warmPoolEnabled?: boolean | null;
  }
  /**
   * Execution details of the query.
   */
  export interface Schema$GoogleCloudDataplexV1SessionEventQueryDetail {
    /**
     * The data processed by the query.
     */
    dataProcessedBytes?: string | null;
    /**
     * Time taken for execution of the query.
     */
    duration?: string | null;
    /**
     * Query Execution engine.
     */
    engine?: string | null;
    /**
     * The unique Query id identifying the query.
     */
    queryId?: string | null;
    /**
     * The query text executed.
     */
    queryText?: string | null;
    /**
     * The size of results the query produced.
     */
    resultSizeBytes?: string | null;
  }
  /**
   * Describes the format of the data within its storage location.
   */
  export interface Schema$GoogleCloudDataplexV1StorageFormat {
    /**
     * Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed.
     */
    compressionFormat?: string | null;
    /**
     * Optional. Additional information about CSV formatted data.
     */
    csv?: Schema$GoogleCloudDataplexV1StorageFormatCsvOptions;
    /**
     * Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type.
     */
    format?: string | null;
    /**
     * Optional. Additional information about CSV formatted data.
     */
    json?: Schema$GoogleCloudDataplexV1StorageFormatJsonOptions;
    /**
     * Required. The mime type descriptor for the data. Must match the pattern {type\}/{subtype\}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/json application/{subtypes\} text/csv text/ image/{image subtype\} video/{video subtype\} audio/{audio subtype\}
     */
    mimeType?: string | null;
  }
  /**
   * Describes CSV and similar semi-structured data formats.
   */
  export interface Schema$GoogleCloudDataplexV1StorageFormatCsvOptions {
    /**
     * Optional. The delimiter used to separate values. Defaults to ','.
     */
    delimiter?: string | null;
    /**
     * Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8", and "ISO-8859-1". Defaults to UTF-8 if unspecified.
     */
    encoding?: string | null;
    /**
     * Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. Defaults to 0.
     */
    headerRows?: number | null;
    /**
     * Optional. The character used to quote column values. Accepts '"' (double quotation mark) or ''' (single quotation mark). Defaults to '"' (double quotation mark) if unspecified.
     */
    quote?: string | null;
  }
  /**
   * Describes JSON data format.
   */
  export interface Schema$GoogleCloudDataplexV1StorageFormatJsonOptions {
    /**
     * Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8" and "ISO-8859-1". Defaults to UTF-8 if not specified.
     */
    encoding?: string | null;
  }
  /**
   * A task represents a user-visible job.
   */
  export interface Schema$GoogleCloudDataplexV1Task {
    /**
     * Output only. The time when the task was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the task.
     */
    description?: string | null;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string | null;
    /**
     * Required. Spec related to how a task is executed.
     */
    executionSpec?: Schema$GoogleCloudDataplexV1TaskExecutionSpec;
    /**
     * Output only. Status of the latest task executions.
     */
    executionStatus?: Schema$GoogleCloudDataplexV1TaskExecutionStatus;
    /**
     * Optional. User-defined labels for the task.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The relative resource name of the task, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/ tasks/{task_id\}.
     */
    name?: string | null;
    /**
     * Config related to running custom Spark tasks.
     */
    spark?: Schema$GoogleCloudDataplexV1TaskSparkTaskConfig;
    /**
     * Output only. Current state of the task.
     */
    state?: string | null;
    /**
     * Required. Spec related to how often and when a task should be triggered.
     */
    triggerSpec?: Schema$GoogleCloudDataplexV1TaskTriggerSpec;
    /**
     * Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name.
     */
    uid?: string | null;
    /**
     * Output only. The time when the task was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Execution related settings, like retry and service_account.
   */
  export interface Schema$GoogleCloudDataplexV1TaskExecutionSpec {
    /**
     * Optional. The arguments to pass to the task. The args can use placeholders of the format ${placeholder\} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id\} - ${job_time\} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument.
     */
    args?: {[key: string]: string} | null;
    /**
     * Optional. The Cloud KMS key to use for encryption, of the form: projects/{project_number\}/locations/{location_id\}/keyRings/{key-ring-name\}/cryptoKeys/{key-name\}.
     */
    kmsKey?: string | null;
    /**
     * Optional. The maximum duration after which the job execution is expired.
     */
    maxJobExecutionLifetime?: string | null;
    /**
     * Optional. The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.
     */
    project?: string | null;
    /**
     * Required. Service account to use to execute a task. If not provided, the default Compute service account for the project is used.
     */
    serviceAccount?: string | null;
  }
  /**
   * Status of the task execution (e.g. Jobs).
   */
  export interface Schema$GoogleCloudDataplexV1TaskExecutionStatus {
    /**
     * Output only. latest job execution
     */
    latestJob?: Schema$GoogleCloudDataplexV1Job;
    /**
     * Output only. Last update time of the status.
     */
    updateTime?: string | null;
  }
  /**
   * Configuration for the underlying infrastructure used to run workloads.
   */
  export interface Schema$GoogleCloudDataplexV1TaskInfrastructureSpec {
    /**
     * Compute resources needed for a Task when using Dataproc Serverless.
     */
    batch?: Schema$GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;
    /**
     * Container Image Runtime Configuration.
     */
    containerImage?: Schema$GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;
    /**
     * Vpc network.
     */
    vpcNetwork?: Schema$GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
  }
  /**
   * Batch compute resources associated with the task.
   */
  export interface Schema$GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources {
    /**
     * Optional. Total number of job executors. Executor Count should be between 2 and 100. Default=2
     */
    executorsCount?: number | null;
    /**
     * Optional. Max configurable executors. If max_executors_count \> executors_count, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. Default=1000
     */
    maxExecutorsCount?: number | null;
  }
  /**
   * Container Image Runtime Configuration used with Batch execution.
   */
  export interface Schema$GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime {
    /**
     * Optional. Container image to use.
     */
    image?: string | null;
    /**
     * Optional. A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar
     */
    javaJars?: string[] | null;
    /**
     * Optional. Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
     */
    properties?: {[key: string]: string} | null;
    /**
     * Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz
     */
    pythonPackages?: string[] | null;
  }
  /**
   * Cloud VPC Network used to run the infrastructure.
   */
  export interface Schema$GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork {
    /**
     * Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.
     */
    network?: string | null;
    /**
     * Optional. List of network tags to apply to the job.
     */
    networkTags?: string[] | null;
    /**
     * Optional. The Cloud VPC sub-network in which the job is run.
     */
    subNetwork?: string | null;
  }
  /**
   * User-specified config for running a Spark task.
   */
  export interface Schema$GoogleCloudDataplexV1TaskSparkTaskConfig {
    /**
     * Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
     */
    archiveUris?: string[] | null;
    /**
     * Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.
     */
    fileUris?: string[] | null;
    /**
     * Optional. Infrastructure specification for the execution.
     */
    infrastructureSpec?: Schema$GoogleCloudDataplexV1TaskInfrastructureSpec;
    /**
     * The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).
     */
    mainClass?: string | null;
    /**
     * The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).
     */
    mainJarFileUri?: string | null;
    /**
     * The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).
     */
    pythonScriptFile?: string | null;
    /**
     * The query text. The execution args are used to declare a set of script variables (set key="value";).
     */
    sqlScript?: string | null;
    /**
     * A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key="value";).
     */
    sqlScriptFile?: string | null;
  }
  /**
   * Task scheduling and trigger settings.
   */
  export interface Schema$GoogleCloudDataplexV1TaskTriggerSpec {
    /**
     * Optional. Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.
     */
    disabled?: boolean | null;
    /**
     * Optional. Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.
     */
    maxRetries?: number | null;
    /**
     * Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE\}" or "TZ=${IANA_TIME_ZONE\}". The ${IANA_TIME_ZONE\} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *". This field is required for RECURRING tasks.
     */
    schedule?: string | null;
    /**
     * Optional. The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.
     */
    startTime?: string | null;
    /**
     * Required. Immutable. Trigger type of the user-specified Task.
     */
    type?: string | null;
  }
  /**
   * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
   */
  export interface Schema$GoogleCloudDataplexV1Zone {
    /**
     * Output only. Aggregated status of the underlying assets of the zone.
     */
    assetStatus?: Schema$GoogleCloudDataplexV1AssetStatus;
    /**
     * Output only. The time when the zone was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the zone.
     */
    description?: string | null;
    /**
     * Optional. Specification of the discovery feature applied to data in this zone.
     */
    discoverySpec?: Schema$GoogleCloudDataplexV1ZoneDiscoverySpec;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string | null;
    /**
     * Optional. User defined labels for the zone.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The relative resource name of the zone, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    name?: string | null;
    /**
     * Required. Specification of the resources that are referenced by the assets within this zone.
     */
    resourceSpec?: Schema$GoogleCloudDataplexV1ZoneResourceSpec;
    /**
     * Output only. Current state of the zone.
     */
    state?: string | null;
    /**
     * Required. Immutable. The type of the zone.
     */
    type?: string | null;
    /**
     * Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.
     */
    uid?: string | null;
    /**
     * Output only. The time when the zone was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Settings to manage the metadata discovery and publishing in a zone.
   */
  export interface Schema$GoogleCloudDataplexV1ZoneDiscoverySpec {
    /**
     * Optional. Configuration for CSV data.
     */
    csvOptions?: Schema$GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;
    /**
     * Required. Whether discovery is enabled.
     */
    enabled?: boolean | null;
    /**
     * Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
     */
    excludePatterns?: string[] | null;
    /**
     * Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
     */
    includePatterns?: string[] | null;
    /**
     * Optional. Configuration for Json data.
     */
    jsonOptions?: Schema$GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;
    /**
     * Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE\}" or TZ=${IANA_TIME_ZONE\}". The ${IANA_TIME_ZONE\} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".
     */
    schedule?: string | null;
  }
  /**
   * Describe CSV and similar semi-structured data formats.
   */
  export interface Schema$GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions {
    /**
     * Optional. The delimiter being used to separate values. This defaults to ','.
     */
    delimiter?: string | null;
    /**
     * Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
     */
    disableTypeInference?: boolean | null;
    /**
     * Optional. The character encoding of the data. The default is UTF-8.
     */
    encoding?: string | null;
    /**
     * Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
     */
    headerRows?: number | null;
  }
  /**
   * Describe JSON data format.
   */
  export interface Schema$GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions {
    /**
     * Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
     */
    disableTypeInference?: boolean | null;
    /**
     * Optional. The character encoding of the data. The default is UTF-8.
     */
    encoding?: string | null;
  }
  /**
   * Settings for resources attached as assets within a zone.
   */
  export interface Schema$GoogleCloudDataplexV1ZoneResourceSpec {
    /**
     * Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone.
     */
    locationType?: string | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$GoogleCloudLocationListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$GoogleCloudLocationLocation[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$GoogleCloudLocationLocation {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: "us-east1".
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
     */
    name?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$GoogleIamV1AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$GoogleIamV1AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$GoogleIamV1AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Associates members, or principals, with a role.
   */
  export interface Schema$GoogleIamV1Binding {
    /**
     * The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. user:{emailid\}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid\}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid\}: An email address that represents a Google group. For example, admins@example.com. deleted:user:{emailid\}?uid={uniqueid\}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid\} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid\}?uid={uniqueid\}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid\} and the undeleted service account retains the role in the binding. deleted:group:{emailid\}?uid={uniqueid\}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid\} and the recovered group retains the role in the binding. domain:{domain\}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.
     */
    role?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1AuditConfig[];
    /**
     * Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy.
     */
    bindings?: Schema$GoogleIamV1Binding[];
    /**
     * etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Request message for SetIamPolicy method.
   */
  export interface Schema$GoogleIamV1SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$GoogleIamV1Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag"
     */
    updateMask?: string | null;
  }
  /**
   * Request message for TestIamPermissions method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for TestIamPermissions method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsResponse {
    /**
     * A subset of TestPermissionsRequest.permissions that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunningCancelOperationRequest {}
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id\}.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$GoogleTypeExpr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    lakes: Resource$Projects$Locations$Lakes;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.lakes = new Resource$Projects$Locations$Lakes(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudLocationLocation>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudLocationLocation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudLocationLocation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationLocation>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.list({
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudLocationListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudLocationListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Lakes {
    context: APIRequestContext;
    actions: Resource$Projects$Locations$Lakes$Actions;
    content: Resource$Projects$Locations$Lakes$Content;
    contentitems: Resource$Projects$Locations$Lakes$Contentitems;
    environments: Resource$Projects$Locations$Lakes$Environments;
    tasks: Resource$Projects$Locations$Lakes$Tasks;
    zones: Resource$Projects$Locations$Lakes$Zones;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.actions = new Resource$Projects$Locations$Lakes$Actions(
        this.context
      );
      this.content = new Resource$Projects$Locations$Lakes$Content(
        this.context
      );
      this.contentitems = new Resource$Projects$Locations$Lakes$Contentitems(
        this.context
      );
      this.environments = new Resource$Projects$Locations$Lakes$Environments(
        this.context
      );
      this.tasks = new Resource$Projects$Locations$Lakes$Tasks(this.context);
      this.zones = new Resource$Projects$Locations$Lakes$Zones(this.context);
    }

    /**
     * Creates a lake resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.create({
     *     // Required. Lake identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the customer project / location.
     *     lakeId: 'placeholder-value',
     *     // Required. The resource name of the lake location, of the form: projects/{project_number\}/locations/{location_id\} where location_id refers to a GCP region.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetStatus": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "labels": {},
     *       //   "metastore": {},
     *       //   "metastoreStatus": {},
     *       //   "name": "my_name",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/lakes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a lake resource. All zones within the lake must be deleted before the lake can be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.delete({
     *     // Required. The resource name of the lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Retrieves a lake resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.get({
     *     // Required. The resource name of the lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetStatus": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "metastore": {},
     *   //   "metastoreStatus": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "state": "my_state",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Lake>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Lake>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Lake>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Lake>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Lake>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Lake>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Lake>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Lake>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Lake>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Lake>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Lake>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists lake resources in a project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.list({
     *     // Optional. Filter request.
     *     filter: 'placeholder-value',
     *     // Optional. Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the lake location, of the form: projects/{project_number\}/locations/{location_id\} where location_id refers to a GCP region.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lakes": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachableLocations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListLakesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListLakesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListLakesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListLakesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListLakesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListLakesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListLakesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListLakesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListLakesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/lakes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListLakesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListLakesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a lake resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.patch({
     *     // Output only. The relative resource name of the lake, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake',
     *     // Required. Mask of fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetStatus": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "labels": {},
     *       //   "metastore": {},
     *       //   "metastoreStatus": {},
     *       //   "name": "my_name",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Lakes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/lakes/my-lake',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/lakes/my-lake',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Lakes$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Create
    extends StandardParameters {
    /**
     * Required. Lake identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the customer project / location.
     */
    lakeId?: string;
    /**
     * Required. The resource name of the lake location, of the form: projects/{project_number\}/locations/{location_id\} where location_id refers to a GCP region.
     */
    parent?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Lake;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$List
    extends StandardParameters {
    /**
     * Optional. Filter request.
     */
    filter?: string;
    /**
     * Optional. Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the lake location, of the form: projects/{project_number\}/locations/{location_id\} where location_id refers to a GCP region.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Patch
    extends StandardParameters {
    /**
     * Output only. The relative resource name of the lake, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    name?: string;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Lake;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Lakes$Actions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists action resources in a lake.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.actions.list({
     *     // Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListLakeActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakeActions must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Actions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Actions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListActionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Actions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Actions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Actions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Actions$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListActionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Actions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Actions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/actions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListActionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListActionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Actions$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListLakeActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakeActions must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Lakes$Content {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.content.create({
     *     // Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "dataText": "my_dataText",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notebook": {},
     *       //   "path": "my_path",
     *       //   "sqlScript": {},
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "dataText": "my_dataText",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notebook": {},
     *   //   "path": "my_path",
     *   //   "sqlScript": {},
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Content$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Content$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Content>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Content$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Content$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Content$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Content$Create
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Content>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Content$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Content$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/content').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters
        );
      }
    }

    /**
     * Delete a content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.content.delete({
     *     // Required. The resource name of the content: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/content/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Content$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Content$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Content$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Content$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Content$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Content$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Content$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Content$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get a content resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.content.get({
     *     // Required. The resource name of the content: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/content/.*',
     *     // Optional. Specify content view to make a partial request.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "dataText": "my_dataText",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notebook": {},
     *   //   "path": "my_path",
     *   //   "sqlScript": {},
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Content$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Content$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Content>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Content$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Content$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Content$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Content$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Content>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Content$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Content$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters
        );
      }
    }

    /**
     * Gets the access control policy for a contentitem resource. A NOT_FOUND error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.Caller must have Google IAM dataplex.content.getIamPolicy permission on the resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.content.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/lakes/my-lake/content/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * List content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.content.list({
     *     // Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.
     *     filter: 'placeholder-value',
     *     // Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "content": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Content$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Content$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListContentResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Content$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Content$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Content$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Content$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListContentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Content$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Content$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/content').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListContentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListContentResponse>(
          parameters
        );
      }
    }

    /**
     * Update a content. Only supports full resource update.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.content.patch({
     *     // Output only. The relative resource name of the content, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/content/.*',
     *     // Required. Mask of fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "dataText": "my_dataText",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notebook": {},
     *       //   "path": "my_path",
     *       //   "sqlScript": {},
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "dataText": "my_dataText",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notebook": {},
     *   //   "path": "my_path",
     *   //   "sqlScript": {},
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Content$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Lakes$Content$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Content>;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Content$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Content$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Content$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Content$Patch
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Content>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Content$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Content$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters
        );
      }
    }

    /**
     * Sets the access control policy on the specified contentitem resource. Replaces any existing policy.Caller must have Google IAM dataplex.content.setIamPolicy permission on the resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.content.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/lakes/my-lake/content/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a NOT_FOUND error is not returned).A caller is not required to have Google IAM permission to make this request.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.content.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/content/.*',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Content$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}
     */
    parent?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Content;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Content$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the content: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Content$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the content: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     */
    name?: string;
    /**
     * Optional. Specify content view to make a partial request.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Content$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Content$List
    extends StandardParameters {
    /**
     * Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.
     */
    filter?: string;
    /**
     * Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Content$Patch
    extends StandardParameters {
    /**
     * Output only. The relative resource name of the content, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     */
    name?: string;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Content;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Content$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Content$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Lakes$Contentitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.contentitems.create({
     *     // Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "dataText": "my_dataText",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notebook": {},
     *       //   "path": "my_path",
     *       //   "sqlScript": {},
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "dataText": "my_dataText",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notebook": {},
     *   //   "path": "my_path",
     *   //   "sqlScript": {},
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Contentitems$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Content>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Contentitems$Create
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Content>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Contentitems$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Contentitems$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contentitems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters
        );
      }
    }

    /**
     * Delete a content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.contentitems.delete({
     *     // Required. The resource name of the content: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/contentitems/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Contentitems$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Contentitems$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Contentitems$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Contentitems$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get a content resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.contentitems.get({
     *     // Required. The resource name of the content: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/contentitems/.*',
     *     // Optional. Specify content view to make a partial request.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "dataText": "my_dataText",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notebook": {},
     *   //   "path": "my_path",
     *   //   "sqlScript": {},
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Contentitems$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Content>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Contentitems$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Content>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Contentitems$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Contentitems$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters
        );
      }
    }

    /**
     * Gets the access control policy for a contentitem resource. A NOT_FOUND error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.Caller must have Google IAM dataplex.content.getIamPolicy permission on the resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.contentitems.getIamPolicy(
     *     {
     *       // Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/contentitems/.*',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * List content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.contentitems.list({
     *     // Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.
     *     filter: 'placeholder-value',
     *     // Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "content": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Contentitems$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListContentResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Contentitems$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListContentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListContentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Contentitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Contentitems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/contentitems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListContentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListContentResponse>(
          parameters
        );
      }
    }

    /**
     * Update a content. Only supports full resource update.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.contentitems.patch({
     *     // Output only. The relative resource name of the content, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/contentitems/.*',
     *     // Required. Mask of fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "dataText": "my_dataText",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "notebook": {},
     *       //   "path": "my_path",
     *       //   "sqlScript": {},
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "dataText": "my_dataText",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notebook": {},
     *   //   "path": "my_path",
     *   //   "sqlScript": {},
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Lakes$Contentitems$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Content>;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Contentitems$Patch
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Content>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Content>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Contentitems$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Contentitems$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Content>(
          parameters
        );
      }
    }

    /**
     * Sets the access control policy on the specified contentitem resource. Replaces any existing policy.Caller must have Google IAM dataplex.content.setIamPolicy permission on the resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.contentitems.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/contentitems/.*',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a NOT_FOUND error is not returned).A caller is not required to have Google IAM permission to make this request.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.contentitems.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/contentitems/.*',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Contentitems$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}
     */
    parent?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Content;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Contentitems$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the content: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Contentitems$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the content: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     */
    name?: string;
    /**
     * Optional. Specify content view to make a partial request.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Contentitems$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Contentitems$List
    extends StandardParameters {
    /**
     * Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.
     */
    filter?: string;
    /**
     * Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Contentitems$Patch
    extends StandardParameters {
    /**
     * Output only. The relative resource name of the content, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/content/{content_id\}
     */
    name?: string;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Content;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Contentitems$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Contentitems$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Lakes$Environments {
    context: APIRequestContext;
    sessions: Resource$Projects$Locations$Lakes$Environments$Sessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.sessions =
        new Resource$Projects$Locations$Lakes$Environments$Sessions(
          this.context
        );
    }

    /**
     * Create an environment resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.environments.create({
     *     // Required. Environment identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the lake.
     *     environmentId: 'placeholder-value',
     *     // Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}.
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "endpoints": {},
     *       //   "infrastructureSpec": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "sessionSpec": {},
     *       //   "sessionStatus": {},
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/environments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Delete the environment resource. All the child resources must have been deleted before environment deletion can be initiated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.environments.delete({
     *     // Required. The resource name of the environment: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/environments/{environment_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/environments/my-environment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Get environment resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.environments.get({
     *     // Required. The resource name of the environment: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/environments/{environment_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/environments/my-environment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "endpoints": {},
     *   //   "infrastructureSpec": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "sessionSpec": {},
     *   //   "sessionStatus": {},
     *   //   "state": "my_state",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Environment>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Environment>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Environment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Environment>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Environment>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Environment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Environment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Environment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Environment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Environment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Environment>(
          parameters
        );
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.environments.getIamPolicy(
     *     {
     *       // Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/environments/my-environment',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists environments under the given lake.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.environments.list({
     *     // Optional. Filter request.
     *     filter: 'placeholder-value',
     *     // Optional. Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. Maximum number of environments to return. The service may return fewer than this value. If unspecified, at most 10 environments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListEnvironments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEnvironments must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}.
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "environments": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Environments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Environments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Environments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Environments$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/environments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListEnvironmentsResponse>(
          parameters
        );
      }
    }

    /**
     * Update the environment resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.environments.patch({
     *     // Output only. The relative resource name of the environment, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/environment/{environment_id\}
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/environments/my-environment',
     *     // Required. Mask of fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "endpoints": {},
     *       //   "infrastructureSpec": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "sessionSpec": {},
     *       //   "sessionStatus": {},
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.environments.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/environments/my-environment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.environments.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/environments/my-environment',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Environments$Create
    extends StandardParameters {
    /**
     * Required. Environment identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the lake.
     */
    environmentId?: string;
    /**
     * Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    parent?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Environment;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Environments$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the environment: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/environments/{environment_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Environments$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the environment: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/environments/{environment_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Environments$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Environments$List
    extends StandardParameters {
    /**
     * Optional. Filter request.
     */
    filter?: string;
    /**
     * Optional. Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of environments to return. The service may return fewer than this value. If unspecified, at most 10 environments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListEnvironments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEnvironments must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent lake: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Environments$Patch
    extends StandardParameters {
    /**
     * Output only. The relative resource name of the environment, of the form: projects/{project_id\}/locations/{location_id\}/lakes/{lake_id\}/environment/{environment_id\}
     */
    name?: string;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Environment;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Environments$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Environments$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Lakes$Environments$Sessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists session resources in an environment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.environments.sessions.list({
     *       // Optional. Filter request. The following mode filter is supported to return only the sessions belonging to the requester when the mode is USER and return sessions of all the users when the mode is ADMIN. When no filter is sent default to USER mode. NOTE: When the mode is ADMIN, the requester should have dataplex.environments.listAllSessions permission to list all sessions, in absence of the permission, the request fails.mode = ADMIN | USER
     *       filter: 'placeholder-value',
     *       // Optional. Maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 10 sessions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous ListSessions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListSessions must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name of the parent environment: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/environment/{environment_id\}.
     *       parent:
     *         'projects/my-project/locations/my-location/lakes/my-lake/environments/my-environment',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sessions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListSessionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListSessionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListSessionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListSessionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListSessionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListSessionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListSessionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListSessionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListSessionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListSessionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Environments$Sessions$List
    extends StandardParameters {
    /**
     * Optional. Filter request. The following mode filter is supported to return only the sessions belonging to the requester when the mode is USER and return sessions of all the users when the mode is ADMIN. When no filter is sent default to USER mode. NOTE: When the mode is ADMIN, the requester should have dataplex.environments.listAllSessions permission to list all sessions, in absence of the permission, the request fails.mode = ADMIN | USER
     */
    filter?: string;
    /**
     * Optional. Maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 10 sessions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListSessions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListSessions must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent environment: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/environment/{environment_id\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Lakes$Tasks {
    context: APIRequestContext;
    jobs: Resource$Projects$Locations$Lakes$Tasks$Jobs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobs = new Resource$Projects$Locations$Lakes$Tasks$Jobs(
        this.context
      );
    }

    /**
     * Creates a task resource within a lake.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.create({
     *     // Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *     // Required. Task identifier.
     *     taskId: 'placeholder-value',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "executionSpec": {},
     *       //   "executionStatus": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "spark": {},
     *       //   "state": "my_state",
     *       //   "triggerSpec": {},
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Tasks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tasks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Delete the task resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.delete({
     *     // Required. The resource name of the task: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/task/{task_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Tasks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Get task resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.get({
     *     // Required. The resource name of the task: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/tasks/{tasks_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "executionSpec": {},
     *   //   "executionStatus": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "spark": {},
     *   //   "state": "my_state",
     *   //   "triggerSpec": {},
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Task>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Task>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Task>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Task>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Task>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Task>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Tasks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Task>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists tasks under the given lake.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.list({
     *     // Optional. Filter request.
     *     filter: 'placeholder-value',
     *     // Optional. Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. Maximum number of tasks to return. The service may return fewer than this value. If unspecified, at most 10 tasks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tasks": [],
     *   //   "unreachableLocations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListTasksResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListTasksResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListTasksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListTasksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListTasksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListTasksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListTasksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListTasksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListTasksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Tasks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tasks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListTasksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListTasksResponse>(
          parameters
        );
      }
    }

    /**
     * Update the task resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.patch({
     *     // Output only. The relative resource name of the task, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/ tasks/{task_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task',
     *     // Required. Mask of fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "executionSpec": {},
     *       //   "executionStatus": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "spark": {},
     *       //   "state": "my_state",
     *       //   "triggerSpec": {},
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Tasks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    parent?: string;
    /**
     * Required. Task identifier.
     */
    taskId?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Task;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the task: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/task/{task_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the task: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/tasks/{tasks_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$List
    extends StandardParameters {
    /**
     * Optional. Filter request.
     */
    filter?: string;
    /**
     * Optional. Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of tasks to return. The service may return fewer than this value. If unspecified, at most 10 tasks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Patch
    extends StandardParameters {
    /**
     * Output only. The relative resource name of the task, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/ tasks/{task_id\}.
     */
    name?: string;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Task;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Lakes$Tasks$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancel jobs running for the task resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.jobs.cancel({
     *     // Required. The resource name of the job: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/task/{task_id\}/job/{job_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get job resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.jobs.get({
     *     // Required. The resource name of the job: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/tasks/{task_id\}/jobs/{job_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endTime": "my_endTime",
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "retryCount": 0,
     *   //   "service": "my_service",
     *   //   "serviceJob": "my_serviceJob",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "uid": "my_uid"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Job>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Job>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Job>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Job>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Job>(parameters);
      }
    }

    /**
     * Lists Jobs under the given task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.tasks.jobs.list({
     *     // Optional. Maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 10 jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListJobs must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent environment: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/tasks/{task_id\}.
     *     parent:
     *       'projects/my-project/locations/my-location/lakes/my-lake/tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "jobs": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListJobsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListJobsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListJobsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListJobsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListJobsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Cancel
    extends StandardParameters {
    /**
     * Required. The resource name of the job: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/task/{task_id\}/job/{job_id\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1CancelJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the job: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/tasks/{task_id\}/jobs/{job_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Tasks$Jobs$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 10 jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListJobs must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent environment: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/tasks/{task_id\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Lakes$Zones {
    context: APIRequestContext;
    actions: Resource$Projects$Locations$Lakes$Zones$Actions;
    assets: Resource$Projects$Locations$Lakes$Zones$Assets;
    entities: Resource$Projects$Locations$Lakes$Zones$Entities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.actions = new Resource$Projects$Locations$Lakes$Zones$Actions(
        this.context
      );
      this.assets = new Resource$Projects$Locations$Lakes$Zones$Assets(
        this.context
      );
      this.entities = new Resource$Projects$Locations$Lakes$Zones$Entities(
        this.context
      );
    }

    /**
     * Creates a zone resource within a lake.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.create({
     *     // Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *     // Required. Zone identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique across all lakes from all locations in a project. * Must not be one of the reserved IDs (i.e. "default", "global-temp")
     *     zoneId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetStatus": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "discoverySpec": {},
     *       //   "displayName": "my_displayName",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "resourceSpec": {},
     *       //   "state": "my_state",
     *       //   "type": "my_type",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Zones$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/zones').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a zone resource. All assets within a zone must be deleted before the zone can be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.delete({
     *     // Required. The resource name of the zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Zones$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Retrieves a zone resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.get({
     *     // Required. The resource name of the zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetStatus": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "discoverySpec": {},
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "resourceSpec": {},
     *   //   "state": "my_state",
     *   //   "type": "my_type",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Zone>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Zone>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Zone>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Zone>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Zone>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Zone>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Zone>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Zone>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Zone>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Zones$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Zone>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Zone>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists zone resources in a lake.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.list({
     *     // Optional. Filter request.
     *     filter: 'placeholder-value',
     *     // Optional. Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. Maximum number of zones to return. The service may return fewer than this value. If unspecified, at most 10 zones will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     *     parent: 'projects/my-project/locations/my-location/lakes/my-lake',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "zones": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListZonesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListZonesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListZonesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListZonesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListZonesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListZonesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListZonesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListZonesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListZonesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Zones$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/zones').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListZonesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListZonesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a zone resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.patch({
     *     // Output only. The relative resource name of the zone, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *     // Required. Mask of fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetStatus": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "discoverySpec": {},
     *       //   "displayName": "my_displayName",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "resourceSpec": {},
     *       //   "state": "my_state",
     *       //   "type": "my_type",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lakes$Zones$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Zones$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    parent?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;
    /**
     * Required. Zone identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique across all lakes from all locations in a project. * Must not be one of the reserved IDs (i.e. "default", "global-temp")
     */
    zoneId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Zone;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$List
    extends StandardParameters {
    /**
     * Optional. Filter request.
     */
    filter?: string;
    /**
     * Optional. Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of zones to return. The service may return fewer than this value. If unspecified, at most 10 zones will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent lake: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Patch
    extends StandardParameters {
    /**
     * Output only. The relative resource name of the zone, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    name?: string;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Zone;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Lakes$Zones$Actions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists action resources in a zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.actions.list({
     *     // Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListZoneActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZoneActions must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     *     parent:
     *       'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Actions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Actions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListActionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Actions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Actions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Actions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Actions$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListActionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Actions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Actions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/actions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListActionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListActionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Zones$Actions$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListZoneActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZoneActions must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Lakes$Zones$Assets {
    context: APIRequestContext;
    actions: Resource$Projects$Locations$Lakes$Zones$Assets$Actions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.actions = new Resource$Projects$Locations$Lakes$Zones$Assets$Actions(
        this.context
      );
    }

    /**
     * Creates an asset resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.assets.create({
     *     // Required. Asset identifier. This ID will be used to generate names such as table names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the zone.
     *     assetId: 'placeholder-value',
     *     // Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     *     parent:
     *       'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "discoverySpec": {},
     *       //   "discoveryStatus": {},
     *       //   "displayName": "my_displayName",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "resourceSpec": {},
     *       //   "resourceStatus": {},
     *       //   "securityStatus": {},
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes an asset resource. The referenced storage resource is detached (default) or deleted based on the associated Lifecycle policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.assets.delete({
     *     // Required. The resource name of the asset: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/assets/my-asset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Retrieves an asset resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.assets.get({
     *     // Required. The resource name of the asset: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/assets/my-asset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "discoverySpec": {},
     *   //   "discoveryStatus": {},
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "resourceSpec": {},
     *   //   "resourceStatus": {},
     *   //   "securityStatus": {},
     *   //   "state": "my_state",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Asset>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Asset>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Asset>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Asset>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Asset>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Asset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Asset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Asset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Asset>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Asset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Asset>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.assets.getIamPolicy(
     *     {
     *       // Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/assets/my-asset',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists asset resources in a zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.assets.list({
     *     // Optional. Filter request.
     *     filter: 'placeholder-value',
     *     // Optional. Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. Maximum number of asset to return. The service may return fewer than this value. If unspecified, at most 10 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListAssets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssets must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     *     parent:
     *       'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assets": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListAssetsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListAssetsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListAssetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListAssetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListAssetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListAssetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListAssetsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an asset resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.assets.patch({
     *     // Output only. The relative resource name of the asset, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/assets/my-asset',
     *     // Required. Mask of fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "discoverySpec": {},
     *       //   "discoveryStatus": {},
     *       //   "displayName": "my_displayName",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "resourceSpec": {},
     *       //   "resourceStatus": {},
     *       //   "securityStatus": {},
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.assets.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/assets/my-asset',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.zones.assets.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/assets/my-asset',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$Create
    extends StandardParameters {
    /**
     * Required. Asset identifier. This ID will be used to generate names such as table names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the zone.
     */
    assetId?: string;
    /**
     * Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    parent?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Asset;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the asset: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the asset: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$List
    extends StandardParameters {
    /**
     * Optional. Filter request.
     */
    filter?: string;
    /**
     * Optional. Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of asset to return. The service may return fewer than this value. If unspecified, at most 10 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListAssets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssets must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$Patch
    extends StandardParameters {
    /**
     * Output only. The relative resource name of the asset, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     */
    name?: string;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Asset;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Lakes$Zones$Assets$Actions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists action resources in an asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.assets.actions.list(
     *     {
     *       // Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous ListAssetActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssetActions must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name of the parent asset: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     *       parent:
     *         'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/assets/my-asset',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListActionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListActionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListActionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/actions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListActionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListActionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Zones$Assets$Actions$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListAssetActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssetActions must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent asset: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/assets/{asset_id\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Lakes$Zones$Entities {
    context: APIRequestContext;
    partitions: Resource$Projects$Locations$Lakes$Zones$Entities$Partitions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.partitions =
        new Resource$Projects$Locations$Lakes$Zones$Entities$Partitions(
          this.context
        );
    }

    /**
     * Create a metadata entity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.entities.create({
     *     // Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     *     parent:
     *       'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "asset": "my_asset",
     *       //   "catalogEntry": "my_catalogEntry",
     *       //   "compatibility": {},
     *       //   "createTime": "my_createTime",
     *       //   "dataPath": "my_dataPath",
     *       //   "dataPathPattern": "my_dataPathPattern",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "format": {},
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "schema": {},
     *       //   "system": "my_system",
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "asset": "my_asset",
     *   //   "catalogEntry": "my_catalogEntry",
     *   //   "compatibility": {},
     *   //   "createTime": "my_createTime",
     *   //   "dataPath": "my_dataPath",
     *   //   "dataPathPattern": "my_dataPathPattern",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "format": {},
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "schema": {},
     *   //   "system": "my_system",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Entity>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Entity>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/entities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Entity>(parameters);
      }
    }

    /**
     * Delete a metadata entity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.entities.delete({
     *     // Required. The etag associated with the entity, which can be retrieved with a GetEntity request.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the entity: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/entities/my-entitie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get a metadata entity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.entities.get({
     *     // Required. The resource name of the entity: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/entities/my-entitie',
     *     // Optional. Used to select the subset of entity information to return. Defaults to BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "asset": "my_asset",
     *   //   "catalogEntry": "my_catalogEntry",
     *   //   "compatibility": {},
     *   //   "createTime": "my_createTime",
     *   //   "dataPath": "my_dataPath",
     *   //   "dataPathPattern": "my_dataPathPattern",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "format": {},
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "schema": {},
     *   //   "system": "my_system",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Entity>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Entity>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Entity>(parameters);
      }
    }

    /**
     * List metadata entities in a zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.entities.list({
     *     // Optional. The following filter parameters can be added to the URL to limit the entities returned by the API: Entity ID: ?filter="id=entityID" Asset ID: ?filter="asset=assetID" Data path ?filter="data_path=gs://my-bucket" Is HIVE compatible: ?filter="hive_compatible=true" Is BigQuery compatible: ?filter="bigquery_compatible=true"
     *     filter: 'placeholder-value',
     *     // Optional. Maximum number of entities to return. The service may return fewer than this value. If unspecified, 100 entities will be returned by default. The maximum value is 500; larger values will will be truncated to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListEntities call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEntities must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     *     parent:
     *       'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone',
     *     // Required. Specify the entity view to make a partial list request.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListEntitiesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEntitiesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEntitiesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEntitiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEntitiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEntitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEntitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListEntitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListEntitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/entities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListEntitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListEntitiesResponse>(
          parameters
        );
      }
    }

    /**
     * Update a metadata entity. Only supports full resource update.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.lakes.zones.entities.update({
     *     // Output only. The resource name of the entity, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{id\}.
     *     name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/entities/my-entitie',
     *     // Optional. Only validate the request, but do not perform mutations. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "asset": "my_asset",
     *       //   "catalogEntry": "my_catalogEntry",
     *       //   "compatibility": {},
     *       //   "createTime": "my_createTime",
     *       //   "dataPath": "my_dataPath",
     *       //   "dataPathPattern": "my_dataPathPattern",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "format": {},
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "schema": {},
     *       //   "system": "my_system",
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "asset": "my_asset",
     *   //   "catalogEntry": "my_catalogEntry",
     *   //   "compatibility": {},
     *   //   "createTime": "my_createTime",
     *   //   "dataPath": "my_dataPath",
     *   //   "dataPathPattern": "my_dataPathPattern",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "format": {},
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "schema": {},
     *   //   "system": "my_system",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Entity>;
    update(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Entity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Entity>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Entity>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    parent?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Entity;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$Delete
    extends StandardParameters {
    /**
     * Required. The etag associated with the entity, which can be retrieved with a GetEntity request.
     */
    etag?: string;
    /**
     * Required. The resource name of the entity: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the entity: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}.
     */
    name?: string;
    /**
     * Optional. Used to select the subset of entity information to return. Defaults to BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$List
    extends StandardParameters {
    /**
     * Optional. The following filter parameters can be added to the URL to limit the entities returned by the API: Entity ID: ?filter="id=entityID" Asset ID: ?filter="asset=assetID" Data path ?filter="data_path=gs://my-bucket" Is HIVE compatible: ?filter="hive_compatible=true" Is BigQuery compatible: ?filter="bigquery_compatible=true"
     */
    filter?: string;
    /**
     * Optional. Maximum number of entities to return. The service may return fewer than this value. If unspecified, 100 entities will be returned by default. The maximum value is 500; larger values will will be truncated to 500.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListEntities call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEntities must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}.
     */
    parent?: string;
    /**
     * Required. Specify the entity view to make a partial list request.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$Update
    extends StandardParameters {
    /**
     * Output only. The resource name of the entity, of the form: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{id\}.
     */
    name?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Entity;
  }

  export class Resource$Projects$Locations$Lakes$Zones$Entities$Partitions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a metadata partition.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.zones.entities.partitions.create({
     *       // Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}.
     *       parent:
     *         'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/entities/my-entitie',
     *       // Optional. Only validate the request, but do not perform mutations. The default is false.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "etag": "my_etag",
     *         //   "location": "my_location",
     *         //   "name": "my_name",
     *         //   "values": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "values": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Partition>;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Partition>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/partitions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Partition>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Partition>(
          parameters
        );
      }
    }

    /**
     * Delete a metadata partition.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.zones.entities.partitions.delete({
     *       // Optional. The etag associated with the partition.
     *       etag: 'placeholder-value',
     *       // Required. The resource name of the partition. format: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}/partitions/{partition_value_path\}. The {partition_value_path\} segment consists of an ordered sequence of partition values separated by "/". All values must be provided.
     *       name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/entities/my-entitie/partitions/.*',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get a metadata partition of an entity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.zones.entities.partitions.get({
     *       // Required. The resource name of the partition: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}/partitions/{partition_value_path\}. The {partition_value_path\} segment consists of an ordered sequence of partition values separated by "/". All values must be provided.
     *       name: 'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/entities/my-entitie/partitions/.*',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "location": "my_location",
     *   //   "name": "my_name",
     *   //   "values": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1Partition>;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1Partition>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1Partition>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1Partition>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1Partition>(
          parameters
        );
      }
    }

    /**
     * List metadata partitions of an entity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await dataplex.projects.locations.lakes.zones.entities.partitions.list({
     *       // Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: logic operators: AND, OR comparison operators: <, \>, \>=, <= ,=, != LIKE operators: The right hand of a LIKE operator supports "." and "*" for wildcard searches, for example "value1 LIKE ".*oo.*" parenthetical grouping: ( )Sample filter expression: `?filter="key1 < value1 OR key2 \> value2"Notes: Keys to the left of operators are case insensitive. Partition results are sorted first by creation time, then by lexicographic order. Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.
     *       filter: 'placeholder-value',
     *       // Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token received from a previous ListPartitions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListPartitions must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name of the parent entity: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}.
     *       parent:
     *         'projects/my-project/locations/my-location/lakes/my-lake/zones/my-zone/entities/my-entitie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "partitions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDataplexV1ListPartitionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListPartitionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListPartitionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListPartitionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDataplexV1ListPartitionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListPartitionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListPartitionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDataplexV1ListPartitionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDataplexV1ListPartitionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/partitions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDataplexV1ListPartitionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDataplexV1ListPartitionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the parent zone: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}.
     */
    parent?: string;
    /**
     * Optional. Only validate the request, but do not perform mutations. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDataplexV1Partition;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Delete
    extends StandardParameters {
    /**
     * Optional. The etag associated with the partition.
     */
    etag?: string;
    /**
     * Required. The resource name of the partition. format: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}/partitions/{partition_value_path\}. The {partition_value_path\} segment consists of an ordered sequence of partition values separated by "/". All values must be provided.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the partition: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}/partitions/{partition_value_path\}. The {partition_value_path\} segment consists of an ordered sequence of partition values separated by "/". All values must be provided.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lakes$Zones$Entities$Partitions$List
    extends StandardParameters {
    /**
     * Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: logic operators: AND, OR comparison operators: <, \>, \>=, <= ,=, != LIKE operators: The right hand of a LIKE operator supports "." and "*" for wildcard searches, for example "value1 LIKE ".*oo.*" parenthetical grouping: ( )Sample filter expression: `?filter="key1 < value1 OR key2 \> value2"Notes: Keys to the left of operators are case insensitive. Partition results are sorted first by creation time, then by lexicographic order. Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.
     */
    filter?: string;
    /**
     * Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListPartitions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListPartitions must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent entity: projects/{project_number\}/locations/{location_id\}/lakes/{lake_id\}/zones/{zone_id\}/entities/{entity_id\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/x/operations. To override the binding, API services can add a binding such as "/v1/{name=users/x\}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dataplex.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dataplex = google.dataplex('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dataplex.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dataplex.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
