package com.amazon.ata.horizonal.exceptions;

import java.io.Serial;

public class NonSufficientAccountBalance extends RuntimeException {
    @Serial
    private static final long serialVersionUID = 1L;

    public NonSufficientAccountBalance(String message){
        super(message);
    }
}
