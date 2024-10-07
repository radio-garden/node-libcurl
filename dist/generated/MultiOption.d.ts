/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @public
 */
export interface MultiOption {
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE.html](https://curl.haxx.se/libcurl/c/CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE.html)
     */
    readonly CHUNK_LENGTH_PENALTY_SIZE: 'CHUNK_LENGTH_PENALTY_SIZE';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE.html](https://curl.haxx.se/libcurl/c/CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE.html)
     */
    readonly CONTENT_LENGTH_PENALTY_SIZE: 'CONTENT_LENGTH_PENALTY_SIZE';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_CONCURRENT_STREAMS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_CONCURRENT_STREAMS.html)
     */
    readonly MAX_CONCURRENT_STREAMS: 'MAX_CONCURRENT_STREAMS';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_HOST_CONNECTIONS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_HOST_CONNECTIONS.html)
     */
    readonly MAX_HOST_CONNECTIONS: 'MAX_HOST_CONNECTIONS';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_PIPELINE_LENGTH.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_PIPELINE_LENGTH.html)
     */
    readonly MAX_PIPELINE_LENGTH: 'MAX_PIPELINE_LENGTH';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_TOTAL_CONNECTIONS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_TOTAL_CONNECTIONS.html)
     */
    readonly MAX_TOTAL_CONNECTIONS: 'MAX_TOTAL_CONNECTIONS';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_MAXCONNECTS.html](https://curl.haxx.se/libcurl/c/CURLMOPT_MAXCONNECTS.html)
     */
    readonly MAXCONNECTS: 'MAXCONNECTS';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING.html)
     */
    readonly PIPELINING: 'PIPELINING';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SERVER_BL.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SERVER_BL.html)
     */
    readonly PIPELINING_SERVER_BL: 'PIPELINING_SERVER_BL';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SITE_BL.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SITE_BL.html)
     */
    readonly PIPELINING_SITE_BL: 'PIPELINING_SITE_BL';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHDATA.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHDATA.html)
     */
    readonly PUSHDATA: 'PUSHDATA';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHFUNCTION.html)
     */
    readonly PUSHFUNCTION: 'PUSHFUNCTION';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETDATA.html](https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETDATA.html)
     */
    readonly SOCKETDATA: 'SOCKETDATA';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETFUNCTION.html)
     */
    readonly SOCKETFUNCTION: 'SOCKETFUNCTION';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERDATA.html](https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERDATA.html)
     */
    readonly TIMERDATA: 'TIMERDATA';
    /**
     * Official libcurl documentation: : [https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERFUNCTION.html](https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERFUNCTION.html)
     */
    readonly TIMERFUNCTION: 'TIMERFUNCTION';
}
/**
 * @public
 */
export type MultiOptionName = 'CHUNK_LENGTH_PENALTY_SIZE' | 'CONTENT_LENGTH_PENALTY_SIZE' | 'MAX_CONCURRENT_STREAMS' | 'MAX_HOST_CONNECTIONS' | 'MAX_PIPELINE_LENGTH' | 'MAX_TOTAL_CONNECTIONS' | 'MAXCONNECTS' | 'PIPELINING' | 'PIPELINING_SERVER_BL' | 'PIPELINING_SITE_BL' | 'PUSHDATA' | 'PUSHFUNCTION' | 'SOCKETDATA' | 'SOCKETFUNCTION' | 'TIMERDATA' | 'TIMERFUNCTION';
//# sourceMappingURL=MultiOption.d.ts.map