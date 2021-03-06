// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'tableservicetestdata0\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2e2fde42-0002-001a-0ebb-1b15c8000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'tableservicetestdata0\')',
  date: 'Wed, 26 Nov 2014 07:22:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/tableservicetestdata0', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  etag: 'W/"datetime\'2014-11-26T07%3A22%3A53.5399998Z\'"',
  location: 'https://xplat.table.core.windows.net/tableservicetestdata0(PartitionKey=\'%E2%92%88%E2%91%A0%E2%85%AB%E3%84%A8%E3%84%A9\',RowKey=\'%E2%92%88%E2%91%A0%E2%85%AB%E3%84%A8%E3%84%A9\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '525e58fa-0002-0023-29fb-a9b265000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/tableservicetestdata0(PartitionKey=\'%E2%92%88%E2%91%A0%E2%85%AB%E3%84%A8%E3%84%A9\',RowKey=\'%E2%92%88%E2%91%A0%E2%85%AB%E3%84%A8%E3%84%A9\')',
  date: 'Wed, 26 Nov 2014 07:22:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tableservicetestdata0(PartitionKey=%27%E2%92%88%E2%91%A0%E2%85%AB%E3%84%A8%E3%84%A9%27,RowKey=%27%E2%92%88%E2%91%A0%E2%85%AB%E3%84%A8%E3%84%A9%27)')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tableservicetestdata0/@Element\",\"PartitionKey\":\"\\u2488\\u2460\\u216b\\u3128\\u3129\",\"RowKey\":\"\\u2488\\u2460\\u216b\\u3128\\u3129\",\"Timestamp\":\"2014-11-26T07:22:53.5399998Z\",\"Value\":\"test\"}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  etag: 'W/"datetime\'2014-11-26T07%3A22%3A53.5399998Z\'"',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a1d5d227-0002-0047-019d-0a5b96000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 07:22:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/Tables?%24filter=TableName%20ge%20%27tableservice%27%20and%20TableName%20lt%20%27tableservice%7B%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#Tables\",\"value\":[{\"TableName\":\"tableservicetestdata0\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b2e31671-0002-0000-74f3-266a93000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 07:22:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27tableservicetestdata0%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'baced8ff-0002-001d-2833-8bdbf9000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 07:22:55 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'tableservicetestdata1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '991ec4b1-0002-0025-3b86-c8557b000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'tableservicetestdata1\')',
  date: 'Wed, 26 Nov 2014 07:22:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/tableservicetestdata1', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  etag: 'W/"datetime\'2014-11-26T07%3A22%3A58.0010353Z\'"',
  location: 'https://xplat.table.core.windows.net/tableservicetestdata1(PartitionKey=\'part1\',RowKey=\'row1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '50c8b1ef-0002-002f-697b-4e34af000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/tableservicetestdata1(PartitionKey=\'part1\',RowKey=\'row1\')',
  date: 'Wed, 26 Nov 2014 07:22:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tableservicetestdata1')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tableservicetestdata1\",\"value\":[{\"PartitionKey\":\"part1\",\"RowKey\":\"row1\",\"Timestamp\":\"2014-11-26T07:22:58.0010353Z\",\"field\":\"my field\",\"otherfield\":\"my other field\",\"otherprops\":\"my properties\",\"gb18030\":\"\\ud846\\udf01\\ud843\\udedd\\ud864\\udcbb\\u8028\\u9b32, \\u345c\\u4291\\u34e3\\u47c9\\u42ee\\u4993, \\u1868\\u1825\\u1819\\u1870\\u1887\\u1818\\u1836, \\u0fcb\\u0f47\\u0fc2\\u0f7c\\u0f07\\u0f92, \\ua0cc\\ua217\\ua209\\ua2fd, Uighur, \\u1957\\u1969\\u196c\\u195c\\u1966 \"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '769d2a21-0002-000f-314b-4b4ea8000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 07:22:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/Tables?%24filter=TableName%20ge%20%27tableservice%27%20and%20TableName%20lt%20%27tableservice%7B%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#Tables\",\"value\":[{\"TableName\":\"tableservicetestdata1\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e836bb02-0002-0041-23b4-a6d48e000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 07:22:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27tableservicetestdata1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '31c064a8-0002-000d-1e4c-72ce68000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 07:23:00 GMT' });
 return result; }]];