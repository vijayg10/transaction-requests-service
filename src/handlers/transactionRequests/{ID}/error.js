'use strict'

const Enum = require('@mojaloop/central-services-shared').Enum
const transactionRequest = require('../../../domain/transactionRequests/transactionRequests')

/**
 * Operations on /transactionRequests/{ID}/error
 */
module.exports = {
  /**
     * summary: TransactionRequestsErrorByID
     * description: If the server is unable to find or create a transaction request, or another processing error occurs, the error callback PUT /transactionRequests/&lt;ID&gt;/error is used. The &lt;ID&gt; in the URI should contain the transactionRequestId that was used for the creation of the transaction request, or the &lt;ID&gt; that was used in the GET /transactionRequests/&lt;ID&gt;.
     * parameters: ID, body, content-length, content-type, date, x-forwarded-for, fspiop-source, fspiop-destination, fspiop-encryption, fspiop-signature, fspiop-uri, fspiop-http-method
     * produces: application/json
     * responses: 200, 400, 401, 403, 404, 405, 406, 501, 503
     */
  put: function (request, h) {
    transactionRequest.forwardTransactionRequestError(request.headers, request.headers['fspiop-destination'], Enum.EndPoints.FspEndpointTemplates.TRANSACTION_REQUEST_PUT_ERROR, Enum.Http.RestMethods.PUT, request.params.ID, request.payload)
    return h.response().code(Enum.Http.ReturnCodes.OK.CODE)
  }
}
