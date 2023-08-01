package com.softeer2nd.ohmycarset.exception;

public class CustomErrorResponse {
    private final int code;
    private final String error;

    public CustomErrorResponse(int code, String error) {
        this.code = code;
        this.error = error;
    }

    public int getCode() {
        return code;
    }

    public String getError() {
        return error;
    }
}
