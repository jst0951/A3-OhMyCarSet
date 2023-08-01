package com.softeer2nd.ohmycarset.exception;

import org.springframework.http.HttpStatus;

public class CustomException extends RuntimeException {
    private final HttpStatus statusCode;
    private final String jsonMessage;

    public CustomException(HttpStatus statusCode, String jsonMessage) {
        this.statusCode = statusCode;
        this.jsonMessage = jsonMessage;
    }

    public HttpStatus getStatusCode() {
        return statusCode;
    }

    public String getJsonMessage() {
        return jsonMessage;
    }
}
