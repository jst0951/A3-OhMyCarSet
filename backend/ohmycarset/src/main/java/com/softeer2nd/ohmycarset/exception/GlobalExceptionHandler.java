package com.softeer2nd.ohmycarset.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.http.HttpStatus;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<CustomErrorResponse> handleCustomException(CustomException ex) {
        // 예외 처리 로직을 구현하여 CustomErrorResponse 객체를 반환합니다.
        CustomErrorResponse errorResponse = new CustomErrorResponse(ex.getStatusCode().value(), ex.getJsonMessage());
        return ResponseEntity.status(ex.getStatusCode()).body(errorResponse);
    }
}
